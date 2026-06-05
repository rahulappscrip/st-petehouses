/**
 * Generates src/lib/situation-content.ts from scripts/situation-extract.json
 * Run: node scripts/extract-situation-html.mjs && node scripts/generate-situation-content.mjs
 */
import fs from "fs";
import path from "path";
import { FORECLOSURE_CONTENT } from "./situation-content/foreclosure.mjs";
import { INHERITED_CONTENT } from "./situation-content/inherited.mjs";
import { WATER_DAMAGE_CONTENT } from "./situation-content/water-damage.mjs";
import { DIVORCE_CONTENT } from "./situation-content/divorce.mjs";
import { TENANTS_CONTENT } from "./situation-content/tenants.mjs";
import { LIEN_CONTENT } from "./situation-content/lien.mjs";
import { STORM_DAMAGE_CONTENT } from "./situation-content/storm-damage.mjs";
import { SELL_AS_IS_CONTENT } from "./situation-content/sell-as-is.mjs";
import { AS_IS_FLORIDA_CONTENT } from "./situation-content/as-is-florida.mjs";
import { CASH_HOME_BUYERS_CONTENT } from "./situation-content/cash-home-buyers.mjs";

const extract = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "scripts", "situation-extract.json"), "utf8"),
);

const DEFAULT_STATS = [
  { value: "24", suffix: "hrs", label: "Cash offer in your hands" },
  { value: "7", suffix: "days", label: "Fastest close possible" },
  { prefix: "$", value: "0", label: "Fees or commissions" },
  { value: "500", suffix: "+", label: "Homes bought across St Pete" },
];

const DEFAULT_PROCESS_STEPS = [
  { num: "01", title: "Tell us about the home", body: "Share your property details via our form or by phone. We listen to your specific situation first." },
  { num: "02", title: "We visit, in person", body: "A local team member schedules a walkthrough at a time that's convenient for you. No hassle." },
  { num: "03", title: "Receive a written offer", body: "We present a fair, no-obligation cash offer with transparent terms — no hidden fees, ever." },
  { num: "04", title: "Close on your timeline", body: "You choose the closing date. We handle the paperwork. You get cash at closing." },
];

const SLUG_META = {
  foreclosure: {
    label: "Foreclosure",
    breadcrumb: "Stop foreclosure",
    sectionOrder: FORECLOSURE_CONTENT.sectionOrder,
  },
  inherited: {
    label: "Inherited house",
    breadcrumb: "Inherited property",
    sectionOrder: INHERITED_CONTENT.sectionOrder,
  },
  divorce: {
    label: "Divorce",
    breadcrumb: "Divorce home sale",
    sectionOrder: DIVORCE_CONTENT.sectionOrder,
  },
  tenants: { label: "House with tenants", breadcrumb: "Rental with tenants", sectionOrder: ["stats","prose","tenantRights","obligations","cards","market","caseStudies","whyUs","resources","areas","faq","finalCta"] },
  lien: { label: "House with a lien", breadcrumb: "Sell with a lien", sectionOrder: ["stats","cards","process","situations","payoff","whyUs","areas","resources","faq","finalCta"] },
  "water-damage": { label: "Water / flood damage", breadcrumb: "Flooded home", sectionOrder: ["stats","prose","process","cards","comparison","diff","whyUs","areas","resources","faq","finalCta"] },
  "fire-damage": { label: "Fire damage", breadcrumb: "Fire-damaged home", sectionOrder: ["stats","prose","process","cards","situations","whyUs","areas","resources","faq","finalCta"] },
  "storm-damage": { label: "Storm damage", breadcrumb: "Storm-damaged home", sectionOrder: ["stats","cards","process","comparison","insurance","environmental","caseStudies","resources","areas","whyUs","faq","finalCta"] },
  "sell-as-is": {
    label: "Sell as-is",
    breadcrumb: "Sell as-is St Petersburg",
    sectionOrder: [
      "stats", "process", "prosCons", "whyUs", "trust", "areas", "resources", "faq", "finalCta",
    ],
  },
  "as-is-florida": {
    label: "Sell as-is Florida",
    breadcrumb: "Sell as-is Florida",
    sectionOrder: [
      "stats", "prose", "environmental", "comparison", "prosCons", "process", "market", "cards",
      "areas", "resources", "faq", "finalCta",
    ],
  },
  "cash-home-buyers": {
    label: "Cash home buyers",
    breadcrumb: "Cash home buyers",
    sectionOrder: [
      "stats", "prose", "process", "comparison", "areas", "cards", "testimonials", "market",
      "guarantee", "resources", "faq", "finalCta",
    ],
  },
};

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function titlePartsFromH1(h1) {
  const clean = h1.replace(/\.$/, "");
  const patterns = [
    /^(Stop Foreclosure in)\s+(St\.?\s*Petersburg)\s+(with a Fast, Fair Cash Offer)$/i,
    /^(Sell your)\s+(inherited house)\s+(in St Petersburg for cash)$/i,
    /^(Sell Your House During)\s+(Divorce)\s+(in Florida: Fast, Fair Cash Offers)$/i,
    /^(Sell Your Rental Property with)\s+(Tenants in Place)\s+(in Florida)$/i,
    /^(Sell Your Florida House with a)\s+(Lien)\s+(— Fast Cash Offers)$/i,
    /^(Sell Your Flooded House in)\s+(St Petersburg)\s+(for Cash)$/i,
    /^(Sell Your Fire-Damaged House in)\s+(St Petersburg)\s+(for Cash)$/i,
    /^(Sell Your Storm Damaged House in)\s+(Florida)\s+(for Cash)$/i,
    /^(Sell my house)\s+(as is)\s+(in St Petersburg for cash)$/i,
    /^(Sell Your House)\s+(As Is)\s+(in Florida for Cash)$/i,
    /^(Cash home buyers in)\s+(St\.?\s*Petersburg)\s+(— fast, fair offers with no fees)$/i,
  ];
  for (const re of patterns) {
    const m = clean.match(re);
    if (m) return { lead: m[1] + " ", em: m[2], tail: (m[3] ? " " + m[3] : "") + (h1.endsWith(".") ? "." : "") };
  }
  if (clean.includes(" in ")) {
    const idx = clean.lastIndexOf(" in ");
    const lead = clean.slice(0, idx + 4);
    const rest = clean.slice(idx + 4);
    const words = rest.split(" ");
    const em = words.slice(0, 2).join(" ");
    const tail = words.length > 2 ? " " + words.slice(2).join(" ") : "";
    return { lead, em, tail: tail + (h1.endsWith(".") ? "." : "") };
  }
  return { lead: h1, em: "", tail: "" };
}

function buildPage(slug, data) {
  const meta = SLUG_META[slug];
  const tp = titlePartsFromH1(data.h1);

  // FAQ heading uses the "em" portion only; most slugs default to "selling for cash".
  // Foreclosure is a dedicated copy block targeting "stopping foreclosure".
  let faqTitleEm;
  if (slug.includes("foreclosure")) faqTitleEm = "stopping foreclosure";
  else if (slug.includes("as-is")) faqTitleEm = "selling as-is";
  else faqTitleEm = "selling for cash";
  const faqTail = slug.includes("florida") && !slug.includes("st-pete") ? " in Florida." : " in St Petersburg.";

  const page = {
    slug,
    label: meta.label,
    breadcrumb: meta.breadcrumb,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    hero: {
      eyebrow: data.eyebrow,
      titleLead: tp.lead,
      titleEm: tp.em,
      titleTail: tp.tail,
      subheadline: data.heroBody,
      formTitle: data.formTitle || "Tell us about your home.",
      formIntro: "A local team of specialists — buying homes across Pinellas County at fair prices. No agents, no repairs, no surprises.",
    },
    stats: DEFAULT_STATS,
    sectionOrder: meta.sectionOrder,
    process: {
      eyebrow: "How It Works",
      titleLead: "How our ",
      titleEm: "cash offer",
      titleTail: " process works.",
      lede: "Our quick steps: No bidding wars, no repair headaches, no complex listings — certain results you can count on.",
      steps: DEFAULT_PROCESS_STEPS,
    },
    areas: {
      eyebrow: "Service Area",
      titleLead: "Across ",
      titleEm: "St. Petersburg",
      titleTail: " and Tampa Bay.",
      lede: "We focus on the neighborhoods we know personally — streets we've bought houses on for over a decade.",
    },
    faq: {
      eyebrow: "Common Questions",
      titleLead: "Frequently asked questions about ",
      titleEm: faqTitleEm,
      titleTail: faqTail,
      items: data.faqs,
    },
    finalCta: {
      eyebrow: "Ready to sell?",
      titleLead: "Get your ",
      titleEm: "no-obligation",
      titleTail: " cash offer today.",
      description: data.heroBody,
    },
  };

  const PAGE_EXTRAS = {
    foreclosure: FORECLOSURE_CONTENT,
    "fire-damage": FIRE_EXTRA,
    "water-damage": WATER_DAMAGE_CONTENT,
    inherited: INHERITED_CONTENT,
    divorce: DIVORCE_CONTENT,
    tenants: TENANTS_CONTENT,
    lien: LIEN_CONTENT,
    "storm-damage": STORM_DAMAGE_CONTENT,
    "sell-as-is": SELL_AS_IS_CONTENT,
    "as-is-florida": AS_IS_FLORIDA_CONTENT,
    "cash-home-buyers": CASH_HOME_BUYERS_CONTENT,
  };
  if (PAGE_EXTRAS[slug]) applyPageExtras(page, PAGE_EXTRAS[slug]);

  return page;
}

/** Merge section extras without replacing the full hero built from HTML extract. */
function applyPageExtras(page, extras) {
  const { hero: heroExtra, ...rest } = extras;
  Object.assign(page, rest);
  if (heroExtra) {
    page.hero = { ...page.hero, ...heroExtra };
  }
}

const FIRE_EXTRA = {
  hero: {
    checklist: [
      "Cash offer within 24 hours",
      "Sell as-is — no repairs, no cleanup",
      "Close in as little as 7 days",
      "No agent fees or commissions",
      "Local St Pete team — one call away",
    ],
    formTitle: "Get a local cash offer today.",
    formIntro: "Tell us about your fire-damaged St Petersburg home. We'll have a no-obligation offer in your hands within 24 hours.",
  },
  prose: {
    eyebrow: "Local Cash Offer — St Pete",
    titleLead: "Get a Local Cash Offer for Your ",
    titleEm: "Fire-Damaged Home",
    titleTail: " Today",
    lede: "Whether you're overwhelmed by repair costs or simply want a simple, certain path forward, we're ready to make you a fair, no-obligation cash offer for your fire-damaged St Petersburg property.",
    paragraphs: [
      "Fire damage doesn't have to mean months of contractor negotiations, insurance disputes, and listing uncertainty. We buy fire-damaged homes across St Petersburg in their current condition — soot, smoke, structural damage and all.",
      "Our process is built for sellers who need to move quickly and don't want the burden of making the property market-ready first. You contact us, we evaluate your home, and we present a fair cash offer within 24 hours. No pressure, no obligation.",
      "Once you accept, you choose your closing date. We can close in as little as 7 days, or give you more time if your situation requires it. We handle all the paperwork and coordinate with a local title company so you don't have to.",
    ],
    sidebar: {
      title: "What Happens When You Contact Us",
      items: [
        { strong: "We gather basic details", text: "— address, damage extent, and your preferred timeline. No formal inspection required in most cases." },
        { strong: "We evaluate your home", text: "— based on current condition, local market data, and comparable sales in St Petersburg." },
        { strong: "You receive a written offer", text: "— fair, transparent, no hidden deductions. No obligation to accept." },
        { strong: "You choose the closing date", text: "— we work on your timeline. As fast as 7 days, or take more time if needed." },
        { strong: "You walk away with cash", text: "— no agent commissions, no repair costs, no carrying costs eating into your proceeds." },
      ],
    },
  },
  cards: {
    eyebrow: "No Repairs Needed",
    titleLead: "Sell As-Is — ",
    titleEm: "No Repairs Required",
    titleTail: "",
    lede: "You don't need to fix fire damage, clean up soot, or pass inspections before selling to us. We buy homes in their current condition and make offers that reflect fair value — no hidden deductions.",
    items: [
      { title: "Structural Damage", body: "Compromised walls, roof damage, or load-bearing issues. We've purchased severely fire-damaged structures across St Pete and Tampa Bay — no condition is too extreme." },
      { title: "Smoke & Soot Damage", body: "Interior smoke damage, soot-covered surfaces, and lingering odor issues. You don't need to clean or remediate before receiving your offer." },
      { title: "Water Damage from Firefighting", body: "Properties often sustain water damage alongside fire damage from firefighting efforts. We factor all of it into our evaluation — one clean offer." },
      { title: "Debris & Cleanup", body: "You don't need to remove debris, haul away damaged materials, or make the property presentable. We buy homes in the exact condition we find them." },
      { title: "Open Insurance Claims", body: "You can sell with an open or pending insurance claim. We'll discuss how your specific situation affects timing and ensure the transaction is handled correctly." },
      { title: "Any Condition — We Buy It", body: "Total loss, partial damage, or smoke-only — we evaluate every St Pete property individually and make a fair offer based on what's actually there." },
    ],
  },
  situations: {
    eyebrow: "All Distressed Situations",
    titleLead: "What We Buy in ",
    titleEm: "St Petersburg",
    titleTail: "",
    lede: "We specialize in situations where traditional buyers walk away. Fire damage is our specialty — but we buy a wide range of distressed properties across St Pete and Tampa Bay.",
    items: [
      { title: "Fire-Damaged Homes", body: "Any extent of fire damage — kitchen fires, partial structural damage, or total loss situations." },
      { title: "Vacant Properties", body: "Empty homes accumulating carrying costs, code violations, or deferred maintenance." },
      { title: "Inherited / Probate Homes", body: "Estate properties with title complications, outstanding liens, or deferred repairs." },
      { title: "Properties with Liens", body: "Tax liens, judgment liens, HOA liens, or mechanic's liens — we work through these as part of the acquisition." },
      { title: "Homes with Problem Tenants", body: "Tenant-occupied properties with non-payment or cooperation issues." },
      { title: "Upside-Down Mortgages", body: "Properties where the loan balance exceeds market value — we evaluate each situation individually." },
    ],
  },
  whyUs: {
    eyebrow: "Why Choose Us",
    titleLead: "Why Choose ",
    titleEm: "We Buy St Pete Houses",
    titleTail: "",
    lede: "Local focus, fast and fair cash offers, no commissions — designed specifically for St Pete homeowners facing difficult property situations.",
    items: [
      { title: "Local St Pete expertise", body: "We know the St Petersburg market, neighborhood property values, and local buyer dynamics." },
      { title: "Fast, fair offers — no waiting", body: "We present a written cash offer within 24 hours and you decide at your own pace." },
      { title: "Zero commissions", body: "No real estate agent fees eating into your proceeds." },
      { title: "Flexible closing timeline", body: "Close in as little as 7 days or take more time if you need it." },
      { title: "Transparent offers", body: "No surprise credits, no hidden repair deductions after acceptance." },
      { title: "Hassle-free from start to finish", body: "We handle the paperwork and coordinate with the title company." },
    ],
    asideTitle: "Ready to move forward?",
    asideBody: "Call or message us now. A local St Pete team member responds within 24 hours with a no-obligation cash offer for your fire-damaged property.",
  },
  resources: {
    eyebrow: "Local Resources",
    titleLead: "Local Resources to ",
    titleEm: "Help Your Sale",
    titleTail: "",
    lede: "When selling a home in St Petersburg, these local agencies can provide documentation, property records, and tax information needed for a smooth closing.",
    items: [
      { tag: "City", title: "St Petersburg City Hall", body: "General city services, property information, building permits, and code compliance." },
      { tag: "County", title: "Pinellas County Government Center", body: "County-level property records and government offices throughout Pinellas County." },
      { tag: "Court Records", title: "Pinellas County Clerk of the Circuit Court & Comptroller", body: "Official property documents, deed recordings, and title-related records." },
      { tag: "Tax", title: "Pinellas County Tax Collector", body: "Property tax records and payment information." },
    ],
  },
  finalCta: {
    titleLead: "Take the first step toward ",
    titleEm: "a stress-free sale.",
    titleTail: "",
    description: "Sell your fire-damaged house in St Petersburg for cash — as-is, no repairs, no commissions. Get a fair, no-obligation offer today.",
  },
};

const pages = Object.keys(SLUG_META).map((slug) => buildPage(slug, extract[slug]));

// Output TypeScript - use JSON embed for data, hero titles as template in separate hand file
// Simpler: write situation-content-data.json and thin TS wrapper

const dataPath = path.join(process.cwd(), "src", "lib", "situation-content-data.json");
fs.writeFileSync(dataPath, JSON.stringify(pages, null, 2));
console.log("Wrote", dataPath, pages.length, "pages");
