import Image from "next/image";
import Link from "next/link";
import { stats } from "@/lib/data/stats";

// Positions for the scattered floating-stat layout (percent of container)
const positions = [
  { top: "8%",  left: "4%"  },   // Total Slices — top-left
  { top: "8%",  left: "48%" },   // Total Users — top-right area
  { top: "42%", left: "26%" },   // FABRIC Publications — center
  { top: "62%", left: "4%"  },   // Active Slices — bottom-left
  { top: "62%", left: "48%" },   // Total Projects — bottom-right
];

export function ByTheNumbersSection() {
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
            <div className="hidden lg:block relative" style={{ height: "340px" }}>
              {/* Wave background graphic */}
              <Image
                src="/imgs/fabric-wave.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-contain object-center pointer-events-none"
                style={{ opacity: 0.12 }}
              />

              {/* Faint connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 600 340"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {/* Lines between stat positions (rough midpoints) */}
                <line x1="80"  y1="60"  x2="320" y2="60"  stroke="#2196C9" strokeWidth="0.8" opacity="0.2"/>
                <line x1="80"  y1="60"  x2="175" y2="170" stroke="#2196C9" strokeWidth="0.8" opacity="0.2"/>
                <line x1="320" y1="60"  x2="175" y2="170" stroke="#2196C9" strokeWidth="0.8" opacity="0.2"/>
                <line x1="175" y1="170" x2="80"  y2="265" stroke="#2196C9" strokeWidth="0.8" opacity="0.2"/>
                <line x1="175" y1="170" x2="320" y2="265" stroke="#2196C9" strokeWidth="0.8" opacity="0.2"/>
                <line x1="80"  y1="265" x2="320" y2="265" stroke="#2196C9" strokeWidth="0.8" opacity="0.2"/>
                {/* Node dots at positions */}
                {[[80,60],[320,60],[175,170],[80,265],[320,265]].map(([x,y],i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r="5" fill="#2196C9" opacity="0.25"/>
                    <circle cx={x} cy={y} r="2.5" fill="#2196C9" opacity="0.5"/>
                  </g>
                ))}
              </svg>

              {/* Stat items */}
              {stats.map(({ value, label, detail }, i) => {
                const pos = positions[i] ?? { top: `${i * 18}%`, left: "10%" };
                return (
                  <div
                    key={label}
                    className="absolute group cursor-default"
                    style={{ top: pos.top, left: pos.left }}
                    title={detail}
                  >
                    <p className="stat-number leading-none mb-0.5">{value}</p>
                    <p className="text-xs font-semibold text-fabric-gray-600 uppercase tracking-wide leading-tight max-w-[120px]">
                      {label}
                    </p>
                    {detail && (
                      <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-xl border border-fabric-gray-200 shadow-card p-3 z-10 hidden group-hover:block">
                        <p className="text-xs text-fabric-gray-600 leading-relaxed">{detail}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-fabric-gray-400 mt-4">
              Hover over each stat to learn more.
            </p>
          </div>

          {/* Right sidebar: Total Users callout + CTA */}
          <div className="w-full lg:w-56 shrink-0">
            <div className="bg-white rounded-2xl border border-fabric-gray-200 shadow-sm p-5">
              <p className="text-xs font-semibold text-fabric-gray-400 uppercase tracking-wider mb-1">
                Total Users
              </p>
              <p className="stat-number text-4xl mb-1">{stats.find(s => s.label === "Total Users")?.value ?? "2,267"}</p>
              <p className="text-xs text-fabric-gray-400 mb-5 leading-snug">
                The total number of individuals signed up as FABRIC users.
              </p>
              <Link href="/community/user-perspectives" className="btn-blue w-full text-center block">
                User Perspectives
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
