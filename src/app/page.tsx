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

        {/* 2. Testimonial carousel (Fatou Secka, Elie Kfoury...) */}
        <TestimonialCarousel />

        {/* 3. What can I do with FABRIC? */}
        <WhatCanIDoSection />

        {/* 4. Resource Map */}
        <ResourceMapSection />

        {/* 5. By the Numbers */}
        <ByTheNumbersSection />

        {/* 6. News + Events */}
        <NewsEventsSection />
      </main>
      <Footer />
    </>
  );
}
