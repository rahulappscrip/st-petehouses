import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { SituationFullContent } from "@/lib/situation-types";

type Props = {
  data: NonNullable<SituationFullContent["process"]>;
};

export function SituationStepCardsSection({ data }: Props) {
  return (
    <section className="section situation-divorce-process">
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
          className="situation-divorce-process__head"
        />

        <div className="situation-divorce-process__grid">
          {data.steps.map((step, i) => (
            <Reveal
              key={step.num + step.title}
              as="article"
              className="situation-divorce-process__card"
              d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
            >
              <span className="situation-divorce-process__num">Step {step.num}</span>
              <h3 className="h-3">{step.title}</h3>
              <p className="body-standard">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
