/** Shared alt and title copy for site images. */
export type ImageAccessibility = {
  alt: string;
  title: string;
};

export function imageAccessibility(alt: string, title?: string): ImageAccessibility {
  return { alt, title: title ?? alt };
}

export function imageTitleFrom(meta: { imageAlt: string; imageTitle?: string }): string {
  return meta.imageTitle ?? meta.imageAlt;
}

export const BRAND_IMAGES = {
  headerLogo: imageAccessibility(
    "We Buy St Pete Houses logo",
    "We Buy St Pete Houses — return to homepage",
  ),
  footerLogo: imageAccessibility(
    "We Buy St Pete Houses logo",
    "We Buy St Pete Houses — local St. Petersburg cash home buyers",
  ),
} as const;

export const PERSON_IMAGES = {
  johnPortrait: imageAccessibility(
    "Bennett Andrews, founder and owner of We Buy St Pete Houses in St. Petersburg, Florida",
    "Bennett Andrews — local St. Petersburg cash home buyer",
  ),
  johnCta: imageAccessibility(
    "Bennett Andrews ready to review your St. Petersburg property for a cash offer",
    "Speak with Bennett Andrews about selling your St. Pete home for cash",
  ),
  johnByline: imageAccessibility(
    "Portrait of Bennett Andrews, author of this cash home buying guide",
    "Bennett Andrews — We Buy St Pete Houses",
  ),
  johnAvatar: imageAccessibility(
    "Bennett Andrews profile photo",
    "Bennett Andrews — We Buy St Pete Houses founder",
  ),
} as const;

export const TRUST_IMAGES = {
  bbbBadge: imageAccessibility(
    "Better Business Bureau Accredited Business badge with A+ rating for We Buy St Pete Houses",
    "BBB Accredited Business — A+ rating",
  ),
} as const;

export const HOW_IT_WORKS_IMAGES = {
  explainer: imageAccessibility(
    "Infographic comparing a traditional home sale with a St. Petersburg cash home sale",
    "Traditional sale vs. cash sale — fees, timeline, and certainty compared",
  ),
  processFlow: imageAccessibility(
    "Step-by-step diagram of the cash home buying process from offer to closing",
    "How the cash home buying process works in St. Petersburg",
  ),
  trustSignals: imageAccessibility(
    "Checklist of trust signals for verifying legitimate cash home buyers in Florida",
    "How to verify a legitimate cash home buyer in St. Petersburg",
  ),
} as const;

export const MARKET_IMAGES = {
  defaultChart: imageAccessibility(
    "Chart illustrating factors that shape cash home offers in the St. Petersburg market",
    "Understanding the St. Petersburg cash-offer market",
  ),
  localContext: imageAccessibility(
    "St. Petersburg neighborhood scene representing local cash home market conditions",
    "Local market context for St. Petersburg cash home offers",
  ),
} as const;
