import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleToc } from "@/components/how-it-works/ArticleToc";
import { TimelineCalculator } from "@/components/how-it-works/TimelineCalculator";
import { FaqAccordionList } from "@/components/home/FaqAccordionList";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import {
  ASSETS,
  HOW_IT_WORKS_BENEFITS,
  HOW_IT_WORKS_FAQ,
  HOW_IT_WORKS_SITUATIONS,
  HOW_IT_WORKS_STEPS,
} from "@/lib/constants";

const BENEFIT_ICONS = [
  <g key="1"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g>,
  <path key="2" d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />,
  <path key="3" d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  <path key="4" d="M4 12l5 5L20 6" />,
  <g key="5"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  <g key="6"><circle cx="12" cy="12" r="9" /><path d="M9 9l6 6M15 9l-6 6" /></g>,
];

const SITUATION_ICONS = [
  <g key="1"><path d="M3 21V8l9-5 9 5v13" /><path d="M9 21V12h6v9" /></g>,
  <path key="2" d="M3 12h18M12 3v18" />,
  <g key="3"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 9h16M9 4v16" /></g>,
  <g key="4"><circle cx="9" cy="8" r="3.5" /><path d="M2 21a7 7 0 0 1 14 0" /></g>,
  <g key="5"><path d="M3 12h13l-4-4M16 12l-4 4" /><path d="M20 5v14" /></g>,
  <path key="6" d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
];

function IconCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: ReactNode;
}) {
  return (
    <div className="icon-card">
      <span className="ic">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          {icon}
        </svg>
      </span>
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
}

function ImagePlaceholder({ tone, label }: { tone?: string; label: string }) {
  return (
    <div
      className={`ph-inline${tone ? ` tone-${tone}` : ""}`}
      data-label={label}
      aria-hidden
    />
  );
}

export function HowItWorksContent() {
  return (
    <>
      <section className="article-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M9 6l6 6-6 6" />
            </svg>
            <span>How It Works</span>
          </nav>
          <Reveal>
            <span className="eyebrow">Guide · Process</span>
            <h1>
              How the <em>cash home buying</em> process works.
            </h1>
            <p className="lede">
              A clear, step-by-step explanation of how we buy houses for cash in St Petersburg and
              across Tampa Bay — what it means, how long it takes, what it costs, and who it&apos;s
              right for. From a real local buyer, not a sales pitch.
            </p>
            <div className="byline">
              <Image
                className="av"
                src={ASSETS.johnPortrait}
                alt="John Gardepe"
                width={40}
                height={40}
              />
              <span className="author">
                <b>By John Gardepe</b>
                <span>Owner · We Buy St Pete Houses</span>
              </span>
              <span className="dot" aria-hidden />
              <span>Updated May 26, 2026</span>
              <span className="dot" aria-hidden />
              <span>9 min read</span>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="wrap">
        <div className="article-wrap">
          <div className="article-body">
            <section id="what-is-a-cash-buyer">
              <h2>What is a cash home buyer?</h2>
              <p className="intro">
                A cash home buyer is a real estate investor who purchases property with cash and
                typically closes quickly without requiring repairs. In my experience, cash buyers
                like us focus on fast, as-is purchases to streamline the process for sellers.
              </p>
              <p>Cash buyers differ from traditional buyers in several key ways:</p>
              <ul>
                <li>
                  <strong>No mortgage contingency.</strong> Traditional buyers need loan approval;
                  cash buyers have funds ready.
                </li>
                <li>
                  <strong>Faster closing.</strong> Without lender delays, we can close in as little
                  as 7 days.
                </li>
                <li>
                  <strong>As-is purchase.</strong> You don&apos;t need to make repairs or stage the
                  home.
                </li>
                <li>
                  <strong>Fewer contingencies.</strong> No appraisal requirements or financing
                  conditions.
                </li>
              </ul>
              <p>
                Typically any homeowner with a property they want to sell qualifies for a cash
                offer. The property condition doesn&apos;t matter — we evaluate based on location,
                structure, and potential.
              </p>

              <div className="compare-callout">
                <div className="us">
                  <span className="lab">Cash buyer (us)</span>
                  <h4>Speed &amp; certainty</h4>
                  <ul>
                    <li>Close in as little as 7 days</li>
                    <li>No repairs, no staging</li>
                    <li>$0 commissions · we cover closing costs</li>
                    <li>No financing fall-through risk</li>
                  </ul>
                </div>
                <div>
                  <span className="lab">Traditional buyer</span>
                  <h4>Retail price · longer timeline</h4>
                  <ul>
                    <li>30–60 days+ to close (lender-dependent)</li>
                    <li>Repairs often required to attract buyers</li>
                    <li>5–6% agent commissions · 2–3% closing costs</li>
                    <li>Appraisal &amp; financing contingencies</li>
                  </ul>
                </div>
              </div>
              <figure className="hiw-inline-image">
                <Image
                  src="/assets/images/HIW-Image-1.webp"
                  alt="Cash buyer explainer and comparison"
                  fill
                  sizes="(max-width: 980px) 100vw, 900px"
                  className="hiw-inline-image__img"
                />
              </figure>
            </section>

            <section id="how-it-works">
              <h2>How does the cash home buying process work?</h2>
              <p>
                The cash home buying process is a straightforward four-step flow from inquiry to
                closing. We often close deals in as little as 7 days, providing a quick solution for
                sellers.
              </p>

              <div className="process-steps">
                {HOW_IT_WORKS_STEPS.map((step) => (
                  <div key={step.num} className="pstep">
                    <span className="n">{step.num}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                ))}
              </div>

              <p>
                No repairs are required at any stage. You won&apos;t pay real estate commissions or
                listing fees — we cover closing costs. The entire process moves at your pace, with
                no pressure and no surprises.
              </p>
              <figure className="hiw-inline-image">
                <Image
                  src="/assets/images/HIW-Image-2.webp"
                  alt="Process flow diagram for cash home buying"
                  fill
                  sizes="(max-width: 980px) 100vw, 900px"
                  className="hiw-inline-image__img"
                />
              </figure>
            </section>

            <section id="benefits">
              <h2>Benefits of selling to a cash home buyer.</h2>
              <p>
                Selling to a cash buyer offers distinct advantages — especially when you need to sell
                quickly or don&apos;t have the time or money to invest in repairs and traditional
                marketing.
              </p>
              <div className="icon-grid">
                {HOW_IT_WORKS_BENEFITS.map((item, i) => (
                  <IconCard key={item.title} title={item.title} body={item.body} icon={BENEFIT_ICONS[i]} />
                ))}
              </div>
            </section>

            <section id="who-should-consider">
              <h2>Who should consider selling to a cash buyer?</h2>
              <p>
                Cash home buyers are ideal for homeowners facing specific situations where speed,
                certainty, and simplicity matter most. I&apos;ve worked with many homeowners facing
                foreclosure, and a cash sale can be a swift solution.
              </p>
              <p>Consider a cash buyer if you&apos;re dealing with:</p>
              <div className="icon-grid">
                {HOW_IT_WORKS_SITUATIONS.map((item, i) => (
                  <IconCard key={item.title} title={item.title} body={item.body} icon={SITUATION_ICONS[i]} />
                ))}
              </div>
              <figure className="hiw-inline-image">
                <Image
                  src="/assets/images/HIW-Image-3.webp"
                  alt="Seller situations where cash buying helps"
                  fill
                  sizes="(max-width: 980px) 100vw, 900px"
                  className="hiw-inline-image__img"
                />
              </figure>
            </section>

            <section id="step-by-step">
              <h2>Step-by-step: selling your house for cash.</h2>
              <p>Let me walk you through the complete process in detail.</p>

              <h3>Step 1: Submit your inquiry</h3>
              <p>
                Reach out by phone, online form, or email with your property address and a brief
                description of your situation. This takes just a few minutes.
              </p>

              <h3>Step 2: Receive and review the offer</h3>
              <p>
                We evaluate your property and typically provide a written cash offer within 24 hours.
                Review it at your own pace with no pressure.
              </p>

              <h3>Step 3: Acceptance and escrow</h3>
              <p>
                Once you accept, we open escrow and handle title work, inspections (for our due
                diligence only — not your responsibility), and paperwork.
              </p>

              <h3>Step 4: Closing and possession</h3>
              <p>
                We close on a date that works for you. After signing, you receive your proceeds and
                hand over the keys. The entire process from inquiry to close can happen in as little
                as 7 days.
              </p>

              <p>
                <strong>Common timing delays and how to avoid them.</strong> Title issues or unclear
                ownership can slow closing. Having your deed and any mortgage payoff information
                ready helps us move quickly. We work with title companies to resolve most issues
                without burdening you.
              </p>

              <TimelineCalculator />
              <figure className="hiw-inline-image">
                <Image
                  src="/assets/images/How-it-works-situation-sec.webp"
                  alt="Step-by-step visual for cash home sale process"
                  fill
                  sizes="(max-width: 980px) 100vw, 900px"
                  className="hiw-inline-image__img"
                />
              </figure>
            </section>

            <section id="are-cash-buyers-legit">
              <h2>Are cash home buyers legit?</h2>
              <p>
                Many homeowners wonder if cash buyers are legitimate or if the process is too good
                to be true. Legitimate cash buyers are investors who close with cash — we&apos;re
                real businesses operating transparently.
              </p>
              <p>
                Common myths include the belief that all cash offers are lowball scams or that buyers
                will back out at the last minute. In reality, reputable cash buyers provide fair
                offers based on property condition and market value, and we close with certainty
                because we don&apos;t rely on financing.
              </p>
              <p>
                Cash offers compare favorably to traditional offers in terms of speed and certainty.
                A traditional buyer may offer a higher price, but they often require repairs,
                inspections, appraisals, and financing — any of which can delay or cancel the sale. A
                cash offer is firm and fast.
              </p>
              <p>
                <strong>How to verify a cash buyer&apos;s credibility:</strong>
              </p>
              <ul>
                <li>Check Google and BBB reviews from verified local sellers</li>
                <li>Ask for proof of funds (a recent bank statement or letter)</li>
                <li>Request references from sellers in your area</li>
                <li>Confirm the buyer is a registered Florida business</li>
              </ul>
              <p>
                We operate openly in St. Petersburg and Tampa Bay with a public track record of
                successful closings.
              </p>
              <figure className="hiw-inline-image">
                <Image
                  src="/assets/images/HOW-IT-WORKS-Cash-Homebuyers.webp"
                  alt="Trust signals for verifying legitimate cash home buyers"
                  fill
                  sizes="(max-width: 980px) 100vw, 900px"
                  className="hiw-inline-image__img"
                />
              </figure>
            </section>

            <section id="when-to-consider">
              <h2>When to consider a cash buyer.</h2>
              <p>
                Consider a cash buyer when you need speed, certainty, and a stress-free closing. If
                you want a fast, simple sale with no repairs or commissions, a cash buyer is worth
                considering.
              </p>
              <p>
                <strong>Ideal scenarios:</strong>
              </p>
              <ul>
                <li>You&apos;re facing foreclosure and need to act quickly</li>
                <li>You&apos;re relocating and can&apos;t wait for a traditional sale</li>
                <li>
                  You&apos;ve inherited a property and want to settle the estate without hassle
                </li>
                <li>
                  Your property needs significant repairs you can&apos;t afford or don&apos;t want to
                  manage
                </li>
                <li>You want to avoid agent fees and showings</li>
              </ul>
              <p>
                If any of these sound familiar, we&apos;re ready to give you a fair, hassle-free,
                as-is offer.
              </p>
            </section>
          </div>

          <ArticleToc />
        </div>
      </div>

      <section className="section hiw-faq" id="faq">
        <div className="wrap" style={{ maxWidth: 920 }}>
          <Reveal className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2 className="h-2">
              Frequently asked questions about <em>cash offers</em>.
            </h2>
          </Reveal>
          <FaqAccordionList items={HOW_IT_WORKS_FAQ} />
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
