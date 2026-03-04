import Link from "next/link";
import { supportResources } from "@/lib/data/support";

export function AvailableSupportSection() {
  return (
    <section className="section bg-white">
      <div className="page-container">
        <h2 className="text-2xl font-bold text-fabric-navy mb-8">Available Support</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {supportResources.map(({ label, desc, href, external }) => (
            <div key={label} className="flex flex-col">
              {/* Blue header tile */}
              <div className="bg-fabric-teal rounded-xl px-4 py-3 text-center mb-3">
                <p className="text-white font-semibold text-sm leading-snug">{label}</p>
              </div>
              {/* Description */}
              <p className="text-xs text-fabric-gray-600 leading-relaxed flex-1 mb-3">{desc}</p>
              {/* CTA */}
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="btn-yellow text-xs px-4 py-2 self-start"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
