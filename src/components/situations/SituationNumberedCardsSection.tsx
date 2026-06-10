import { SiteImage } from "@/components/ui/SiteImage";
import { imageTitleFrom } from "@/lib/image-accessibility";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { SituationFullContent } from "@/lib/situation-types";

type Props = {
  data: NonNullable<SituationFullContent["cards"]>;
  alt?: boolean;
  imageMap?: Record<string, { image: string; imageAlt: string; imageTitle?: string }>;
};

export function SituationNumberedCardsSection({ data, alt, imageMap }: Props) {
  return (
    <section className={`section situation-numbered-cards${alt ? " section-alt" : ""}`}>
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

        <div className="situation-numbered-cards__grid">
          {data.items.map((item, i) => {
            const photo = imageMap?.[item.title];
            const featured = item.icon === "→";

            return (
              <Reveal
                key={item.title}
                as="article"
                className={`situation-numbered-cards__card${photo ? " situation-numbered-cards__card--photo" : ""}${featured ? " situation-numbered-cards__card--featured" : ""}`}
                d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
              >
                {photo ? (
                  <div className="situation-numbered-cards__media">
                    <SiteImage
                      src={photo.image}
                      alt={photo.imageAlt}
                      title={imageTitleFrom(photo)}
                      width={800}
                      height={500}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="situation-numbered-cards__img"
                    />
                  </div>
                ) : null}
                <div className={photo ? "situation-numbered-cards__body" : undefined}>
                  <h3 className="h-4">{item.title}</h3>
                  <p className="body-standard">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
