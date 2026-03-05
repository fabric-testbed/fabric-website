import Link from "next/link";
import { projectHighlights } from "@/lib/data/highlights";

interface ProjectHighlightsSectionProps {
  showFilters?: boolean;
}

export function ProjectHighlightsSection({ showFilters = false }: ProjectHighlightsSectionProps) {
  return (
    <section className="section bg-white">
      <div className="page-container">
        {showFilters && (
          <div className="mb-10">
            <p className="text-sm text-fabric-gray-600 leading-relaxed mb-6 max-w-3xl">
              Our Thread the Needle Project Highlights translate complex ideas into clear, engaging stories that show how
              research, technology, and collaboration come together to create real world impact. Please use the dropdowns
              below to search for specific researchers, institutions, and scientific domains.
            </p>
            {/* Filter bar */}
            <div className="flex flex-wrap items-center gap-3">
              <select className="px-4 py-2 rounded-lg border border-fabric-gray-200 text-sm text-fabric-gray-600 bg-white focus:outline-none focus:border-fabric-teal">
                <option value="">Researcher</option>
              </select>
              <select className="px-4 py-2 rounded-lg border border-fabric-gray-200 text-sm text-fabric-gray-600 bg-white focus:outline-none focus:border-fabric-teal">
                <option value="">Institution</option>
              </select>
              <select className="px-4 py-2 rounded-lg border border-fabric-gray-200 text-sm text-fabric-gray-600 bg-white focus:outline-none focus:border-fabric-teal">
                <option value="">Scientific Domain</option>
              </select>
              <button className="btn-yellow text-sm px-5 py-2">Search</button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectHighlights.map(({ slug, title, imagePlaceholder, href }) => (
            <Link
              key={slug}
              href={href}
              className="group block rounded-2xl overflow-hidden border border-fabric-gray-200 hover:border-fabric-sky hover:shadow-card-hover transition-all"
            >
              <div className={`${imagePlaceholder} h-44 relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold text-sm leading-snug group-hover:underline">
                    {title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
