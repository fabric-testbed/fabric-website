"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Search, ChevronUp, ChevronDown, ChevronsUpDown,
  AlertCircle, Loader2, ChevronLeft, ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import type { TopoSite } from "@/components/ui/FabricTopomap";
const FabricTopomap = dynamic(
  () => import("@/components/ui/FabricTopomap").then((m) => m.FabricTopomap),
  { ssr: false }
);

// ── Types ─────────────────────────────────────────────────────────────────────
interface Site {
  id: number;
  name: string;        // acronym: RENC, TACC …
  displayName: string; // short name: RENCI, TACC …
  status?: { state: string };
  totalCore: number; freeCore: number;
  totalRAM: number;  freeRAM: number;
  totalDisk: number; freeDisk: number;
  totalGPU: number;  freeGPU: number;
  totalNVME: number; freeNVME: number;
  totalSmartNIC: number; freeSmartNIC: number;
  totalSharedNIC: number; freeSharedNIC: number;
  totalFPGA: number; freeFPGA: number;
  totalSwitch: number; freeSwitch: number;
}

interface FacilityPort {
  id: number;
  name: string;
  vlan_range?: string[];
  vlan?: string;
  allocated_vlan_range?: string[];
  site: string;
  description: string;
}

// ── Static data ───────────────────────────────────────────────────────────────
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

const FP_DESCRIPTIONS: Record<string, string> = {
  "RENC-BEN":"BEN at RENCI","UKY-AL2S":"Internet2 AL2S at LOUI to UKY",
  "Chameleon-StarLight":"Chameleon at StarLight","Chameleon-Northwestern":"Chameleon at Northwestern",
  "ESnet-StarLight":"ESnet at StarLight","Internet2-StarLight":"Internet2 AL2S at StarLight",
  "CloudLab-UWisc-Madison":"CloudLab UW-Madison at StarLight",
  "StarLight-400G-1-STAR":"StarLight-400G-1 at STAR","StarLight-400G-2-STAR":"StarLight-400G-2 at STAR",
  "StarLight-400G-3-STAR":"StarLight-400G-3 at STAR","IIT-Network-Research-STAR":"IIT-Network-Research at STAR",
  "SCIERA-STAR":"SCIERA at STAR","FP1-SALT":"FP1 at SALT","FP2-SALT":"FP2 at SALT","FP3-SALT":"FP3 at SALT",
  "RCNF":"Rutgers CryoEM & Nanoimaging Facility","SCIERA-WASH":"SCIERA at WASH",
  "JBDT-400G-1-WASH":"JBDT-400G-1 at WASH","JBDT-400G-2-WASH":"JBDT-400G-2 at WASH",
  "JBDT-400G-3-WASH":"JBDT-400G-3 at WASH","KentState-WASH":"Kent State University at WASH",
  "Utah-Cloudlab-Powder":"Cloudlab and Powder Testbeds at Utah",
  "ASU-Research-Network-FABRIC":"ASU Knowledge Enterprise/Research Computing access to FABRIC",
  "CloudLab-Clemson":"Cloudlab at Clemson","Ultrasound-Clemson":"Ultrasound at Clemson",
  "Chameleon-TACC":"Chameleon at TACC","OCT-MGHPCC":"Open Cloud Testbed (OCT) at MGHPCC",
  "OCT-MGHPCC-400G":"Open Cloud Testbed (OCT) at MGHPCC-400G","SENSE-MGHPCC":"SENSE at MGHPCC",
  "SLU-KANS":"Saint Louis University (SLU) connection at KANS",
  "ESnet-400G-NEWY":"ESnet-400G at NEWY","COSMOS-NEWY":"COSMOS at NEWY",
  "ESnet-LOSA":"ESnet at LOSA","ResearchNet-400G-LOSA":"ResearchNet-400G at LOSA",
  "PWLOSA-2-LOSA":"PWLOSA-2 at LOSA","SPHERE-LOSA":"SPHERE at LOSA",
  "NRP-UCSD":"NRP at UCSD","FP1-UCSD":"FP1 at UCSD",
  "COSMOS-RUTG":"COSMOS at RUTG","NetworkResearch-PRIN":"NetworkResearch at PRIN",
  "NIST-MAX":"NIST at MAX","AmLight-Layer3-FIU":"AmLight Layer 3 at FIU",
  "AmLight-EXP-Layer2-FIU":"AmLight-EXP Layer 2 at FIU","PacWave-SEAT":"PacWave at SEAT",
  "SmartInternetLab-BRIST":"Smart Internet Lab at BRIST","CESNET-AMST":"CESNET Prague to AMST",
  "NRP-CERN":"NRP at CERN",
};

// ── Parsers (ported from fabric-portal) ───────────────────────────────────────
function parseSites(data: any): Site[] {
  const elements = JSON.parse(data.model);
  const nodes: any[] = elements.nodes;
  const links: any[] = elements.links || elements.edges || [];
  const COMPONENT_TYPES = ["GPU","NVME","SmartNIC","SharedNIC","FPGA","Switch"];
  const CAPACITY_KEYS: Record<string, string> = { Core:"core", RAM:"ram", Disk:"disk" };
  const sites: Site[] = [];

  for (const node of nodes) {
    if (node.Class !== "CompositeNode") continue;
    const s: any = {
      id: node.id,
      name: node.Name,
      displayName: ACRONYM_TO_SHORT[node.Name] || node.Name,
    };

    // maintenance / status
    try {
      const maint = JSON.parse(node.MaintenanceInfo || "{}");
      if (Object.keys(maint).length <= 1) {
        s.status = maint[node.Name];
      } else {
        let state = "PreMaint";
        for (const [k, v] of Object.entries(maint)) {
          if (k !== node.Name && (v as any).state === "Maint") state = "PartMaint";
        }
        s.status = { state };
      }
    } catch { s.status = undefined; }

    // core capacities
    const caps     = node.Capacities         ? JSON.parse(node.Capacities)         : {};
    const allocCaps = node.CapacityAllocations ? JSON.parse(node.CapacityAllocations) : {};
    for (const [label, key] of Object.entries(CAPACITY_KEYS)) {
      s[`total${label}`]     = caps[key]     || 0;
      s[`allocated${label}`] = allocCaps[key] || 0;
      s[`free${label}`]      = s[`total${label}`] - s[`allocated${label}`];
    }

    // component capacities
    for (const t of COMPONENT_TYPES) {
      s[`total${t}`] = 0; s[`allocated${t}`] = 0; s[`free${t}`] = 0;
    }
    for (const link of links) {
      if (link.source !== s.id || link.Class !== "has") continue;
      const comp = nodes.find((n: any) => n.id === link.target);
      if (!comp) continue;
      const cc  = comp.Capacities         ? JSON.parse(comp.Capacities)         : {};
      const cac = comp.CapacityAllocations ? JSON.parse(comp.CapacityAllocations) : {};
      for (const t of COMPONENT_TYPES) {
        if (comp.Type === t) {
          s[`total${t}`]     += cc.unit  || 0;
          s[`allocated${t}`] += cac.unit || 0;
        }
      }
    }
    for (const t of COMPONENT_TYPES) {
      s[`free${t}`] = s[`total${t}`] - s[`allocated${t}`];
    }
    sites.push(s as Site);
  }
  return sites.sort((a, b) => a.name.localeCompare(b.name));
}

function parseFacilityPorts(data: any): FacilityPort[] {
  const elements = JSON.parse(data.model);
  const nodes: any[] = elements.nodes;
  const fps        = nodes.filter((n: any) => n.Type === "FacilityPort");
  const facilities = nodes.filter((n: any) => n.Type === "Facility");
  return fps.map((fp: any) => {
    let site = "";
    for (const f of facilities) {
      if (f.NodeID?.concat("-int") === fp.NodeID) { site = f.Site; break; }
    }
    const labels    = fp.Labels          ? JSON.parse(fp.Labels)                    : {};
    const allocVlan = fp.LabelAllocations ? JSON.parse(fp.LabelAllocations).vlan ?? [] : [];
    const cleanName = (fp.Name || "").replace(/-int$/, "");
    return {
      id:   fp.id,
      name: cleanName,
      vlan_range: labels.vlan_range,
      vlan: labels.vlan,
      allocated_vlan_range: allocVlan,
      site: site || cleanName.split("-")[0],
      description: FP_DESCRIPTIONS[cleanName] || "",
    } as FacilityPort;
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const RESOURCE_COLS = [
  { key: "Core",      label: "Cores"      },
  { key: "Disk",      label: "Disk (GB)"  },
  { key: "RAM",       label: "RAM (GB)"   },
  { key: "GPU",       label: "GPU"        },
  { key: "NVME",      label: "NVME"       },
  { key: "SmartNIC",  label: "SmartNIC"   },
  { key: "SharedNIC", label: "SharedNIC"  },
  { key: "FPGA",      label: "FPGA"       },
  { key: "Switch",    label: "Switch"     },
];

const COMPONENT_FILTERS = ["GPU","NVME","SmartNIC","SharedNIC","FPGA"];

type SortDir = "asc" | "desc";
type SortKey = keyof Site | "name";

function StatusBadge({ state }: { state?: string }) {
  if (!state || state === "Active") return null;
  const cfg: Record<string, { label: string; cls: string }> = {
    Maint:    { label: "Maintenance",         cls: "bg-red-100 text-red-700 border-red-200" },
    PreMaint: { label: "Pre-Maintenance",      cls: "bg-amber-100 text-amber-700 border-amber-200" },
    PartMaint:{ label: "Partial Maintenance",  cls: "bg-amber-100 text-amber-700 border-amber-200" },
  };
  const c = cfg[state] ?? { label: state, cls: "bg-gray-100 text-gray-600 border-gray-200" };
  return (
    <span className={`ml-1 px-1.5 py-0.5 text-[10px] font-semibold rounded border ${c.cls}`}>
      {c.label}
    </span>
  );
}

function SortIcon({ col, sortKey, sortDir }: { col: string; sortKey: string; sortDir: SortDir }) {
  if (col !== sortKey) return <ChevronsUpDown className="h-3 w-3 opacity-30 inline ml-0.5" />;
  return sortDir === "asc"
    ? <ChevronUp   className="h-3 w-3 inline ml-0.5 text-fabric-blue" />
    : <ChevronDown className="h-3 w-3 inline ml-0.5 text-fabric-blue" />;
}

function paginate<T>(arr: T[], page: number, size: number): T[] {
  return arr.slice((page - 1) * size, page * size);
}

function Pagination({ total, page, size, onChange }: {
  total: number; page: number; size: number; onChange: (p: number) => void;
}) {
  const pages = Math.ceil(total / size);
  if (pages <= 1) return null;
  return (
    <div className="flex items-center justify-between px-2 py-3 border-t border-fabric-gray-200">
      <span className="text-xs text-fabric-gray-400">
        {(page - 1) * size + 1}–{Math.min(page * size, total)} of {total}
      </span>
      <div className="flex gap-1">
        <button
          onClick={() => onChange(page - 1)} disabled={page === 1}
          className="p-1 rounded hover:bg-fabric-gray-100 disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`px-2.5 py-0.5 rounded text-xs font-medium transition-colors ${
              p === page ? "bg-fabric-blue text-white" : "hover:bg-fabric-gray-100 text-fabric-gray-600"
            }`}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => onChange(page + 1)} disabled={page === pages}
          className="p-1 rounded hover:bg-fabric-gray-100 disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function ResourceMapPage() {
  const [sites, setSites]               = useState<Site[]>([]);
  const [fps, setFps]                   = useState<FacilityPort[]>([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState<string | null>(null);

  // sites table state
  const [siteSearch, setSiteSearch]     = useState("");
  const [compFilters, setCompFilters]   = useState<string[]>([]);
  const [siteSortKey, setSiteSortKey]   = useState<string>("name");
  const [siteSortDir, setSiteSortDir]   = useState<SortDir>("asc");
  const [sitePage, setSitePage]         = useState(1);

  // facility ports table state
  const [fpSearch, setFpSearch]         = useState("");
  const [fpSortKey, setFpSortKey]       = useState<string>("name");
  const [fpSortDir, setFpSortDir]       = useState<SortDir>("asc");
  const [fpPage, setFpPage]             = useState(1);

  useEffect(() => {
    fetch("/api/resources")
      .then((r) => r.json())
      .then((json) => {
        if (json.error) { setError(json.error); return; }
        const raw = json.data?.[0];
        if (!raw) { setError("No resource data returned."); return; }
        setSites(parseSites(raw));
        setFps(parseFacilityPorts(raw));
      })
      .catch(() => setError("Failed to load resource data."))
      .finally(() => setLoading(false));
  }, []);

  // ── Topomap siteMap (keyed by displayName for FabricTopomap) ───────────────
  const topoSiteMap = useMemo(() => {
    const map: Record<string, TopoSite> = {};
    for (const s of sites) map[s.displayName] = s as unknown as TopoSite;
    return map;
  }, [sites]);

  // ── Totals for summary row ──────────────────────────────────────────────────
  const totals = useMemo(() => {
    const t: Record<string, number> = {};
    for (const col of RESOURCE_COLS) {
      t[`free${col.key}`]  = sites.reduce((s, r) => s + (r[`free${col.key}` as keyof Site] as number || 0), 0);
      t[`total${col.key}`] = sites.reduce((s, r) => s + (r[`total${col.key}` as keyof Site] as number || 0), 0);
    }
    return t;
  }, [sites]);

  // ── Sites filtered / sorted / paginated ─────────────────────────────────────
  const filteredSites = useMemo(() => {
    let out = sites;
    if (siteSearch) {
      const q = siteSearch.toLowerCase();
      out = out.filter((s) => s.name.toLowerCase().includes(q) || s.displayName.toLowerCase().includes(q));
    }
    for (const comp of compFilters) {
      out = out.filter((s) => (s[`free${comp}` as keyof Site] as number) > 0);
    }
    out = [...out].sort((a, b) => {
      const av = a[siteSortKey as keyof Site] ?? "";
      const bv = b[siteSortKey as keyof Site] ?? "";
      const cmp = typeof av === "number" ? av - (bv as number) : String(av).localeCompare(String(bv));
      return siteSortDir === "asc" ? cmp : -cmp;
    });
    return out;
  }, [sites, siteSearch, compFilters, siteSortKey, siteSortDir]);

  const pagedSites = useMemo(() => paginate(filteredSites, sitePage, 5), [filteredSites, sitePage]);

  // ── Facility ports filtered / sorted / paginated ────────────────────────────
  const filteredFps = useMemo(() => {
    let out = fps;
    if (fpSearch) {
      const q = fpSearch.toLowerCase();
      out = out.filter((p) => p.name.toLowerCase().includes(q) || p.site.toLowerCase().includes(q));
    }
    out = [...out].sort((a, b) => {
      const av = a[fpSortKey as keyof FacilityPort] ?? "";
      const bv = b[fpSortKey as keyof FacilityPort] ?? "";
      const cmp = String(av).localeCompare(String(bv));
      return fpSortDir === "asc" ? cmp : -cmp;
    });
    return out;
  }, [fps, fpSearch, fpSortKey, fpSortDir]);

  const pagedFps = useMemo(() => paginate(filteredFps, fpPage, 10), [filteredFps, fpPage]);

  function toggleSiteSort(key: string) {
    if (siteSortKey === key) setSiteSortDir((d) => d === "asc" ? "desc" : "asc");
    else { setSiteSortKey(key); setSiteSortDir("asc"); }
    setSitePage(1);
  }
  function toggleFpSort(key: string) {
    if (fpSortKey === key) setFpSortDir((d) => d === "asc" ? "desc" : "asc");
    else { setFpSortKey(key); setFpSortDir("asc"); }
    setFpPage(1);
  }
  function toggleCompFilter(comp: string) {
    setCompFilters((prev) =>
      prev.includes(comp) ? prev.filter((c) => c !== comp) : [...prev, comp]
    );
    setSitePage(1);
  }

  const thCls = "px-3 py-2.5 text-left text-xs font-semibold text-fabric-gray-500 uppercase tracking-wide whitespace-nowrap cursor-pointer select-none hover:text-fabric-blue transition-colors";
  const tdCls = "px-3 py-2.5 text-sm text-fabric-gray-700 font-mono whitespace-nowrap";

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="py-12 bg-white border-b border-fabric-gray-200">
          <div className="page-container max-w-6xl">
            <h1 className="text-3xl font-bold text-fabric-blue mb-2">Resources</h1>
            <p className="text-sm text-fabric-gray-600 max-w-2xl leading-relaxed">
              Live availability of compute, storage, and networking resources across the FABRIC testbed.
              Data is refreshed every minute from the FABRIC orchestrator.
            </p>
          </div>
        </section>

        {/* ── Loading / Error ────────────────────────────────────── */}
        {loading && (
          <section className="py-20 flex justify-center">
            <div className="flex items-center gap-3 text-fabric-gray-400">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span className="text-sm">Loading resource data…</span>
            </div>
          </section>
        )}

        {error && (
          <section className="py-16">
            <div className="page-container max-w-xl">
              <div className="flex items-start gap-3 p-5 rounded-xl border border-red-200 bg-red-50 text-red-700">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">Unable to load resource data</p>
                  <p className="text-xs text-red-600">{error}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {!loading && !error && (
          <div className="py-10 space-y-10 bg-fabric-off-white">
            <div className="page-container max-w-6xl space-y-10">

              {/* ── Interactive Topomap ───────────────────────────── */}
              <FabricTopomap siteMap={topoSiteMap} hideFooterLink />

              {/* ── Testbed Resource Summary ──────────────────────── */}
              <div>
                <h2 className="text-lg font-bold text-fabric-navy mb-4">Testbed Resource Summary</h2>
                <div className="overflow-x-auto rounded-xl border border-fabric-gray-200 bg-white shadow-sm">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="bg-fabric-off-white border-b border-fabric-gray-200">
                        {RESOURCE_COLS.map((col) => (
                          <th key={col.key} className="px-4 py-2.5 text-xs font-semibold text-fabric-gray-500 uppercase tracking-wide text-center whitespace-nowrap">
                            {col.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {RESOURCE_COLS.map((col) => (
                          <td key={col.key} className="px-4 py-3 text-center font-mono text-sm text-fabric-navy font-medium whitespace-nowrap">
                            <span className="text-fabric-teal font-bold">{totals[`free${col.key}`]}</span>
                            <span className="text-fabric-gray-400"> / {totals[`total${col.key}`]}</span>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-[11px] text-fabric-gray-400 px-4 py-2 border-t border-fabric-gray-100">
                    Free / Total — updated in real time from the FABRIC orchestrator
                  </p>
                </div>
              </div>

              {/* ── Sites Table ───────────────────────────────────── */}
              <div>
                <div className="rounded-xl border border-fabric-gray-200 bg-white shadow-sm overflow-hidden">
                  {/* Table header bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 border-b border-fabric-gray-200">
                    <span className="text-sm font-bold text-fabric-navy">
                      Sites <span className="text-fabric-gray-400 font-normal">({filteredSites.length})</span>
                    </span>
                    <div className="flex items-center gap-3 flex-wrap">
                      {/* Component filter checkboxes */}
                      <div className="flex items-center gap-3 flex-wrap text-xs text-fabric-gray-600">
                        <span className="font-medium text-fabric-gray-500 whitespace-nowrap">Component available:</span>
                        {COMPONENT_FILTERS.map((comp) => (
                          <label key={comp} className="flex items-center gap-1.5 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={compFilters.includes(comp)}
                              onChange={() => toggleCompFilter(comp)}
                              className="rounded border-fabric-gray-300 text-fabric-blue focus:ring-fabric-blue"
                            />
                            {comp}
                          </label>
                        ))}
                      </div>
                      {/* Search */}
                      <div className="relative">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-fabric-gray-400" />
                        <input
                          type="text"
                          placeholder="Search by site name…"
                          value={siteSearch}
                          onChange={(e) => { setSiteSearch(e.target.value); setSitePage(1); }}
                          className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-fabric-gray-200 focus:outline-none focus:ring-2 focus:ring-fabric-blue/40 focus:border-fabric-blue w-44"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-fabric-off-white border-b border-fabric-gray-200">
                        <tr>
                          <th className={thCls} onClick={() => toggleSiteSort("name")}>
                            Site <SortIcon col="name" sortKey={siteSortKey} sortDir={siteSortDir} />
                          </th>
                          {RESOURCE_COLS.map((col) => (
                            <th
                              key={col.key}
                              className={thCls}
                              onClick={() => toggleSiteSort(`free${col.key}`)}
                            >
                              {col.label} <SortIcon col={`free${col.key}`} sortKey={siteSortKey} sortDir={siteSortDir} />
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-fabric-gray-100">
                        {pagedSites.length === 0 ? (
                          <tr>
                            <td colSpan={RESOURCE_COLS.length + 1} className="px-4 py-10 text-center text-sm text-fabric-gray-400 italic">
                              No sites match your search or filters.
                            </td>
                          </tr>
                        ) : pagedSites.map((site) => (
                          <tr key={site.id} className="hover:bg-fabric-off-white transition-colors">
                            <td className="px-3 py-2.5 whitespace-nowrap">
                              <span className="text-sm font-mono font-medium text-fabric-navy">{site.displayName}</span>
                              <span className="ml-1.5 text-xs text-fabric-gray-400">({site.name})</span>
                              {site.status && <StatusBadge state={site.status.state} />}
                            </td>
                            {RESOURCE_COLS.map((col) => {
                              const free  = site[`free${col.key}`  as keyof Site] as number;
                              const total = site[`total${col.key}` as keyof Site] as number;
                              return (
                                <td key={col.key} className={tdCls}>
                                  <span className={free > 0 ? "text-fabric-teal font-semibold" : "text-fabric-gray-400"}>
                                    {free}
                                  </span>
                                  <span className="text-fabric-gray-300"> / {total}</span>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Pagination total={filteredSites.length} page={sitePage} size={5} onChange={setSitePage} />
                </div>
              </div>

              {/* ── Facility Ports Table ──────────────────────────── */}
              <div>
                <div className="rounded-xl border border-fabric-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-fabric-gray-200">
                    <span className="text-sm font-bold text-fabric-navy">
                      Facility Ports <span className="text-fabric-gray-400 font-normal">({filteredFps.length})</span>
                    </span>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-fabric-gray-400" />
                      <input
                        type="text"
                        placeholder="Search by name or site…"
                        value={fpSearch}
                        onChange={(e) => { setFpSearch(e.target.value); setFpPage(1); }}
                        className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-fabric-gray-200 focus:outline-none focus:ring-2 focus:ring-fabric-blue/40 focus:border-fabric-blue w-52"
                      />
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-fabric-off-white border-b border-fabric-gray-200">
                        <tr>
                          <th className={thCls} onClick={() => toggleFpSort("name")}>
                            Name <SortIcon col="name" sortKey={fpSortKey} sortDir={fpSortDir} />
                          </th>
                          <th className={thCls} onClick={() => toggleFpSort("site")}>
                            Site <SortIcon col="site" sortKey={fpSortKey} sortDir={fpSortDir} />
                          </th>
                          <th className={`${thCls} cursor-default`}>VLAN Range</th>
                          <th className={`${thCls} cursor-default`}>Allocated VLAN</th>
                          <th className={`${thCls} cursor-default`}>Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-fabric-gray-100">
                        {pagedFps.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="px-4 py-10 text-center text-sm text-fabric-gray-400 italic">
                              No facility ports match your search.
                            </td>
                          </tr>
                        ) : pagedFps.map((fp) => (
                          <tr key={fp.id} className="hover:bg-fabric-off-white transition-colors">
                            <td className="px-3 py-2.5">
                              <span className="font-mono text-xs text-fabric-navy font-medium">{fp.name}</span>
                            </td>
                            <td className="px-3 py-2.5">
                              <span className="font-mono text-xs text-fabric-gray-600">{fp.site}</span>
                            </td>
                            <td className="px-3 py-2.5">
                              {fp.vlan_range?.length ? (
                                <div className="flex flex-wrap gap-1">
                                  {fp.vlan_range.map((v, i) => (
                                    <span key={i} className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-fabric-blue/10 text-fabric-blue font-medium">
                                      [{v}]
                                    </span>
                                  ))}
                                </div>
                              ) : fp.vlan ? (
                                <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-fabric-blue/10 text-fabric-blue font-medium">
                                  {fp.vlan}
                                </span>
                              ) : (
                                <span className="text-fabric-gray-300 text-xs">—</span>
                              )}
                            </td>
                            <td className="px-3 py-2.5">
                              {fp.allocated_vlan_range?.length ? (
                                <div className="flex flex-wrap gap-1">
                                  {fp.allocated_vlan_range.map((v, i) => (
                                    <span key={i} className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-fabric-teal/10 text-fabric-teal font-medium">
                                      {v}
                                    </span>
                                  ))}
                                </div>
                              ) : (
                                <span className="text-fabric-gray-300 text-xs">—</span>
                              )}
                            </td>
                            <td className="px-3 py-2.5 text-xs text-fabric-gray-600 max-w-xs">
                              {fp.description || <span className="text-fabric-gray-300">—</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Pagination total={filteredFps.length} page={fpPage} size={10} onChange={setFpPage} />
                </div>
              </div>

            </div>
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}
