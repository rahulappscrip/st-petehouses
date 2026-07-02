# Agent Discovery & Markdown — Implementation Guide

**Stack:** Next.js 15 App Router  
**Goal:** Let AI agents discover and read your site content.

---

## What We Implement

Two features:

| Feature | What it does |
|---|---|
| **Agent Discovery** | Publishes JSON catalogs so AI systems find your APIs, MCP server, and docs |
| **Markdown Pages** | Serves any page as `text/markdown` for AI consumption |

### Endpoints to build

| URL | Purpose |
|---|---|
| `/.well-known/ai-catalog.json` | Master index of all AI resources |
| `/.well-known/api-catalog` | List of HTTP APIs (RFC 9727) |
| `/.well-known/mcp/server-card.json` | MCP server description |
| `/.well-known/openapi/*.json` | OpenAPI spec per API |
| `/llms.txt` | Plain-text site index for AI |
| `/api/mcp` | MCP JSON-RPC handler |
| `/api/health` | Health check for API catalog |
| `/api/agent-md/{path}` | Returns page content as markdown |

### How agents access content

```
/contact.md                          → markdown
/contact  (Accept: text/markdown)    → markdown
/api/agent-md/contact                → markdown
MCP tool get_page_markdown           → markdown
```

---

## Implementation Steps

### Step 1 — Site origin helper

Create `src/lib/site-url.ts` so all discovery URLs use the correct domain across environments.

```typescript
export function getSiteOrigin(): string {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")
    ?? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    ?? "https://yourdomain.com";
}
```

Set `NEXT_PUBLIC_SITE_URL` in production.

---

### Step 2 — Agent discovery builders

Create `src/lib/agent-discovery/` with one builder per catalog:

| File | Exports | Lists |
|---|---|---|
| `ai-catalog.ts` | `buildAiCatalog()` | MCP card, API catalog, OpenAPI specs, llms.txt |
| `api-catalog.ts` | `buildApiCatalog()` | Each HTTP API + its OpenAPI spec + health URL |
| `mcp-server-card.ts` | `buildMcpServerCard()` | Server info, transport endpoint, tools |
| `link-headers.ts` | `buildHomepageLinkHeader()` | Comma-joined `Link` header for homepage |
| `openapi/agent-md.ts` | `buildAgentMdOpenApi()` | OpenAPI 3.1 for markdown API |
| `openapi/places-autocomplete.ts` | `buildPlacesAutocompleteOpenApi()` | OpenAPI for other APIs |

All builders call `getSiteOrigin()` for absolute URLs.

---

### Step 3 — `.well-known` routes

Create thin route handlers that call the builders:

```
src/app/.well-known/
  ai-catalog.json/route.ts       → application/ai-catalog+json
  api-catalog/route.ts           → application/linkset+json
  mcp/server-card.json/route.ts  → application/json
  openapi/agent-md.json/route.ts → application/json
```

Each route: `GET` returns `Response.json(builder())` with CORS headers and 1-hour cache.

---

### Step 4 — Homepage Link headers

In `next.config.ts`, add a `Link` header on `/`:

```typescript
import { buildHomepageLinkHeader } from "./src/lib/agent-discovery/link-headers";

headers: [{ source: "/", headers: [{ key: "Link", value: buildHomepageLinkHeader() }] }]
```

This advertises `ai-catalog`, `api-catalog`, MCP card, and `llms.txt` to crawlers.

---

### Step 5 — Health endpoint

Create `src/app/api/health/route.ts`:

```json
{ "status": "ok", "service": "yourdomain.com" }
```

Referenced by the API catalog as the status link for each API.

---

### Step 6 — llms.txt

Create `public/llms.txt` — a static plain-text file with:

- Business description and contact info
- Links to key pages
- Note that `.md` URLs are available for AI systems

---

### Step 7 — Markdown content (static pages)

**Build-time sync** for pages that don't change often:

1. Write page content in `webuystpetehouses-md-pages.md` (one section per route)
2. Run `scripts/sync-agent-md-pages.mjs` at build time → outputs `src/data/agent-md-pages.json`
3. Create `src/lib/agent-md-pages.ts` to look up content by key (`contact`, `index`, etc.)

Hook sync into `package.json`:

```json
"build": "node scripts/sync-agent-md-pages.mjs && next build"
```

FAQ and situation pages can be auto-generated from existing TS/JSON content files during sync.

---

### Step 8 — Markdown API route

Create `src/app/api/agent-md/[[...segments]]/route.ts`:

```
GET /api/agent-md           → key "index"
GET /api/agent-md/contact   → key "contact"
```

- Static pages → read from `agent-md-pages.json`
- Blog pages → fetch from CMS at request time (see Step 9)
- Return `Content-Type: text/markdown` with `X-Robots-Tag: noindex, nofollow`

---

### Step 9 — Blog markdown (CMS at request time)

For dynamic content (blog posts), generate markdown on each request:

1. `src/lib/wordpress/graphql.ts` — fetch posts from WordPress GraphQL (or Strapi REST)
2. `src/lib/agent-md/generate-blog-md.ts` — convert HTML → markdown
3. `src/lib/agent-md/get-blog-md-content.ts` — route `blog` and `blog/{slug}` keys

Blog content is **not** stored in `agent-md-pages.json` — always fetched live with 60s cache.

---

### Step 10 — Middleware for `.md` URLs

Create `src/middleware.ts` to rewrite:

- `/contact.md` → `/api/agent-md/contact`
- Any page with `Accept: text/markdown` → `/api/agent-md/{path}`

Skip rewriting for `/api/*` and `/.well-known/*`.

Add to `next.config.ts`:

```typescript
{ source: "/:path*.md", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }
```

---

### Step 11 — MCP handler

Create `src/app/api/mcp/route.ts` with JSON-RPC support:

| Method | Action |
|---|---|
| `initialize` | Return server info and capabilities |
| `tools/list` | Return available tools |
| `tools/call` | Execute a tool |

**Tools to implement:**

| Tool | Does |
|---|---|
| `get_page_markdown` | Same as `/api/agent-md/{path}` |
| `get_site_index` | Returns `public/llms.txt` contents |

Point `mcp-server-card.ts` transport endpoint to `/api/mcp`.

---

## Content Sources (this project)

| Content | Source | When |
|---|---|---|
| Homepage, city pages | `webuystpetehouses-md-pages.md` | Build time |
| FAQ, situations | TS/JSON content files | Build time (auto-generated) |
| Blog | WordPress GraphQL | Request time |
| llms.txt | `public/llms.txt` | Static file |

---

## Adapting for Another Project / CMS

### Agent discovery
Copy Steps 1–6 and 11 as-is. Update:
- `host.displayName` and URN prefixes in `ai-catalog.ts`
- Which APIs appear in catalogs
- MCP tool names

### Markdown — pick a strategy

| Strategy | When to use | How |
|---|---|---|
| **Build-time JSON** | Static/marketing pages | CMS export → sync script → `agent-md-pages.json` |
| **Request-time fetch** | Blog, frequently updated content | CMS API → `generateXxxMd()` → response |
| **Full CMS** | All pages in headless CMS | Replace WordPress fetch with Strapi/Contentful client |

**For Strapi:** Replace `src/lib/wordpress/graphql.ts` with Strapi REST/GraphQL fetch. Mirror `get-blog-md-content.ts` pattern. Add webhook at `/api/revalidate/blog` to bust cache on publish.

---

## Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for discovery URLs |
| `WORDPRESS_GRAPHQL_URL` | Blog CMS endpoint (optional) |
| `REVALIDATE_BLOG_SECRET` | Webhook auth for cache bust |
| `STRAPI_API_URL` / `STRAPI_API_TOKEN` | If using Strapi instead of WordPress |

---

## Verify It Works

```bash
# Discovery
curl -I https://yourdomain.com/                              # Link header present
curl https://yourdomain.com/.well-known/ai-catalog.json      # 200 JSON
curl https://yourdomain.com/.well-known/api-catalog          # 200 linkset
curl https://yourdomain.com/.well-known/mcp/server-card.json # 200 MCP card
curl https://yourdomain.com/api/health                       # { "status": "ok" }
curl https://yourdomain.com/llms.txt                         # plain text

# Markdown
curl https://yourdomain.com/api/agent-md/contact             # markdown
curl https://yourdomain.com/contact.md                       # same markdown
curl -H "Accept: text/markdown" https://yourdomain.com/contact  # same markdown
```

---

## File Checklist

```
src/lib/
  site-url.ts
  agent-discovery/
    ai-catalog.ts
    api-catalog.ts
    mcp-server-card.ts
    link-headers.ts
    openapi/agent-md.ts
    openapi/places-autocomplete.ts
  agent-md-pages.ts
  agent-md/
    get-blog-md-content.ts
    generate-blog-md.ts
    page-header.ts
  wordpress/graphql.ts          # or strapi/fetch.ts

src/app/
  .well-known/
    ai-catalog.json/route.ts
    api-catalog/route.ts
    mcp/server-card.json/route.ts
    openapi/agent-md.json/route.ts
  api/
    agent-md/[[...segments]]/route.ts
    mcp/route.ts
    health/route.ts

src/middleware.ts
public/llms.txt
scripts/sync-agent-md-pages.mjs
next.config.ts                  # Link headers + .md noindex
```
