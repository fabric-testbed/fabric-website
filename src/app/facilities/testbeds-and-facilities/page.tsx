"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, ExternalLink, Link as LinkIcon } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const testbeds = [
  {
    name: "AERPAW",
    url: "https://aerpaw.org/",
    image: "/imgs/testbeds/aerpaw.png",
    description:
      "AERPAW (Aerial Experimentation and Research Platform for Advanced Wireless) aim is to develop an advanced wireless research platform.",
  },
  {
    name: "ARA",
    url: "https://arawireless.org/",
    image: "/imgs/testbeds/ara.png",
    description:
      "ARA is a wireless living lab for smart and connected rural communities that complements the technical specialties of earlier PAWR platforms, adding a focus on technologies for low-cost, high-speed rural broadband connectivity.",
  },
  {
    name: "Bridges",
    url: "https://cnl.gmu.edu/bridges/",
    image: "/imgs/testbeds/bridges.png",
    description:
      "Binding Research Infrastructures for the Deployment of Global Experimental Science, BRIDGES goal is to make customized deterministic cyber-infrastructure resources available to advanced experimental applications globally.",
  },
  {
    name: "Bristol is Open",
    url: "https://www.bristol.gov.uk/policies-plans-strategies/bristol-is-open",
    image: "/imgs/testbeds/bristol-is-open.png",
    description:
      "Bristol is Open (BiO), was set up as a joint venture between Bristol City Council and the University of Bristol, to develop a 'test-bed' programmable, digital infrastructure.",
  },
  {
    name: "Chameleon Cloud",
    url: "https://chameleoncloud.org/",
    image: "/imgs/testbeds/chameleon-cloud.png",
    description:
      "Chameleon is a large-scale, deeply reconfigurable experimental platform built to support Computer Sciences systems research.",
  },
  {
    name: "CloudLab",
    url: "https://www.cloudlab.us/",
    image: "/imgs/testbeds/cloudlab.png",
    description:
      "Flexible, scientific infrastructure for research on the future of cloud computing. Researchers use CloudLab to build their own clouds, experimenting with new architectures that will form the basis for the next generation of computing platforms.",
  },
  {
    name: "Colosseum",
    url: "http://colosseum.net",
    image: "/imgs/testbeds/colosseum.png",
    description:
      "Colosseum is owned and operated by the Institute for the Wireless Internet of Things (WIoT) at Northeastern University. It provides the fidelity of hardware channel emulators, the flexibility of cloud-based emulators, and the scale of network simulators — emulating wireless signals with granularity at the RF signal level.",
  },
  {
    name: "Cosmos",
    url: "https://powderwireless.net/",
    image: "/imgs/testbeds/cosmos.png",
    description:
      "The COSMOS project is aimed at design, development, and deployment of a city-scale advanced wireless testbed in order to support real-world experimentation on next-generation wireless technologies and applications.",
  },
  {
    name: "COSMIC",
    url: null,
    image: null,
    description:
      "COSMIC enables the use of unique programmable wireless, optical, and edge-cloud network testbed infrastructure for international collaborative experiments. It builds on the PAWR COSMOS and ORBIT testbeds with PEERING and FABRIC, and adds connections to international testbeds including CPQD (Brazil), Kyutech/StarBED (Japan), OneLab/NITOS (EU/Greece), and CONNECT (Ireland).",
  },
  {
    name: "FAB",
    url: "https://portal.fabric-testbed.net/about/about-fabric",
    image: "/imgs/testbeds/fab.png",
    description:
      "FABRIC Across Borders (FAB) is an extension of the FABRIC testbed connecting the core North America infrastructure to four nodes in Asia, Europe, and South America, enabling international collaboration to speed scientific discovery.",
  },
  {
    name: "MERGE",
    url: "https://www.mergetb.org/",
    image: "/imgs/testbeds/merge-tb.png",
    description:
      "MergeTB is a large distributed system providing user accounts, projects, shared storage, experiment control, and access to running experiments. Testbed facilities provide the resources that underpin experiments.",
  },
  {
    name: "PEERING",
    url: "https://peering.ee.columbia.edu/",
    image: "/imgs/testbeds/peering.png",
    description:
      "PEERING is a system that provides safe and easy access for researchers and educators to the Internet's BGP routing system, enabling and inspiring transformational research.",
  },
  {
    name: "POWDER",
    url: "https://powderwireless.net/",
    image: "/imgs/testbeds/powder.png",
    description:
      'POWDER (the Platform for Open Wireless Data-driven Experimental Research) is a facility for experimenting on the future of wireless networking in a city-scale "living laboratory."',
  },
];

export default function TestbedsAndFacilitiesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return testbeds;
    return testbeds.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="py-12 bg-white border-b border-fabric-gray-200">
          <div className="page-container max-w-4xl">
            <h1 className="text-3xl font-bold text-fabric-blue mb-4">
              Participating Testbeds and Facilities
            </h1>
            <div className="space-y-3 text-sm text-fabric-gray-600 leading-relaxed max-w-3xl">
              <p>
                FABRIC is a testbed of testbeds, helping users experiment using
                multiple testbeds. Like Lego blocks, users can get accounts on
                several testbeds and build an experiment using all of them.
              </p>
              <p>
                Additionally, testbeds can be powered by FABRIC. FABRIC can
                support testbeds as an underlying infrastructure, while not
                necessarily exposing the FABRIC interfaces to their users. Find
                a list of participating testbeds and facilities below.
              </p>
              <p>
                Want your testbed or facility listed? Add it{" "}
                <a
                  href="https://share.hsforms.com/13ryeyx2VRjyaY9Q8kB9Wgg3ry9k"
                  target="_blank"
                  rel="noreferrer"
                  className="text-fabric-blue hover:underline font-medium"
                >
                  here
                </a>
                . Need to update information for your testbed? Update it{" "}
                <a
                  href="https://share.hsforms.com/1ITfbhOzyQqysDzXoEiodUg3ry9k"
                  target="_blank"
                  rel="noreferrer"
                  className="text-fabric-blue hover:underline font-medium"
                >
                  here
                </a>
                .
              </p>
              <p className="text-fabric-gray-400 text-xs italic">
                This page is community sourced. FABRIC is not responsible for
                its user-generated content.
              </p>
            </div>
          </div>
        </section>

        {/* ── Search + Grid ─────────────────────────────────────── */}
        <section className="py-12 bg-fabric-off-white">
          <div className="page-container max-w-6xl">

            {/* Search */}
            <div className="relative mb-10">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-fabric-gray-400" />
              <input
                type="search"
                placeholder="Search testbeds and facilities…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-fabric-gray-200 focus:outline-none focus:ring-2 focus:ring-fabric-blue/40 focus:border-fabric-blue text-sm bg-white"
              />
            </div>

            {/* Results count */}
            {query && (
              <p className="text-xs text-fabric-gray-400 mb-6">
                {filtered.length} {filtered.length === 1 ? "result" : "results"} for &ldquo;{query}&rdquo;
              </p>
            )}

            {/* Grid */}
            {filtered.length === 0 ? (
              <p className="text-sm text-fabric-gray-400 italic py-16 text-center">
                No testbeds match your search.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((testbed) => (
                  <div
                    key={testbed.name}
                    className="bg-white rounded-2xl border border-fabric-gray-200 shadow-sm flex flex-col overflow-hidden hover:border-fabric-blue hover:shadow-md transition-all duration-200"
                  >
                    {/* Logo area */}
                    <div className="relative h-36 bg-white border-b border-fabric-gray-100 flex items-center justify-center">
                      {testbed.image ? (
                        <Image
                          src={testbed.image}
                          alt={testbed.name}
                          fill
                          className="object-contain p-4"
                        />
                      ) : (
                        <span className="text-2xl font-bold text-fabric-gray-300">
                          {testbed.name}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 gap-4 bg-fabric-off-white">
                      <div>
                        <h2 className="text-base font-bold text-fabric-navy mb-2">
                          {testbed.name}
                        </h2>
                        <p className="text-sm text-fabric-gray-600 leading-relaxed">
                          {testbed.description}
                        </p>
                      </div>

                      {testbed.url && (
                        <a
                          href={testbed.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit the ${testbed.name} website`}
                          className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-fabric-blue hover:text-fabric-teal transition-colors"
                        >
                          <LinkIcon className="h-3.5 w-3.5" />
                          Visit Website
                          <ExternalLink className="h-3 w-3 opacity-60" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
