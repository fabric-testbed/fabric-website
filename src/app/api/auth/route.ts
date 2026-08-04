import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * GitHub OAuth flow for Decap CMS.
 *
 * GET /api/auth          → redirects to GitHub authorization page
 * GET /api/auth/callback → exchanges code for token, posts it back to CMS
 *
 * Required env vars (set in Vercel dashboard):
 *   GITHUB_OAUTH_CLIENT_ID
 *   GITHUB_OAUTH_CLIENT_SECRET
 *   CMS_ORIGIN  (e.g. https://whatisfabric.net — the origin allowed to receive tokens)
 */

const CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID ?? "";
const CLIENT_SECRET = process.env.GITHUB_OAUTH_CLIENT_SECRET ?? "";
const CMS_ORIGIN = process.env.CMS_ORIGIN ?? "";
// Only request public_repo — enough for Decap CMS to read/write content
const SCOPE = "public_repo";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const returnedState = req.nextUrl.searchParams.get("state");

  // Step 1: No code yet → generate CSRF state and redirect to GitHub
  if (!code) {
    const state = crypto.randomBytes(24).toString("hex");

    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      scope: SCOPE,
      state,
      redirect_uri: `${req.nextUrl.origin}/api/auth`,
    });

    const response = NextResponse.redirect(
      `https://github.com/login/oauth/authorize?${params.toString()}`
    );
    // Store state in a short-lived, secure cookie for verification on callback
    response.cookies.set("oauth_state", state, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 600, // 10 minutes
      path: "/api/auth",
    });
    return response;
  }

  // Step 2: GitHub redirected back with code + state → verify state
  const storedState = req.cookies.get("oauth_state")?.value;
  if (!returnedState || !storedState || returnedState !== storedState) {
    return new NextResponse("Invalid OAuth state — possible CSRF attack", {
      status: 403,
    });
  }

  // Exchange code for access token
  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = (await tokenRes.json()) as {
    access_token?: string;
    error?: string;
  };

  if (!tokenData.access_token) {
    return new NextResponse("OAuth token exchange failed", { status: 401 });
  }

  // Step 3: Post the token back to Decap CMS via postMessage
  // - postMessage targets the exact CMS_ORIGIN, not e.origin or "*"
  // - Only responds to messages from window.opener at the allowed origin
  const escapedToken = JSON.stringify({
    token: tokenData.access_token,
    provider: "github",
  }).replace(/</g, "\\u003c");
  const allowedOrigin = JSON.stringify(CMS_ORIGIN);

  const html = `<!doctype html>
<html><body><script>
(function() {
  var ALLOWED = ${allowedOrigin};
  function recvMsg(e) {
    if (e.origin !== ALLOWED) return;
    if (e.source !== window.opener) return;
    window.opener.postMessage(
      'authorization:github:success:${escapedToken}',
      ALLOWED
    );
    window.removeEventListener("message", recvMsg);
  }
  window.addEventListener("message", recvMsg, false);
  window.opener.postMessage("authorizing:github", ALLOWED);
})();
</script></body></html>`;

  const response = new NextResponse(html, {
    headers: {
      "Content-Type": "text/html",
      "Cache-Control": "no-store",
    },
  });
  // Clear the state cookie
  response.cookies.delete("oauth_state");
  return response;
}
