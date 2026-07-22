import { NextResponse } from "next/server";

const API_URL = "https://publications.fabric-testbed.net/api/publications";

export const revalidate = 3600; // cache 1 hour

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: unknown[];
}

export async function GET() {
  try {
    const allResults: unknown[] = [];
    let url: string | null = API_URL;

    while (url) {
      const res = await fetch(url, {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        return NextResponse.json({ error: `API returned ${res.status}` }, { status: res.status });
      }
      const data: ApiResponse = await res.json();
      allResults.push(...data.results);
      url = data.next;
    }

    return NextResponse.json({ count: allResults.length, results: allResults });
  } catch {
    return NextResponse.json({ error: "Failed to reach publications API" }, { status: 502 });
  }
}
