import Link from "next/link";

const steps = [
  { label: "Sign up for an account",   step: "1" },
  { label: "Wait for Approval",        step: "2" },
  { label: "Join or Create A Project", step: "3" },
  { label: "Start Experimenting",      step: "4" },
];

export function SignUpStepsSection() {
  return (
    <section className="section bg-fabric-off-white">
      <div className="page-container">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-fabric-navy mb-3">
            How do I Sign Up?
          </h2>
          <p className="text-fabric-gray-600 text-sm leading-relaxed mb-8">
            The first step is to sign up for a FABRIC portal account. This allows you to join and manage projects, SSH keys, and API tokens, as well as create or visualize slice topologies.
          </p>

          {/* Steps */}
          <div className="border border-fabric-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-6 w-6 rounded-full bg-fabric-yellow flex items-center justify-center text-xs font-bold text-fabric-navy">
                2
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {steps.map(({ label, step }) => (
                <div
                  key={step}
                  className="bg-fabric-teal rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-2 min-h-[90px] hover:bg-fabric-blue transition-colors cursor-default group"
                >
                  <p className="text-white/50 text-xs font-mono">0{step}</p>
                  <p className="text-white font-semibold text-sm leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-right">
            <Link
              href="https://portal.fabric-testbed.net/signup/1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
