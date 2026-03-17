import { ExternalLink, Settings, User, Video, GraduationCap, BookOpen } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Links sourced from fabric-portal/src/services/portalData.json
const links = {
  gettingStarted:          "https://learn.fabric-testbed.net/knowledge-base/quick-start-guide/",
  thingsToKnow:            "https://learn.fabric-testbed.net/knowledge-base/things-to-know-when-using-fabric-for-the-first-time/",
  guideToStartExperiment:  "https://learn.fabric-testbed.net/knowledge-base/creating-your-first-experiment-in-jupyter-hub/",
  guideToSliceBuilder:     "https://learn.fabric-testbed.net/knowledge-base/portal-slice-builder-user-guide/",
  guideToLoginToVMs:       "https://learn.fabric-testbed.net/knowledge-base/logging-into-fabric-vms/",
  knowledgeBase:           "https://learn.fabric-testbed.net/",
  forums:                  "https://learn.fabric-testbed.net/forums/",
  accountHelpPortal:       "https://fabric-testbed.atlassian.net/servicedesk/customer/portal/2/group/8/create/18",
  officeHours:             "https://outlook.office365.com/owa/calendar/FABRICOfficeHours@admin.live.unc.edu/bookings/",
  educatorForum:           "https://learn.fabric-testbed.net/forums/forum/fabric-educators/",
  educationProjectRequest: "https://fabric-testbed.atlassian.net/servicedesk/customer/portal/2/group/11/create/64",
};

function Btn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-fabric-blue text-fabric-blue hover:bg-fabric-blue hover:text-white transition-colors"
    >
      {children}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}

function SupportCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-fabric-gray-200 shadow-sm flex flex-col overflow-hidden">
      {/* Icon header */}
      <div className="flex items-center justify-center py-6 bg-fabric-off-white border-b border-fabric-gray-200">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-fabric-blue/10 text-fabric-blue">
          {icon}
        </div>
      </div>
      {/* Body */}
      <div className="flex flex-col flex-1 items-center text-center gap-5 p-6">
        <h2 className="text-base font-bold text-fabric-navy">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="py-12 bg-white border-b border-fabric-gray-200">
          <div className="page-container max-w-4xl">
            <h1 className="text-3xl font-bold text-fabric-blue mb-2">Getting Help in FABRIC</h1>
            <p className="text-sm text-fabric-gray-600 leading-relaxed max-w-2xl">
              Find answers, connect with the team, and get the support you need to make the most of FABRIC.
            </p>
          </div>
        </section>

        <section className="py-12 bg-fabric-off-white">
          <div className="page-container max-w-4xl space-y-10">

            {/* ── New user callout ─────────────────────────────── */}
            <div className="rounded-xl border border-fabric-blue/30 bg-fabric-blue/5 p-6">
              <p className="text-sm text-fabric-navy mb-3">
                If you are a new user to FABRIC, please make sure that you have checked these{" "}
                <a href={links.gettingStarted} target="_blank" rel="noreferrer" className="font-bold text-fabric-blue hover:underline">
                  Getting Started
                </a>{" "}
                articles first.
              </p>
              <ul className="space-y-1.5 text-sm text-fabric-gray-600 list-disc list-inside">
                <li>
                  <a href={links.thingsToKnow} target="_blank" rel="noreferrer" className="text-fabric-blue hover:underline">
                    Things to Know When Using FABRIC for the First Time
                  </a>
                </li>
                <li>
                  <a href={links.guideToStartExperiment} target="_blank" rel="noreferrer" className="text-fabric-blue hover:underline">
                    Quick Start Guide
                  </a>
                </li>
                <li>
                  <a href={links.guideToSliceBuilder} target="_blank" rel="noreferrer" className="text-fabric-blue hover:underline">
                    Slice Builder User Guide
                  </a>
                </li>
                <li>
                  <a href={links.guideToLoginToVMs} target="_blank" rel="noreferrer" className="text-fabric-blue hover:underline">
                    Logging into FABRIC VMs
                  </a>
                </li>
              </ul>
            </div>

            {/* ── Support cards 2×2 ────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <SupportCard icon={<Settings className="h-6 w-6" />} title="Experiment Issues">
                <p className="text-sm text-fabric-gray-600 leading-relaxed">
                  For technical assistance with your experiments, please search in our{" "}
                  <a href={links.knowledgeBase} target="_blank" rel="noopener noreferrer" className="text-fabric-blue hover:underline">Knowledge Base</a>{" "}
                  or the{" "}
                  <a href={links.forums} target="_blank" rel="noopener noreferrer" className="text-fabric-blue hover:underline">Forums</a>.
                  If you are unable to fix the problem on your own, please post a question in the appropriate section of our Forums.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Btn href={links.knowledgeBase}>Knowledge Base</Btn>
                  <Btn href={links.forums}>Forums</Btn>
                </div>
              </SupportCard>

              <SupportCard icon={<User className="h-6 w-6" />} title="Account Issues">
                <p className="text-sm text-fabric-gray-600 leading-relaxed">
                  If you are having problems with enrolling or logging into your FABRIC account or logging into your
                  experiment&apos;s resources via bastion hosts, please use our{" "}
                  <a href={links.accountHelpPortal} target="_blank" rel="noopener noreferrer" className="text-fabric-blue hover:underline">
                    FABRIC Account Help Portal
                  </a>{" "}
                  or email us at{" "}
                  <a href="mailto:account-help@fabric-testbed.net" className="text-fabric-blue hover:underline font-medium">
                    account-help@fabric-testbed.net
                  </a>
                  .
                </p>
                <Btn href={links.accountHelpPortal}>Account Help Portal</Btn>
              </SupportCard>

              <SupportCard icon={<Video className="h-6 w-6" />} title="Office Hours">
                <p className="text-sm text-fabric-gray-600 leading-relaxed">
                  Haven&apos;t found an answer to your question on the Forums or Knowledge Base? Set up time with members
                  of the FABRIC team during their Office Hours.
                </p>
                <Btn href={links.officeHours}>Book Office Hours</Btn>
              </SupportCard>

              <SupportCard icon={<GraduationCap className="h-6 w-6" />} title="Teaching Classes on FABRIC">
                <p className="text-sm text-fabric-gray-600 leading-relaxed">
                  To make sure you have a good experience teaching classes on FABRIC we ask that you share your plans
                  with us. Also be sure to sign up to the{" "}
                  <a href={links.educatorForum} target="_blank" rel="noopener noreferrer" className="text-fabric-blue hover:underline">
                    educator forum
                  </a>{" "}
                  as a place to ask questions and share your experiences.
                </p>
                <Btn href={links.educationProjectRequest}>Tell us about your class</Btn>
              </SupportCard>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
