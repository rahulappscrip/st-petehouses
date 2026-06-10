import type { BlogPost } from "@/lib/blog";

/** One primary meta keyword per page. */
export const PAGE_KEYWORDS = {
  home: "We Buy Houses In St Petersburg",
  about: "about We Buy St Pete Houses",
  contact: "contact We Buy St Pete Houses",
  howItWorks: "how cash home buying works",
  reviews: "We Buy St Pete Houses reviews",
  sellYourHouse: "sell your house St Petersburg",
  getACashOffer: "get cash offer St Petersburg",
  cashVsAgent: "cash offer vs real estate agent",
  blog: "St Petersburg home selling blog",
} as const;

const SITUATION_KEYWORDS: Record<string, string> = {
  foreclosure: "stop foreclosure St Petersburg",
  inherited: "sell inherited house St Petersburg",
  divorce: "sell house during divorce Florida",
  tenants: "sell rental with tenants St Petersburg",
  lien: "sell house with lien Florida",
  "water-damage": "sell flood damaged house St Petersburg",
  "fire-damage": "sell fire damaged house St Petersburg",
  "storm-damage": "sell storm damaged house Florida",
  "mold-damage": "sell mold damaged house St Petersburg",
  "sell-as-is": "sell house as-is St Petersburg",
  "as-is-florida": "sell house as-is Florida",
  "cash-home-buyers": "cash home buyers St Petersburg",
  condemned: "sell condemned house St Petersburg",
  "medical-emergency": "sell house medical emergency St Petersburg",
  "hoarder-house": "sell hoarder house St Petersburg",
  "reverse-mortgage": "sell house reverse mortgage St Petersburg",
};

export function getCityPageKeyword(cityName: string): string {
  return `we buy houses ${cityName} FL`;
}

export function getSituationPageKeyword(slug: string, label: string): string {
  return SITUATION_KEYWORDS[slug] ?? `sell ${label.toLowerCase()} house St Petersburg FL`;
}

export function getBlogPostKeyword(post: BlogPost): string {
  if (post.tags?.[0]) {
    return post.tags[0];
  }

  return post.categoryLabel;
}
