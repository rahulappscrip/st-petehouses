import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ_ITEMS } from "@/lib/constants";

type FaqItem = { q: string; a: string };

type FaqSectionProps = {
  items?: readonly FaqItem[];
  title?: ReactNode;
  eyebrow?: string;
  showFullLink?: boolean;
  className?: string;
  id?: string;
};

export function FaqSection({
  items = FAQ_ITEMS,
  title = (
    <>
      Frequently asked questions about <em>selling for cash</em> in St. Pete.
    </>
  ),
  eyebrow = "FAQ",
  showFullLink = true,
  className = "",
  id = "faq",
}: FaqSectionProps) {
  return (
    <section
      className={`section ${className}`.trim()}
      id={id}
      style={{ background: "var(--paper)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}
    >
      <div className="wrap" style={{ maxWidth: 920 }}>
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-2">{title}</h2>
        </Reveal>

        <div className="faq-list">
          {items.map((item, i) => (
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

        {showFullLink ? (
          <div style={{ marginTop: 22 }}>
            <Link href="/faq" className="btn btn--link">
              Visit our full FAQ page →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
