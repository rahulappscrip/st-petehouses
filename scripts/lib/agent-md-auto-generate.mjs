import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { COMPANY_LINE, SITE_URL, pageHeader } from "./agent-md-site-routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const UNPUBLISHED_SITUATION_SLUGS = new Set(
  JSON.parse(readFileSync(join(__dirname, "../../src/lib/unpublished-situation-slugs.json"), "utf8")),
);

function joinTitleParts(...parts) {
  return parts.filter(Boolean).join("");
}

function formatStats(stats) {
  if (!stats?.length) return "";
  const lines = stats.map((stat) => {
    const value = `${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""}`;
    return `- **${value}** — ${stat.label}`;
  });
  return `\n${lines.join("\n")}\n`;
}

function formatParagraphs(paragraphs) {
  if (!paragraphs?.length) return "";
  return paragraphs.map((p) => `- ${p}`).join("\n\n");
}

function formatSteps(steps) {
  if (!steps?.length) return "";
  return steps
    .map((step, index) => `${index + 1}. **${step.title}** — ${step.body}`)
    .join("\n");
}

function formatFaqItems(items, sectionTitle) {
  if (!items?.length) return "";
  const lines = items.map((item) => `**Q: ${item.q}**\n\n${item.a}`);
  return `## ${sectionTitle}\n\n${lines.join("\n\n")}`;
}

function formatTestimonials(testimonials) {
  if (!testimonials?.items?.length) return "";
  return testimonials.items
    .map((item) => `> "${item.quote}"\n\n**Name:** ${item.name ?? item.initials}`)
    .join("\n\n");
}

function formatResources(resources) {
  if (!resources?.items?.length) return "";
  return resources.items
    .map((item) => `- **${item.title}** — ${item.body}`)
    .join("\n");
}

export function generateSituationMd(page) {
  const canonicalPath = `/${page.slug}`;
  const heroTitle = joinTitleParts(page.hero.titleLead, page.hero.titleEm, page.hero.titleTail);
  const sections = [
    pageHeader({
      title: page.metaTitle,
      description: page.metaDescription,
      canonicalPath,
    }),
    `## ${heroTitle}`,
    "",
    `*${page.hero.eyebrow}*`,
    "",
    page.hero.subheadline,
    formatStats(page.stats),
  ];

  if (page.empathy) {
    sections.push(
      `## ${joinTitleParts(page.empathy.titleLead, page.empathy.titleEm, page.empathy.titleTail)}`,
      "",
      `*${page.empathy.eyebrow}*`,
      "",
      page.empathy.lede,
      "",
      formatParagraphs(page.empathy.paragraphs),
    );
    if (page.empathy.quote) sections.push("", `> ${page.empathy.quote}`);
  }

  if (page.process) {
    sections.push(
      "",
      `## ${joinTitleParts(page.process.titleLead, page.process.titleEm, page.process.titleTail)}`,
      "",
      `*${page.process.eyebrow}*`,
      "",
      page.process.lede,
      "",
      formatSteps(page.process.steps),
    );
  }

  if (page.testimonials) {
    sections.push(
      "",
      `## ${joinTitleParts(page.testimonials.titleLead, page.testimonials.titleEm, page.testimonials.titleTail)}`,
      "",
      page.testimonials.lede ?? "",
      "",
      formatTestimonials(page.testimonials),
    );
  }

  if (page.resources) {
    sections.push(
      "",
      `## ${joinTitleParts(page.resources.titleLead, page.resources.titleEm, page.resources.titleTail)}`,
      "",
      page.resources.lede ?? "",
      "",
      formatResources(page.resources),
    );
  }

  if (page.faq) {
    sections.push(
      "",
      formatFaqItems(
        page.faq.items,
        `${joinTitleParts(page.faq.titleLead, page.faq.titleEm, page.faq.titleTail)}`,
      ),
    );
  }

  if (page.finalCta) {
    sections.push(
      "",
      `## ${joinTitleParts(page.finalCta.titleLead, page.finalCta.titleEm, page.finalCta.titleTail)}`,
      "",
      page.finalCta.description ?? "",
      "",
      "- (727) 477-8998",
      "- SellFast@WeBuyStPeteHouses.com",
      "- St. Petersburg, FL — We're Local",
    );
  }

  return sections.filter((part) => part !== undefined).join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function parseFaqPageContent(root) {
  const source = readFileSync(join(root, "src/lib/faq-page-content.ts"), "utf8");
  const heroTitleMatch = source.match(/title:\s*"([^"]+)"/);
  const heroTitle = heroTitleMatch?.[1] ?? "FAQ";

  const descriptions = [...source.matchAll(/descriptions:\s*\[([\s\S]*?)\],/g)];
  const descriptionLines = descriptions[0]?.[1]?.match(/"([^"]+)"/g) ?? [];
  const description = descriptionLines.map((line) => line.slice(1, -1)).join(" ");

  const categories = [];
  for (const match of source.matchAll(
    /id:\s*"([^"]+)"[\s\S]*?label:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?items:\s*\[([\s\S]*?)\]\s*,?\s*\}/g,
  )) {
    const [, id, label, title, itemsBlock] = match;
    const items = [];
    for (const itemMatch of itemsBlock.matchAll(/q:\s*"((?:\\.|[^"\\])*)",\s*a:\s*"((?:\\.|[^"\\])*)"/g)) {
      items.push({
        q: itemMatch[1].replace(/\\"/g, '"'),
        a: itemMatch[2].replace(/\\"/g, '"'),
      });
    }
    categories.push({ id, label, title, items });
  }

  return { heroTitle, description, categories };
}

export function generateFaqMd(root) {
  const { heroTitle, description, categories } = parseFaqPageContent(root);
  const sections = [
    pageHeader({
      title: "FAQ | We Buy Houses St Petersburg FL | We Buy St Pete Houses",
      description:
        "Answers to the most common questions about selling your house for cash in St Petersburg, FL. How it works, what we pay, how fast we close, and what it costs.",
      canonicalPath: "/faq",
      keyword: "sell house for cash St Petersburg FAQ",
    }),
    `## ${heroTitle}`,
    "",
    description,
    "",
  ];

  for (const category of categories) {
    sections.push(`## ${category.title}`, "", formatFaqItems(category.items, category.label).replace(/^## [^\n]+\n\n/, ""));
    sections.push("");
  }

  sections.push(
    "## Contact",
    "",
    "- (727) 477-8998",
    "- SellFast@WeBuyStPeteHouses.com",
    "- https://webuystpetehouses.com/contact",
  );

  return sections.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export function syncFaqAndSituationMdPages(root, pages) {
  const situations = JSON.parse(
    readFileSync(join(root, "src/lib/situation-content-data.json"), "utf8"),
  );

  const generated = [];

  pages.faq = generateFaqMd(root);
  generated.push("faq");

  for (const page of situations) {
    if (UNPUBLISHED_SITUATION_SLUGS.has(page.slug)) continue;
    const key = page.slug;
    pages[key] = generateSituationMd(page);
    generated.push(key);
  }

  return {
    generated,
    situationKeys: situations
      .filter((page) => !UNPUBLISHED_SITUATION_SLUGS.has(page.slug))
      .map((page) => page.slug),
  };
}

/** Fill in static/city routes that are not in the manual markdown export yet. */
export function autoGenerateMissingPages(root, pages, routes) {
  const generated = [];

  for (const route of routes) {
    if (pages[route.key]) continue;
    if (route.key === "faq" || route.key.startsWith("situations/") || route.key.startsWith("blog")) {
      continue;
    }
  }

  return generated;
}
