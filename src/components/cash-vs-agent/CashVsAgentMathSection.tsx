import { Reveal } from "@/components/ui/Reveal";
import type { CashVsAgentMathRow } from "@/lib/cash-vs-agent-content";
import { CASH_VS_AGENT_PAGE } from "@/lib/cash-vs-agent-content";

function MathCard({
  variant,
  title,
  subtitle,
  rows,
}: {
  variant: "cash" | "agent";
  title: string;
  subtitle: string;
  rows: readonly CashVsAgentMathRow[];
}) {
  return (
    <div className={`cva-math-card cva-math-card--${variant}`}>
      <div className={`cva-math-card__head cva-math-card__head--${variant}`}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      {rows.map((row, index) => (
        <div
          key={row.label}
          className={`cva-math-card__row${index === rows.length - 1 ? " cva-math-card__row--total" : ""}`}
        >
          <span className="cva-math-card__row-label">{row.label}</span>
          <span className={`cva-math-card__row-val${row.tone ? ` cva-math-card__row-val--${row.tone}` : ""}`}>
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export function CashVsAgentMathSection() {
  const { math } = CASH_VS_AGENT_PAGE;

  return (
    <section className="section cva-math-section">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{math.eyebrow}</span>
          <h2 className="h-2">
            {math.titleLead}
            <em>{math.titleEm}</em>
          </h2>
          <p className="lede">{math.lede}</p>
        </Reveal>

        <div className="cva-math__grid">
          <Reveal>
            <MathCard
              variant="cash"
              title={math.cash.title}
              subtitle={math.cash.subtitle}
              rows={math.cash.rows}
            />
          </Reveal>
          <Reveal d={1}>
            <MathCard
              variant="agent"
              title={math.agent.title}
              subtitle={math.agent.subtitle}
              rows={math.agent.rows}
            />
          </Reveal>
        </div>

        <Reveal className="cva-math__note" d={1}>
          <strong>{math.note.lead}</strong> {math.note.body}
        </Reveal>
      </div>
    </section>
  );
}
