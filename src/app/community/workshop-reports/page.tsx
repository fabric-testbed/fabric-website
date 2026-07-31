import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText } from "lucide-react";

const reports = [
  {
    date: "April 2026",
    title: "KNIT 12 Community Workshop Report",
    url: "https://drive.google.com/file/d/1pz4UNYe1ZUluRSKxj7eWDdHqSoblxxuE/view",
  },
  {
    date: "October 2025",
    title: "KNIT 11 Community Workshop Report",
    url: "https://drive.google.com/file/d/1g3oqanWbctCSW6y-7Fsl6GRve2UBbE94/view",
  },
  {
    date: "March 2025",
    title: "KNIT 10 Community Workshop Report",
    url: "https://drive.google.com/file/d/1d3SPLJutpusOEdUebL1Gf1vMigWakHvq/view",
  },
  {
    date: "September 2024",
    title: "KNIT 9 Community Workshop Report",
    url: "https://drive.google.com/file/d/1W-Ghf2rIW3o3F5cyF_Jl8VqHslK065qS/view",
  },
  {
    date: "March 2024",
    title: "KNIT 8 Community Workshop Report",
    url: "https://drive.google.com/file/d/1bbZM1hYzxVGVKyIflc7C3dYWNHvALwMe/view",
  },
  {
    date: "September 2023",
    title: "KNIT7 Community Workshop Report",
    url: "https://drive.google.com/file/d/1ssXxHD5ydyl1N_8sujxk63XyTsrfPq3y/view",
  },
  {
    date: "April 2023",
    title: "KNIT6 Community Workshop Report",
    url: "https://drive.google.com/file/d/11cJ0mCY1vH1ScYJp3LBjAmJZ95L91r1t/view",
  },
  {
    date: "September 2022",
    title: "KNIT5 Community Workshop Report",
    url: "https://drive.google.com/file/d/1jIHHGW7catZppK2b8julO90M0IS-3wW-/view",
  },
  {
    date: "December 2021",
    title: "KNIT4 Community Workshop Report",
    url: "https://drive.google.com/file/d/10F3k26W3E1izuQ7pGYxeKMz_u92sLVE1/view",
  },
  {
    date: "April 2021",
    title: "KNIT3 Experimenters Workshop Report",
    url: "https://drive.google.com/file/d/139AqayLZLQekQN03K5wN1TMG2Y_tMUA8/view",
  },
  {
    date: "May 2020",
    title: "KNIT2 Community Workshop Report",
    url: "https://drive.google.com/file/d/1FlUdFn4rP4Cdwx4SRoReGPXGfEmbVmtc/view",
  },
  {
    date: "May 2020",
    title: "Virtual Events: Lessons Learned During a Pandemic",
    url: "https://drive.google.com/file/d/1KMoA1ub27gw3jQ4yjAK8eu-fApDl-Qnv/view",
  },
  {
    date: "December 2020",
    title: "KNIT1 Facility Partners Workshop Report",
    url: "https://drive.google.com/file/d/1NFQ39lHFI75t0sweCGndHbJRKUTZbS0m/view",
  },
];

export default function WorkshopReportsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-white">
          <div className="page-container max-w-4xl">
            <h1 className="text-3xl font-bold text-fabric-blue mb-4">
              Workshop Reports
            </h1>
            <p className="text-sm text-fabric-gray-600 leading-relaxed mb-10 max-w-3xl">
              Browse reports from FABRIC&apos;s KNIT community workshops. Each
              report summarizes discussions, presentations, and outcomes from
              our regular community gatherings.
            </p>

            <div className="space-y-3">
              {reports.map((r) => (
                <a
                  key={r.title}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-4 rounded-xl border border-fabric-gray-200 hover:border-fabric-blue hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-fabric-light shrink-0">
                    <FileText className="h-5 w-5 text-fabric-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-fabric-navy group-hover:text-fabric-blue transition-colors">
                      {r.title}
                    </p>
                    <p className="text-xs text-fabric-gray-500 mt-0.5">
                      {r.date}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
