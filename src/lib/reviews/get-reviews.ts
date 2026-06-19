import { unstable_cache } from "next/cache";
import { HOME_TESTIMONIALS } from "@/lib/constants";
import { fetchGoogleMapsReviewsSnapshot } from "@/lib/serpapi/google-maps-reviews";
import type { GoogleReviewItem, GoogleReviewsCache, TestimonialsData } from "@/lib/reviews/types";
import reviewsCache from "@/data/google-reviews.json";

/** Refresh live SerpAPI data at most once every 24 hours. */
export const REVIEW_CACHE_SECONDS = 86_400;

/** Number of newest reviews shown in the UI. */
export const DISPLAY_REVIEW_LIMIT = 9;

export function pickLatestReviews(
  items: readonly GoogleReviewItem[],
  limit = DISPLAY_REVIEW_LIMIT,
): GoogleReviewItem[] {
  return [...items]
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate))
    .slice(0, limit);
}

function formatRating(rating: number): string {
  return Number.isInteger(rating) ? rating.toFixed(1) : String(rating);
}

function formatCount(totalReviews: number): string {
  const label = totalReviews === 1 ? "verified review" : "verified reviews";
  return `${totalReviews} ${label}`;
}

function toTestimonialsData(cache: GoogleReviewsCache): TestimonialsData {
  const totalReviews = cache.totalReviews;

  return {
    rating: formatRating(cache.placeInfo.rating),
    count: formatCount(totalReviews),
    totalReviews,
    googleUrl: cache.googleUrl,
    items: pickLatestReviews(cache.items),
  };
}

function fallbackTestimonials(): TestimonialsData {
  const items = HOME_TESTIMONIALS.items.map((item) => {
      const ownerReply = "ownerReply" in item ? item.ownerReply : undefined;

      return {
        reviewId: `${item.initials}-${item.name}`,
        quote: item.quote,
        name: item.name,
        meta: item.meta,
        initials: item.initials,
        rating: 5,
        date: "",
        isoDate: "",
        localGuide: item.localGuide,
        link: "",
        ...(ownerReply ? { ownerReply } : {}),
      };
    });

  return {
    rating: HOME_TESTIMONIALS.rating,
    count: HOME_TESTIMONIALS.count,
    totalReviews: items.length,
    googleUrl: HOME_TESTIMONIALS.googleUrl,
    items: items.slice(0, DISPLAY_REVIEW_LIMIT),
  };
}

function getFileTestimonials(): TestimonialsData | null {
  const cache = reviewsCache as GoogleReviewsCache;
  if (!cache.items?.length) return null;
  return toTestimonialsData(cache);
}

async function resolveTestimonials(): Promise<TestimonialsData> {
  const fileData = getFileTestimonials();
  const apiKey = process.env.SERPAPI_KEY;

  if (!apiKey) {
    return fileData ?? fallbackTestimonials();
  }

  // Use bundled JSON at request time; refresh via `npm run sync:reviews`.
  if (fileData) {
    return fileData;
  }

  try {
    const snapshot = await fetchGoogleMapsReviewsSnapshot(
      apiKey,
      "newestFirst",
      DISPLAY_REVIEW_LIMIT,
    );
    return toTestimonialsData(snapshot);
  } catch (error) {
    console.error("Failed to fetch Google reviews from SerpAPI:", error);
    return fallbackTestimonials();
  }
}

export const getTestimonialsData = unstable_cache(
  resolveTestimonials,
  ["google-reviews-testimonials"],
  { revalidate: REVIEW_CACHE_SECONDS, tags: ["google-reviews"] },
);

export function getReviewsCache(): GoogleReviewsCache | null {
  const cache = reviewsCache as GoogleReviewsCache;
  return cache.items?.length ? cache : null;
}
