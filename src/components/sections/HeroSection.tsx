import Link from "next/link";

// Network topology nodes (x,y in 0–500 viewBox space)
const nodes: Array<{ x: number; y: number; size: "lg" | "md" | "sm"; accent?: boolean }> = [
  // Outer ring
  { x: 250, y: 28,  size: "md" },
  { x: 368, y: 62,  size: "sm" },
  { x: 450, y: 145, size: "md" },
  { x: 472, y: 260, size: "sm" },
  { x: 432, y: 370, size: "md" },
  { x: 320, y: 440, size: "sm" },
  { x: 180, y: 440, size: "md" },
  { x: 68,  y: 370, size: "sm" },
  { x: 28,  y: 260, size: "md" },
  { x: 52,  y: 150, size: "sm" },
  { x: 132, y: 62,  size: "md" },
  // Mid ring
  { x: 250, y: 95,  size: "sm" },
  { x: 345, y: 128, size: "md" },
  { x: 392, y: 225, size: "sm" },
  { x: 360, y: 330, size: "md" },
  { x: 260, y: 385, size: "sm" },
  { x: 148, y: 375, size: "md" },
  { x: 106, y: 275, size: "sm" },
  { x: 112, y: 168, size: "md" },
  // Inner ring
  { x: 250, y: 162, size: "sm" },
  { x: 322, y: 198, size: "md" },
  { x: 338, y: 290, size: "sm" },
  { x: 268, y: 340, size: "md" },
  { x: 178, y: 325, size: "sm" },
  { x: 162, y: 232, size: "md" },
  // Center
  { x: 250, y: 252, size: "lg", accent: true },
];

const edges: [number, number][] = [
  // Outer ring
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,0],
  // Outer↔mid
  [0,11],[1,12],[2,12],[3,13],[4,14],[5,15],[6,16],[7,17],[8,17],[9,18],[10,18],[10,11],
  // Mid ring
  [11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,11],
  // Mid↔inner
  [11,19],[12,20],[13,20],[13,21],[14,21],[15,22],[15,23],[16,23],[16,24],[17,24],[18,19],
  // Inner ring
  [19,20],[20,21],[21,22],[22,23],[23,24],[24,19],
  // Inner↔center
  [19,25],[20,25],[21,25],[22,25],[23,25],[24,25],
];

export function HeroSection() {
  return (
    <section className="relative min-h-[480px] flex items-center overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-hero-radial" />

      {/* Network globe visualization — right half */}
      <div className="absolute right-[-2%] top-0 bottom-0 w-[58%] hidden md:flex items-center justify-center">
        {/* Left fade so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A5C] via-[#1B3A5C]/20 to-transparent z-10 pointer-events-none" />
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <filter id="nodeGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="centerGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#2196C9" stopOpacity="0.12" />
              <stop offset="70%"  stopColor="#1A73B5" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#1B3A5C" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="250" cy="252" r="230" fill="url(#bgGlow)" />

          {edges.map(([a, b], i) => {
            const n1 = nodes[a];
            const n2 = nodes[b];
            if (!n1 || !n2) return null;
            return (
              <line
                key={i}
                x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
                stroke="#5BC4E5"
                strokeWidth="0.7"
                opacity="0.22"
              />
            );
          })}

          {nodes.map((n, i) => {
            if (n.accent) {
              return (
                <g key={i} filter="url(#centerGlow)">
                  <circle cx={n.x} cy={n.y} r="22" fill="#F5C518" opacity="0.18" />
                  <circle cx={n.x} cy={n.y} r="11" fill="#F5C518" opacity="0.85" />
                </g>
              );
            }
            if (n.size === "lg") {
              return (
                <g key={i} filter="url(#nodeGlow)">
                  <circle cx={n.x} cy={n.y} r="14" fill="#5BC4E5" opacity="0.18" />
                  <circle cx={n.x} cy={n.y} r="7"  fill="#5BC4E5" opacity="0.95" />
                </g>
              );
            }
            if (n.size === "md") {
              return (
                <g key={i} filter="url(#nodeGlow)">
                  <circle cx={n.x} cy={n.y} r="9"  fill="#5BC4E5" opacity="0.15" />
                  <circle cx={n.x} cy={n.y} r="4.5" fill="#5BC4E5" opacity="0.9" />
                </g>
              );
            }
            return (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r="5" fill="#5BC4E5" opacity="0.12" />
                <circle cx={n.x} cy={n.y} r="2.5" fill="#5BC4E5" opacity="0.65" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Text content */}
      <div className="page-container relative z-20 py-20 md:py-28">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
            Explore impactful ideas
            <br />
            beyond the scope of
            <br />
            the current Internet.
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-9 max-w-md">
            An innovative infrastructure to prototype and validate novel
            network and computing solutions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/use-fabric/get-started" className="btn-yellow">
              Get Started
            </Link>
            <Link
              href="https://portal.fabric-testbed.net"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              Enter Portal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
