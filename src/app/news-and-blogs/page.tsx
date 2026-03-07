import { getAllArticlesMeta } from "@/lib/articles";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NewsAndBlogsClient } from "./NewsAndBlogsClient";

export default function NewsAndBlogsPage() {
  const articles = getAllArticlesMeta();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <NewsAndBlogsClient articles={articles} />

        {/* ── Newsletter CTA ────────────────────────────────────── */}
        <section className="py-16" style={{ background: "linear-gradient(135deg,#2196C9 0%,#1B3A5C 100%)" }}>
          <div className="page-container max-w-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay in the Loop</h3>
            <p className="text-sm text-white/80 mb-8">
              Subscribe to the FABRIC newsletter for monthly updates and announcements.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="btn-yellow whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
