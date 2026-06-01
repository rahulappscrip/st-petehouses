import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export type CityBenefitItem = {
  icon: string;
  title: string;
  body: string;
};

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  items: readonly CityBenefitItem[];
};

export function CityBenefitsSection({ eyebrow, title, lede, items }: Props) {
  return (
    <section className="section" id="benefits">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-2">{title}</h2>
          <p className="lede">{lede}</p>
        </Reveal>

        <div className="city-sit-grid">
          {items.map((item, i) => (
            <Reveal key={item.title} className="city-sit-card" d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}>
              <span className="city-sit-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
