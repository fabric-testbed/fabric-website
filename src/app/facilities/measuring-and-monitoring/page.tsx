import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const tools = [
  {
    title: "Public Metrics",
    image: "/imgs/measuring-tools/PublicMetrics.png",
    content:
      "This site contains basic metrics concerning FABRIC network. These metrics are available to anyone. Anyone is allowed anonymous access to Grafana.",
    link: "https://public-metrics.fabric-testbed.net/",
  },
  {
    title: "Infrastructure Metrics",
    image: "/imgs/measuring-tools/InfrastructureMetrics.png",
    content:
      "This site contains enhanced metrics concerning FABRIC site usage and availability. These metrics are available to any FABRIC user. Logon is available as an anonymous Grafana user to anyone with a FABRIC account.",
    link: "https://infrastructure-metrics.fabric-testbed.net/",
  },
  {
    title: "Optical Data",
    image: "/imgs/measuring-tools/OpticalData.png",
    content: (
      <>
        This is a space where ESnet shares public Grafana dashboards of targeted
        data sets. It complements the data found at the{" "}
        <a
          href="https://my.es.net/"
          target="_blank"
          rel="noreferrer"
          className="text-fabric-blue hover:underline"
        >
          my.es.net portal
        </a>
        . The data comes primarily from ESnet&apos;s Stardust system and provides a
        flexible way to show interesting views of the data.
      </>
    ),
    link: "https://public.stardust.es.net/dashboards/f/fdhq1z6q5smwwb/?orgId=2",
  },
  {
    title: "FABRIC Latency Monitor",
    image: "/imgs/measuring-tools/LatencyMonitor.png",
    content:
      "Use FABRIC's OWL (One Way Latency) Service to view graphs of the current (and past) one way latency measurements between pairs of FABRIC racks. OWL's highly precise latency measurements are calculated using FABRIC's GPS-based timestamp capabilities.",
    link: "https://public-metrics.fabric-testbed.net/latency/",
  },
];

export default function MeasuringAndMonitoringPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="py-12 bg-white border-b border-fabric-gray-200">
          <div className="page-container max-w-4xl">
            <h1 className="text-3xl font-bold text-fabric-blue mb-2">
              Measuring and Monitoring Tools
            </h1>
            <p className="text-sm text-fabric-gray-600 leading-relaxed max-w-2xl">
              Explore the suite of tools FABRIC provides for measuring network
              performance, monitoring infrastructure health, and analyzing optical
              and latency data across the testbed.
            </p>
          </div>
        </section>

        {/* ── Tool cards ───────────────────────────────────────── */}
        <section className="py-12 bg-fabric-off-white">
          <div className="page-container max-w-4xl space-y-10">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="bg-white rounded-2xl border border-fabric-gray-200 overflow-hidden shadow-sm"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 bg-fabric-off-white flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-fabric-gray-200">
                    <Image
                      src={tool.image}
                      alt={tool.title}
                      width={480}
                      height={300}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-between gap-6">
                    <div>
                      <h2 className="text-xl font-bold text-fabric-blue mb-4">
                        {tool.title}
                      </h2>
                      <p className="text-sm text-fabric-gray-600 leading-relaxed">
                        {tool.content}
                      </p>
                    </div>

                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 self-start px-5 py-2 rounded-lg text-sm font-semibold border border-fabric-blue text-fabric-blue hover:bg-fabric-blue hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open Tool
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
