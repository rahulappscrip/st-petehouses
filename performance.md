# Mobile Performance — Improvement Plan

**Current state:** Desktop scores well; mobile Lighthouse ~74. Target: **85+**.

Mobile lags mainly due to **render-blocking resources** and **oversized assets** — not because the JS bundle is huge (102 KB shared is reasonable).

---

## High impact (do these first)

### 1. Fix Google Fonts loading (~750ms in Lighthouse)

Fonts load via `@import` in `globals.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap");
```

That is the slowest pattern: render-blocking CSS → another CSS request → multiple font files.

**Better approach:**

- **Self-host** Inter + DM Serif (download `.woff2` once, serve from `/public/fonts`)
- Or use `next/font/local` (avoids build-time Google fetch; local files solve the SSL/network issue that led to skipping `next/font/google`)
- Drop unused weights: likely only need **Inter 400, 500, 700, 800** (not 300/600)
- DM Serif is only used in `<em>` — load with `font-display: swap` and optionally defer

**Expected gain:** +5–10 mobile points

---

### 2. Split CSS by route (~42 KB blocking bundle)

`globals.css` imports **all 28 stylesheets** on every page — blog, situation, divorce, inherited, etc. Even the homepage loads CSS for pages it never renders (~266 KB source → 42 KB gzipped).

**Better approach:**

- Keep only **global/base** styles in `globals.css` (layout, header, footer, typography, form)
- Import page-specific CSS in each route’s layout/page (`situation-page.css` only on `/situations/*`, `blog.css` only on `/blog/*`, etc.)

**Expected gain:** +3–8 points (less parse time on slow mobile CPUs)

---

### 3. Optimize the logo (264 KB → ~5–10 KB)

Header logo is **2048×1822 / 264 KB** but displays at **44×44px** in `BrandLogo.tsx`. This loads on **every page** and hurts mobile LCP/FCP.

**Fix:** Export a 88×88 or 128×128 WebP/PNG (~5–10 KB), use `next/image` with fixed dimensions.

**Expected gain:** +3–5 points

---

## Medium impact

### 4. Hero portrait image (120 KB LCP candidate)

`john-gardepe.webp` is 894×1302 / 120 KB with `fetchPriority="high"` but plain `<img>` — no responsive sizes.

On mobile the hero is single-column; **H1 text** is likely LCP, but the portrait still competes for bandwidth.

**Fix:**

- Use `next/image` with `sizes="(max-width: 768px) 280px, 400px"`
- Provide a smaller mobile variant (~40–60 KB)
- Preload only on pages where portrait is above the fold

---

### 5. Reduce client JS on above-the-fold content

`HeroSection` is `"use client"` because of `Reveal` + `LeadOfferForm`. That forces hydration before the hero is fully interactive.

**Fix:**

- Split hero: server-render H1 + subheadline (no `Reveal` on LCP elements)
- Keep only `LeadOfferForm` as client component
- Same for city/situation hero sections

**Expected gain:** +2–4 points (better TBT/INP on mobile)

---

### 6. BBB badge oversized

Form loads `bbb-client.webp` at **2000×751** but displays tiny. Resize to display dimensions (~200px wide).

---

## Lower impact (still worth doing)

### 7. Legacy JavaScript polyfills (~12 KB)

Next.js ships polyfills for `Array.at`, `Object.hasOwn`, etc. Add a modern browserslist:

```json
"browserslist": ["chrome >= 90", "firefox >= 90", "safari >= 14", "ios >= 14"]
```

Small win, easy fix.

---

### 8. Header is a heavy client component

`Header.tsx` is ~400 lines with portal, dropdown state, mobile menu. It’s on every page.

**Consider:**

- Server-render static nav links
- Lazy-load mobile menu JS on first tap/hamburger click

---

### 9. Preconnect hints (if keeping Google Fonts temporarily)

Add to `layout.tsx`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
```

Band-aid only — self-hosting is the real fix.

---

## What’s already fine

- No GTM/analytics scripts blocking render
- Reveal animations don’t hide content before paint (good)
- Shared JS at 102 KB is not the main problem
- `display=swap` is already on Google Fonts URL
- Homepage is statically generated with ISR on reviews

---

## Realistic path to 85+

| Priority | Change | Effort |
|----------|--------|--------|
| 1 | Self-host fonts + trim weights | Medium |
| 2 | Split CSS by route | Medium |
| 3 | Resize logo + BBB badge | Low |
| 4 | `next/image` + responsive hero portrait | Low |
| 5 | Server-render hero headline | Medium |
| 6 | Modern browserslist | Low |

Items **1 + 2 + 3 alone** should push into the **80–85 range**. Adding **4 + 5** should reliably hit **85+**.

---

## Bottom line

Mobile is slower because every page waits on **Google Fonts + a fat global CSS file + a 264 KB logo** before painting. Desktop hides this with faster CPU/network; mobile doesn’t.

**Recommended first batch:** fonts + CSS split + logo optimization (highest ROI).

---

## Key files

- `src/app/globals.css` — monolithic CSS + Google Fonts `@import`
- `src/app/layout.tsx` — root layout, no preconnect hints
- `src/components/ui/BrandLogo.tsx` — oversized logo
- `src/components/home/HeroSection.tsx` — client hero + portrait `<img>`
- `src/components/shared/LeadOfferForm.tsx` — BBB badge image
- `src/lib/fonts.ts` — placeholder (fonts loaded via CSS `@import`)
