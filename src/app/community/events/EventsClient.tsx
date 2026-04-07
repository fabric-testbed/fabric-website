"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, MapPin, Search, ChevronDown, ChevronUp } from "lucide-react";
import { Fabric } from "@/components/icons/fabric-icon";
import type { EventMeta } from "@/lib/events";

function EventCard({ event }: { event: EventMeta }) {
  const date = new Date(event.event_date + "T12:00:00");
  const dateStr = date.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="py-8 border-b border-fabric-gray-200 last:border-0">
      <div className="flex-1 min-w-0">
        <Link
          href={`/community/events/${event.slug}`}
          className="text-fabric-blue font-semibold hover:underline leading-snug block mb-3"
        >
          {event.title}
        </Link>

        <div className="flex flex-wrap gap-x-10 gap-y-1 mb-3">
          <div className="flex items-start gap-1.5 text-sm text-fabric-gray-600">
            <Calendar className="h-4 w-4 shrink-0 mt-0.5 text-fabric-teal" />
            <span>
              {dateStr}
              {event.time && <><br />{event.time}</>}
            </span>
          </div>
          {event.location && (
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
          )}
          {event.fabric_hosted && (
            <div className="flex items-start gap-1.5 text-sm text-fabric-gray-600">
              <Fabric className="h-4 w-4 shrink-0 mt-0.5 text-fabric-teal" />
              <span>FABRIC Hosted</span>
            </div>
          )}
        </div>

        {event.description && (
          <p className="text-sm text-fabric-gray-600 leading-relaxed">
            {event.description}{" "}
            <Link
              href={`/community/events/${event.slug}`}
              className="text-fabric-blue hover:underline"
            >
              Read more…
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

function matches(event: EventMeta, q: string) {
  const lower = q.toLowerCase();
  return (
    event.title.toLowerCase().includes(lower) ||
    event.description.toLowerCase().includes(lower) ||
    event.location.toLowerCase().includes(lower)
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors ${
        active
          ? "bg-fabric-teal text-white border-fabric-teal"
          : "bg-white text-fabric-gray-600 border-fabric-gray-200 hover:border-fabric-teal hover:text-fabric-teal"
      }`}
    >
      {children}
    </button>
  );
}

interface Props {
  upcoming: EventMeta[];
  past: EventMeta[];
}

export default function EventsClient({ upcoming, past }: Props) {
  const [search, setSearch]             = useState("");
  const [showPast, setShowPast]         = useState(false);
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [onlyHosted, setOnlyHosted]     = useState(false);
  const [onlyWebinar, setOnlyWebinar]   = useState(false);

  const pastYears = useMemo(() => {
    const years = Array.from(new Set(past.map((e) => e.event_date.slice(0, 4)))).sort((a, b) => b.localeCompare(a));
    return years;
  }, [past]);

  const filteredUpcoming = useMemo(() => {
    return upcoming.filter((e) => {
      if (search && !matches(e, search)) return false;
      return true;
    });
  }, [upcoming, search]);

  const filteredPast = useMemo(() => {
    return past.filter((e) => {
      if (selectedYear !== "all" && !e.event_date.startsWith(selectedYear)) return false;
      if (onlyHosted  && !e.fabric_hosted) return false;
      if (onlyWebinar && e.category !== "webinar" && e.category !== "webinars") return false;
      if (search && !matches(e, search)) return false;
      return true;
    });
  }, [past, selectedYear, onlyHosted, onlyWebinar, search]);

  const searchActive = search.length > 0;

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-10">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-fabric-gray-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Search events by title, description, or location…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-sm border border-fabric-gray-200 rounded-lg bg-white
                     focus:outline-none focus:ring-2 focus:ring-fabric-teal/40 focus:border-fabric-teal
                     text-fabric-gray-600 placeholder:text-fabric-gray-400"
        />
      </div>

      {/* Upcoming */}
      <div>
        <div className="flex items-baseline gap-3 mb-1">
          <h2 className="text-lg font-bold text-fabric-navy">Upcoming Events</h2>
          <span className="text-xs font-medium text-fabric-gray-400">
            {filteredUpcoming.length} event{filteredUpcoming.length !== 1 ? "s" : ""}
          </span>
        </div>
        {filteredUpcoming.length > 0 ? (
          filteredUpcoming.map((e) => <EventCard key={e.slug} event={e} />)
        ) : (
          <p className="text-sm text-fabric-gray-400 italic py-6">
            {searchActive ? "No upcoming events match your search." : "No upcoming events at this time."}
          </p>
        )}
      </div>

      {/* Past events toggle */}
      {past.length > 0 && (
        <div className="mt-10">
          <button
            onClick={() => setShowPast((v) => !v)}
            className="btn-yellow"
          >
            {showPast ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            {showPast ? "Hide Past Events" : `View Our Past Events (${past.length})`}
          </button>

          {showPast && (
            <div className="mt-6">
              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-6 items-center">
                {/* Year pills */}
                <FilterPill active={selectedYear === "all"} onClick={() => setSelectedYear("all")}>
                  All Years
                </FilterPill>
                {pastYears.map((year) => (
                  <FilterPill key={year} active={selectedYear === year} onClick={() => setSelectedYear(year)}>
                    {year}
                  </FilterPill>
                ))}

                {/* Divider */}
                <span className="h-4 w-px bg-fabric-gray-200 mx-1" />

                {/* Type filters */}
                <FilterPill active={onlyHosted} onClick={() => setOnlyHosted((v) => !v)}>
                  FABRIC Hosted
                </FilterPill>
                <FilterPill active={onlyWebinar} onClick={() => setOnlyWebinar((v) => !v)}>
                  Webinar
                </FilterPill>
              </div>

              {/* Result count */}
              <p className="text-xs text-fabric-gray-400 mb-4">
                {filteredPast.length} of {past.length} past event{past.length !== 1 ? "s" : ""}
              </p>

              {filteredPast.length > 0 ? (
                filteredPast.map((e) => <EventCard key={e.slug} event={e} />)
              ) : (
                <p className="text-sm text-fabric-gray-400 italic py-6">
                  No past events match your filters.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
