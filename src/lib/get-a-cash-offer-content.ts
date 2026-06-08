import { ASSETS } from "@/lib/constants";

export const GET_A_CASH_OFFER_PAGE = {
  meta: {
    title: "Get a Cash Offer | We Buy St Pete Houses | No Obligation",
    description:
      "Get a no-obligation cash offer for your St Petersburg home within 24 hours. Learn exactly how our offer is calculated, what to expect, and start the process today.",
  },
  hero: {
    eyebrow: "We Buy St Pete Houses",
    titleLead: "Get Your Fair ",
    titleEm: "Cash Offer",
    body: "Fill out the form and we'll have a written, no-obligation cash offer in your hands within 24 hours. No repairs, no commissions, no pressure to accept.",
    trustPills: [
      "Written offer within 24 hours",
      "No obligation to accept",
      "BBB A+ Accredited",
      "500+ homes purchased",
    ],
    steps: [
      {
        num: "1",
        timing: "~ 2 minutes",
        title: "Tell us about your property",
        body: "Fill out the form with your address, contact info, and a brief description of your situation. We ask a few follow-up questions by phone to understand your timeline and any unique circumstances.",
      },
      {
        num: "2",
        timing: "Within 24 hours",
        title: "We assess your property & run the numbers",
        body: "We research recent comparable sales in your neighborhood, estimate repair costs based on condition details you share, and apply our transparent offer formula — ARV minus holding costs, profit margin, and repairs. In most cases we can present an offer without an in-person visit.",
      },
      {
        num: "3",
        timing: "In writing",
        title: "You receive your written cash offer",
        body: "We present a written offer with clear terms — the amount, the proposed closing date, and no hidden contingencies. We walk you through how we calculated the number. There's no pressure to accept and no expiry deadline forcing a decision.",
      },
      {
        num: "4",
        timing: "One visit",
        title: "Optional property walkthrough",
        body: "If you'd like us to see the property before finalizing terms, we schedule a single, no-pressure walkthrough. No staging, no cleaning. We see the home as it stands. This step isn't always required — we close many properties without one.",
      },
      {
        num: "5",
        timing: "Your choice",
        title: "Accept, decline, or ask questions",
        body: "You review the offer with family, your attorney, or whoever you want to involve. Accept when you're ready. Decline if it doesn't work — no hard feelings. Ask us to explain any part of the offer you don't understand.",
      },
      {
        num: "6",
        timing: "7–14 days typical",
        title: "Close on your date — cash in hand",
        body: "Once accepted, we work with a licensed Pinellas County title company to handle all paperwork. You choose the closing date. We cover all standard closing costs. The offer amount goes directly to you — nothing deducted.",
      },
    ],
    form: {
      title: "Get Your Fair Offer Today",
      intro: "We buy houses fast, as-is, and stress-free. No repairs or out-of-pocket costs.",
      submitLabel: "Get My Fair Cash Offer",
      consent:
        "By submitting, you agree to receive transactional or conversational communications from We Buy St Pete Houses via SMS, calls, and email related to your property inquiry. Reply STOP to opt out. Your info is never sold.",
      successTitle: "We've got your details.",
      successBody:
        "Our local St Pete team will be in touch within 24 hours — usually much sooner. You can also reach us directly at ",
      badges: ["No obligation", "Info never sold", "24 hr response"],
      situationOptions: [
        "Facing foreclosure",
        "Inherited / probate property",
        "Divorce or separation",
        "Tired landlord / problem tenants",
        "Major repairs needed",
        "Fire / flood / storm damage",
        "Property with liens",
        "Bankruptcy",
        "Relocating",
        "Hoarder property",
        "Other",
      ],
      conditionOptions: [
        "Move-in ready / minor cosmetic issues",
        "Needs moderate updates or repairs",
        "Needs significant repairs",
        "Major damage (fire, flood, structural)",
        "Extreme condition (hoarder, abandoned)",
      ],
      timelineOptions: [
        "As fast as possible (under 2 weeks)",
        "Within 30 days",
        "30–60 days",
        "Flexible — no rush",
        "Not sure yet",
      ],
    },
  },
  formula: {
    eyebrow: "Our Offer Formula",
    titleLead: "How we calculate ",
    titleEm: "your number.",
    titleTail: "",
    lede: "Every cash offer follows the same transparent formula. We'll walk you through each line item when we present your offer — no mystery, no lowball anchoring, no last-minute changes.",
    factors: [
      {
        label: "Start with",
        value: "ARV",
        title: "After Repair Value",
        body: "What your home would sell for fully renovated — based on recent comparable sales in your actual neighborhood, not a generic estimate.",
      },
      {
        label: "Subtract",
        value: "−10%",
        title: "Holding & Selling Costs",
        body: "Property taxes, insurance, utilities while we hold it, plus agent commissions and closing costs we pay when we resell after renovation.",
      },
      {
        label: "Subtract",
        value: "−10%",
        title: "Our Profit Margin",
        body: "A fixed, disclosed margin that keeps us in business. We don't maximize this at your expense — it's the same on every deal.",
      },
      {
        label: "Subtract",
        value: "−Repairs",
        title: "Estimated Repair Costs",
        body: "Our realistic estimate of what it costs to bring the home to market-ready condition. We absorb this risk so you pay nothing out of pocket.",
      },
    ],
    callout: {
      title: "= Your Written Cash Offer",
      body: "The amount in your offer is the amount you receive at closing. No commissions deducted, no closing costs charged to you, no surprise renegotiations after you've accepted.",
      cta: { label: "See My Number", href: "#offer-form" },
    },
    footerNote:
      "Ask us to walk through the math with you — we'll show you the comparable sales we used, our repair estimate, and exactly how we arrived at your offer. Nothing is hidden.",
  },
  evaluate: {
    eyebrow: "What We Evaluate",
    titleLead: "What goes into ",
    titleEm: "your offer.",
    titleTail: "",
    lede: "These are the factors we research and weigh when calculating your cash offer. The more accurately you describe them in the form, the faster and more precisely we can make you an offer.",
    items: [
      {
        label: "Location",
        title: "Neighborhood & Location",
        body: "We study recent comparable sales (comps) within your specific neighborhood — not city-wide averages. Proximity to amenities, school zones, and local demand all factor into the ARV we calculate.",
      },
      {
        label: "Property",
        title: "Size, Layout & Property Type",
        body: "Square footage, bedroom and bathroom count, lot size, and property type (single family, multi-family, etc.) all affect what comparable homes sell for in your area.",
      },
      {
        label: "Condition",
        title: "Current Condition & Repair Scope",
        body: "We estimate the cost to bring your home to market-ready condition — roof, HVAC, plumbing, electrical, cosmetic updates. This is the biggest variable in the offer and the one you have the most ability to describe accurately.",
      },
      {
        label: "Timeline",
        title: "Your Closing Timeline",
        body: "How quickly you need to close affects the logistics of our offer, not the price. Whether you need 7 days or 60, we work around your schedule — both are equally fine.",
      },
      {
        label: "Encumbrances",
        title: "Liens, Violations & Legal Matters",
        body: "Outstanding liens, code enforcement violations, unpaid property taxes, or legal matters (probate, bankruptcy, divorce) affect how we structure the transaction — but rarely prevent a sale. Tell us everything upfront so we can account for it accurately.",
      },
      {
        label: "Occupancy",
        title: "Occupancy Status",
        body: "Whether the property is owner-occupied, tenant-occupied, vacant, or in an estate affects closing logistics. We buy in all occupancy situations — including properties with tenants in place.",
      },
    ],
  },
  timeline: {
    eyebrow: "From Inquiry to Closing",
    titleLead: "Your offer to close ",
    titleEm: "timeline.",
    titleTail: "",
    lede: "Here's what a typical transaction looks like from the moment you fill out the form to cash in hand. Every step can be adjusted to your needs.",
    items: [
      {
        label: "Day 0",
        title: "Form Submitted",
        body: "You fill out the form. We confirm receipt.",
      },
      {
        label: "Within 24 hrs",
        title: "Offer Presented",
        body: "Written cash offer delivered — by phone and in writing.",
      },
      {
        label: "Your timeline",
        title: "You Decide",
        body: "Review with family or attorney. No deadline to accept.",
      },
      {
        label: "When you're ready",
        title: "Contract Signed",
        body: "Standard as-is purchase contract. Title company opens escrow.",
      },
      {
        label: "7–14 days typical",
        title: "Closing Day",
        body: "Sign, transfer, receive cash. We cover all closing costs.",
      },
    ],
  },
  prepare: {
    eyebrow: "What to Prepare",
    titleLead: "What you'll need to ",
    titleEm: "get started.",
    titleTail: "",
    items: [
      {
        title: "Property address",
        body: "The full address of the property you want to sell. That's all we need to start researching comps and forming an initial estimate.",
      },
      {
        title: "Your contact information",
        body: "Phone number and email so we can reach you with the offer and answer any questions quickly. We respond personally — no call centers.",
      },
      {
        title: "Basic property details",
        body: "Condition, occupancy status, and any known issues (liens, violations, damage). The more detail you provide, the faster and more accurately we can present your offer.",
      },
      {
        title: "Your ideal timeline",
        optional: "Optional",
        body: "When you need to close helps us structure the transaction correctly — though it doesn't change the offer amount. Fast or flexible, both are equally fine.",
      },
      {
        title: "Proof of ownership",
        optional: "At contract stage",
        body: "We'll need a deed or title confirmation when we move to contract — but you don't need it to get your cash offer. We'll guide you through gathering documents when the time comes.",
      },
    ],
    callout: {
      title: "You don't need to have everything ready.",
      body: "We guide every seller through the process step by step. You don't need a stack of documents to get your offer — just a property address and a way to reach you.",
      bullets: [
        "We handle all paperwork at the contract and closing stage",
        "We work alongside your attorney or trustee if your situation requires it",
        "We close through a licensed Pinellas County title company every time",
        "Complicated situations — liens, probate, bankruptcy — are situations we handle regularly",
        "You'll never be asked to pay anything upfront",
      ],
      ctaLabel: "Call (727) 477-8998",
    },
  },
  faq: {
    eyebrow: "Questions",
    titleLead: "Common questions about ",
    titleEm: "cash offers.",
    titleTail: "",
    lede: "Things sellers usually want to know before they fill out the form. If your question isn't here, just call us.",
    items: [
      {
        q: "Is the cash offer really free and no obligation?",
        a: "Yes, completely. Receiving a cash offer costs you nothing and commits you to nothing. You can receive the offer, compare it with other options, discuss it with family or an attorney, and decline it without any consequence. We don't charge any fee at any stage of the process.",
      },
      {
        q: "How is the offer delivered — phone or writing?",
        a: "Both. We'll call you first to walk through the offer and answer questions, then follow up with the offer in writing. A verbal offer that later changes is not a real offer — we put everything in writing so you have a firm number to evaluate.",
      },
      {
        q: "Will you lower the offer after seeing the property?",
        a: "We don't renegotiate after you've accepted based on things we already knew about. If we present an offer, we stand behind it. The only exception is if the walkthrough reveals something materially different from what was described — in which case we'd discuss it with you openly before proceeding.",
      },
      {
        q: "How long do I have to decide?",
        a: "There's no expiry deadline we impose on our offers. Take the time you need — talk to family, consult an attorney, compare your options. Market conditions can shift over time, but we won't pressure you with artificial urgency.",
      },
      {
        q: "Can I get a cash offer if I still have a mortgage?",
        a: "Yes. Having a mortgage doesn't prevent a cash sale. At closing, your outstanding mortgage balance is paid off from the sale proceeds through the title company — just like in any real estate transaction. You receive whatever equity remains after the payoff.",
      },
      {
        q: "What if my property has code violations or unpaid taxes?",
        a: "Tell us upfront — it doesn't disqualify the sale. Code violations, unpaid property taxes, and outstanding liens can typically be resolved at the closing table from the sale proceeds. We've purchased numerous St Pete properties with active code enforcement actions. Being upfront about these issues allows us to structure the offer and closing correctly.",
      },
      {
        q: "Do I need to be present at closing?",
        a: "In most cases, yes — you or your authorized representative signs the closing documents at the title company. For out-of-state sellers or certain situations, remote closings can sometimes be arranged through power of attorney. Our title company team will guide you through what's required for your specific situation.",
      },
      {
        q: "How do I know the offer is fair?",
        a: "We show you the math. We'll walk through the comparable sales we used to establish ARV, our repair cost estimate, and how we applied the formula. We also encourage you to get other offers — a fair offer doesn't fear comparison. The best way to verify is to compare our number against what a local agent would net you after commissions, closing costs, and repair investment.",
      },
    ],
  },
  cta: {
    titleLead: "Ready to see ",
    titleEm: "your number?",
    titleTail: "",
    body: "Fill out the form above or call us directly. A written offer within 24 hours — no obligation, no pressure, no fees ever.",
    primaryLabel: "Get My Cash Offer →",
    primaryHref: "#offer-form",
  },
};

export const GET_A_CASH_OFFER_EVALUATE_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Neighborhood & Location": {
    image: ASSETS.whyLocalExpertiseMatters,
    imageAlt: "St Petersburg neighborhood and local market expertise",
  },
  "Size, Layout & Property Type": {
    image: ASSETS.distressedProperty,
    imageAlt: "Property size and layout factors for a cash offer",
  },
  "Current Condition & Repair Scope": {
    image: ASSETS.sellAsIsNoRepairs,
    imageAlt: "Home condition and repair scope for cash offer evaluation",
  },
  "Your Closing Timeline": {
    image: ASSETS.certaintyControlClosing,
    imageAlt: "Flexible closing timeline for St Petersburg home sellers",
  },
  "Liens, Violations & Legal Matters": {
    image: ASSETS.multipleLiens,
    imageAlt: "Liens and legal matters on a property for sale",
  },
  "Occupancy Status": {
    image: ASSETS.tiredLandlord,
    imageAlt: "Occupancy status including tenant-occupied properties",
  },
};
