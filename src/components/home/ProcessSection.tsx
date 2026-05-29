import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Arr } from "@/components/ui/Arr";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="h-2">
            How our <em>cash offer process</em> works.
          </h2>
          <p className="lede">
            Our process is transparent and speed-focused. From inquiry to cash offer to closing on
            your timeline, we make selling straightforward — no waiting for mortgage approvals,
            no buyer financing falling through.
          </p>
        </Reveal>

        <ol className="steps" style={{ listStyle: "none", padding: 0 }} aria-label="Four step process">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal
              key={step.num}
              as="li"
              d={i > 0 ? (i as 1 | 2 | 3) : undefined}
              className="step"
            >
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <div className="step-meta">
                <span>{step.metaLabel}</span>
                <b>{step.metaValue}</b>
              </div>
            </Reveal>
          ))}
        </ol>

        <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
          <Link href="#offer" className="btn btn--cta">
            Start step 1
            <Arr />
          </Link>
          <Link href="/how-it-works" className="btn btn--link">
            Learn more about how it works →
          </Link>
        </div>
      </div>
    </section>
  );
}
