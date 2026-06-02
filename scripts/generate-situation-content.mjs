/**
 * Generates src/lib/situation-content.ts from scripts/situation-extract.json
 * Run: node scripts/extract-situation-html.mjs && node scripts/generate-situation-content.mjs
 */
import fs from "fs";
import path from "path";

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

const AREA_LIST = [
  "St Petersburg", "Clearwater", "Gulfport", "Largo", "Pinellas Park",
  "Palm Harbor", "Tampa", "Dunedin", "New Port Richey", "Pasco County",
];

const SLUG_META = {
  foreclosure: { label: "Foreclosure", breadcrumb: "Stop foreclosure", sectionOrder: ["stats","process","areas","testimonials","situations","market","guarantee","comparison","infoBlocks","faq","diff","finalCta"] },
  inherited: { label: "Inherited house", breadcrumb: "Inherited property", sectionOrder: ["stats","process","comparison","cards","areas","resources","faq","finalCta"] },
  divorce: { label: "Divorce", breadcrumb: "Divorce home sale", sectionOrder: ["stats","process","cards","comparison","areas","resources","faq","finalCta"] },
  tenants: { label: "House with tenants", breadcrumb: "Rental with tenants", sectionOrder: ["stats","process","cards","prose","areas","resources","faq","finalCta"] },
  lien: { label: "House with a lien", breadcrumb: "Sell with a lien", sectionOrder: ["stats","process","cards","prose","areas","resources","faq","finalCta"] },
  "water-damage": { label: "Water / flood damage", breadcrumb: "Flooded home", sectionOrder: ["stats","prose","process","cards","comparison","whyUs","areas","resources","faq","finalCta"] },
  "fire-damage": { label: "Fire damage", breadcrumb: "Fire-damaged home", sectionOrder: ["stats","prose","process","cards","situations","whyUs","areas","resources","faq","finalCta"] },
  "storm-damage": { label: "Storm damage", breadcrumb: "Storm-damaged home", sectionOrder: ["stats","process","cards","prose","areas","resources","whyUs","faq","finalCta"] },
  "sell-as-is": { label: "Sell as-is", breadcrumb: "Sell as-is St Petersburg", sectionOrder: ["stats","process","cards","prose","areas","resources","faq","finalCta"] },
  "as-is-florida": { label: "Sell as-is Florida", breadcrumb: "Sell as-is Florida", sectionOrder: ["stats","process","cards","prose","areas","resources","faq","finalCta"] },
  "cash-home-buyers": { label: "Cash home buyers", breadcrumb: "Cash home buyers", sectionOrder: ["stats","process","comparison","areas","testimonials","market","guarantee","resources","faq","finalCta"] },
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

  const faqTitleEm = slug.includes("as-is") ? "selling as-is" : "selling for cash";
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
      areas: AREA_LIST,
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

  if (slug === "foreclosure") applyPageExtras(page, FORECLOSURE_EXTRA);
  if (slug === "fire-damage") applyPageExtras(page, FIRE_EXTRA);
  if (slug === "water-damage") applyPageExtras(page, WATER_EXTRA);
  if (slug === "inherited") applyPageExtras(page, INHERITED_EXTRA);

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

const FORECLOSURE_EXTRA = {
  hero: {
    keySteps: {
      title: "What to Do Right Now",
      items: [
        "Contact a local cash buyer to evaluate your property",
        "Review your rights under Florida foreclosure law",
        "Understand the timeline and your options for halting the process",
        "Get a no-obligation cash offer and decide on your terms",
      ],
    },
  },
  testimonials: {
    eyebrow: "What Our Customers Say",
    titleLead: "What our ",
    titleEm: "customers",
    titleTail: " say.",
    lede: "Selling a property is personal. These are a few of the stories from homeowners we've had the honor to help across St Pete.",
    items: [
      { quote: "They were patient, kind, and didn't push. The offer arrived the next morning and was exactly what they said it would be.", name: "Karen R.", meta: "Homeowner, St. Petersburg", initials: "KR" },
      { quote: "I'd put off selling for two years. Marcus walked through the house with me and answered every question. We closed in nine days.", name: "Daniel P.", meta: "Estate Sale, Pinellas Park", initials: "DP" },
    ],
  },
  situations: {
    eyebrow: "Who We Help",
    titleLead: "What Properties Do We Buy to ",
    titleEm: "Stop Foreclosure?",
    titleTail: "",
    lede: "We buy houses in St Petersburg in any condition, including properties facing foreclosure, divorce, probate, or burdened by problem tenants.",
    items: [
      { icon: "📍", title: "Foreclosure", body: "Properties at any stage of foreclosure — from missed payments to an imminent sale date." },
      { icon: "👥", title: "Divorce", body: "Couples who need to liquidate a shared asset quickly and fairly, with minimal conflict." },
      { icon: "🏛️", title: "Inherited / Probate", body: "Homes passed through estates, often needing updates or needing to sell before probate closes." },
      { icon: "🏠", title: "Tired Landlords", body: "Rental properties with difficult tenants or deferred maintenance you no longer want to manage." },
      { icon: "⏱️", title: "Relocation", body: "Homeowners who need to sell fast due to job changes, family needs, or life circumstances." },
      { icon: "💰", title: "Upside-Down Mortgages", body: "Properties where the loan balance exceeds market value, or burdened by liens and judgments." },
    ],
  },
  market: {
    eyebrow: "Local Market Context",
    titleLead: "Understanding the ",
    titleEm: "St. Petersburg",
    titleTail: " cash home market.",
    lede: "St Pete is a sought-after market — its climate, small feel, and proximity to beaches draw new residents monthly. But foreclosure is a real local challenge, affecting families across Pinellas County every year.",
    factors: [
      { title: "Block-level comps", body: "Our evaluations draw on Pinellas County tax data, MLS actives, and recent closed cash sales — not automated national averages." },
      { title: "Condition-tiered pricing", body: "We never apply one price regardless of state. We visit in person and price accordingly." },
      { title: "Title clarity upfront", body: "We work with local title professionals, handle any complications, and keep your closing on track." },
    ],
  },
  guarantee: {
    eyebrow: "Our Commitment",
    titleLead: "Clear terms. ",
    titleEm: "No surprises.",
    titleTail: "",
    lede: "The same firm promise we'd want if we were sitting on the other side of the kitchen table.",
    items: [
      { title: "No commissions", body: "We buy direct with no agent in the middle — we don't charge you a dime for the service." },
      { title: "No repairs", body: "We buy as-is — so you don't need to fix a thing. Sell it exactly as it stands today." },
      { title: "No staging or showings", body: "One walkthrough from us — then we get out of your way. No parade of strangers." },
      { title: "No closing fees", body: "We cover closing costs. What you're offered is what lands in your account." },
    ],
    asideTitle: "Ready to stop foreclosure?",
    asideBody: "Call or message us now. We're a local St Pete team and we know the Pinellas County market inside out.",
  },
  comparison: {
    eyebrow: "Traditional Sale vs. Cash Sale",
    titleLead: "Traditional sale vs. ",
    titleEm: "cash sale.",
    titleTail: "",
    lede: "When facing foreclosure, speed and certainty matter more than maximizing list price. Here's how the paths compare.",
    traditionalLabel: "Traditional Listing",
    traditionalTimeline: "9 days – 14 weeks",
    cashLabel: "We Buy St Pete Houses",
    cashTimeline: "7 days – 21 days",
    featuredBadge: "Best for Foreclosure",
    rows: [
      { label: "Closings", traditional: "60–90 days avg", cash: "As fast as 7 days" },
      { label: "Commissions", traditional: "5–6% of sale price", cash: "$0 — none" },
      { label: "Repairs needed", traditional: "Often required", cash: "None — as-is" },
      { label: "Showings", traditional: "Multiple, ongoing", cash: "One walkthrough" },
      { label: "Closing fees", traditional: "Seller typically pays", cash: "We cover them" },
      { label: "Certainty", traditional: "Financing can fall through", cash: "Guaranteed cash close" },
    ],
  },
  infoBlocks: [
    {
      title: "When Might Bankruptcy Help Stop Foreclosure?",
      body: "When a bankruptcy petition is filed, an automatic stay halts most foreclosure actions. But it introduces legal complexity, costs, and long timelines.",
      chapters: [
        { title: "Chapter 7", body: "Liquidation. Foreclosure may resume after stay is lifted if you can't make payments. Fresh start, but may not save your home." },
        { title: "Chapter 13", body: "Reorganization with a 3–5 year repayment plan. Can keep your home if you complete the plan successfully." },
      ],
      footer: "A cash sale provides a different path: sell the property, pay off the mortgage, and move forward without a multi-year repayment plan or ongoing legal proceedings. Consult a local attorney, then compare with your cash offer.",
    },
    {
      title: "Government Programs & Resources to Stop Foreclosure",
      list: [
        { title: "HUD-certified housing counselors", body: "Free or low-cost counseling to review your options, negotiate with lenders, and explore loan modifications. Find a counselor at hud.gov/counseling." },
        { title: "Mortgage forbearance & modifications", body: "Contact your loan servicer to discuss temporary payment reductions, forbearance plans, or loan modifications." },
        { title: "HOPE NOW Alliance", body: "Partnership between government agencies and mortgage servicers to prevent foreclosures." },
        { title: "Florida Housing Finance Corporation", body: "State programs that may offer assistance or refinancing options for eligible borrowers." },
      ],
      callout: {
        title: "Foreclosure imminent?",
        body: "These programs can provide relief but often require time and documentation. If you need a fast solution, a cash offer can close before the auction date — giving you certainty and immediate relief.",
      },
    },
  ],
  diff: {
    eyebrow: "What Makes Us Different",
    titleLead: "What Makes We Buy St Pete Houses ",
    titleEm: "Different?",
    titleTail: "",
    lede: "Our local focus, transparent terms, and seller-first approach set us apart from out-of-state cash buyers and generic investor groups.",
    items: [
      { num: "01", title: "Hyper-local expertise", body: "We know St Petersburg and surrounding Pinellas communities inside and out — neighborhood by neighborhood, block by block." },
      { num: "02", title: "Transparent, written offers", body: "No surprises, no hidden fees, no bait-and-switch tactics. Our offers are clear, fair, and in writing." },
      { num: "03", title: "Fast closings on your timeline", body: "Close in as little as 7 days or wait until you're ready. You control the closing date — not us." },
      { num: "04", title: "Empathetic, seller-centered", body: "We listen to your needs first. Every situation is unique and we tailor our approach accordingly." },
      { num: "05", title: "Proven track record", body: "500+ homes purchased across St Pete since our founding, with a consistent focus on integrity and fair dealing." },
      { num: "06", title: "Local vs. AI-generated advice", body: "Generic guidance misses Florida's specific foreclosure laws and St Pete's neighborhood realities. We live and work here." },
    ],
  },
  finalCta: {
    titleLead: "We'll ",
    titleEm: "call you",
    titleTail: " right back.",
    description: "Facing foreclosure in St Petersburg? Get a no-obligation cash offer within 24 hours. No repairs. No commissions. Close on your timeline.",
  },
};

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

const WATER_EXTRA = { ...FIRE_EXTRA };
WATER_EXTRA.hero = {
  ...FIRE_EXTRA.hero,
  checklist: [
    "Cash offer within 24 hours",
    "Sell flooded homes as-is — no mitigation required",
    "Close in as little as 7 days",
    "No agent fees or commissions",
    "Local St Pete team — one call away",
  ],
  formTitle: "Get a cash offer for your flooded home.",
  formIntro: "Tell us about your water-damaged St Petersburg property. We'll respond within 24 hours with a fair, no-obligation offer.",
};
WATER_EXTRA.prose = {
  ...FIRE_EXTRA.prose,
  titleEm: "Flooded Home",
  lede: "Whether you're dealing with hurricane flooding, plumbing failures, or storm surge — we buy water-damaged homes across St Petersburg as-is.",
  paragraphs: [
    "Water damage doesn't have to trap you in months of mitigation, insurance disputes, and repair estimates. We buy flooded and water-damaged homes in their current condition.",
    "You contact us, we evaluate your property, and we present a fair cash offer within 24 hours. No pressure, no obligation.",
    "Choose your closing date — as fast as 7 days or more time if needed. We handle paperwork and coordinate with a local title company.",
  ],
};

const INHERITED_EXTRA = {
  hero: {
    checklist: [
      "Buy as-is — no cleaning, repairs, or staging required",
      "No agent commissions or hidden fees — keep the full offer amount",
      "We guide you through probate and title clearance",
      "Close in as little as 7 days — or on your timeline",
    ],
    formTitle: "Tell us about the inherited home.",
    formIntro: "Receive a fair, no-obligation cash offer — we'll guide you through every step.",
  },
  cards: {
    eyebrow: "How We Buy Inherited Houses",
    titleLead: "Cash, as-is, with ",
    titleEm: "probate support.",
    titleTail: "",
    lede: "Our process is designed to be transparent and stress-free for heirs navigating unfamiliar territory.",
    items: [
      { title: "As-is purchases — nothing required", body: "No need to clean out belongings, fix outdated systems, or worry about curb appeal. We purchase the property exactly as it is." },
      { title: "No commissions or fees — ever", body: "You keep the full cash offer amount. There are no real estate agent commissions and no hidden fees." },
      { title: "Probate and title clearance support", body: "We work alongside your probate attorney and can begin preparing the sale while probate is underway." },
      { title: "Flexible closing — your timeline", body: "Close in as little as 7 days, or take more time to finalize probate or family decisions." },
    ],
  },
  comparison: {
    eyebrow: "Compare Your Options",
    titleLead: "Cash offer vs. traditional listing — ",
    titleEm: "what's best for your inherited home?",
    titleTail: "",
    lede: "For inherited properties, especially those in probate or needing significant work, a cash offer eliminates friction and gets you to closing faster.",
    traditionalLabel: "Listing with an Agent",
    traditionalTimeline: "60–90+ days",
    cashLabel: "Cash Offer (with us)",
    cashTimeline: "7–30 days",
    featuredBadge: "Recommended for inherited homes",
    rows: [
      { label: "Timeline", traditional: "60–90+ days avg", cash: "As little as 7 days" },
      { label: "Repairs", traditional: "Often required", cash: "None — as-is" },
      { label: "Commissions", traditional: "5–6%", cash: "$0" },
      { label: "Showings", traditional: "Multiple", cash: "None" },
      { label: "Probate support", traditional: "Limited", cash: "Included" },
      { label: "Certainty", traditional: "Financing risk", cash: "Guaranteed cash" },
    ],
  },
  resources: {
    eyebrow: "Local Resources",
    titleLead: "Local resources for selling ",
    titleEm: "inherited property",
    titleTail: " in St Petersburg.",
    lede: "These offices handle the key legal and administrative steps involved in selling inherited property.",
    items: [
      { title: "St. Petersburg City Hall", body: "Property records, local ordinances, permits, and municipal information." },
      { title: "Pinellas County Clerk of the Circuit Court & Comptroller", body: "Probate filings, court records, deed recording, and official property documents." },
      { title: "Pinellas County Tax Collector", body: "Property tax records and payment information for title clearance." },
      { title: "Pinellas County Property Appraiser", body: "Official property valuations and assessment data." },
    ],
  },
  finalCta: {
    titleLead: "Sell your ",
    titleEm: "inherited house",
    titleTail: " in St Petersburg for cash.",
    description: "No repairs. No fees. No waiting on the market. A fair cash offer from a local team that knows St Petersburg — and the probate process — inside and out.",
  },
};

const pages = Object.keys(SLUG_META).map((slug) => buildPage(slug, extract[slug]));

// Output TypeScript - use JSON embed for data, hero titles as template in separate hand file
// Simpler: write situation-content-data.json and thin TS wrapper

const dataPath = path.join(process.cwd(), "src", "lib", "situation-content-data.json");
fs.writeFileSync(dataPath, JSON.stringify(pages, null, 2));
console.log("Wrote", dataPath, pages.length, "pages");
