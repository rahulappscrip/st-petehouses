import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SellerSituationsSection } from "@/components/home/SellerSituationsSection";
import { AreasSection } from "@/components/home/AreasSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import {
  SELL_HOUSE_FAQ,
  SELL_HOUSE_LEGAL_BLOCKS,
  SELL_HOUSE_OFFER_BLOCKS,
  SELL_HOUSE_PROCESS_STEPS,
} from "@/lib/constants";

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
        primaryCta={{ label: "Learn More", href: "#offer" }}
        secondaryCta={{ label: "Full process walkthrough →", href: "/how-it-works" }}
      />

      <SellerSituationsSection />

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

      <ReviewsSection className="section-alt" />

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
