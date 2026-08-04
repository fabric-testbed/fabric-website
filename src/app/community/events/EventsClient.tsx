"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Calendar, MapPin, Search, ChevronDown, ChevronUp, X, Tag } from "lucide-react";
import type { EventMeta } from "@/lib/events";

function EventCard({ event, onTagClick }: { event: EventMeta; onTagClick: (tag: string) => void }) {
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
              <img src="/imgs/fabric-icon.png" alt="FABRIC" className="h-3.5 w-auto shrink-0 mt-0.5" />
              <span>FABRIC Hosted</span>
            </div>
          )}
        </div>

        {event.description && (
          <p className="text-sm text-fabric-gray-600 leading-relaxed line-clamp-2">
            {event.description}{" "}
            <Link
              href={`/community/events/${event.slug}`}
              className="text-fabric-blue hover:underline"
            >
              Read more…
            </Link>
          </p>
        )}

        {/* Tags */}
        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {event.tags.map((tag) => {
              const label = typeof tag === "string" ? tag : Object.entries(tag).map(([k, v]) => `${k}: ${v}`).join(", ");
              return (
                <button
                  key={label}
                  onClick={() => onTagClick(label)}
                  className="badge cursor-pointer hover:bg-fabric-teal hover:text-white transition-colors"
                >
                  {label}
                </button>
              );
            })}
          </div>
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

function getTagLabel(tag: unknown): string {
  if (typeof tag === "string") return tag;
  if (typeof tag === "object" && tag !== null) {
    return Object.entries(tag).map(([k, v]) => `${k}: ${v}`).join(", ");
  }
  return String(tag);
}

function hasAnyTag(event: EventMeta, tags: Set<string>) {
  if (!event.tags || tags.size === 0) return true;
  return event.tags.some((t) => tags.has(getTagLabel(t).toLowerCase()));
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

// ── Multi-select tag dropdown ────────────────────────────────────────────────
function TagDropdown({
  allTags,
  selected,
  onToggle,
}: {
  allTags: string[];
  selected: Set<string>;
  onToggle: (tag: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 px-3 py-2.5 text-sm border rounded-lg transition-colors ${
          selected.size > 0
            ? "border-fabric-teal bg-fabric-teal/5 text-fabric-teal"
            : "border-fabric-gray-200 text-fabric-gray-600 hover:border-fabric-teal"
        }`}
      >
        <Tag className="h-3.5 w-3.5" />
        Tags{selected.size > 0 && ` (${selected.size})`}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 z-30 w-64 max-h-72 overflow-y-auto
                        bg-white border border-fabric-gray-200 rounded-lg shadow-lg">
          {allTags.map((tag) => (
            <label
              key={tag}
              className="flex items-center gap-2 px-3 py-2 text-sm text-fabric-gray-600 hover:bg-fabric-off-white cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.has(tag.toLowerCase())}
                onChange={() => onToggle(tag)}
                className="rounded border-fabric-gray-200 text-fabric-teal focus:ring-fabric-teal"
              />
              {tag}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

interface Props {
  upcoming: EventMeta[];
  past: EventMeta[];
}

export default function EventsClient({ upcoming, past }: Props) {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get("tag") || "";

  const [search, setSearch]             = useState("");
  const [showPast, setShowPast]         = useState(!!initialTag);
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [onlyHosted, setOnlyHosted]     = useState(false);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(
    initialTag ? new Set([initialTag.toLowerCase()]) : new Set()
  );

  // Collect all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    [...upcoming, ...past].forEach((e) => {
      (e.tags || []).forEach((t) => tagSet.add(getTagLabel(t)));
    });
    return Array.from(tagSet).sort();
  }, [upcoming, past]);

  const pastYears = useMemo(() => {
    return Array.from(new Set(past.map((e) => e.event_date.slice(0, 4)))).sort((a, b) => b.localeCompare(a));
  }, [past]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      const key = tag.toLowerCase();
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
    if (!showPast) setShowPast(true);
  };

  const clearTags = () => setSelectedTags(new Set());

  const filteredUpcoming = useMemo(() => {
    return upcoming.filter((e) => {
      if (search && !matches(e, search)) return false;
      if (selectedTags.size > 0 && !hasAnyTag(e, selectedTags)) return false;
      return true;
    });
  }, [upcoming, search, selectedTags]);

  const filteredPast = useMemo(() => {
    return past.filter((e) => {
      if (selectedYear !== "all" && !e.event_date.startsWith(selectedYear)) return false;
      if (onlyHosted  && !e.fabric_hosted) return false;
      if (search && !matches(e, search)) return false;
      if (selectedTags.size > 0 && !hasAnyTag(e, selectedTags)) return false;
      return true;
    });
  }, [past, selectedYear, onlyHosted, search, selectedTags]);

  const searchActive = search.length > 0;

  return (
    <div>
      {/* Search bar + tag dropdown */}
      <div className="flex gap-2 mb-4">
        <div className="relative flex-1">
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
        <TagDropdown allTags={allTags} selected={selectedTags} onToggle={handleTagToggle} />
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
          filteredUpcoming.map((e) => <EventCard key={e.slug} event={e} onTagClick={handleTagToggle} />)
        ) : (
          <p className="text-sm text-fabric-gray-400 italic py-6">
            {searchActive || selectedTags.size > 0 ? "No upcoming events match your filters." : "No upcoming events at this time."}
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
                <FilterPill active={selectedYear === "all"} onClick={() => setSelectedYear("all")}>
                  All Years
                </FilterPill>
                {pastYears.map((year) => (
                  <FilterPill key={year} active={selectedYear === year} onClick={() => setSelectedYear(year)}>
                    {year}
                  </FilterPill>
                ))}

                <span className="h-4 w-px bg-fabric-gray-200 mx-1" />

                <FilterPill active={onlyHosted} onClick={() => setOnlyHosted((v) => !v)}>
                  FABRIC Hosted
                </FilterPill>
              </div>

              <p className="text-xs text-fabric-gray-400 mb-4">
                {filteredPast.length} of {past.length} past event{past.length !== 1 ? "s" : ""}
              </p>

              {filteredPast.length > 0 ? (
                filteredPast.map((e) => <EventCard key={e.slug} event={e} onTagClick={handleTagToggle} />)
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
