/**
 * Extracts hero/meta/FAQ from situation HTML mockups for content authoring.
 * Run: node scripts/extract-situation-html.mjs
 */
import fs from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "situations-pages");

const SLUG_TO_FILE = {
  foreclosure: "stop-foreclosure-st-petersburg.html",
  inherited: "sell-inherited-house-st-petersburg.html",
  divorce: "sell-house-during-divorce-florida.html",
  tenants: "sell-rental-property-with-tenants-florida.html",
  lien: "sell-house-with-lien-florida.html",
  "water-damage": "sell-flooded-house-st-petersburg.html",
  "fire-damage": "sell-fire-damaged-house-st-petersburg.html",
  "storm-damage": "sell-storm-damaged-house-florida.html",
  "sell-as-is": "sell-my-house-as-is-st-petersburg.html",
  "as-is-florida": "sell-house-as-is-florida.html",
  "cash-home-buyers": "cash-home-buyers-st-petersburg.html",
};

function stripTags(s) {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstMatch(html, re) {
  const m = html.match(re);
  return m ? stripTags(m[1]) : "";
}

function extractFaqs(html) {
  const items = [];
  let m;

  const patterns = [
    /<button class="faq-question"[^>]*>([\s\S]*?)<div class="faq-icon">[\s\S]*?<\/button>\s*<div class="faq-answer">[\s\S]*?<div class="faq-answer-inner">([\s\S]*?)<\/div>/g,
    /<button class="faq-question"[^>]*>([\s\S]*?)<span class="faq-toggle">[\s\S]*?<\/button>\s*<div class="faq-answer[^"]*">([\s\S]*?)<\/div>/g,
    /<div class="faq-question"[^>]*>([\s\S]*?)<span class="faq-icon">[\s\S]*?<\/div>\s*<div class="faq-answer">([\s\S]*?)<\/div>/g,
    /<button class="faq-q"[^>]*>([\s\S]*?)<\/button>[\s\S]*?<div class="faq-a-inner">([\s\S]*?)<\/div>/g,
    /<div class="faq-q">([\s\S]*?)<\/div>[\s\S]*?<div class="faq-a-inner">([\s\S]*?)<\/div>/g,
  ];

  for (const re of patterns) {
    while ((m = re.exec(html))) {
      const q = stripTags(m[1]);
      const a = stripTags(m[2]);
      if (q && a && !items.some((i) => i.q === q)) items.push({ q, a });
    }
    if (items.length) return items;
  }
  return items;
}

const out = {};
for (const [slug, file] of Object.entries(SLUG_TO_FILE)) {
  const html = fs.readFileSync(path.join(DIR, file), "utf8");
  const bodyStart = html.indexOf("<!-- HERO");
  const body = bodyStart >= 0 ? html.slice(bodyStart) : html;

  out[slug] = {
    metaTitle: firstMatch(html, /<title>([^<]+)<\/title>/i),
    metaDescription: firstMatch(html, /<meta name="description" content="([^"]+)"/i),
    eyebrow: firstMatch(body, /<p class="hero-eyebrow">([\s\S]*?)<\/p>/i),
    h1: firstMatch(body, /<h1>([\s\S]*?)<\/h1>/i),
    heroBody:
      firstMatch(body, /<p class="hero-body">([\s\S]*?)<\/p>/i) ||
      firstMatch(body, /<p class="hero-desc">([\s\S]*?)<\/p>/i),
    formTitle: firstMatch(body, /<h3>([^<]*(?:home|property|Tell)[^<]*)<\/h3>/i),
    faqCount: extractFaqs(html).length,
    faqs: extractFaqs(html),
  };
}

const outPath = path.join(process.cwd(), "scripts", "situation-extract.json");
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log("Wrote", outPath);
for (const [slug, d] of Object.entries(out)) {
  console.log(slug, "—", d.faqCount, "FAQs,", d.h1.slice(0, 50));
}
