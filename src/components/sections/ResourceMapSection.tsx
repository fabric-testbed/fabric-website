"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { TopoSite } from "@/components/ui/FabricTopomap";
const FabricTopomap = dynamic(
  () => import("@/components/ui/FabricTopomap").then((m) => m.FabricTopomap),
  { ssr: false }
);

const ACRONYM_TO_SHORT: Record<string, string> = {
  RENC:"RENCI", UKY:"UKY", LBNL:"LBNL", STAR:"StarLight", MAX:"MAX",
  TACC:"TACC", MICH:"UMich", MASS:"UMass", UTAH:"Utah", NCSA:"NCSA",
  WASH:"Washington", DALL:"Dallas", SALT:"Salt Lake City", UCSD:"UCSD",
  GPN:"GPN", FIU:"FIU", CLEM:"Clemson", GATECH:"GaTech", LOSA:"Los Angeles",
  NEWY:"New York", KANS:"Kansas City", ATLA:"Atlanta", SEAT:"Seattle",
  PRIN:"Princeton", INDI:"IU", PSC:"PSC", RUTG:"Rutgers", SRI:"SRI",
  CERN:"CERN", BRIST:"University of Bristol", AMST:"University of Amsterdam",
  TOKY:"University of Tokyo", HAWI:"HAWI", EDC:"EDC", EDUKY:"EDUKY",
};

const COMPONENT_TYPES = ["GPU","NVME","SmartNIC","SharedNIC","FPGA","Switch"];
const CAPACITY_KEYS: Record<string, string> = { Core:"core", RAM:"ram", Disk:"disk" };

function parseSites(data: any): TopoSite[] {
  const elements = JSON.parse(data.model);
  const nodes: any[] = elements.nodes;
  const links: any[] = elements.links || elements.edges || [];
  const sites: TopoSite[] = [];

  for (const node of nodes) {
    if (node.Class !== "CompositeNode") continue;
    const s: any = {
      name:        node.Name,
      displayName: ACRONYM_TO_SHORT[node.Name] || node.Name,
    };
    try {
      const maint = JSON.parse(node.MaintenanceInfo || "{}");
      s.status = Object.keys(maint).length <= 1 ? maint[node.Name] : { state: "PreMaint" };
    } catch { s.status = undefined; }

    const caps      = node.Capacities         ? JSON.parse(node.Capacities)          : {};
    const allocCaps = node.CapacityAllocations ? JSON.parse(node.CapacityAllocations) : {};
    for (const [label, key] of Object.entries(CAPACITY_KEYS)) {
      s[`total${label}`]     = caps[key]      || 0;
      s[`allocated${label}`] = allocCaps[key] || 0;
      s[`free${label}`]      = s[`total${label}`] - s[`allocated${label}`];
    }
    for (const t of COMPONENT_TYPES) { s[`total${t}`] = 0; s[`allocated${t}`] = 0; s[`free${t}`] = 0; }
    for (const link of links) {
      if (link.source !== node.id || link.Class !== "has") continue;
      const comp = nodes.find((n: any) => n.id === link.target);
      if (!comp) continue;
      const cc  = comp.Capacities         ? JSON.parse(comp.Capacities)          : {};
      const cac = comp.CapacityAllocations ? JSON.parse(comp.CapacityAllocations) : {};
      for (const t of COMPONENT_TYPES) {
        if (comp.Type === t) { s[`total${t}`] += cc.unit || 0; s[`allocated${t}`] += cac.unit || 0; }
      }
    }
    for (const t of COMPONENT_TYPES) s[`free${t}`] = s[`total${t}`] - s[`allocated${t}`];
    sites.push(s as TopoSite);
  }
  return sites;
}

export function ResourceMapSection() {
  const [siteMap, setSiteMap] = useState<Record<string, TopoSite>>({});

  useEffect(() => {
    fetch("/api/resources")
      .then((r) => r.json())
      .then((json) => {
        const raw = json.data?.[0];
        if (!raw) return;
        const map: Record<string, TopoSite> = {};
        for (const s of parseSites(raw)) map[s.displayName] = s;
        setSiteMap(map);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="section bg-white">
      <div className="page-container">
        <h2 className="text-2xl font-bold text-fabric-navy mb-8">Resource Map</h2>
        <FabricTopomap siteMap={siteMap} />
        <div className="flex justify-center mt-6">
          <Link href="https://portal.fabric-testbed.net/resources/overview" target="_blank" rel="noopener noreferrer" className="btn-yellow">Learn More</Link>
        </div>
      </div>
    </section>
  );
}
