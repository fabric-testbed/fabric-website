import { NextResponse } from "next/server";

const API_URL = "https://publications.fabric-testbed.net/api/publications";

export const revalidate = 3600; // cache 1 hour

export async function GET() {
  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      return NextResponse.json({ error: `API returned ${res.status}` }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to reach publications API" }, { status: 502 });
  }
}
