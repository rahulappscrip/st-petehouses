import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Arr } from "@/components/ui/Arr";
import { resolveGuaranteeIcon, type GuaranteeIconId } from "@/components/home/guarantee-icons";
import { GUARANTEE_ASIDE_CHECKLIST, GUARANTEE_ITEMS } from "@/lib/constants";

export type GuaranteeItem = {
  title: string;
  body: string;
  icon?: GuaranteeIconId;
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
  /** Card layout (`guarantee--card`) is the default site-wide. */
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
  asideChecklist,
  asidePrimaryLabel = "Sell my house",
  asideSecondaryLabel = "Get my offer →",
  showAside = true,
  variant = "card",
}: GuaranteeSectionProps = {}) {
  const isCard = variant === "card";

  return (
    <section
      className={`guarantee section${isCard ? " guarantee--card" : ""}`}
      id="guarantee"
    >
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

        <div className={isCard ? "guarantee-card" : "guarantee-grid"}>
          <div className="guarantee-list">
            {items.map((item) => (
              <Reveal key={item.title} className="gi">
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    {resolveGuaranteeIcon(item.title, item.icon)}
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
              {isCard && asideChecklist && asideChecklist.length > 0 ? (
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
