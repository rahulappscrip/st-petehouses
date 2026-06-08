import type { SituationHero } from "@/lib/situation-types";

export const ABOUT_STATS = [
  { value: "500", suffix: "+", label: "Homes Purchased" },
  { value: "Since ", suffix: "2014", label: "Locally Owned" },
  { value: "BBB ", suffix: "A+", label: "Accredited Business" },
  { value: "5.0", suffix: " ★", label: "Google Reviews (120+)" },
] as const;

export const ABOUT_HERO: SituationHero = {
  eyebrow: "We Buy St Pete Houses",
  titleLead: "About ",
  titleEm: "We Buy St Pete Houses",
  titleTail: "",
  subheadline:
    "A local St. Petersburg company started in 2014 by John Gardepe — helping homeowners sell fast, fairly, and without the stress of the traditional listing process.",
  formTitle: "Get your fair cash offer today",
  formIntro:
    "Tell us about your property. A fair written offer within 24 hours — no obligation, no pressure.",
  authorRole: "Local Founder · We Buy St Pete Houses · Pinellas County",
  addressPlaceholder: "123 Main St, St Petersburg, FL",
};

export const ABOUT_PAGE = {
  meta: {
    title: "About Us | We Buy St Pete Houses — Local Cash Home Buyers Since 2014",
    description:
      "Meet John Gardepe and the team behind We Buy St Pete Houses. A local St. Petersburg company with 500+ homes purchased and a mission to treat every seller like family.",
  },
  hero: {
    breadcrumb: "Our Company",
    eyebrow: "We Buy St Pete Houses",
    titleLead: "About ",
    titleEm: "We Buy St Pete Houses",
    body: "A local St. Petersburg company started in 2014 by John Gardepe — helping homeowners sell fast, fairly, and without the stress of the traditional listing process.",
    stats: [
      { value: "500", suffix: "+", label: "Homes Purchased" },
      { value: "Since ", em: "2014", label: "Locally Owned" },
      { value: "BBB ", em: "A+", label: "Accredited Business" },
      { value: "5.0", suffix: " ★", label: "Google Reviews (120+)" },
    ],
  },
  founder: {
    eyebrow: "Meet the Founder",
    titleLead: "Hi — I'm John Gardepe, ",
    titleEm: "and this is why I started this company.",
    paragraphs: [
      "I grew up watching people I knew get stuck. Stuck in a house they couldn't sell because it needed work they couldn't afford. Stuck waiting months for a traditional sale to close while a life event — a divorce, a death, a job loss — demanded they move faster. Stuck paying an agent 6% of a home's value for a process that felt like it was designed to serve the agent more than the seller.",
      "I started We Buy St Pete Houses in 2014 because I believed there was a better way. Not a flashier way. Not a national brand way. Just a local, honest, human way — where the seller is treated like a person navigating something hard, not a transaction to be optimized.",
      "Since then, we've purchased more than 500 homes across St. Petersburg, Pinellas County, and the Tampa Bay area. Every one of those was someone's difficult situation that we helped resolve. Foreclosures stopped before the auction date. Inherited homes settled without months of court proceedings. Divorces closed quickly so both parties could finally move on. Properties with fire damage, mold, structural problems — homes that no agent would touch — purchased fairly, quickly, and without any burden placed back on the seller.",
      "I'm still involved in every transaction. When you call us, you're talking to a local team — people who know these neighborhoods, know the Pinellas County market, and genuinely care about giving you a fair outcome. We're not a franchise. We're not a call center. We're not going to pass you off to someone in another state who's never been to St. Pete.",
      "If you've got a property that's become a burden, I'd love to talk through your options. Even if we're not the right solution, I'll tell you that honestly — and point you somewhere that is.",
    ],
    quote:
      "We treat every homeowner the way we'd want our own family to be treated. You'll get a fair offer and a team that's with you every step of the way.",
    quoteCite: "— John Gardepe, Founder",
    linkedIn: "https://www.linkedin.com/in/john-gardepe-b68070160/",
    primaryCta: "Talk to John's Team",
    secondaryCta: "Call (727) 477-8998",
  },
  mission: {
    titleLead: "What we believe makes ",
    titleEm: "a fair home sale.",
    body: "We've built every part of how we operate around a single question: what would we want if we were the ones selling? The answer shapes every offer we make, every conversation we have, and every closing we facilitate.",
    values: [
      {
        title: "Transparency over spin",
        body: "Our offer formula is open and explained. We'll show you exactly how we calculated the number — and why. No mystery, no last-minute surprises at the closing table.",
        icon: "shield",
      },
      {
        title: "People first",
        body: "We've had conversations with sellers in bankruptcy, grief, and crisis. We approach every one of those conversations as a neighbor would — not as a company processing a deal.",
        icon: "people",
      },
      {
        title: "Speed when it matters",
        body: "Life events don't wait for the market to be perfect. We structure our process to close fast — 7 to 14 days — precisely because we know the situations that drive people to call us.",
        icon: "clock",
      },
      {
        title: "Honest math",
        body: "We make a profit — and we'll tell you exactly what it is. We won't maximize our margin at your expense, and we won't offer more than makes sense just to get you on the hook.",
        icon: "dollar",
      },
    ],
  },
  commitment: {
    titleLead: "What you can hold us to, ",
    titleEm: "every single time.",
    body: "We've made these same commitments on every one of our 500+ transactions. We've never walked back on them. They're not marketing copy — they're how we actually operate.",
    items: [
      {
        num: "01",
        title: "Written offer within 24 hours",
        body: "After our initial conversation and property review, you receive a written, no-obligation cash offer. No verbal estimates that change later — a real number in writing.",
      },
      {
        num: "02",
        title: "The offer is the offer",
        body: "We don't lower our price after you've accepted and taken your property off the market. What we offer is what we close on — no last-minute renegotiation when you're most vulnerable.",
      },
      {
        num: "03",
        title: "No fees or commissions — ever",
        body: "We cover closing costs. We don't charge agent fees. The number in your offer is the amount that goes to you — nothing deducted on the other side of closing.",
      },
      {
        num: "04",
        title: "As-is — no conditions",
        body: "We don't send you a repair list after the walkthrough. We don't require staging, cleaning, or renovation. We buy the property as it stands — full stop.",
      },
      {
        num: "05",
        title: "Closing on your timeline",
        body: "7 days if you need to move fast. 30 or 60 days if you need to make arrangements. You choose the closing date — we build our schedule around yours.",
      },
      {
        num: "06",
        title: "Local title company",
        body: "Every transaction closes through a licensed Pinellas County title company. Your sale is legally clean, properly documented, and protected under Florida law.",
      },
    ],
  },
  reviews: {
    eyebrow: "What St Pete Sellers Say",
    titleLead: "Real words from ",
    titleEm: "real neighbors.",
    lede: "Unedited, unscripted reviews from verified St. Petersburg sellers — collected on Google with no incentives.",
    items: [
      {
        initials: "TC",
        name: "Tom Cherry",
        meta: "Verified Google Review · 4 years ago",
        quote:
          "We Buy St Pete Homes was excellent to work with from start to finish. They complied with all of my terms and stayed on top of the entire process. John was prompt and courteous. Contract to close was 14 days. I would highly recommend.",
      },
      {
        initials: "DB",
        name: "Debbie Bross",
        meta: "Verified Google Review · Realtor, 19 yrs",
        quote:
          "I have had two closings with this company. I have been a Realtor for 19 years in St. Petersburg and this company was easy to work with and very honest. I hope to work with them again soon.",
      },
      {
        initials: "NF",
        name: "Nicci Fagan",
        meta: "Verified Google Review · 3 years ago",
        quote:
          "John and his team reached out to gauge my interest in selling my home at a time I had just started to consider it. I was recovering from major surgery, and they were very accommodating with the closing date and several other things.",
      },
    ],
    googleCta: "Read all verified reviews on Google",
  },
  faq: {
    eyebrow: "Questions About Us",
    titleLead: "Common questions about ",
    titleEm: "who we are.",
    items: [
      {
        q: "Are you a local company or a national franchise?",
        a: "We're locally owned and operated — not a franchise, not a national iBuyer, not a call center. We Buy St Pete Houses was founded by John Gardepe in St. Petersburg in 2014 and is still independently run today. When you call us, you're talking to our local team — people who live and work in this community.",
      },
      {
        q: "How do I know your cash offers are fair?",
        a: "We explain our offer formula openly — After Repair Value, minus holding and selling costs (10%), minus our profit (10%), minus realistic repair costs. We'll walk you through the math so you understand exactly where the number comes from. You're also never obligated to accept, and we encourage you to get other offers to compare. Our goal is a fair deal, not a captured seller.",
      },
      {
        q: "How is selling to you different from listing with an agent?",
        a: "A traditional listing maximizes your sale price if your property is market-ready and you have time to wait. Cash sales trade some of that price for speed, certainty, and zero repair obligation. We're honest about this tradeoff — if your home is in great condition and you have 90 days, a traditional sale might net you more. Where we shine is when time, condition, or circumstances make a traditional sale difficult or impossible.",
      },
      {
        q: "Are cash home buyers in St Petersburg legitimate?",
        a: "There are legitimate local buyers and there are scams — and you should verify which is which before signing anything. For us: we're a BBB A+ accredited company with more than a decade of documented transactions in Pinellas County, 120+ verified Google reviews, a physical address (PO Box 143, St Petersburg FL 33731), and we close every deal through a licensed Florida title company. You can verify our reviews, call us directly, and talk to our title company before committing to a thing.",
      },
      {
        q: "Do you work with sellers in difficult situations — bankruptcy, foreclosure, probate?",
        a: "Yes — and these are the situations we specialize in. We've helped sellers stop foreclosures before the auction date, navigate inherited properties through probate, sell during divorce proceedings on court-required timelines, and sell during bankruptcy with trustee and court coordination. We've seen almost every difficult situation and we're comfortable working alongside attorneys, trustees, and courts to get the sale done correctly.",
      },
      {
        q: "Can I call and just ask questions without committing to anything?",
        a: "Absolutely — and we'd encourage it. Many of our sellers called us months before they were ready to sell, just to understand their options. There's zero pressure to accept any offer, zero obligation to proceed, and nothing you say to us will be used against you in a lowball offer. We'd rather give you an honest picture of what we can do and let you decide on your own timeline.",
      },
    ],
  },
  cta: {
    eyebrow: "Let's Talk",
    titleLead: "Ready to see what your St Pete home is ",
    titleEm: "worth to us?",
    description:
      "No obligation. No pressure. A fair written offer within 24 hours — from a local team that's been buying St. Petersburg homes since 2014.",
    primaryLabel: "Get My Cash Offer",
    secondaryLabel: "Call (727) 477-8998",
  },
} as const;
