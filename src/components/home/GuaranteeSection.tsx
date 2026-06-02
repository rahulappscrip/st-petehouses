import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Arr } from "@/components/ui/Arr";
import { GUARANTEE_ITEMS } from "@/lib/constants";

const ICONS = [
  <path key="1" d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />,
  <path key="2" d="M3 6h18M3 12h18M3 18h12" />,
  <g key="3"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g>,
  <path key="4" d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />,
];

export type GuaranteeItem = {
  title: string;
  body: string;
};

type GuaranteeSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
  items?: readonly GuaranteeItem[];
  asideTitle?: ReactNode;
  asideBody?: string;
  asidePrimaryLabel?: string;
  asideSecondaryLabel?: string;
  showAside?: boolean;
};

export function GuaranteeSection({
  eyebrow = "Our guarantee",
  title = (
    <>
      Clear terms. <em>No surprises.</em>
    </>
  ),
  lede = "We guarantee a cash offer with clear terms and a flexible closing schedule. No hidden fees. No required repairs. No agent commissions. Just a straightforward, fair offer you can accept or decline — no pressure.",
  items = GUARANTEE_ITEMS,
  asideTitle = (
    <>
      Certainty &amp; fairness, <em>from offer to keys.</em>
    </>
  ),
  asideBody = "You know exactly what to expect from start to finish. No surprises, no pressure, no obligation. Ready to see what your house is worth?",
  asidePrimaryLabel = "Sell my house",
  asideSecondaryLabel = "Get my offer →",
  showAside = true,
}: GuaranteeSectionProps = {}) {
  return (
    <section className="guarantee section" id="guarantee">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

        <div className="guarantee-grid">
          <div className="guarantee-list">
            {items.map((item, i) => (
              <Reveal key={item.title} className="gi">
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    {ICONS[i % ICONS.length]}
                  </svg>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {showAside ? (
            <Reveal d={1} as="aside" className="guarantee-aside">
              <span className="lab">Cash offer guarantee</span>
              <h3>{asideTitle}</h3>
              <p>{asideBody}</p>
              <div className="actions">
                <Link href="/sell-your-house" className="btn btn--cta">
                  {asidePrimaryLabel}
                  <Arr />
                </Link>
                <Link
                  href="#offer"
                  className="btn"
                  style={
                    {
                      "--bg": "transparent",
                      "--fg": "var(--paper)",
                      "--bd": "color-mix(in oklab, var(--paper) 40%, transparent)",
                    } as CSSProperties
                  }
                >
                  {asideSecondaryLabel}
                </Link>
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
