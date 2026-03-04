import Link from "next/link";
import { newsItems, eventItems } from "@/lib/data/news";

export function NewsEventsSection() {
  return (
    <section className="section bg-white">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* News */}
          <div>
            <h2 className="text-xl font-bold text-fabric-navy mb-6 pb-3 border-b border-fabric-gray-200">
              News
            </h2>
            <div className="space-y-7">
              {newsItems.map((item) => (
                <article key={item.slug}>
                  <p className="text-xs text-fabric-gray-400 font-medium mb-1">{item.date}</p>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-fabric-blue hover:text-fabric-navy transition-colors leading-snug block mb-2"
                  >
                    {item.title}
                  </Link>
                  <p className="text-xs text-fabric-gray-600 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-xs text-fabric-teal font-semibold mt-2 hover:text-fabric-blue transition-colors"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <h2 className="text-xl font-bold text-fabric-navy mb-6 pb-3 border-b border-fabric-gray-200">
              Events
            </h2>
            <div className="space-y-6">
              {eventItems.map((event) => (
                <article key={event.slug} className="flex gap-4">
                  {/* Date badge */}
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="bg-fabric-light rounded-xl px-3 py-2 text-center min-w-[52px]">
                      <p className="text-xs font-semibold text-fabric-teal uppercase">{event.month}</p>
                      <p className="text-2xl font-bold text-fabric-navy leading-none">{event.day}</p>
                      <p className="text-xs text-fabric-gray-400">{event.year}</p>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-fabric-gray-400 mb-1">{event.timeRange}</p>
                    <Link
                      href={event.href}
                      className="text-sm font-semibold text-fabric-blue hover:text-fabric-navy transition-colors leading-snug block mb-2"
                    >
                      {event.title}
                    </Link>
                    <p className="text-xs text-fabric-gray-600 leading-relaxed line-clamp-3">
                      {event.excerpt}
                    </p>
                    <Link
                      href={event.href}
                      className="inline-flex items-center gap-1 text-xs text-fabric-teal font-semibold mt-2 hover:text-fabric-blue transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
