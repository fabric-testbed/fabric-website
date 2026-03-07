import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const EVENTS_DIR = path.join(process.cwd(), "content/events");

export interface EventMeta {
  slug:             string;
  title:            string;
  fabric_hosted:    boolean;
  event_date:       string; // ISO: "YYYY-MM-DD"
  location:         string;
  time:             string;
  description:      string;
  registration_url?: string;
  tags?:            string[];
}

export interface EventDetail extends EventMeta {
  contentHtml: string;
}

export function getAllEventSlugs(): string[] {
  if (!fs.existsSync(EVENTS_DIR)) return [];
  return fs
    .readdirSync(EVENTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllEventsMeta(): EventMeta[] {
  return getAllEventSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(EVENTS_DIR, `${slug}.md`), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        ...(data as Omit<EventMeta, "slug">),
        event_date: String(data.event_date).slice(0, 10),
      };
    })
    .sort((a, b) => b.event_date.localeCompare(a.event_date));
}

export async function getEventBySlug(slug: string): Promise<EventDetail | null> {
  const filePath = path.join(EVENTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    ...(data as Omit<EventMeta, "slug">),
    event_date: String(data.event_date).slice(0, 10),
    contentHtml: processed.toString(),
  };
}
