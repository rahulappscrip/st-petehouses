# Google Reviews Setup

## Summary

Reviews on this site are **real Google Business Profile reviews**, not hardcoded testimonials. They are synced from Google via **SerpAPI**, stored in a JSON cache file, and served at build/request time without calling SerpAPI on every page load.

| Area | Behavior |
|------|----------|
| **Homepage** (`/`) | Shows **9** newest reviews in a 3-column grid |
| **Reviews page** (`/reviews`) | Full reviews section + trust/FAQ content |
| **Situation pages** (`/situations/*`) | Up to **3** reviews matched by keywords; fallback to 3 newest general reviews |
| **City pages** (`/[location]`) | Uses `city-content.ts` testimonial copy (separate from Google pool) |
| **Sell your house** | Generic `ReviewsSectionBlock` (9 newest) |
| **About** | Static `HOME_TESTIMONIALS` subset from constants |

**Data source:** [`src/data/google-reviews.json`](../src/data/google-reviews.json) (currently 12 reviews synced; UI caps homepage at 9).

**Sync:** `npm run sync:reviews` (manual) or GitHub Actions daily at 14:00 UTC.

**Fallback:** If JSON is missing and SerpAPI fails, [`HOME_TESTIMONIALS`](../src/lib/constants.ts) in `constants.ts` is used.

---

## Architecture

```
SerpAPI (Google Maps Reviews)
        │
        ▼
scripts/sync-google-reviews.mjs
        │
        ▼
src/data/google-reviews.json   ← bundled at build time
        │
        ▼
getTestimonialsData()          ← Next.js unstable_cache (24h)
        │
        ├── Homepage / Reviews page / Sell your house
        │
        └── Situation pages
              └── pickSituationReviews() → keyword match or general fallback
```

---

## Key files

| File | Purpose |
|------|---------|
| [`src/data/google-reviews.json`](../src/data/google-reviews.json) | Cached review snapshot (committed to repo) |
| [`scripts/sync-google-reviews.mjs`](../scripts/sync-google-reviews.mjs) | Fetches reviews from SerpAPI and writes JSON |
| [`.github/workflows/sync-google-reviews.yml`](../.github/workflows/sync-google-reviews.yml) | Daily automated sync + commit |
| [`src/lib/reviews/get-reviews.ts`](../src/lib/reviews/get-reviews.ts) | `getTestimonialsData()`, `getReviewsCache()`, display limits |
| [`src/lib/reviews/match-situation-reviews.ts`](../src/lib/reviews/match-situation-reviews.ts) | Keyword matching for situation pages |
| [`src/lib/reviews/types.ts`](../src/lib/reviews/types.ts) | `GoogleReviewItem`, `TestimonialsData` types |
| [`src/lib/serpapi/google-maps-reviews.ts`](../src/lib/serpapi/google-maps-reviews.ts) | Runtime SerpAPI fetch (fallback if JSON empty) |
| [`src/components/home/ReviewsSection.tsx`](../src/components/home/ReviewsSection.tsx) | Shared review card UI (3-column grid, Google link) |
| [`src/components/situations/SituationTestimonialsSectionBlock.tsx`](../src/components/situations/SituationTestimonialsSectionBlock.tsx) | Situation-specific headers + matched reviews |

---

## Environment variables

```bash
# Required for sync script and optional runtime fallback
SERPAPI_KEY=your_serpapi_key
```

Documented in [`.env.example`](../.env.example).

---

## Syncing reviews

### Manual sync

```bash
npm run sync:reviews
```

Force a full re-fetch (skip change detection):

```bash
npm run sync:reviews:force
```

### How sync works

1. **Change probe** — Fetches newest review from SerpAPI and compares `totalReviews` + `latestReviewId` to the cache.
2. **Skip** — If unchanged, exits without writing (saves API credits).
3. **Full sync** — Paginates all reviews (`sort_by: qualityScore`), maps to our schema, writes `google-reviews.json`.

### Automated sync (GitHub Actions)

- **Schedule:** Daily at 14:00 UTC
- **Manual trigger:** `workflow_dispatch` in GitHub Actions
- **Requires:** `SERPAPI_KEY` repository secret
- **On change:** Commits updated `google-reviews.json` to the default branch

---

## Runtime behavior

[`getTestimonialsData()`](../src/lib/reviews/get-reviews.ts) is wrapped in `unstable_cache` with:

- **Revalidate:** 86,400 seconds (24 hours)
- **Cache tag:** `google-reviews`

Resolution order:

1. Read `google-reviews.json` (preferred — no live API call)
2. If JSON empty and `SERPAPI_KEY` set → live SerpAPI fetch
3. Else → `HOME_TESTIMONIALS` fallback from constants

### Display limits

| Constant | Value | Used for |
|----------|-------|----------|
| `DISPLAY_REVIEW_LIMIT` | 9 | Homepage, reviews page, sell-your-house |
| `SITUATION_REVIEW_LIMIT` | 3 | Situation page testimonials section |

The JSON file may contain more reviews than displayed (e.g. 12 stored, 9 shown on homepage). Situation matching uses the **full pool** from `getReviewsCache().items`.

---

## Situation page matching

Situation pages no longer use hardcoded quote cards. Section **headers** (eyebrow, title, lede) still come from [`situation-content-data.json`](../src/lib/situation-content-data.json). Review **cards** are picked dynamically.

### Logic ([`pickSituationReviews`](../src/lib/reviews/match-situation-reviews.ts))

1. Check `SITUATION_REVIEW_OVERRIDES` for manual `reviewId` list (optional, currently empty).
2. Score each review against `SITUATION_REVIEW_KEYWORDS[slug]` in quote text (+ owner reply).
3. If any review scores > 0 → return top 3 by score, then date.
4. If no match → return 3 newest general reviews.

### Example matches

| Slug | Likely matched review themes |
|------|------------------------------|
| `medical-emergency` | surgery, recovering, accommodating |
| `tenants` | rental, lease |
| `sell-as-is`, `as-is-florida` | as-is |
| `cash-home-buyers` | fair offer, honest, cash |
| `foreclosure`, `divorce`, etc. | Often no keyword hit → general fallback |

### Tuning

- **Keywords:** Edit `SITUATION_REVIEW_KEYWORDS` in [`match-situation-reviews.ts`](../src/lib/reviews/match-situation-reviews.ts)
- **Manual override:** Add entries to `SITUATION_REVIEW_OVERRIDES` with Google `reviewId` values from JSON

---

## UI components

### `ReviewsSection`

Shared review grid used on homepage, reviews page, situation pages, and about page.

- 3-column responsive grid (`.reviews-grid`)
- Star rating, quote (with read-more for long text), avatar initials
- Google rating badge in header
- **"See all reviews"** button on situation pages (links to `googleUrl` from cache)
- Homepage default link: `Read all N reviews on Google →`

### `ReviewsSectionBlock`

Async server wrapper — calls `getTestimonialsData()` and passes data to `ReviewsSection`.

### `SituationTestimonialsSectionBlock`

- Loads full review pool
- Runs `pickSituationReviews(slug, items, 3)`
- Renders `ReviewsSection` with situation-specific header from JSON

---

## Review data shape

Each item in `google-reviews.json`:

```json
{
  "reviewId": "ChdDSUhNMG9nS0VJQ0FnSUN1cmIzN2tRRRAB",
  "quote": "Full review text…",
  "name": "Nicci Fagan",
  "meta": "15 reviews • 3 years ago",
  "initials": "NF",
  "rating": 5,
  "date": "3 years ago",
  "isoDate": "2022-08-03T16:40:39Z",
  "localGuide": true,
  "link": "https://www.google.com/maps/reviews/…",
  "ownerReply": {
    "title": "Response from John",
    "text": "Optional owner reply text"
  }
}
```

Cache metadata:

```json
{
  "syncedAt": "2026-06-08T07:24:14.346Z",
  "totalReviews": 12,
  "latestReviewId": "…",
  "placeInfo": { "title": "We Buy St Pete Houses", "rating": 4.9, "address": null },
  "googleUrl": "https://www.google.com/maps/place/…"
}
```

---

## Pages reference

| Route | Reviews source |
|-------|----------------|
| `/` | `getTestimonialsData()` — 9 reviews |
| `/reviews` | `getTestimonialsData()` — 9 reviews + dedicated page layout |
| `/situations/[slug]` | Matched or fallback — 3 reviews |
| `/sell-your-house` | `ReviewsSectionBlock` — 9 reviews |
| `/about` | `HOME_TESTIMONIALS` from constants (curated subset) |
| `/[location]` (city) | Static testimonials in `city-content.ts` (not Google JSON) |

---

## Troubleshooting

| Issue | Check |
|-------|-------|
| Homepage slow / 503 | Ensure site uses JSON cache, not live SerpAPI per request. Run `npm run sync:reviews`. |
| Stale reviews | Run sync or wait for daily GitHub Action. Verify `syncedAt` in JSON. |
| Situation page shows wrong reviews | Adjust keywords in `match-situation-reviews.ts` or add `reviewId` override. |
| No reviews at all | Confirm `google-reviews.json` has `items`. Check `SERPAPI_KEY` for sync. |
| Fallback quotes showing | JSON empty + SerpAPI failed → uses `HOME_TESTIMONIALS` in constants. |

---

## Related npm scripts

```json
"sync:reviews": "node scripts/sync-google-reviews.mjs",
"sync:reviews:force": "node scripts/sync-google-reviews.mjs --force"
```

From [`package.json`](../package.json).
