import { imageAccessibility, type ImageAccessibility } from "@/lib/image-accessibility";

export type BlogCategory = "process" | "market" | "situations" | "prep" | "legal";

export type ImageTone = "sun" | "teal" | "ink" | "leaf" | "gold" | "sand";

export type BlogTocItem = {
  id: string;
  label: string;
};

export type BlogFaqItem = {
  q: string;
  a: string;
};

export type BlogNextCtaContent = {
  eyebrow: string;
  title: { before: string; emphasis: string; after: string };
  description: string;
  secondaryCta?: { label: string; href: string };
  asideLabel: string;
  asideBullets: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  detailHeadline?: {
    before: string;
    emphasis: string;
    after: string;
  };
  titleEmphasis?: string;
  excerpt: string;
  category: BlogCategory;
  categoryLabel: string;
  date: string;
  dateDisplay: string;
  readTime: string;
  author: string;
  authorInitials: string;
  authorRole: string;
  authorCompany?: string;
  authorBio?: string;
  authorAvatar?: string;
  featured?: boolean;
  featuredTag?: string;
  imageTone: ImageTone;
  imageGlyph?: string;
  tagVariant?: "sun";
  heroImage?: string;
  heroImageAlt?: string;
  heroImageTitle?: string;
  heroImageCaption?: string;
  tags?: string[];
  metaDescription: string;
  toc?: BlogTocItem[];
  faq?: BlogFaqItem[];
  nextCta?: BlogNextCtaContent;
  listTitle?: string;
  listExcerpt?: string;
  featuredImageLabel?: string;
  excludeFromListing?: boolean;
  /** WordPress article HTML rendered inside `.article-body` when present. */
  contentHtml?: string;
  fromWordPress?: boolean;
};

export const BLOG_LISTING_PAGE_SIZE = 9;

export const BLOG_PAGE = {
  metaDescription:
    "Everything St. Petersburg homeowners need to know about selling their house in any situation — foreclosure, inherited property, insurance problems, flood damage, HOA issues and more. Written by We Buy St Pete Houses.",
  eyebrow: "Blog · Seller resources",
  lede:
    "Everything St. Petersburg homeowners need to know about selling their house — in any situation. Foreclosure, divorce, inherited property, insurance problems, flood damage, code violations, and more. Straightforward guides written by John Gardepe and the We Buy St Pete Houses team. No fluff, no fear-bait.",
} as const;

export const DEFAULT_BLOG_NEXT_CTA: BlogNextCtaContent = {
  eyebrow: "Next steps",
  title: {
    before: "Ready for a ",
    emphasis: "fair cash offer",
    after: "?",
  },
  description:
    "Tell us about your property. A written offer within 24 hours — no obligation, no pressure, no repair requests.",
  secondaryCta: { label: 'Visit "Sell Your House"', href: "/sell-your-house" },
  asideLabel: "Talk to John directly",
  asideBullets: [
    "Local team — no call centers",
    "Works with your probate timeline",
    "SellFast@WeBuyStPeteHouses.com",
  ],
};

export const BLOG_CATEGORIES: {
  id: BlogCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All articles" },
  { id: "process", label: "Cash sale process" },
  { id: "market", label: "Market insights" },
  { id: "situations", label: "Tough situations" },
  { id: "prep", label: "Sale prep" },
  { id: "legal", label: "Florida law" },
];

/** Live blog listing used by client components; hydrated from WordPress on the server. */
export const BLOG_POSTS: BlogPost[] = [];

export function hydrateBlogPosts(posts: BlogPost[]): void {
  BLOG_POSTS.length = 0;
  BLOG_POSTS.push(...posts);
}

export function getBlogHeroImageCopy(post: BlogPost): ImageAccessibility {
  const alt = post.heroImageAlt ?? post.title;
  return imageAccessibility(alt, post.heroImageTitle ?? alt);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.featured);
}

export function getCategoryCount(category: BlogCategory | "all"): number {
  if (category === "all") return BLOG_POSTS.length;
  return BLOG_POSTS.filter((post) => post.category === category).length;
}

export function getBlogPostHref(slug: string): string {
  return `/blog/${slug}`;
}
