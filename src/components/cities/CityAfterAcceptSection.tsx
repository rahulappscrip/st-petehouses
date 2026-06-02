import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export type CityAfterAcceptStep = {
  title: string;
  body: string;
};

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  steps: readonly CityAfterAcceptStep[];
  alt?: boolean;
};

export function CityAfterAcceptSection({ eyebrow, title, lede, steps, alt = false }: Props) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

        <ol className="steps steps--3" style={{ listStyle: "none", padding: 0 }} aria-label="Steps after accepting">
          {steps.map((step, i) => (
            <Reveal key={step.title} as="li" className="step" d={i > 0 ? 1 : undefined}>
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
