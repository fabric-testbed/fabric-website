"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Plus, Minus } from "lucide-react";

// ── "What sets FABRIC apart?" accordion data ──────────────────────────────
const accordionItems = [
  {
    title: "In-Network Programmability",
    content: (
      <div className="space-y-5">
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">
            In-Network Accelerators and Storage
          </h4>
          <ul className="space-y-1 text-sm text-fabric-gray-600">
            {["GPUs", "FPGAs", "SmartNICs", "NvME", "Persistent Volumes"].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">
            Software Defined Networking (P4)
          </h4>
          <ul className="space-y-1 text-sm text-fabric-gray-600">
            {[
              "BMv2 (software)",
              "Tofino Model (software)",
              "DPDK (software w/ passthrough)",
              "Xilinx (FPGA)",
              "Tofino (native)",
            ].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Flexible Range of Network Services",
    content: (
      <div className="space-y-5 text-sm text-fabric-gray-600">
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Standard Services</h4>
          <ul className="space-y-1 ml-4">
            {["Layer 2", "Layer 3", "Facility Ports"].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Wide-Area Circuit Paths</h4>
          <p className="ml-4 font-medium">Explicit Route Options: Specify exact network paths for your experiment</p>
        </div>
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Port Mirroring</h4>
          <ul className="space-y-1 ml-4">
            {["Support mirroring in a slice", "Out-of-band monitoring!"].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Public Cloud Connections</h4>
          <ul className="space-y-1 ml-4">
            {["Direct Internet2 Cloud Connect", "Google Cloud, AWS, or Azure."].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Connections to External Facilities",
    content: (
      <div className="space-y-5 text-sm text-fabric-gray-600">
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Facility Ports</h4>
          <ul className="space-y-1 ml-4">
            {[
              "L2 Connections to external facilities",
              "Enables slice peering to instruments, labs, public clouds, other testbeds",
              "38 facility ports and counting",
            ].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Research Infrastructure</h4>
          <ul className="space-y-1 ml-4">
            {["Chameleon", "Cloudlab", "Powder", "SPHERE", "COSMOS", "NRP", "Smart Internet Lab (BRIST)", "SCION"].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">HPC</h4>
          <ul className="space-y-1 ml-4">
            {["MGHPCC", "SDSC", "TACC"].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Campuses</h4>
          <ul className="space-y-1 ml-4">
            {["ASU", "Clemson", "UCSC", "NIST", "Kent State", "CESNET", "SLU", "…and more!"].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Network Peering</h4>
          <p className="ml-4 font-medium">PaTH/AmLight (L2/L3) via FIU</p>
        </div>
      </div>
    ),
  },
  {
    title: "Measurement Data for All",
    content: (
      <div className="space-y-5 text-sm text-fabric-gray-600">
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Infrastructure Measurements</h4>
          <ul className="space-y-1 ml-4">
            {[
              "CPU, bandwidth, and more!",
              "REST API",
              "FABlib integration",
            ].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Latency Measurements</h4>
          <ul className="space-y-1 ml-4">
            {[
              "One-way Latency",
              "High precision latency measurements",
              "Graphical interface",
            ].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Optical Data</h4>
          <p className="ml-4 font-medium">Sourced from ESnet</p>
        </div>
      </div>
    ),
  },
  {
    title: "Prioritizing Risk & Security",
    content: (
      <div className="space-y-5 text-sm text-fabric-gray-600">
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Security Considerations</h4>
          <ul className="space-y-1 ml-4">
            {[
              "FABRIC racks monitored by Zeek",
              "Event monitoring and alerting by OMNISOC",
              "Weekly vulnerability scanning",
              "Strict access control protocols",
              "Bastion hosts for testbed access",
              "Dedicated FABRIC security team at NCSA",
              "Strictly enforced AUP",
              "Screening of Project Leads",
            ].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Partnership with Industry",
    content: (
      <div className="space-y-5 text-sm text-fabric-gray-600">
        <div>
          <h4 className="text-fabric-blue font-semibold mb-2">Traveling Ciena Node Enables Live Testing at Events</h4>
          <ul className="space-y-1 ml-4">
            {["OFC50", "SC24", "SC25"].map((item) => (
              <li key={item} className="font-medium">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
];

// ── Bullet point items ─────────────────────────────────────────────────────
const connectsItems = [
  "34 locations distributed around the globe, including additional nodes in Asia and Europe.",
  "A Smart programmable core network",
  "Direct links to major computing facilities and public clouds",
  "Dedicated links at speeds up to 1.2Tbps",
  "Controllable peering with Internet",
  "Programmable computational resources, such as CPUs, GPUs, FPGAs, memory, and storage",
  "In-network network switches (SDN) and smart NIC",
];

function BlueBullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1.5 h-3 w-3 shrink-0 rounded-sm bg-fabric-blue" />
      <span className="text-sm text-fabric-gray-600 leading-relaxed">{text}</span>
    </li>
  );
}

function AccordionItem({
  title,
  content,
  isOpen,
  onToggle,
}: {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-white text-base transition-colors"
        style={{ background: isOpen ? "#2196C9" : "#1B3A5C" }}
      >
        <span>{title}</span>
        {isOpen
          ? <Minus className="h-5 w-5 shrink-0" />
          : <Plus  className="h-5 w-5 shrink-0" />
        }
      </button>
      {isOpen && (
        <div className="bg-white border border-fabric-gray-200 border-t-0 rounded-b-2xl px-6 py-5">
          {content}
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Section 1: About FABRIC ───────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="page-container max-w-4xl">
            <h1 className="text-3xl font-bold text-fabric-blue mb-6">About FABRIC</h1>
            <p className="text-fabric-gray-600 leading-relaxed mb-5">
              FABRIC (FABRIC is Adaptive Programmable Research Infrastructure for Computer Science and
              Science Applications) is an International infrastructure that enables cutting-edge
              experimentation and research at-scale in the areas of networking, cybersecurity, distributed
              computing, storage, virtual reality, 5G, machine learning, and science applications. FABRIC is
              designed for users to prototype and validate novel network and computing solutions that are
              impossible or impractical with the current Internet.
            </p>
            <p className="text-fabric-gray-600 leading-relaxed">
              The FABRIC infrastructure is a distributed set of equipment at commercial collocation spaces,
              national labs and campuses. Each FABRIC site has large amounts of compute and storage,
              interconnected by high speed, dedicated optical links. It also connects to specialized testbeds
              (5G/IoT PAWR, NSF Clouds), the Internet and high-performance computing facilities to create a
              rich environment for a wide variety of experimental activities.
            </p>
          </div>
        </section>

        {/* ── Section 2: FABRIC connects… ──────────────────────────── */}
        <section className="py-16 bg-fabric-off-white">
          <div className="page-container max-w-4xl">
            <h2 className="text-2xl font-bold text-fabric-blue mb-10 max-w-xl leading-snug">
              FABRIC connects users, computers, and scientific instruments across a wide area that includes:
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              {connectsItems.map((item) => (
                <BlueBullet key={item} text={item} />
              ))}
            </ul>
          </div>
        </section>

        {/* ── Section 3: What sets FABRIC apart? ───────────────────── */}
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Faint network globe watermark */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 80% 50%, #2196C9 0%, transparent 60%)",
            }}
          />

          <div className="page-container max-w-4xl relative z-10">
            <h2 className="text-2xl font-bold text-fabric-navy mb-10">
              What sets FABRIC apart?
            </h2>

            <div className="space-y-3">
              {accordionItems.map((item, i) => (
                <AccordionItem
                  key={item.title}
                  title={item.title}
                  content={item.content}
                  isOpen={openIdx === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>

            {/* Download brochure CTA */}
            <div className="flex justify-end mt-8">
              <a
                href="https://drive.google.com/file/d/1TSTNYTxcmQrFhj5riToWUxLDrY5YC7H-/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yellow"
              >
                Download FABRIC Brochure
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
