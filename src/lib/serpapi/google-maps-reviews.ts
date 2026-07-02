import type { GoogleReviewItem, GoogleReviewsCache } from "@/lib/reviews/types";

const SERPAPI_BASE = "https://serpapi.com/search.json";
const DATA_ID = "0x8c02ee3246fb83f7:0x54d9e9e986f44cfc";
const HL = "en";
const SERPAPI_TIMEOUT_MS = 8_000;

type SerpApiUser = {
  name?: string;
  local_guide?: boolean;
  reviews?: number;
};

type SerpApiReview = {
  review_id?: string;
  snippet?: string;
  rating?: number;
  date?: string;
  iso_date?: string;
  link?: string;
  user?: SerpApiUser;
  response?: {
    snippet?: string;
    extracted_snippet?: { original?: string };
  };
};

type SerpApiReviewsResponse = {
  search_metadata?: {
    status?: string;
    google_maps_reviews_url?: string;
  };
  place_info?: {
    title?: string;
    rating?: number;
    reviews?: number;
    address?: string | null;
  };
  reviews?: SerpApiReview[];
  serpapi_pagination?: {
    next_page_token?: string;
  };
  error?: string;
};

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
}

function formatMeta(user: SerpApiUser | undefined, date: string): string {
  const reviewCount = user?.reviews;
  if (typeof reviewCount === "number" && reviewCount > 0) {
    const label = reviewCount === 1 ? "review" : "reviews";
    return `${reviewCount} ${label} • ${date}`;
  }
  return date;
}

function mapReview(review: SerpApiReview): GoogleReviewItem | null {
  const name = review.user?.name?.trim();
  const quote = review.snippet?.trim();
  const reviewId = review.review_id?.trim();
  const date = review.date?.trim();

  if (!name || !quote || !reviewId || !date) return null;

  const ownerReplyText =
    review.response?.extracted_snippet?.original?.trim() ?? review.response?.snippet?.trim();

  return {
    reviewId,
    quote,
    name,
    meta: formatMeta(review.user, date),
    initials: getInitials(name),
    rating: review.rating ?? 5,
    date,
    isoDate: review.iso_date ?? "",
    localGuide: Boolean(review.user?.local_guide),
    link: review.link ?? "",
    ...(ownerReplyText
      ? {
          ownerReply: {
            title: "Response from Benette",
            text: ownerReplyText,
          },
        }
      : {}),
  };
}

async function fetchReviewsPage(
  apiKey: string,
  params: Record<string, string>,
): Promise<SerpApiReviewsResponse> {
  const url = new URL(SERPAPI_BASE);
  url.searchParams.set("engine", "google_maps_reviews");
  url.searchParams.set("data_id", DATA_ID);
  url.searchParams.set("hl", HL);
  url.searchParams.set("api_key", apiKey);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), SERPAPI_TIMEOUT_MS);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`SerpAPI request failed with status ${response.status}`);
    }

    const data = (await response.json()) as SerpApiReviewsResponse;
    if (data.search_metadata?.status !== "Success") {
      throw new Error(data.error ?? "SerpAPI returned an unsuccessful response");
    }

    return data;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(`SerpAPI request timed out after ${SERPAPI_TIMEOUT_MS}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchGoogleMapsReviewsSnapshot(
  apiKey: string,
  sortBy: "qualityScore" | "newestFirst" = "newestFirst",
  limit?: number,
): Promise<GoogleReviewsCache> {
  const allReviews: SerpApiReview[] = [];
  let nextPageToken: string | undefined;
  let placeInfo: SerpApiReviewsResponse["place_info"];
  let googleUrl = `https://www.google.com/maps/search/?api=1&query=We+Buy+St+Pete+Houses`;

  do {
    const page = await fetchReviewsPage(apiKey, {
      sort_by: sortBy,
      ...(nextPageToken ? { next_page_token: nextPageToken } : {}),
    });

    placeInfo ??= page.place_info;
    googleUrl = page.search_metadata?.google_maps_reviews_url ?? googleUrl;
    allReviews.push(...(page.reviews ?? []));
    nextPageToken = page.serpapi_pagination?.next_page_token;
  } while (nextPageToken && (!limit || allReviews.length < limit));

  const items = allReviews
    .map(mapReview)
    .filter((item): item is GoogleReviewItem => item !== null)
    .slice(0, limit);

  const totalReviews = placeInfo?.reviews ?? items.length;
  const latestReviewId =
    [...items].sort((a, b) => b.isoDate.localeCompare(a.isoDate))[0]?.reviewId ??
    items[0]?.reviewId ??
    "";

  return {
    syncedAt: new Date().toISOString(),
    totalReviews,
    latestReviewId,
    placeInfo: {
      title: placeInfo?.title ?? "We Buy St Pete Houses",
      rating: placeInfo?.rating ?? 0,
      address: placeInfo?.address ?? null,
    },
    googleUrl,
    items,
  };
}

export async function fetchGoogleMapsReviewsChangeProbe(apiKey: string): Promise<{
  totalReviews: number;
  latestReviewId: string;
  placeInfo: GoogleReviewsCache["placeInfo"];
  googleUrl: string;
}> {
  const page = await fetchReviewsPage(apiKey, { sort_by: "newestFirst" });
  const newest = page.reviews?.[0];

  return {
    totalReviews: page.place_info?.reviews ?? page.reviews?.length ?? 0,
    latestReviewId: newest?.review_id ?? "",
    placeInfo: {
      title: page.place_info?.title ?? "We Buy St Pete Houses",
      rating: page.place_info?.rating ?? 0,
      address: page.place_info?.address ?? null,
    },
    googleUrl: page.search_metadata?.google_maps_reviews_url ?? "",
  };
}

export function hasReviewsChanged(
  cache: Pick<GoogleReviewsCache, "totalReviews" | "latestReviewId">,
  probe: Pick<GoogleReviewsCache, "totalReviews" | "latestReviewId">,
): boolean {
  return (
    cache.totalReviews !== probe.totalReviews || cache.latestReviewId !== probe.latestReviewId
  );
}
