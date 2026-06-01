import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SELLER_SITUATIONS } from "@/lib/constants";

type SellerSituationsSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
};

export function SellerSituationsSection({
  eyebrow = "Who we help",
  title = (
    <>
      <em>Seller situations</em> we handle.
    </>
  ),
  lede = "Cash works well for sellers who value speed, simplicity, and certainty over maximizing every dollar through a traditional listing. Common scenarios we close every month:",
}: SellerSituationsSectionProps = {}) {
  return (
    <section className="section section-alt seller-situations" id="situations">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-2">{title}</h2>
          <p className="lede">{lede}</p>
        </Reveal>

        <div className="sit-cards">
          {SELLER_SITUATIONS.map((item, i) => (
            <Reveal
              key={item.href + item.title}
              as={Link}
              href={item.href}
              className="sit-card"
              d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
            >
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
