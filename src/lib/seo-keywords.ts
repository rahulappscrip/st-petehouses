import type { BlogPost } from "@/lib/blog";

/** One primary meta keyword per page. */
export const PAGE_KEYWORDS = {
  home: "sell my house fast st petersburg",
  about: "About we buy st pete houses",
  contact: "contact us",
  howItWorks: "how cash home buying works",
  reviews: "reviews and testimonials",
  sellYourHouse: "sell your house for cash florida",
  getACashOffer: "get cash offer St Petersburg",
  cashVsAgent: "cash offer vs real estate agent",
  blog: "St Petersburg home selling blog",
  faq: "Faq",
} as const;

const CITY_KEYWORDS: Record<string, string> = {
  "we-buy-houses-st-petersburg-fl": "sell my house fast st petersburg fl",
  "we-buy-houses-clearwater-fl": "we buy houses clearwater",
  "we-buy-houses-largo-fl": "sell my house fast largo",
  "we-buy-houses-dunedin-fl": "sell my house fast dunedin",
  "we-buy-houses-pinellas-park-fl": "sell my house fast pinellas park",
};

const SITUATION_KEYWORDS: Record<string, string> = {
  "sell-as-is": "sell my house as is st petersburg",
  inherited: "selling an inherited house st petersburg",
  divorce: "sell house during divorce florida",
  foreclosure: "stop foreclosure st petersburg",
  tenants: "sell rental property with tenants florida",
  lien: "sell house with lien florida",
  "storm-damage": "sell storm damaged house florida",
  "cash-home-buyers": "cash home buyers st petersburg",
  "fire-damage": "sell fire damaged house st petersburg",
  "water-damage": "sell house with water damage st petersburg",
  "mold-damage": "selling a house with mold st petersburg",
  "as-is-florida": "sell house as is florida",
  "reverse-mortgage": "sell house with reverse mortgage st petersburg",
  "medical-emergency": "sell house for medical emergency st petersburg",
  "hoarder-house": "sell hoarder house st petersburg",
  condemned: "sell condemned house st petersburg",
  bankruptcy: "sell house during bankruptcy florida",
  "foundation-problems": "sell house with foundation problems st petersburg",
};

export function getCityPageKeyword(route: string, cityName: string): string {
  return CITY_KEYWORDS[route] ?? `we buy houses ${cityName} FL`;
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
