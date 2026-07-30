"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialCarousel({ bgClass = "bg-white" }: { bgClass?: string } = {}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = testimonials[idx];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  function goTo(i: number) {
    setIdx(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  }

  return (
    <section className={`relative section ${bgClass} overflow-hidden`}>
      {/* Fabric wave watermark — top-left behind photo */}
      <div className="absolute top-0 pointer-events-none select-none" style={{ left: "-25%", width: "75%", height: "120%" }}>
        <Image src="/imgs/fabric-wave-grey.png" alt="" aria-hidden="true" fill sizes="75vw" className="object-contain object-left-top" style={{ opacity: 0.1 }} />
      </div>

      <div
        className="page-container relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Main row — items-end so text aligns to blue card top */}
        <div className="max-w-5xl mx-auto" style={{ minHeight: "250px" }}>
          <div className="flex flex-col sm:flex-row gap-10 items-end">

            {/* Photo — blue card with photo overflowing above */}
            <div className="shrink-0 relative w-[350px] h-[160px] self-end">
              {/* Blue card — fills the container */}
              <div className="absolute inset-0 bg-[#2196C9] rounded-2xl border-2 border-[#7AD4EE]" />
              {/* Photo — anchored to bottom, overflows above */}
              {current.photo ? (
                <Image
                  src={current.photo}
                  alt={current.name}
                  width={500}
                  height={500}
                  className="testimonial-photo"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-6xl">
                  {current.photoPlaceholder}
                </div>
              )}
            </div>

            {/* Text content — aligned to top of blue card */}
            <div className="flex-1 min-w-0 pb-2">
              <p className="font-bold text-fabric-navy text-2xl leading-tight mb-1">
                {current.name}
              </p>
              <p className="text-fabric-teal text-base font-bold uppercase tracking-widest mb-4">
                {current.institution}
              </p>
              <blockquote className="text-fabric-gray-600 text-[15px] leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Learn More — right-aligned across full width */}
          <div className="flex justify-end mt-6">
            <Link href={current.href} className="btn-yellow">
              Learn More
            </Link>
          </div>
        </div>

        {/* Topic + dots — centered */}
        <div className="max-w-5xl mx-auto mt-6 text-center">
          <p className="text-fabric-teal font-semibold text-2xl italic mb-4">
            {current.topic}
          </p>
          <div className="flex items-center justify-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 ${
                  i === idx
                    ? "bg-fabric-gray-500 border-fabric-gray-500"
                    : "bg-white border-fabric-gray-300 hover:border-fabric-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
