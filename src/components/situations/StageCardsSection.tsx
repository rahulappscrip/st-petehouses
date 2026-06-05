import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { SituationStagesContent } from "@/lib/situation-types";

type Props = {
  data: SituationStagesContent;
  alt?: boolean;
};

export function StageCardsSection({ data, alt }: Props) {
  const title = (
    <>
      {data.titleLead}
      {data.titleEm ? <em>{data.titleEm}</em> : null}
      {data.titleTail}
    </>
  );

  return (
    <section className={`section situation-stages${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SectionHead eyebrow={data.eyebrow} title={title} lede={data.lede} />
        <div className="situation-stages__grid">
          {data.items.map((item, i) => (
            <Reveal
              key={item.title}
              className="situation-stages__card"
              d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
            >
              <span className="situation-stages__label">{item.label}</span>
              <h3 className="h-3">{item.title}</h3>
              <p className="body-standard">{item.body}</p>
              {item.link ? (
                <a
                  href={item.link.href}
                  className="situation-stages__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link.label}
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
