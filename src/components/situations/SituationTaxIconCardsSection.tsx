import { SiteImage } from "@/components/ui/SiteImage";
import { imageTitleFrom } from "@/lib/image-accessibility";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Arr } from "@/components/ui/Arr";
import { DIVORCE_TAX_CARD_IMAGES } from "@/lib/constants";
import type { SituationFullContent } from "@/lib/situation-types";

type Props = {
  data: NonNullable<SituationFullContent["tax"]>;
  alt?: boolean;
};

export function SituationTaxIconCardsSection({ data, alt }: Props) {
  return (
    <section className={`section situation-divorce-tax${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SectionHead
          eyebrow={data.eyebrow}
          title={
            <>
              {data.titleLead}
              <em>{data.titleEm}</em>
              {data.titleTail}
            </>
          }
          lede={data.lede}
        />

        <div className="situation-divorce-tax__grid">
          {data.cards.map((card, i) => {
            const photo = DIVORCE_TAX_CARD_IMAGES[card.title];

            return (
              <Reveal key={card.title} className="situation-divorce-tax__card" d={i > 0 ? 1 : undefined}>
                {photo ? (
                  <div className="situation-divorce-tax__media">
                    <SiteImage
                      src={photo.image}
                      alt={photo.imageAlt}
                      title={imageTitleFrom(photo)}
                      width={800}
                      height={500}
                      sizes="(min-width: 760px) 33vw, 100vw"
                      className="situation-divorce-tax__img"
                    />
                  </div>
                ) : null}
                <div className="situation-divorce-tax__body">
                  <h3 className="h-4">{card.title}</h3>
                  <p className="body-standard">{card.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="situation-divorce-tax__disclaimer">
          <div>
            <p className="feature-title">Important disclaimer</p>
            <p className="body-standard">{data.disclaimer}</p>
          </div>
          <Link href="#offer" className="btn btn--cta">
            Get a Cash Offer
            <Arr />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
