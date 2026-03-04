import type { Metadata } from "next";
import { Navbar }                       from "@/components/layout/Navbar";
import { Footer }                       from "@/components/layout/Footer";
import { PageHero }                     from "@/components/ui/PageHero";
import { ProjectHighlightsSection }     from "@/components/sections/ProjectHighlightsSection";
import { NewsEventsSection }            from "@/components/sections/NewsEventsSection";

export const metadata: Metadata = {
  title: "Community & Events",
  description: "News, events, project highlights, and community resources for FABRIC users.",
};

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          variant="light"
          title="Community & Events"
          description="Stay connected with the FABRIC community through news, events, and research highlights."
        />

        {/* Project Highlights with filter UI */}
        <section className="section bg-white">
          <div className="page-container">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-7 w-7 rounded-full bg-fabric-yellow flex items-center justify-center text-xs font-bold text-fabric-navy shrink-0">
                1
              </div>
              <h2 className="text-2xl font-bold text-fabric-navy">Project Highlights</h2>
            </div>
          </div>
          <ProjectHighlightsSection showFilters />
        </section>

        <NewsEventsSection />
      </main>
      <Footer />
    </>
  );
}
