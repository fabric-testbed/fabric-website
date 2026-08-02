"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Stat } from "@/lib/data/stats";

const positions = [
  { top: "15%",  left: "8%" },   // Total Slices
  { top: "8%",  left: "38%" },  // Total Users
  { top: "25%",  left: "66%" },  // Publications
  { top: "46%", left: "22%" },  // Active Slices
  { top: "48%", left: "50%" },  // Total Projects
];

const svgNodes: [number, number][] = [
  [70, 150],    // Total Slices
  [230, 100],   // Total Users
  [400, 130],   // Publications
  [150, 200],  // Active Slices
  [320, 220],  // Total Projects
];

export function ByTheNumbersClient({ stats }: { stats: Stat[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const activeIdx = hovered ?? 1;
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
              <div className="absolute inset-0 flex items-center justify-start pointer-events-none" style={{ left: "-5%", top: "-15%" }}>
                <Image
                  src="/imgs/fabric-wave-grey.png"
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className="object-contain object-left"
                  style={{ opacity: 0.5 }}
                />
              </div>

              {/* Stat items with dots */}
              {stats.map(({ value, label }, i) => {
                const pos = positions[i] ?? { top: `${i * 18}%`, left: "10%" };
                const isActive = i === activeIdx;
                const isBottom = i >= 3;

                const dot = (
                  <svg width="12" height="12" viewBox="0 0 12 12" className="ml-1">
                    <circle cx="6" cy="6" r="5" fill="#2196C9" opacity={i === activeIdx ? 0.6 : 0.25} />
                    <circle cx="6" cy="6" r="2.5" fill="#2196C9" opacity={i === activeIdx ? 0.9 : 0.5} />
                  </svg>
                );

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
                    {isBottom && <div className="mb-2">{dot}</div>}
                    <p className="stat-number leading-none mb-0.5">{value}</p>
                    <p className="text-xs font-bold text-fabric-navy uppercase tracking-wide leading-tight max-w-[120px]">
                      {label}
                    </p>
                    {!isBottom && <div className="mt-2">{dot}</div>}
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
              <p className="text-sm text-fabric-gray-600 leading-relaxed mb-4">
                {activeStat?.detail}
              </p>
              {activeStat?.href && (
                <Link
                  href={activeStat.href}
                  {...(activeStat.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-xs font-medium text-fabric-blue hover:underline"
                >
                  Learn More →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
