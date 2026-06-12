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
          <table className="compare-grid" aria-label={`${group.title} comparison`}>
            <colgroup>
              <col className="col-factor" />
              <col className="col-us" />
              <col className="col-other" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className="col-h">
                  Factor
                </th>
                <th scope="col" className="col-h us">
                  Cash Sale
                </th>
                <th scope="col" className="col-h">
                  Listing with Agent
                </th>
              </tr>
            </thead>
            <tbody>
              {group.rows.map((row) => (
                <tr key={row.label} className="compare-grid__row">
                  <th scope="row" className="row-h">
                    {row.label}
                    {row.note ? <span className="cva-compare-row-note">{row.note}</span> : null}
                  </th>
                  <td className="us-cell">{row.cash}</td>
                  <td className="other-cell">{row.agent}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
