import { Reveal } from "@/components/ui/Reveal";
import type { SituationEmpathyContent } from "@/lib/situation-types";

type Props = {
  data: SituationEmpathyContent;
  alt?: boolean;
};

export function EmpathyNumbersSection({ data, alt }: Props) {
  return (
    <section className={`section situation-empathy${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <div className="situation-empathy__grid">
          <Reveal className="situation-empathy__story">
            <span className="eyebrow">{data.eyebrow}</span>
            <h2 className="h-2 situation-empathy__title">
              {data.titleLead}
              <em>{data.titleEm}</em>
              {data.titleTail}
            </h2>
            <div className="situation-empathy__prose">
              {data.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="body-standard">
                  {paragraph}
                </p>
              ))}
            </div>
            <blockquote className="situation-empathy__quote">
              <p className="body-standard">{data.quote}</p>
            </blockquote>
            {data.closingParagraph ? (
              <p className="situation-empathy__closing body-standard">{data.closingParagraph}</p>
            ) : null}
          </Reveal>

          <Reveal d={1} className="situation-empathy__numbers">
            <span className="eyebrow">{data.numbersEyebrow}</span>
            <div className="situation-empathy__cards">
              {data.numbers.map((card) => (
                <div key={card.body.slice(0, 40)} className="situation-empathy__card">
                  <b className="situation-empathy__card-value">
                    {card.prefix}
                    {card.value}
                    {card.suffix ? <em>{card.suffix}</em> : null}
                  </b>
                  <p className="situation-empathy__card-body body-standard">{card.body}</p>
                  {card.source ? (
                    <a
                      href={card.source.href}
                      className="situation-empathy__card-source"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card.source.label}
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
