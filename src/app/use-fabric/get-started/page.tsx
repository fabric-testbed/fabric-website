"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
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


// ── Page ──────────────────────────────────────────────────────────────────────
export default function GetStartedPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Section 1: Hero ──────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <Image
            src="/imgs/get-started-hero.jpg"
            alt="Get started with FABRIC"
            width={1920}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </section>

        {/* ── Section 2: Testimonial carousel ──────────────────────── */}
        <TestimonialCarousel bgClass="bg-fabric-off-white" />

        {/* ── Section 3: Is FABRIC Right for Me? ───────────────────── */}
        <section className="relative py-16 bg-white overflow-hidden">
          {/* Wave background — right-aligned */}
          <div className="absolute top-0 pointer-events-none select-none" style={{ right: "-25%", width: "65%", height: "120%" }}>
            <Image src="/imgs/fabric-wave-grey.png" alt="" aria-hidden="true" fill sizes="65vw" className="object-contain object-right-top" style={{ opacity: 0.1 }} />
          </div>
          <div className="page-container max-w-4xl relative">
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
              {signUpSteps.map((step) => (
                <div
                  key={step}
                  className="flex flex-col items-center justify-center text-center rounded-2xl p-6 aspect-square font-bold text-white text-sm leading-snug"
                  style={{ background: "#2196C9" }}
                >
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
                Sign Up
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
