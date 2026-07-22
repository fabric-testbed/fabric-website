import type { Metadata } from "next";
import { Navbar }                from "@/components/layout/Navbar";
import { Footer }                from "@/components/layout/Footer";
import { PageHero }              from "@/components/ui/PageHero";
import { TestimonialCarousel }   from "@/components/sections/TestimonialCarousel";
import { IsRightForMeSection }   from "@/components/sections/IsRightForMeSection";
import { SignUpStepsSection }    from "@/components/sections/SignUpStepsSection";
import { AvailableSupportSection } from "@/components/sections/AvailableSupportSection";

export const metadata: Metadata = {
  title: "Use FABRIC",
  description: "Prototype and deploy experiments rapidly, securely, and at scale on the FABRIC testbed.",
};

/** Icon strip that appears in the Use FABRIC hero (right side of prototype) */
function HeroIllustration() {
  const nodes = [
    { label: "Instruments",   icon: "📡", cx: "50%",  cy: "20%" },
    { label: "Campus",        icon: "🏫", cx: "15%",  cy: "55%" },
    { label: "Network",       icon: "🔗", cx: "50%",  cy: "55%" },
    { label: "Data Centers",  icon: "🖥️",  cx: "85%",  cy: "20%" },
    { label: "Public Clouds", icon: "☁️",  cx: "85%",  cy: "80%" },
  ];
  return (
    <div className="relative w-72 h-48 hidden md:block">
      <svg viewBox="0 0 280 180" className="absolute inset-0 w-full h-full" fill="none">
        {/* Connection lines */}
        <line x1="140" y1="36" x2="42"  y2="99"  stroke="white" strokeWidth="1" opacity="0.3" />
        <line x1="140" y1="36" x2="140" y2="99"  stroke="white" strokeWidth="1" opacity="0.3" />
        <line x1="140" y1="36" x2="238" y2="36"  stroke="white" strokeWidth="1" opacity="0.3" />
        <line x1="140" y1="36" x2="238" y2="144" stroke="white" strokeWidth="1" opacity="0.3" />
      </svg>
      {nodes.map(({ label, icon }) => (
        <div key={label} className="absolute flex flex-col items-center gap-1 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-2xl">{icon}</span>
          <span className="text-white/70 text-xs font-medium whitespace-nowrap">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function UseFabricPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          variant="dark"
          title=""
          illustration={<HeroIllustration />}
        />
        <TestimonialCarousel />
        <IsRightForMeSection />
        <SignUpStepsSection />
        <AvailableSupportSection />
      </main>
      <Footer />
    </>
  );
}
