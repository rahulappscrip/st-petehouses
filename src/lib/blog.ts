export type BlogCategory = "process" | "market" | "situations" | "prep" | "legal";

export type ImageTone = "sun" | "teal" | "ink" | "leaf" | "gold" | "sand";

export type BlogTocItem = {
  id: string;
  label: string;
};

export type BlogFaqItem = {
  q: string;
  a: string;
};

export type BlogNextCtaContent = {
  eyebrow: string;
  title: { before: string; emphasis: string; after: string };
  description: string;
  secondaryCta?: { label: string; href: string };
  asideLabel: string;
  asideBullets: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  detailHeadline?: {
    before: string;
    emphasis: string;
    after: string;
  };
  titleEmphasis?: string;
  excerpt: string;
  category: BlogCategory;
  categoryLabel: string;
  date: string;
  dateDisplay: string;
  readTime: string;
  author: string;
  authorInitials: string;
  authorRole: string;
  featured?: boolean;
  featuredTag?: string;
  imageTone: ImageTone;
  imageGlyph?: string;
  tagVariant?: "sun";
  heroImage?: string;
  heroImageAlt?: string;
  heroImageCaption?: string;
  tags?: string[];
  metaDescription: string;
  toc?: BlogTocItem[];
  faq?: BlogFaqItem[];
  nextCta?: BlogNextCtaContent;
  listTitle?: string;
  listExcerpt?: string;
  featuredImageLabel?: string;
  excludeFromListing?: boolean;
  isPlaceholder?: boolean;
};

export const BLOG_LISTING_PAGE_SIZE = 9;

export const BLOG_PAGE = {
  metaDescription:
    "Everything St. Petersburg homeowners need to know about selling their house in any situation — foreclosure, inherited property, insurance problems, flood damage, HOA issues and more. Written by We Buy St Pete Houses.",
  eyebrow: "Blog · Seller resources",
  lede:
    "Everything St. Petersburg homeowners need to know about selling their house — in any situation. Foreclosure, divorce, inherited property, insurance problems, flood damage, code violations, and more. Straightforward guides written by John Gardepe and the We Buy St Pete Houses team. No fluff, no fear-bait.",
} as const;

export const DEFAULT_BLOG_NEXT_CTA: BlogNextCtaContent = {
  eyebrow: "Next steps",
  title: {
    before: "Ready for a ",
    emphasis: "fair cash offer",
    after: "?",
  },
  description:
    "Tell us about your property. A written offer within 24 hours — no obligation, no pressure, no repair requests.",
  secondaryCta: { label: 'Visit "Sell Your House"', href: "/sell-your-house" },
  asideLabel: "Talk to John directly",
  asideBullets: [
    "Local team — no call centers",
    "Works with your probate timeline",
    "SellFast@WeBuyStPeteHouses.com",
  ],
};

export const BLOG_CATEGORIES: {
  id: BlogCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All articles" },
  { id: "process", label: "Cash sale process" },
  { id: "market", label: "Market insights" },
  { id: "situations", label: "Tough situations" },
  { id: "prep", label: "Sale prep" },
  { id: "legal", label: "Florida law" },
];

const BLOG_IMAGE = "/assets/images";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "short-term-rental-ban-st-petersburg",
    title: "Short Term Rental Ban in St. Petersburg, FL: What Homeowners and Investors Need to Know",
    excerpt:
      "St. Pete's short-term rental ordinance explained — who it affects, what the enforcement timeline looks like, and your options if you're holding a property you can no longer rent. Essential reading for STR owners, Airbnb hosts, and investors in Pinellas County.",
    category: "legal",
    categoryLabel: "Florida law",
    date: "2026-05-30",
    dateDisplay: "May 30, 2026",
    readTime: "8 min read",
    author: "John Gardepe",
    authorInitials: "JG",
    authorRole: "Co-Founder & Head of Acquisitions",
    featured: true,
    featuredTag: "Featured · New guide",
    excludeFromListing: true,
    imageTone: "teal",
    imageGlyph: "🏠",
    heroImage: `${BLOG_IMAGE}/1-Short-Term-Rental-Ban-in-St-Petersburg-FL.webp`,
    heroImageAlt:
      "Short Term Rental Ban in St. Petersburg, FL: What Homeowners and Investors Need to Know",
    tags: ["Florida law", "Short-term rental", "St Petersburg"],
    metaDescription:
      "St. Petersburg's short-term rental rules explained — zoning, licensing, the 30-day threshold, enforcement risks, and what to do if STR no longer makes sense for your property.",
    isPlaceholder: true,
  },
  {
    slug: "how-as-is-really-works-when-a-cash-buyer-inspects",
    title: 'How "as-is" really works when a cash buyer inspects your home',
    excerpt:
      "What an as-is inspection includes, what triggers a re-trade, and how to read a fair cash offer line by line.",
    category: "process",
    categoryLabel: "Cash sale process",
    date: "2026-05-18",
    dateDisplay: "May 18, 2026",
    readTime: "6 min read",
    author: "John Gardepe",
    authorInitials: "JG",
    authorRole: "Co-Founder & Head of Acquisitions",
    imageTone: "sun",
    imageGlyph: "$",
    tagVariant: "sun",
    heroImage: `${BLOG_IMAGE}/2-How-As-Is-Really-Works-When-a-Cash-Buyer-Inspects-Your-Home.webp`,
    heroImageAlt: 'How "as-is" really works when a cash buyer inspects your home',
    tags: ["Cash sale process", "As-is"],
    metaDescription:
      "What an as-is cash buyer inspection really covers, when offers get adjusted, and how to evaluate a fair written cash offer.",
    isPlaceholder: true,
  },
  {
    slug: "st-pete-neighborhoods-cash-offers-q2-2026",
    title: "St Pete neighborhoods where cash offers are strongest in Q2 2026",
    excerpt:
      "A look at Historic Kenwood, Old Northeast and Disston Heights — and where seller leverage actually sits this quarter.",
    category: "market",
    categoryLabel: "Market insights",
    date: "2026-05-12",
    dateDisplay: "May 12, 2026",
    readTime: "7 min read",
    author: "John Gardepe",
    authorInitials: "JG",
    authorRole: "Co-Founder & Head of Acquisitions",
    imageTone: "teal",
    imageGlyph: "↗",
    heroImage: `${BLOG_IMAGE}/3-St-Pete-Neighborhoods-Where-Cash-Offers-Are-Strongest.webp`,
    heroImageAlt: "St Pete neighborhoods where cash offers are strongest in Q2 2026",
    tags: ["Market insights", "St Petersburg"],
    metaDescription:
      "Q2 2026 look at St Petersburg neighborhoods where cash offers are strongest and what that means for sellers.",
    isPlaceholder: true,
  },
  {
    slug: "how-to-price-an-inherited-home-in-florida",
    title: "How to price an inherited home in Florida: a practical guide for heirs",
    detailHeadline: {
      before: "How to price an ",
      emphasis: "inherited home",
      after: " in Florida.",
    },
    excerpt:
      "A practical, Florida-specific framework for heirs — probate timing, the federal stepped-up basis, honest local comps, and choosing between a listing or a cash sale. From John Gardepe, a local St. Petersburg buyer who's helped families through this many times.",
    listTitle: "How to price an inherited home in Florida: a practical guide",
    listExcerpt:
      "Probate timing, stepped-up basis, honest comps, and how to choose between a listing or a cash sale.",
    category: "situations",
    categoryLabel: "Tough situations",
    date: "2026-05-27",
    dateDisplay: "May 27, 2026",
    readTime: "10 min read",
    author: "John Gardepe",
    authorInitials: "JG",
    authorRole: "Co-Founder & Head of Acquisitions",
    imageTone: "ink",
    imageGlyph: "⚖",
    heroImage: `${BLOG_IMAGE}/4-How-to-Price-an-Inherited-Home-in-Florida.webp`,
    heroImageAlt:
      "How to price an inherited home in Florida: a practical guide for heirs",
    heroImageCaption: "Florida heirs weighing pricing options · Hero image",
    tags: ["Inherited & Probate", "Florida", "Pricing guide"],
    metaDescription:
      "Learn how to price an inherited home in Florida step by step — covering probate timing, stepped-up tax basis, local comps, and when a cash sale makes sense.",
    toc: [
      { id: "framework", label: "Florida pricing framework" },
      { id: "probate-timing", label: "Probate timing & price" },
      { id: "factors", label: "Florida-specific value factors" },
      { id: "checklist", label: "5-step pricing checklist" },
      { id: "mistakes", label: "Common pricing mistakes" },
      { id: "cash-offers", label: "Cash offers & fast sales" },
      { id: "taxes", label: "Tax basics for Florida heirs" },
      { id: "comps", label: "Using comps & probate data" },
      { id: "adapt-national", label: "Adapting national advice" },
      { id: "faq", label: "FAQ" },
    ],
    nextCta: {
      eyebrow: "Next steps",
      title: {
        before: "Now you know how to ",
        emphasis: "price an inherited home",
        after: " in Florida.",
      },
      description:
        "Thank you for working through what can be a tough topic. If you're dealing with an inherited property in St. Petersburg, Clearwater, Tampa, or anywhere in the Greater Tampa Bay area and a fast, as-is cash sale sounds like it might fit your situation, we can work with your probate timeline and purchase the home in its current condition. No repairs, no staging, no waiting for buyer financing.",
      secondaryCta: { label: 'Visit "Sell Your House"', href: "/sell-your-house" },
      asideLabel: "Talk to John directly",
      asideBullets: [
        "Local team — no call centers",
        "Works with your probate timeline",
        "SellFast@WeBuyStPeteHouses.com",
      ],
    },
    faq: [
      {
        q: "Do you have to pay taxes on inherited property that you sell in Florida?",
        a: "Florida does not have its own estate or inheritance tax for decedents who died on or after January 1, 2005. However, if you sell the inherited home for more than its stepped-up basis — generally the fair market value at the date of death — you may owe federal capital gains tax on the difference. Consult a tax professional for your specific situation.",
      },
      {
        q: "What is the typical probate timeline in Florida?",
        a: "For a simple, uncontested estate, Florida Bar guidance indicates a 3-month creditor-claims period after notice, with many straightforward probates remaining open for roughly 5–6 months. Contested estates can take considerably longer.",
      },
      {
        q: "What is a practical Florida-specific pricing framework for inherited homes?",
        a: "Blend four elements: probate status and timeline, federal stepped-up tax basis, recent local comparable sales adjusted for condition, and the heirs' priorities for speed versus top price.",
      },
      {
        q: "Can I sell an inherited home in Florida before probate ends?",
        a: "In many cases, the personal representative can enter a purchase contract during probate, but transfer of title and closing may require court approval. Work with a Florida probate attorney before signing anything binding.",
      },
      {
        q: "What are common mistakes heirs make when pricing inherited Florida property?",
        a: "Overpricing on emotional attachment, assuming the home can be sold without confirming probate status, misunderstanding stepped-up basis, underestimating carrying costs, and using outdated or non-local comps.",
      },
      {
        q: "How should I adapt general online pricing advice to Florida's rules?",
        a: "Verify tax guidance accounts for Florida having no state inheritance tax, layer in Florida probate timelines, factor in insurance and HOA costs, and cross-check example prices against recent local sales.",
      },
    ],
  },
  {
    slug: "florida-home-insurance-crisis-st-petersburg",
    title: "Florida's Home Insurance Crisis: What It Means If You're Trying to Sell in St. Petersburg",
    excerpt:
      "Carriers pulling out of Florida, premiums tripling, and buyers who can't get coverage — how the insurance crisis is reshaping what St. Pete homes actually sell for and who's buying them.",
    category: "market",
    categoryLabel: "Market insights",
    date: "2026-05-21",
    dateDisplay: "May 21, 2026",
    readTime: "8 min read",
    author: "John Gardepe",
    authorInitials: "JG",
    authorRole: "Co-Founder & Head of Acquisitions",
    imageTone: "gold",
    imageGlyph: "⚡",
    heroImage: `${BLOG_IMAGE}/5-Floridas-Home-Insurance-Crisis.webp`,
    heroImageAlt: "Florida's Home Insurance Crisis: What It Means If You're Trying to Sell in St. Petersburg",
    tags: ["Market insights", "Insurance", "St Petersburg"],
    metaDescription:
      "How Florida's home insurance crisis affects St. Petersburg sellers — premiums, carrier exits, and buyer financing challenges.",
    isPlaceholder: true,
  },
  {
    slug: "selling-st-pete-waterfront-home-cannot-insure",
    title: "Selling a St. Pete Waterfront Home You Can No Longer Insure",
    excerpt:
      "When your waterfront property becomes uninsurable — dropped by your carrier, flood zone reclassified, or premiums that price out every buyer — here are the paths still open to you.",
    category: "situations",
    categoryLabel: "Tough situations",
    date: "2026-05-05",
    dateDisplay: "May 5, 2026",
    readTime: "7 min read",
    author: "John Gardepe",
    authorInitials: "JG",
    authorRole: "Co-Founder & Head of Acquisitions",
    imageTone: "teal",
    imageGlyph: "🌊",
    heroImage: `${BLOG_IMAGE}/6-Selling-a-St.-Pete-Waterfront-Home-You-Can-No-Longer-Insure.webp`,
    heroImageAlt: "Selling a St. Pete Waterfront Home You Can No Longer Insure",
    tags: ["Tough situations", "Waterfront", "Insurance"],
    metaDescription:
      "Options for selling a St. Petersburg waterfront home that buyers or carriers won't insure.",
    isPlaceholder: true,
  },
  {
    slug: "inherited-st-pete-condo-hoa-special-assessments",
    title: "Selling an Inherited St. Pete Condo With HOA Special Assessments",
    excerpt:
      "When you inherit a St. Petersburg condo and discover a large HOA special assessment — what you owe, who's responsible, and how to sell without it derailing the transaction.",
    category: "situations",
    categoryLabel: "Tough situations",
    date: "2026-04-18",
    dateDisplay: "Apr 18, 2026",
    readTime: "7 min read",
    author: "John Gardepe",
    authorInitials: "JG",
    authorRole: "Co-Founder & Head of Acquisitions",
    imageTone: "leaf",
    imageGlyph: "⚖",
    heroImage: `${BLOG_IMAGE}/7-Selling-an-Inherited-St-Pete-Condo-With-HOA-Special-Assessments.webp`,
    heroImageAlt: "Selling an Inherited St. Pete Condo With HOA Special Assessments",
    tags: ["Tough situations", "Inherited", "HOA"],
    metaDescription:
      "How to sell an inherited St. Petersburg condo with HOA special assessments — responsibilities and sale options.",
    isPlaceholder: true,
  },
  {
    slug: "florida-flood-disclosure-sellers-guide",
    title: "Florida flood disclosure: what sellers must say (and what buyers will ask)",
    excerpt:
      "The 2024 statute update in plain English, with examples of clean vs. risky disclosures we've seen this season.",
    category: "legal",
    categoryLabel: "Florida law",
    date: "2026-04-09",
    dateDisplay: "Apr 9, 2026",
    readTime: "7 min read",
    author: "John Gardepe",
    authorInitials: "JG",
    authorRole: "Co-Founder & Head of Acquisitions",
    imageTone: "ink",
    imageGlyph: "§",
    heroImage: `${BLOG_IMAGE}/8-Florida-Flood-Disclosure.webp`,
    heroImageAlt: "Florida flood disclosure: what sellers must say (and what buyers will ask)",
    tags: ["Florida law", "Disclosure"],
    metaDescription:
      "Florida flood disclosure requirements explained for home sellers — what to disclose and what buyers expect.",
    isPlaceholder: true,
  },
  {
    slug: "tired-landlord-selling-tampa-rental-with-tenants",
    title: "Tired landlord guide: selling a Tampa rental with tenants in place",
    excerpt:
      "When to keep the lease, when to negotiate cash-for-keys, and how a cash buyer takes the property at the closing table.",
    category: "situations",
    categoryLabel: "Tough situations",
    date: "2026-04-28",
    dateDisplay: "Apr 28, 2026",
    readTime: "8 min read",
    author: "John Gardepe",
    authorInitials: "JG",
    authorRole: "Co-Founder & Head of Acquisitions",
    imageTone: "leaf",
    imageGlyph: "🔑",
    heroImage: `${BLOG_IMAGE}/Tired-land-lord.webp`,
    heroImageAlt: "Tired landlord guide: selling a Tampa rental with tenants in place",
    tags: ["Tough situations", "Tenants"],
    metaDescription:
      "Guide for Tampa Bay landlords selling a rental with tenants — lease options, cash-for-keys, and cash buyer closings.",
    isPlaceholder: true,
  },
  {
    slug: "facing-foreclosure-pinellas-county-options",
    title: "Facing foreclosure in Pinellas County? Your options, week by week",
    excerpt:
      "From the first missed payment to the foreclosure sale — what to do when, and how a cash close fits in.",
    category: "situations",
    categoryLabel: "Tough situations",
    date: "2026-04-03",
    dateDisplay: "Apr 3, 2026",
    readTime: "8 min read",
    author: "John Gardepe",
    authorInitials: "JG",
    authorRole: "Co-Founder & Head of Acquisitions",
    imageTone: "sun",
    imageGlyph: "⚠",
    tagVariant: "sun",
    heroImage: `${BLOG_IMAGE}/9-Facing-Foreclosure-in-Pinellas-County.webp`,
    heroImageAlt: "Facing foreclosure in Pinellas County? Your options, week by week",
    tags: ["Tough situations", "Foreclosure", "Pinellas County"],
    metaDescription:
      "Week-by-week foreclosure options for Pinellas County homeowners and how a cash sale can help.",
    isPlaceholder: true,
  },
  {
    slug: "tampa-bay-days-on-market-cash-offers",
    title: "Tampa Bay days-on-market trends — what cash offers look like at speed",
    excerpt:
      "Why median DOM doesn't tell the whole story for as-is sales, and how that shapes the offer you receive from us.",
    category: "market",
    categoryLabel: "Market insights",
    date: "2026-03-27",
    dateDisplay: "Mar 27, 2026",
    readTime: "6 min read",
    author: "John Gardepe",
    authorInitials: "JG",
    authorRole: "Co-Founder & Head of Acquisitions",
    imageTone: "teal",
    imageGlyph: "📊",
    heroImage: `${BLOG_IMAGE}/10-Tampa-Bay-Days-on-Market-Trends.webp`,
    heroImageAlt: "Tampa Bay days-on-market trends — what cash offers look like at speed",
    tags: ["Market insights", "Tampa Bay"],
    metaDescription:
      "Tampa Bay days-on-market trends and what they mean for as-is cash offers.",
    isPlaceholder: true,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.featured);
}

export function getCategoryCount(category: BlogCategory | "all"): number {
  if (category === "all") return BLOG_POSTS.length;
  return BLOG_POSTS.filter((post) => post.category === category).length;
}

export function getBlogPostHref(slug: string): string {
  return `/blog/${slug}`;
}
