import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CACHE_PATH = path.join(ROOT, "src/data/google-reviews.json");

const SERPAPI_BASE = "https://serpapi.com/search.json";
const DATA_ID = "0x8c02ee3246fb83f7:0x54d9e9e986f44cfc";
const HL = "en";

function getInitials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
}

function formatMeta(user, date) {
  const reviewCount = user?.reviews;
  if (typeof reviewCount === "number" && reviewCount > 0) {
    const label = reviewCount === 1 ? "review" : "reviews";
    return `${reviewCount} ${label} • ${date}`;
  }
  return date;
}

function mapReview(review) {
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
            title: "Response from John",
            text: ownerReplyText,
          },
        }
      : {}),
  };
}

async function fetchPage(apiKey, params) {
  const url = new URL(SERPAPI_BASE);
  url.searchParams.set("engine", "google_maps_reviews");
  url.searchParams.set("data_id", DATA_ID);
  url.searchParams.set("hl", HL);
  url.searchParams.set("api_key", apiKey);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`SerpAPI request failed with status ${response.status}`);
  }

  const data = await response.json();
  if (data.search_metadata?.status !== "Success") {
    throw new Error(data.error ?? "SerpAPI returned an unsuccessful response");
  }

  return data;
}

async function fetchChangeProbe(apiKey) {
  const page = await fetchPage(apiKey, { sort_by: "newestFirst" });
  const newest = page.reviews?.[0];

  return {
    totalReviews: page.place_info?.reviews ?? page.reviews?.length ?? 0,
    latestReviewId: newest?.review_id ?? "",
    placeInfo: {
      title: page.place_info?.title ?? "We Buy St Pete Houses",
      rating: page.place_info?.rating ?? 0,
      address: page.place_info?.address ?? null,
    },
    googleUrl:
      page.search_metadata?.google_maps_reviews_url ??
      "https://www.google.com/maps/search/?api=1&query=We+Buy+St+Pete+Houses",
  };
}

async function fetchFullSnapshot(apiKey) {
  const allReviews = [];
  let nextPageToken;
  let placeInfo;
  let googleUrl = "https://www.google.com/maps/search/?api=1&query=We+Buy+St+Pete+Houses";

  do {
    const page = await fetchPage(apiKey, {
      sort_by: "qualityScore",
      ...(nextPageToken ? { next_page_token: nextPageToken } : {}),
    });

    placeInfo ??= page.place_info;
    googleUrl = page.search_metadata?.google_maps_reviews_url ?? googleUrl;
    allReviews.push(...(page.reviews ?? []));
    nextPageToken = page.serpapi_pagination?.next_page_token;
  } while (nextPageToken);

  const items = allReviews.map(mapReview).filter(Boolean);
  const latestReviewId =
    [...items].sort((a, b) => b.isoDate.localeCompare(a.isoDate))[0]?.reviewId ??
    items[0]?.reviewId ??
    "";

  return {
    syncedAt: new Date().toISOString(),
    totalReviews: placeInfo?.reviews ?? items.length,
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

async function readCache() {
  try {
    const raw = await readFile(CACHE_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function main() {
  const apiKey = process.env.SERPAPI_KEY;
  if (!apiKey) {
    console.error("Missing SERPAPI_KEY environment variable.");
    process.exit(1);
  }

  const force = process.argv.includes("--force");
  const existing = await readCache();

  if (!force && existing?.items?.length) {
    const probe = await fetchChangeProbe(apiKey);
    const unchanged =
      existing.totalReviews === probe.totalReviews &&
      existing.latestReviewId === probe.latestReviewId;

    if (unchanged) {
      console.log(
        `No changes detected (${probe.totalReviews} reviews, latest ${probe.latestReviewId}). Skipping full sync.`,
      );
      return;
    }

    console.log("Review changes detected. Running full sync...");
  } else if (force) {
    console.log("Force flag set. Running full sync...");
  } else {
    console.log("No cache found. Running initial full sync...");
  }

  const snapshot = await fetchFullSnapshot(apiKey);
  await mkdir(path.dirname(CACHE_PATH), { recursive: true });
  await writeFile(CACHE_PATH, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");

  console.log(
    `Synced ${snapshot.items.length} reviews (${snapshot.totalReviews} total on Google).`,
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
