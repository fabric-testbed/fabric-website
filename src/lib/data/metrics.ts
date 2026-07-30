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
        detail: "A slice is a collection of logically-related resources—or slivers—used in one or more experiments. This number represents the total amount of slices created to date on FABRIC.",
      },
      {
        value: fmt(core.users.active_cumulative),
        label: "Total Users",
        detail: "The total number of individuals signed up as FABRIC Users.",
      },
      {
        value: String(pubData.count),
        label: "FABRIC User Publications",
        detail: "The total number of papers and publications that reference the use of FABRIC.",
      },
      {
        value: fmt(orch.slices.active_cumulative),
        label: "Active Slices",
        detail: "A slice is a collection of logically-related resources—or slivers—used in one or more experiments. This number represents the current amount of slices that are actively being used in a project.",
      },
      {
        value: fmt(core.projects.active_cumulative + core.projects.non_active_cumulative),
        label: "Total Projects",
        detail: "A project is the term used to represent a logical grouping of users working on one or more related experiments over a period of time. Rights to resources are set at the project level.",
      },
    ];
  } catch {
    return null;
  }
}
