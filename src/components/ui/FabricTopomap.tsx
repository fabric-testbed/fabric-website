"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Line,
  Marker,
} from "react-simple-maps";
import { topomap } from "@/lib/data/topomap";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Minimal site shape the map+panel needs
export interface TopoSite {
  name:         string;        // acronym: NEWY, RENC …
  displayName:  string;        // topomap node name: New York, RENCI …
  status?:      { state: string };
  freeCore:     number; totalCore:     number;
  freeRAM:      number; totalRAM:      number;
  freeDisk:     number; totalDisk:     number;
  freeGPU:      number; totalGPU:      number;
  freeNVME:     number; totalNVME:     number;
  freeSmartNIC: number; totalSmartNIC: number;
  freeSharedNIC:number; totalSharedNIC:number;
  freeFPGA:     number; totalFPGA:     number;
  freeSwitch:   number; totalSwitch:   number;
}

const ACRONYM_TO_LONG: Record<string, string> = {
  RENC:   "RENCI",
  UKY:    "UKY",
  LBNL:   "LBNL",
  STAR:   "StarLight",
  MAX:    "University of Maryland/MAX",
  TACC:   "TACC",
  MICH:   "University of Michigan",
  MASS:   "UMass",
  UTAH:   "University of Utah",
  NCSA:   "NCSA",
  WASH:   "Washington",
  DALL:   "Dallas",
  SALT:   "Salt Lake City",
  UCSD:   "UCSD",
  GPN:    "GPN",
  FIU:    "Florida International University",
  CLEM:   "Clemson",
  GATECH: "Georgia Tech",
  LOSA:   "Los Angeles",
  NEWY:   "New York",
  KANS:   "Kansas City",
  ATLA:   "Atlanta",
  SEAT:   "Seattle",
  PRIN:   "Princeton",
  INDI:   "Indiana University",
  PSC:    "PSC",
  RUTG:   "Rutgers",
  SRI:    "SRI",
  CERN:   "CERN",
  BRIST:  "University of Bristol",
  AMST:   "University of Amsterdam",
  TOKY:   "University of Tokyo",
  HAWI:   "University of Hawai'i",
  EDC:    "EDC",
  EDUKY:  "EDUKY",
};

// Topomap display name → portal acronym (only where they differ)
const DISPLAY_TO_ACRONYM: Record<string, string> = {
  "RENCI": "RENC",
  "StarLight": "STAR",
  "Washington": "WASH",
  "Dallas": "DALL",
  "Salt Lake City": "SALT",
  "Los Angeles": "LOSA",
  "New York": "NEWY",
  "Kansas City": "KANS",
  "Atlanta": "ATLA",
  "Seattle": "SEAT",
  "Hawaii": "HAWI",
};

const RESOURCE_ROWS = [
  { key: "Core",      label: "Cores"     },
  { key: "Disk",      label: "Disk (GB)" },
  { key: "RAM",       label: "RAM (GB)"  },
  { key: "GPU",       label: "GPU"       },
  { key: "NVME",      label: "NVME"      },
  { key: "SmartNIC",  label: "SmartNIC"  },
  { key: "SharedNIC", label: "SharedNIC" },
  { key: "FPGA",      label: "FPGA"      },
  { key: "Switch",    label: "Switch"    },
];

function nodeColor(type: string, state?: string) {
  if (!state || state === "Unknown")                   return "#838385"; // gray – unknown/down
  if (state === "Maint")                               return "#e94948"; // red – error/critical
  if (state === "PreMaint" || state === "PartMaint")   return "#ff8542"; // orange – warning/partial maint
  if (type === "us_core")                              return "#2196C9"; // teal – active core
  return "#5BC4E5";                                                      // sky – active edge/international
}

function isDown(site: TopoSite) {
  return site.status?.state === "Maint";
}

function StatusBadge({ state }: { state?: string }) {
  if (state === "Active") {
    return (
      <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-100 text-emerald-700 border border-emerald-200 uppercase tracking-wide">
        Active
      </span>
    );
  }
  const cfg: Record<string, { label: string; cls: string }> = {
    Maint:    { label: "Maintenance",     cls: "bg-red-100 text-red-700 border-red-200" },
    Unknown:  { label: "Down",            cls: "bg-gray-700 text-white border-gray-700" },
    PreMaint: { label: "Pre-Maintenance", cls: "bg-amber-100 text-amber-700 border-amber-200" },
    PartMaint:{ label: "Partial Maint",   cls: "bg-amber-100 text-amber-700 border-amber-200" },
  };
  const key = state ?? "Unknown";
  const c = cfg[key] ?? { label: key, cls: "bg-gray-100 text-gray-600 border-gray-200" };
  return (
    <span className={`px-2 py-0.5 text-[10px] font-bold rounded border uppercase tracking-wide ${c.cls}`}>
      {c.label}
    </span>
  );
}

function ResourceBar({ free, total }: { free: number; total: number }) {
  const pct = total > 0 ? Math.round((free / total) * 100) : 0;
  return (
    <div className="relative h-5 rounded bg-fabric-gray-100 overflow-hidden">
      {total > 0 && (
        <div className="absolute inset-y-0 left-0 rounded bg-fabric-teal transition-all" style={{ width: `${Math.min(pct, 100)}%` }} />
      )}
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-normal font-mono text-fabric-navy whitespace-nowrap">
        {free}/{total}
      </span>
    </div>
  );
}

interface Props {
  /** keyed by displayName (= topomap node name, e.g. "StarLight", "New York") */
  siteMap:      Record<string, TopoSite>;
  defaultNode?: string;
  /** hide the "View full resource map →" footer link (for the resource-map page itself) */
  hideFooterLink?: boolean;
}

export function FabricTopomap({ siteMap, defaultNode = "StarLight", hideFooterLink = false }: Props) {
  const [position, setPosition] = useState({ coordinates: [-95, 38] as [number, number], zoom: 2.8 });
  const [selectedNode, setSelectedNode] = useState<string>(defaultNode);

  const dataLoaded   = Object.keys(siteMap).length > 0;
  const selectedSite = siteMap[selectedNode] ?? null;

  function handleZoomIn()  { if (position.zoom < 8) setPosition((p) => ({ ...p, zoom: p.zoom * 1.6 })); }
  function handleZoomOut() { if (position.zoom > 1) setPosition((p) => ({ ...p, zoom: p.zoom / 1.6 })); }

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-stretch">
      {/* ── Map ── */}
      <div className="relative flex-1 min-w-0 rounded-2xl border border-fabric-gray-200 overflow-hidden bg-[#EAF4FB]">
        <ComposableMap
          projection="geoEqualEarth"
          width={900}
          height={480}
          projectionConfig={{ scale: 340, center: [-55, 15] }}
          style={{ width: "100%", height: "auto" }}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            minZoom={1}
            maxZoom={8}
            onMoveEnd={(pos) =>
              setPosition({ coordinates: pos.coordinates as [number, number], zoom: pos.zoom })
            }
          >
            <Geographies geography={GEO_URL} fill="#D6E8F4" stroke="#FFFFFF" strokeWidth={0.4}>
              {({ geographies }) =>
                geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
              }
            </Geographies>

            {topomap.lines.map(({ from, to }) => {
              const f = topomap.coordinates[from];
              const t = topomap.coordinates[to];
              if (!f || !t) return null;
              return <Line key={`line-${from}-${to}`} from={f} to={t}
                stroke="#5BC4E5" strokeWidth={0.8} strokeLinecap="round" strokeOpacity={0.7} />;
            })}

            {topomap.usa_lines_super.map(({ from, to }) => {
              const f = topomap.coordinates[from];
              const t = topomap.coordinates[to];
              if (!f || !t) return null;
              return <Line key={`super-${from}-${to}`} from={f} to={t}
                stroke="#F5C518" strokeWidth={2} strokeLinecap="round" />;
            })}

            {topomap.international_lines.map(({ from, to }) => {
              const f = topomap.coordinates[from];
              const t = topomap.coordinates[to];
              if (!f || !t) return null;
              return <Line key={`intl-${from}-${to}`} from={f} to={t}
                stroke="#5BC4E5" strokeWidth={0.8} strokeLinecap="round"
                strokeOpacity={0.5} strokeDasharray="2 2" />;
            })}

            {topomap.nodes.map(({ name, markerOffset, type }) => {
              const coords     = topomap.coordinates[name];
              if (!coords) return null;
              const isSelected = selectedNode === name;
              const siteState  = dataLoaded ? (siteMap[name] ? siteMap[name].status?.state ?? "Active" : "Unknown") : undefined;
              const r          = type === "edge" ? 1.8 : 3.2;
              const color      = nodeColor(type, siteState);
              return (
                <Marker key={name} coordinates={coords} onMouseEnter={() => setSelectedNode(name)}>
                  <circle r={r * 2.2} fill={color} fillOpacity={isSelected ? 0.25 : 0.15} />
                  {isSelected && <circle r={r * 1.7} fill="none" stroke="#ffffff" strokeWidth={1.2} />}
                  <circle r={isSelected ? r * 1.4 : r} fill={color} style={{ cursor: "pointer" }} />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{
                      fill: "#1B3A5C",
                      fontSize: type === "edge" ? "0.28rem" : "0.32rem",
                      fontWeight: isSelected || type === "us_core" ? 700 : 400,
                      fontFamily: "sans-serif",
                      pointerEvents: "none",
                    }}
                  >
                    {name}
                  </text>
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* Zoom controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-1">
          <button onClick={handleZoomIn}
            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg border border-fabric-gray-200 shadow-sm hover:bg-fabric-light transition-colors">
            <Plus className="h-4 w-4 text-fabric-navy" />
          </button>
          <button onClick={handleZoomOut}
            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg border border-fabric-gray-200 shadow-sm hover:bg-fabric-light transition-colors">
            <Minus className="h-4 w-4 text-fabric-navy" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-1.5 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-fabric-gray-200 text-xs text-fabric-gray-600">
          <div className="flex items-center gap-2">
            <span className="inline-block w-6 h-0.5 bg-fabric-yellow" />
            <span>Super Core</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-6 h-0.5 bg-fabric-sky opacity-70" />
            <span>L1/L2 Links</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ display: "inline-block", width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "#2196C9" }} />
            <span>Core site</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ display: "inline-block", width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "#5BC4E5" }} />
            <span>Edge site</span>
          </div>
        </div>
      </div>

      {/* ── Site detail panel ── */}
      <div className="w-full lg:w-64 shrink-0 rounded-2xl border border-fabric-gray-200 bg-white flex flex-col overflow-hidden">
        {selectedNode && (() => {
          const siteAcronym = selectedSite?.name ?? DISPLAY_TO_ACRONYM[selectedNode] ?? selectedNode;
          return (
          <>
            {/* Header */}
            <div className="px-4 pt-4 pb-3 border-b border-fabric-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-bold text-fabric-teal uppercase tracking-wide leading-snug">
                  {siteAcronym}
                </p>
                <StatusBadge state={selectedSite ? selectedSite.status?.state : "Unknown"} />
              </div>
              <p className="text-xs text-fabric-gray-400 mt-0.5 leading-snug">
                {ACRONYM_TO_LONG[siteAcronym] ?? selectedSite?.displayName ?? selectedNode}
              </p>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">
              {(!selectedSite || isDown(selectedSite)) ? (
                <div className="px-3 py-3">
                  {["LBNL", "UKY", "RENC"].includes(siteAcronym) && (
                    <p className="text-xs text-fabric-gray-400">
                      This is a development site and not available for general use.
                    </p>
                  )}
                </div>
              ) : (
                <div className="px-3 py-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0">
                  <div className="text-[10px] font-semibold text-fabric-gray-500 uppercase tracking-wide pb-2">
                    Resource
                  </div>
                  <div className="text-[10px] font-semibold text-fabric-gray-500 uppercase tracking-wide pb-2 text-right">
                    available / total
                  </div>
                  {RESOURCE_ROWS.map(({ key, label }) => {
                    const free  = selectedSite[`free${key}`  as keyof TopoSite] as number;
                    const total = selectedSite[`total${key}` as keyof TopoSite] as number;
                    return (
                      <React.Fragment key={key}>
                        <div className="text-xs text-fabric-gray-600 py-1.5 self-center">{label}</div>
                        <div className="py-1.5 self-center"><ResourceBar free={free} total={total} /></div>
                      </React.Fragment>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {!hideFooterLink && !["LBNL", "UKY", "RENC"].includes(siteAcronym) && (
              <div className="px-4 py-3 border-t border-fabric-gray-200">
                <a href={`https://portal.fabric-testbed.net/resources/sites/${siteAcronym}`} target="_blank" rel="noopener noreferrer" className="text-xs text-fabric-blue hover:underline font-medium">
                  View site details in Portal →
                </a>
              </div>
            )}
          </>
          );
        })()}
      </div>
    </div>
  );
}
