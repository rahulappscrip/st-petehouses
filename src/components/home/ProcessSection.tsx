import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Arr } from "@/components/ui/Arr";
import { PROCESS_STEPS } from "@/lib/constants";

type ProcessStep = {
  num: string;
  title: string;
  body: string;
  metaLabel?: string;
  metaValue?: string;
};

type ProcessSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
  steps?: readonly ProcessStep[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  showStepMeta?: boolean;
  note?: string;
  keySteps?: { title: string; items: string[] };
  docs?: string[];
  disclosureNote?: string;
};

export function ProcessSection({
  eyebrow = "How it works",
  title = (
    <>
      How our <em>offer process</em> works.
    </>
  ),
  lede = "Our process is transparent and flexible. From your first conversation to a fair offer and closing on your timeline, we make selling straightforward—without the uncertainty of traditional home sales.",
  steps = PROCESS_STEPS,
  primaryCta = { label: "Learn More", href: "#offer" },
  secondaryCta = { label: "Learn more about how it works →", href: "/how-it-works" },
  showStepMeta = true,
  note,
  keySteps,
  docs,
  disclosureNote,
}: ProcessSectionProps = {}) {
  const stepsClass =
    steps.length === 3
      ? " steps--3"
      : steps.length === 5
        ? " steps--5"
        : steps.length === 6
          ? " steps--6"
          : "";
  return (
    <section className="section" id="process">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

        <ol
          className={`steps${stepsClass}`}
          style={{ listStyle: "none", padding: 0 }}
          aria-label="Process steps"
        >
          {steps.map((step, i) => (
            <Reveal
              key={step.num}
              as="li"
              d={i > 0 ? (i as 1 | 2 | 3) : undefined}
              className="step"
            >
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {showStepMeta && step.metaLabel && step.metaValue ? (
                <div className="step-meta">
                  <span>{step.metaLabel}</span>
                  <b>{step.metaValue}</b>
                </div>
              ) : null}
            </Reveal>
          ))}
        </ol>

        {note ? (
          <p className="process-note">{note}</p>
        ) : null}

        <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
          <Link href={primaryCta.href} className="btn btn--cta">
            {primaryCta.label}
            <Arr />
          </Link>
          <Link href={secondaryCta.href} className="btn btn--link">
            {secondaryCta.label}
          </Link>
        </div>

        {docs && docs.length > 0 ? (
          <div className="situation-process-docs">
            <h4>What documents you&apos;ll need</h4>
            <div className="situation-process-docs__grid">
              {docs.map((doc) => (
                <span key={doc} className="situation-process-docs__item">
                  {doc}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {disclosureNote ? (
          <p className="situation-process-disclosure">{disclosureNote}</p>
        ) : null}

        {keySteps ? (
          <div className="situation-key-steps situation-key-steps--in-process">
            <h4>{keySteps.title}</h4>
            <ul>
              {keySteps.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
