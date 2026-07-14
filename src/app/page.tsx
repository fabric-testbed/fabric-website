import { Navbar }                  from "@/components/layout/Navbar";
import { Footer }                  from "@/components/layout/Footer";
import { HeroSection }             from "@/components/sections/HeroSection";
import { TestimonialCarousel }     from "@/components/sections/TestimonialCarousel";
import { WhatCanIDoSection }       from "@/components/sections/WhatCanIDoSection";
import { ResourceMapSection }      from "@/components/sections/ResourceMapSection";
import { ByTheNumbersSection }     from "@/components/sections/ByTheNumbersSection";
import { NewsEventsSection }       from "@/components/sections/NewsEventsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        {/* 1. Hero: "Explore impactful ideas beyond the scope of the current Internet" */}
        <HeroSection />

        {/* 2. News + Events */}
        <NewsEventsSection />

        {/* 3. Testimonial carousel */}
        <TestimonialCarousel />

        {/* 4. What can I do with FABRIC? */}
        <WhatCanIDoSection />

        {/* 5. Resource Map */}
        <ResourceMapSection />

        {/* 6. By the Numbers */}
        <ByTheNumbersSection />
      </main>
      <Footer />
    </>
  );
}
