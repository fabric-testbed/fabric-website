"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Search, ChevronUp, ChevronDown, ChevronsUpDown,
  AlertCircle, Loader2, ExternalLink, ChevronLeft, ChevronRight,
} from "lucide-react";

const PAGE_SIZE = 20;
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ── Types ─────────────────────────────────────────────────────────────────────
interface Author {
  author_name: string;
  display_name: string;
}

interface Publication {
  uuid: string;
  title: string;
  year: string;
  authors: Author[];
  venue: string;
  link: string | null;
  project_name: string | null;
  project_uuid: string | null;
}

type SortKey = "title" | "year" | "authors" | "venue" | "project_name";
type SortDir = "asc" | "desc";

// ── Sort icon ─────────────────────────────────────────────────────────────────
function SortIcon({ col, sortKey, sortDir }: { col: SortKey; sortKey: SortKey; sortDir: SortDir }) {
  if (col !== sortKey) return <ChevronsUpDown className="h-3 w-3 opacity-30 inline ml-0.5" />;
  return sortDir === "asc"
    ? <ChevronUp   className="h-3 w-3 inline ml-0.5 text-fabric-blue" />
    : <ChevronDown className="h-3 w-3 inline ml-0.5 text-fabric-blue" />;
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState<string | null>(null);
  const [searchQuery, setSearchQuery]   = useState("");
  const [sortKey, setSortKey]           = useState<SortKey>("year");
  const [sortDir, setSortDir]           = useState<SortDir>("desc");
  const [page, setPage]                 = useState(1);

  useEffect(() => {
    fetch("/api/publications")
      .then((r) => r.json())
      .then((json) => {
        if (json.error) { setError(json.error); return; }
        setPublications(json.results ?? []);
      })
      .catch(() => setError("Failed to load publications."))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let out = publications.map((p) => ({
      ...p,
      authorsStr: p.authors.map((a) => a.display_name).join(", "),
    }));

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      out = out.filter(
        (p) =>
          (p.title?.toLowerCase().includes(q) ?? false) ||
          (p.authorsStr?.toLowerCase().includes(q) ?? false) ||
          (p.venue?.toLowerCase().includes(q) ?? false) ||
          (p.year?.includes(q) ?? false) ||
          (p.project_name?.toLowerCase().includes(q) ?? false)
      );
    }

    out.sort((a, b) => {
      let av = "";
      let bv = "";
      if (sortKey === "authors") { av = a.authorsStr ?? ""; bv = b.authorsStr ?? ""; }
      else { av = String(a[sortKey] ?? ""); bv = String(b[sortKey] ?? ""); }
      const cmp = av.localeCompare(bv, undefined, { numeric: true });
      return sortDir === "asc" ? cmp : -cmp;
    });

    return out;
  }, [publications, searchQuery, sortKey, sortDir]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir((d) => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
    setPage(1);
  }

  const thCls =
    "px-4 py-3 text-left text-xs font-semibold text-fabric-gray-500 uppercase tracking-wide whitespace-nowrap cursor-pointer select-none hover:text-fabric-blue transition-colors";

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="py-12 bg-white border-b border-fabric-gray-200">
          <div className="page-container max-w-6xl">
            <h1 className="text-3xl font-bold text-fabric-blue mb-2">FABRIC User Publications</h1>
            <p className="text-sm text-fabric-gray-600 leading-relaxed max-w-2xl">
              Research publications by FABRIC users. Search by title, author, venue, year, or project name.
            </p>
          </div>
        </section>

        {/* ── Content ───────────────────────────────────────────── */}
        <section className="py-10 bg-fabric-off-white">
          <div className="page-container max-w-6xl">

            {/* Search */}
            <div className="flex gap-2 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-fabric-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title, author, venue, year, or project…"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-fabric-gray-200 focus:outline-none focus:ring-2 focus:ring-fabric-blue/40 focus:border-fabric-blue text-sm bg-white"
                />
              </div>
            </div>

            {/* Loading */}
            {loading && (
              <div className="flex items-center gap-3 py-20 justify-center text-fabric-gray-400">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span className="text-sm">Loading publications…</span>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="flex items-start gap-3 p-5 rounded-xl border border-red-200 bg-red-50 text-red-700">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">Unable to load publications</p>
                  <p className="text-xs text-red-600">{error}</p>
                </div>
              </div>
            )}

            {/* Table */}
            {!loading && !error && (
              <>
                <p className="text-xs text-fabric-gray-400 mb-3 font-mono text-right">
                  Displaying <span className="font-bold text-fabric-navy">{filtered.length}</span> publications
                </p>

                <div className="rounded-xl border border-fabric-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-fabric-off-white border-b border-fabric-gray-200">
                        <tr>
                          <th className={thCls} onClick={() => toggleSort("title")} style={{ minWidth: 280 }}>
                            Title <SortIcon col="title" sortKey={sortKey} sortDir={sortDir} />
                          </th>
                          <th className={thCls} onClick={() => toggleSort("year")} style={{ minWidth: 72 }}>
                            Year <SortIcon col="year" sortKey={sortKey} sortDir={sortDir} />
                          </th>
                          <th className={thCls} onClick={() => toggleSort("authors")} style={{ minWidth: 180 }}>
                            Researchers <SortIcon col="authors" sortKey={sortKey} sortDir={sortDir} />
                          </th>
                          <th className={thCls} onClick={() => toggleSort("venue")} style={{ minWidth: 160 }}>
                            Venue <SortIcon col="venue" sortKey={sortKey} sortDir={sortDir} />
                          </th>
                          <th className={thCls} onClick={() => toggleSort("project_name")} style={{ minWidth: 160 }}>
                            FABRIC Project <SortIcon col="project_name" sortKey={sortKey} sortDir={sortDir} />
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-fabric-gray-100">
                        {paged.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="px-4 py-16 text-center text-sm text-fabric-gray-400 italic">
                              No publications match your search.
                            </td>
                          </tr>
                        ) : paged.map((pub) => (
                          <tr key={pub.uuid} className="hover:bg-fabric-off-white transition-colors align-top">
                            {/* Title */}
                            <td className="px-4 py-3 text-sm">
                              {pub.link ? (
                                <a
                                  href={pub.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-fabric-blue hover:underline font-medium inline-flex items-start gap-1 leading-snug"
                                >
                                  {pub.title}
                                  <ExternalLink className="h-3 w-3 shrink-0 mt-0.5 opacity-60" />
                                </a>
                              ) : (
                                <span className="text-fabric-navy font-medium leading-snug">{pub.title}</span>
                              )}
                            </td>
                            {/* Year */}
                            <td className="px-4 py-3 text-sm font-mono text-fabric-gray-600 whitespace-nowrap">
                              {pub.year}
                            </td>
                            {/* Authors */}
                            <td className="px-4 py-3 text-sm text-fabric-gray-600 leading-snug">
                              {pub.authors.map((a) => a.display_name).join(", ")}
                            </td>
                            {/* Venue */}
                            <td className="px-4 py-3 text-sm text-fabric-gray-600 leading-snug">
                              {pub.venue}
                            </td>
                            {/* Project */}
                            <td className="px-4 py-3 text-sm">
                              {pub.project_name ? (
                                <a
                                  href={`https://portal.fabric-testbed.net/experiments/public-projects/${pub.project_uuid}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-fabric-blue hover:underline inline-flex items-center gap-1"
                                >
                                  {pub.project_name}
                                  <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
                                </a>
                              ) : (
                                <span className="text-fabric-gray-300">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 py-3 border-t border-fabric-gray-200">
                      <span className="text-xs text-fabric-gray-400">
                        {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setPage((p) => Math.max(1, p - 1))}
                          disabled={page === 1}
                          className="p-1.5 rounded hover:bg-fabric-gray-100 disabled:opacity-30 transition-colors"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                          .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
                          .reduce<(number | "…")[]>((acc, p, i, arr) => {
                            if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("…");
                            acc.push(p);
                            return acc;
                          }, [])
                          .map((p, i) =>
                            p === "…" ? (
                              <span key={`ellipsis-${i}`} className="px-1 text-fabric-gray-400 text-xs">…</span>
                            ) : (
                              <button
                                key={p}
                                onClick={() => setPage(p as number)}
                                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                                  page === p
                                    ? "bg-fabric-blue text-white"
                                    : "hover:bg-fabric-gray-100 text-fabric-gray-600"
                                }`}
                              >
                                {p}
                              </button>
                            )
                          )}
                        <button
                          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                          disabled={page === totalPages}
                          className="p-1.5 rounded hover:bg-fabric-gray-100 disabled:opacity-30 transition-colors"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
