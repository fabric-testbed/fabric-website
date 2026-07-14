import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const ARTICLES_DIR = path.join(process.cwd(), "content/news-and-blogs");

function embedYouTube(html: string): string {
  const iframe = (id: string) =>
    `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:0.75rem"><iframe src="https://www.youtube.com/embed/${id}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>`;
  html = html.replace(/<a[^>]*href="https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)[^"]*"[^>]*>[^<]*<\/a>/g, (_, id) => iframe(id));
  html = html.replace(/<p>\s*https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)[^\s<]*\s*<\/p>/g, (_, id) => iframe(id));
  html = html.replace(/<a[^>]*href="https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+)[^"]*"[^>]*>[^<]*<\/a>/g, (_, id) => iframe(id));
  html = html.replace(/<p>\s*https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+)[^\s<]*\s*<\/p>/g, (_, id) => iframe(id));
  return html;
}

// Extract a meaningful excerpt from body content
function extractExcerpt(content: string, maxLen = 200): string {
  const lines = content.split("\n").filter((l) => {
    const t = l.trim();
    if (!t) return false;
    if (/^Published\s*[:：]?/i.test(t)) return false;
    if (t.startsWith("#") || t.startsWith("![") || t.startsWith("```")) return false;
    if (t.startsWith("---") || t.startsWith("|")) return false;
    if (/^https?:\/\//.test(t)) return false;
    return true;
  });
  const text = lines.join(" ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > maxLen ? text.slice(0, maxLen) + "…" : text;
}

export interface ArticleMeta {
  slug:     string;
  title:    string;
  date:     string; // ISO: "YYYY-MM-DD"
  type:     "news" | "blog";
  category: string;
  excerpt:  string;
  tags?:    string[];
}

export interface ArticleDetail extends ArticleMeta {
  contentHtml: string;
}

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllArticlesMeta(): ArticleMeta[] {
  return getAllArticleSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, `${slug}.md`), "utf8");
      const { data, content } = matter(raw);
      const excerpt = String(data.excerpt || "").trim();
      const goodExcerpt = excerpt && !/^Published\s*[:：]?/i.test(excerpt) ? excerpt : extractExcerpt(content);
      return {
        slug,
        ...(data as Omit<ArticleMeta, "slug">),
        date: String(data.date).slice(0, 10),
        excerpt: goodExcerpt,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getArticleBySlug(slug: string): Promise<ArticleDetail | null> {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  // Strip "Published: <date>" lines from body
  const cleanedContent = content
    .replace(/^Published\s*[:：]?\s*.+$/gm, "");
  const processed = await remark().use(html).process(cleanedContent);
  return {
    slug,
    ...(data as Omit<ArticleMeta, "slug">),
    date: String(data.date).slice(0, 10),
    contentHtml: embedYouTube(processed.toString()),
  };
}
