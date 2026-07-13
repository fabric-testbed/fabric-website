/**
 * Sort knowledge-base articles into content/events/, content/news-and-blogs/,
 * and content/knowledge-base/ (docs stay), rewriting frontmatter to match
 * each folder's expected format.
 *
 * Usage: npx tsx scripts/sort-kb-articles.ts [--dry-run]
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const KB_DIR = "content/knowledge-base";
const EVENTS_DIR = "content/events";
const NEWS_DIR = "content/news-and-blogs";
const dryRun = process.argv.includes("--dry-run");

// ── Category classification ─────────────────────────────────────────────────

// Categories/tags that indicate an event (webinar, workshop, conference, etc.)
const EVENT_CATEGORIES = new Set([
  "events", "past events", "webinars", "webinar",
  "fabric hosted events",
  "stitching together innovation",
  "mastering fabric: tips and tricks",
  "knit",
]);

// Categories that indicate news/blog content
const NEWS_CATEGORIES = new Set([
  "news", "news archive", "blogs", "blog",
  "announcement", "announcements",
  "thread the needle",
]);

// Categories that indicate newsletters
const NEWSLETTER_CATEGORIES = new Set([
  "newsletter", "newsletters archive",
  "2019 newsletters", "2020 newsletters", "2021 newsletters",
  "2022 newsletters", "2023 newsletters", "2024 newsletters",
  "2025 newsletters", "2026 newsletters",
]);

function classifyArticle(data: Record<string, unknown>): "event" | "news" | "docs" {
  const cats = ((data.categories as string[]) || []).map((c) => c.toLowerCase());
  const tags = ((data.tags as string[]) || []).map((t) => t.toLowerCase());
  const all = [...cats, ...tags];
  const title = String(data.title || "").toLowerCase();

  // Events: has event-related category
  if (all.some((c) => EVENT_CATEGORIES.has(c))) return "event";

  // News/blogs/newsletters
  if (all.some((c) => NEWS_CATEGORIES.has(c))) return "news";
  if (all.some((c) => NEWSLETTER_CATEGORIES.has(c))) return "news";

  // Title-based fallback
  if (title.includes("newsletter")) return "news";
  if (title.includes("webinar") || title.includes("knit")) return "event";

  // Default: keep as docs
  return "docs";
}

// ── Determine event subcategory ──────────────────────────────────────────────

function getEventCategory(data: Record<string, unknown>): string {
  const cats = ((data.categories as string[]) || []).map((c) => c.toLowerCase());
  const tags = ((data.tags as string[]) || []).map((t) => t.toLowerCase());
  const all = [...cats, ...tags];
  const title = String(data.title || "").toLowerCase();

  if (title.includes("knit") || all.includes("knit")) return "workshop";
  if (all.includes("webinars") || all.includes("webinar")) return "webinar";
  if (title.includes("workshop")) return "workshop";
  if (title.includes("conference")) return "conference";
  if (title.includes("meeting")) return "meeting";
  return "webinar"; // default for events
}

function isFabricHosted(data: Record<string, unknown>): boolean {
  const cats = ((data.categories as string[]) || []).map((c) => c.toLowerCase());
  return cats.includes("fabric hosted events") || cats.includes("fabric in-depth")
    || cats.includes("mastering fabric: tips and tricks");
}

// ── Determine news type/category ─────────────────────────────────────────────

function getNewsType(data: Record<string, unknown>): string {
  const cats = ((data.categories as string[]) || []).map((c) => c.toLowerCase());
  const tags = ((data.tags as string[]) || []).map((t) => t.toLowerCase());
  const all = [...cats, ...tags];
  const title = String(data.title || "").toLowerCase();

  if (all.includes("blog") || all.includes("blogs")) return "blog";
  if (title.includes("newsletter")) return "news";
  if (all.includes("thread the needle")) return "blog";
  return "news";
}

function getNewsCategory(data: Record<string, unknown>): string {
  const cats = ((data.categories as string[]) || []).map((c) => c.toLowerCase());
  const tags = ((data.tags as string[]) || []).map((t) => t.toLowerCase());
  const all = [...cats, ...tags];

  if (all.includes("announcement") || all.includes("announcements")) return "announcements";
  if (all.includes("thread the needle")) return "community";
  if (all.includes("research")) return "research";
  if (all.includes("technical")) return "technical";
  if (all.includes("maintenance")) return "maintenance";
  if (all.includes("webinar-recap")) return "webinar-recap";
  return "announcements"; // default
}

// ── Extract excerpt from body ────────────────────────────────────────────────

function extractExcerpt(content: string, maxLen = 200): string {
  // Get first non-empty paragraph
  const lines = content.split("\n").filter((l) => {
    const t = l.trim();
    return t && !t.startsWith("#") && !t.startsWith("!") && !t.startsWith("```")
      && !t.startsWith("---") && !t.startsWith("|") && !t.startsWith("*");
  });
  const first = lines[0] || "";
  // Strip markdown links
  const clean = first.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim();
  return clean.length > maxLen ? clean.slice(0, maxLen) + "..." : clean;
}

// ── Escape YAML ──────────────────────────────────────────────────────────────

function escapeYaml(s: string): string {
  if (/[:#\[\]{}|>!&*?,'"\n]/.test(s) || s.startsWith("-") || s.startsWith(" ")) {
    return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  return `"${s}"`;
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const files = fs.readdirSync(KB_DIR).filter((f) => f.endsWith(".md"));

  const counts = { event: 0, news: 0, docs: 0, skipped: 0 };

  for (const file of files) {
    const filePath = path.join(KB_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    // Skip drafts and non-published
    const status = String(data.status || "");
    if (status !== "publish") {
      counts.skipped++;
      continue;
    }

    const type = classifyArticle(data);
    const date = String(data.date || "").replace(/"/g, "");
    const slug = String(data.slug || "");
    const title = String(data.title || "");
    const author = String(data.author || "");
    const dateModified = String(data.date_modified || "").replace(/"/g, "");
    const excerpt = String(data.excerpt || "") || extractExcerpt(content);
    const wpTags = (data.tags as string[]) || [];
    const fileName = `${date}-${slug}.md`;

    if (type === "event") {
      const category = getEventCategory(data);
      const fabricHosted = isFabricHosted(data);
      const tags = wpTags.length > 0 ? wpTags : ["events"];

      const fm = [
        "---",
        `title: ${escapeYaml(title)}`,
        `date: "${date}"`,
        `type: "event"`,
        `category: "${category}"`,
        `fabric_hosted: ${fabricHosted}`,
        `excerpt: ${escapeYaml(excerpt)}`,
        `author: ${escapeYaml(author)}`,
        `date_modified: "${dateModified}"`,
        `wp_id: ${data.wp_id || ""}`,
        data.views ? `views: ${data.views}` : null,
        "tags:",
        ...tags.map((t) => `  - ${t}`),
        "---",
      ].filter(Boolean).join("\n");

      const destPath = path.join(EVENTS_DIR, fileName);

      // Don't overwrite existing manually-created events
      if (fs.existsSync(destPath)) {
        counts.skipped++;
        continue;
      }

      if (dryRun) {
        console.log(`[EVENT] ${file} → ${EVENTS_DIR}/${fileName}`);
      } else {
        fs.writeFileSync(destPath, fm + "\n\n" + content.trim() + "\n", "utf-8");
        fs.unlinkSync(filePath);
      }
      counts.event++;

    } else if (type === "news") {
      const newsType = getNewsType(data);
      const newsCategory = getNewsCategory(data);
      const tags = wpTags.length > 0 ? wpTags : ["news"];

      const fm = [
        "---",
        `title: ${escapeYaml(title)}`,
        `date: "${date}"`,
        `type: "${newsType}"`,
        `category: "${newsCategory}"`,
        `excerpt: ${escapeYaml(excerpt)}`,
        `author: ${escapeYaml(author)}`,
        `date_modified: "${dateModified}"`,
        `wp_id: ${data.wp_id || ""}`,
        data.views ? `views: ${data.views}` : null,
        "tags:",
        ...tags.map((t) => `  - ${t}`),
        "---",
      ].filter(Boolean).join("\n");

      const destPath = path.join(NEWS_DIR, fileName);

      if (fs.existsSync(destPath)) {
        counts.skipped++;
        continue;
      }

      if (dryRun) {
        console.log(`[NEWS]  ${file} → ${NEWS_DIR}/${fileName}`);
      } else {
        fs.writeFileSync(destPath, fm + "\n\n" + content.trim() + "\n", "utf-8");
        fs.unlinkSync(filePath);
      }
      counts.news++;

    } else {
      // Docs — stay in knowledge-base
      counts.docs++;
    }
  }

  console.log(`\nResults${dryRun ? " (DRY RUN)" : ""}:`);
  console.log(`  Events:  ${counts.event} → ${EVENTS_DIR}/`);
  console.log(`  News:    ${counts.news} → ${NEWS_DIR}/`);
  console.log(`  Docs:    ${counts.docs} (stayed in ${KB_DIR}/)`);
  console.log(`  Skipped: ${counts.skipped} (drafts/pending/duplicates)`);
}

main();
