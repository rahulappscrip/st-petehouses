import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SELLER_SITUATIONS } from "@/lib/constants";

export type SellerSituationCard = {
  title: string;
  body: string;
  href: string;
  image: string;
  imageAlt: string;
};

type SellerSituationsSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
  items?: readonly SellerSituationCard[];
  className?: string;
  sectionId?: string;
  /** When false, cards are not links (e.g. situation pages keep their own copy). */
  linkable?: boolean;
};

export function SellerSituationsSection({
  eyebrow = "Who we help",
  title = (
    <>
      <em>Seller situations</em> we handle.
    </>
  ),
  lede = "Cash works well for sellers who value speed, simplicity, and certainty over maximizing every dollar through a traditional listing. Common scenarios we close every month:",
  items = SELLER_SITUATIONS,
  className = "",
  sectionId = "situations",
  linkable = true,
}: SellerSituationsSectionProps = {}) {
  return (
    <section
      className={`section section-alt seller-situations${className ? ` ${className}` : ""}`}
      id={sectionId}
    >
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-2">{title}</h2>
          <p className="lede">{lede}</p>
        </Reveal>

        <div className="sit-cards">
          {items.map((item, i) => {
            const card = (
              <>
                <div className="sit-card__media">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={800}
                    height={500}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="sit-card__img"
                  />
                </div>
                <div className="sit-card__body">
                  <h3 className="sit-card__title">{item.title}</h3>
                  <p className="sit-card__text">{item.body}</p>
                </div>
              </>
            );

            return linkable ? (
              <Reveal
                key={item.href + item.title}
                as={Link}
                href={item.href}
                className="sit-card"
                d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
              >
                {card}
              </Reveal>
            ) : (
              <Reveal key={item.title} className="sit-card sit-card--static" d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}>
                {card}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
