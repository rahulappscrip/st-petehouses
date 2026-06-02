import { AREA_CITIES as CITY_AREA_LIST, CITY_NAV_LINKS } from "./cities";

export const ASSETS = {
  johnPortrait: "/assets/images/john-gardepe.webp",
  johnSvg: "/assets/images/John-svg.svg",
  johnCta: "/assets/images/john-gardepe-1.webp",
  ownerJohn: "/assets/images/john-own.webp",
  bbbBadge: "/assets/images/bbb-client.webp",
  logo: "/assets/images/logo.webp",
  favicon: "/assets/images/we-buy-st-pete-favicon-res.png",
  marketChart: "/assets/images/Understanding-the-st-pete-market.webp",
  facingForeclosure: "/assets/images/facing-foreclosure.webp",
  inheritedHome: "/assets/images/inherited-home.webp",
  divorceSeparation: "/assets/images/divorce-or-seperation.webp",
  tiredLandlord: "/assets/images/tired-landload.webp",
  distressedProperty: "/assets/images/distressed-property.webp",
  relocation: "/assets/images/relocation.webp",
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
  mapsHref: "https://maps.app.goo.gl/WLWfNKY5PqvBVPXy5",
} as const;

export const HOMEPAGE_SEO = {
  title: "We Buy Houses In St Petersburg FL | Cash Offer in 24 Hours",
  description:
    "Sell your St Petersburg house fast for cash. No repairs, no fees, no commissions. Get a fair cash offer today and close on your timeline—as-is, hassle-free",
  primaryKeyword: "We Buy Houses In St Petersburg",
} as const;

export const MEET_OWNER = {
  eyebrow: "Meet the owner",
  title: "Hi, I'm John Gardepe.",
  subtitle: "I'm the owner of We Buy St. Pete Houses.",
  paragraphs: [
    {
      lead: "Our mission is simple:",
      rest: " help homeowners sell their houses fast, avoid the hassle, and move forward with confidence.",
      intro:
        "We're a local home buying company based right here in St. Petersburg.",
    },
    "I started this company because I saw too many good people stuck in difficult situations with no easy solution. We believe selling your house should be simple, fair, and stress-free.",
    "When you work with us, you're not dealing with a big corporation—you're dealing with a local team that truly cares.",
  ],
  quote:
    "We treat every homeowner the way we'd want our own family to be treated. You'll get a fair offer and a team that's with you every step of the way.",
  ctaTitle: "Get Your No-Obligation Offer",
  ctaBody: "Tell us a few details about your property and we'll provide a fair cash offer.",
  ctaButton: "Get my offer now",
  badgeRole: "Owner",
  badgeCompany: "We Buy St. Pete Houses",
} as const;

/** Footer social links — replace `#` with real URLs when ready */
export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Google", href: "#", icon: "google" },
] as const;

export const TOPBAR = {
  rating: "Rated 5.0 by 120+ St. Petersburg",
  bbb: "BBB A+ Accredited",
  homes: "500+ Homes Bought",
} as const;

export const HOME_TESTIMONIALS = {
  rating: "4.9",
  count: "12 verified reviews",
  googleUrl: "https://www.google.com/search?q=we+buy+st+pete+houses",
  items: [
    {
      featured: true,
      initials: "TC",
      name: "Tom Cherry",
      meta: "2 reviews • 4 years ago",
      localGuide: false,
      quote:
        "We Buy St Pete Homes was excellent to work with from start to finish. They complied with all of my terms and stayed on top of the entire process. John was prompt and courteous. Contract to close was 14 days. I would highly recommend.",
      ownerReply: {
        title: "Response from John",
        text: "Tom, thank you for the kind words. I'm glad we were able to meet your expectations throughout the sale of your rental property. We sincerely appreciated your professionalism as well.",
      },
    },
    {
      initials: "DB",
      name: "Debbie Bross",
      meta: "6 reviews • 2 years ago",
      localGuide: true,
      quote:
        "I have had two closings with this company. I have been a Realtor for 19 years in St. Petersburg and this company was easy to work with and very honest. I hope to work with them again soon.",
    },
    {
      initials: "NF",
      name: "Nicci Fagan",
      meta: "14 reviews • 3 years ago",
      localGuide: true,
      quote:
        "John and his team reached out to gauge my interest in selling my home at a time I had just started to consider it. I was recovering from major surgery, and they were very accommodating with the closing date and several other things.",
    },
    {
      initials: "AF",
      name: "Amy Ford",
      meta: "32 reviews • 3 years ago",
      localGuide: true,
      quote:
        "John contacted me directly via text message about wanting to purchase our home. At first, I was skeptical mainly because there are so many scams going around. He turned out to be exactly what he said he was.",
    },
    {
      initials: "AM",
      name: "April McQueen",
      meta: "5 reviews • 3 years ago",
      localGuide: false,
      quote:
        "It was a pleasure working with John Gardepe and his team! He was very professional, down to earth, and patient! Glad that they were the ones to help me through this process of selling my home.",
    },
    {
      initials: "RB",
      name: "Ray Bianco",
      meta: "6 reviews • 4 years ago",
      localGuide: false,
      quote:
        "I have done 2 residential home sales as well as a short term lease with We Buy St Pete Houses in the past year. Their team of professionals were friendly and prompt.",
    },
    {
      initials: "SV",
      name: "Steve Viteri",
      meta: "3 reviews • 4 years ago",
      localGuide: false,
      quote:
        "He was very professional and a good person to work with. Showed up on time for the meetings and always responds in an appropriate time.",
      ownerReply: {
        title: "Response from John",
        text: "Thank you Steve, we really enjoyed working with you and getting to know you. We always appreciate the opportunity to work with a Veteran. Thank you for your service.",
      },
    },
    {
      initials: "RV",
      name: "Ron V.",
      meta: "11 reviews • 4 years ago",
      localGuide: false,
      quote:
        "Very prompt with all communications and very quick sale and closing. Would always use them. Great job.",
    },
    {
      initials: "CA",
      name: "Casey Ashley",
      meta: "2 reviews • 2 years ago",
      localGuide: false,
      quote:
        "Very nice people to deal with, made for an easy process. Would highly recommend.",
    },
  ],
} as const;

export const NAV_LINKS = {
  primary: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Reviews", href: "/reviews" },
  ],
  locations: {
    cities: CITY_NAV_LINKS,
  },
  situations: [
    { label: "Foreclosure", href: "/situations/foreclosure" },
    { label: "Inherited house", href: "/situations/inherited" },
    { label: "Divorce", href: "/situations/divorce" },
    { label: "House with tenants", href: "/situations/tenants" },
    { label: "House with a lien", href: "/situations/lien" },
    { label: "Water / flood damage", href: "/situations/water-damage" },
    { label: "Fire damage", href: "/situations/fire-damage" },
    { label: "Storm damage", href: "/situations/storm-damage" },
    { label: "Sell as-is (St Pete)", href: "/situations/sell-as-is" },
    { label: "Sell as-is (Florida)", href: "/situations/as-is-florida" },
    { label: "Cash home buyers", href: "/situations/cash-home-buyers" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

/** Footer “We Buy Houses In Any Situation” column — fixed order. */
export const FOOTER_SITUATIONS = [
  { label: "Foreclosure", href: "/situations/foreclosure" },
  { label: "Inherited house", href: "/situations/inherited" },
  { label: "Divorce", href: "/situations/divorce" },
  { label: "House with tenants", href: "/situations/tenants" },
  { label: "House with a lien", href: "/situations/lien" },
  { label: "Water / flood damage", href: "/situations/water-damage" },
  { label: "Fire damage", href: "/situations/fire-damage" },
  { label: "Storm damage", href: "/situations/storm-damage" },
  { label: "Sell as-is (St Pete)", href: "/situations/sell-as-is" },
  { label: "Sell as-is (Florida)", href: "/situations/as-is-florida" },
  { label: "Cash home buyers", href: "/situations/cash-home-buyers" },
] as const;

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
    sub: "10 to 14 days typical. You pick the date.",
  },
  {
    value: "$0",
    label: "Fees & commissions",
    sub: "We cover closing costs too.",
  },
  {
    value: "500",
    suffix: "+",
    label: "St. Petersburg homes bought",
    sub: "Local team serving since 2014.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Let's Talk",
    body: "Give us a call, send a text, or fill out our form. Tell us a little about your St. Petersburg property and your situation.",
    metaLabel: "Time",
    metaValue: "~ 2 min",
  },
  {
    num: "02",
    title: "Cash Offer",
    body: "We review the details and provide a fair, no-obligation cash offer — usually within 24 hours.",
    metaLabel: "Within",
    metaValue: "24 hours",
    highlight: true,
  },
  {
    num: "03",
    title: "walkthrough",
    body: "We visit your property as-is. No repairs, no cleaning, no staging — just a quick, friendly walkthrough.",
    metaLabel: "Repairs",
    metaValue: "None",
  },
  {
    num: "04",
    title: "closing timeline",
    body: "You choose your closing date. We can close in as little as 7 days or whenever works best for you.",
    metaLabel: "Close in",
    metaValue: "7–14 days",
  },
] as const;

export const SELL_HOUSE_HERO = {
  title: "Sell Your House Fast in St. Petersburg with a Cash Offer",
  subheadline: "Close in as little as 7 days. As-is. No agents, no fees, no repairs.",
  formTitle: "Sell your house fast in any condition.",
  formIntro: "We buy houses fast, as-is, and stress-free. No repairs or out-of-pocket costs.",
} as const;

export const SELL_HOUSE_PROCESS_STEPS = [
  {
    num: "01",
    title: "Submit property details",
    body: "Through our online form or by phone — location, condition, and your timeline.",
  },
  {
    num: "02",
    title: "Receive your cash offer",
    body: "Often within 24 hours. Fair, written, no obligation to accept.",
  },
  {
    num: "03",
    title: "Schedule a walkthrough",
    body: "We visit to confirm details and finalize the offer. Low-pressure.",
  },
  {
    num: "04",
    title: "Close on your schedule",
    body: "Cash closings can happen in as little as 7 days — or on your preferred date.",
  },
] as const;

export const SELLER_SITUATIONS = [
  {
    title: "Facing foreclosure",
    body: "Stop the process with a fast cash close before the auction date.",
    href: "/situations/foreclosure",
    image: ASSETS.facingForeclosure,
    imageAlt: "Front porch of a home with a white entry door",
  },
  {
    title: "Inherited a home",
    body: "Settle the estate without managing repairs or showings.",
    href: "/situations/inherited",
    image: ASSETS.inheritedHome,
    imageAlt: "Sunlit living room in an inherited home",
  },
  {
    title: "Divorce or separation",
    body: "Divide assets quickly without prolonged listing periods.",
    href: "/situations/divorce",
    image: ASSETS.divorceSeparation,
    imageAlt: "Wedding rings on legal documents",
  },
  {
    title: "Tired landlord",
    body: "Exit problem tenants. We buy with the lease in place if needed.",
    href: "/situations/tenants",
    image: ASSETS.tiredLandlord,
    imageAlt: "Landlord holding house keys in front of a rental property",
  },
  {
    title: "Distressed property",
    body: "Major repairs needed. Skip the contractor — we buy as-is.",
    href: "/situations/sell-as-is",
    image: ASSETS.distressedProperty,
    imageAlt: "Older home in need of repair",
  },
  {
    title: "Relocation",
    body: "Move on your schedule without waiting for a buyer to come along.",
    href: "/how-it-works",
    image: ASSETS.relocation,
    imageAlt: "Moving boxes stacked in an empty room",
  },
] as const;

/** @deprecated Use SELLER_SITUATIONS */
export const SELL_HOUSE_SITUATIONS = SELLER_SITUATIONS;

export const SELL_HOUSE_OFFER_BLOCKS = [
  {
    title: "What goes into your offer",
    body: "Property location and neighborhood comps · current condition and repair scope · recent sales in the same submarket · your preferred closing speed.",
  },
  {
    title: "What we won't do",
    body: "No appraisal-based renegotiations. No financing contingencies. No last-minute repair demands. The offer you accept is the offer you close on.",
  },
] as const;

export const SELL_HOUSE_LEGAL_BLOCKS = [
  {
    title: "Standard closing requirements",
    body: "Title search · property disclosures · settlement statement · deed recording. Same legal protections as a traditional sale — just without the financing contingencies that slow things down.",
  },
  {
    title: "If there are title issues",
    body: "Outstanding liens, probate questions, or unclear ownership chains are usually resolvable. We handle most of the work with the title company so you don't have to.",
  },
] as const;

export const SELL_HOUSE_FAQ = [
  {
    q: "Do I need to fix up my house to sell to a cash buyer?",
    a: "No — we buy properties as-is, without requiring repairs. You won't need to invest time or money in upgrades, staging, or contractor work before closing.",
  },
  {
    q: "How fast can I get a cash offer in St. Petersburg?",
    a: "Cash offers can be provided quickly, often within 24 hours. Once you submit your property details, we review the information and present a fair offer.",
  },
  {
    q: "Are there Realtor commissions or closing costs with cash offers?",
    a: "We don't charge Realtor commissions. Closing costs can vary depending on the specifics of the transaction, but we work to minimize your out-of-pocket expenses and provide transparency on any costs before you commit.",
  },
  {
    q: "What should I expect when selling to a cash buyer?",
    a: "Submit details, receive an offer, schedule a walkthrough, and close on your timeline. Faster and simpler than traditional listings — fewer contingencies, no financing delays.",
  },
  {
    q: "Can I negotiate the cash offer?",
    a: "Yes — negotiation on terms and timelines is possible to align with your needs. We're flexible and willing to discuss adjustments that make the transaction work better for your situation.",
  },
  {
    q: "What areas do you serve around St. Petersburg?",
    a: "We serve St. Petersburg and nearby neighborhoods throughout Pinellas County. Our local presence allows us to respond quickly and provide cash offers tailored to the St. Petersburg market.",
  },
  {
    q: "What documents will I sign at closing?",
    a: "Closing involves standard documents like the deed, settlement statement, and title-related paperwork. We guide you through disclosures and title transfer steps, ensuring you understand each document before signing.",
  },
  {
    q: "Is it safe to sell to a local cash buyer?",
    a: "Yes. We're local and transparent, with clear terms for closings. We work with reputable title companies and follow Florida's legal requirements to protect your interests.",
  },
  {
    q: "How do I start with We Buy St Pete Houses?",
    a: "Start by contacting us with property details. We'll review the information and present a cash offer quickly. No obligation to accept unless the terms work for you.",
  },
  {
    q: "What makes We Buy St Pete Houses different?",
    a: "We emphasize a direct, fast cash path with as-is purchases and clear timelines for closings. Our local focus and transparent approach set us apart from buyers who add unnecessary complexity or delays.",
  },
] as const;

export const REVIEWS_FILTERS = [
  { id: "all", label: "All reviews", count: 12 },
  { id: "foreclosure", label: "Foreclosure", count: 2 },
  { id: "probate", label: "Probate & inherited", count: 3 },
  { id: "relocation", label: "Relocation", count: 2 },
  { id: "landlord", label: "Landlord exit", count: 2 },
  { id: "as-is", label: "As-is / repairs", count: 3 },
] as const;

export type ReviewCategory = (typeof REVIEWS_FILTERS)[number]["id"];

export const REVIEWS_ITEMS = [
  {
    category: "probate" as const,
    initials: "DH",
    avatar: "",
    name: "[BRAND: Verified seller — name]",
    location: "Disston Heights · 2026",
    quote: "[BRAND: Insert verified review here. Do not fabricate. Replace this placeholder with a real Google or BBB testimonial about an inherited property close.]",
    tag: "Inherited · Probate",
    source: "Verified · Google",
    closedIn: "Closed in 9 days",
  },
  {
    category: "foreclosure" as const,
    initials: "MC",
    avatar: "t",
    name: "[BRAND: Verified seller — name]",
    location: "Old Northeast · 2025",
    quote: "[BRAND: Insert verified review here. Foreclosure-stop testimonial — replace placeholder with real seller quote.]",
    tag: "Foreclosure",
    source: "Verified · BBB",
    closedIn: "Closed in 11 days",
  },
  {
    category: "as-is" as const,
    initials: "RT",
    avatar: "l",
    name: "[BRAND: Verified seller — name]",
    location: "Shore Acres · 2025",
    quote: "[BRAND: Insert verified review here. As-is / storm-damaged property testimonial — replace placeholder.]",
    tag: "As-is · Flood zone",
    source: "Verified · Google",
    closedIn: "Closed in 7 days",
  },
  {
    category: "landlord" as const,
    initials: "JM",
    avatar: "i",
    name: "[BRAND: Verified seller — name]",
    location: "Kenwood · 2025",
    quote: "[BRAND: Insert verified review here. Tired landlord with tenants — replace placeholder.]",
    tag: "Landlord exit · Tenants in place",
    source: "Verified · Google",
    closedIn: "Closed in 14 days",
  },
  {
    category: "relocation" as const,
    initials: "SK",
    avatar: "",
    name: "[BRAND: Verified seller — name]",
    location: "Lakewood Estates · 2025",
    quote: "[BRAND: Insert verified review here. Job relocation testimonial — replace placeholder.]",
    tag: "Relocation · Job transfer",
    source: "Verified · BBB",
    closedIn: "Closed in 10 days",
  },
  {
    category: "probate" as const,
    initials: "PB",
    avatar: "t",
    name: "[BRAND: Verified seller — name]",
    location: "Greater Pinellas Point · 2024",
    quote: "[BRAND: Insert verified review here. Estate executor testimonial — replace placeholder.]",
    tag: "Probate · Estate",
    source: "Verified · Google",
    closedIn: "Closed in 21 days",
  },
  {
    category: "as-is" as const,
    initials: "EW",
    avatar: "l",
    name: "[BRAND: Verified seller — name]",
    location: "Historic Kenwood · 2024",
    quote: "[BRAND: Insert verified review here. Major repairs needed — replace placeholder.]",
    tag: "As-is · Major repairs",
    source: "Verified · Google",
    closedIn: "Closed in 12 days",
  },
  {
    category: "foreclosure" as const,
    initials: "CR",
    avatar: "i",
    name: "[BRAND: Verified seller — name]",
    location: "Pasadena · 2024",
    quote: "[BRAND: Insert verified review here. Pre-foreclosure testimonial — replace placeholder.]",
    tag: "Pre-foreclosure",
    source: "Verified · BBB",
    closedIn: "Closed in 8 days",
  },
  {
    category: "probate" as const,
    initials: "AT",
    avatar: "",
    name: "[BRAND: Verified seller — name]",
    location: "Snell Isle · 2024",
    quote: "[BRAND: Insert verified review here. Inherited home testimonial — replace placeholder.]",
    tag: "Inherited",
    source: "Verified · Google",
    closedIn: "Closed in 16 days",
  },
  {
    category: "relocation" as const,
    initials: "BL",
    avatar: "t",
    name: "[BRAND: Verified seller — name]",
    location: "Coquina Key · 2024",
    quote: "[BRAND: Insert verified review here. Out-of-state relocation testimonial — replace placeholder.]",
    tag: "Relocation · Out of state",
    source: "Verified · Google",
    closedIn: "Closed in 13 days",
  },
  {
    category: "landlord" as const,
    initials: "GN",
    avatar: "l",
    name: "[BRAND: Verified seller — name]",
    location: "Pinellas Park · 2023",
    quote: "[BRAND: Insert verified review here. Multifamily landlord testimonial — replace placeholder.]",
    tag: "Multi-unit · Landlord",
    source: "Verified · BBB",
    closedIn: "Closed in 18 days",
  },
  {
    category: "as-is" as const,
    initials: "HV",
    avatar: "i",
    name: "[BRAND: Verified seller — name]",
    location: "Bartlett Park · 2023",
    quote: "[BRAND: Insert verified review here. Hoarder situation / cleanout testimonial — replace placeholder.]",
    tag: "As-is · Cleanout",
    source: "Verified · Google",
    closedIn: "Closed in 9 days",
  },
] as const;

export const REVIEWS_TRUST_SIGNALS = [
  {
    title: "Verifiable local address",
    body: "We're at PO Box 143, St Petersburg, FL 33731 — verifiable in public Florida business records.",
  },
  {
    title: "Direct phone line",
    body: "Reach a real person at (727) 477-8998 — no offshore call centers or third-party screeners.",
  },
  {
    title: "Public reviews",
    body: "Verified Google and BBB reviews from named local sellers. We're happy to share references on request.",
  },
  {
    title: "Proof of funds",
    body: "We provide written proof of funds before any offer is accepted. If a buyer can't, walk away.",
  },
] as const;

export const REVIEWS_PROCESS_STEPS = [
  { num: "01", title: "Initial inquiry", body: "Contact us by phone or online form and share basic details about your property." },
  { num: "02", title: "Property review", body: "We evaluate condition and local market factors — no formal inspection required for our offer." },
  { num: "03", title: "Offer presentation", body: "We present a no-obligation cash offer and clearly explain how we arrived at the price." },
  { num: "04", title: "Closing", body: "You pick the closing date. We close in as little as 7 days, or wait until you're ready." },
] as const;

export const REVIEWS_COMPARE_ROWS = [
  { factor: "Speed", us: "Close in as little as 7 days", other: "Typically 30–90+ days" },
  { factor: "Certainty", us: "No financing contingencies", other: "Buyer financing can fall through" },
  { factor: "Costs", us: "No commissions or fees", other: "5–6% agent commissions + closing costs" },
  { factor: "Repairs", us: "Sold as-is", other: "Often requires repairs & staging" },
  { factor: "Best for", us: "Time-pressured sellers · as-is properties", other: "Sellers with time & turnkey property" },
] as const;

export const REVIEWS_FAQ = [
  {
    q: "How fast can I get a cash offer in St Pete?",
    a: "You can typically receive a no-obligation cash offer within 24–72 hours after your inquiry. Once you share basic property details, we review the information and present an offer quickly so you can make an informed decision.",
  },
  {
    q: "Are there fees or commissions when selling to a cash buyer?",
    a: "No commissions or agent fees are charged when selling to We Buy St Pete Houses. The offer you receive is the amount you'll get at closing, with no hidden costs.",
  },
  {
    q: "What kinds of repairs are required for a cash offer?",
    a: "Most cash buyers purchase as-is, so repairs are not required for an offer. Some sellers choose to make minor fixes, but we buy homes in any condition — no repairs necessary.",
  },
  {
    q: "What if I have liens or other title issues?",
    a: "Cash buyers can work with you if there are title issues. A title company can help clear liens and facilitate closing, and we'll guide you through the process to resolve any complications.",
  },
  {
    q: "How do I compare cash offers vs listing with an agent?",
    a: "Compare speed, certainty, and costs. Cash offers are typically faster and avoid commissions; agent listings may yield a higher price but take longer and involve more costs. The best choice depends on your timeline and priorities.",
  },
  {
    q: "Is there a BBB rating for We Buy St Pete Houses?",
    a: "We encourage you to check BBB ratings and other reviews when evaluating credibility. Trust signals like customer testimonials and verified contact details help you make an informed decision.",
  },
  {
    q: "What is a cash home buyer in St Petersburg, FL?",
    a: "A cash home buyer is an investor who pays with cash, often purchasing quickly and buying homes as-is. This eliminates financing risks and allows for a faster, simpler transaction.",
  },
  {
    q: "What is the typical closing timeline for a cash sale in St Pete?",
    a: "Cash closings can happen quickly — often within 7 days, depending on title work and logistics. You choose the closing date that works for your schedule.",
  },
  {
    q: "Ready to explore a cash offer? How do I start?",
    a: "Start by submitting a simple form or calling us at (727) 477-8998 for a no-obligation cash offer. We'll guide you step by step through the process with full transparency.",
  },
] as const;

export const HOW_IT_WORKS_TOC = [
  { id: "what-is-a-cash-buyer", label: "What is a cash buyer?" },
  { id: "how-it-works", label: "How the process works" },
  { id: "benefits", label: "Benefits of cash offers" },
  { id: "who-should-consider", label: "Who should consider" },
  { id: "step-by-step", label: "Step-by-step guide" },
  { id: "are-cash-buyers-legit", label: "Are cash buyers legit?" },
  { id: "when-to-consider", label: "When to consider" },
  { id: "faq", label: "FAQ" },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    num: "01",
    title: "Initial inquiry",
    body: "You contact us with basic property details — address, condition, and your situation.",
  },
  {
    num: "02",
    title: "Property assessment",
    body: "We review the property (often remotely or with a brief walk-through) and evaluate it as-is.",
  },
  {
    num: "03",
    title: "Cash offer",
    body: "Within 24 hours, you receive a written, fair cash offer with no obligation to accept.",
  },
  {
    num: "04",
    title: "Closing",
    body: "Once you accept, we handle the paperwork and close on your timeline.",
  },
] as const;

export const HOW_IT_WORKS_BENEFITS = [
  { title: "Speed and certainty", body: "Close in as little as 7 days with no financing fall-through risk." },
  { title: "Sell as-is", body: "No repair costs, staging, or cosmetic improvements required." },
  { title: "No commissions or fees", body: "Sellers enjoy a hassle-free experience with $0 real estate commissions." },
  { title: "Fewer contingencies", body: "No appraisal or inspection contingencies that delay or derail the sale." },
  { title: "Flexible closing date", body: "Choose a timeline that works for your schedule — 7, 14, or 30+ days." },
  { title: "No showings or open houses", body: "Sell without strangers walking through your home." },
] as const;

export const HOW_IT_WORKS_SITUATIONS = [
  { title: "Foreclosure risk", body: "Stop the foreclosure process with a fast sale." },
  { title: "Divorce or separation", body: "Divide assets quickly without prolonged listing periods." },
  { title: "Inherited or probate property", body: "Settle estates without managing repairs or showings." },
  { title: "Tired landlord", body: "Exit rental property headaches and problem tenants immediately." },
  { title: "Relocation or job transfer", body: "Move on your schedule without waiting for a buyer." },
  { title: "Upside-down mortgage", body: "We can work with liens, unpaid balances, and complex situations." },
] as const;

export const HOW_IT_WORKS_FAQ = [
  {
    q: "Is selling to a cash buyer faster?",
    a: "Yes. Cash offers typically close faster because they don't rely on mortgage approvals. We can close in as little as 7 days.",
  },
  {
    q: "Are there fees or commissions?",
    a: "Typically no. You won't pay real estate agent commissions or seller fees when you sell to us.",
  },
  {
    q: "What is a cash offer, and is it fair?",
    a: "A cash offer is a price proposed by a buyer paid in cash that can close quickly. Fairness depends on property condition and market context, but reputable buyers provide offers based on honest evaluations.",
  },
  {
    q: "How fast can I close?",
    a: "Closes can occur in as little as 7 days, depending on title and escrow. We work on your timeline.",
  },
  {
    q: "Do I need to repair the house?",
    a: "No. Cash buyers often purchase as-is, with no repair requirements.",
  },
  {
    q: "What documents are needed to start?",
    a: "Proof of ownership and basic property details are usually sufficient to start. We guide you through the rest.",
  },
  {
    q: "How do I compare a cash offer to listing with an agent?",
    a: "Compare terms, closing speed, repairs, and commissions. Cash offers can save time and costs, though they may be lower than retail listing prices.",
  },
  {
    q: "Is a cash buyer legit?",
    a: "Yes. Legitimate cash buyers are investors who close with cash. Verify credibility by checking reviews and references.",
  },
  {
    q: "What is the next step?",
    a: "Contact us for a no-obligation cash offer and quick next steps. We'll walk you through the entire process.",
  },
] as const;

export const OFFER_MATH = {
  eyebrow: "Our Offer Math",
  lede:
    "We need to make a profit on the sale, but we promise not to take advantage of you or give you a lowball offer. Every cash offer follows a transparent formula, and we are happy to walk you through the math so you understand exactly how we arrived at your number.",
  formulaResult: { label: "Cash Offer Amount", value: "Your Offer" },
  cashAdvance: {
    badge: "Additional Benefit",
    lede:
      "Depending on your situation, we may be able to provide a cash advance against your future sale proceeds. People often use cash advances to cover:",
    cta: "Get a Cash Offer",
  },
} as const;

export const OFFER_FORMULA_PARTS = [
  { label: "After Repair Value", value: "ARV" },
  { label: "Holding & Selling", value: "10%" },
  { label: "Our Profit", value: "10%" },
  { label: "Repair Costs", value: "Actual" },
] as const;

export const OFFER_FORMULA_DETAILS = [
  {
    num: "01",
    title: "After Repair Value",
    body: "What your home would sell for in fully renovated, market-ready condition. We base this on recent comparable sales in your neighborhood, not a guess.",
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
  "Deposits on a new home",
  "Catching up on bills",
  "Relocation costs",
] as const;

export const PROS_CONS = {
  eyebrow: "Cash Sale Tradeoffs",
  lede:
    "Cash offers close fast and require no repairs, but may come with a discount compared to a full-market listing. Here is the honest tradeoff.",
  advantagesTitle: "Advantages of cash sales",
  tradeoffsTitle: "Considerations to keep in mind",
} as const;

export const PROS_ADVANTAGES = [
  {
    label: "Speed.",
    text: "Close quickly without waiting for buyer financing or lengthy inspections.",
  },
  {
    label: "No repairs.",
    text: "Sell as-is — no fixing, cleaning, or staging required.",
  },
  {
    label: "No commissions.",
    text: "Keep more of your proceeds without paying agent fees.",
  },
  {
    label: "Certainty.",
    text: "Cash offers rarely fall through compared to financed deals.",
  },
  {
    label: "Convenience.",
    text: "No showings, open houses, or disruption to your life.",
  },
] as const;

export const PROS_TRADEOFFS = [
  {
    label: "Price.",
    text: "Cash offers may be below market value to account for the speed and convenience.",
  },
  {
    label: "Property assessment.",
    text: "Your home's condition and local market influence the final offer.",
  },
  {
    label: "Best-fit scenarios.",
    text: "Ideal for urgent relocations, inherited properties, foreclosure situations, or homes needing major repairs.",
  },
] as const;

export const PROS_COMPARE_ROWS = [
  { label: "Time to close", traditional: "60–90+ days to close", cash: "Close quickly" },
  { label: "Repairs & staging", traditional: "Repairs & staging required", cash: "Sell as-is" },
  { label: "Agent commissions", traditional: "Agent commissions (5–6%)", cash: "No commissions" },
  { label: "Financing contingencies", traditional: "Financing contingencies", cash: "Guaranteed cash" },
  { label: "Showings & open houses", traditional: "Showings & open houses", cash: "No showings" },
] as const;

export { CITY_AREA_LIST as AREA_CITIES };

export const AREA_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8396.837695282898!2d-82.64505577943609!3d27.76555673270129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e18481dc2ddf%3A0x2e71d28c72abcc7f!2sSt.%20Petersburg%2C%20FL%2033731%2C%20USA!5e0!3m2!1sen!2sin!4v1780317001513!5m2!1sen!2sin";

/** Google Maps embed URL centered on a given city (used on city location pages). */
export function buildCityMapEmbed(cityName: string): string {
  const query = encodeURIComponent(`${cityName}, FL, USA`);
  return `https://maps.google.com/maps?q=${query}&hl=en&z=12&ie=UTF8&iwloc=&output=embed`;
}

export function buildCityMapTitle(cityName: string): string {
  return `Map of ${cityName}, FL and the Tampa Bay service area`;
}

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

export const MARKET_SECTION = {
  eyebrow: "Local Market",
  lede:
    "We analyze local neighborhoods, property types, and current market trends to calibrate cash offers that reflect St Petersburg realities.",
  neighborhoodsTitle: "Local neighborhoods we serve",
  neighborhoodsBody:
    "We buy homes throughout St Petersburg — from historic neighborhoods to established residential areas. Each one has unique characteristics that influence value, and we account for local conditions in every offer.",
  neighborhoods: [
    "Old Northeast",
    "Kenwood",
    "Greater Pinellas Point",
    "Lakewood Estates",
    "Shore Acres",
  ],
  conditionsTitle: "How market conditions affect cash offers",
  conditionsBody1:
    "Local market data grounds our offers in St Petersburg realities. We consider comparable sales, property condition, needed repairs, and how quickly you need to close. While cash offers provide speed and convenience, they typically reflect a discount to account for the certainty and immediacy we provide.",
  conditionsBody2:
    "Our approach is transparent: we share how we arrived at your offer and explain the factors that influenced the price. No surprises, no hidden calculations.",
} as const;

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
    beforeImage: "/assets/images/before-building.webp",
    afterImage: "/assets/images/After-building.webp",
    title: "Inherited bungalow — Disston Heights",
    body: "Estate full of contents, dated kitchen, leaking roof. Cash close in 9 days.",
    statHtml: "<b>9 day</b> close · <b>14 wk</b> renovation",
  },
  {
    beforeLabel: "BEFORE · vacant rental",
    afterLabel: "AFTER · move-in ready",
    beforeImage: "/assets/images/before-inner-house.webp",
    afterImage: "/assets/images/after-inner-house.webp",
    title: "Vacant rental — Old Northeast",
    body: "Tired landlord with tenant issues. Closed without eviction in 7 days.",
    statHtml: "<b>7 day</b> close · <b>11 wk</b> renovation",
  },
] as const;

export const FAQ_SECTION = {
  eyebrow: "FAQ",
} as const;

export const FAQ_ITEMS = [
  {
    q: "Is it worth getting a cash offer for your house?",
    a: "Yes — cash offers can speed up your sale and reduce hassle, especially if you need to close quickly. They work best when your timeline matters more than maximizing sale price, or when your home needs repairs you'd prefer not to make.",
  },
  {
    q: "Should I accept a cash offer for my house?",
    a: "Consider your timeline, fees, and whether you prefer a quick, as-is close. Cash offers provide certainty and speed but may come at a lower price than a traditional listing. We can discuss your specific situation to help you decide.",
  },
  {
    q: "What is the cash offer process for my home in St Petersburg?",
    a: "Submit your property details, we review the information and local market conditions, you receive a cash offer, and we work toward a fast, stress-free close on your timeline.",
  },
  {
    q: "How long does it take to get a cash offer for my home in St Petersburg?",
    a: "Most sellers receive a cash offer within 24–48 hours after submitting details.",
  },
  {
    q: "Are cash home buyers in St Petersburg legit?",
    a: "Yes — We Buy St Pete Houses operates locally with a published service area and transparent terms.",
  },
  {
    q: "What is a cash offer compared to listing with an agent in St Petersburg?",
    a: "A cash offer can be faster and as-is, while listing with an agent may yield a higher price but involves longer timelines, repairs, showings, and commissions.",
  },
  {
    q: "What is a cash home buyer?",
    a: "A cash home buyer is a company or investor who pays in cash to purchase homes quickly, often without lender contingencies, inspections, or repair requirements.",
  },
  {
    q: "How do I start the cash-offer process?",
    a: "Submit your property details through our website or by calling us. We'll review the information and present a cash offer within 24–48 hours.",
  },
  {
    q: "Is there a risk of scams with cash buyers in St Petersburg?",
    a: "Work with local, established buyers and verify each offer through clear, written terms to minimize risk.",
  },
  {
    q: "How market conditions affect cash offers",
    a: "Local market data grounds our offers in St Petersburg realities. We consider comparable sales, property condition, needed repairs, and how quickly you need to close. While cash offers provide speed and convenience, they typically reflect a discount to account for the certainty and immediacy we provide.\n\nOur approach is transparent: we share how we arrived at your offer and explain the factors that influenced the price. No surprises, no hidden calculations.",
  },
  {
    q: "Local neighborhoods we serve",
    a: "We buy homes throughout St Petersburg — from historic neighborhoods to established residential areas. Each one has unique characteristics that influence value, and we account for local conditions in every offer.",
  },
] as const;
