import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const dateStr = new Date(article.date + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-white">
          <div className="page-container max-w-3xl">

            <Link href="/news-and-blogs" className="text-sm text-fabric-blue hover:underline mb-6 inline-block">
              ← News &amp; Blogs
            </Link>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="px-2 py-0.5 text-xs font-semibold rounded bg-fabric-gray-100 text-fabric-gray-600 capitalize">
                {article.type === "news" ? "News" : "Blog"}
              </span>
              <span className="px-2 py-0.5 text-xs font-medium rounded bg-fabric-blue/10 text-fabric-blue capitalize">
                {article.category}
              </span>
            </div>

            <h1 className="text-2xl font-bold text-fabric-blue mb-4 leading-snug">{article.title}</h1>

            <div className="flex items-center gap-1.5 text-sm text-fabric-gray-400 mb-10">
              <Calendar className="h-4 w-4" />
              <span>{dateStr}</span>
            </div>

            {/* Body */}
            <div
              className="article-body prose prose-sm max-w-none text-fabric-gray-600 leading-relaxed
                prose-headings:text-fabric-navy prose-headings:font-semibold
                prose-h2:text-lg prose-h2:mt-8 prose-h2:mb-3
                prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2
                prose-strong:text-fabric-navy prose-a:text-fabric-blue
                prose-ul:space-y-1 prose-li:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
