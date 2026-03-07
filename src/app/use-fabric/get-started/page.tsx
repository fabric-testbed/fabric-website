"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { testimonials } from "@/lib/data/testimonials";
import { supportResources } from "@/lib/data/support";

// ── Data ──────────────────────────────────────────────────────────────────────
const useCases = [
  "Experiment at scale on a realistic global network",
  "Develop reproducible, publishable experiments",
  "Reimagine data generation, processing, and caching throughout the network and computing continuum",
  "Automate tests and redesign in rapid test-fix-test cycles",
  "Create smarter, faster tools for managing scientific workflows and data",
  "Prototype and validate disruptive designs before deploying into production",
  "Push the frontier of distributed applications and networking experiments",
];

const signUpSteps = [
  "Sign up for an account",
  "Wait for Approval",
  "Join or Create A Project",
  "Start Experimenting",
];

// ── Hero network diagram SVG ──────────────────────────────────────────────────
function NetworkDiagram() {
  return (
    <svg viewBox="0 0 420 280" className="w-full max-w-md" fill="none">
      {/* Arrows from center to each node */}
      {/* Center hub to Instruments */}
      <line x1="210" y1="140" x2="105" y2="70"  stroke="white" strokeWidth="1.5" markerEnd="url(#arr)" markerStart="url(#arr)" />
      {/* Center hub to Data Centers */}
      <line x1="210" y1="140" x2="315" y2="70"  stroke="white" strokeWidth="1.5" markerEnd="url(#arr)" markerStart="url(#arr)" />
      {/* Center hub to Campus */}
      <line x1="210" y1="140" x2="105" y2="210" stroke="white" strokeWidth="1.5" markerEnd="url(#arr)" markerStart="url(#arr)" />
      {/* Center hub to Public Clouds */}
      <line x1="210" y1="140" x2="315" y2="210" stroke="white" strokeWidth="1.5" markerEnd="url(#arr)" markerStart="url(#arr)" />

      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="white" />
        </marker>
      </defs>

      {/* Center node */}
      <circle cx="210" cy="140" r="28" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="210" cy="132" r="5"  fill="white" />
      <circle cx="200" cy="148" r="5"  fill="white" />
      <circle cx="220" cy="148" r="5"  fill="white" />
      <line x1="210" y1="137" x2="200" y2="143" stroke="white" strokeWidth="1.5" />
      <line x1="210" y1="137" x2="220" y2="143" stroke="white" strokeWidth="1.5" />
      <text x="210" y="176" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">Network</text>

      {/* Instruments - satellite dish */}
      <g transform="translate(65,30)">
        <ellipse cx="40" cy="28" rx="22" ry="14" fill="none" stroke="white" strokeWidth="1.5" transform="rotate(-30,40,28)" />
        <line x1="40" y1="28" x2="40" y2="42" stroke="white" strokeWidth="1.5" />
        <line x1="28" y1="42" x2="52" y2="42" stroke="white" strokeWidth="1.5" />
        <text x="40" y="60" textAnchor="middle" fill="#F5C518" fontSize="11" fontWeight="600">Instruments</text>
      </g>

      {/* Data Centers - building */}
      <g transform="translate(278,28)">
        <rect x="14" y="8"  width="38" height="34" rx="2" fill="none" stroke="white" strokeWidth="1.5" />
        <rect x="20" y="14" width="8"  height="6"  fill="none" stroke="white" strokeWidth="1" />
        <rect x="34" y="14" width="8"  height="6"  fill="none" stroke="white" strokeWidth="1" />
        <rect x="20" y="26" width="8"  height="6"  fill="none" stroke="white" strokeWidth="1" />
        <rect x="34" y="26" width="8"  height="6"  fill="none" stroke="white" strokeWidth="1" />
        <rect x="25" y="34" width="16" height="8"  fill="none" stroke="white" strokeWidth="1" />
        <text x="33" y="58" textAnchor="middle" fill="#F5C518" fontSize="11" fontWeight="600">Data Centers</text>
      </g>

      {/* Campus - university */}
      <g transform="translate(65,170)">
        <rect x="12" y="20" width="56" height="24" rx="2" fill="none" stroke="white" strokeWidth="1.5" />
        <polygon points="40,6 12,22 68,22" fill="none" stroke="white" strokeWidth="1.5" />
        <rect x="30" y="28" width="20" height="16" fill="none" stroke="white" strokeWidth="1" />
        <line x1="40" y1="6"  x2="40" y2="2"  stroke="white" strokeWidth="1.5" />
        <text x="40" y="58" textAnchor="middle" fill="#F5C518" fontSize="11" fontWeight="600">Campus</text>
      </g>

      {/* Public Clouds - cloud */}
      <g transform="translate(275,165)">
        <path d="M18,36 Q12,36 12,28 Q12,20 20,20 Q22,14 30,14 Q38,14 40,20 Q46,20 46,28 Q46,36 38,36 Z"
          fill="none" stroke="white" strokeWidth="1.5" />
        <line x1="33" y1="36" x2="33" y2="46" stroke="white" strokeWidth="1.5" />
        <polyline points="26,42 33,36 40,42" fill="none" stroke="white" strokeWidth="1.5" />
        <text x="29" y="62" textAnchor="middle" fill="#F5C518" fontSize="11" fontWeight="600">Public Clouds</text>
      </g>
    </svg>
  );
}

// ── Testimonial carousel ──────────────────────────────────────────────────────
function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = testimonials[idx];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 3000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="py-16 bg-fabric-off-white">
      <div className="page-container max-w-4xl">

        {/* Slide */}
        <div
          key={idx}
          className="flex flex-col sm:flex-row items-start gap-10 animate-fade-in"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Photo stack */}
          <div className="shrink-0 relative w-[200px] h-[220px] self-start">
            <div
              className="absolute bottom-0 right-0 w-[180px] h-[200px] rounded-2xl"
              style={{ background: "#2196C9" }}
            />
            <div className="absolute top-0 left-0 w-[180px] h-[200px] rounded-2xl overflow-hidden bg-fabric-gray-100 flex items-center justify-center">
              {t.photo ? (
                <Image src={t.photo} alt={t.name} fill className="object-cover object-top" />
              ) : (
                <span className="text-4xl font-bold text-fabric-blue">{t.photoPlaceholder}</span>
              )}
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-fabric-navy mb-0.5">{t.name}</h3>
            <p className="text-base font-semibold text-fabric-teal uppercase tracking-wide mb-4">
              {t.institution}
            </p>
            <p className="text-sm text-fabric-gray-600 leading-relaxed mb-8">"{t.quote}"</p>
            <div className="flex justify-end">
              <Link href={t.href} className="btn-yellow">Learn More</Link>
            </div>
          </div>
        </div>

        {/* Topic + dots — centered below */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-xl italic font-semibold text-fabric-blue">{t.topic}</p>
          <div className="flex items-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-3 w-3 rounded-full transition-colors ${
                  i === idx ? "bg-fabric-gray-600" : "bg-fabric-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function GetStartedPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Section 1: Hero ──────────────────────────────────────── */}
        <section
          className="py-16"
          style={{ background: "linear-gradient(135deg, #2196C9 0%, #1B3A5C 100%)" }}
        >
          <div className="page-container max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
                  Prototype and deploy experiments rapidly, securely, and at scale.
                </h1>
              </div>
              <div className="flex-1 flex justify-center">
                <NetworkDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Testimonial carousel ──────────────────────── */}
        <TestimonialCarousel />

        {/* ── Section 3: Is FABRIC Right for Me? ───────────────────── */}
        <section className="py-16 bg-white">
          <div className="page-container max-w-4xl">
            <h2 className="text-2xl font-bold text-fabric-blue mb-4">Is FABRIC Right for Me?</h2>
            <p className="text-sm text-fabric-gray-600 leading-relaxed mb-3">
              FABRIC is an infrastructure designed to explore impactful new ideas that are impossible or impractical with the current Internet.
            </p>
            <p className="text-sm text-fabric-gray-600 leading-relaxed mb-8">
              FABRIC's goal is to enable rapid prototyping and validation of new network and distributed computing methods and applications that leverage novel technologies that are not accessible, programmable, or at sufficient levels elsewhere.
            </p>

            {/* Use case bullets */}
            <div className="bg-fabric-off-white rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                {useCases.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-3 w-3 shrink-0 bg-fabric-blue rounded-sm" />
                    <span className="text-sm text-fabric-gray-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Link href="/about" className="btn-yellow">Learn More About FABRIC</Link>
            </div>
          </div>
        </section>

        {/* ── Section 4: How do I Sign Up? ─────────────────────────── */}
        <section className="py-16 bg-fabric-gray-100">
          <div className="page-container max-w-4xl">
            <h2 className="text-2xl font-bold text-fabric-blue mb-3">How do I Sign Up?</h2>
            <p className="text-sm text-fabric-gray-600 leading-relaxed mb-10">
              The first step is to sign up for a FABRIC portal account. This allows you to join and manage projects, SSH keys, and API tokens, as well as create or visualize slice topologies.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {signUpSteps.map((step, i) => (
                <div
                  key={step}
                  className="flex flex-col items-center justify-center text-center rounded-2xl p-6 aspect-square font-bold text-white text-sm leading-snug"
                  style={{ background: "#2196C9" }}
                >
                  <span className="text-2xl font-bold mb-2 opacity-60">{i + 1}</span>
                  {step}
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <a
                href="https://portal.fabric-testbed.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yellow"
              >
                Sign Up on the Portal
              </a>
            </div>
          </div>
        </section>

        {/* ── Section 5: Available Support ─────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="page-container max-w-5xl">
            <h2 className="text-2xl font-bold text-fabric-navy mb-10 text-center">Available Support</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {supportResources.map((s) => (
                <div key={s.label} className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm">
                  {/* Teal header */}
                  <div
                    className="px-4 py-5 text-center font-bold text-white text-sm leading-snug"
                    style={{ background: "#2196C9", borderRadius: "16px 16px 0 0" }}
                  >
                    {s.label}
                  </div>
                  {/* Body */}
                  <div className="flex flex-col flex-1 px-4 py-5">
                    <p className="text-xs text-fabric-gray-600 leading-relaxed flex-1 mb-5 text-center">
                      {s.desc}
                    </p>
                    <div className="flex justify-center">
                      <a
                        href={s.href}
                        target={s.external ? "_blank" : undefined}
                        rel={s.external ? "noopener noreferrer" : undefined}
                        className="btn-yellow text-xs px-5 py-2"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
