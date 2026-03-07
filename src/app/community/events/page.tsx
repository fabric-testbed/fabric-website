import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { Fabric } from "@/components/icons/fabric-icon";
import { getAllEventsMeta, type EventMeta } from "@/lib/events";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const today = new Date().toISOString().slice(0, 10);

function EventCard({ event }: { event: EventMeta }) {
  const date = new Date(event.event_date + "T12:00:00");
  const dateStr = date.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="py-8 border-b border-fabric-gray-200 last:border-0">
      <div className="flex items-start gap-4">
        <div className="flex-1 min-w-0">
          {/* Title */}
          <Link
            href={`/community/events/${event.slug}`}
            className="text-fabric-blue font-semibold hover:underline leading-snug block mb-3"
          >
            {event.title}
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-10 gap-y-1 mb-3">
            <div className="flex items-start gap-1.5 text-sm text-fabric-gray-600">
              <Calendar className="h-4 w-4 shrink-0 mt-0.5 text-fabric-teal" />
              <span>
                {dateStr}<br />
                {event.time}
              </span>
            </div>
            <div className="flex items-start gap-1.5 text-sm text-fabric-gray-600">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-fabric-teal" />
              <span>
                {event.location}
                {event.registration_url && (
                  <>
                    {": "}
                    <a
                      href={event.registration_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fabric-blue hover:underline font-medium"
                    >
                      Register Here
                    </a>
                  </>
                )}
              </span>
            </div>
            {
              event.fabric_hosted &&
              <div className="flex items-start gap-1.5 text-sm text-fabric-gray-600">
                <Fabric className="h-4 w-4 shrink-0 mt-0.5 text-fabric-teal" />
                <span>
                  FABRIC Hosted
                </span>
              </div>
            }
          </div>

          {/* Description */}
          <p className="text-sm text-fabric-gray-600 leading-relaxed">
            {event.description}{" "}
            <Link
              href={`/community/events/${event.slug}`}
              className="text-fabric-blue hover:underline"
            >
              Read more…
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const all = getAllEventsMeta();
  const upcoming = all.filter((e) => e.event_date >= today);
  const past     = all.filter((e) => e.event_date <  today);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-white">
          <div className="page-container max-w-4xl">

            <h1 className="text-3xl font-bold text-fabric-blue mb-4">Events &amp; Workshops</h1>
            <p className="text-sm text-fabric-gray-600 leading-relaxed mb-10 flex items-center gap-2 flex-wrap">
              The following is a list of upcoming events hosted by the FABRIC team or our community
              members.
            </p>

            {/* Upcoming */}
            {upcoming.length > 0 ? (
              <div>
                {upcoming.map((e) => <EventCard key={e.slug} event={e} />)}
              </div>
            ) : (
              <p className="text-sm text-fabric-gray-400 italic py-8">No upcoming events at this time.</p>
            )}

            {/* Past events CTA */}
            {past.length > 0 && (
              <div className="flex justify-end mt-10">
                <Link href="/community/events/past" className="btn-yellow">
                  View Our Past Events
                </Link>
              </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
