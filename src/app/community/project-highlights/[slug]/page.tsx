import Image from "next/image";
import Link from "next/link";
import { getAllHighlightSlugs, getHighlightBySlug } from "@/lib/highlights";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllHighlightSlugs().map((slug) => ({ slug }));
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function HighlightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const highlight = await getHighlightBySlug(slug);

  if (!highlight) {
    return (
      <>
        <Navbar />
        <main className="pt-16">
          <section className="py-24 bg-white">
            <div className="page-container max-w-3xl text-center">
              <Link
                href="/community/project-highlights"
                className="text-sm text-fabric-blue hover:underline mb-8 inline-block"
              >
                ← Project Highlights
              </Link>
              <h1 className="text-3xl font-bold text-fabric-blue mb-4">Content Coming Soon</h1>
              <p className="text-sm text-fabric-gray-600 leading-relaxed">
                This project highlight is currently being prepared. Please check back later.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const { title, subtitle, image, imageFit, imagePlaceholder, contentHtml, learnMore, researchers } = highlight;

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="py-12 bg-white">
          <div className="page-container max-w-3xl">

            <Link
              href="/community/project-highlights"
              className="text-sm text-fabric-blue hover:underline mb-6 inline-block"
            >
              ← Project Highlights
            </Link>

            <h1 className="text-3xl font-bold text-fabric-blue mb-4 leading-snug">{title}</h1>
            <p className="text-sm font-semibold text-fabric-navy mb-8 leading-relaxed">{subtitle}</p>

            {/* Cover image */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
              {image ? (
                <Image src={image} alt={title} fill className={imageFit === "contain" ? "object-contain" : "object-cover"} />
              ) : (
                <div className={`absolute inset-0 ${imagePlaceholder}`} />
              )}
            </div>

            {/* Article body */}
            <div
              className="highlight-body prose prose-sm max-w-none text-fabric-gray-600 leading-relaxed
                prose-headings:text-fabric-blue prose-headings:font-semibold prose-headings:text-base
                prose-p:mb-5 prose-h2:mt-10 prose-h2:mb-3
                [&>p]:mb-5 [&>h2]:mt-10 [&>h2]:mb-3"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </section>

        {/* ── Learn More ───────────────────────────────────────────── */}
        {learnMore && (learnMore.projectUrl || (learnMore.artifacts && learnMore.artifacts.length > 0)) && (
          <section className="py-10 bg-white border-t border-fabric-gray-200">
            <div className="page-container max-w-3xl">
              <h2 className="text-xl font-bold text-fabric-blue mb-5">Learn More</h2>
              <ul className="space-y-3">
                {learnMore.projectUrl && (
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-3 w-3 shrink-0 bg-fabric-blue" />
                    <span className="text-sm text-fabric-gray-600">
                      Read more about the project{" "}
                      <a
                        href={learnMore.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fabric-blue hover:underline"
                      >
                        here
                      </a>
                      .
                    </span>
                  </li>
                )}
                {learnMore.artifacts && learnMore.artifacts.length > 0 && (
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-3 w-3 shrink-0 bg-fabric-blue" />
                    <div>
                      <p className="text-sm text-fabric-gray-600 mb-2">
                        Download the public artifacts related to this project:
                      </p>
                      <ul className="space-y-1.5 ml-4">
                        {learnMore.artifacts.map((a) => (
                          <li key={a.label} className="flex items-start gap-2">
                            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 bg-fabric-gray-400" />
                            <a
                              href={a.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-fabric-blue hover:underline"
                            >
                              {a.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </section>
        )}

        {/* ── Connect with the Researchers ─────────────────────────── */}
        {researchers && researchers.length > 0 && (
          <section className="py-12 bg-fabric-off-white border-t border-fabric-gray-200">
            <div className="page-container max-w-3xl">
              <h2 className="text-2xl font-bold text-fabric-blue mb-8">Connect with the Researchers</h2>
              <div className="space-y-5">
                {researchers.map((r) => (
                  <div
                    key={r.name}
                    className="flex items-start gap-6 bg-white rounded-2xl p-6"
                    style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
                  >
                    {/* Photo */}
                    <div className="shrink-0 relative w-24 h-28">
                      <div
                        className="absolute bottom-0 right-0 w-20 h-24 rounded-xl"
                        style={{ background: "#2196C9" }}
                      />
                      <div className="absolute top-0 left-0 w-20 h-24 rounded-xl overflow-hidden bg-fabric-gray-100">
                        {r.photo ? (
                          <Image src={r.photo} alt={r.name} fill className="object-cover object-top" />
                        ) : null}
                      </div>
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-fabric-navy mb-0.5">{r.name}</p>
                      <p className="text-sm text-fabric-gray-600">{r.title}</p>
                      <p className="text-sm text-fabric-gray-600 mb-1">{r.institution}</p>
                      {r.interests && (
                        <p className="text-sm text-fabric-gray-600 mb-2">
                          Research Interests: {r.interests}
                        </p>
                      )}
                      <a
                        href={r.contact}
                        target={r.contact.startsWith("mailto:") ? undefined : "_blank"}
                        rel={r.contact.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        className="text-sm text-fabric-blue hover:underline"
                      >
                        Contact {r.name.split(" ")[0]}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
