"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronRight, Search, Calendar, Tag, ChevronDown, X } from "lucide-react";
import { type ArticleMeta } from "@/lib/articles";

const filters = [
  { id: "all",          label: "All Content" },
  { id: "news",         label: "News" },
  { id: "blog",         label: "Blogs" },
  { id: "newsletters",  label: "Newsletters" },
];

function formatDate(dateString: string) {
  return new Date(dateString + "T12:00:00").toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
}

function ContentCard({ item, onTagClick }: { item: ArticleMeta; onTagClick: (tag: string) => void }) {
  return (
    <Link href={`/news-and-blogs/${item.slug}`}>
      <article className="group flex gap-6 p-6 rounded-xl border border-fabric-gray-200 hover:border-fabric-blue hover:bg-fabric-off-white transition-all duration-200 cursor-pointer mb-3">
        <div className="flex-1 min-w-0">
          {/* Badges */}
          <div className="flex gap-2 flex-wrap mb-3">
            <span className="px-2 py-0.5 text-xs font-semibold rounded bg-fabric-gray-100 text-fabric-gray-600 capitalize">
              {item.type}
            </span>
            <span className="px-2 py-0.5 text-xs font-medium rounded bg-fabric-blue/10 text-fabric-blue capitalize">
              {item.category}
            </span>
          </div>

          <h3 className="text-base font-bold text-fabric-navy mb-2 group-hover:text-fabric-blue transition-colors leading-snug">
            {item.title}
          </h3>

          <p className="text-sm text-fabric-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {item.excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-fabric-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(item.date)}
            </span>
            {item.tags && item.tags.length > 0 && (
              <div className="flex gap-1.5 flex-wrap">
                {item.tags.filter((t) => !["news", "blog"].includes(t)).map((tag) => (
                  <span
                    key={tag}
                    onClick={(e) => { e.preventDefault(); onTagClick(tag); }}
                    className="px-2 py-0.5 text-xs rounded-full bg-fabric-gray-100 text-fabric-gray-500 hover:bg-fabric-blue/10 hover:text-fabric-blue cursor-pointer capitalize transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <span className="ml-auto hidden group-hover:inline-flex items-center gap-1 text-fabric-blue font-semibold">
              Read <ChevronRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

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
            ? "border-fabric-blue bg-fabric-blue/5 text-fabric-blue"
            : "border-fabric-gray-200 text-fabric-gray-600 hover:border-fabric-blue"
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
              className="flex items-center gap-2 px-3 py-2 text-sm text-fabric-gray-600 hover:bg-fabric-off-white cursor-pointer capitalize"
            >
              <input
                type="checkbox"
                checked={selected.has(tag.toLowerCase())}
                onChange={() => onToggle(tag)}
                className="rounded border-fabric-gray-200 text-fabric-blue focus:ring-fabric-blue"
              />
              {tag}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export function NewsAndBlogsClient({ articles }: { articles: ArticleMeta[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState(searchParams.get("filter") || "all");
  const [searchQuery, setSearchQuery]   = useState("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    articles.forEach((a) => {
      (a.tags || []).forEach((t) => {
        if (!["news", "blog"].includes(t.toLowerCase())) tagSet.add(t);
      });
    });
    return Array.from(tagSet).sort();
  }, [articles]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      const key = tag.toLowerCase();
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  // Sync filter to URL (only when user changes filter)
  function handleFilterChange(id: string) {
    setActiveFilter(id);
    const url = id === "all" ? "/news-and-blogs" : `/news-and-blogs?filter=${id}`;
    router.replace(url, { scroll: false });
  }

  const filtered = useMemo(() => {
    let items = articles;

    if (activeFilter === "news") {
      items = items.filter((i) => i.type === "news");
    } else if (activeFilter === "blog") {
      items = items.filter((i) => i.type === "blog");
    } else if (activeFilter === "newsletters") {
      items = items.filter((i) => i.category === "newsletter" || i.tags?.includes("newsletter"));
    }

    if (selectedTags.size > 0) {
      items = items.filter((i) =>
        (i.tags || []).some((t) => selectedTags.has(t.toLowerCase()))
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (i) => i.title.toLowerCase().includes(q) || i.excerpt.toLowerCase().includes(q)
      );
    }

    return [...items].sort((a, b) => b.date.localeCompare(a.date));
  }, [activeFilter, searchQuery, selectedTags, articles]);

  return (
    <>
      {/* ── Hero / controls ───────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-fabric-gray-200">
        <div className="page-container max-w-5xl space-y-8">

          <div>
            <h1 className="text-3xl font-bold text-fabric-blue mb-2">News &amp; Blogs</h1>
            <p className="text-sm text-fabric-gray-600 leading-relaxed max-w-2xl">
              Stay updated with the latest announcements, technical deep-dives, and community
              stories from the FABRIC research infrastructure.
            </p>
          </div>

          {/* Search + Tag dropdown */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-fabric-gray-400" />
              <input
                type="text"
                placeholder="Search news and blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-fabric-gray-200 focus:outline-none focus:ring-2 focus:ring-fabric-blue/40 focus:border-fabric-blue text-sm bg-white"
              />
            </div>
            <TagDropdown allTags={allTags} selected={selectedTags} onToggle={handleTagToggle} />
          </div>

          {/* Active tag pills */}
          {selectedTags.size > 0 && (
            <div className="flex flex-wrap gap-2 -mt-4">
              {Array.from(selectedTags).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-fabric-blue text-white capitalize"
                >
                  {tag}
                  <X className="h-3 w-3" />
                </button>
              ))}
              <button
                onClick={() => setSelectedTags(new Set())}
                className="px-2.5 py-1 text-xs font-semibold rounded-full border border-fabric-gray-200 text-fabric-gray-600 hover:bg-fabric-gray-100"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Filter tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => handleFilterChange(f.id)}
                className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm font-semibold transition-colors ${
                  activeFilter === f.id
                    ? "bg-fabric-blue text-white"
                    : "bg-fabric-gray-100 text-fabric-gray-600 hover:bg-fabric-gray-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ── Article list ──────────────────────────────────────── */}
      <section className="py-12 bg-fabric-off-white">
        <div className="page-container max-w-5xl">

          {filtered.length === 0 ? (
            <p className="text-sm text-fabric-gray-400 italic py-16 text-center">
              No content found. Try adjusting your search or filters.
            </p>
          ) : (
            <>
              <p className="text-sm text-fabric-gray-400 mb-6">
                {filtered.length} {filtered.length === 1 ? "article" : "articles"}
              </p>
              <div className="space-y-4">
                {filtered.map((item) => (
                  <ContentCard key={item.slug} item={item} onTagClick={handleTagToggle} />
                ))}
              </div>
            </>
          )}

        </div>
      </section>
    </>
  );
}
