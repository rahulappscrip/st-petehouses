import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ_ITEMS } from "@/lib/constants";

export function FaqSection() {
  return (
    <section className="section" id="faq" style={{ background: "var(--paper)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
      <div className="wrap" style={{ maxWidth: 920 }}>
        <Reveal className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="h-2">
            Frequently asked questions about <em>selling for cash</em> in St Petersburg.
          </h2>
        </Reveal>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <details key={item.q} className="faq-item" open={i === 0}>
              <summary className="faq-q">
                {item.q}
                <span className="plus" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div style={{ marginTop: 22 }}>
          <Link href="/faq" className="btn btn--link">
            Visit our full FAQ page →
          </Link>
        </div>
      </div>
    </section>
  );
}
