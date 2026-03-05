import { Link2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ── Data ──────────────────────────────────────────────────────────────────────
interface Opportunity {
  name: string;
  url: string;
  sortDate: string;   // ISO date string; used for active/expired split
  displayDate: string;
}

const solicitations: Opportunity[] = [
  {
    name: "NSF 24-530",
    url: "https://new.nsf.gov/funding/opportunities/campus-cyberinfrastructure-cc",
    sortDate: "2024-10-15",
    displayDate: "October 15, 2024",
  },
  {
    name: "NSF 24-536",
    url: "https://new.nsf.gov/funding/opportunities/computer-information-science-engineering-research-0",
    sortDate: "2025-02-07",
    displayDate: "February 7, 2025",
  },
  {
    name: "NAIRR Pilot",
    url: "https://idaorg.gov1.qualtrics.com/jfe/form/SV_cRMnkUFJoXs7UfI?utm_medium=email&_hsmi=293777879&_hsenc=p2ANqtz-8gCHxFAq6pzEEOUbzQtu5DjeJN1XcGeiTT8HCy-OHDwJKJtYZ24lViNDFoFe8krDf5GGJZJoJ_qJrhh6PKwRg9Ah1IzA&utm_content=293777879&utm_source=hs_email",
    sortDate: "2024-03-08",
    displayDate: "March 08, 2024",
  },
  {
    name: "NSF 24-530",
    url: "https://new.nsf.gov/funding/opportunities/campus-cyberinfrastructure-cc",
    sortDate: "2024-04-22",
    displayDate: "April 22, 2024",
  },
  {
    name: "NSF 23-589",
    url: "https://new.nsf.gov/funding/opportunities/community-infrastructure-research-computer/nsf23-589/solicitation",
    sortDate: "2024-09-13",
    displayDate: "September 13, 2024",
  },
  {
    name: "NSF 24-504",
    url: "https://new.nsf.gov/funding/opportunities/secure-trustworthy-cyberspace-satc/nsf24-504/solicitation",
    sortDate: "2025-01-01",
    displayDate: "No deadline",
  },
  {
    name: "NSF 23-576",
    url: "https://new.nsf.gov/funding/opportunities/computer-information-science-engineering-research/nsf23-576/solicitation",
    sortDate: "2024-09-18",
    displayDate: "September 18, 2024",
  },
  {
    name: "NSF 24-536",
    url: "https://new.nsf.gov/funding/opportunities/computer-information-science-engineering-research-0/nsf24-536/solicitation",
    sortDate: "2024-05-02",
    displayDate: "May 02, 2024",
  },
];

// ── Active / expired split (computed at render time) ──────────────────────────
const today = new Date().toISOString().slice(0, 10);

const active  = solicitations
  .filter((s) => s.sortDate >= today)
  .sort((a, b) => a.sortDate.localeCompare(b.sortDate));

const expired = solicitations
  .filter((s) => s.sortDate < today)
  .sort((a, b) => b.sortDate.localeCompare(a.sortDate)); // most-recent first

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
                key={`${row.name}-${row.sortDate}`}
                className={i % 2 === 1 ? "bg-fabric-off-white" : "bg-white"}
              >
                <td className="px-4 py-3 font-semibold text-fabric-navy">{row.name}</td>
                <td className="px-4 py-3 text-center">
                  <a
                    href={row.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Link for ${row.name}`}
                    className="inline-flex items-center justify-center text-fabric-teal hover:text-fabric-blue transition-colors"
                  >
                    <Link2 className="h-4 w-4" />
                  </a>
                </td>
                <td className="px-4 py-3 text-fabric-gray-600">{row.displayDate}</td>
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

            {/* Active */}
            <div className="mb-10">
              <OpportunityTable rows={active} />
            </div>

            {/* Expired */}
            <p className="text-sm italic text-fabric-gray-500 mb-3">Expired Funding Opportunities</p>
            <OpportunityTable rows={expired} />

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
