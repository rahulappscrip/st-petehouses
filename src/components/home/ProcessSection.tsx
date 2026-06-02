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
  primaryCta = { label: "Start step 1", href: "#offer" },
  secondaryCta = { label: "Learn more about how it works →", href: "/how-it-works" },
  showStepMeta = true,
}: ProcessSectionProps = {}) {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

        <ol
          className={`steps${steps.length === 3 ? " steps--3" : ""}`}
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

        <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
          <Link href={primaryCta.href} className="btn btn--cta">
            {primaryCta.label}
            <Arr />
          </Link>
          <Link href={secondaryCta.href} className="btn btn--link">
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
