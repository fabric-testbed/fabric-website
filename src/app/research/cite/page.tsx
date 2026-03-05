"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const citation =
  `Baldin, Ilya, Anita Nikolich, James Griffioen, Indermohan Inder S. Monga, Kuang-Ching Wang, Tom Lehman, and Paul Ruth. "FABRIC: A national-scale programmable experimental network infrastructure." IEEE Internet Computing 23, no. 6 (2019): 38-47.`;

const bibtex =
  `@article{fabric-2019, title={{FABRIC: A national-scale programmable experimental network infrastructure}}, author={Baldin, Ilya and Nikolich, Anita and Griffioen, James and Monga, Indermohan Inder S and Wang, Kuang-Ching and Lehman, Tom and Ruth, Paul}, journal={IEEE Internet Computing}, volume={23}, number={6}, pages={38--47}, publisher={IEEE} }`;

const abstract =
  `FABRIC is a unique national research infrastructure to enable cutting-edge and exploratory research at-scale in networking, cybersecurity, distributed computing and storage systems, machine learning, and science applications. It is an everywhere-programmable nationwide instrument comprised of novel extensible network elements equipped with large amounts of compute and storage, interconnected by high speed, dedicated optical links. It will connect a number of specialized testbeds for cloud research (NSF Cloud testbeds CloudLab and Chameleon), for research beyond 5G technologies (Platforms for Advanced Wireless Research or PAWR), as well as production high-performance computing facilities and science instruments to create a rich fabric for a wide variety of experimental activities.`;

// ── Copy button ───────────────────────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      className="shrink-0 p-1.5 rounded-md text-fabric-gray-400 hover:text-fabric-blue hover:bg-fabric-light transition-colors"
    >
      {copied
        ? <Check className="h-4 w-4 text-green-500" />
        : <Copy className="h-4 w-4" />
      }
    </button>
  );
}

// ── Citation box ──────────────────────────────────────────────────────────────
function CitationBox({ text, mono = false }: { text: string; mono?: boolean }) {
  return (
    <div className="flex items-start gap-3 bg-fabric-off-white border border-fabric-gray-200 rounded-lg px-5 py-4">
      <p className={`flex-1 text-sm text-fabric-gray-600 leading-relaxed ${mono ? "font-mono break-all" : ""}`}>
        {text}
      </p>
      <CopyButton text={text} />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CiteFabricPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Cite section ─────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="page-container max-w-4xl">

            <h1 className="text-3xl font-bold text-fabric-navy mb-6">Cite FABRIC</h1>

            <p className="text-sm text-fabric-gray-600 mb-5">
              When publishing a paper that utilized FABRIC to obtain the results please cite the following paper:
            </p>

            <CitationBox text={citation} />

            <p className="text-sm text-fabric-gray-600 mt-6 mb-5">
              or using <strong>BibTeX</strong> below:
            </p>

            <CitationBox text={bibtex} mono />

            <p className="text-sm text-fabric-gray-600 mt-8">
              This helps us track publications related to FABRIC especially when it comes to justifying
              continuing support for FABRIC to the funding agencies.
            </p>
          </div>
        </section>

        {/* ── Publication section ───────────────────────────────────── */}
        <section className="py-16 bg-fabric-off-white">
          <div className="page-container max-w-4xl">

            <h2 className="text-2xl font-bold text-fabric-navy mb-8">Publication</h2>

            <div className="bg-white border border-fabric-gray-200 rounded-xl p-8">
              <a
                href="https://doi.org/10.1109/MIC.2019.2958545"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-fabric-blue hover:underline leading-snug block mb-4"
              >
                FABRIC: A National-Scale Programmable Experimental Network Infrastructure
              </a>

              <p className="text-sm text-fabric-gray-600 mb-3">
                Ilya Baldin, Anita Nikolich, James Griffioen, Indermohan Inder S. Monga, Kuang-Ching Wang, Tom Lehman, Paul Ruth
              </p>

              <a
                href="https://doi.org/10.1109/MIC.2019.2958545"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-fabric-blue hover:underline"
              >
                DOI: 10.1109/MIC.2019.2958545
              </a>

              <div className="mt-6 pt-6 border-t border-fabric-gray-200">
                <p className="text-sm font-semibold text-fabric-navy mb-2">Abstract:</p>
                <p className="text-sm text-fabric-gray-600 leading-relaxed">{abstract}</p>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
