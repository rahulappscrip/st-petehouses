export type CashVsAgentCompareRow =
  | { type: "divider"; label: string }
  | {
      type: "row";
      label: string;
      note?: string;
      cash: string;
      agent: string;
    };

export type CashVsAgentMathRow = {
  label: string;
  value: string;
  tone?: "positive" | "negative" | "neutral";
};

export const CASH_VS_AGENT_PAGE = {
  meta: {
    title: "Cash Offer vs Listing with an Agent | We Buy St Pete Houses",
    description:
      "Honest comparison of selling your St Petersburg home for cash vs listing with an agent. See the real tradeoffs on price, speed, fees, and certainty before you decide.",
  },
  hero: {
    eyebrow: "We Buy St Pete Houses",
    titleLead: "Cash Offer vs. ",
    titleEm: "Listing with an Agent",
    body: "Both paths can be right — for different sellers in different situations. This page lays out the honest tradeoffs so you can make the decision that's actually best for you.",
    disclaimer:
      "We're a cash buyer — but we believe you deserve an honest comparison, not a sales pitch. If a traditional listing is better for your situation, we'll tell you.",
  },
  framing: {
    cash: {
      tag: "Cash Sale",
      title: "Speed, certainty, and zero prep — at a potential price tradeoff",
      paragraphs: [
        "A cash offer closes in as little as 7 days. No repairs, no showings, no commissions, no financing risk. The offer we make is what you receive at closing — no deductions, no surprises.",
        "The tradeoff: cash offers are typically below the open market price, because we factor in repair costs, holding costs, and our profit margin. For some sellers, the net outcome — after accounting for what you'd spend on repairs, commissions, and time — is comparable to a traditional sale. For others, the gap is real and worth waiting for.",
      ],
      bestFor:
        "Sellers who need speed, certainty, or as-is purchase — facing foreclosure, inheritance, divorce, damage, relocation, or properties that need significant work.",
    },
    agent: {
      tag: "Traditional Listing",
      title: "Maximum price potential — when your timeline and property allow for it",
      paragraphs: [
        "Listing with an agent gives you access to the full buyer pool and maximizes your sale price — if your property is in good condition and you have time to wait. The agent markets your home, negotiates on your behalf, and manages the transaction.",
        "The tradeoff: you typically pay 5–6% in agent commissions, plus seller closing costs. You'll likely need repairs or updates before listing. And the process takes 60–90+ days on average, with no guarantee the deal closes — buyer financing can fall through at any point.",
      ],
      bestFor:
        "Sellers with market-ready properties, 2–3 months of flexibility, and situations that don't require a guaranteed or fast close.",
    },
  },
  compare: {
    eyebrow: "Side by Side",
    titleLead: "How the two paths ",
    titleEm: "compare.",
    sourceNote:
      "Commission and closing cost ranges based on standard industry practice. Timeline figures from homepage data. Net proceeds will vary by property, condition, and market conditions.",
    rows: [
      { type: "divider", label: "Speed & Timeline" },
      {
        type: "row",
        label: "Time to close",
        note: "From accepted offer to funds in hand",
        cash: "7–14 days typical",
        agent: "60–90+ days",
      },
      {
        type: "row",
        label: "Closing date flexibility",
        cash: "You choose",
        agent: "Depends on buyer",
      },
      {
        type: "row",
        label: "Deal certainty",
        note: "Risk of sale falling through",
        cash: "Guaranteed — no financing risk",
        agent: "Buyer financing can fall through",
      },
      { type: "divider", label: "Costs & Fees" },
      {
        type: "row",
        label: "Agent commission",
        note: "Typically paid by seller from proceeds",
        cash: "$0 — no agent involved",
        agent: "5–6% of sale price",
      },
      {
        type: "row",
        label: "Seller closing costs",
        note: "Title, transfer taxes, fees",
        cash: "We cover them",
        agent: "Typically ~2–3% of price",
      },
      {
        type: "row",
        label: "Repairs before sale",
        cash: "None required",
        agent: "Often required to list",
      },
      {
        type: "row",
        label: "Hidden fees or surprises",
        cash: "None — offer is what you receive",
        agent: "Inspection credits common",
      },
      { type: "divider", label: "Process & Convenience" },
      {
        type: "row",
        label: "Showings & open houses",
        cash: "None — one walkthrough",
        agent: "Multiple showings required",
      },
      {
        type: "row",
        label: "Staging & cleaning",
        cash: "Not required",
        agent: "Often expected",
      },
      {
        type: "row",
        label: "Appraisal required",
        cash: "No",
        agent: "Required by lender",
      },
      {
        type: "row",
        label: "Buyer inspection & negotiation",
        cash: "No renegotiation after offer",
        agent: "Inspection credits are common",
      },
      { type: "divider", label: "Sale Price" },
      {
        type: "row",
        label: "Gross sale price",
        note: "Before costs are deducted",
        cash: "Below market value",
        agent: "Closer to market value",
      },
      {
        type: "row",
        label: "Net proceeds",
        note: "After commissions, costs, repairs deducted",
        cash: "Depends on property condition",
        agent: "Depends on costs & repairs",
      },
    ] satisfies readonly CashVsAgentCompareRow[],
  },
  math: {
    eyebrow: "The Math",
    titleLead: "What the numbers look like ",
    titleEm: "on a $350,000 home.",
    lede: "Using the same example from our homepage savings calculator — a $350,000 home needing $12,000 in repairs before listing. These are illustrative numbers to show how the costs compare. Your actual outcome will vary.",
    cash: {
      title: "Cash Sale — We Buy St Pete Houses",
      subtitle: "Based on as-is condition. No repairs, commissions, or closing costs to seller.",
      rows: [
        { label: "Cash offer (illustrative)", value: "Varies by condition", tone: "neutral" },
        { label: "Agent commission", value: "$0", tone: "positive" },
        { label: "Seller closing costs", value: "$0 — we cover them", tone: "positive" },
        { label: "Repairs before sale", value: "$0 — not required", tone: "positive" },
        { label: "Holding costs during sale", value: "Minimal — 7–14 days", tone: "positive" },
        { label: "What you avoid paying", value: "Commissions + costs + repairs", tone: "neutral" },
      ] satisfies readonly CashVsAgentMathRow[],
    },
    agent: {
      title: "Traditional Listing — with an Agent",
      subtitle: "$350,000 sale price example, 6% commission, 2.5% closing costs, $12,000 repairs.",
      rows: [
        { label: "Gross sale price", value: "$350,000", tone: "neutral" },
        { label: "Agent commission (6%)", value: "− $21,000", tone: "negative" },
        { label: "Seller closing costs (2.5%)", value: "− $8,750", tone: "negative" },
        { label: "Repairs before listing", value: "− $12,000", tone: "negative" },
        { label: "Holding costs (60–90 days)", value: "Additional", tone: "negative" },
        { label: "Net after deductions (excl. holding)", value: "$308,250", tone: "neutral" },
      ] satisfies readonly CashVsAgentMathRow[],
    },
    note: {
      lead: "How to read this:",
      body: "The cash offer we make will be below $308,250 — we need to factor in our own costs and profit margin (see our offer formula below). But depending on your property's condition, the gap between the net cash sale and the net traditional sale is often smaller than sellers expect — especially when repairs are significant. For some sellers the traditional route nets more. For others, speed, certainty, and avoiding the prep work makes cash the right call. We're happy to walk you through the math for your specific property.",
    },
  },
  fit: {
    eyebrow: "Which Path Is Right for You",
    titleLead: "When a cash sale makes sense — ",
    titleEm: "and when it doesn't.",
    lede: "We're not the right fit for everyone. Here's our honest take on when each path makes more sense.",
    cash: {
      title: "Cash sale tends to make sense when...",
      items: [
        "You need to close quickly — facing foreclosure, divorce deadlines, or relocation timelines a traditional sale can't meet",
        "Your property needs significant repairs that would be expensive to complete before listing",
        "The property has issues that most lenders won't finance — fire damage, flood damage, severe structural problems",
        "You've inherited a property and want to settle the estate quickly without managing a listing",
        "The certainty of a guaranteed close matters more than maximizing the gross price",
        "You're a tired landlord wanting a clean exit — with or without tenants in place",
      ],
    },
    agent: {
      title: "Traditional listing tends to make sense when...",
      items: [
        "Your property is in excellent, market-ready condition with no deferred maintenance",
        "You have 2–3 months of flexibility and don't need a guaranteed or fast close",
        "Maximizing the gross sale price is your primary goal and you're willing to absorb the associated costs and risks",
        "The property is in a high-demand neighborhood where buyer competition is strong",
        "You're comfortable with showings, inspections, and the uncertainty of buyer financing",
        "The math clearly favors a traditional sale after accounting for all costs on both sides",
      ],
    },
  },
  formula: {
    eyebrow: "Our Offer Formula — Explained",
    titleLead: "How we calculate ",
    titleEm: "our cash offer.",
    lede: "We're open about how we arrive at our numbers. Every cash offer follows this formula — and we'll walk you through each component if you ask. We don't maximize our profit at your expense, but we do need to make a margin to stay in business.",
    numbersEyebrow: "Step by step",
    steps: [
      {
        op: "",
        label: "After Repair Value (ARV)",
        desc: "What your home would sell for in fully renovated, market-ready condition — based on recent comparable sales in your neighborhood, not a guess.",
      },
      {
        op: "− 10%",
        label: "Holding & Selling Costs",
        desc: "Property taxes, insurance, utilities, and agent commissions + closing costs we pay when we resell the property after renovation.",
      },
      {
        op: "− 10%",
        label: "Our Profit Margin",
        desc: "A reasonable margin that lets us run a sustainable business. We don't maximize this at your expense — it's fixed and disclosed upfront.",
      },
      {
        op: "− Actual",
        label: "Estimated Repair Costs",
        desc: "The realistic cost to bring your home to market-ready condition. We absorb this risk — so you don't pay for repairs out of pocket.",
      },
    ],
    result: {
      title: "= Your Cash Offer",
      body: "The amount in writing — firm, no last-minute renegotiations. This is what you receive at closing, with no commissions or costs deducted from your side.",
      cta: "See My Number →",
    },
    transparencyNote: {
      lead: "Why we share this:",
      body: "You deserve to know what drives our offer — not just receive a number with no explanation. If you want to understand exactly how we calculated your offer, ask us and we'll walk through every line item together.",
    },
  },
  faq: {
    eyebrow: "Common Questions",
    titleLead: "Questions about ",
    titleEm: "cash vs. agent.",
    items: [
      {
        q: "Will I always net less money with a cash offer?",
        a: "Not necessarily. The gross cash offer will typically be below market value — but the net outcome depends on what it costs to get to closing with a traditional buyer. When you factor in agent commissions (5–6%), seller closing costs (~2–3%), repairs required to list, and carrying costs during a 60–90+ day sale, the gap between cash and traditional narrows significantly for many sellers. For properties needing substantial work, the nets can be comparable. We're happy to walk through the math for your specific situation.",
      },
      {
        q: "What's the real advantage of a cash offer if the price is lower?",
        a: "Speed, certainty, and simplicity. A cash sale closes in 7–14 days, requires no repairs or showings, has no financing contingency that can collapse the deal, and involves no commission deducted at closing. For sellers in time-sensitive situations — foreclosure, divorce, estate settlement, or properties with major issues — those factors often outweigh the price difference.",
      },
      {
        q: "Are there situations where you'd recommend I list with an agent instead?",
        a: "Yes. If your home is in great condition, you have 2–3 months of flexibility, and maximizing the sale price is your primary goal — a traditional listing likely serves you better. We're a local company and we're honest about when we're not the right fit. We'd rather tell you that upfront than make an offer that doesn't make sense for your situation.",
      },
      {
        q: "How are agent commissions calculated?",
        a: "Agent commissions are typically 5–6% of the sale price, paid by the seller from the sale proceeds at closing. On a $350,000 home, that's $17,500–$21,000. Commissions are negotiable with your agent and have historically been split between the buyer's agent and seller's agent, though the structure has been evolving. We charge $0 in commissions or fees of any kind.",
      },
      {
        q: "What are typical seller closing costs on a traditional sale?",
        a: "Seller closing costs on a traditional sale typically run 2–3% of the sale price in addition to agent commissions. These include title insurance, transfer taxes, prorated property taxes, attorney or settlement fees, and other transaction costs. We cover all standard closing costs on our purchases — nothing is deducted from your side.",
      },
      {
        q: "Can I get a cash offer and still list with an agent if I don't like the number?",
        a: "Absolutely. Our cash offer is no-obligation — you can get it, compare it to what an agent thinks you'd net on the open market, and decide which path makes more sense. Many sellers find it helpful to have a guaranteed cash number as a baseline before deciding whether the traditional route is worth the time and uncertainty.",
      },
      {
        q: "How quickly can you close compared to a traditional sale?",
        a: "We can close in as little as 7 days from when you accept our offer, with 10–14 days being typical. A traditional sale averages 60–90+ days from listing to closing — and that's if the deal doesn't fall through. About 5% of real estate contracts fall through, usually due to financing issues, which doesn't happen with a cash purchase.",
      },
      {
        q: "What happens to my cash offer if the property appraises below value?",
        a: "Nothing — there's no appraisal in a cash sale. With a traditional financed buyer, if the appraisal comes in below the sale price, the lender won't finance the full amount. This frequently leads to renegotiation or the deal falling through entirely. With us, our offer is based on our own assessment and it's firm — no appraisal, no lender, no last-minute surprises.",
      },
    ],
  },
  cta: {
    eyebrow: "Ready to see your number?",
    titleLead: "Get a no-obligation cash offer — ",
    titleEm: "then decide.",
    body: "See what we'd pay for your St Pete home in its current condition. No pressure to accept, no cost to find out. Compare it against what an agent might net you and make the call that's right for your situation.",
  },
} as const;
