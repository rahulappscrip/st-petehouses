import type { BlogCategory, BlogFaqItem, BlogNextCtaContent, BlogPost, ImageTone } from "@/lib/blog";
import { isWordPressMediaUrl, toWordPressImageProxy } from "@/lib/wordpress/fetch";
import type { WordPressPost } from "@/lib/wordpress/graphql";
import { parseWordPressContent } from "@/lib/wordpress/parse-content";

const CATEGORY_BY_SLUG: Record<string, BlogCategory> = {
  "cash-sale-process": "process",
  process: "process",
  "market-insights": "market",
  market: "market",
  "tough-situations": "situations",
  situations: "situations",
  "sale-prep": "prep",
  prep: "prep",
  "florida-law": "legal",
  legal: "legal",
};

const CATEGORY_LABELS: Record<BlogCategory, string> = {
  process: "Cash sale process",
  market: "Market insights",
  situations: "Tough situations",
  prep: "Sale prep",
  legal: "Florida law",
};

const IMAGE_TONES: ImageTone[] = ["sun", "teal", "ink", "leaf", "gold", "sand"];

const DEFAULT_AUTHOR = {
  name: "Benette Andrew",
  initials: "JG",
  role: "Co-Founder & Head of Acquisitions",
  bio: "John is the Co-Founder and Head of Acquisitions of a St. Petersburg-based real estate investment company, where he has led property acquisitions and deal structuring across the Greater Tampa Bay area since 2020. His work centers on sourcing and structuring off-market property opportunities and guiding homeowners through fast, as-is sales.",
};

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDateDisplay(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function toIsoDate(isoDate: string): string {
  return isoDate.slice(0, 10);
}

function getAuthorInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return DEFAULT_AUTHOR.initials;
  return parts
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function resolveAuthorName(post: WordPressPost): string {
  const { name, firstName, lastName } = post.author.node;
  const displayName = name?.trim();
  if (displayName) return displayName;

  const fromParts = [firstName, lastName].filter(Boolean).join(" ").trim();
  if (fromParts) return fromParts;

  return DEFAULT_AUTHOR.name;
}

function resolveCategory(post: WordPressPost): { category: BlogCategory; categoryLabel: string } {
  const primary = post.categories.nodes[0];
  if (!primary) {
    return { category: "market", categoryLabel: CATEGORY_LABELS.market };
  }

  const category = CATEGORY_BY_SLUG[primary.slug] ?? "market";
  return { category, categoryLabel: primary.name || CATEGORY_LABELS[category] };
}

function estimateReadTime(content: string): string {
  const words = stripHtml(content).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function isFeaturedPost(post: WordPressPost): boolean {
  return (
    post.isSticky ||
    post.slug.includes("short-term-rental-ban") ||
    post.tags.nodes.some((tag) => tag.slug === "featured")
  );
}

function resolveHeroImage(sourceUrl?: string): string | undefined {
  if (!sourceUrl) return undefined;
  return isWordPressMediaUrl(sourceUrl) ? toWordPressImageProxy(sourceUrl) : sourceUrl;
}

const WORDPRESS_NEXT_CTA: BlogNextCtaContent = {
  eyebrow: "Next steps",
  title: {
    before: "If selling is the right next step for your ",
    emphasis: "St. Pete property",
    after: ".",
  },
  description: "",
  asideLabel: "Talk to John directly",
  asideBullets: [
    "Local team — no call centers",
    "As-is, no repairs required",
    "SellFast@WeBuyStPeteHouses.com",
  ],
};

function mapAcfFaq(post: WordPressPost): BlogFaqItem[] | undefined {
  const items = post.blogPostFaq?.faqItems;
  if (!items?.length) return undefined;

  const faq = items
    .filter((item) => item.question?.trim() && item.answer?.trim())
    .map((item) => ({
      q: stripHtml(item.question ?? ""),
      a: stripHtml(item.answer ?? ""),
    }));

  return faq.length ? faq : undefined;
}

function mapAcfCta(post: WordPressPost): BlogNextCtaContent {
  const banner = post.blogPostCtaBanner;
  if (!banner?.ctaHeading && !banner?.ctaHeadingItalic) {
    return WORDPRESS_NEXT_CTA;
  }

  const before = banner.ctaHeading?.trim();
  const emphasis = banner.ctaHeadingItalic?.trim();

  return {
    ...WORDPRESS_NEXT_CTA,
    title: {
      before: before ? `${before} ` : "",
      emphasis: emphasis ?? "",
      after: "",
    },
  };
}

export function mapWordPressPostToBlogPost(post: WordPressPost, index = 0): BlogPost {
  const { category, categoryLabel } = resolveCategory(post);
  const excerpt = stripHtml(post.excerpt || post.content).slice(0, 280);
  const featuredImage = post.featuredImage?.node;
  const featured = isFeaturedPost(post);
  const { contentHtml, faq: parsedFaq, toc } = parseWordPressContent(post.content);
  const acfFaq = mapAcfFaq(post);
  const faq = acfFaq ?? (parsedFaq.length ? parsedFaq : undefined);
  const authorName = resolveAuthorName(post);
  const authorBio = stripHtml(post.author.node.description ?? "").trim() || undefined;
  const avatarUrl = post.author.node.avatar?.url?.trim();
  const authorAvatar = avatarUrl ? resolveHeroImage(avatarUrl) : undefined;
  const authorCompany =
    stripHtml(post.author.node.authorRelated?.authorCompany ?? "").trim() || undefined;

  return {
    slug: post.slug,
    title: stripHtml(post.title),
    excerpt,
    category,
    categoryLabel,
    date: toIsoDate(post.date),
    dateDisplay: formatDateDisplay(post.date),
    readTime: estimateReadTime(post.content),
    author: authorName,
    authorInitials: getAuthorInitials(authorName),
    authorRole: authorCompany ?? DEFAULT_AUTHOR.role,
    authorCompany,
    authorBio,
    authorAvatar,
    featured: featured || undefined,
    featuredTag: featured ? "Featured · New guide" : undefined,
    excludeFromListing: featured || undefined,
    imageTone: IMAGE_TONES[index % IMAGE_TONES.length],
    heroImage: resolveHeroImage(featuredImage?.sourceUrl),
    heroImageAlt: featuredImage?.altText || stripHtml(post.title),
    heroImageTitle: stripHtml(post.title),
    tags: post.tags.nodes.map((tag) => tag.name),
    metaDescription: excerpt,
    contentHtml,
    faq,
    toc: toc.length ? toc : undefined,
    fromWordPress: true,
    nextCta: mapAcfCta(post),
  };
}

export function mapWordPressPosts(posts: WordPressPost[]): BlogPost[] {
  return posts.map((post, index) => mapWordPressPostToBlogPost(post, index));
}
