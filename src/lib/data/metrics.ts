import { CORE_API_URL, ORCHESTRATOR_API_URL, PUBLICATIONS_TRACKER_API_URL } from "@/lib/config";
import { Stat } from "./stats";

export async function fetchLiveMetrics(): Promise<Stat[] | null> {
  try {
    const [coreRes, orchRes, pubRes] = await Promise.all([
      fetch(`${CORE_API_URL}/core-api-metrics/overview`, { next: { revalidate: 3600 } }),
      fetch(`${ORCHESTRATOR_API_URL}/metrics/overview`, { next: { revalidate: 3600 } }),
      fetch(PUBLICATIONS_TRACKER_API_URL, { next: { revalidate: 3600 } }),
    ]);

    if (!coreRes.ok || !orchRes.ok || !pubRes.ok) return null;

    const [coreData, orchData, pubData] = await Promise.all([
      coreRes.json(),
      orchRes.json(),
      pubRes.json(),
    ]);

    const core = coreData.results[0];
    const orch = orchData.results[0];
    const fmt = (n: number) => Intl.NumberFormat("en-US").format(n);

    return [
      {
        value: fmt(orch.slices.active_cumulative + orch.slices.non_active_cumulative),
        label: "Total Slices",
        detail: "Network slices created since launch",
      },
      {
        value: fmt(core.users.active_cumulative),
        label: "Total Users",
        detail: "The number of individuals signed up as FABRIC users",
      },
      {
        value: String(pubData.count),
        label: "FABRIC User Publications",
        detail: "Peer-reviewed papers and reports using FABRIC",
      },
      {
        value: fmt(orch.slices.active_cumulative),
        label: "Active Slices",
        detail: "Slices currently running on the testbed",
      },
      {
        value: fmt(core.projects.active_cumulative + core.projects.non_active_cumulative),
        label: "Total Projects",
        detail: "Research projects that have used FABRIC",
      },
    ];
  } catch {
    return null;
  }
}
