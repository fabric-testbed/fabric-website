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

function externalLinksNewTab(html: string): string {
  return html.replace(
    /<a\s+href="(https?:\/\/[^"]+)"/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer"'
  );
}

// Extract a meaningful excerpt from body content
function extractExcerpt(content: string, maxLen = 200): string {
  const lines = content.split("\n").filter((l) => {
    const t = l.trim();
    if (!t) return false;
    if (/^Published\s*[:：]?/i.test(t)) return false;
    if (/^_Published/i.test(t)) return false;
    if (/^Dear FABRIC/i.test(t)) return false;
    if (/^An update from/i.test(t)) return false;
    if (t.startsWith("#") || t.startsWith("![") || t.startsWith("[![")) return false;
    if (t.startsWith("```") || t.startsWith("---") || t.startsWith("|")) return false;
    if (t === "* * *" || t === "***" || t === "---") return false;
    if (/^https?:\/\//.test(t)) return false;
    // Skip lines that are only a date (e.g. "_December 15, 2025_")
    if (/^_[A-Z][a-z]+\s+\d/.test(t) && t.endsWith("_")) return false;
    return true;
  });
  const text = lines.join(" ")
    .replace(/!\[[^\]]*\]?\([^)]*\)?[^\s]*/g, "")  // images
    .replace(/\[!\[[^\]]*\]?\([^)]*\)?\]\([^)]*\)?[^\s]*/g, "")  // image links
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
      const rawExcerpt = String(data.excerpt || "").trim();
      // Strip markdown formatting from excerpt
      const cleanedExcerpt = rawExcerpt
        .replace(/!\[[^\]]*\]?\([^)]*\)?[^\s]*/g, "")  // images (including truncated)
        .replace(/\[!\[[^\]]*\]?\([^)]*\)?\]\([^)]*\)?[^\s]*/g, "")  // image links
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")  // links
        .replace(/\*\*([^*]+)\*\*/g, "$1")         // bold
        .replace(/\*([^*]+)\*/g, "$1")             // italic *
        .replace(/_([^_]+)_/g, "$1")               // italic _
        .replace(/\\+/g, "")                       // escaped chars
        .replace(/\s+/g, " ")
        .trim();
      const isBadExcerpt = !cleanedExcerpt
        || cleanedExcerpt.length < 40
        || /^Published\s*[:：]?/i.test(cleanedExcerpt)
        || /^An update from/i.test(cleanedExcerpt)
        || /^Dear FABRIC/i.test(cleanedExcerpt)
        || /^https?:\/\//.test(cleanedExcerpt)
        || /^!\[/.test(cleanedExcerpt)
        || /^\[!\[/.test(cleanedExcerpt);
      const goodExcerpt = isBadExcerpt ? extractExcerpt(content) : cleanedExcerpt;
      return {
        slug,
        ...(data as Omit<ArticleMeta, "slug">),
        date: data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : String(data.date).slice(0, 10),
        excerpt: goodExcerpt,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

const SAFE_SLUG = /^[a-z0-9][a-z0-9._-]*$/;

export async function getArticleBySlug(slug: string): Promise<ArticleDetail | null> {
  if (!SAFE_SLUG.test(slug)) return null;
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!path.resolve(filePath).startsWith(path.resolve(ARTICLES_DIR))) return null;
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
    date: data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date).slice(0, 10),
    contentHtml: externalLinksNewTab(embedYouTube(processed.toString())),
  };
}
