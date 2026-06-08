import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Arr } from "@/components/ui/Arr";
import { CASH_VS_AGENT_PAGE } from "@/lib/cash-vs-agent-content";

function formulaStepCardValue(op: string, label: string) {
  if (!op) {
    return { value: "ARV" };
  }

  const trimmed = op.trim();
  if (trimmed.startsWith("−")) {
    return { prefix: "− ", value: trimmed.slice(1).trim() };
  }

  return { value: trimmed || label };
}

export function CashVsAgentFormulaSection() {
  const { formula } = CASH_VS_AGENT_PAGE;

  return (
    <section className="section situation-empathy section-alt">
      <div className="wrap">
        <div className="situation-empathy__grid">
          <Reveal className="situation-empathy__story">
            <span className="eyebrow">{formula.eyebrow}</span>
            <h2 className="h-2 situation-empathy__title">
              {formula.titleLead}
              <em>{formula.titleEm}</em>
            </h2>
            <p className="lede situation-empathy__lede">{formula.lede}</p>
            <blockquote className="situation-empathy__quote">
              <p className="body-standard">
                <strong>{formula.result.title}</strong> {formula.result.body}
              </p>
            </blockquote>
            <p className="situation-empathy__closing body-standard">
              <strong>{formula.transparencyNote.lead}</strong> {formula.transparencyNote.body}
            </p>
            <div className="situation-hero__actions">
              <Link href="/contact" className="btn btn--cta">
                {formula.result.cta}
                <Arr />
              </Link>
            </div>
          </Reveal>

          <Reveal d={1} className="situation-empathy__numbers">
            <span className="eyebrow">{formula.numbersEyebrow}</span>
            <div className="situation-empathy__cards">
              {formula.steps.map((step) => {
                const cardValue = formulaStepCardValue(step.op, step.label);

                return (
                  <div key={step.label} className="situation-empathy__card">
                    <b className="situation-empathy__card-value">
                      {cardValue.prefix}
                      {cardValue.value}
                    </b>
                    <p className="situation-empathy__card-title body-standard">{step.label}</p>
                    <p className="situation-empathy__card-body body-standard">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
