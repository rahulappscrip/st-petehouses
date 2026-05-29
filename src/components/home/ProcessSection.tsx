import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
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
      How our <em>cash offer process</em> works.
    </>
  ),
  lede = "Our process is transparent and flexible. From inquiry to cash offer to closing on your timeline, we make selling straightforward — no waiting for mortgage approvals, no buyer financing falling through.",
  steps = PROCESS_STEPS,
  primaryCta = { label: "Start step 1", href: "#offer" },
  secondaryCta = { label: "Learn more about how it works →", href: "/how-it-works" },
  showStepMeta = true,
}: ProcessSectionProps = {}) {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-2">{title}</h2>
          <p className="lede">{lede}</p>
        </Reveal>

        <ol className="steps" style={{ listStyle: "none", padding: 0 }} aria-label="Four step process">
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
