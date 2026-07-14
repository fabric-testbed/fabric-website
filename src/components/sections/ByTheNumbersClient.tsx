"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Stat } from "@/lib/data/stats";

const positions = [
  { top: "12%", left: "4%" },   // Total Slices
  { top: "18%", left: "30%" },  // Total Users
  { top: "14%", left: "56%" },  // Publications
  { top: "52%", left: "16%" },  // Active Slices
  { top: "58%", left: "40%" },  // Total Projects
];

const svgNodes: [number, number][] = [
  [70, 70],    // Total Slices
  [230, 90],   // Total Users
  [400, 70],   // Publications
  [150, 230],  // Active Slices
  [320, 250],  // Total Projects
];

export function ByTheNumbersClient({ stats }: { stats: Stat[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const activeIdx = hovered ?? 1; // default to "Total Users" (index 1)
  const activeStat = stats[activeIdx];

  return (
    <section className="section bg-fabric-off-white">
      <div className="page-container">
        <h2 className="text-2xl font-bold text-fabric-navy mb-10">By the Numbers</h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Scattered stats — left / main area */}
          <div className="flex-1 min-w-0">
            {/* Mobile: simple grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden">
              {stats.map(({ value, label, detail }) => (
                <div
                  key={label}
                  className="group bg-white rounded-xl p-4 border border-fabric-gray-200 shadow-sm hover:border-fabric-sky hover:shadow-card transition-all cursor-default"
                  title={detail}
                >
                  <p className="stat-number text-3xl mb-1">{value}</p>
                  <p className="text-xs font-semibold text-fabric-gray-600 uppercase tracking-wide leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop: scattered floating layout */}
            <div className="hidden lg:block relative" style={{ height: "380px" }}>
              {/* Wave background graphic */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: "scale(0.85)" }}>
                <Image
                  src="/imgs/fabric-wave-grey.png"
                  alt=""
                  aria-hidden="true"
                  fill
                  className="object-contain object-center"
                  style={{ opacity: 0.3 }}
                />
              </div>

              {/* Dot indicators for each stat */}
              {stats.map((_, i) => {
                const pos = positions[i] ?? { top: `${i * 18}%`, left: "10%" };
                return (
                  <div
                    key={`dot-${i}`}
                    className="absolute cursor-pointer"
                    style={{ top: `calc(${pos.top} + 3.5em)`, left: `calc(${pos.left} + 0.5em)` }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <circle cx="6" cy="6" r="5" fill="#2196C9" opacity={i === activeIdx ? 0.6 : 0.25} />
                      <circle cx="6" cy="6" r="2.5" fill="#2196C9" opacity={i === activeIdx ? 0.9 : 0.5} />
                    </svg>
                  </div>
                );
              })}

              {/* Stat items */}
              {stats.map(({ value, label }, i) => {
                const pos = positions[i] ?? { top: `${i * 18}%`, left: "10%" };
                const isActive = i === activeIdx;
                return (
                  <div
                    key={label}
                    className="absolute cursor-pointer transition-transform duration-150"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      transform: isActive ? "scale(1.05)" : undefined,
                    }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <p className="stat-number leading-none mb-0.5">{value}</p>
                    <p className="text-xs font-bold text-fabric-navy uppercase tracking-wide leading-tight max-w-[120px]">
                      {label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right sidebar: hover detail card */}
          <div className="w-full lg:w-64 shrink-0 hidden lg:block">
            <div className="bg-white rounded-2xl shadow-sm p-6 relative">
              <p className="text-sm font-bold text-fabric-navy uppercase tracking-wide mb-2">
                {activeStat?.label}
              </p>
              <p className="text-sm text-fabric-gray-600 leading-relaxed mb-6">
                {activeStat?.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
