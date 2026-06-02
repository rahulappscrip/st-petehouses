import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export type CitySituationItem = {
  icon: string;
  title: string;
  body: string;
};

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  items: readonly CitySituationItem[];
  alt?: boolean;
};

export function CitySituationsSection({ eyebrow, title, lede, items, alt = false }: Props) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`} id="situations">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

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
