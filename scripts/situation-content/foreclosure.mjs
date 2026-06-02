/**
 * /situations/foreclosure — matches
 * situation-page/stop-foreclosure-st-petersburg.html
 */

export const FORECLOSURE_CONTENT = {
  sectionOrder: [
    "stats",
    "process",
    "areas",
    "testimonials",
    "situations",
    "market",
    "guarantee",
    "comparison",
    "infoBlocks",
    "diff",
    "faq",
    "finalCta",
  ],
  hero: {
    formIntro:
      "A small local team of in-house specialists — buying homes across Pinellas County at fair prices. No agents, no repairs, no surprises.",
    authorRole: "Local Founder · We Buy St Pete Houses · Pinellas County",
    addressPlaceholder: "123 Main St, St Petersburg FL",
  },
  process: {
    eyebrow: "How It Works",
    titleLead: "How our ",
    titleEm: "cash offer",
    titleTail: " process works.",
    lede:
      "Our quick steps: No bidding wars, no repair headaches, no complex listings — certain results you can count on.",
    steps: [
      { num: "01", title: "Tell us about the home", body: "Share your property details via our form or by phone. We listen to your specific situation first." },
      { num: "02", title: "We visit, in person", body: "A local team member schedules a walkthrough at a time that's convenient for you. No hassle." },
      { num: "03", title: "Receive a written offer", body: "We present a fair, no-obligation cash offer with transparent terms — no hidden fees, ever." },
      { num: "04", title: "Close on your timeline", body: "You choose the closing date. We handle the paperwork. You get cash at closing." },
    ],
    primaryCta: "Start with a free offer",
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
  areas: {
    eyebrow: "Service Area",
    titleLead: "Across ",
    titleEm: "St. Petersburg",
    titleTail: " and Tampa Bay.",
    lede:
      "We focus on the neighborhoods we know personally — the streets we live in, raise families in, and have bought houses in for over a decade.",
  },
  situations: {
    eyebrow: "Who We Help",
    titleLead: "What Properties Do We Buy to ",
    titleEm: "Stop Foreclosure?",
    titleTail: "",
    lede: "We buy houses in St Petersburg in any condition, including properties facing foreclosure, divorce, probate, or burdened by problem tenants.",
    imageCards: true,
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
    lede:
      "St Pete is a sought-after market — its climate, small feel, and proximity to beaches draw 1,500 new residents monthly. But foreclosure is a real local challenge, affecting families across Pinellas County every year.",
    badgeValue: "$380k",
    badgeLabel: "Avg. St Pete home value",
    showLocal: false,
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
      footer:
        "A cash sale provides a different path: sell the property, pay off the mortgage, and move forward without a multi-year repayment plan or ongoing legal proceedings. Consult a local attorney, then compare with your cash offer.",
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
    eyebrow: "Ready to sell?",
    titleLead: "We'll ",
    titleEm: "call you",
    titleTail: " right back.",
    description:
      "Facing foreclosure in St Petersburg? Get a no-obligation cash offer within 24 hours. No repairs. No commissions. Close on your timeline.",
  },
};
