"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projectHighlights } from "@/lib/data/highlights";

// ── derive unique filter options ─────────────────────────────────────────────
function unique(arr: (string | undefined)[]): string[] {
  return Array.from(new Set(arr.filter(Boolean) as string[])).sort();
}

const researchers = unique(projectHighlights.map((h) => h.researcher));
const institutions = unique(projectHighlights.map((h) => h.institution));
const domains      = unique(projectHighlights.map((h) => h.domain));

// ── Card ─────────────────────────────────────────────────────────────────────
function HighlightCard({ title, image, imagePlaceholder, href }: {
  title: string;
  image?: string;
  imagePlaceholder: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image area */}
      <div className="relative h-48 w-full">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          <div className={`absolute inset-0 ${imagePlaceholder}`} />
        )}
      </div>
      {/* Caption bar */}
      <div
        className="px-5 py-4 h-[80px] flex items-center justify-center"
        style={{ background: "#2196C9" }}
      >
        <p className="text-white text-sm font-semibold leading-snug text-center">
          {title}
        </p>
      </div>
    </Link>
  );
}

// ── Select filter ─────────────────────────────────────────────────────────────
function FilterSelect({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative flex-1">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-fabric-off-white border border-fabric-gray-200 rounded-lg px-4 py-3 text-sm font-semibold text-fabric-blue focus:outline-none focus:ring-2 focus:ring-fabric-blue cursor-pointer"
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-fabric-blue">
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProjectHighlightsPage() {
  const [researcher, setResearcher] = useState("");
  const [institution, setInstitution] = useState("");
  const [domain, setDomain] = useState("");
  const [query, setQuery] = useState("");
  const [applied, setApplied] = useState({ researcher: "", institution: "", domain: "", query: "" });

  const filtered = useMemo(() => {
    return projectHighlights.filter((h) => {
      if (applied.researcher  && h.researcher  !== applied.researcher)  return false;
      if (applied.institution && h.institution !== applied.institution) return false;
      if (applied.domain      && h.domain      !== applied.domain)      return false;
      if (applied.query) {
        const q = applied.query.toLowerCase();
        if (!h.title.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [applied]);

  const handleSearch = () => {
    setApplied({ researcher, institution, domain, query });
  };

  const handleReset = () => {
    setResearcher("");
    setInstitution("");
    setDomain("");
    setQuery("");
    setApplied({ researcher: "", institution: "", domain: "", query: "" });
  };

  const hasFilters = applied.researcher || applied.institution || applied.domain || applied.query;

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-white">
          <div className="page-container max-w-5xl">

            {/* Header */}
            <h1 className="text-3xl font-bold text-fabric-blue mb-5">Project Highlights</h1>
            <p className="text-sm text-fabric-gray-600 leading-relaxed mb-4 max-w-3xl">
              Our Thread the Needle Project Highlights translate complex ideas into clear, engaging
              stories that show how research, technology, and collaboration come together to create
              real-world impact. Through people, projects, and practical examples, the series
              highlights why FABRIC matters and how its work benefits communities beyond the
              technical details.
            </p>
            <p className="text-sm text-fabric-gray-600 leading-relaxed mb-10 max-w-3xl">
              Please use the dropdowns below to search for specific researchers, institutions, and
              scientific domains highlighted in our Project Highlights. If you are interested in
              collaborating with FABRIC users working in certain areas, each article has more
              information on how to get in touch with the associated research team. If you are
              interested in learning more about projects on FABRIC, please check out the{" "}
              <a
                href="https://portal.fabric-testbed.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fabric-blue hover:underline"
              >
                Current Projects page on the portal
              </a>
              .
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <FilterSelect label="Researcher"        options={researchers}  value={researcher}  onChange={setResearcher} />
              <FilterSelect label="Institution"       options={institutions} value={institution} onChange={setInstitution} />
              <FilterSelect label="Scientific Domain" options={domains}      value={domain}      onChange={setDomain} />
              <button
                onClick={handleSearch}
                className="btn-yellow px-6 py-3 shrink-0"
              >
                Search
              </button>
            </div>

            {/* Text search */}
            <div className="relative mb-10">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search by keyword…"
                className="w-full border border-fabric-gray-200 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-fabric-blue"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fabric-gray-400 pointer-events-none" />
            </div>

            {/* Reset */}
            {hasFilters && (
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-fabric-gray-500">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>
                <button onClick={handleReset} className="text-sm text-fabric-blue hover:underline">
                  Clear filters
                </button>
              </div>
            )}

            {/* Cards grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((h) => (
                  <HighlightCard key={h.slug} {...h} />
                ))}
              </div>
            ) : (
              <p className="text-fabric-gray-500 text-sm py-12 text-center">No results found. Try adjusting your filters.</p>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
