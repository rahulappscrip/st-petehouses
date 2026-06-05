import type { SituationForeclosureLawContent } from "@/lib/situation-types";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  data: SituationForeclosureLawContent;
};

export function ForeclosureLawSection({ data }: Props) {
  return (
    <section className="section situation-foreclosure-law" aria-label="Florida foreclosure law">
      <div className="wrap">
        <div className="situation-foreclosure-law__grid">
          <div className="situation-foreclosure-law__copy">
            <span className="eyebrow">{data.eyebrow}</span>
            <h2 className="h-2 situation-foreclosure-law__title">
              {data.titleLead}
              <em>{data.titleEm}</em>
              {data.titleTail}
            </h2>
            {data.paragraphs.map((p, i) => (
              <p key={i} className="situation-foreclosure-law__p body-standard">
                {p}
              </p>
            ))}

            <div className="situation-foreclosure-law__disclaimer">
              <span className="situation-foreclosure-law__disclaimer-icon" aria-hidden>
                i
              </span>
              <p className="situation-foreclosure-law__disclaimer-text body-standard">{data.disclaimer}</p>
            </div>
          </div>

          <ol className="situation-foreclosure-law__steps">
            {data.steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.num}
                className="situation-foreclosure-law__step"
                d={i > 0 ? 1 : undefined}
              >
                <div className="situation-foreclosure-law__step-inner">
                  <span className="situation-foreclosure-law__step-num" aria-hidden>
                    {step.num}
                  </span>
                  <div className="situation-foreclosure-law__step-copy">
                    <h3 className="situation-foreclosure-law__step-title feature-title">{step.title}</h3>
                    <p className="situation-foreclosure-law__step-body body-standard">{step.body}</p>
                    <a
                      className="situation-foreclosure-law__step-link"
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {step.link.label}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

