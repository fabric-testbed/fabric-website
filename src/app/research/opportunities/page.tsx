import { Link2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ── Data ──────────────────────────────────────────────────────────────────────
interface Opportunity {
  solicitation: string;
  href: string;
  deadline: string;
}

// Active as of 2026-03-05
const active: Opportunity[] = [
  {
    solicitation: "NSF 23-614: FABRIC Experimental Research",
    href: "https://new.nsf.gov/funding/opportunities/fabric-experimental-research",
    deadline: "June 30, 2026",
  },
  {
    solicitation: "NSF 25-501: CISE Research Expansion",
    href: "https://new.nsf.gov/funding/opportunities/cise-research-expansion",
    deadline: "August 1, 2026",
  },
  {
    solicitation: "NSF 24-530: Campus Cyberinfrastructure",
    href: "https://new.nsf.gov/funding/opportunities/campus-cyberinfrastructure-cc",
    deadline: "October 15, 2026",
  },
];

// Expired (sorted most-recent first)
const expired: Opportunity[] = [
  {
    solicitation: "DOE ASCR Collaborative Research",
    href: "https://science.osti.gov/ascr",
    deadline: "December 1, 2025",
  },
  {
    solicitation: "NSF 24-504: SaTC",
    href: "https://new.nsf.gov/funding/opportunities/secure-trustworthy-cyberspace-satc/nsf24-504/solicitation",
    deadline: "June 15, 2025",
  },
  {
    solicitation: "NSF 24-536: CISE Core Programs",
    href: "https://new.nsf.gov/funding/opportunities/computer-information-science-engineering-research-0/nsf24-536/solicitation",
    deadline: "February 7, 2025",
  },
  {
    solicitation: "NSF 23-589: CIRC",
    href: "https://new.nsf.gov/funding/opportunities/community-infrastructure-research-computer/nsf23-589/solicitation",
    deadline: "September 13, 2024",
  },
  {
    solicitation: "NAIRR Pilot Access",
    href: "https://nairrpilot.org",
    deadline: "June 1, 2024",
  },
];

// ── Table ─────────────────────────────────────────────────────────────────────
function OpportunityTable({ rows, empty }: { rows: Opportunity[]; empty?: string }) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-fabric-gray-200">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr style={{ background: "#D6E8F2" }}>
            <th className="text-left px-4 py-3 font-semibold text-fabric-navy w-1/2">Solicitation</th>
            <th className="text-center px-4 py-3 font-semibold text-fabric-navy w-1/4">Link</th>
            <th className="text-left px-4 py-3 font-semibold text-fabric-navy w-1/4">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={3} className="px-4 py-6 text-fabric-gray-400 italic text-center">
                {empty ?? "No current opportunities."}
              </td>
            </tr>
          ) : (
            rows.map((row, i) => (
              <tr
                key={`${row.solicitation}-${i}`}
                className={i % 2 === 1 ? "bg-fabric-off-white" : "bg-white"}
              >
                <td className="px-4 py-3 font-semibold text-fabric-navy">{row.solicitation}</td>
                <td className="px-4 py-3 text-center">
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Link for ${row.solicitation}`}
                    className="inline-flex items-center justify-center text-fabric-teal hover:text-fabric-blue transition-colors"
                  >
                    <Link2 className="h-4 w-4" />
                  </a>
                </td>
                <td className="px-4 py-3 text-fabric-gray-600">{row.deadline}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function OpportunitiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-white">
          <div className="page-container max-w-4xl">

            <h1 className="text-3xl font-bold text-fabric-navy mb-8">Get Involved with FABRIC</h1>

            {/* Funding Opportunities */}
            <h2 className="text-xl font-semibold text-fabric-blue mb-5">Funding Opportunities</h2>

            <p className="text-sm text-fabric-gray-600 leading-relaxed mb-8">
              Do you have a project idea that would benefit from using FABRIC? The FABRIC team welcomes
              requests for Letters of Collaboration. To expedite the process, please contact us by
              filling out the{" "}
              <a
                href="https://forms.gle/MKV5SfpdSS24XbFD7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fabric-blue hover:underline font-medium"
              >
                LoC Request Form
              </a>
              .
            </p>

            {/* Active table */}
            <div className="mb-10">
              <OpportunityTable rows={active} />
            </div>

            {/* Expired table */}
            <p className="text-sm italic text-fabric-gray-500 mb-3">Expired Funding Opportunities</p>
            <OpportunityTable rows={expired} />

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
