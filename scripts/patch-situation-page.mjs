/**
 * Merge page-specific section content into situation-content-data.json
 * Usage: node scripts/patch-situation-page.mjs <slug|all>
 */
import fs from "fs";
import path from "path";
import { WATER_DAMAGE_CONTENT } from "./situation-content/water-damage.mjs";
import { DIVORCE_CONTENT } from "./situation-content/divorce.mjs";
import { TENANTS_CONTENT } from "./situation-content/tenants.mjs";
import { LIEN_CONTENT } from "./situation-content/lien.mjs";
import { STORM_DAMAGE_CONTENT } from "./situation-content/storm-damage.mjs";
import { SELL_AS_IS_CONTENT, SELL_AS_IS_PAGE } from "./situation-content/sell-as-is.mjs";
import { AS_IS_FLORIDA_CONTENT } from "./situation-content/as-is-florida.mjs";
import { CASH_HOME_BUYERS_CONTENT } from "./situation-content/cash-home-buyers.mjs";
import { FORECLOSURE_CONTENT } from "./situation-content/foreclosure.mjs";
import { INHERITED_CONTENT } from "./situation-content/inherited.mjs";
import { FIRE_DAMAGE_CONTENT } from "./situation-content/fire-damage.mjs";
import { CONDEMNED_CONTENT, CONDEMNED_PAGE } from "./situation-content/condemned.mjs";
import { MEDICAL_EMERGENCY_CONTENT, MEDICAL_EMERGENCY_PAGE } from "./situation-content/medical-emergency.mjs";
import { HOARDER_HOUSE_CONTENT, HOARDER_HOUSE_PAGE } from "./situation-content/hoarder-house.mjs";
import { REVERSE_MORTGAGE_CONTENT, REVERSE_MORTGAGE_PAGE } from "./situation-content/reverse-mortgage.mjs";

const PATCHES = {
  foreclosure: FORECLOSURE_CONTENT,
  inherited: INHERITED_CONTENT,
  "water-damage": WATER_DAMAGE_CONTENT,
  divorce: DIVORCE_CONTENT,
  tenants: TENANTS_CONTENT,
  lien: LIEN_CONTENT,
  "storm-damage": STORM_DAMAGE_CONTENT,
  "sell-as-is": SELL_AS_IS_CONTENT,
  "as-is-florida": AS_IS_FLORIDA_CONTENT,
  "cash-home-buyers": CASH_HOME_BUYERS_CONTENT,
  "fire-damage": FIRE_DAMAGE_CONTENT,
  condemned: CONDEMNED_CONTENT,
  "medical-emergency": MEDICAL_EMERGENCY_CONTENT,
  "hoarder-house": HOARDER_HOUSE_CONTENT,
  "reverse-mortgage": REVERSE_MORTGAGE_CONTENT,
};

const NEW_PAGES = {
  "sell-as-is": SELL_AS_IS_PAGE,
  condemned: CONDEMNED_PAGE,
  "medical-emergency": MEDICAL_EMERGENCY_PAGE,
  "hoarder-house": HOARDER_HOUSE_PAGE,
  "reverse-mortgage": REVERSE_MORTGAGE_PAGE,
};

const STRAY_KEYS = [
  "situations", "testimonials", "market", "guarantee", "infoBlocks", "diff", "whyUs",
  "comparison", "courtProcess", "prose", "cards", "payoff", "tenantRights", "caseStudies",
  "insurance", "environmental", "prosCons", "trust", "empathy",
  "buyProcess", "probate", "tax", "valuation",
  "process", "cards", "floodLaw", "stages", "obligations", "tenantMarket", "femaInsurance",
];

function mergeSection(existing, incoming) {
  if (!incoming) return existing;
  if (!existing) return incoming;
  if (typeof incoming !== "object" || Array.isArray(incoming)) return incoming;
  const merged = { ...existing, ...incoming };
  if (incoming.faq === undefined && existing.items && !incoming.items) {
    merged.items = existing.items;
  }
  if (Array.isArray(incoming.items)) merged.items = incoming.items;
  if (Array.isArray(incoming.steps)) merged.steps = incoming.steps;
  if (Array.isArray(incoming.paragraphs)) merged.paragraphs = incoming.paragraphs;
  if (incoming.layout === undefined && "layout" in merged) delete merged.layout;
  return merged;
}

function stripLegacyAreaCityList(page) {
  if (!page.areas || !("areas" in page.areas)) return page;
  const { areas: _legacyList, ...areasSection } = page.areas;
  return { ...page, areas: areasSection };
}

function applyPatch(page, patch) {
  const next = { ...page };
  for (const [key, value] of Object.entries(patch)) {
    if (key === "hero") {
      next.hero = { ...next.hero, ...value };
    } else if (key === "sectionOrder") {
      next.sectionOrder = value;
    } else if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      next[key] = mergeSection(next[key], value);
    } else {
      next[key] = value;
    }
  }

  if (patch.faq && !patch.faq.items && next.faq?.items) {
    next.faq = { ...next.faq, ...patch.faq, items: next.faq.items };
  }

  const order = next.sectionOrder ?? [];
  for (const key of STRAY_KEYS) {
    if (!order.includes(key)) delete next[key];
  }
  if (!("testimonials" in patch)) delete next.testimonials;
  if (next.process?.keySteps && next.hero) {
    const { keySteps: _removed, ...heroRest } = next.hero;
    next.hero = heroRest;
  }
  return next;
}

const arg = process.argv[2];
if (!arg) {
  console.error("Usage: node scripts/patch-situation-page.mjs <slug|all>");
  console.error("Available:", Object.keys(PATCHES).join(", "));
  process.exit(1);
}

const slugs = arg === "all" ? Object.keys(PATCHES) : [arg];
for (const slug of slugs) {
  if (!PATCHES[slug]) {
    console.error("Unknown slug:", slug);
    process.exit(1);
  }
}

const dataPath = path.join(process.cwd(), "src", "lib", "situation-content-data.json");
const pages = JSON.parse(fs.readFileSync(dataPath, "utf8"));

for (const slug of slugs) {
  const idx = pages.findIndex((p) => p.slug === slug);
  if (idx < 0) {
    if (NEW_PAGES[slug]) {
      pages.push(NEW_PAGES[slug]);
      console.log("Added", slug, "— sections:", NEW_PAGES[slug].sectionOrder.join(", "));
      continue;
    }
    console.error("Slug not found:", slug);
    process.exit(1);
  }
  pages[idx] = applyPatch(pages[idx], PATCHES[slug]);
  console.log("Patched", slug, "— sections:", pages[idx].sectionOrder.join(", "));
}

for (let i = 0; i < pages.length; i++) {
  pages[i] = stripLegacyAreaCityList(pages[i]);
}

fs.writeFileSync(dataPath, JSON.stringify(pages, null, 2));
console.log("Wrote", dataPath);
