import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const corePartners = [
  { file: "renci.png",                alt: "RENCI",                      height: 56 },
  { file: "uk.png",                   alt: "University of Kentucky",      height: 40 },
  { file: "binghamton-university.png", alt: "Binghamton University",       height: 40 },
  { file: "university-of-illinios.png", alt: "University of Illinois",   height: 40 },
  { file: "esnet.png",                alt: "ESnet",                       height: 40 },
];

const partners = [
  { file: "utah.png",                              alt: "University of Utah" },
  { file: "ncsa.png",                              alt: "NCSA Illinois" },
  { file: "fiu.png",                               alt: "Florida International University" },
  { file: "gt.png",                                alt: "Georgia Tech" },
  { file: "internet2.png",                         alt: "Internet2" },
  { file: "rutgers.png",                           alt: "Rutgers University" },
  { file: "tacc.png",                              alt: "TACC" },
  { file: "uchicago.png",                          alt: "University of Chicago" },
  { file: "ucsd.png",                              alt: "UC San Diego" },
  { file: "sdsc.png",                              alt: "SDSC" },
  { file: "usignite.png",                          alt: "US Ignite" },
  { file: "uva.png",                               alt: "University of Virginia" },
  { file: "starlight.png",                         alt: "StarLight" },
  { file: "indiana-university.png",               alt: "Indiana University" },
  { file: "maxgigapop.png",                        alt: "MAX Gigapop" },
  { file: "university-of-michiagan.png",          alt: "University of Michigan" },
  { file: "university-of-massachusetts-amherst.png", alt: "UMass Amherst" },
  { file: "mghpcc.png",                            alt: "MGHPCC" },
  { file: "umkc.png",                              alt: "UMKC" },
  { file: "princeton-university.png",             alt: "Princeton University" },
  { file: "psc.png",                               alt: "PSC" },
  { file: "university-of-bristol.png",            alt: "University of Bristol" },
  { file: "university-of-amsterdam.png",          alt: "University of Amsterdam" },
  { file: "university-of-tokyo.png",              alt: "University of Tokyo" },
  { file: "university-of-hawaii.png",             alt: "University of Hawaii" },
  { file: "chameleon.png",                         alt: "Chameleon" },
  { file: "cloudlab.png",                          alt: "CloudLab" },
  { file: "cosmos.png",                            alt: "COSMOS" },
  { file: "powder.png",                            alt: "POWDER" },
  { file: "peering.png",                           alt: "PEERING" },
  { file: "NJEdge.png",                            alt: "NJEdge" },
  { file: "cenic.png",                             alt: "CENIC" },
  { file: "GPN.png",                               alt: "GPN" },
  { file: "cern.png",                              alt: "CERN" },
  { file: "merit.png",                             alt: "Merit" },
  { file: "columbia.png",                          alt: "Columbia University" },
  { file: "sri.png",                               alt: "SRI International" },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-white">
          <div className="page-container max-w-5xl">

            <h1 className="text-3xl font-bold text-fabric-blue mb-4">Our Partners</h1>
            <p className="text-fabric-gray-500 mb-12">
              FABRIC is made possible by collaborations with the following organizations.
            </p>

            {/* Core partners */}
            <div className="flex flex-wrap items-center justify-center gap-5 mb-1 pb-12 border-fabric-gray-200">
              {corePartners.map(({ file, alt, height }) => (
                <div key={file} className="relative" style={{ height: `${height}px`, width: "150px" }}>
                  <Image
                    src={`/imgs/partners/${file}`}
                    alt={alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* All other partners */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-8">
              {partners.map(({ file, alt }) => (
                <div key={file} className="relative" style={{ height: "36px", width: "120px" }}>
                  <Image
                    src={`/imgs/partners/${file}`}
                    alt={alt}
                    fill
                    className="object-contain"
                  />
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
