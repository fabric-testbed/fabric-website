import { stats } from "@/lib/data/stats";
import { fetchLiveMetrics } from "@/lib/data/metrics";
import { ByTheNumbersClient } from "./ByTheNumbersClient";

export async function ByTheNumbersSection() {
  const liveStats = await fetchLiveMetrics();
  const displayStats = liveStats ?? stats;
  return <ByTheNumbersClient stats={displayStats} />;
}
