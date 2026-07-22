"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Download } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ── Logo assets ──────────────────────────────────────────────────────────────
const lightBgLogos = [
  { url: "https://www.dropbox.com/s/26lsgihw277bfgm/2019_NRIG_FABRIC%20logo%20Dark.png?raw=1", alt: "FABRIC logo with text below surface" },
  { url: "https://www.dropbox.com/s/p02zqsutv991iel/2019_NRIG_Fabric%20dark%20text%20right.png?raw=1", alt: "FABRIC logo with text beside surface" },
  { url: "https://www.dropbox.com/s/8rnpjckb4auct03/2019_NRIG_Fabric%20dark%20wave.png?raw=1", alt: "FABRIC surface logo without text" },
];
const darkBgLogos = [
  { url: "https://www.dropbox.com/s/1gz57gt3tn7nxkh/2019_NRIG_FABRIC%20logo%20light.png?raw=1", alt: "FABRIC logo with text below surface" },
  { url: "https://www.dropbox.com/s/mbuk7mgkrni17fe/2019_NRIG_Fabric%20light%20text%20right.png?raw=1", alt: "FABRIC logo with text beside surface" },
  { url: "https://www.dropbox.com/s/a43hdnx08evxp3i/2019_NRIG_Fabric%20white%20wave.png?raw=1", alt: "FABRIC surface logo without text" },
];
const fabLightBgLogos = [
  { url: "https://www.dropbox.com/s/4cw1nuxsavva1u2/New%20FAB%20Official%20Logo_Color.png?raw=1", alt: "FAB Globe with text - Color" },
  { url: "https://www.dropbox.com/s/v8k3spmrhpwknff/New%20FAB%20Official%20Logo_Dark.png?raw=1", alt: "FAB Globe with text - Black only" },
  { url: "https://www.dropbox.com/s/lns4mkwnd8oc71b/202101_FAB_globe%20icon%20color%40300x.png?raw=1", alt: "FAB Globe - Color" },
  { url: "https://www.dropbox.com/s/iigjdmo4e81eink/202101_FAB_%20globe%20icon_DARK%40300x.png?raw=1", alt: "FAB Globe - Dark" },
];
const fabDarkBgLogos = [
  { url: "https://www.dropbox.com/s/7nydw2bxffkubji/New%20FAB%20Official%20Logo_light.png?raw=1", alt: "FAB Globe with text - Light" },
  { url: "https://www.dropbox.com/s/fa16l6knrgdhp9s/202101_FAB_Globe%20icon_light%40300x.png?raw=1", alt: "FAB Globe - Light" },
  { url: "https://www.dropbox.com/s/0vq767ba2ksd0b9/202101_FAB_Globe%20Icon_Color%20light%40300x.png?raw=1", alt: "FAB Globe - Color on dark" },
];

// ── Logo grid helper ─────────────────────────────────────────────────────────
function LogoGrid({ logos, dark }: { logos: { url: string; alt: string }[]; dark?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {logos.map((logo) => (
        <div key={logo.url} className="rounded-xl border border-fabric-gray-200 overflow-hidden">
          <div className={`flex items-center justify-center h-40 p-6 ${dark ? "bg-[#5A6370]" : "bg-white"}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.url} alt={logo.alt} className="max-h-full max-w-full object-contain" />
          </div>
          <div className="bg-fabric-off-white px-4 py-2.5 border-t border-fabric-gray-200 flex items-center justify-between">
            <p className="text-xs text-fabric-gray-600">{logo.alt}</p>
            <a
              href={logo.url}
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-fabric-blue hover:text-fabric-navy transition-colors"
            >
              <Download className="h-3 w-3" /> Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Color palette ─────────────────────────────────────────────────────────────
const colors = [
  { name: "Navy",      var: "Navy",      hex: "#1B3A5C", bg: "bg-[#1B3A5C]", text: "text-white",     desc: "Primary headers, footer, navigation" },
  { name: "Blue",      var: "Blue",      hex: "#1A73B5", bg: "bg-[#1A73B5]", text: "text-white",     desc: "Primary brand, links, CTAs" },
  { name: "Teal",      var: "Teal",      hex: "#2196C9", bg: "bg-[#2196C9]", text: "text-white",     desc: "Hero backgrounds, active states" },
  { name: "Sky",       var: "Sky",       hex: "#5BC4E5", bg: "bg-[#5BC4E5]", text: "text-white",     desc: "Light accents, highlights" },
  { name: "Yellow",    var: "Yellow",    hex: "#F5C518", bg: "bg-[#F5C518]", text: "text-[#1B3A5C]", desc: "CTAs, highlights, active underlines" },
  { name: "Off White", var: "Off White", hex: "#F5F7FA", bg: "bg-[#F5F7FA]", text: "text-[#1B3A5C]", desc: "Page backgrounds, card fills" },
  { name: "Gray 200",  var: "Gray 200",  hex: "#E2E6EA", bg: "bg-[#E2E6EA]", text: "text-[#1B3A5C]", desc: "Borders, dividers" },
  { name: "Gray 600",  var: "Gray 600",  hex: "#5A6370", bg: "bg-[#5A6370]", text: "text-white",     desc: "Body text, secondary content" },
];

// ── Type scale ────────────────────────────────────────────────────────────────
const typeScale = [
  { label: "Display LG",  cls: "text-[3.5rem] font-bold leading-tight tracking-tight", sample: "FABRIC Testbed" },
  { label: "Display",     cls: "text-[2.75rem] font-bold leading-tight tracking-tight", sample: "Explore Impactful Ideas" },
  { label: "Display SM",  cls: "text-[2rem] font-bold leading-snug",                   sample: "Advancing Network Research" },
  { label: "H1",          cls: "text-3xl font-bold",                                   sample: "Resources & Infrastructure" },
  { label: "H2",          cls: "text-2xl font-bold",                                   sample: "Community & Events" },
  { label: "H3",          cls: "text-xl font-semibold",                                sample: "Project Highlights" },
  { label: "Body LG",     cls: "text-base leading-relaxed",                            sample: "FABRIC is a unique national research infrastructure to enable cutting-edge and exploratory research at scale." },
  { label: "Body",        cls: "text-sm leading-relaxed",                              sample: "FABRIC is a unique national research infrastructure to enable cutting-edge and exploratory research at scale in networking, cybersecurity, distributed computing and AI/ML." },
  { label: "Caption",     cls: "text-xs text-[#5A6370]",                              sample: "Figure 1 — FABRIC topology map, March 2026" },
  { label: "Mono",        cls: "text-sm font-mono",                                    sample: "RENC · TACC · STAR · UCSD · MICH" },
];

// ── Copy to clipboard helper ──────────────────────────────────────────────────
function ColorSwatch({ color }: { color: typeof colors[0] }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <div className="rounded-xl overflow-hidden border border-fabric-gray-200 shadow-sm">
      <button
        onClick={copy}
        className={`w-full h-24 flex items-end justify-end p-2.5 group transition-opacity ${color.bg}`}
        title={`Copy ${color.hex}`}
      >
        <span className={`p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 ${color.text}`}>
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </span>
      </button>
      <div className="p-3 bg-white">
        <p className="text-sm font-semibold text-fabric-navy">{color.name}</p>
        <p className="text-xs font-mono text-fabric-gray-400 mt-0.5">{color.hex}</p>
        <p className="text-xs text-fabric-gray-400 mt-1 leading-snug">{color.desc}</p>
      </div>
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-fabric-navy mb-6 pb-3 border-b border-fabric-gray-200">{title}</h2>
      {children}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function BrandingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="py-12 bg-white border-b border-fabric-gray-200">
          <div className="page-container max-w-5xl">
            <h1 className="text-3xl font-bold text-fabric-blue mb-2">Branding Resources</h1>
            <p className="text-sm text-fabric-gray-600 leading-relaxed max-w-2xl">
              Official FABRIC brand guidelines — colors, typography, logos, and UI elements.
              Use these assets consistently across all FABRIC-related materials.
            </p>
          </div>
        </section>

        <section className="py-12 bg-fabric-off-white">
          <div className="page-container max-w-5xl space-y-16">

            {/* ── FABRIC Logos ─────────────────────────────────────── */}
            <Section title="FABRIC Logos">
              <h3 className="text-sm font-semibold text-fabric-navy mb-2">For Light Backgrounds</h3>
              <p className="text-xs text-fabric-gray-600 mb-4">Each of these logos has a transparent background and are optimized for use on light background colors.</p>
              <LogoGrid logos={lightBgLogos} />

              <h3 className="text-sm font-semibold text-fabric-navy mb-2 mt-10">For Dark Backgrounds</h3>
              <p className="text-xs text-fabric-gray-600 mb-4">Each of these logos has a transparent background and are optimized for use on dark background colors.</p>
              <LogoGrid logos={darkBgLogos} dark />
            </Section>

            {/* ── FAB Logos ──────────────────────────────────────── */}
            <Section title="FAB Logos">
              <h3 className="text-sm font-semibold text-fabric-navy mb-2">For Light Backgrounds</h3>
              <p className="text-xs text-fabric-gray-600 mb-4">Each of these logos has a transparent background and are optimized for use on light background colors.</p>
              <LogoGrid logos={fabLightBgLogos} />

              <h3 className="text-sm font-semibold text-fabric-navy mb-2 mt-10">For Dark Backgrounds</h3>
              <p className="text-xs text-fabric-gray-600 mb-4">Each of these logos has a transparent background and are optimized for use on dark background colors.</p>
              <LogoGrid logos={fabDarkBgLogos} dark />
            </Section>

            {/* ── Colors ──────────────────────────────────────────── */}
            <Section title="Color Palette">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {colors.map((c) => <ColorSwatch key={c.hex} color={c} />)}
              </div>
              <p className="text-xs text-fabric-gray-400 mt-3">Click a swatch to copy the hex value.</p>

              {/* Gradient showcase */}
              <div className="mt-6 rounded-xl overflow-hidden border border-fabric-gray-200">
                <div
                  className="h-16"
                  style={{ background: "linear-gradient(135deg, #1B3A5C 0%, #1A73B5 50%, #2196C9 100%)" }}
                />
                <div className="bg-white px-4 py-3 border-t border-fabric-gray-200 flex items-center justify-between">
                  <p className="text-xs font-semibold text-fabric-navy">Hero Gradient</p>
                  <p className="text-xs font-mono text-fabric-gray-400">135° · Navy → Blue → Teal</p>
                </div>
              </div>
            </Section>

            {/* ── Typography ──────────────────────────────────────── */}
            <Section title="Typography">
              <div className="rounded-xl border border-fabric-gray-200 bg-white overflow-hidden divide-y divide-fabric-gray-100">
                {/* Typeface info */}
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-fabric-navy">Inter</p>
                    <p className="text-xs text-fabric-gray-400 mt-0.5">Primary typeface — all weights 300–700</p>
                  </div>
                  <a
                    href="https://fonts.google.com/specimen/Inter"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-fabric-blue hover:underline"
                  >
                    Google Fonts <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                {typeScale.map(({ label, cls, sample }) => (
                  <div key={label} className="px-5 py-4 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span className="shrink-0 w-24 text-xs font-mono text-fabric-gray-400">{label}</span>
                    <span className={`text-fabric-navy truncate ${cls}`}>{sample}</span>
                  </div>
                ))}
              </div>

              {/* Font weights */}
              <div className="mt-4 rounded-xl border border-fabric-gray-200 bg-white p-5">
                <p className="text-xs font-semibold text-fabric-navy mb-4">Font Weights</p>
                <div className="flex flex-wrap gap-6">
                  {[
                    { w: "300", label: "Light"   },
                    { w: "400", label: "Regular" },
                    { w: "500", label: "Medium"  },
                    { w: "600", label: "SemiBold"},
                    { w: "700", label: "Bold"    },
                  ].map(({ w, label }) => (
                    <div key={w}>
                      <p className="text-xs text-fabric-gray-400 mb-1">{label} · {w}</p>
                      <p className="text-base text-fabric-navy" style={{ fontWeight: parseInt(w) }}>
                        FABRIC Testbed
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mono */}
              <div className="mt-4 rounded-xl border border-fabric-gray-200 bg-white p-5">
                <p className="text-xs font-semibold text-fabric-navy mb-3">Monospace — JetBrains Mono</p>
                <p className="text-sm font-mono text-fabric-gray-600">RENC · TACC · STAR · UCSD · MICH · LBNL · WASH</p>
                <p className="text-xs text-fabric-gray-400 mt-1">Used for site names, codes, and technical identifiers.</p>
              </div>
            </Section>

            {/* ── UI Elements ─────────────────────────────────────── */}
            <Section title="UI Elements">

              {/* Buttons */}
              <div className="rounded-xl border border-fabric-gray-200 bg-white p-6 space-y-6">
                <div>
                  <p className="text-xs font-semibold text-fabric-navy mb-4">Buttons</p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <button className="btn-yellow">Yellow CTA</button>
                    <button className="btn-blue">Blue Primary</button>
                    <button className="btn-outline">Outline</button>
                    <button className="btn-white border border-fabric-gray-200">White</button>
                  </div>
                </div>

                {/* Badges */}
                <div>
                  <p className="text-xs font-semibold text-fabric-navy mb-4">Badges</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge">News</span>
                    <span className="badge">Blog</span>
                    <span className="badge">Community</span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-fabric-blue text-white">Active</span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200">Maintenance</span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200">Pre-Maintenance</span>
                  </div>
                </div>

                {/* Cards */}
                <div>
                  <p className="text-xs font-semibold text-fabric-navy mb-4">Cards</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="card p-5">
                      <p className="text-sm font-semibold text-fabric-navy mb-1">Standard Card</p>
                      <p className="text-xs text-fabric-gray-600">White background, subtle shadow, rounded-2xl.</p>
                    </div>
                    <div className="card-blue p-5">
                      <p className="text-sm font-semibold mb-1">Blue Card</p>
                      <p className="text-xs text-white/80">Teal background, used for step indicators and CTAs.</p>
                    </div>
                    <div className="p-5 rounded-2xl border border-fabric-blue/30 bg-fabric-blue/5">
                      <p className="text-sm font-semibold text-fabric-navy mb-1">Callout Card</p>
                      <p className="text-xs text-fabric-gray-600">Light blue tint, used for alerts and notices.</p>
                    </div>
                  </div>
                </div>

                {/* Gradients / colors in use */}
                <div>
                  <p className="text-xs font-semibold text-fabric-navy mb-4">Gradient Usage</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="h-16 rounded-xl flex items-center px-4" style={{ background: "linear-gradient(135deg,#2196C9,#1B3A5C)" }}>
                      <span className="text-xs font-semibold text-white">News card — Teal → Navy</span>
                    </div>
                    <div className="h-16 rounded-xl flex items-center px-4" style={{ background: "linear-gradient(135deg,#5BC4E5,#2196C9)" }}>
                      <span className="text-xs font-semibold text-white">Blog card — Sky → Teal</span>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
