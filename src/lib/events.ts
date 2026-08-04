import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const EVENTS_DIR = path.join(process.cwd(), "content/events");

// Convert bare YouTube URLs and links in HTML to responsive iframe embeds
function embedYouTube(html: string): string {
  // Match <a> tags linking to YouTube
  html = html.replace(
    /<a[^>]*href="https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)[^"]*"[^>]*>[^<]*<\/a>/g,
    (_match, id) => youtubeIframe(id),
  );
  // Match bare YouTube URLs in <p> tags (plain text, not already a link)
  html = html.replace(
    /<p>\s*https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)[^\s<]*\s*<\/p>/g,
    (_match, id) => youtubeIframe(id),
  );
  // Match youtu.be short links
  html = html.replace(
    /<p>\s*https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+)[^\s<]*\s*<\/p>/g,
    (_match, id) => youtubeIframe(id),
  );
  html = html.replace(
    /<a[^>]*href="https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+)[^"]*"[^>]*>[^<]*<\/a>/g,
    (_match, id) => youtubeIframe(id),
  );
  return html;
}

function youtubeIframe(videoId: string): string {
  return `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:0.75rem"><iframe src="https://www.youtube.com/embed/${videoId}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>`;
}

// Ensure "Register Here" links open in new tab
function styleRegisterLinks(html: string): string {
  return html.replace(
    /<a([^>]*href="[^"]*"[^>]*)>\s*(register here)\s*<\/a>/gi,
    '<a$1 target="_blank" rel="noopener noreferrer">$2</a>',
  );
}

// Extract field from body text like **Location**: Washington, DC
function extractFromBody(content: string, field: string): string {
  const re = new RegExp(`\\*\\*${field}\\*\\*\\s*[:：]\\s*(.+)`, "i");
  const match = content.match(re);
  return match ? match[1].trim() : "";
}

// Return excerpt only if it's meaningful (not just a date/time line)
function goodExcerpt(val: unknown): string {
  const s = String(val || "").trim();
  if (!s) return "";
  if (/^(Date|Time|Location)\s*[:：]/i.test(s)) return "";
  return s;
}

// Extract a meaningful excerpt from body, skipping date/time/location/link lines
function extractExcerpt(content: string, maxLen = 250): string {
  const lines = content.split("\n").filter((l) => {
    const t = l.trim();
    if (!t) return false;
    if (/^\*?\*?(Date|Time|Location)\*?\*?\s*[:：]/i.test(t)) return false;
    if (/^(Date|Time|Location)\s*[:：]/i.test(t)) return false;
    if (t.startsWith("#") || t.startsWith("![") || t.startsWith("```")) return false;
    if (t.startsWith("---") || t.startsWith("|")) return false;
    if (/^https?:\/\//.test(t)) return false;
    if (/^\[Register/i.test(t)) return false;
    return true;
  });
  // Strip markdown formatting
  const text = lines.join(" ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > maxLen ? text.slice(0, maxLen) + "…" : text;
}

export interface EventMeta {
  slug:             string;
  title:            string;
  fabric_hosted:    boolean;
  event_date:       string; // ISO: "YYYY-MM-DD"
  location:         string;
  time:             string;
  description:      string;
  category?:        string;
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
      const { data, content } = matter(raw);
      const event_date = String(data.event_date || data.date || "").slice(0, 10);
      return {
        slug,
        title:            String(data.title || ""),
        fabric_hosted:    data.fabric_hosted ?? false,
        event_date,
        location:         String(data.location || "") || extractFromBody(content, "Location"),
        time:             String(data.time || "") || extractFromBody(content, "Time"),
        description:      goodExcerpt(data.description || data.excerpt) || extractExcerpt(content),
        category:         data.category,
        registration_url: data.registration_url,
        tags:             data.tags,
      };
    })
    .sort((a, b) => b.event_date.localeCompare(a.event_date));
}

export async function getEventBySlug(slug: string): Promise<EventDetail | null> {
  const filePath = path.join(EVENTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  // Strip duplicated meta lines (Date, Time, Location) from body
  const cleanedContent = content
    .replace(/^\*\*Date\*\*\s*[:：]\s*.+$/gm, "")
    .replace(/^\*\*Time\*\*\s*[:：]\s*.+$/gm, "")
    .replace(/^\*\*Location\*\*\s*[:：]\s*.+$/gm, "")
    .replace(/^Date\s*[:：]\s*.+$/gm, "")
    .replace(/^Time\s*[:：]\s*.+$/gm, "")
    .replace(/^Location\s*[:：]\s*.+$/gm, "");

  const processed = await remark().use(html).process(cleanedContent);
  const contentHtml = styleRegisterLinks(embedYouTube(processed.toString()));
  const event_date = String(data.event_date || data.date || "").slice(0, 10);
  return {
    slug,
    title:            String(data.title || ""),
    fabric_hosted:    data.fabric_hosted ?? false,
    event_date,
    location:         String(data.location || "") || extractFromBody(content, "Location"),
    time:             String(data.time || "") || extractFromBody(content, "Time"),
    description:      goodExcerpt(data.description || data.excerpt) || extractExcerpt(content),
    registration_url: data.registration_url,
    tags:             data.tags,
    contentHtml,
  };
}
