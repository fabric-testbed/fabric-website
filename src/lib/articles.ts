import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const ARTICLES_DIR = path.join(process.cwd(), "content/news");

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
      const { data } = matter(raw);
      return {
        slug,
        ...(data as Omit<ArticleMeta, "slug">),
        date: String(data.date).slice(0, 10),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getArticleBySlug(slug: string): Promise<ArticleDetail | null> {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    ...(data as Omit<ArticleMeta, "slug">),
    date: String(data.date).slice(0, 10),
    contentHtml: processed.toString(),
  };
}
