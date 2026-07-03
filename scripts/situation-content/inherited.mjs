/**
 * /sell-inherited-house-florida — matches
 * situation-page/sell-inherited-house-st-petersburg.html
 */

export const INHERITED_CONTENT = {
  sectionOrder: [
    "stats",
    "probate",
    "tax",
    "resources",
    "buyProcess",
    "areas",
    "testimonials",
    "guarantee",
    "faq",
    "finalCta",
  ],
  hero: {
    compassionBanner:
      "Inheriting a home can be overwhelming. We're here to make the process as simple and stress-free as possible.",
    formTitle: "Tell us about the inherited home.",
    formIntro:
      "Receive a fair, no-obligation cash offer — we'll guide you through every step.",
    authorRole: "Founder, We Buy St Pete Houses · Tampa Bay Area",
    addressPlaceholder: "Full property address in St Petersburg",
    checklist: [
      "Buy as-is — no cleaning, repairs, or staging required",
      "No agent commissions or hidden fees — keep the full offer amount",
      "We guide you through probate and title clearance",
      "Close in as little as 7 days — or on your timeline",
    ],
  },
  stats: [
    { value: "BBB", suffix: " A+", label: "Accredited Business" },
    { value: "5.0", suffix: " ★", label: "Google Reviews (120+)" },
    { value: "500", suffix: "+", label: "Homes Bought in Tampa Bay" },
    { value: "15", suffix: "+ Yrs", label: "Local Experience" },
  ],
  buyProcess: {
    layout: "visual",
    eyebrow: "How We Buy Inherited Houses",
    titleLead: "Cash, as-is, with ",
    titleEm: "probate support.",
    titleTail: "",
    lede:
      "Our process is designed to be transparent and stress-free for heirs navigating unfamiliar territory. From initial contact to closing, we guide you every step of the way.",
    features: [
      {
        icon: "document",
        title: "As-is purchases — nothing required",
        body: "No need to clean out belongings, fix outdated systems, or worry about curb appeal. We purchase the property exactly as it is, including personal items left behind.",
      },
      {
        icon: "dollar",
        title: "No commissions or fees — ever",
        body: "You keep the full cash offer amount. There are no real estate agent commissions, no closing costs charged to you, and no hidden fees at the end.",
      },
      {
        icon: "calendar",
        title: "Probate and title clearance support",
        body: "We work alongside your probate attorney to keep the process moving. We can begin preparing the sale while probate is underway — reducing the overall timeline to closing.",
      },
      {
        icon: "location",
        title: "Flexible closing — your timeline",
        body: "Close in as little as 7 days, or take more time to finalize probate or family decisions. You choose the closing date that works for your situation.",
      },
    ],
    stepsTitle: "From inquiry to cash in 4 steps",
    steps: [
      {
        num: "1",
        icon: "phone",
        title: "Contact us with property details",
        body: "Call (727) 477-8998, email, or submit our online form. Share the property address and your probate status.",
        link: { label: "Contact us today →", href: "/contact" },
      },
      {
        num: "2",
        icon: "house",
        title: "Property review and fair cash offer",
        body: "We evaluate the property's condition and local market. You receive a written, no-obligation cash offer with transparent terms.",
        link: { label: "How our process works →", href: "/how-it-works" },
      },
      {
        num: "3",
        icon: "handshake",
        title: "Accept the offer on your terms",
        body: "No pressure, no deadlines. Accept when you're ready. We coordinate with your probate attorney and a local title company.",
      },
      {
        num: "4",
        icon: "cash",
        title: "Close and receive your cash",
        body: "You choose the closing date. We handle all paperwork. You receive the full cash offer amount at closing — no deductions.",
      },
    ],
  },
  probate: {
    eyebrow: "Probate & Title",
    titleLead: "What you need to know about ",
    titleEm: "probate in Florida.",
    titleTail: "",
    lede:
      "Probate may be required, but we guide you through the steps and can begin preparing the sale in parallel — reducing your overall timeline.",
    items: [
      {
        label: "Is it required?",
        question: "Is probate required to sell an inherited property?",
        answer:
          "Probate is typically required when a property passes through an estate without joint ownership or a trust. If the deceased owned the property solely in their name, probate is necessary to transfer the title to the heirs — this applies to most inherited properties in St Petersburg and throughout Florida.",
      },
      {
        label: "How long does it take?",
        question: "How long does Florida probate take?",
        answer:
          "Timelines vary by county due to court backlog and local procedures. Summary administration for smaller estates typically takes 1–3 months. Formal administration typically takes 6–12 months or longer. In Pinellas County, court scheduling and backlog affect timelines — but our familiarity with local procedures helps us identify which steps can be accelerated and what documentation to prepare in advance.",
      },
      {
        label: "How we help",
        question: "How does We Buy St Pete Houses support the probate process?",
        answer:
          "We work alongside your probate attorney to ensure all documentation is in order and can begin preparing the sale while probate is underway. This parallel approach saves time and reduces the total timeline from inheritance to cash in hand. We also coordinate with local Pinellas County title companies to ensure a smooth, compliant closing.",
      },
    ],
    timelineTitle: "Florida Probate Timeline",
    timeline: [
      { stage: "Filing & Notice", duration: "Weeks 1–4", body: "Petition filed with county probate court; creditors and heirs notified" },
      { stage: "Administration & Inventory", duration: "Months 1–6", body: "Estate assets inventoried; debts and taxes paid; court hearings scheduled" },
      { stage: "Title Transfer to Heirs", duration: "After court approval", body: "Property title transferred; heirs authorized to sell" },
      { stage: "Sale & Closing", duration: "As little as 7 days after title clears", body: "We close quickly once title is clear — often within days of authorization" },
    ],
  },
  tax: {
    eyebrow: "Tax Considerations",
    titleLead: "Tax considerations when selling ",
    titleEm: "inherited property in Florida.",
    titleTail: "",
    lede:
      "Florida has no state inheritance tax — but federal capital gains rules still apply. Here's a general overview to help you plan ahead.",
    paragraphs: [
      "Florida does not have a state inheritance or estate tax, which simplifies the process for most heirs. However, federal estate tax may apply to very large estates, and capital gains tax considerations depend on the property's stepped-up basis at the time of inheritance.",
      "When you inherit property, the IRS typically resets the property's basis to its fair market value at the date of the decedent's death — this is the \"stepped-up basis.\" This often means little to no capital gains tax if you sell the property shortly after inheriting it, since the basis and sale price are close together.",
      "If the property appreciates significantly after inheritance, you may owe capital gains tax on the difference between the stepped-up basis and the eventual sale price. A cash sale that closes quickly can minimize this exposure.",
    ],
    disclaimer:
      "Tax questions are best answered by a qualified CPA or tax attorney familiar with Florida real estate. The information above is general in nature and does not constitute tax advice.",
    cards: [
      { label: "Florida state tax", title: "No state inheritance or estate tax", body: "Florida does not impose a state-level inheritance or estate tax, simplifying the process for most heirs selling inherited property." },
      { label: "Stepped-up basis", title: "IRS resets basis at date of death", body: "The property's tax basis is typically reset to its fair market value on the date the owner passed. Selling shortly after inheriting often results in little to no capital gains tax." },
      { label: "Capital gains", title: "Applies only to appreciation after inheritance", body: "Capital gains tax applies to the difference between the stepped-up basis and your eventual sale price. Selling quickly minimizes this gap." },
      { label: "Our recommendation", title: "Consult a Florida CPA before closing", body: "We recommend consulting a tax advisor or CPA familiar with Florida real estate before finalizing your sale. We can provide referrals to trusted local professionals." },
    ],
  },
  resources: {
    eyebrow: "Local Resources",
    titleLead: "Local resources for selling ",
    titleEm: "inherited property",
    titleTail: " in St Petersburg.",
    lede:
      "These offices handle the key legal and administrative steps involved in selling inherited property. We're familiar with each one and can guide you through what's needed and when.",
    items: [
      { tag: "City", title: "St. Petersburg City Hall", body: "Property records, local ordinances, permits, and municipal information relevant to the inherited property." },
      { tag: "Clerk", title: "Pinellas County Clerk of the Circuit Court & Comptroller", body: "Probate filings, court records, deed recording, and official property documents for estates going through Pinellas County." },
      { tag: "Tax", title: "Pinellas County Tax Collector", body: "Property tax records, outstanding tax balances, and payment information. Important for title clearance before closing." },
      { tag: "Appraiser", title: "Pinellas County Property Appraiser", body: "Official property valuations, ownership information, and assessment data. Useful for understanding the property's current assessed value." },
      {
        tag: "Court",
        title: "Pinellas County Circuit Court — Probate Division",
        body: "If the estate requires probate before the property can be sold, the personal representative's authority to act flows from a court order issued here.",
      },
      {
        tag: "Legal",
        title: "Florida Bar Lawyer Referral Service",
        body: "The Florida Bar's referral service connects you with licensed Florida attorneys who handle exactly these situations.",
      },
    ],
  },
  guarantee: {
    eyebrow: "Our Commitment",
    titleLead: "Simple terms. ",
    titleEm: "No surprises.",
    titleTail: "",
    lede: "The same straightforward promise we'd want if we were the ones inheriting a home.",
    items: [
      {
        title: "No commissions or fees",
        body: "The cash offer you accept is the amount you receive. We cover all standard closing costs — nothing is deducted at the end.",
      },
      {
        title: "Buy as-is — nothing required",
        body: "No repairs, no cleaning, no staging. We purchase the property exactly as it stands — belongings and all if needed.",
      },
      {
        title: "No pressure, no deadlines from us",
        body: "You accept when you're ready. We work on your timeline — and your probate attorney's timeline, not ours.",
      },
      {
        title: "Guaranteed cash — no financing risk",
        body: "We buy with cash. No lender that can pull out, no buyer financing contingency, no deal falling through at the last minute.",
      },
    ],
    ctaTitle: "Ready to move forward with the sale?",
    ctaBody: "A fair cash offer — no repairs, no commissions, on your probate timeline.",
  },
  areas: {
    eyebrow: "Service Area",
    titleLead: "St Petersburg and the ",
    titleEm: "Greater Tampa Bay area.",
    titleTail: "",
    lede:
      "Our local focus means we understand the neighborhoods, market conditions, and specific challenges of inherited properties in this region.",
  },
  faq: {
    eyebrow: "FAQ",
    titleLead: "Frequently asked questions about selling ",
    titleEm: "inherited houses",
    titleTail: " in St Petersburg.",
  },
  finalCta: {
    eyebrow: "Ready to move forward?",
    titleLead: "Sell your ",
    titleEm: "inherited house",
    titleTail: " in St Petersburg for cash.",
    description:
      "No repairs. No fees. No waiting on the market. A fair cash offer from a local team that knows St Petersburg — and the probate process — inside and out.",
  },
};
