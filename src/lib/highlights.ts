import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const HIGHLIGHTS_DIR = path.join(process.cwd(), "content/highlights");

export interface Researcher {
  name: string;
  title: string;
  institution: string;
  interests?: string;
  contact: string;
  photo?: string;
}

export interface Artifact {
  label: string;
  url: string;
}

export interface HighlightMeta {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image?: string;
  imageFit?: "cover" | "contain";
  imagePlaceholder: string;
  institution?: string;
  domain?: string;
  learnMore?: {
    projectUrl?: string;
    artifacts?: Artifact[];
  };
  researchers?: Researcher[];
}

export interface HighlightDetail extends HighlightMeta {
  contentHtml: string;
}

export function getAllHighlightSlugs(): string[] {
  if (!fs.existsSync(HIGHLIGHTS_DIR)) return [];
  return fs
    .readdirSync(HIGHLIGHTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getHighlightBySlug(slug: string): Promise<HighlightDetail | null> {
  const filePath = path.join(HIGHLIGHTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    ...(data as HighlightMeta),
    contentHtml,
  };
}
