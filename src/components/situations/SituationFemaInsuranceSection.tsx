import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { SituationFemaInsuranceContent } from "@/lib/situation-types";

type Props = {
  data: SituationFemaInsuranceContent;
};

export function SituationFemaInsuranceSection({ data }: Props) {
  return (
    <section className="section situation-fema-insurance">
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
        <div className="situation-fema-insurance__grid">
          {data.cards.map((card, i) => (
            <Reveal key={card.title} className="situation-fema-insurance-card" d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}>
              <h3 className="h-4">{card.title}</h3>
              {card.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="body-standard">
                  {p}
                </p>
              ))}
              {card.link ? (
                <a
                  href={card.link.href}
                  className="situation-fema-insurance-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card.link.label}
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>
        {data.disclaimer ? (
          <div className="situation-fema-insurance__disclaimer">
            <p className="body-standard">{data.disclaimer}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
