import type { Metadata } from "next";
import { Navbar }   from "@/components/layout/Navbar";
import { Footer }   from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About FABRIC",
  description: "Learn about the FABRIC testbed, its mission, team, and NSF funding.",
};

const teamRoles = [
  { role: "Principal Investigator", name: "Ilya Baldin",       org: "RENCI / UNC Chapel Hill" },
  { role: "Co-PI",                  name: "Paul Ruth",         org: "RENCI / UNC Chapel Hill" },
  { role: "Co-PI",                  name: "Anita Nikolich",    org: "University of Illinois Chicago" },
  { role: "Co-PI",                  name: "Kuang-Ching Wang",  org: "Clemson University" },
  { role: "Co-PI",                  name: "Michael Stealey",   org: "RENCI / UNC Chapel Hill" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          variant="dark"
          title="About FABRIC"
          description="FABRIC is an innovative infrastructure to prototype and validate novel network and computing solutions, funded by the National Science Foundation."
        />

        {/* Mission */}
        <section className="section bg-white">
          <div className="page-container max-w-3xl">
            <h2 className="text-2xl font-bold text-fabric-navy mb-4">Our Mission</h2>
            <p className="text-fabric-gray-600 leading-relaxed mb-4">
              FABRIC (Adaptive Programmable Research Infrastructure for Computer Science and Science Applications)
              is designed to enable cutting-edge research by providing a unique infrastructure that allows
              scientists and engineers to explore impactful new ideas that are impossible or impractical with
              the current Internet.
            </p>
            <p className="text-fabric-gray-600 leading-relaxed mb-4">
              The testbed enables rapid prototyping and validation of new network and distributed computing
              methods and applications that leverage novel technologies. FABRIC is a nationwide (and
              international) instrument that is deeply programmable, from the physical layer to the application
              layer.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="section bg-fabric-off-white">
          <div className="page-container">
            <h2 className="text-2xl font-bold text-fabric-navy mb-8">Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamRoles.map(({ role, name, org }) => (
                <div key={name} className="card p-6">
                  <div className="h-14 w-14 rounded-full bg-fabric-light flex items-center justify-center text-fabric-blue font-bold text-lg mb-4">
                    {name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <p className="font-semibold text-fabric-navy">{name}</p>
                  <p className="text-xs text-fabric-teal font-semibold mb-1">{role}</p>
                  <p className="text-xs text-fabric-gray-500">{org}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NSF Funding */}
        <section className="section bg-white">
          <div className="page-container max-w-3xl">
            <h2 className="text-2xl font-bold text-fabric-navy mb-4">Funding & Acknowledgments</h2>
            <p className="text-fabric-gray-600 leading-relaxed">
              FABRIC is funded by the National Science Foundation under grants CNS-1935966, CNS-2029176,
              CNS-2029200, CNS-2029235, CNS-2029260, CNS-2029261, and CNS-2330891. Any opinions, findings, and
              conclusions or recommendations expressed in this material are those of the author(s) and do not
              necessarily reflect the views of the National Science Foundation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
