import Link from "next/link";

// FABRIC site locations — (x,y) as fractions of 1000×520 viewBox
const siteLocations = [
  { name: "UNH",      city: "Durham, NH",       x: 830, y: 114, status: "active" },
  { name: "STAR",     city: "Upton, NY",         x: 820, y: 140, status: "active" },
  { name: "SRI",      city: "Princeton, NJ",     x: 810, y: 156, status: "active" },
  { name: "PSC",      city: "Pittsburgh, PA",    x: 770, y: 172, status: "active" },
  { name: "RENCI",    city: "Chapel Hill, NC",   x: 760, y: 234, status: "active" },
  { name: "GaTech",   city: "Atlanta, GA",       x: 720, y: 270, status: "active" },
  { name: "FIU",      city: "Miami, FL",         x: 740, y: 338, status: "active" },
  { name: "UKY",      city: "Lexington, KY",     x: 710, y: 224, status: "active" },
  { name: "UChicago", city: "Chicago, IL",       x: 660, y: 166, status: "active" },
  { name: "TACC",     city: "Austin, TX",        x: 550, y: 296, status: "active" },
  { name: "KSU",      city: "Manhattan, KS",     x: 570, y: 198, status: "active" },
  { name: "UCSD",     city: "San Diego, CA",     x: 180, y: 270, status: "active" },
  { name: "UCLA",     city: "Los Angeles, CA",   x: 150, y: 250, status: "active" },
  { name: "LBNL",     city: "Berkeley, CA",      x: 100, y: 182, status: "active" },
  { name: "UW",       city: "Seattle, WA",       x: 110, y:  78, status: "active" },
  { name: "Hawaii",   city: "Honolulu, HI",      x:  85, y: 390, status: "active" },
  { name: "Tokyo",    city: "Tokyo, Japan",       x:  50, y: 145, status: "international" },
];

// Backbone connections (index pairs)
const connections: [number, number][] = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[5,7],[7,8],[8,3],
  [8,9],[8,10],[9,10],[9,11],[10,12],[11,12],[12,13],[13,14],
  [14,15],[13,16],
];

export function ResourceMapSection() {
  return (
    <section className="section bg-white">
      <div className="page-container">
        <h2 className="text-2xl font-bold text-fabric-navy mb-8">Resource Map</h2>

        {/* Map container */}
        <div className="relative w-full rounded-2xl border border-fabric-gray-200 overflow-hidden bg-[#EAF4FB]">
          <div className="relative" style={{ paddingBottom: "50%" }}>
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Continental US outline (simplified) */}
                <path
                  d="
                    M 160,68 L 240,52 L 340,48 L 440,46 L 560,44 L 660,46 L 760,52 L 840,64 L 900,88
                    L 930,120 L 940,160 L 930,200 L 920,240 L 900,280 L 870,320 L 830,360 L 780,395
                    L 720,418 L 650,432 L 570,440 L 490,444 L 410,440 L 330,428 L 260,408 L 200,380
                    L 160,348 L 138,308 L 128,264 L 130,222 L 140,180 L 148,140 L 152,106 Z
                  "
                  fill="#D2E9F5"
                  stroke="#A8C8DC"
                  strokeWidth="1.5"
                />

                {/* Gulf + Florida peninsula */}
                <path
                  d="M 680,434 L 720,450 L 740,460 L 750,472 L 748,484 L 742,492 L 734,496 L 726,492 L 720,480 L 710,468 L 696,452 Z"
                  fill="#D2E9F5"
                  stroke="#A8C8DC"
                  strokeWidth="1"
                />

                {/* Inset: Hawaii / Alaska label box */}
                <rect x="20" y="345" width="140" height="90" rx="5" fill="white" fillOpacity="0.7" stroke="#A8C8DC" strokeWidth="1"/>
                <text x="90" y="396" textAnchor="middle" fontSize="9" fill="#6B8DA4" fontFamily="sans-serif">Alaska / Hawaii</text>

                {/* Hawaii dot */}
                <circle cx="70" cy="418" r="5" fill="#2196C9" opacity="0.7"/>
                <circle cx="70" cy="418" r="9" fill="#2196C9" opacity="0.15"/>

                {/* Backbone connection lines */}
                {connections.map(([a, b], i) => {
                  const n1 = siteLocations[a];
                  const n2 = siteLocations[b];
                  if (!n1 || !n2) return null;
                  return (
                    <line
                      key={i}
                      x1={n1.x} y1={n1.y}
                      x2={n2.x} y2={n2.y}
                      stroke="#1A73B5"
                      strokeWidth="1"
                      opacity="0.35"
                    />
                  );
                })}

                {/* Site nodes */}
                {siteLocations.map((site) => (
                  <g key={site.name}>
                    <circle
                      cx={site.x} cy={site.y}
                      r="9"
                      fill={site.status === "international" ? "#F5C518" : "#2196C9"}
                      opacity="0.18"
                    />
                    <circle
                      cx={site.x} cy={site.y}
                      r="4.5"
                      fill={site.status === "international" ? "#D4A800" : "#1A73B5"}
                      opacity="0.95"
                    />
                    <text
                      x={site.x} y={site.y - 11}
                      textAnchor="middle"
                      fontSize="7.5"
                      fill="#1B3A5C"
                      fontWeight="600"
                      fontFamily="sans-serif"
                    >
                      {site.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-3 border-t border-fabric-gray-200 bg-fabric-gray-100 text-xs font-semibold text-fabric-gray-600 uppercase tracking-wider">
            <div className="px-5 py-3">Location</div>
            <div className="px-5 py-3">Site Name</div>
            <div className="px-5 py-3">Status</div>
          </div>
        </div>

        {/* Helper text + CTA */}
        <p className="text-xs text-fabric-gray-400 mt-3 text-center mb-6">
          Hover over each site location to learn more.
        </p>
        <div className="flex justify-center">
          <Link href="/facilities/resource-map" className="btn-yellow">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
