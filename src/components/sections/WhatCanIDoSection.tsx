import Link from "next/link";

const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="currentColor" opacity="0.4"/>
        <circle cx="10" cy="10" r="3" fill="currentColor"/>
        <path d="M10 4v2M10 14v2M4 10h2M14 10h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: "Connect with real facilities: NSF clouds and testbeds, ACCESS compute clusters, and campus infrastructure",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="7" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="11" y="5" width="7" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 10h2M13 7l2 3-2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Run applications anywhere: campus, edge, cloud, or routers in between",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="7" y="7" width="6" height="6" rx="1" fill="currentColor" opacity="0.35"/>
        <path d="M7 3v2M13 3v2M7 15v2M13 15v2M3 7h2M3 13h2M15 7h2M15 13h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: "Program your hardware: control advanced in-network compute, storage, and accelerators with programmable NICs and switches on dedicated circuits",
  },
];

export function WhatCanIDoSection() {
  return (
    <section className="section bg-fabric-off-white">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-fabric-navy mb-3">
              What can I do with FABRIC?
            </h2>
            <p className="text-fabric-gray-600 text-sm leading-relaxed mb-8">
              Rethink how networks process and cache data to enable uses we cannot yet predict.
            </p>

            <ul className="space-y-5 mb-8">
              {capabilities.map(({ icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fabric-blue text-white">
                    {icon}
                  </span>
                  <p className="text-fabric-gray-600 text-sm leading-relaxed pt-1">{text}</p>
                </li>
              ))}
            </ul>

            <Link href="/use-fabric/get-started" className="btn-blue">
              Sign Up
            </Link>
          </div>

          {/* Right: "Still have questions" card — dark city aerial photo look */}
          <div>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ minHeight: "260px" }}
            >
              {/* City-at-night gradient simulation */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(160deg, #0d1b2e 0%, #1a2e4a 30%, #0f2544 60%, #071522 100%)",
                }}
              />
              {/* Ambient light dots to mimic aerial city lights */}
              <div className="absolute inset-0 overflow-hidden">
                {[
                  { x:"12%", y:"18%", s:"180px", o:"0.07" },
                  { x:"55%", y:"10%", s:"220px", o:"0.06" },
                  { x:"80%", y:"35%", s:"200px", o:"0.09" },
                  { x:"35%", y:"55%", s:"260px", o:"0.06" },
                  { x:"70%", y:"70%", s:"180px", o:"0.08" },
                  { x:"10%", y:"75%", s:"150px", o:"0.05" },
                ].map((blob, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      left: blob.x, top: blob.y,
                      width: blob.s, height: blob.s,
                      background: "radial-gradient(circle, rgba(245,197,24,1) 0%, transparent 70%)",
                      opacity: blob.o,
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                ))}
                {/* Blue ambient glow */}
                <div
                  className="absolute"
                  style={{
                    left:"50%", top:"40%",
                    width:"350px", height:"350px",
                    background: "radial-gradient(circle, rgba(33,150,201,0.25) 0%, transparent 70%)",
                    transform: "translate(-50%,-50%)",
                  }}
                />
              </div>

              {/* Overlay text */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-8" style={{ minHeight: "260px" }}>
                <p className="text-white font-semibold text-lg text-center mb-5 drop-shadow">
                  Still have questions about FABRIC?
                </p>
                <Link href="/documentation/support" className="btn-yellow">
                  Click Here
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
