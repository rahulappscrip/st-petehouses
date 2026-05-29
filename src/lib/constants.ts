export const ASSETS = {
  johnPortrait: "/assets/images/john-gardepe.webp",
  bbbBadge: "/assets/images/bbb-client.png",
  logo: "/assets/images/logo.png",
} as const;

export const SITE = {
  name: "We Buy St Pete Houses",
  tagline: "Tampa Bay · FL",
  phone: "(727) 477-8998",
  phoneHref: "tel:+17274778998",
  email: "SellFast@WeBuyStPeteHouses.com",
  contactEmail: "hello@webuystpetehouses.com",
  address: "PO Box 143, St. Petersburg, FL 33731",
  url: "https://webuystpetehouses.com/",
} as const;

export const TOPBAR = {
  rating: "Rated 5.0 by 120+ Tampa Bay home sellers",
  bbb: "BBB A+ Accredited",
  homes: "500+ Homes Bought",
} as const;

export const NAV_LINKS = {
  primary: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Reviews", href: "/reviews" },
  ],
  locations: {
    cities: [
      { label: "St Petersburg", href: "/we-buy-houses-st-petersburg-fl" },
      { label: "Tampa", href: "/we-buy-houses-tampa-fl" },
      { label: "Clearwater", href: "/we-buy-houses-clearwater-fl" },
      { label: "Largo", href: "/we-buy-houses-largo-fl" },
      { label: "Pinellas Park", href: "/we-buy-houses-pinellas-park-fl" },
      { label: "Seminole", href: "/we-buy-houses-seminole-fl" },
      { label: "Dunedin", href: "/we-buy-houses-dunedin-fl" },
      { label: "Bradenton", href: "/we-buy-houses-bradenton-fl" },
      { label: "Brandon", href: "/we-buy-houses-brandon-fl" },
    ],
    counties: [
      { label: "Pinellas County", href: "/pinellas-county" },
      { label: "Hillsborough County", href: "/hillsborough-county" },
      { label: "Manatee County", href: "/manatee-county" },
    ],
  },
  situations: [
    { label: "Foreclosure", href: "/situations/foreclosure" },
    { label: "Probate", href: "/situations/probate" },
    { label: "Divorce", href: "/situations/divorce" },
    { label: "Inherited house", href: "/situations/inherited" },
    { label: "House with tenants", href: "/situations/tenants" },
    { label: "House with a mortgage", href: "/situations/mortgage" },
    { label: "Fire damage", href: "/situations/fire-damage" },
    { label: "Water damage", href: "/situations/water-damage" },
    { label: "Mold damage", href: "/situations/mold-damage" },
    { label: "Hoarder house", href: "/situations/hoarder-house" },
    { label: "Bankruptcy", href: "/situations/bankruptcy" },
    { label: "Sell as-is", href: "/situations/sell-as-is" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const STATS = [
  {
    value: "24",
    suffix: "hr",
    label: "Cash offer",
    sub: "No-obligation offer, usually within 24 hours.",
  },
  {
    value: "10",
    suffix: "days",
    label: "Minimum close",
    sub: "7–14 days typical. You pick the date.",
  },
  {
    value: "$0",
    label: "Fees & commissions",
    sub: "We cover closing costs too.",
  },
  {
    value: "500",
    suffix: "+",
    label: "Tampa Bay homes bought",
    sub: "Local team serving since 2014.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Inquiry",
    body: "Reach out by phone, email, or our online form. Share basic details about your St Petersburg property.",
    metaLabel: "Time",
    metaValue: "~ 2 min",
  },
  {
    num: "02",
    title: "Cash Offer",
    body: "We evaluate your home and present a fair, no-obligation cash offer — usually within 24 hours.",
    metaLabel: "Within",
    metaValue: "24 hours",
    highlight: true,
  },
  {
    num: "03",
    title: "Contact Us",
    body: "We inspect the property as-is. No required repairs, no staging, no cleaning.",
    metaLabel: "Repairs",
    metaValue: "None",
  },
  {
    num: "04",
    title: "Meet at your property",
    body: "Choose your closing date. We close in as little as 7 days — no financing contingencies, just a fast, certain close.",
    metaLabel: "Close in",
    metaValue: "7–14 days",
  },
] as const;

export const OFFER_FORMULA_PARTS = [
  { label: "After repair value", value: "ARV" },
  { label: "Holding & selling", value: "10%" },
  { label: "Our profit", value: "10%" },
  { label: "Repair costs", value: "Actual" },
] as const;

export const OFFER_FORMULA_DETAILS = [
  {
    num: "01",
    title: "After Repair Value",
    body: "What your home would sell for in fully renovated, market-ready condition. We base this on recent comparable sales in your neighborhood — not a guess.",
  },
  {
    num: "02",
    title: "Holding & Selling (10%)",
    body: "Costs we cover after buying: property taxes, insurance, utilities while we hold it, and agent commissions and closing costs we pay when we resell.",
  },
  {
    num: "03",
    title: "Our Profit (10%)",
    body: "A reasonable margin that lets us stay in business and keep buying homes like yours. We do not maximize this at your expense.",
  },
  {
    num: "04",
    title: "Repair Costs",
    body: "The estimated cost to bring your home to market-ready condition. We absorb this risk so you do not pay for any repairs out of pocket.",
  },
] as const;

export const CASH_ADVANCE_BENEFITS = [
  "Moving expenses",
  "Catching up on bills",
  "Deposits on a new home",
  "Relocation costs",
] as const;

export const PROS_ADVANTAGES = [
  "Close in as little as 7 days",
  "Sell as-is with no repairs or cleaning",
  "No agent commissions or hidden fees",
  "Guaranteed cash—no financing fall-through",
  "No showings, open houses, or staging",
] as const;

export const PROS_TRADEOFFS = [
  "Offer typically below full retail listing price",
  "Best suited for sellers prioritizing speed and certainty",
  "Less competition since you're working with one buyer",
  "Not ideal if you can wait months for top dollar",
] as const;

export const PROS_COMPARE_ROWS = [
  { label: "Time to close", traditional: "60–90+ days", cash: "Close in 7+ days" },
  { label: "Repairs & staging", traditional: "Required", cash: "Sell as-is" },
  { label: "Agent commissions", traditional: "5–6% of price", cash: "No commissions" },
  { label: "Financing contingencies", traditional: "Common", cash: "Guaranteed cash" },
  { label: "Showings & open houses", traditional: "Multiple", cash: "None required" },
] as const;

export const AREA_CITIES = [
  { label: "St Petersburg", href: "/we-buy-houses-st-petersburg-fl", featured: true },
  { label: "Tampa", href: "/we-buy-houses-tampa-fl" },
  { label: "Clearwater", href: "/we-buy-houses-clearwater-fl" },
  { label: "Largo", href: "/we-buy-houses-largo-fl" },
  { label: "Pinellas Park", href: "/we-buy-houses-pinellas-park-fl" },
  { label: "Seminole", href: "/we-buy-houses-seminole-fl" },
  { label: "Dunedin", href: "/we-buy-houses-dunedin-fl" },
  { label: "Bradenton", href: "/we-buy-houses-bradenton-fl" },
  { label: "Brandon", href: "/we-buy-houses-brandon-fl" },
  { label: "Gulfport", href: "/we-buy-houses-gulfport-fl" },
  { label: "Palm Harbor", href: "/we-buy-houses-palm-harbor-fl" },
  { label: "Sarasota", href: "/we-buy-houses-sarasota-fl" },
] as const;

export const AREA_COUNTIES = [
  { label: "Pinellas County", href: "/pinellas-county" },
  { label: "Hillsborough County", href: "/hillsborough-county" },
  { label: "Manatee County", href: "/manatee-county" },
  { label: "Pasco County", href: "/pinellas-county" },
] as const;

export const MAP_PINS = [
  "St Petersburg",
  "Dunedin",
  "Tampa",
  "Largo",
  "Bradenton",
  "Clearwater",
] as const;

export const GUARANTEE_ITEMS = [
  {
    title: "Guaranteed cash offer",
    body: "A written offer based on your property's current condition. Firm — no last-minute renegotiations.",
  },
  {
    title: "No hidden fees",
    body: "The offer you see is the offer you get. We cover closing costs, so you keep more of your sale price.",
  },
  {
    title: "Closing on your timeline",
    body: "Choose a closing date that works for you — 7 days, 30 days, or longer if needed.",
  },
  {
    title: "AS-IS purchase",
    body: "We buy in any condition. No repairs, no staging, no cleaning required. Leave what you don't want.",
  },
] as const;

export const MARKET_FACTORS = [
  {
    letter: "A",
    title: "Recent price trends",
    body: "We track recent sale prices in St Pete neighborhoods — Historic Kenwood, Disston Heights, Old Northeast — to ground our offers in real comps, not generic formulas.",
  },
  {
    letter: "B",
    title: "Days on market",
    body: "How long homes sit on the market as-is matters. We factor in current absorption rates so our offers reflect what a property will actually transact for today.",
  },
  {
    letter: "C",
    title: "Property condition impact",
    body: "Repair scope changes the calculus. We estimate the realistic cost to bring a home to market — and pass through fair value to you without nickel-and-diming.",
  },
  {
    letter: "D",
    title: "Local demand signals",
    body: "Demand from owner-occupants vs. investors varies by neighborhood. We blend those signals into a single, transparent cash number for your home.",
  },
] as const;

export const RESOURCES = [
  {
    title: "St. Petersburg City Hall",
    sub: "Permits · zoning · city services",
    href: "https://www.stpete.org/",
  },
  {
    title: "Pinellas County Tax Collector",
    sub: "Property tax inquiries",
    href: "https://www.pinellascounty.org/",
  },
  {
    title: "Pinellas County Clerk of the Circuit Court",
    sub: "Property records · legal filings",
    href: "https://www.pinellasclerk.org/",
  },
  {
    title: "Florida Department of Revenue",
    sub: "Tax-related questions",
    href: "https://floridarevenue.com/",
  },
] as const;

export const BEFORE_AFTER = [
  {
    beforeLabel: "BEFORE · distressed property",
    afterLabel: "AFTER · renovated & resold",
    title: "Inherited bungalow — Disston Heights",
    body: "Estate full of contents, dated kitchen, leaking roof. Cash close in 9 days.",
    statHtml: "<b>9 day</b> close · <b>14 wk</b> renovation",
  },
  {
    beforeLabel: "BEFORE · vacant rental",
    afterLabel: "AFTER · move-in ready",
    title: "Vacant rental — Old Northeast",
    body: "Tired landlord with tenant issues. Closed without eviction in 7 days.",
    statHtml: "<b>7 day</b> close · <b>11 wk</b> renovation",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "What is the fastest way to sell my house in St Petersburg?",
    a: "Sell to a cash buyer who purchases as-is, with no required repairs. You can close quickly — often within 7 to 14 days, depending on your timeline. No waiting for mortgage approvals, no buyer financing falling through. Just a fast, certain cash sale.",
  },
  {
    q: "Do you buy houses as-is?",
    a: "Yes. When you sell to us, you avoid repairs completely. We buy in as-is condition — no staging, no cleaning, no renovations required.",
  },
  {
    q: "How fast can I close after accepting an offer?",
    a: "We can close on your timeline. Many sellers close within 7 to 14 days, but we'll work with your schedule if you need more time. The closing date is your choice.",
  },
  {
    q: "Which areas do you serve around St Petersburg and the Tampa Bay area?",
    a: "We serve St. Petersburg, Pinellas County, and the greater Tampa Bay area — including Clearwater, Gulfport, Largo, Pinellas Park, Palm Harbor, Tampa, Manatee, Palmetto, Sarasota, Pasco, Hudson, New Port Richey, Dunedin, and surrounding communities.",
  },
  {
    q: "Do you charge commissions or fees when selling to you for cash?",
    a: "No. There are no agent commissions or closing costs charged to you as the seller. The cash offer we present is what you receive — no hidden fees, no surprises.",
  },
  {
    q: "Is selling to a cash buyer legit and safe?",
    a: "Yes, when you work with a reputable local buyer. We're a licensed, local company with a transparent process. You get a written offer, choose your closing date, and work with a trusted title company to finalize the sale.",
  },
  {
    q: "What is the cash offer process for selling a house in St Petersburg?",
    a: "Inquiry, cash offer, no-obligation acceptance, and closing on your schedule. No financing contingencies involved. You reach out, we evaluate your property, present a fair offer, and you decide. If you accept, we move to closing — fast and simple.",
  },
  {
    q: "Do you guarantee the cash offer and closing timelines?",
    a: "We provide a clear, written offer and a closing window that aligns with your needs, with transparent terms. Our offers are firm — no last-minute renegotiations or surprises.",
  },
  {
    q: "What documents are typically needed to start the cash-offer process?",
    a: "A recent mortgage statement (if any), property details, and ownership documents to begin an offer. We'll guide you through exactly what's needed — it's straightforward and minimal paperwork.",
  },
  {
    q: "Do you buy inherited or probate properties around St Petersburg?",
    a: "Yes. We can consider inherited properties and guide you through the process. Probate sales can be complex, but we're experienced in handling these situations with care and clarity.",
  },
  {
    q: "Do you buy houses in any condition, including those with repairs or liens?",
    a: "Yes. We buy houses in any condition — whether they need major repairs, have liens, or face other challenges. We'll evaluate the situation and present a fair offer based on the current state of the property.",
  },
  {
    q: "How is the cash offer price determined for a St Petersburg home?",
    a: "We evaluate your property's location, condition, recent comparable sales, and current market demand. Our offers are data-driven and transparent — you'll understand exactly how we arrived at the price.",
  },
  {
    q: 'What does "cash offer" mean in this process?',
    a: "A cash offer means we have the funds ready to purchase your home without needing mortgage financing. This eliminates delays, contingencies, and the risk of a deal falling through due to buyer financing issues.",
  },
  {
    q: "What should I do if there are title issues or liens on my property?",
    a: "Contact us. We can often work through title issues and liens as part of the sale. In many cases, we'll handle lien payoffs at closing, simplifying the process for you.",
  },
  {
    q: "What makes your team different from other cash buyers in St Petersburg?",
    a: "Local market expertise, faster closings, and transparent terms without surprises. We're a family-owned, locally focused company that knows St Pete neighborhoods and genuinely cares about helping homeowners.",
  },
  {
    q: "Do you buy condos, townhomes, or multifamily properties in St Petersburg?",
    a: "Yes. We buy single-family homes, condos, townhomes, and multifamily properties across St Petersburg and the Tampa Bay area. If you own it, we'll consider it.",
  },
  {
    q: "How do I start the cash-offer process with you today?",
    a: `Call us at ${SITE.phone}, email ${SITE.email}, or fill out our online form. We'll ask a few basic questions about your property and schedule a time to present your no-obligation cash offer.`,
  },
] as const;
