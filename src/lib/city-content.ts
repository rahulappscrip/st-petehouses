import { SITE } from "./constants";

export type CitySectionId =
  | "process"
  | "areas"
  | "situations"
  | "testimonials"
  | "market"
  | "guarantee"
  | "comparison"
  | "resources"
  | "benefits"
  | "afterAccept"
  | "contact"
  | "faq"
  | "finalCta";

export type CityProcessStep = {
  num: string;
  title: string;
  body: string;
};

export type CitySituationItem = {
  icon: string;
  title: string;
  body: string;
};

export type CityBenefitItem = {
  icon: string;
  title: string;
  body: string;
};

export type CityTestimonial = {
  quote: string;
  name: string;
  meta: string;
  initials: string;
};

export type CityMarketFactor = {
  letter: string;
  title: string;
  body: string;
};

export type CityGuaranteeItem = {
  title: string;
  body: string;
};

export type CityCompareRow = {
  label: string;
  traditional: string;
  cash: string;
};

export type CityResource = {
  icon: string;
  title: string;
  sub: string;
  href: string;
};

export type CityAfterAcceptStep = {
  title: string;
  body: string;
};

export type CityFaq = {
  q: string;
  a: string;
};

type SectionTitle = {
  titleLead: string;
  titleEm: string;
  titleTail: string;
};

export type CityFullContent = {
  sectionOrder: CitySectionId[];
  heroEyebrow: string;
  heroSubheadline: string;
  formTitle: string;
  formIntro: string;
  authorRole: string;
  process: SectionTitle & {
    eyebrow: string;
    lede: string;
    steps: CityProcessStep[];
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  areas: SectionTitle & {
    eyebrow: string;
    lede: string;
    sidebarIntro?: string;
    areas: string[];
  };
  situations: SectionTitle & {
    eyebrow: string;
    lede: string;
    items: CitySituationItem[];
  };
  testimonials?: SectionTitle & {
    eyebrow: string;
    lede: string;
    items: CityTestimonial[];
  };
  market?: SectionTitle & {
    eyebrow: string;
    lede: string;
    factors: CityMarketFactor[];
  };
  guarantee?: SectionTitle & {
    eyebrow: string;
    lede: string;
    intro?: string;
    items: CityGuaranteeItem[];
    asideTitle?: string;
    asideBody?: string;
  };
  comparison: SectionTitle & {
    eyebrow: string;
    lede: string;
    traditionalLabel: string;
    traditionalTimeline?: string;
    cashLabel: string;
    cashTimeline?: string;
    rows: CityCompareRow[];
  };
  resources?: SectionTitle & {
    eyebrow: string;
    lede: string;
    items: CityResource[];
  };
  benefits?: SectionTitle & {
    eyebrow: string;
    lede: string;
    items: CityBenefitItem[];
  };
  afterAccept?: SectionTitle & {
    eyebrow: string;
    lede: string;
    steps: CityAfterAcceptStep[];
  };
  contact?: SectionTitle & {
    eyebrow: string;
    lede: string;
  };
  faq: SectionTitle & {
    eyebrow?: string;
    items: CityFaq[];
  };
  finalCta: {
    eyebrow?: string;
    titleLead: string;
    titleEm: string;
    titleTail: string;
    description: string;
  };
};

const PROCESS_SECONDARY_CTA = `or call ${SITE.phone}`;

const ST_PETERSBURG_COMPARE_ROWS: CityCompareRow[] = [
  { label: "Commissions", traditional: "5–6% of price", cash: "None — $0" },
  { label: "Repairs required", traditional: "Often yes", cash: "None — as-is" },
  { label: "Closing timeline", traditional: "30–60+ days", cash: "As fast as 7 days" },
  { label: "Showings", traditional: "Multiple", cash: "One private visit" },
  { label: "Financing risk", traditional: "Can fall through", cash: "No risk — all cash" },
  { label: "Certainty", traditional: "Contingencies", cash: "Guaranteed offer" },
  { label: "Closing costs", traditional: "~2% of sale", cash: "We cover them" },
];

const CLEARWATER_COMPARE_ROWS: CityCompareRow[] = [
  { label: "Commissions", traditional: "5–6% of price", cash: "None — $0" },
  { label: "Repairs required", traditional: "Often yes", cash: "None — as-is" },
  { label: "Closing timeline", traditional: "30–60+ days", cash: "As fast as 7 days" },
  { label: "Showings", traditional: "Multiple", cash: "One private visit" },
  { label: "Financing risk", traditional: "Can fall through", cash: "No risk — all cash" },
  { label: "Certainty", traditional: "Contingencies", cash: "Guaranteed offer" },
  { label: "Closing costs", traditional: "~2% of sale", cash: "We cover them" },
];

const LARGO_COMPARE_ROWS: CityCompareRow[] = [
  { label: "Closing timeline", traditional: "60–90 days", cash: "7–14 days" },
  { label: "Agent commission", traditional: "5–6%", cash: "$0" },
  { label: "Repairs required", traditional: "Often", cash: "None — as-is" },
  { label: "Showings", traditional: "Many", cash: "One visit" },
  { label: "Financing contingency", traditional: "Yes — risk of fallout", cash: "None — all cash" },
  { label: "Closing fees", traditional: "2–4% of price", cash: "We cover them" },
  { label: "Certainty of close", traditional: "Low", cash: "We own them" },
];

const DUNEDIN_COMPARE_ROWS: CityCompareRow[] = [
  { label: "Closing Timeline", traditional: "3–6 months average", cash: "Often about a week" },
  { label: "Repairs Required", traditional: "Often required to compete", cash: "None — as-is purchase" },
  { label: "Agent Commissions", traditional: "5–6% of sale price", cash: "$0" },
  { label: "Closing Costs", traditional: "Seller typically pays", cash: "We cover them" },
  { label: "Showings / Open Houses", traditional: "Multiple required", cash: "None — one visit" },
  { label: "Financing Contingency", traditional: "Buyer financing can fall through", cash: "None — all cash" },
  { label: "Certainty of Close", traditional: "Contingent on many factors", cash: "Guaranteed" },
];

const ST_PETERSBURG: CityFullContent = {
  sectionOrder: [
    "process",
    "areas",
    "testimonials",
    "market",
    "guarantee",
    "comparison",
    "situations",
    "resources",
    "faq",
    "finalCta",
  ],
  heroEyebrow: "St. Petersburg, FL · Cash Home Buyers",
  heroSubheadline:
    "A small local team of in-house investors — buying homes across Pinellas County at fair prices. No listings, no repairs, no agents, no stress — on your timeline.",
  formTitle: "Tell us about your home.",
  formIntro: "Get a fair, no-obligation cash offer within 24 hours.",
  authorRole: "Principal Buyer · We Buy St. Pete Houses, LLC",
  process: {
    eyebrow: "Our Quick Process",
    titleLead: "How our ",
    titleEm: "cash offer",
    titleTail: " process works.",
    lede: "Our quick steps: No listing, no repairs, no open houses, no complex multiple fall-throughs.",
    steps: [
      {
        num: "01",
        title: "Tell us about the property",
        body: "Fill out our short form or call us directly. We'll gather a few quick details about your home — address, condition, and your ideal timeline.",
      },
      {
        num: "02",
        title: "We visit, in person",
        body: "A local team member will schedule a brief walkthrough of your property. No strangers trampling through open houses — just a private visit at your convenience.",
      },
      {
        num: "03",
        title: "Receive a written offer",
        body: "We'll present you with a fair, written cash offer with no hidden fees or surprises. Take your time — there's no pressure to accept on the spot.",
      },
      {
        num: "04",
        title: "Close on your timeline",
        body: "You choose the closing date. We can move as quickly as 7 days or give you more time if needed. We coordinate everything with the title company.",
      },
    ],
    primaryCtaLabel: "Start with a free offer",
    secondaryCtaLabel: PROCESS_SECONDARY_CTA,
  },
  areas: {
    eyebrow: "Where We Buy",
    titleLead: "Across ",
    titleEm: "St. Petersburg",
    titleTail: " and Tampa Bay.",
    lede: "We focus on the neighborhoods we know personally — this lets us find truly fair, data-driven prices for homes across the region.",
    sidebarIntro:
      "We serve every neighborhood in St. Petersburg and the surrounding Greater Tampa Bay communities. Our local focus means we understand local values and can move quickly.",
    areas: [
      "St. Petersburg",
      "Clearwater",
      "Largo",
      "Pinellas Park",
      "Palm Harbor",
      "Tampa",
      "Dunedin",
      "Gulfport",
      "Dade City",
      "Manatee",
      "Palmetto",
      "Sarasota",
      "Pasco",
      "Hudson",
      "New Port Richey",
    ],
  },
  testimonials: {
    eyebrow: "What Our Customers Say",
    titleLead: "What our ",
    titleEm: "customers",
    titleTail: " say.",
    lede: "Selling a home is personal. These are a few of the real stories shared by St Pete sellers.",
    items: [
      {
        quote:
          "They were patient, kind, and didn't push. The offer arrived the next morning and was exactly what they said it would be. We closed in two weeks with zero surprises.",
        name: "Karen H.",
        meta: "St. Petersburg, FL",
        initials: "K",
      },
      {
        quote:
          "I'd put off selling for two years. Marcus walked through the house with me and answered every question. We closed in nine days. I wish I'd called sooner.",
        name: "Daniel F.",
        meta: "Gulfport / St. Petersburg",
        initials: "D",
      },
    ],
  },
  market: {
    eyebrow: "St. Petersburg Market",
    titleLead: "Understanding the ",
    titleEm: "St. Petersburg",
    titleTail: " cash home market.",
    lede: "St. Pete is a unique market — its blend of small over 4,000 homes, a vibrant housing stock, and high post-hurricane repair needs means sellers have real options beyond listing agents.",
    factors: [
      {
        letter: "A",
        title: "Block-level comps",
        body: "We pull data on your specific street, not just the zip code. This means our offers reflect what your house is truly worth in today's market.",
      },
      {
        letter: "B",
        title: "Condition-based pricing",
        body: "We price for the house as-is, so you don't pay for repairs you don't want to make. Our offer accounts for the condition, not a fantasy version.",
      },
      {
        letter: "C",
        title: "Title clarity upfront",
        body: "We work with local title agents to answer questions about liens or probate situations early — so nothing slows down your closing.",
      },
    ],
  },
  guarantee: {
    eyebrow: "Our Terms",
    titleLead: "Clear terms. ",
    titleEm: "No surprises.",
    titleTail: "",
    lede: "The terms the contract will reflect are the ones we discuss on day one of the transaction. No late additions.",
    intro:
      "We want to be the kind of buyers you'd send a family member to. That means full transparency before you ever sign a thing.",
    items: [
      {
        title: "No commissions",
        body: "We buy direct — no agent on our side takes a cut of your proceeds",
      },
      {
        title: "No repairs",
        body: "We buy as-is. You don't need to fix or clean a thing before closing",
      },
      {
        title: "No staging or showings",
        body: "One private visit, then an offer. No parade of strangers through your home",
      },
      {
        title: "No closing fees",
        body: "We cover standard closing costs. What we offer is what you receive",
      },
    ],
    asideTitle: "We know the neighborhood — and we're here to help.",
    asideBody:
      "We're a small, local team. When you call, you reach someone who's been to your street. Get straight answers with no runaround.",
  },
  comparison: {
    eyebrow: "Compare Your Options",
    titleLead: "Traditional sale vs. ",
    titleEm: "cash sale.",
    titleTail: "",
    lede: "A cash offer trades a potentially higher list price for speed, certainty, and zero hassle. Here's how the two paths compare side by side.",
    traditionalLabel: "Traditional Agent Listing",
    traditionalTimeline: "9 days — 14 weeks",
    cashLabel: "We Buy St Pete Houses",
    cashTimeline: "7 days — 11 weeks",
    rows: ST_PETERSBURG_COMPARE_ROWS,
  },
  situations: {
    eyebrow: "We Help With",
    titleLead: "Seller situations we ",
    titleEm: "specialize in.",
    titleTail: "",
    lede: "No matter what brought you here, we've seen it before. We offer flexible cash-based solutions for almost every situation a homeowner faces.",
    items: [
      {
        icon: "🏦",
        title: "Foreclosure",
        body: "Stop the process and move forward with cash in hand. We can often close before a foreclosure auction date.",
      },
      {
        icon: "⚖️",
        title: "Divorce",
        body: "Sell quickly and split proceeds cleanly. We keep the process simple so you can move forward.",
      },
      {
        icon: "🏛️",
        title: "Inherited / Probate",
        body: "Simplify estate settlement. We work directly with executors and attorneys to make the process seamless.",
      },
      {
        icon: "🔑",
        title: "Tired Landlord",
        body: "Exit rental headaches fast — even with tenants in place. We buy occupied properties and handle the transition.",
      },
      {
        icon: "🚚",
        title: "Relocation",
        body: "Sell before you leave town. We work around your move-out date and can handle logistics remotely.",
      },
      {
        icon: "📉",
        title: "Upside-Down Mortgage",
        body: "We can often help navigate properties with liens or where you owe more than the current market value.",
      },
      {
        icon: "🏚️",
        title: "Vacant Property",
        body: "No need to maintain or stage an empty house. We buy vacant and distressed properties in any condition.",
      },
      {
        icon: "🔨",
        title: "Major Repairs Needed",
        body: "Fire damage, roof failure, mold — we've seen it. You don't need to fix anything before selling to us.",
      },
      {
        icon: "💼",
        title: "Behind on Payments",
        body: "If you're behind on your mortgage, we can often move fast enough to help you avoid further damage to your credit.",
      },
    ],
  },
  resources: {
    eyebrow: "Local Resources",
    titleLead: "Helpful local resources for ",
    titleEm: "St. Pete sellers.",
    titleTail: "",
    lede: "Selling a home involves more than finding a buyer. These local offices and services can help with taxes, legal requirements, and more.",
    items: [
      {
        icon: "🏛️",
        title: "St. Petersburg City Hall",
        sub: "General city services, permits, code enforcement, and municipal records related to your property.",
        href: "https://www.stpete.org/",
      },
      {
        icon: "📋",
        title: "Pinellas County Property Appraiser",
        sub: "Official property records, current assessed value, and tax roll information for your home.",
        href: "https://www.pcpao.gov/",
      },
      {
        icon: "⚖️",
        title: "Pinellas County Clerk of Court",
        sub: "Legal filings, public records, liens, judgments, and probate court documents.",
        href: "https://www.pinellasclerk.org/",
      },
      {
        icon: "🤝",
        title: "St. Pete Chamber of Commerce",
        sub: "Local business resources, community networking, and referrals for service providers.",
        href: "https://stpete.com/",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    titleLead: "Frequently asked questions about ",
    titleEm: "selling for cash",
    titleTail: " in St. Petersburg.",
    items: [
      {
        q: "How is my cash offer calculated?",
        a: "We look at recent comparable sales on your block, the current condition of the property, any needed repairs, and our holding costs. We aim for an offer that's fair to you while allowing us to make a reasonable investment return. We'll walk you through our reasoning openly.",
      },
      {
        q: "Are there any fees or commissions?",
        a: "No. We buy direct. There are no agent commissions on our side, no closing cost deductions from your proceeds, and no surprise fees. The number we offer is the number you receive at closing.",
      },
      {
        q: "What kinds of homes do you buy?",
        a: "We buy single-family homes, townhouses, condos, duplexes, and multi-family properties across St. Petersburg and the Tampa Bay area. We purchase in any condition — from move-in ready to properties needing full renovation.",
      },
      {
        q: "Do I need to clean or repair anything?",
        a: "Not at all. We buy as-is. Leave behind what you don't want to take — furniture, junk, appliances — and we'll handle clearing the property after closing. You just bring what matters to you.",
      },
      {
        q: "How fast can we close?",
        a: "As fast as 7 days in straightforward cases. Most closings happen within 2–3 weeks. If you need more time to make arrangements, we can extend the closing date to fit your schedule.",
      },
      {
        q: "Will I work with a real person?",
        a: "Yes — you'll work directly with John Gardepe or one of our small in-house team. You'll have a direct phone number and won't get bounced around call centers or virtual assistants.",
      },
      {
        q: "Do you use a real estate agent service?",
        a: "No. We are direct buyers — we purchase with our own funds and there is no listing agent, buyer's agent, or MLS involvement in our process. This is how we eliminate commissions and move faster.",
      },
      {
        q: "What if my home has a lien or is in probate?",
        a: "We've worked through many lien and probate situations. We'll connect you with our title team early to review the situation and outline your options clearly. We can often still close on these properties — just with a bit more lead time.",
      },
      {
        q: "Is the offer truly no-obligation?",
        a: "Completely. Our offer is a written, no-pressure document. You're free to compare it with other buyers or simply decide not to sell. We won't follow up aggressively if you're not interested.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get Started Today",
    titleLead: "Ready to sell your ",
    titleEm: "St. Pete",
    titleTail: " home fast?",
    description:
      "We buy houses as-is with no commissions or fees and can close in as little as 7 days. Submit your details for a no-obligation cash offer — fast and simple.",
  },
};

const CLEARWATER: CityFullContent = {
  sectionOrder: [
    "process",
    "situations",
    "areas",
    "benefits",
    "afterAccept",
    "comparison",
    "resources",
    "faq",
    "finalCta",
  ],
  heroEyebrow: "Clearwater, FL · Pinellas County",
  heroSubheadline:
    "Sell your Clearwater home as-is for cash — no repairs, no commissions, no hidden fees. We serve Clearwater and the Greater Tampa Bay area with transparent, no-obligation cash offers. Close in as little as 7 days, or on your schedule.",
  formTitle: "Tell us about your Clearwater home.",
  formIntro: "Get a fair, no-obligation cash offer within 24 hours.",
  authorRole: "Principal Buyer · We Buy St. Pete Houses, LLC",
  process: {
    eyebrow: "How It Works",
    titleLead: "Our ",
    titleEm: "Clearwater",
    titleTail: " cash offer process.",
    lede: "Four simple steps — no listings, no repairs, no open houses, no financing fall-throughs.",
    steps: [
      {
        num: "01",
        title: "Share Your Property Details",
        body: "Tell us about your Clearwater property — address, condition, and your preferred timeline. No inspections or appraisals required at this stage.",
      },
      {
        num: "02",
        title: "Receive a Cash Offer",
        body: "We analyze local market conditions and present a no-obligation cash offer, typically within 24 hours of your inquiry. No pressure to accept.",
      },
      {
        num: "03",
        title: "Accept or Walk Away",
        body: "Review the offer on your terms. Accept it if it works for you, or decline with zero obligations. We respect your decision either way.",
      },
      {
        num: "04",
        title: "Close on Your Timeline",
        body: "Choose your closing date — in as little as 7 days or longer. We coordinate with the title company and funds are transferred at closing. Done.",
      },
    ],
    primaryCtaLabel: "Start with a free offer",
    secondaryCtaLabel: PROCESS_SECONDARY_CTA,
  },
  areas: {
    eyebrow: "Where We Buy",
    titleLead: "Clearwater and ",
    titleEm: "Greater Tampa Bay.",
    titleTail: "",
    lede: "Our local team understands Clearwater market dynamics — neighborhood values, what drives quick closings, and what sellers in this area need most.",
    sidebarIntro:
      "We cover all Clearwater neighborhoods — from downtown and the beaches to North Clearwater, Countryside, and every community in between. Our service area spans Greater Tampa Bay.",
    areas: [
      "Clearwater ★",
      "St. Petersburg",
      "Tampa",
      "Largo",
      "Pinellas Park",
      "Palm Harbor",
      "Dunedin",
      "Gulfport",
      "Safety Harbor",
      "Oldsmar",
      "Manatee",
      "Palmetto",
      "Sarasota",
      "Hudson",
      "New Port Richey",
    ],
  },
  situations: {
    eyebrow: "What Situations We Handle",
    titleLead: "Clearwater homes we buy, ",
    titleEm: "any situation.",
    titleTail: "",
    lede: "We buy Clearwater homes in all kinds of circumstances — foreclosure, probate, and other tough-to-sell scenarios where speed and simplicity matter most.",
    items: [
      {
        icon: "🏦",
        title: "Foreclosure or Behind on Mortgage",
        body: "Avoid foreclosure with a fast cash sale. We can often close before an auction date and help you move forward with cash in hand.",
      },
      {
        icon: "🏛️",
        title: "Inherited or Probate Property",
        body: "Sell without navigating complex probate processes alone. We work directly with executors and attorneys to keep things simple.",
      },
      {
        icon: "🔑",
        title: "Tired Landlord or Problem Tenants",
        body: "Exit rental property headaches quickly — even with tenants in place. We buy occupied properties and handle the transition.",
      },
      {
        icon: "🚚",
        title: "Relocation or Moving",
        body: "Sell fast when timing is critical. We work around your move-out date and can handle logistics if you're managing things remotely.",
      },
      {
        icon: "📉",
        title: "Upside-Down Mortgage or Liens",
        body: "We work with you to find solutions even when you owe more than market value or have liens on the property.",
      },
      {
        icon: "🏚️",
        title: "Vacant or Hard-to-Sell Property",
        body: "No need to maintain or market an empty home. We buy vacant and distressed Clearwater properties in any condition.",
      },
    ],
  },
  benefits: {
    eyebrow: "Why Cash?",
    titleLead: "Benefits of selling to a ",
    titleEm: "cash buyer",
    titleTail: " in Clearwater.",
    lede: "Cash offers mean certainty and speed — no financing risk, no repairs, and a faster, smoother close that you control.",
    items: [
      {
        icon: "🔒",
        title: "No financing risk",
        body: "Cash sales don't depend on buyer loan approval. The deal won't fall through at the last minute because a lender said no.",
      },
      {
        icon: "🔧",
        title: "Sell as-is — no repairs or cleaning",
        body: "We buy properties in any condition. Leave behind what you don't want and we'll handle clearing the property after closing.",
      },
      {
        icon: "💰",
        title: "No agent commissions or fees",
        body: "We buy direct. No listing agent, no buyer's agent, no 5–6% commission deducted from your proceeds. You keep more of the sale.",
      },
      {
        icon: "📅",
        title: "Certainty and control over closing",
        body: "You pick the closing date — as fast as 7 days or on a longer timeline that fits your needs. No contingencies, no waiting on third parties.",
      },
    ],
  },
  afterAccept: {
    eyebrow: "What Happens Next",
    titleLead: "What happens after I ",
    titleEm: "accept a cash offer?",
    titleTail: "",
    lede: "The process after accepting is straightforward — three clear steps, no surprises, no hidden fees.",
    steps: [
      {
        title: "Sign a purchase agreement",
        body: "A straightforward contract outlining the sale terms — price, timeline, and any conditions. We walk you through every line.",
      },
      {
        title: "Schedule closing on your timeline",
        body: "Choose a closing date that works for you — 7 days out, a few weeks, or whatever fits your situation. We coordinate everything.",
      },
      {
        title: "Receive funds at closing",
        body: "Funds transfer to you at the closing table. Sign the paperwork, collect your payment, and the sale is complete. No post-closing surprises.",
      },
    ],
  },
  comparison: {
    eyebrow: "Compare Your Options",
    titleLead: "Traditional sale vs. ",
    titleEm: "cash sale",
    titleTail: " in Clearwater.",
    lede: "A cash offer trades a potentially higher list price for speed, certainty, and zero hassle — the right choice when timing matters.",
    traditionalLabel: "Traditional Agent Listing",
    traditionalTimeline: "9 days — 14 weeks",
    cashLabel: "We Buy St. Pete Houses",
    cashTimeline: "7 days — 11 weeks",
    rows: CLEARWATER_COMPARE_ROWS,
  },
  resources: {
    eyebrow: "Local Resources",
    titleLead: "Helpful local resources for ",
    titleEm: "Clearwater sellers.",
    titleTail: "",
    lede: "These Clearwater and Pinellas County offices can assist with property records, taxes, and legal filings as you navigate your sale.",
    items: [
      {
        icon: "🏛️",
        title: "Clearwater City Hall",
        sub: "Municipal services, permits, code enforcement, and official city records related to your Clearwater property.",
        href: "https://www.myclearwater.com/",
      },
      {
        icon: "💵",
        title: "Pinellas County Tax Collector",
        sub: "Property tax information, payment history, and tax certificate details for your Clearwater address.",
        href: "https://pinellastaxcollector.gov/",
      },
      {
        icon: "⚖️",
        title: "Pinellas County Clerk of Court",
        sub: "Property records, legal filings, liens, judgments, and probate court documents for Pinellas County.",
        href: "https://www.pinellasclerk.org/",
      },
      {
        icon: "🏥",
        title: "FL Dept of Health — Pinellas",
        sub: "Health and safety resources, well/septic information, and environmental records related to Clearwater properties.",
        href: "https://pinellas.floridahealth.gov/",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    titleLead: "Frequently asked questions about ",
    titleEm: "cash offers",
    titleTail: " in Clearwater.",
    items: [
      {
        q: "What is the process to sell my Clearwater home fast for cash?",
        a: "Share basic property details with us, receive a no-obligation cash offer typically within 24 hours, and decide on a close date that works for you. No inspections, no appraisals, no financing waiting game — just a clear, direct offer.",
      },
      {
        q: "Do you buy houses in Clearwater as-is and pay cash?",
        a: "Yes — we buy as-is for cash, with no repairs required from you. Leave behind what you don't want to take and we'll handle clearing the property after closing.",
      },
      {
        q: "How quickly can I get an offer on my Clearwater property?",
        a: "Offers typically arrive within 24 hours after you share basic property details. We schedule a brief in-person visit, then put a written offer in your hands — no drawn-out evaluation process.",
      },
      {
        q: "What is a cash offer and how does it compare to listing with an agent?",
        a: "A cash offer is a non-contingent sale with no agent commissions, no financing delays, and no open houses. Agent listings may yield a higher maximum price but involve 5–6% in commissions, months of waiting, and the risk of a deal falling through if a buyer's financing fails.",
      },
      {
        q: "Is there any cost or commission to sell to a cash buyer in Clearwater?",
        a: "No. We buy direct with no agent commissions, no hidden fees, and no deductions from your proceeds. The number we offer is what you receive at closing.",
      },
      {
        q: "What happens after I accept a cash offer?",
        a: "You sign a straightforward purchase agreement, choose your closing date, and receive funds at the closing table. We guide you through each step with full transparency — no surprises, no hidden steps.",
      },
      {
        q: "What areas near Clearwater do you serve?",
        a: "We serve Clearwater, St. Petersburg, Tampa, and the surrounding Greater Tampa Bay region — including Largo, Pinellas Park, Palm Harbor, Dunedin, Gulfport, Safety Harbor, and many more communities.",
      },
      {
        q: "What happens if my Clearwater home is in probate or foreclosure?",
        a: "We've handled many probate and distressed property situations in the Clearwater area. We work directly with executors and attorneys and can often move fast enough to close before a foreclosure auction. Reach out and we'll walk through your specific circumstances.",
      },
      {
        q: "Are cash home buyers in Clearwater legitimate?",
        a: "We Buy St. Pete Houses is a licensed real estate investment firm operating throughout Pinellas County and Greater Tampa Bay. We provide written offers, work with licensed title companies, and close through standard closing procedures. You can verify our company, check our reviews, and speak directly with our principal buyer before signing anything.",
      },
      {
        q: "What documents do I need to get a cash offer in Clearwater?",
        a: "Basic property details and proof of ownership are all you need to start. We'll guide you through any additional documents required as we move toward closing — nothing complex or unexpected.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to Sell in Clearwater?",
    titleLead: "Get your ",
    titleEm: "Clearwater",
    titleTail: " cash offer today.",
    description:
      "We buy houses as-is with no commissions or fees and can close in as little as 7 days. Submit your details for a no-obligation offer — fast and simple.",
  },
};

const LARGO: CityFullContent = {
  sectionOrder: [
    "process",
    "areas",
    "situations",
    "testimonials",
    "market",
    "guarantee",
    "comparison",
    "faq",
    "finalCta",
  ],
  heroEyebrow: "Largo, Florida · Cash Home Buyers",
  heroSubheadline:
    "A small local team of buyers — buying homes across Pinellas County in Largo. No repairs, no agents, no fees, no surprises.",
  formTitle: "Tell us about your home.",
  formIntro: "Get your fair cash offer — no obligation, no hassle.",
  authorRole: "Local Largo Home Buyer · Pinellas County, FL",
  process: {
    eyebrow: "How It Works",
    titleLead: "How our ",
    titleEm: "cash offer",
    titleTail: " process works.",
    lede: "Our quick steps: No bidding wars, no repair hassles, certain results with no fall through.",
    steps: [
      {
        num: "01",
        title: "Tell us about the house",
        body: "Share basic details about your Largo property. We'll review the information and reach out within 24 hours.",
      },
      {
        num: "02",
        title: "We visit, in person",
        body: "A local team member visits your home at a time that works for you — no strangers wandering through.",
      },
      {
        num: "03",
        title: "Receive a written offer",
        body: "We present a fair, no-obligation cash offer based on current Largo market data and your home's condition.",
      },
      {
        num: "04",
        title: "Close on your timeline",
        body: "Accept and we close in as little as 7 days — or take the time you need. You pick the closing date.",
      },
    ],
    primaryCtaLabel: "Start with a cash offer",
    secondaryCtaLabel: PROCESS_SECONDARY_CTA,
  },
  areas: {
    eyebrow: "Where We Buy",
    titleLead: "Across ",
    titleEm: "Largo",
    titleTail: " and Tampa Bay.",
    lede: "We focus on the neighborhoods you know personally — the ones we find new families to love, from Clearwater to Gulfport and beyond.",
    areas: [
      "Largo",
      "St. Petersburg",
      "Clearwater",
      "Pinellas Park",
      "Palm Harbor",
      "Tampa",
      "Gulfport",
      "Dunedin",
      "Safety Harbor",
      "Tarpon Springs",
    ],
  },
  situations: {
    eyebrow: "Seller Situations",
    titleLead: "We buy Largo homes in ",
    titleEm: "any situation.",
    titleTail: "",
    lede: "Life doesn't always go according to plan. We're here to help with a fair cash offer and a fast, certain close — no judgment, no pressure.",
    items: [
      {
        icon: "🏚️",
        title: "Foreclosure / Pre-foreclosure",
        body: "Facing foreclosure? We can move fast to help you avoid it with a cash sale before the deadline.",
      },
      {
        icon: "⚖️",
        title: "Divorce or Separation",
        body: "Selling a shared home quickly helps both parties move forward. We simplify the process.",
      },
      {
        icon: "📋",
        title: "Inherited / Probate Property",
        body: "Dealing with an inherited Largo home? We buy probate properties as-is with no repairs needed.",
      },
      {
        icon: "🔑",
        title: "Tired Landlord",
        body: "Done dealing with tenants? We buy rental properties with tenants in place — no evictions required.",
      },
      {
        icon: "📦",
        title: "Relocation / Job Transfer",
        body: "Need to move quickly for work or family? We close on your timeline so you can focus on what's next.",
      },
      {
        icon: "🏷️",
        title: "Upside-Down Mortgage",
        body: "Underwater on your mortgage or dealing with liens? We navigate these situations every day.",
      },
    ],
  },
  testimonials: {
    eyebrow: "What Our Customers Say",
    titleLead: "What our ",
    titleEm: "customers",
    titleTail: " say.",
    lede: "Selling a home is personal. These are just a few of the families we've walked through this with cash buyers.",
    items: [
      {
        quote:
          "They were patient, kind, and didn't push. The offer arrived the next morning and was exactly what they said it would be. Closed in nine days.",
        name: "Diane R.",
        meta: "Largo Homeowner · Sold in 9 Days",
        initials: "D",
      },
      {
        quote:
          "I'd put off selling for two years. Marcus walked through the house with me and answered every question. We closed in nine days.",
        name: "Tom B.",
        meta: "Largo Homeowner · Sold As-Is",
        initials: "T",
      },
    ],
  },
  market: {
    eyebrow: "Market Insights",
    titleLead: "Understanding the ",
    titleEm: "Largo",
    titleTail: " cash home market.",
    lede: "Largo is a desirable community in Pinellas County, with steady buyer demand near the Gulf Coast. The market supports fast cash transactions for homeowners who need certainty.",
    factors: [
      {
        letter: "A",
        title: "Block-level comps",
        body: "We analyze recent comparable sales in your exact Largo neighborhood, not just the city. You get a price rooted in real data.",
      },
      {
        letter: "B",
        title: "Condition-based pricing",
        body: "Our offer reflects your home's actual condition. No hidden adjustments at the table — the number we quote is the number we pay.",
      },
      {
        letter: "C",
        title: "Title clarity upfront",
        body: "We work with a trusted Largo title company on every sale, and flag any potential issues before you sign anything.",
      },
    ],
  },
  guarantee: {
    eyebrow: "Clear Terms",
    titleLead: "Clear terms. ",
    titleEm: "No surprises.",
    titleTail: "",
    lede: "The terms we commit to are exactly what you'll see sitting on the other side of the table.",
    items: [
      {
        title: "No commissions",
        body: "You don't pay us an offer — or anyone else. We never charge real estate commissions on any offer.",
      },
      {
        title: "No repairs",
        body: "We buy as-is. You don't need to fix or clean a thing — we handle it all after closing.",
      },
      {
        title: "No closing fees",
        body: "We cover typical closing costs so there are no surprise deductions on settlement day.",
      },
      {
        title: "No staging or showings",
        body: "One visit from our team is all it takes. No parade of strangers through your home.",
      },
    ],
    asideTitle: "Ready to see your number?",
    asideBody:
      "Get a no-obligation cash offer for your Largo home within 24 hours. No pressure, no commitment required.",
  },
  comparison: {
    eyebrow: "Traditional Sale vs. Cash Sale",
    titleLead: "Traditional sale vs. ",
    titleEm: "cash sale.",
    titleTail: "",
    lede: "See how a traditional listing compares to selling to us for cash in Largo.",
    traditionalLabel: "Traditional Listing",
    traditionalTimeline: "9 days – 14 weeks",
    cashLabel: "We Buy St Pete Houses",
    cashTimeline: "7 days – 11 weeks",
    rows: LARGO_COMPARE_ROWS,
  },
  faq: {
    eyebrow: "FAQs",
    titleLead: "Frequently asked questions about selling ",
    titleEm: "for cash",
    titleTail: " in Largo.",
    items: [
      {
        q: "What is the fastest way to sell my Largo home to a cash buyer?",
        a: "Our cash offers can close in as little as 7 days in Largo, with no repairs or commissions. Contact us, we evaluate your home, and you receive a fair cash offer. If you accept, we can close on your timeline — sometimes in less than a week.",
      },
      {
        q: "Are there fees or commissions when selling to a cash buyer?",
        a: "No — there are no commissions or fees when selling to us. We never charge you for our service, and there are no hidden costs. The offer we make is the amount you walk away with at closing.",
      },
      {
        q: "Can I sell my Largo home as-is for cash?",
        a: "Yes — we buy homes in any condition and pay cash. You don't need to make repairs, clean, or stage the property. We handle everything and buy as-is.",
      },
      {
        q: "What is your typical closing timeline for Largo properties?",
        a: "Cash offers in Largo can close quickly, often within 7–14 days depending on the situation. We work on your schedule — if you need more time, we can accommodate that too.",
      },
      {
        q: "What kinds of homes do you buy in Largo?",
        a: "We buy single-family homes, condos, townhouses, multi-family properties, and vacant land anywhere in the Largo and greater Tampa Bay area — in any condition and any price range.",
      },
      {
        q: "Do I need to clean or repair anything before selling?",
        a: "Not a thing. Leave what you don't want behind, take what you do, and we handle the rest. You don't need to clean, repair, or stage your Largo home before we make an offer.",
      },
      {
        q: "Is the offer truly no-obligation?",
        a: "Absolutely. We'll present you with a written cash offer — take it, leave it, or negotiate. There's no pressure and no obligation to accept. You're free to walk away at any point before signing.",
      },
      {
        q: "What areas do you serve besides Largo?",
        a: "We serve Largo and the greater Tampa Bay area, including St. Petersburg, Clearwater, Gulfport, Pinellas Park, Palm Harbor, Tampa, Dunedin, and surrounding communities.",
      },
    ],
  },
  finalCta: {
    titleLead: "Ready to ",
    titleEm: "sell your Largo home",
    titleTail: " for cash?",
    description: "Get your no-obligation cash offer within 24 hours. No repairs, no fees, close in as little as 7 days.",
  },
};

const DUNEDIN: CityFullContent = {
  sectionOrder: [
    "process",
    "comparison",
    "areas",
    "situations",
    "testimonials",
    "market",
    "guarantee",
    "contact",
    "faq",
    "finalCta",
  ],
  heroEyebrow: "Dunedin, Florida · Cash Home Buyers",
  heroSubheadline:
    "A small local team of buyers — purchasing homes across Pinellas County in Dunedin. No repairs, no agents, no fees, no surprises. Close on your timeline, often in about a week.",
  formTitle: "Tell us about your home.",
  formIntro: "Get your fair cash offer — no obligation, no hassle.",
  authorRole: "Local Dunedin Home Buyer · Pinellas County, FL",
  process: {
    eyebrow: "How It Works",
    titleLead: "How selling to a ",
    titleEm: "cash buyer",
    titleTail: " works in Dunedin.",
    lede: "You provide basic info about your property, we present a cash offer, and you pick a closing date. It's that simple — no showings, no contingencies, no surprises.",
    steps: [
      {
        num: "01",
        title: "Submit Your Property Details",
        body: "Share your Dunedin home's address, condition, and any relevant details. This takes just a few minutes and starts the process immediately.",
      },
      {
        num: "02",
        title: "Receive a No-Obligation Cash Offer",
        body: "We review your property and present a fair, written cash offer. No pressure to accept — you decide what's best for you and your timeline.",
      },
      {
        num: "03",
        title: "Close on Your Timeline",
        body: "Once you accept, we schedule a closing date that fits your needs. You receive your cash with no surprise fees, no agent cuts, no delays.",
      },
    ],
    primaryCtaLabel: "Start with a cash offer",
    secondaryCtaLabel: PROCESS_SECONDARY_CTA,
  },
  comparison: {
    eyebrow: "Cash Sale vs. Traditional Listing",
    titleLead: "What makes our ",
    titleEm: "cash offers different.",
    titleTail: "",
    lede: "Our offers require no repairs and protect you from selling costs. Here's how a cash sale compares to a traditional MLS listing in Dunedin.",
    traditionalLabel: "Traditional Listing",
    cashLabel: "We Buy St Pete Houses",
    rows: DUNEDIN_COMPARE_ROWS,
  },
  areas: {
    eyebrow: "Where We Buy",
    titleLead: "Across ",
    titleEm: "Dunedin",
    titleTail: " and Tampa Bay.",
    lede: "We serve Dunedin and the greater Tampa Bay area. Wherever your property is in the region, we're ready to make you a fair cash offer.",
    areas: [
      "Dunedin",
      "St. Petersburg",
      "Clearwater",
      "Gulfport",
      "Largo",
      "Pinellas Park",
      "Palm Harbor",
      "Tampa",
      "New Port Richey",
      "Hudson",
      "Palmetto",
      "Sarasota",
    ],
  },
  situations: {
    eyebrow: "Seller Situations",
    titleLead: "Situations we help Dunedin homeowners ",
    titleEm: "solve.",
    titleTail: "",
    lede: "We buy in many tough-sell situations to simplify the process. Whether you're dealing with urgent circumstances or simply want a fast, hassle-free sale, we can help.",
    items: [
      {
        icon: "🏚️",
        title: "Foreclosure / Pre-foreclosure",
        body: "Avoid the stress and credit damage of foreclosure with a quick cash sale before the deadline.",
      },
      {
        icon: "⚖️",
        title: "Divorce or Separation",
        body: "Sell jointly owned Dunedin property quickly and cleanly so both parties can move forward.",
      },
      {
        icon: "📋",
        title: "Inherited / Probate Property",
        body: "Settle an estate without the burden of maintaining or listing a home. We buy probate properties as-is.",
      },
      {
        icon: "🔑",
        title: "Tired Landlord / Problem Tenants",
        body: "Exit the landlord business fast. We buy rental properties with tenants in place — no evictions required.",
      },
      {
        icon: "📦",
        title: "Relocation / Job Transfer",
        body: "Need to move quickly for work or family? We close on your timeline so you can focus on what's next.",
      },
      {
        icon: "🏷️",
        title: "Vacant or Hard-to-Sell Property",
        body: "Get out from under a property sitting empty or struggling to sell through traditional channels.",
      },
    ],
  },
  testimonials: {
    eyebrow: "What Our Customers Say",
    titleLead: "What Dunedin homeowners ",
    titleEm: "are saying.",
    titleTail: "",
    lede: "Real homeowners share fast closes and transparent offers. Our no-obligation approach means you're never pressured.",
    items: [
      {
        quote:
          "They made the whole process so easy. I got an offer the next day, and we closed in eight days. No repairs, no fees — exactly what they promised from the start.",
        name: "Margaret T.",
        meta: "Dunedin Homeowner · Sold in 8 Days",
        initials: "M",
      },
      {
        quote:
          "I inherited my mother's home and had no idea what to do with it. John walked me through everything, and I walked away with a fair price and zero stress.",
        name: "Robert K.",
        meta: "Dunedin Homeowner · Probate Sale",
        initials: "R",
      },
    ],
  },
  market: {
    eyebrow: "Local Market Knowledge",
    titleLead: "Why ",
    titleEm: "local expertise",
    titleTail: " matters.",
    lede: "Deep Dunedin market knowledge drives faster, fairer offers. We know the neighborhoods, price trends, and local factors that affect value — from waterfront properties to inland homes.",
    factors: [
      {
        letter: "A",
        title: "Neighborhood-specific pricing",
        body: "We track recent comparable sales in your exact Dunedin neighborhood — not just city-wide averages — so every offer reflects real local data.",
      },
      {
        letter: "B",
        title: "Waterfront to inland expertise",
        body: "Dunedin's market varies significantly by location. We've closed deals across all of Dunedin's diverse neighborhoods and know what drives value in each.",
      },
      {
        letter: "C",
        title: "No appraisal delays",
        body: "Our local expertise means we can assess your home quickly and make a competitive offer without the delays of traditional appraisals or lengthy market analysis.",
      },
    ],
  },
  guarantee: {
    eyebrow: "Clear Terms",
    titleLead: "Clear terms. ",
    titleEm: "No surprises.",
    titleTail: "",
    lede: "The terms we commit to are exactly what you'll see sitting on the other side of the table at closing.",
    items: [
      {
        title: "No commissions",
        body: "We never charge real estate commissions. The offer we make is yours to keep — no percentage withheld.",
      },
      {
        title: "No repairs",
        body: "We buy as-is. Leave the property in whatever condition it's in — we handle everything after closing.",
      },
      {
        title: "No closing fees",
        body: "We cover typical closing costs so there are no surprise deductions when you get to the settlement table.",
      },
      {
        title: "No financing contingencies",
        body: "Our offers are all cash — no buyer financing to fall through, no last-minute surprises before closing day.",
      },
    ],
    asideTitle: "Ready to see your number?",
    asideBody:
      "Get a no-obligation cash offer for your Dunedin home. No pressure, no commitment — just a fair, transparent offer.",
  },
  contact: {
    eyebrow: "Get In Touch",
    titleLead: "Get your ",
    titleEm: "fair cash offer",
    titleTail: " today.",
    lede: "There's no obligation and no pressure — just a straightforward process designed to make selling your Dunedin house as easy as possible. Choose a closing date that works for you, receive your cash, and move forward with confidence.",
  },
  faq: {
    eyebrow: "FAQs",
    titleLead: "Frequently asked questions about selling ",
    titleEm: "for cash",
    titleTail: " in Dunedin.",
    items: [
      {
        q: "How fast can you close when selling to cash buyers?",
        a: "We can close on your timeline, often in about a week, depending on your schedule and the title status of the property. There are no financing contingencies to slow things down — just a simple, certain process.",
      },
      {
        q: "Do I have to repair or clean the house before selling?",
        a: "Not a thing. We buy houses as-is, with no required repairs or cleaning. Leave what you don't want, take what you do — we handle everything else after closing.",
      },
      {
        q: "Are there fees or commissions when selling to a cash buyer?",
        a: "There are no agent commissions or real estate fees when selling to us. We cover the closing costs too — so the offer we make is the amount you walk away with.",
      },
      {
        q: "Is the cash offer really all cash, no financing?",
        a: "Yes — our offers are cash-based with no financing contingencies. This means a guaranteed close without the risk of a buyer's mortgage falling through at the last minute.",
      },
      {
        q: "What information is needed to start the process?",
        a: "Just your property's address, its current condition, and any relevant details about your situation. We'll review everything and present you with a no-obligation cash offer — usually within 24 hours.",
      },
      {
        q: "What if my house is in foreclosure or probate?",
        a: "We buy in various urgent situations, including foreclosure and probate. Our fast closing timeline can help you avoid foreclosure or settle an estate without the burden of a prolonged listing process.",
      },
      {
        q: "Can I see the offer before committing to close?",
        a: "Absolutely. You'll receive the full written cash offer during the no-obligation review stage — well before any closing date is set. You have complete transparency and time to decide if it's right for you.",
      },
      {
        q: "What areas do you serve besides Dunedin?",
        a: "We serve Dunedin and the greater Tampa Bay area, including St. Petersburg, Clearwater, Gulfport, Largo, Pinellas Park, Palm Harbor, Tampa, New Port Richey, Hudson, Sarasota, and surrounding communities.",
      },
      {
        q: "How do you determine a fair cash offer for my Dunedin home?",
        a: "Our offers are based on current market conditions, recent comparable sales in your neighborhood, your home's current condition, and the cost of any needed repairs. We're transparent about how we arrive at every number — no gimmicks, no lowballing.",
      },
      {
        q: "What makes your cash offers different from other Dunedin buyers?",
        a: "We're a local team with real ties to the Tampa Bay community — not a national franchise. Our offers are all-cash, as-is, with no commissions and flexible closing timelines. Local expertise means faster, more accurate offers and a smoother close.",
      },
    ],
  },
  finalCta: {
    titleLead: "Ready to sell your ",
    titleEm: "Dunedin home",
    titleTail: " for cash?",
    description: "Get your no-obligation cash offer within 24 hours. No repairs, no fees — close on your timeline.",
  },
};

const PINELLAS_PARK_COMPARE_ROWS: CityCompareRow[] = [
  { label: "Timeline to close", traditional: "3–6+ months", cash: "7–30 days" },
  { label: "Repairs required", traditional: "Usually required", cash: "None — we buy as-is" },
  { label: "Showings & open houses", traditional: "Multiple", cash: "None" },
  { label: "Agent commissions", traditional: "5–6% of sale price", cash: "$0" },
  { label: "Closing costs", traditional: "Seller typically pays", cash: "We cover them" },
  { label: "Deal certainty", traditional: "Risk of financing fail", cash: "High — all cash" },
  { label: "Closing date control", traditional: "Buyer's timeline", cash: "You choose" },
];

const PINELLAS_PARK: CityFullContent = {
  sectionOrder: [
    "process",
    "areas",
    "testimonials",
    "market",
    "guarantee",
    "comparison",
    "situations",
    "resources",
    "faq",
    "finalCta",
  ],
  heroEyebrow: "Pinellas Park, FL · Cash Home Buyers",
  heroSubheadline:
    "A local team of homebuyers — buying homes across Pinellas Park. No listing. No agents, no repairs, no surprises.",
  formTitle: "Tell us about your home.",
  formIntro: "Get a fair, no-obligation cash offer in minutes.",
  authorRole: "Local Home Buyer · Tampa Bay Area",
  process: {
    eyebrow: "How It Works",
    titleLead: "How our ",
    titleEm: "cash offer",
    titleTail: " process works.",
    lede: "Our quick steps: No bidding wars, no repair houses, certain results felt throughout.",
    steps: [
      {
        num: "01",
        title: "Tell us about the home",
        body: "Call (727) 477-8998 or fill out our form with your property address in Pinellas Park. Takes less than 2 minutes.",
      },
      {
        num: "02",
        title: "We visit, in person",
        body: "A local team member schedules a brief walk-through at a time that works for you—no pressure, no strangers in your home.",
      },
      {
        num: "03",
        title: "Receive a written offer",
        body: "We present a fair, no-obligation cash offer. We explain exactly how we arrived at the number. No surprises, no lowballing.",
      },
      {
        num: "04",
        title: "Close on your timeline",
        body: "You pick the closing date—as soon as 7 days or several months out. Get cash in hand when you need it most.",
      },
      {
        num: "05",
        title: "No repairs. No showings.",
        body: "We buy your home completely as-is. No cleaning, no staging, no renovation required before you close.",
      },
      {
        num: "06",
        title: "Walk away with cash",
        body: "At closing, you receive your full cash payment—zero agent commissions, zero hidden fees, zero deductions.",
      },
    ],
    primaryCtaLabel: "Start with a free offer",
    secondaryCtaLabel: PROCESS_SECONDARY_CTA,
  },
  areas: {
    eyebrow: "Service Area",
    titleLead: "Across ",
    titleEm: "Pinellas Park",
    titleTail: " and Tampa Bay.",
    lede: "We focus on the neighborhoods we know personally — this lets us think like families looking to sell homes as a new business.",
    areas: [
      "Pinellas Park",
      "St. Petersburg",
      "Clearwater",
      "Gulfport",
      "Largo",
      "Palm Harbor",
      "Tampa",
      "Bradenton",
      "Palmetto",
      "Sarasota",
      "Hudson",
      "New Port Richey",
      "Dunedin",
      "And more",
    ],
  },
  testimonials: {
    eyebrow: "Reviews",
    titleLead: "What our ",
    titleEm: "customers",
    titleTail: " say.",
    lede: "Selling a property is personal. Here are a few of the Pinellas Park families we've had the honor to help.",
    items: [
      {
        quote:
          "They were patient, kind, and didn't push. The offer arrived the next morning and was exactly what they said it would be. Closed in nine days — I couldn't believe how smooth it went.",
        name: "Karen P.",
        meta: "Pinellas Park, FL",
        initials: "KP",
      },
      {
        quote:
          "I'd put off selling for two years. Marcus walked through the house with me and answered every question. We closed in nine days. The whole thing was stress-free from start to finish.",
        name: "Daniel H.",
        meta: "St. Petersburg, FL",
        initials: "DH",
      },
    ],
  },
  market: {
    eyebrow: "Market Intelligence",
    titleLead: "Understanding the ",
    titleEm: "Pinellas Park",
    titleTail: " cash home market.",
    lede: "",
    factors: [
      {
        letter: "A",
        title: "Block-level comps",
        body: "We analyze comparable sales street by street — not just zip code averages. Local pricing means you get a fair number tied to your actual neighborhood.",
      },
      {
        letter: "B",
        title: "Condition-based pricing",
        body: "We account for your property's as-is condition, not idealized list-price assumptions. Every offer includes a clear breakdown of how condition affects value.",
      },
      {
        letter: "C",
        title: "No contingencies",
        body: "We never ask questions, re-negotiate after inspection, or leave you waiting on financing approvals. Cash means certain.",
      },
      {
        letter: "D",
        title: "Title clarity upfront",
        body: "We work with trusted local title companies and flag any potential issues early so your closing stays on schedule.",
      },
    ],
  },
  guarantee: {
    eyebrow: "Clear Terms",
    titleLead: "Clear terms. ",
    titleEm: "No surprises.",
    titleTail: "",
    lede: "The same numbers you'd want us to show you on day one are sitting on the last line of the contract.",
    items: [
      {
        title: "No commissions",
        body: "We buy direct — no agent fees, no listing costs, no percentage off the top.",
      },
      {
        title: "No repairs",
        body: "We buy as-is. Don't spend a dollar on fixes — we handle all of that after closing.",
      },
      {
        title: "No closing fees",
        body: "We cover standard closing costs. The number in the offer is the number you receive.",
      },
      {
        title: "No staging or showings",
        body: "We don't send strangers through your home. One visit, one offer, done.",
      },
    ],
    asideTitle: "Ready for a fair offer on your Pinellas Park home?",
    asideBody:
      "We'll review your property and present a transparent, no-obligation cash offer. No pressure, no games — just a clear number and an honest conversation about your options.",
  },
  comparison: {
    eyebrow: "Compare Your Options",
    titleLead: "Traditional sale vs. ",
    titleEm: "cash sale.",
    titleTail: "",
    lede: "A cash sale removes every bottleneck: no lender approval, no inspection contingencies, no repair negotiations, no deal falling through at the last minute.",
    traditionalLabel: "Traditional Listing",
    traditionalTimeline: "9–14 wks",
    cashLabel: "We Buy St Pete Houses",
    cashTimeline: "7–11 days",
    rows: PINELLAS_PARK_COMPARE_ROWS,
  },
  situations: {
    eyebrow: "We Buy in Any Situation",
    titleLead: "We buy houses ",
    titleEm: "in any situation.",
    titleTail: "",
    lede: "We buy properties in a variety of situations. Our flexible, as-is approach means we can help when traditional buyers can't.",
    items: [
      {
        icon: "🏦",
        title: "Foreclosure",
        body: "Stop foreclosure and walk away with cash before the bank takes action.",
      },
      {
        icon: "⚖️",
        title: "Divorce",
        body: "Quick, fair property division without the stress of a traditional sale.",
      },
      {
        icon: "🏛️",
        title: "Inherited Property",
        body: "Simplify estate settlement with a fast, hassle-free cash sale.",
      },
      {
        icon: "🔑",
        title: "Problem Tenants",
        body: "Sell quickly even with difficult tenant situations — we handle it.",
      },
      {
        icon: "🔨",
        title: "As-Is Condition",
        body: "No repairs, no cleaning, no upgrades required before closing.",
      },
      {
        icon: "🚚",
        title: "Relocation",
        body: "Sell on your timeline before you move — no waiting for the market.",
      },
      {
        icon: "🏚️",
        title: "Vacant Homes",
        body: "Eliminate maintenance costs and holding expenses with a fast sale.",
      },
      {
        icon: "📉",
        title: "Liens or Mortgage",
        body: "Upside-down mortgage or liens? We can work through creative solutions.",
      },
    ],
  },
  resources: {
    eyebrow: "Local Resources",
    titleLead: "Local resources for ",
    titleEm: "Pinellas Park",
    titleTail: " sellers.",
    lede: "We guide you to local offices and documents you'll need for a quick close.",
    items: [
      {
        icon: "💵",
        title: "Pinellas County Tax Collector",
        sub: "Property tax records and payment information",
        href: "https://pinellastaxcollector.gov/",
      },
      {
        icon: "📋",
        title: "Pinellas County Property Appraiser",
        sub: "Official property valuations and assessment data",
        href: "https://www.pcpao.gov/",
      },
      {
        icon: "⚖️",
        title: "Pinellas County Clerk of the Circuit Court",
        sub: "Deed recording and official property records",
        href: "https://www.pinellasclerk.org/",
      },
      {
        icon: "🏛️",
        title: "City of Pinellas Park – City Hall",
        sub: "Local permits and municipal information",
        href: "https://www.pinellas-park.com/",
      },
      {
        icon: "🤝",
        title: "Pinellas County Consumer Affairs",
        sub: "Consumer protection and dispute resolution",
        href: "https://www.pinellascounty.org/residential/consumer.htm",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    titleLead: "Frequently asked questions about selling ",
    titleEm: "for cash",
    titleTail: " in Pinellas Park.",
    items: [
      {
        q: "How is my cash offer calculated?",
        a: "Offers are based on your property's condition, location, and local Pinellas Park market data. We analyze recent comparable sales, repair costs we'll take on after purchase, and current market timing — then explain the formula clearly so you understand exactly how we arrived at the number.",
      },
      {
        q: "Are there any fees or commissions?",
        a: "Zero. No commissions, no agent fees, no closing costs charged to you. The cash offer you receive is exactly what you'll get at closing.",
      },
      {
        q: "What kinds of homes do you buy?",
        a: "Any condition, any situation. Single-family, multi-family, inherited properties, homes in foreclosure, properties with tenants, vacant homes — we buy them all in the Pinellas Park and Tampa Bay area.",
      },
      {
        q: "Do I need to clean or repair anything?",
        a: "No. We buy completely as-is. Leave whatever you don't want to take — we handle all cleanup and repairs after closing.",
      },
      {
        q: "How fast can we close?",
        a: "We can close in as little as 7 days, or on whatever timeline works best for you — even several months out. You control the closing date.",
      },
      {
        q: "Will I work with a real person?",
        a: "Yes. You'll work directly with John Gardepe and our local Tampa Bay team — not a call center. We're your neighbors, not a national corporation.",
      },
      {
        q: "Is the offer truly no-obligation?",
        a: "Completely. You're never obligated to accept our offer, and you can walk away at any time before signing. No pressure, no follow-up calls if you say no.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to sell?",
    titleLead: "Sell your ",
    titleEm: "Pinellas Park",
    titleTail: " house for cash.",
    description:
      "No repairs. No fees. No waiting. Get a fair cash offer from a local team that knows the Tampa Bay market.",
  },
};

export const CITY_FULL_CONTENT: Record<string, CityFullContent> = {
  "we-buy-houses-st-petersburg-fl": ST_PETERSBURG,
  "we-buy-houses-clearwater-fl": CLEARWATER,
  "we-buy-houses-largo-fl": LARGO,
  "we-buy-houses-dunedin-fl": DUNEDIN,
  "we-buy-houses-pinellas-park-fl": PINELLAS_PARK,
};

export function getCityFullContent(route: string): CityFullContent | undefined {
  return CITY_FULL_CONTENT[route];
}

export function buildCityTitleParts(cityName: string) {
  return {
    lead: "We buy houses in ",
    em: cityName,
    tail: " for fast, fair cash.",
  };
}
