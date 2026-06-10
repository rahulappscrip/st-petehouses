import Link from "next/link";
import { Arr } from "@/components/ui/Arr";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { SituationFullContent, SituationTitleParts } from "@/lib/situation-types";

type Props = {
  data:
    | (SituationTitleParts & {
        steps: { num: string; title: string; body: string }[];
        equityNote?: { title: string; body: string };
      })
    | NonNullable<SituationFullContent["process"]>
    | NonNullable<SituationFullContent["payoff"]>;
  /** Prefix before step number — default "Step " for divorce; use "" for plain "01". */
  stepLabel?: string;
};

export function SituationStepCardsSection({ data, stepLabel = "Step " }: Props) {
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
              <span className="situation-divorce-process__num">
                {stepLabel}
                {step.num}
              </span>
              <h3 className="h-3">{step.title}</h3>
              <p className="body-standard">{step.body}</p>
            </Reveal>
          ))}
        </div>

        {"equityNote" in data && data.equityNote ? (
          <Reveal className="situation-payoff__equity">
            <div>
              <p className="situation-payoff__equity-title">{data.equityNote.title}</p>
              <p>{data.equityNote.body}</p>
            </div>
            <Link href="#offer" className="btn btn--cta">
              Talk to our team
              <Arr />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
