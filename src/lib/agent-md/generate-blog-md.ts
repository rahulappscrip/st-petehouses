import { BLOG_PAGE } from "@/lib/blog";
import { pageHeader } from "@/lib/agent-md/page-header";
import type { WordPressPost } from "@/lib/wordpress/graphql";

const CATEGORY_BY_SLUG: Record<string, string> = {
  "cash-sale-process": "Cash sale process",
  process: "Cash sale process",
  "market-insights": "Market insights",
  market: "Market insights",
  "tough-situations": "Tough situations",
  situations: "Tough situations",
  "sale-prep": "Sale prep",
  prep: "Sale prep",
  "florida-law": "Florida law",
  legal: "Florida law",
};

function decodeHtmlEntities(text: string): string {
  const named: Record<string, string> = {
    "&amp;": "&",
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
    "&rsquo;": "'",
    "&lsquo;": "'",
    "&rdquo;": '"',
    "&ldquo;": '"',
    "&mdash;": "—",
    "&ndash;": "–",
    "&#8217;": "'",
    "&#8216;": "'",
    "&#8220;": '"',
    "&#8221;": '"',
    "&#8211;": "–",
    "&#8212;": "—",
  };

  let decoded = text;
  for (const [entity, char] of Object.entries(named)) {
    decoded = decoded.replaceAll(entity, char);
  }

  decoded = decoded.replace(/&#(\d+);/g, (_, num) => String.fromCharCode(Number(num)));
  decoded = decoded.replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
    String.fromCharCode(Number.parseInt(hex, 16)),
  );

  return decoded;
}

function stripHtml(html: string): string {
  return decodeHtmlEntities(
    html
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function formatDateDisplay(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function estimateReadTime(html: string): string {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

function resolveCategory(post: WordPressPost): string {
  for (const category of post.categories?.nodes ?? []) {
    const label = CATEGORY_BY_SLUG[category.slug];
    if (label) return label;
  }
  return post.categories?.nodes?.[0]?.name?.trim() || "Blog";
}

function resolveAuthorName(post: WordPressPost): string {
  const { name, firstName, lastName } = post.author?.node ?? {};
  if (name?.trim()) return name.trim();
  const fromParts = [firstName, lastName].filter(Boolean).join(" ").trim();
  return fromParts || "John Gardepe";
}

function resolveAuthorRole(post: WordPressPost): string {
  return (
    stripHtml(post.author?.node?.authorRelated?.authorCompany ?? "").trim() ||
    "Co-Founder & Head of Acquisitions"
  );
}

function inlineHtmlToMarkdown(html: string): string {
  return decodeHtmlEntities(
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
      .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**")
      .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*")
      .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, "*$1*")
      .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function htmlToMarkdown(html: string): string {
  if (!html) return "";

  const working = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/(?:<br\s*\/?>\s*)*<strong>\s*Next steps\s*<\/strong>[\s\S]*$/i, "")
    .trim();

  const blocks: string[] = [];
  const pattern =
    /<(h2|h3|h4|p|ul|ol|blockquote)[^>]*>([\s\S]*?)<\/\1>/gi;

  let lastIndex = 0;
  let match = pattern.exec(working);

  if (!match) {
    return stripHtml(working);
  }

  while (match) {
    if (match.index > lastIndex) {
      const between = stripHtml(working.slice(lastIndex, match.index));
      if (between) blocks.push(between);
    }

    const tag = match[1]?.toLowerCase();
    const inner = match[2] ?? "";

    if (tag === "h2") blocks.push(`\n## ${inlineHtmlToMarkdown(inner)}\n`);
    else if (tag === "h3") blocks.push(`\n### ${inlineHtmlToMarkdown(inner)}\n`);
    else if (tag === "h4") blocks.push(`\n#### ${inlineHtmlToMarkdown(inner)}\n`);
    else if (tag === "blockquote") blocks.push(`\n> ${inlineHtmlToMarkdown(inner)}\n`);
    else if (tag === "ul" || tag === "ol") {
      const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((item) =>
        inlineHtmlToMarkdown(item[1]),
      );
      if (items.length) blocks.push(`\n${items.map((item) => `- ${item}`).join("\n")}\n`);
    } else {
      const text = inlineHtmlToMarkdown(inner);
      if (text) blocks.push(`\n${text}\n`);
    }

    lastIndex = match.index + match[0].length;
    match = pattern.exec(working);
  }

  if (lastIndex < working.length) {
    const tail = stripHtml(working.slice(lastIndex));
    if (tail) blocks.push(tail);
  }

  return blocks.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function formatFaqItems(
  items: Array<{ question?: string | null; answer?: string | null }> | null | undefined,
): string {
  if (!items?.length) return "";
  return items
    .map((item) => `**Q: ${stripHtml(item.question ?? "")}**\n\n${htmlToMarkdown(item.answer ?? "")}`)
    .join("\n\n");
}

export function generateBlogPostMd(post: WordPressPost): string {
  const title = stripHtml(post.title);
  const slug = post.slug;
  const canonicalPath = `/blog/${slug}`;
  const categoryLabel = resolveCategory(post);
  const authorName = resolveAuthorName(post);
  const authorRole = resolveAuthorRole(post);
  const dateDisplay = formatDateDisplay(post.date);
  const readTime = estimateReadTime(post.content);
  const excerpt = stripHtml(post.excerpt || post.content).slice(0, 280);
  const tags = (post.tags?.nodes ?? []).map((tag) => tag.name).filter(Boolean);
  const body = htmlToMarkdown(post.content);
  const faq = formatFaqItems(post.blogPostFaq?.faqItems);

  const sections = [
    pageHeader({
      title: `${title} | We Buy St Pete Houses`,
      description: excerpt,
      canonicalPath,
      keyword: categoryLabel,
    }),
    `*${categoryLabel} · ${dateDisplay} · ${readTime} · By ${authorName}, ${authorRole}*`,
    "",
  ];

  if (tags.length) {
    sections.push(`**Tags:** ${tags.join(", ")}`, "");
  }

  sections.push(excerpt, "", body);

  if (faq) {
    sections.push("", "## Frequently asked questions", "", faq);
  }

  sections.push("", "---");

  return sections.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export function generateBlogListingMd(posts: WordPressPost[]): string {
  const siteUrl = "https://webuystpetehouses.com";
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const articleLines = sortedPosts.map((post) => {
    const title = stripHtml(post.title);
    const excerpt = stripHtml(post.excerpt || post.content).slice(0, 180);
    const dateDisplay = formatDateDisplay(post.date);
    const categoryLabel = resolveCategory(post);
    return `- [${title}](${siteUrl}/blog/${post.slug}) — ${dateDisplay} · ${categoryLabel} — ${excerpt}`;
  });

  return [
    pageHeader({
      title: "Blog · We Buy St Pete Houses",
      description: BLOG_PAGE.metaDescription,
      canonicalPath: "/blog",
      keyword: "St Petersburg home selling blog",
    }),
    BLOG_PAGE.lede,
    "",
    "## Articles",
    "",
    articleLines.join("\n"),
    "",
    `*${sortedPosts.length} articles synced from WordPress.*`,
  ]
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
