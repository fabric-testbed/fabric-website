import Link from "next/link";

const useCases = [
  "Experiment at scale on a realistic global network",
  "Develop reproducible, publishable experiments",
  "Reimagine data generation, processing, and caching throughout the network and computing continuum",
  "Automate tests and redesign in rapid test-fix-test cycles",
  "Create smarter, faster tools for managing scientific workflows and data",
  "Prototype and validate disruptive designs before deploying into production",
  "Push the frontier of distributed applications and networking experiments",
];

export function IsRightForMeSection() {
  return (
    <section className="section bg-white">
      <div className="page-container">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-fabric-navy mb-4">
            Is FABRIC Right for Me?
          </h2>
          <p className="text-fabric-gray-600 text-sm leading-relaxed mb-2">
            FABRIC is an infrastructure designed to explore impactful new ideas that are impossible or impractical with the current Internet.
          </p>
          <p className="text-fabric-gray-600 text-sm leading-relaxed mb-8">
            FABRIC&apos;s goal is to enable rapid prototyping and validation of new network and distributed computing methods and applications that leverage novel technologies that are not accessible, programmable, or at sufficient levels elsewhere.
          </p>

          {/* Use cases card */}
          <div className="border border-fabric-gray-200 rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-6 w-6 rounded-full bg-fabric-yellow flex items-center justify-center text-xs font-bold text-fabric-navy">
                1
              </div>
              <p className="text-sm font-semibold text-fabric-navy">With FABRIC, you can:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {useCases.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fabric-teal" />
                  <p className="text-sm text-fabric-gray-600 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/about" className="btn-blue">
            Learn More About FABRIC
          </Link>
        </div>
      </div>
    </section>
  );
}
