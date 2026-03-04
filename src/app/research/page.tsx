import type { Metadata } from "next";
import Link    from "next/link";
import { Navbar }   from "@/components/layout/Navbar";
import { Footer }   from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Research & Collaboration",
  description: "Active projects, publications, and collaborative research on the FABRIC testbed.",
};

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          variant="light"
          title="Research & Collaboration"
          description="Discover active projects, publications, and partnership opportunities on FABRIC."
        />

        <section className="section bg-white">
          <div className="page-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Current Projects",
                  desc:  "Browse all active research projects running experiments on the FABRIC testbed.",
                  href:  "/research/projects",
                  cta:   "View Projects",
                },
                {
                  title: "Publications",
                  desc:  "Peer-reviewed papers, technical reports, and presentations citing FABRIC.",
                  href:  "/research/publications",
                  cta:   "Browse Publications",
                },
                {
                  title: "Partnerships",
                  desc:  "FABRIC collaborates with NSF, ACCESS, DOE labs, and international partners.",
                  href:  "/research/partnerships",
                  cta:   "Learn More",
                },
              ].map(({ title, desc, href, cta }) => (
                <div key={title} className="card p-8">
                  <h3 className="text-lg font-bold text-fabric-navy mb-3">{title}</h3>
                  <p className="text-sm text-fabric-gray-600 leading-relaxed mb-6">{desc}</p>
                  <Link href={href} className="btn-blue text-sm">{cta}</Link>
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
