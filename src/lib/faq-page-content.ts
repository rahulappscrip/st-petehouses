import type { FaqAccordionItem } from "@/components/home/FaqAccordionList";

export type FaqPageCategory = {
  id: string;
  label: string;
  title: string;
  dotColor: string;
  items: readonly FaqAccordionItem[];
};

export type FaqPageInlineCta = {
  afterCategoryId: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export const FAQ_PAGE_HERO = {
  eyebrow: "We Buy St Pete Houses · FAQ",
  title: "Your questions about selling your St Petersburg home for cash.",
  descriptions: [
    "Straight answers to the questions St Petersburg homeowners ask most before deciding to sell. No fluff, no sales pitch — just the information you need to make a clear-headed decision.",
    "Whether you're facing foreclosure, dealing with an inherited property, going through a divorce, or simply ready to move on from a home that needs work — the questions below cover what sellers in every situation actually want to know before they pick up the phone.",
  ],
  descriptionWithPhone: {
    before:
      "We've organized them into eight categories so you can jump straight to what's relevant to you. Use the search bar to find a specific question, or browse by category using the sidebar. If your question isn't answered here, call us directly at ",
    after: " — we respond personally to every inquiry.",
  },
  formEyebrow: "No Repairs. No Fees. Just Cash.",
  formTitleLead: "Get Your ",
  formTitleEm: "Fair Offer",
  formTitleTail: " Today.",
  formIntro: "We buy houses fast, as-is, and stress-free. No repairs or out-of-pocket costs.",
  addressPlaceholder: "123 Main St, St Petersburg, FL",
} as const;

export const FAQ_PAGE_STATS = [
  { value: "BBB ", suffix: "A+", label: "Accredited Business" },
  { value: "5.0", suffix: " ★", label: "Google Reviews (120+)" },
  { value: "500", suffix: "+", label: "Homes Purchased" },
  { value: "Since ", suffix: "2014", label: "Locally Owned" },
] as const;

export const FAQ_PAGE_CATEGORIES: readonly FaqPageCategory[] = [
  {
    id: "process",
    label: "The Process",
    title: "The Process",
    dotColor: "#4FA86B",
    items: [
      {
        q: "How does selling my house for cash work in St Petersburg?",
        a: "The process has four steps. First, you contact us with your property address and basic details — we do the rest of the research. Second, we review recent comparable sales in your neighborhood, assess the condition you describe, and present a written cash offer within 24 hours. Third, you review the offer with no pressure or deadline — accept, decline, or ask questions. Fourth, if you accept, we open escrow with a licensed Pinellas County title company, handle all paperwork, and close on your chosen date. No showings, no repairs, no agent commissions.",
      },
      {
        q: "What information do I need to provide to get started?",
        a: "Just your property address and contact information. That's all we need to begin researching comps and estimating value. We'll ask follow-up questions about condition, occupancy, and your timeline when we call — usually within a few hours. You don't need documents, a deed, or repair estimates ready before reaching out.",
      },
      {
        q: "Do I need to be present for the walkthrough or closing?",
        a: "A walkthrough is often not required — we can make an offer based on the information you share and our knowledge of your neighborhood. If a walkthrough is helpful, it's a single, no-pressure visit. For closing, you or your authorized representative signs documents at the title company. Remote closings via power of attorney can sometimes be arranged for out-of-state sellers.",
      },
      {
        q: "Who handles the paperwork?",
        a: "We do. We prepare the purchase agreement and coordinate with the title company for all closing documents. You review and sign — we handle the administrative work on our end. If your situation involves an estate, bankruptcy, or liens, we work alongside your attorney or trustee to make sure everything is structured correctly.",
      },
      {
        q: "Will I be talking to a real person or a call center?",
        a: "A real person — every time. We are a locally owned company based in St Petersburg. Bennett Andrews is involved in every transaction and the people you speak with are members of our local team who know Pinellas County, the neighborhoods, and the specific situations that bring sellers to us. No offshore call centers, no automated systems.",
      },
      {
        q: "Can I get an offer and then decide not to sell?",
        a: "Absolutely. There is no obligation attached to receiving our offer. Many sellers request an offer months before they're ready to sell — simply to understand what the number looks like compared to a traditional listing. You can decline with no consequence, no follow-up pressure, and no fee of any kind.",
      },
      {
        q: "What areas of St Petersburg and Tampa Bay do you serve?",
        a: "We serve all of St Petersburg — every neighborhood — and the broader Tampa Bay area including Clearwater, Largo, Gulfport, Pinellas Park, Palm Harbor, Dunedin, Tampa, Manatee, Palmetto, Sarasota, Hudson, and New Port Richey. If your property is in Tampa Bay, call us and we'll let you know if it's within our current acquisition area.",
      },
    ],
  },
  {
    id: "cash-offer",
    label: "Our Cash Offer",
    title: "Our Cash Offer",
    dotColor: "#C99454",
    items: [
      {
        q: "How do you calculate your cash offer?",
        a: "Every offer follows a transparent formula: we start with the property's After Repair Value (ARV) — what your home would sell for in fully renovated, market-ready condition, based on real comparable sales in your neighborhood. We then subtract:",
        list: [
          "~10% for our holding and selling costs (property taxes, insurance, commissions when we resell)",
          "~10% profit margin — disclosed upfront, fixed on every deal",
          "Estimated actual repair costs to bring the property to market-ready condition",
        ],
        aAfter: "The result is your cash offer. We'll walk through every line if you ask.",
      },
      {
        q: "Will I always net less money than with a traditional listing?",
        a: "Not necessarily. The gross cash offer is below market value — but net proceeds depend on what it costs to close a traditional sale. When you subtract agent commissions (typically 5–6%), seller closing costs (~2–3%), required repairs, and carrying costs over a 60–90+ day listing period, the gap often narrows significantly. For properties needing substantial work, the net outcomes can be comparable. We're happy to walk through the math for your specific property honestly.",
      },
      {
        q: "Is the offer you make the same as what I receive at closing?",
        a: "Yes. We cover all standard closing costs. We charge no commissions or fees. The number in your written offer is the amount deposited at closing. We do not renegotiate after acceptance based on things we already knew about — the only exception is if a walkthrough reveals something materially different from what was described, which we discuss openly before proceeding.",
      },
      {
        q: "How quickly will I receive a written offer?",
        a: "Within 24 hours of your initial contact in most cases. We respond to every inquiry personally. After a brief call to understand your situation and property, we research comparable sales and present a written offer. We don't issue verbal numbers that change later — the offer is in writing from the start.",
      },
      {
        q: "How long do I have to decide whether to accept?",
        a: "There is no artificial deadline on our offers. Take the time you need — review with family, consult an attorney, compare it to a traditional listing estimate. Market conditions can shift over time, but we never use false urgency to pressure a decision.",
      },
      {
        q: "Can I get an offer even if I'm not sure I want to sell yet?",
        a: "Yes — and we'd encourage it. Having a firm cash number in hand helps you make a more informed decision about whether a traditional listing is worth the time and cost. Many of our sellers called months before they were ready, got a number, compared their options, and came back when the time was right.",
      },
    ],
  },
  {
    id: "timeline",
    label: "Timeline & Closing",
    title: "Timeline & Closing",
    dotColor: "#1F6B73",
    items: [
      {
        q: "How fast can you close on my house in St Petersburg?",
        a: "As little as 7 days from the date you accept our offer — 10–14 days is most typical. The main variables are title search completion and confirming any lien amounts. We follow up directly with all parties to keep the timeline moving. There is no lender, no appraisal, and no financing contingency to slow things down.",
      },
      {
        q: "Can I choose a later closing date if I need more time?",
        a: "Yes — you set the closing date. If you need 30, 45, or 60 days to arrange housing, go through probate, or sort belongings, that is equally fine. We build our schedule around yours, not the other way around.",
      },
      {
        q: "Who handles the closing?",
        a: "Every closing goes through a licensed Pinellas County title company. The title company conducts the title search, handles the lien payoffs, prepares closing documents, and records the deed with the Pinellas County Clerk. This protects both parties and ensures the transaction is legally clean.",
      },
      {
        q: "What happens after I accept the offer?",
        a: "We send a standard as-is purchase contract for your review. Once signed, we open escrow with the title company, which orders a title search, confirms lien amounts, and prepares closing documents. We coordinate everything — you receive a closing date confirmation and show up (or sign remotely) on the day. Cash is deposited directly to you at closing.",
      },
      {
        q: "Can a deal fall through after I accept?",
        a: "Very rarely — and never due to financing. We are a cash buyer, meaning there is no lender, no mortgage approval, and no appraisal contingency. The primary risk of a transaction not closing is a title issue that cannot be resolved — which is why we work with licensed title professionals on every deal. We have never failed to close a transaction where we made a committed offer and the seller accepted.",
      },
    ],
  },
  {
    id: "costs",
    label: "Fees & Costs",
    title: "Fees & Costs",
    dotColor: "#4E6B3C",
    items: [
      {
        q: "Are there any fees or commissions when selling to you?",
        a: "None. We charge no agent commissions, no buyer fees, and no closing costs to you. We cover all standard closing costs on our side. The offer you accept is what you receive. This is different from a traditional listing where agent commissions typically run 5–6% and seller closing costs add another 2–3%.",
      },
      {
        q: "Do I have to pay anything upfront?",
        a: "Never. There is no cost to receive an offer, no deposit required, and nothing owed if you decline. Any legitimate cash buyer operates this way. If anyone ever asks you for money before closing — that is a red flag and you should stop the process immediately.",
      },
      {
        q: "What closing costs do you cover?",
        a: "We cover the standard seller-side closing costs including title search fees, title insurance, deed preparation, recording fees, and transfer taxes. The exact amounts are confirmed by the title company and disclosed on the closing statement before you sign. No surprise deductions at the table.",
      },
      {
        q: "What about my existing mortgage — does that get paid at closing?",
        a: "Yes. If you have an outstanding mortgage, the balance is paid off from the sale proceeds at closing through the title company — exactly as in any real estate transaction. You receive whatever equity remains after the payoff. Having a mortgage does not prevent a cash sale.",
      },
    ],
  },
  {
    id: "property",
    label: "Property Condition",
    title: "Property Condition",
    dotColor: "#D97706",
    items: [
      {
        q: "Do I need to make repairs before selling?",
        a: "No. We buy in any condition — fire damage, flood damage, mold, structural problems, hoarder conditions, code violations, abandoned properties, and everything in between. Nothing needs to change before we close. We factor the as-is condition into our offer calculation from the start.",
      },
      {
        q: "Do I need to clean out the property before closing?",
        a: "No. You can leave anything you don't want to take — furniture, appliances, personal belongings, debris. We handle everything after closing. If there are personal items or heirlooms you want to keep, take them — but there is no obligation to remove anything.",
      },
      {
        q: "What if the house has major structural damage?",
        a: "We still buy it. Severe structural damage — foundation issues, roof failure, fire damage, flood damage — makes a traditional financed sale nearly impossible because most lenders won't approve a mortgage on a structurally compromised property. That's precisely the type of property cash buyers like us specialize in. The damage is reflected in our offer calculation, but it doesn't disqualify the sale.",
      },
      {
        q: "Can you buy a house with tenants in place?",
        a: "Yes. We buy tenant-occupied properties — month-to-month tenancies, fixed-term leases, and even situations where a tenant is uncooperative. We understand Florida landlord-tenant law and structure the transaction accordingly. You are never required to evict a tenant before selling to us.",
      },
      {
        q: "Do you buy vacant or abandoned properties?",
        a: "Yes. Vacant and abandoned properties are among the most common types we purchase. Long vacancy periods often lead to code violations, accumulated fines, and deferred maintenance — all of which we account for in the offer and resolve at or after closing.",
      },
      {
        q: "What if the property has an unpermitted addition or unpermitted work?",
        a: "Unpermitted work is a common issue in St Petersburg's older housing stock and it doesn't prevent a cash sale. Financed buyers often can't purchase properties with significant unpermitted additions because lenders require appraisal compliance. We buy as-is and account for the unpermitted status in our offer calculation. Disclose what you know and we'll factor it in honestly.",
      },
    ],
  },
  {
    id: "situations",
    label: "Tough Situations",
    title: "Tough Situations",
    dotColor: "#DC2626",
    items: [
      {
        q: "Can I sell my house to stop a foreclosure in St Petersburg?",
        a: "Yes — a cash sale can stop a foreclosure as long as it closes before the foreclosure sale date. Because we close in as little as 7 days, a cash sale is often the only option that moves fast enough. The mortgage is paid off at closing, the foreclosure process terminates, and you protect your equity and your credit. If you're in foreclosure, call us immediately — the earlier we can act, the more options you have.",
      },
      {
        q: "Can I sell an inherited house in St Petersburg before or during probate?",
        a: "It depends on where the estate is in the probate process. In Florida, the personal representative (executor) must generally be appointed by the Pinellas County Circuit Court before they have legal authority to sell. Once appointed, a cash sale can proceed relatively quickly. We work directly with personal representatives and estate attorneys to structure the transaction correctly — and we're experienced with the specific documentation Florida probate sales require.",
      },
      {
        q: "Can I sell a house that has code violations or is condemned?",
        a: "Yes. Florida law does not prevent you from selling a property with active code violations or a condemnation notice. Code enforcement liens and accumulated fines are resolved at closing from the sale proceeds through the title company. We research all outstanding violations before presenting our offer so you know your net proceeds before committing to anything.",
      },
      {
        q: "Can I sell during a divorce in Florida?",
        a: "Yes. We regularly buy homes from sellers going through divorce proceedings. If both spouses are on title, both must sign the closing documents — or one must have an authorized power of attorney. We can work with your family law attorney to align the sale timeline with your divorce proceeding's schedule. A cash close is often preferred in divorce situations because it eliminates the uncertainty of a financed buyer falling through.",
      },
      {
        q: "Can I sell a house in bankruptcy?",
        a: "Yes, but the process depends on whether you're in Chapter 7 or Chapter 13. In most cases, the bankruptcy trustee must approve the sale. We work alongside bankruptcy trustees and debtor's attorneys to structure the transaction in compliance with the court's requirements. A cash sale is often the preferred exit because speed and certainty reduce the risk of the deal falling through during a sensitive legal period.",
      },
      {
        q: "Can I sell a house with a reverse mortgage?",
        a: "Yes. HECM reverse mortgages have no prepayment penalty — federal law prohibits it. When you sell, the loan balance (principal + accrued interest + MIP + servicing fees) is paid off from the sale proceeds at closing. Any remaining equity goes to you or your heirs. If the loan balance exceeds the home's value, the FHA's 95% rule limits what's owed — you are never personally liable for the shortfall.",
      },
      {
        q: "Can I sell if there are multiple heirs who don't agree?",
        a: "Generally, all owners on title must agree to a sale — one heir cannot force a sale unilaterally. If heirs cannot agree, the legal remedy in Florida is a partition action through the courts. If heirs do agree, we can proceed once we have all necessary signatures. We've navigated multi-heir estate sales successfully and are comfortable working with estate attorneys to manage the process.",
      },
    ],
  },
  {
    id: "comparison",
    label: "Cash vs. Agent",
    title: "Cash Sale vs. Listing with an Agent",
    dotColor: "#5A6B5E",
    items: [
      {
        q: "When does a cash sale make more sense than listing with an agent?",
        a: "A cash sale tends to make more sense when: you need to close quickly (foreclosure, relocation, estate settlement); the property needs significant repairs that would cost more than the listing price premium they'd generate; the property has issues that prevent financed buyers from getting a mortgage; or the certainty of a guaranteed close matters more than maximizing the gross sale price. If your home is market-ready and you have 60–90 days of flexibility, a traditional listing may net you more.",
      },
      {
        q: "How does a cash offer compare to listing with a real estate agent in St Petersburg?",
        a: "A cash offer is typically below the market listing price — but the net difference is often smaller than sellers expect once you subtract a traditional listing's costs: agent commissions (5–6%), seller closing costs (~2–3%), required repairs, staging, and carrying costs over a 60–90+ day listing period. A cash offer closes in 7–14 days with no deductions. We encourage you to get a traditional listing estimate and compare the nets honestly.",
      },
      {
        q: "What percentage do real estate agents charge in St Petersburg?",
        a: "Agent commissions in St Petersburg are negotiable but typically run 5–6% of the sale price, paid by the seller from the proceeds. On a $350,000 home, that's $17,500–$21,000. Seller closing costs add another ~2.5%, and required repairs before listing can add thousands more. We charge $0 in commissions or fees.",
      },
      {
        q: "Are there situations where you'd tell me to list with an agent instead?",
        a: "Yes. If your home is in excellent, market-ready condition, you have 2–3 months of flexibility, and maximizing the gross sale price is your primary goal — a traditional listing will likely serve you better. We're a local company and we're honest about when we're not the right fit. We'd rather tell you that upfront than make an offer that doesn't make sense for your situation.",
      },
      {
        q: "Can I get a cash offer and still decide to list with an agent?",
        a: "Absolutely. Our cash offer is no-obligation. Getting a written number from us gives you a guaranteed baseline to compare against what an agent thinks you could net on the open market — after commissions, repairs, and time. Many sellers find it clarifies the decision significantly. There is no cost or consequence to declining our offer.",
      },
    ],
  },
  {
    id: "trust",
    label: "Trust & Legitimacy",
    title: "Trust & Legitimacy",
    dotColor: "#1F3D2E",
    items: [
      {
        q: "How do I know We Buy St Pete Houses is a legitimate buyer?",
        a: "We are BBB A+ Accredited, have a 5.0-star Google rating with 120+ verified reviews, and have purchased 500+ homes across Tampa Bay since 2014. Our business address is PO Box 143, St Petersburg, FL 33731, our phone is (727) 477-8998, and our email is SellFast@WeBuyStPeteHouses.com — all publicly verifiable. We close every transaction through a licensed Pinellas County title company. We encourage you to verify all of this before signing anything.",
      },
      {
        q: "What are the red flags of a predatory cash buyer?",
        a: "Watch for: requests for upfront fees or deposits before closing; high-pressure tactics or artificial deadlines; vague or missing proof of funds; unwillingness to close through a licensed title company; last-minute price reductions after you've accepted; offers significantly above market with no explanation; and pressure to skip legal review or attorney consultation. Legitimate cash buyers close through licensed title companies, provide written proof of funds upfront, and never charge fees before closing.",
      },
      {
        q: "Will my personal information be kept confidential?",
        a: "Yes. We never sell your information to third parties. Details about your property and situation stay within our team and are used only to evaluate and present your cash offer. This matters especially in sensitive situations — foreclosure, divorce, medical emergencies, bankruptcy — and we treat it accordingly.",
      },
      {
        q: "Should I consult an attorney before accepting a cash offer?",
        a: "We recommend it — especially for complex situations involving estates, liens, bankruptcy, or divorce. A Florida real estate attorney can review the purchase agreement, advise on disclosure obligations, and protect your interests. We welcome sellers who involve legal counsel and we will work directly with your attorney. A legitimate buyer has nothing to hide from scrutiny.",
      },
    ],
  },
] as const;

export const FAQ_PAGE_INLINE_CTAS: readonly FaqPageInlineCta[] = [
  {
    afterCategoryId: "process",
    title: "Ready to see your number?",
    subtitle: "Written offer within 24 hours. No obligation, no pressure.",
    primaryLabel: "Get My Cash Offer",
    primaryHref: "/contact",
    secondaryLabel: "Call (727) 477-8998",
    secondaryHref: "tel:+17274778998",
  },
  {
    afterCategoryId: "situations",
    title: "In a time-sensitive situation?",
    subtitle: "Call us directly — we respond to every inquiry personally, same day.",
    primaryLabel: "Call (727) 477-8998",
    primaryHref: "tel:+17274778998",
    secondaryLabel: "Submit Online",
    secondaryHref: "/contact",
  },
] as const;

export const FAQ_PAGE_STILL_HAVE_QUESTIONS = {
  eyebrow: "Still Have Questions?",
  titleLead: "We respond to every question ",
  titleEm: "personally.",
  titleTail: "",
  items: [
    {
      label: "",
      title: "Call or Text Us",
      body: "Speak directly with our St Petersburg team. Bennett Andrews and the team answer personally — no call centers, no bots. Available Monday–Friday 8am–7pm, Saturday 9am–5pm.",
      link: {
        label: "(727) 477-8998",
        href: "tel:+17274778998",
      },
    },
    {
      label: "",
      title: "Email Us",
      body: "Send us a question and we'll respond personally within a few hours during business hours — always within 24 hours. Include your property address and we'll have an answer ready.",
      link: {
        label: "SellFast@WeBuyStPeteHouses.com",
        href: "mailto:SellFast@WeBuyStPeteHouses.com",
      },
    },
    {
      label: "",
      title: "Submit Your Property",
      body: "Fill out our short form and receive a written, no-obligation cash offer within 24 hours. No pressure, no commitment — just a real number you can evaluate.",
      link: {
        label: "Get my cash offer",
        href: "/contact",
      },
    },
  ],
} as const;

export function getAllFaqPageItems(): FaqAccordionItem[] {
  return FAQ_PAGE_CATEGORIES.flatMap((category) => [...category.items]);
}
