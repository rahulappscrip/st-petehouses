import { pickLatestReviews } from "@/lib/reviews/get-reviews";
import type { GoogleReviewItem } from "@/lib/reviews/types";

/** Reviews shown in the situation testimonials grid. */
export const SITUATION_REVIEW_LIMIT = 3;

/** Optional manual overrides when keyword matching is ambiguous. */
const SITUATION_REVIEW_OVERRIDES: Partial<Record<string, readonly string[]>> = {};

const SITUATION_REVIEW_KEYWORDS: Record<string, readonly string[]> = {
  foreclosure: [
    "behind",
    "foreclosure",
    "court",
    "lender",
    "credit",
    "quick",
    "closing",
  ],
  inherited: ["family home", "family", "estate", "inherited", "executor"],
  divorce: ["divorce", "split", "separate", "amicable"],
  tenants: ["rental", "tenant", "lease", "landlord"],
  lien: ["lien", "title", "payoff", "debt"],
  "water-damage": ["damage", "flood", "water", "as is", "as-is", "repair"],
  "fire-damage": ["fire", "damage", "as is", "as-is", "repair"],
  "storm-damage": ["storm", "hurricane", "damage", "flood", "as is", "as-is"],
  "mold-damage": ["mold", "damage", "as is", "as-is", "repair"],
  "as-is-florida": ["as is", "as-is", "repair", "condition"],
  "cash-home-buyers": [
    "cash",
    "fair offer",
    "offer",
    "honest",
    "transparent",
    "quick",
  ],
  condemned: ["condemned", "code", "violation", "as is", "as-is"],
  "medical-emergency": [
    "surgery",
    "recovering",
    "medical",
    "health",
    "accommodating",
    "closing date",
  ],
  "hoarder-house": ["as is", "as-is", "condition", "clean"],
  "reverse-mortgage": ["mortgage", "senior", "equity", "hecm"],
  "sell-as-is": ["as is", "as-is", "repair", "condition"],
  bankruptcy: ["bankruptcy", "debt", "behind", "financial"],
  "foundation-problems": [
    "foundation",
    "structural",
    "as is",
    "as-is",
    "repair",
  ],
};

function reviewSearchText(review: GoogleReviewItem): string {
  const parts = [review.quote];
  if (review.ownerReply?.text) {
    parts.push(review.ownerReply.text);
  }
  return parts.join(" ").toLowerCase();
}

export function scoreReviewForSituation(
  review: GoogleReviewItem,
  keywords: readonly string[],
): number {
  if (!keywords.length) return 0;

  const text = reviewSearchText(review);
  return keywords.reduce((score, keyword) => {
    return text.includes(keyword.toLowerCase()) ? score + 1 : score;
  }, 0);
}

function sortByScoreThenDate(
  scored: { review: GoogleReviewItem; score: number }[],
): GoogleReviewItem[] {
  return [...scored]
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.review.isoDate.localeCompare(a.review.isoDate);
    })
    .map(({ review }) => review);
}

function pickByReviewIds(
  items: readonly GoogleReviewItem[],
  reviewIds: readonly string[],
  limit: number,
): GoogleReviewItem[] {
  const byId = new Map(items.map((item) => [item.reviewId, item]));
  const picked: GoogleReviewItem[] = [];

  for (const reviewId of reviewIds) {
    const review = byId.get(reviewId);
    if (review) picked.push(review);
    if (picked.length >= limit) break;
  }

  return picked;
}

export function pickSituationReviews(
  slug: string,
  items: readonly GoogleReviewItem[],
  limit = SITUATION_REVIEW_LIMIT,
): GoogleReviewItem[] {
  if (!items.length) return [];

  const overrideIds = SITUATION_REVIEW_OVERRIDES[slug];
  if (overrideIds?.length) {
    const overridden = pickByReviewIds(items, overrideIds, limit);
    if (overridden.length >= limit) return overridden;
  }

  const keywords = SITUATION_REVIEW_KEYWORDS[slug] ?? [];
  const scored = items.map((review) => ({
    review,
    score: scoreReviewForSituation(review, keywords),
  }));

  const bestScore = Math.max(...scored.map(({ score }) => score), 0);
  if (bestScore > 0) {
    const matched = sortByScoreThenDate(scored.filter(({ score }) => score > 0));
    return matched.slice(0, limit);
  }

  return pickLatestReviews(items, limit);
}
