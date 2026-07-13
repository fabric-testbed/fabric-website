import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { getAllEventSlugs, getEventBySlug } from "@/lib/events";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export async function generateStaticParams() {
  return getAllEventSlugs().map((slug) => ({ slug }));
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) notFound();

  const date = new Date(event.event_date + "T12:00:00");
  const dateStr = date.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-white">
          <div className="page-container max-w-3xl">

            <Link href="/community/events" className="text-sm text-fabric-blue hover:underline mb-6 inline-block">
              ← Events &amp; Workshops
            </Link>

            {/* FABRIC-hosted badge */}
            {event.fabric_hosted && (
              <div className="flex items-center gap-2 mb-4">
                <img src="/imgs/fabric-icon.png" alt="FABRIC" className="h-4 w-auto" />
                <span className="text-xs text-fabric-gray-400">Hosted by FABRIC</span>
              </div>
            )}

            <h1 className="text-2xl font-bold text-fabric-blue mb-6 leading-snug">{event.title}</h1>

            {/* Event meta card */}
            <div className="bg-fabric-off-white rounded-xl p-6 mb-10 flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-2 flex-1">
                <Calendar className="h-4 w-4 text-fabric-teal shrink-0 mt-0.5" />
                <div className="text-sm text-fabric-gray-600">
                  <p className="font-medium">{dateStr}</p>
                  <p>{event.time}</p>
                </div>
              </div>
              {(event.location || event.registration_url) && (
                <div className="flex items-start gap-2 flex-1">
                  <MapPin className="h-4 w-4 text-fabric-teal shrink-0 mt-0.5" />
                  <div className="text-sm text-fabric-gray-600">
                    {event.location && <p className="font-medium">{event.location}</p>}
                    {event.registration_url && (
                      <a
                        href={event.registration_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-fabric-blue hover:underline mt-1"
                      >
                        Register Here <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Body */}
            <div
              className="article-body text-sm text-fabric-gray-600 leading-relaxed max-w-none"
              dangerouslySetInnerHTML={{ __html: event.contentHtml }}
            />

            {/* Tags */}
            {event.tags && event.tags.length > 0 && (
              <div className="flex items-center gap-2 mt-10 pt-6 border-t border-fabric-gray-200">
                <span className="text-xs text-fabric-gray-400">Tagged:</span>
                {event.tags.map((tag) => {
                  const label = typeof tag === "string" ? tag : Object.entries(tag).map(([k, v]) => `${k}: ${v}`).join(", ");
                  return (
                    <Link
                      key={label}
                      href={`/community/events?tag=${encodeURIComponent(label)}`}
                      className="badge hover:bg-fabric-teal hover:text-white transition-colors no-underline"
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
