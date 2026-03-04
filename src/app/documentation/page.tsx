import type { Metadata } from "next";
import { Navbar }                     from "@/components/layout/Navbar";
import { Footer }                     from "@/components/layout/Footer";
import { PageHero }                   from "@/components/ui/PageHero";
import { AvailableSupportSection }    from "@/components/sections/AvailableSupportSection";

export const metadata: Metadata = {
  title: "Documentation & Support",
  description: "Knowledge Base, forums, orientation videos, office hours, and KNIT conference resources.",
};

export default function DocumentationPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          variant="light"
          title="Documentation & Support"
          description="Everything you need to get started, troubleshoot, and master the FABRIC testbed."
        />
        <AvailableSupportSection />
      </main>
      <Footer />
    </>
  );
}
