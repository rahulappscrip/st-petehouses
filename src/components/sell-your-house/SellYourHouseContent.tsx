import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AreasSection } from "@/components/home/AreasSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import {
  SELL_HOUSE_FAQ,
  SELL_HOUSE_LEGAL_BLOCKS,
  SELL_HOUSE_OFFER_BLOCKS,
  SELL_HOUSE_PROCESS_STEPS,
  SELL_HOUSE_SITUATIONS,
} from "@/lib/constants";

const SITUATION_ICONS = [
  <g key="1"><path d="M3 21V8l9-5 9 5v13" /><path d="M9 21V12h6v9" /></g>,
  <g key="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 9h16M9 4v16" /></g>,
  <path key="3" d="M3 12h18M12 3v18" />,
  <g key="4"><circle cx="9" cy="8" r="3.5" /><path d="M2 21a7 7 0 0 1 14 0" /></g>,
  <path key="5" d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />,
  <g key="6"><path d="M3 12h13l-4-4M16 12l-4 4" /><path d="M20 5v14" /></g>,
];

function CalloutGrid({ blocks }: { blocks: readonly { title: string; body: string }[] }) {
  return (
    <div className="legal">
      {blocks.map((block) => (
        <div key={block.title}>
          <h3>{block.title}</h3>
          <p>{block.body}</p>
        </div>
      ))}
    </div>
  );
}

function InfoSection({
  eyebrow,
  title,
  lede,
  blocks,
  alt = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  blocks: readonly { title: string; body: string }[];
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-2">{title}</h2>
          <p className="lede">{lede}</p>
        </Reveal>
        <Reveal>
          <CalloutGrid blocks={blocks} />
        </Reveal>
      </div>
    </section>
  );
}

export function SellYourHouseContent() {
  return (
    <>
      <HeroSection
        content={{
          title: (
            <>
              Sell Your House Fast in <em>St.&nbsp;Petersburg</em> with a Cash Offer
            </>
          ),
          subheadline: "Close in as little as 7 days. As-is. No agents, no fees, no repairs.",
          formEyebrow: "Get your fair cash offer today",
          formTitle: (
            <>
              Sell your house <em>fast</em> in any condition.
            </>
          ),
          formIntro: "We buy houses fast, as-is, and stress-free. No repairs or out-of-pocket costs.",
        }}
      />

      <ProcessSection
        eyebrow="Cash buyer process"
        title={
          <>
            How the <em>cash buyer process</em> works.
          </>
        }
        lede="A no-obligation cash offer quickly — often within 24 hours. No waiting on banks, no financing contingencies, no surprises at closing. We coordinate title, due diligence, and a walkthrough at your convenience. You pick the closing date."
        steps={SELL_HOUSE_PROCESS_STEPS}
        showStepMeta={false}
        primaryCta={{ label: "Start step 1", href: "#offer" }}
        secondaryCta={{ label: "Full process walkthrough →", href: "/how-it-works" }}
      />

      <section className="section section-alt">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Who we help</span>
            <h2 className="h-2">
              <em>Seller situations</em> we handle.
            </h2>
            <p className="lede">
              Cash works well for sellers who value speed, simplicity, and certainty over maximizing
              every dollar through a traditional listing. Common scenarios we close every month:
            </p>
          </Reveal>

          <div className="sit-grid">
            {SELL_HOUSE_SITUATIONS.map((item, i) => (
              <Reveal
                key={item.href}
                as={Link}
                href={item.href}
                className="sit"
                d={i > 0 ? (i as 1 | 2 | 3) : undefined}
              >
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    {SITUATION_ICONS[i]}
                  </svg>
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AreasSection
        eyebrow="Where we buy"
        title={
          <>
            Areas we serve in and around <em>St.&nbsp;Petersburg</em>.
          </>
        }
        lede="Hyper-local coverage throughout St. Petersburg and Pinellas County — from Old Northeast and Historic Kenwood to Shore Acres, Pasadena, Gulfport, and the wider Tampa Bay region."
        listHeading="Service area"
      />

      <TestimonialsSection className="section-alt" />

      <InfoSection
        eyebrow="How we price offers"
        title={
          <>
            How we structure offers to <em>maximize value</em> for sellers.
          </>
        }
        lede="Our negotiation approach focuses on favorable terms and clear timelines. We structure cash offers to optimize price while minimizing delays and contingencies that can derail a sale. When presenting an offer, we account for property condition, current St. Petersburg market conditions, and your specific timeline. You know exactly what you'll receive and when you'll close — and we build flexibility in if your situation changes."
        blocks={SELL_HOUSE_OFFER_BLOCKS}
      />

      <InfoSection
        eyebrow="Florida legal context"
        title={
          <>
            <em>Legal considerations</em> when selling for cash.
          </>
        }
        lede={`In Florida, "as-is" means the property is sold in its present condition and the seller isn't obligated to make repairs. Buyers retain inspection rights, but seller disclosure requirements still apply. We work with experienced title companies to resolve title defects, liens, and ownership-chain issues before closing — without burdening you.`}
        blocks={SELL_HOUSE_LEGAL_BLOCKS}
        alt
      />

      <FaqSection
        items={SELL_HOUSE_FAQ}
        title={
          <>
            Frequently asked <em>questions</em>.
          </>
        }
        showFullLink={false}
      />

      <FinalCtaSection
        title={
          <>
            Sell your house, the <em>simple way</em>.
          </>
        }
        description="Tell us about your St. Petersburg property — address, condition, timeline. We'll review and present a fair cash offer. No pressure, no obligation, no fees."
        offerHref="#offer"
      />
    </>
  );
}
