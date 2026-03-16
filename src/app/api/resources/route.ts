import { NextResponse } from "next/server";

const ORCHESTRATOR_URL =
  "https://orchestrator.fabric-testbed.net/portalresources?graph_format=JSON_NODELINK&level=1";

export const revalidate = 60; // cache for 1 minute

export async function GET() {
  try {
    const res = await fetch(ORCHESTRATOR_URL, {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Orchestrator returned ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to reach FABRIC orchestrator" },
      { status: 502 }
    );
  }
}
