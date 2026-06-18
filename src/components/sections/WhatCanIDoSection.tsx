import Image from "next/image";
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

          {/* Right: "Still have questions" card */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/imgs/city-network.png"
                alt="City skyline with network overlay"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-fabric-teal font-semibold text-lg text-center">
              Still have questions<br />about FABRIC?
            </p>
            <Link href="/documentation/support" className="btn-yellow">
              Click Here
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
