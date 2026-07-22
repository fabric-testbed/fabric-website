import { Suspense } from "react";
import Link from "next/link";
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
        <Suspense>
          <NewsAndBlogsClient articles={articles} />
        </Suspense>

        {/* ── Newsletter CTA ────────────────────────────────────── */}
        <section className="py-16" style={{ background: "linear-gradient(135deg,#2196C9 0%,#1B3A5C 100%)" }}>
          <div className="page-container max-w-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay in the Loop</h3>
            <p className="text-sm text-white/80 mb-8">
              Subscribe to the FABRIC newsletter for monthly updates and announcements.
            </p>
            <Link href="/community/newsletter" className="btn-yellow inline-block">
              Subscribe Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
