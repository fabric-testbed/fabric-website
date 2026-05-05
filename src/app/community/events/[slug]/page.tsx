import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
                <Image src="/imgs/fabric-brand.png" alt="FABRIC" width={60} height={18} className="h-4 w-auto opacity-80" />
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
              <div className="flex items-start gap-2 flex-1">
                <MapPin className="h-4 w-4 text-fabric-teal shrink-0 mt-0.5" />
                <div className="text-sm text-fabric-gray-600">
                  <p className="font-medium">{event.location}</p>
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
            </div>

            {/* Body */}
            <div
              className="prose prose-sm max-w-none text-fabric-gray-600 leading-relaxed
                prose-headings:text-fabric-navy prose-headings:font-semibold
                prose-h2:text-lg prose-h2:mt-8 prose-h2:mb-3
                prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2
                prose-strong:text-fabric-navy prose-a:text-fabric-blue
                prose-ul:space-y-1 prose-li:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: event.contentHtml }}
            />

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
