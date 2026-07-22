import { NextRequest, NextResponse } from "next/server";

/**
 * GitHub OAuth flow for Decap CMS.
 *
 * GET /api/auth          → redirects to GitHub authorization page
 * GET /api/auth?code=... → exchanges code for token, posts it back to CMS
 *
 * Required env vars (set in Vercel dashboard):
 *   GITHUB_OAUTH_CLIENT_ID
 *   GITHUB_OAUTH_CLIENT_SECRET
 */

const CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID ?? "";
const CLIENT_SECRET = process.env.GITHUB_OAUTH_CLIENT_SECRET ?? "";
const SCOPE = "repo,user";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  // Step 1: No code yet → redirect user to GitHub
  if (!code) {
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      scope: SCOPE,
    });
    return NextResponse.redirect(
      `https://github.com/login/oauth/authorize?${params.toString()}`
    );
  }

  // Step 2: GitHub redirected back with a code → exchange for access token
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
  const html = `<!doctype html>
<html><body><script>
(function() {
  function recvMsg(e) {
    console.log("postMessage received", e.data);
    window.opener.postMessage(
      'authorization:github:success:${JSON.stringify({ token: tokenData.access_token, provider: "github" })}',
      e.origin
    );
    window.removeEventListener("message", recvMsg);
  }
  window.addEventListener("message", recvMsg, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script></body></html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}
