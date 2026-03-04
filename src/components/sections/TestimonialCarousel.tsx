"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const current = testimonials[idx];

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  return (
    <section className="section bg-white">
      <div className="page-container">
        <div className="max-w-3xl mx-auto">

          <div className="flex flex-col sm:flex-row gap-7 items-start">
            {/* Photo */}
            <div className="shrink-0">
              <div className="h-[100px] w-[100px] rounded-2xl bg-gradient-to-br from-fabric-light to-fabric-sky/30 border border-fabric-gray-200 flex items-center justify-center text-fabric-blue font-bold text-2xl shadow-sm">
                {current.photoPlaceholder}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="font-bold text-fabric-navy text-base leading-tight mb-0.5">
                {current.name}
              </p>
              <p className="text-fabric-teal text-xs font-bold uppercase tracking-widest mb-4">
                {current.institution}
              </p>
              <blockquote className="text-fabric-gray-600 text-sm leading-relaxed mb-5">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <Link href={current.href} className="btn-yellow text-sm">
                Learn More
              </Link>
            </div>
          </div>

          {/* Topic label + navigation */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-fabric-gray-200 pt-6">
            <p className="text-fabric-teal font-semibold text-base italic">{current.topic}</p>

            <div className="flex items-center gap-3">
              {/* Dot indicators */}
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      i === idx ? "w-5 bg-fabric-teal" : "w-2 bg-fabric-gray-200 hover:bg-fabric-sky"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <button
                onClick={prev}
                className="h-7 w-7 rounded-full border border-fabric-gray-200 flex items-center justify-center hover:bg-fabric-light transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4 text-fabric-gray-600" />
              </button>
              <button
                onClick={next}
                className="h-7 w-7 rounded-full border border-fabric-gray-200 flex items-center justify-center hover:bg-fabric-light transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4 text-fabric-gray-600" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
