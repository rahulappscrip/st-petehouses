import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { SituationFloodLawContent } from "@/lib/situation-types";

type Props = {
  data: SituationFloodLawContent;
  alt?: boolean;
};

export function SituationFloodLawSection({ data, alt }: Props) {
  return (
    <section className={`section situation-flood-law${alt ? " section-alt" : ""}`}>
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
        {data.legalNote ? <p className="situation-flood-law__note body-standard">{data.legalNote}</p> : null}
        <div className="situation-flood-law__grid">
          {data.items.map((item, i) => (
            <Reveal key={item.title} className="situation-flood-law-card" d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}>
              <h3 className="h-4">{item.title}</h3>
              <p className="body-standard">{item.body}</p>
              {item.link ? (
                <a
                  href={item.link.href}
                  className="situation-flood-law-card__link"
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
