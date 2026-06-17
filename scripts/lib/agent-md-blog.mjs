import https from "node:https";
import { COMPANY_LINE, SITE_URL, pageHeader } from "./agent-md-site-routes.mjs";

const WORDPRESS_GRAPHQL_URL =
  process.env.WORDPRESS_GRAPHQL_URL ??
  "https://wordpress-1628174-6490314.cloudwaysapps.com/graphql";

const CATEGORY_BY_SLUG = {
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

const BLOG_LISTING_DESCRIPTION =
  "Everything St. Petersburg homeowners need to know about selling their house in any situation — foreclosure, inherited property, insurance problems, flood damage, HOA issues and more. Written by We Buy St Pete Houses.";

const POSTS_QUERY = `
  query AgentMdBlogPosts($first: Int!) {
    posts(first: $first, where: { status: PUBLISH }) {
      nodes {
        title
        slug
        date
        modified
        excerpt
        content
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
          }
        }
        author {
          node {
            name
            firstName
            lastName
            description
            authorRelated {
              authorCompany
            }
          }
        }
        blogPostFaq {
          faqItems {
            question
            answer
          }
        }
      }
    }
  }
`;

function decodeHtmlEntities(text) {
  const named = {
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

function stripHtml(html) {
  return decodeHtmlEntities(
    String(html ?? "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function formatDateDisplay(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function estimateReadTime(html) {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

function resolveCategory(post) {
  for (const category of post.categories?.nodes ?? []) {
    const label = CATEGORY_BY_SLUG[category.slug];
    if (label) return label;
  }

  const fallback = post.categories?.nodes?.[0]?.name?.trim();
  return fallback || "Blog";
}

function resolveAuthorName(post) {
  const { name, firstName, lastName } = post.author?.node ?? {};
  if (name?.trim()) return name.trim();
  const fromParts = [firstName, lastName].filter(Boolean).join(" ").trim();
  return fromParts || "John Gardepe";
}

function resolveAuthorRole(post) {
  return (
    stripHtml(post.author?.node?.authorRelated?.authorCompany ?? "").trim() ||
    "Co-Founder & Head of Acquisitions"
  );
}

function inlineHtmlToMarkdown(html) {
  return decodeHtmlEntities(
    String(html ?? "")
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

function htmlToMarkdown(html) {
  if (!html) return "";

  let working = String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/(?:<br\s*\/?>\s*)*<strong>\s*Next steps\s*<\/strong>[\s\S]*$/i, "")
    .trim();

  const blocks = [];
  const pattern =
    /<(h2|h3|h4|p|ul|ol|blockquote|li)[^>]*>([\s\S]*?)<\/\1>|<li[^>]*>([\s\S]*?)<\/li>/gi;

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
    const inner = match[2] ?? match[3] ?? "";

    if (tag === "h2") blocks.push(`\n## ${inlineHtmlToMarkdown(inner)}\n`);
    else if (tag === "h3") blocks.push(`\n### ${inlineHtmlToMarkdown(inner)}\n`);
    else if (tag === "h4") blocks.push(`\n#### ${inlineHtmlToMarkdown(inner)}\n`);
    else if (tag === "blockquote") blocks.push(`\n> ${inlineHtmlToMarkdown(inner)}\n`);
    else if (tag === "li") blocks.push(`- ${inlineHtmlToMarkdown(inner)}`);
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

function formatFaqItems(items) {
  if (!items?.length) return "";
  return items
    .map((item) => `**Q: ${stripHtml(item.question)}**\n\n${htmlToMarkdown(item.answer ?? "")}`)
    .join("\n\n");
}

export function generateBlogPostMd(post) {
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

export function generateBlogListingMd(posts) {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const articleLines = sortedPosts.map((post) => {
    const title = stripHtml(post.title);
    const excerpt = stripHtml(post.excerpt || post.content).slice(0, 180);
    const dateDisplay = formatDateDisplay(post.date);
    const categoryLabel = resolveCategory(post);
    return `- [${title}](${SITE_URL}/blog/${post.slug}) — ${dateDisplay} · ${categoryLabel} — ${excerpt}`;
  });

  return [
    pageHeader({
      title: "Blog · We Buy St Pete Houses",
      description: BLOG_LISTING_DESCRIPTION,
      canonicalPath: "/blog",
      keyword: "St Petersburg home selling blog",
    }),
    BLOG_LISTING_DESCRIPTION,
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

export function getBlogRoutes(posts) {
  const routes = [{ key: "blog", path: "/blog", label: "Blog" }];
  for (const post of posts) {
    routes.push({
      key: `blog/${post.slug}`,
      path: `/blog/${post.slug}`,
      label: stripHtml(post.title),
    });
  }
  return routes;
}

export function applyBlogMdPages(pages, posts) {
  pages.blog = generateBlogListingMd(posts);

  const generated = ["blog"];
  for (const post of posts) {
    const key = `blog/${post.slug}`;
    pages[key] = generateBlogPostMd(post);
    generated.push(key);
  }

  return generated;
}

function wordpressGraphQL(query, variables = {}) {
  const body = JSON.stringify({ query, variables });
  const url = new URL(WORDPRESS_GRAPHQL_URL);

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: url.hostname,
        port: url.port || 443,
        path: url.pathname,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
        rejectUnauthorized: false,
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          try {
            const json = JSON.parse(data);
            if (json.errors?.length) {
              reject(new Error(json.errors.map((error) => error.message).join("; ")));
              return;
            }
            resolve(json.data);
          } catch (error) {
            reject(error);
          }
        });
      },
    );

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

export async function fetchWordPressPostsForMd(first = 100) {
  const data = await wordpressGraphQL(POSTS_QUERY, { first });
  return data?.posts?.nodes ?? [];
}

export async function syncBlogMdPages(pages) {
  const posts = await fetchWordPressPostsForMd();
  const generated = applyBlogMdPages(pages, posts);
  return { posts, generated };
}
