import Link from "next/link";
import { getAllEventsMeta } from "@/lib/events";
import { getAllArticlesMeta } from "@/lib/articles";

export function NewsEventsSection() {
  const events = getAllEventsMeta().slice(0, 3);

  const news = getAllArticlesMeta().slice(0, 3);

  return (
    <section className="section bg-fabric-off-white">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Events */}
          <div>
            <h2 className="text-xl font-bold text-fabric-navy mb-6 pb-3 border-b border-fabric-gray-200">
              Events
            </h2>
            <div className="space-y-6">
              {events.map((event) => {
                const d = new Date(event.event_date + "T12:00:00");
                const month = d.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
                const day = String(d.getDate());
                const year = String(d.getFullYear());

                return (
                  <article key={event.slug} className="flex gap-4">
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="bg-white rounded-xl px-3 py-2 text-center min-w-[52px]">
                        <p className="text-xs font-semibold text-fabric-teal uppercase">{month}</p>
                        <p className="text-2xl font-bold text-fabric-navy leading-none">{day}</p>
                        <p className="text-xs text-fabric-gray-400">{year}</p>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      {event.location && (
                        <p className="text-xs text-fabric-gray-400 mb-1">{event.location}</p>
                      )}
                      {event.time && (
                        <p className="text-xs text-fabric-gray-400 mb-1">{event.time}</p>
                      )}
                      <Link
                        href={`/community/events/${event.slug}`}
                        className="text-sm font-semibold text-fabric-blue hover:text-fabric-navy transition-colors leading-snug block mb-2"
                      >
                        {event.title}
                      </Link>
                      <p className="text-xs text-fabric-gray-600 leading-relaxed line-clamp-3">
                        {event.description}
                      </p>
                      <Link
                        href={`/community/events/${event.slug}`}
                        className="inline-flex items-center gap-1 text-xs text-fabric-teal font-semibold mt-2 hover:text-fabric-blue transition-colors"
                      >
                        View Details →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
            <Link
              href="/community/events"
              className="inline-flex items-center gap-1 text-sm text-fabric-blue font-semibold mt-6 hover:text-fabric-navy transition-colors"
            >
              View All Events →
            </Link>
          </div>

          {/* News */}
          <div>
            <h2 className="text-xl font-bold text-fabric-navy mb-6 pb-3 border-b border-fabric-gray-200">
              News
            </h2>
            <div className="space-y-7">
              {news.map((item) => {
                const dateStr = new Date(item.date + "T12:00:00").toLocaleDateString("en-US", {
                  year: "numeric", month: "long", day: "numeric",
                });
                return (
                  <article key={item.slug}>
                    <p className="text-xs text-fabric-gray-400 font-medium mb-1">{dateStr}</p>
                    <Link
                      href={`/news-and-blogs/${item.slug}`}
                      className="text-sm font-semibold text-fabric-blue hover:text-fabric-navy transition-colors leading-snug block mb-2"
                    >
                      {item.title}
                    </Link>
                    <p className="text-xs text-fabric-gray-600 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/news-and-blogs/${item.slug}`}
                      className="inline-flex items-center gap-1 text-xs text-fabric-teal font-semibold mt-2 hover:text-fabric-blue transition-colors"
                    >
                      Read More →
                    </Link>
                  </article>
                );
              })}
            </div>
            <Link
              href="/news-and-blogs"
              className="inline-flex items-center gap-1 text-sm text-fabric-blue font-semibold mt-6 hover:text-fabric-navy transition-colors"
            >
              View All News →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
