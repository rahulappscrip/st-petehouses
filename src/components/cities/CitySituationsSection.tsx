import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { SiteImage } from "@/components/ui/SiteImage";
import { imageTitleFrom } from "@/lib/image-accessibility";

export type CitySituationItem = {
  icon: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imageTitle?: string;
};

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  items: readonly CitySituationItem[];
  alt?: boolean;
  /** Omit outer section wrapper when nested inside another section. */
  embedded?: boolean;
};

export function CitySituationsSection({ eyebrow, title, lede, items, alt = false, embedded = false }: Props) {
  const inner = (
    <>
      <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

      <div className="city-sit-grid">
        {items.map((item, i) => {
          const imageAlt =
            item.imageAlt ?? `${item.title} — cash home sale situation in St. Petersburg`;

          return (
          <Reveal key={item.title} className="city-sit-card" d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}>
            {item.image ? (
              <div className="city-sit-card__media">
                <SiteImage
                  src={item.image}
                  alt={imageAlt}
                  title={imageTitleFrom({ imageAlt, imageTitle: item.imageTitle })}
                  width={800}
                  height={500}
                  sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="city-sit-card__img"
                />
              </div>
            ) : (
              <span className="city-sit-card__icon" aria-hidden="true">
                {item.icon}
              </span>
            )}
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Reveal>
          );
        })}
      </div>
    </>
  );

  if (embedded) {
    return inner;
  }

  return (
    <section className={`section${alt ? " section-alt" : ""}`} id="situations">
      <div className="wrap">{inner}</div>
    </section>
  );
}
