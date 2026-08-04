import { NextResponse } from "next/server";
import { PUBLICATIONS_TRACKER_API_URL } from "@/lib/config";

const API_URL = PUBLICATIONS_TRACKER_API_URL || "https://publications.fabric-testbed.net/api/publications";
const ALLOWED_ORIGIN = new URL(API_URL).origin;
const MAX_PAGES = 50;
const MAX_RESULTS = 5000;

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
    let pages = 0;

    while (url) {
      // Validate that the next URL is from the expected origin
      if (!url.startsWith(ALLOWED_ORIGIN)) break;
      if (++pages > MAX_PAGES) break;

      const res = await fetch(url, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(15_000),
      });
      if (!res.ok) {
        return NextResponse.json({ error: `API returned ${res.status}` }, { status: res.status });
      }
      const data: ApiResponse = await res.json();
      allResults.push(...data.results);
      if (allResults.length >= MAX_RESULTS) break;
      url = data.next;
    }

    return NextResponse.json({ count: allResults.length, results: allResults });
  } catch {
    return NextResponse.json({ error: "Failed to reach publications API" }, { status: 502 });
  }
}
