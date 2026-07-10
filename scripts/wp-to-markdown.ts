/**
 * Convert WordPress XML export (WXR) to Markdown files with YAML frontmatter.
 *
 * Usage:
 *   npx tsx scripts/wp-to-markdown.ts <path-to-xml> [output-dir]
 *
 * Defaults:
 *   output-dir = content/knowledge-base
 */

import fs from "fs";
import path from "path";
import { parseStringPromise } from "xml2js";
import TurndownService from "turndown";

// ── Config ──────────────────────────────────────────────────────────────────────
const xmlPath = process.argv[2];
const outDir = process.argv[3] || "content/knowledge-base";

if (!xmlPath) {
  console.error("Usage: npx tsx scripts/wp-to-markdown.ts <xml-file> [output-dir]");
  process.exit(1);
}

// ── Turndown setup ──────────────────────────────────────────────────────────────
const td = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

// Convert <pre><code> to fenced code blocks with language
td.addRule("codeBlock", {
  filter: (node) => {
    return (
      node.nodeName === "PRE" &&
      node.firstChild !== null &&
      node.firstChild.nodeName === "CODE"
    );
  },
  replacement: (_content, node) => {
    const code = node.firstChild as Element;
    const lang = code.getAttribute("lang") || code.getAttribute("class")?.match(/language-(\w+)/)?.[1] || "";
    const text = code.textContent || "";
    return `\n\`\`\`${lang}\n${text.trim()}\n\`\`\`\n`;
  },
});

// Strip WordPress block comments (<!-- wp:xxx --> / <!-- /wp:xxx -->)
td.addRule("wpBlockComments", {
  filter: (node) => node.nodeType === 8, // comment nodes
  replacement: () => "",
});

// Tables: let turndown handle them via turndown-plugin-gfm-style approach
// We convert <table> HTML to markdown tables in the pre-processing step instead

// ── Helpers ─────────────────────────────────────────────────────────────────────
function cdata(val: unknown): string {
  if (Array.isArray(val)) return cdata(val[0]);
  if (typeof val === "object" && val !== null && "_" in val) return String((val as { _: string })._ );
  return String(val ?? "");
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function escapeYaml(s: string): string {
  if (/[:#\[\]{}|>!&*?,'"\n]/.test(s) || s.startsWith("-") || s.startsWith(" ")) {
    return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  return s;
}

function stripWpComments(html: string): string {
  return html.replace(/<!--.*?-->/gs, "");
}

function htmlTableToMarkdown(html: string): string {
  // Convert <table> blocks to markdown tables before turndown processes them
  return html.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, inner) => {
    const rows: string[][] = [];
    const rowMatches = inner.match(/<tr[^>]*>([\s\S]*?)<\/tr>/gi) || [];
    for (const row of rowMatches) {
      const cells: string[] = [];
      const cellMatches = row.match(/<(?:td|th)[^>]*>([\s\S]*?)<\/(?:td|th)>/gi) || [];
      for (const cell of cellMatches) {
        const text = cell.replace(/<[^>]+>/g, "").trim();
        cells.push(text);
      }
      rows.push(cells);
    }
    if (rows.length === 0) return "";
    const lines: string[] = [];
    rows.forEach((cells, i) => {
      lines.push("| " + cells.join(" | ") + " |");
      if (i === 0) {
        lines.push("| " + cells.map(() => "---").join(" | ") + " |");
      }
    });
    return "\n" + lines.join("\n") + "\n";
  });
}

function stripWpBlockWrappers(html: string): string {
  // Remove common wp-block wrapper divs that add no semantic value
  return html
    .replace(/<div class="wp-block-columns[^"]*"[^>]*>/g, "")
    .replace(/<div class="wp-block-column[^"]*"[^>]*>/g, "")
    .replace(/<div class="wp-block-buttons[^"]*"[^>]*>/g, "")
    .replace(/<div class="wp-block-button[^"]*"[^>]*>.*?<\/div>/gs, "")
    .replace(/<div class="wp-block-ht-blocks-toggle[^"]*"[^>]*>/g, "")
    .replace(/<div class="wp-block-hb-toggle[^"]*"[^>]*>/g, "")
    .replace(/<div class="wp-block-hb-tabs[^"]*"[^>]*>/g, "")
    .replace(/<figure[^>]*>(.*?)<\/figure>/gs, "$1")
    .replace(/<figcaption[^>]*>(.*?)<\/figcaption>/gs, "\n*$1*\n")
    .replace(/<\/div>/g, "");
}

// ── Main ────────────────────────────────────────────────────────────────────────
async function main() {
  const xml = fs.readFileSync(xmlPath, "utf-8");
  const result = await parseStringPromise(xml, { explicitCDATA: false, trim: false });

  const channel = result.rss.channel[0];
  const items = channel.item || [];

  // Build author lookup
  const authors: Record<string, string> = {};
  for (const a of channel["wp:author"] || []) {
    const login = cdata(a["wp:author_login"]);
    const display = cdata(a["wp:author_display_name"]);
    authors[login] = display;
  }

  fs.mkdirSync(outDir, { recursive: true });

  let converted = 0;
  let skipped = 0;

  for (const item of items) {
    const postType = cdata(item["wp:post_type"]);

    // Only process knowledge base articles (ht_kb) and posts
    if (postType !== "ht_kb" && postType !== "post") {
      skipped++;
      continue;
    }

    const title = cdata(item.title);
    const status = cdata(item["wp:status"]);
    const postName = cdata(item["wp:post_name"]);
    const slug = postName || slugify(title);
    const pubDate = cdata(item.pubDate);
    const postDate = cdata(item["wp:post_date"]);
    const postModified = cdata(item["wp:post_modified"]);
    const creatorLogin = cdata(item["dc:creator"]);
    const author = authors[creatorLogin] || creatorLogin;
    const contentHtml = cdata(item["content:encoded"]);
    const excerpt = cdata(item["excerpt:encoded"]);
    const postId = cdata(item["wp:post_id"]);

    // Extract categories and tags
    const categories: string[] = [];
    const tags: string[] = [];
    for (const cat of item.category || []) {
      const domain = cat?.$?.domain;
      const name = cdata(cat);
      if (domain === "ht_kb_category") categories.push(name);
      else if (domain === "ht_kb_tag" || domain === "post_tag") tags.push(name);
      else if (domain === "category") categories.push(name);
    }

    // Extract view count from postmeta
    let views = 0;
    for (const meta of item["wp:postmeta"] || []) {
      const key = cdata(meta["wp:meta_key"]);
      if (key === "_ht_kb_post_views_count") {
        views = parseInt(cdata(meta["wp:meta_value"]), 10) || 0;
      }
    }

    // Convert HTML to Markdown
    let cleanHtml = stripWpComments(contentHtml);
    cleanHtml = htmlTableToMarkdown(cleanHtml);
    cleanHtml = stripWpBlockWrappers(cleanHtml);
    const markdown = td.turndown(cleanHtml).trim();

    // Extract date in YYYY-MM-DD format
    const dateStr = postDate
      ? postDate.split(" ")[0]
      : new Date(pubDate).toISOString().split("T")[0];
    const modifiedStr = postModified ? postModified.split(" ")[0] : dateStr;

    // Build frontmatter
    const fm: string[] = ["---"];
    fm.push(`title: ${escapeYaml(title)}`);
    fm.push(`slug: ${escapeYaml(slug)}`);
    fm.push(`date: "${dateStr}"`);
    fm.push(`date_modified: "${modifiedStr}"`);
    fm.push(`author: ${escapeYaml(author)}`);
    fm.push(`status: ${status}`);
    fm.push(`wp_id: ${postId}`);
    if (views > 0) fm.push(`views: ${views}`);
    if (excerpt) fm.push(`excerpt: ${escapeYaml(excerpt)}`);
    if (categories.length > 0) {
      fm.push("categories:");
      categories.forEach((c) => fm.push(`  - ${escapeYaml(c)}`));
    }
    if (tags.length > 0) {
      fm.push("tags:");
      tags.forEach((t) => fm.push(`  - ${escapeYaml(t)}`));
    }
    fm.push("---");

    const fileContent = fm.join("\n") + "\n\n" + markdown + "\n";
    const fileName = `${dateStr}-${slug}.md`;
    const filePath = path.join(outDir, fileName);

    fs.writeFileSync(filePath, fileContent, "utf-8");
    converted++;
  }

  console.log(`Done! Converted ${converted} articles to ${outDir}/`);
  console.log(`Skipped ${skipped} items (attachments, pages, nav items, etc.)`);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
