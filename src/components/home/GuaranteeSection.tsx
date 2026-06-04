import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Arr } from "@/components/ui/Arr";
import { GUARANTEE_ASIDE_CHECKLIST, GUARANTEE_ITEMS } from "@/lib/constants";

const ICONS = [
  <path key="1" d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />,
  <path key="2" d="M3 6h18M3 12h18M3 18h12" />,
  <g key="3">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </g>,
  <path key="4" d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />,
];

const CARD_ICONS = [
  <polygon
    key="star"
    points="12 3 14.2 9.2 21 9.6 16 14 17.6 21 12 17.4 6.4 21 8 14 3 9.6 9.8 9.2"
    strokeLinejoin="round"
  />,
  <g key="dollar">
    <path d="M12 3v18" />
    <path d="M16 7.5c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4 4 1.8 4 4-1.8 4-4 4" />
  </g>,
  <g key="clock">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </g>,
  <path key="house" d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />,
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
  asideChecklist?: readonly string[];
  asidePrimaryLabel?: string;
  asideSecondaryLabel?: string;
  showAside?: boolean;
  /** Card layout matches homepage reference design; default keeps legacy grid. */
  variant?: "default" | "card";
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
  asideChecklist = GUARANTEE_ASIDE_CHECKLIST,
  asidePrimaryLabel = "Sell my house",
  asideSecondaryLabel = "Get my offer →",
  showAside = true,
  variant = "default",
}: GuaranteeSectionProps = {}) {
  const isCard = variant === "card";
  const rowIcons = isCard ? CARD_ICONS : ICONS;

  return (
    <section
      className={`guarantee section${isCard ? " guarantee--card" : ""}`}
      id="guarantee"
    >
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

        <div className={isCard ? "guarantee-card" : "guarantee-grid"}>
          <div className="guarantee-list">
            {items.map((item, i) => (
              <Reveal key={item.title} className="gi">
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    {rowIcons[i % rowIcons.length]}
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
              {isCard ? <div className="guarantee-aside__deco" aria-hidden="true"><span /><span /></div> : null}
              <span className="lab">Cash offer guarantee</span>
              <h3>{asideTitle}</h3>
              <p>{asideBody}</p>
              {isCard && asideChecklist.length > 0 ? (
                <ul className="guarantee-aside__checks">
                  {asideChecklist.map((line) => (
                    <li key={line}>
                      <span className="guarantee-aside__check-icon" aria-hidden="true">
                        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2.5 6.2 5 8.7 9.5 3.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="actions">
                <Link
                  href="/sell-your-house"
                  className={isCard ? "btn btn--guarantee-primary" : "btn btn--cta"}
                >
                  {asidePrimaryLabel}
                  <Arr />
                </Link>
                <Link
                  href="#offer"
                  className={isCard ? "btn btn--guarantee-secondary" : "btn"}
                  {...(isCard
                    ? {}
                    : {
                        style: {
                          "--bg": "transparent",
                          "--fg": "var(--paper)",
                          "--bd": "color-mix(in oklab, var(--paper) 40%, transparent)",
                        } as CSSProperties,
                      })}
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
