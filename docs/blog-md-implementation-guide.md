# How to Add Blog Markdown (`.md`) on Another Site

A practical guide based on this project’s **blog-only** markdown pipeline. Use it when implementing the same pattern on a new Next.js site.

---

## What you're building

When someone requests:

- `/blog.md` → markdown list of all posts
- `/blog/my-post-slug.md` → markdown for one post

Your app should:

1. Fetch the post from **WordPress** (GraphQL)
2. Convert **HTML → markdown**
3. Return `text/markdown` (not HTML)

Blog markdown is **live** — it is not stored in a JSON file at build time.

---

## How it works (flow)

```
/blog/some-post.md
    → middleware rewrites to /api/agent-md/blog/some-post
    → API route calls blog MD helper
    → Fetches post from WordPress (GraphQL)
    → generate-blog-md.ts converts HTML → markdown
    → Returns text/markdown (cached 60s)
```

---

## Files you need (minimum)

Copy or adapt these **6 pieces** from this repo:

| # | File to create | Based on |
|---|----------------|----------|
| 1 | `src/lib/wordpress/graphql.ts` | Fetch posts from WordPress |
| 2 | `src/lib/wordpress/fetch.ts` | HTTP client for WordPress (if needed) |
| 3 | `src/lib/agent-md/page-header.ts` | Top of every `.md` page |
| 4 | `src/lib/agent-md/generate-blog-md.ts` | **Main converter** HTML → markdown |
| 5 | `src/lib/agent-md/get-blog-md-content.ts` | Chooses listing vs single post |
| 6 | `src/app/api/agent-md/[[...segments]]/route.ts` | API that returns markdown |

**Optional but recommended:**

| # | File | Why |
|---|------|-----|
| 7 | `src/middleware.ts` | So `/blog/slug.md` works (not only `/api/agent-md/...`) |
| 8 | `src/app/api/revalidate/blog/route.ts` | Clear cache when WordPress publishes |

**You do NOT need** for blog-only:

- `src/data/agent-md-pages.json`
- `scripts/sync-agent-md-pages.mjs`
- `scripts/lib/agent-md-blog.mjs` (JS duplicate — optional reference only)

---

## Per-file guide

### 1. `src/lib/wordpress/graphql.ts`

**Job:** Talk to WordPress and return post data.

**What it does:**

- Sends GraphQL queries to `WORDPRESS_GRAPHQL_URL`
- `fetchWordPressPosts()` → all published posts
- `fetchWordPressPostBySlug(slug)` → one post
- Caches for **60 seconds** (`revalidate: 60`, tag `wordpress-posts`)

**What to change on the new site:**

- `WORDPRESS_GRAPHQL_URL` env var (your WordPress GraphQL endpoint)
- GraphQL fields if your WordPress theme/plugins differ (categories, author, FAQ ACF fields)
- Post query `first: 100` if you have more than 100 posts

**Depends on:** `wordpress/fetch.ts` (or use `fetch()` directly if you prefer)

---

### 2. `src/lib/wordpress/fetch.ts`

**Job:** Low-level HTTPS request to WordPress.

**What it does:**

- Wraps `https.request` for WordPress GraphQL
- May include image proxy helpers (`isWordPressMediaUrl`, etc.)

**What to change:**

- `WORDPRESS_HOST` → your WordPress domain
- SSL settings if your host differs

**Skip this file** if you use standard `fetch()` and your WordPress cert is valid.

---

### 3. `src/lib/agent-md/page-header.ts`

**Job:** Same header block on every markdown page.

**Example output:**

```markdown
# Post Title | Your Site Name

> Short description...

- **Canonical URL:** https://yoursite.com/blog/slug
- **Primary keyword:** Category name
- **Company:** Your Company · phone · email
```

**What to change:**

- `SITE.url` / company name / phone / email
- Header format if you want something different

**Depends on:** your site constants (`SITE` object or env vars)

---

### 4. `src/lib/agent-md/generate-blog-md.ts` (most important)

**Job:** Turns one WordPress post into a markdown string.

**Main functions:**

| Function | Input | Output |
|----------|--------|--------|
| `generateBlogPostMd(post)` | One WordPress post | Full article markdown |
| `generateBlogListingMd(posts)` | Array of posts | Blog index markdown |

**What happens inside:**

1. `stripHtml()` — remove HTML tags, decode `&nbsp;`, etc.
2. `htmlToMarkdown()` — `<h2>` → `##`, `<strong>` → `**`, links, lists
3. `formatFaqItems()` — FAQ from WordPress custom fields (if you have them)
4. `pageHeader()` — add title, canonical, keyword
5. Join: header + byline + tags + excerpt + body + FAQ

**What to change:**

- `CATEGORY_BY_SLUG` — map WordPress category slugs to display names
- Default author name/role
- FAQ field names (`blogPostFaq.faqItems`) if your ACF structure differs
- Remove FAQ section if the new site has no FAQ fields

**Depends on:** `page-header.ts`, WordPress post type

---

### 5. `src/lib/agent-md/get-blog-md-content.ts`

**Job:** Router — decides listing vs single post.

**Logic:**

```
key === "blog"           → fetch all posts → generateBlogListingMd()
key === "blog/{slug}"    → fetch one post  → generateBlogPostMd()
else                     → return null
```

**Also exports:** `isBlogAgentMdKey(key)` — true if key is `blog` or starts with `blog/`

**What to change:**

- Key prefix if blog URL isn’t `/blog` (e.g. `/articles` → use `articles` and `articles/{slug}`)

**Depends on:** `generate-blog-md.ts`, `wordpress/graphql.ts`

---

### 6. `src/app/api/agent-md/[[...segments]]/route.ts`

**Job:** HTTP endpoint that serves markdown.

**URLs:**

- `GET /api/agent-md` → homepage markdown (if you have static pages)
- `GET /api/agent-md/blog` → blog listing markdown
- `GET /api/agent-md/blog/my-slug` → one post markdown

**Flow:**

```
1. Build key from URL segments (e.g. ["blog", "my-slug"] → "blog/my-slug")
2. If isBlogAgentMdKey(key) → getBlogMdContent(key)
3. Else → getAgentMdContent(key) from JSON (static pages — optional)
4. Return Response with Content-Type: text/markdown
5. Add headers: X-Robots-Tag: noindex, Cache-Control: 60s
```

**What to change:**

- If **blog-only**, you can remove static `getAgentMdContent` and only handle blog keys
- `revalidate = 60` at top of file

**Depends on:** `get-blog-md-content.ts` (+ optional `agent-md-pages.ts`)

---

### 7. `src/middleware.ts` (optional)

**Job:** Pretty URLs for markdown.

**Without middleware:** only `/api/agent-md/blog/slug` works

**With middleware:**

- `/blog/slug.md` → internally rewritten to `/api/agent-md/blog/slug`
- `/blog` + header `Accept: text/markdown` → same

**What to change:**

- `matcher` so static assets aren’t affected
- Path rules if blog path differs

**Depends on:** API route from step 6

---

### 8. `src/app/api/revalidate/blog/route.ts` (optional)

**Job:** When WordPress publishes/updates a post, clear cache.

**What it does:**

- WordPress webhook calls `POST /api/revalidate/blog` with secret header
- Runs `revalidateTag("wordpress-posts")`
- Revalidates `/blog` and `/blog/{slug}`

**What to change:**

- `REVALIDATE_BLOG_SECRET` env var
- WordPress plugin/webhook (see `scripts/wordpress-blog-revalidate-hook.php` in this repo)

---

## Environment variables

```env
WORDPRESS_GRAPHQL_URL=https://your-wordpress.com/graphql
NEXT_PUBLIC_SITE_URL=https://yoursite.com
REVALIDATE_BLOG_SECRET=some-secret-string   # optional, for webhooks
```

---

## Build order (step by step)

```
Step 1: wordpress/graphql.ts     → test: can you fetch one post?
Step 2: page-header.ts           → test: does header string look right?
Step 3: generate-blog-md.ts      → test: pass one post object, log markdown
Step 4: get-blog-md-content.ts   → test: call with "blog" and "blog/slug"
Step 5: api/agent-md/route.ts    → test: open /api/agent-md/blog/slug in browser
Step 6: middleware.ts            → test: open /blog/slug.md
Step 7: revalidate route         → test: publish post in WP, cache clears
```

---

## Quick test commands

```bash
# Single post markdown
curl -s https://yoursite.com/api/agent-md/blog/your-slug

# Blog listing
curl -s https://yoursite.com/api/agent-md/blog

# Pretty URL (if middleware added)
curl -s https://yoursite.com/blog/your-slug.md
```

You should see plain markdown, not HTML.

---

## Blog vs static pages (don’t mix them up)

| | Static pages (`/about`) | Blog (`/blog/slug`) |
|--|-------------------------|---------------------|
| **Source** | Your code / JSON file | WordPress |
| **When built** | At `npm run build` | On each request (cached 60s) |
| **Storage** | `agent-md-pages.json` | None |
| **Main file** | `agent-md-pages.ts` | `generate-blog-md.ts` |

On a new site, if you **only** need blog markdown, implement files **1–6** (+ middleware). Skip the sync script and JSON entirely.

---

## Copy checklist from this repo

```
src/lib/wordpress/graphql.ts          → adapt queries & env
src/lib/wordpress/fetch.ts            → adapt host (or replace with fetch)
src/lib/agent-md/page-header.ts       → adapt company info
src/lib/agent-md/generate-blog-md.ts  → adapt categories, FAQ fields
src/lib/agent-md/get-blog-md-content.ts → usually copy as-is
src/app/api/agent-md/[[...segments]]/route.ts → copy, simplify if blog-only
src/middleware.ts                     → copy rewrite logic
src/app/api/revalidate/blog/route.ts  → optional
```

---

## Reference in this repo

| Topic | File |
|-------|------|
| Full agent discovery + static MD | `docs/agent-discovery-and-markdown.md` |
| Live blog MD (this guide) | `src/lib/agent-md/generate-blog-md.ts` |
| Static pages JSON (not blog) | `src/data/agent-md-pages.json` |

---

## One-sentence summary

**WordPress gives HTML → `generate-blog-md.ts` converts it → `get-blog-md-content.ts` picks the right post → API route serves it → middleware makes `.md` URLs work.**
