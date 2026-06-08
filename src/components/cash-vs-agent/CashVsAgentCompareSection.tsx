import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { CashVsAgentCompareRow } from "@/lib/cash-vs-agent-content";
import { CASH_VS_AGENT_PAGE } from "@/lib/cash-vs-agent-content";

type CompareDataRow = Extract<CashVsAgentCompareRow, { type: "row" }>;

type CompareGroup = {
  title: string;
  rows: CompareDataRow[];
};

function groupCompareRows(rows: readonly CashVsAgentCompareRow[]): CompareGroup[] {
  const groups: CompareGroup[] = [];
  let current: CompareGroup | null = null;

  for (const row of rows) {
    if (row.type === "divider") {
      current = { title: row.label, rows: [] };
      groups.push(current);
    } else if (current) {
      current.rows.push(row);
    }
  }

  return groups;
}

function CompareTable({ group, index }: { group: CompareGroup; index: number }) {
  return (
    <Reveal className="cva-compare-group" d={index > 0 ? ((index % 3) as 1 | 2 | 3) : undefined}>
      <h3 className="h-4 cva-compare-group__title">{group.title}</h3>
      <div className="compare">
        <div className="compare-scroll">
          <div className="compare-grid" role="table" aria-label={`${group.title} comparison`}>
            <div className="col-h" role="columnheader">
              Factor
            </div>
            <div className="col-h us" role="columnheader">
              Cash Sale
            </div>
            <div className="col-h" role="columnheader">
              Listing with Agent
            </div>
            {group.rows.map((row) => (
              <div key={row.label} className="compare-grid__row" role="row">
                <div className="row-h" role="rowheader">
                  {row.label}
                  {row.note ? <span className="cva-compare-row-note">{row.note}</span> : null}
                </div>
                <div className="us-cell" role="cell">
                  {row.cash}
                </div>
                <div className="other-cell" role="cell">
                  {row.agent}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function CashVsAgentCompareSection() {
  const { compare } = CASH_VS_AGENT_PAGE;
  const groups = groupCompareRows(compare.rows);

  return (
    <section className="section section-alt">
      <div className="wrap">
        <SectionHead
          eyebrow={compare.eyebrow}
          title={
            <>
              {compare.titleLead}
              <em>{compare.titleEm}</em>
            </>
          }
        />

        <div className="cva-compare-groups">
          {groups.map((group, index) => (
            <CompareTable key={group.title} group={group} index={index} />
          ))}
        </div>

        <p className="reviews-note">{compare.sourceNote}</p>
      </div>
    </section>
  );
}
