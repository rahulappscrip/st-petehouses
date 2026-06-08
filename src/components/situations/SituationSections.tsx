import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Arr } from "@/components/ui/Arr";
import { CityCompareSection } from "@/components/cities/CityCompareSection";
import { CitySituationsSection } from "@/components/cities/CitySituationsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AreasSection } from "@/components/home/AreasSection";
import { ReviewsSectionBlock } from "@/components/home/ReviewsSectionBlock";
import { MarketSection } from "@/components/home/MarketSection";
import { GuaranteeSection } from "@/components/home/GuaranteeSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { SellerSituationsSection } from "@/components/home/SellerSituationsSection";
import { InheritedBuyProcessVisual } from "@/components/situations/InheritedBuyProcessVisual";
import { EmpathyNumbersSection } from "@/components/situations/EmpathyNumbersSection";
import { StageCardsSection } from "@/components/situations/StageCardsSection";
import { ForeclosureLawSection } from "@/components/situations/ForeclosureLawSection";
import { SituationFloodLawSection } from "@/components/situations/SituationFloodLawSection";
import { SituationFemaInsuranceSection } from "@/components/situations/SituationFemaInsuranceSection";
import { SituationMoldDisclosureSection } from "@/components/situations/SituationMoldDisclosureSection";
import { SituationTestimonialsSection } from "@/components/situations/SituationTestimonialsSection";
import { SituationEmpathyCtaSection } from "@/components/situations/SituationEmpathyCtaSection";
import { SituationPillCardsSection } from "@/components/situations/SituationPillCardsSection";
import { SituationTaxIconCardsSection } from "@/components/situations/SituationTaxIconCardsSection";
import { SituationStepCardsSection } from "@/components/situations/SituationStepCardsSection";
import { SituationNumberedCardsSection } from "@/components/situations/SituationNumberedCardsSection";
import { SituationIconCardsSection } from "@/components/situations/SituationIconCardsSection";
import {
  INHERITED_BUY_PROCESS_FEATURES,
  LIEN_PROPERTY_SITUATION_IMAGES,
  LIEN_TYPE_CARD_IMAGES,
  mapSituationPageCardsToSellerCards,
  mapSituationPageCityCards,
  mapSituationPageSituationsToSellerCards,
  SELL_AS_IS_WHEN_IMAGES,
  SELL_AS_IS_WHY_US_IMAGES,
  SITUATION_PAGE_CARD_IMAGES,
  SITUATION_PAGE_DIFF_IMAGES,
  SITE,
  ASSETS,
} from "@/lib/constants";
import { INHERITED_BUY_FEATURE_ICONS } from "@/components/situations/InheritedBuyProcessIcons";
import type {
  SituationCourtProcess,
  SituationFullContent,
  SituationSectionId,
  SituationStat,
  SituationTenantMarketContent,
  SituationTenantMarketFactor,
  SituationTitleParts,
} from "@/lib/situation-types";

function SectionTitle({ lead, em, tail }: { lead: string; em: string; tail: string }) {
  return (
    <>
      {lead}
      <em>{em}</em>
      {tail}
    </>
  );
}

function SituationImageCardsGrid({
  items,
  imageMap,
  className = "sit-cards",
}: {
  items: readonly { title: string; body: string }[];
  imageMap: Record<string, { image: string; imageAlt: string }>;
  className?: string;
}) {
  return (
    <div className={className}>
      {items.map((item, i) => {
        const photo = imageMap[item.title];
        return (
          <Reveal
            key={item.title}
            className="sit-card sit-card--static"
            d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
          >
            {photo ? (
              <div className="sit-card__media">
                <Image
                  src={photo.image}
                  alt={photo.imageAlt}
                  width={800}
                  height={500}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="sit-card__img"
                />
              </div>
            ) : null}
            <div className="sit-card__body">
              <h3 className="sit-card__title">{item.title}</h3>
              <p className="sit-card__text">{item.body}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

function SituationSectionHead({
  eyebrow,
  title,
  lede,
  centered,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  centered?: boolean;
}) {
  return <SectionHead eyebrow={eyebrow} title={title} lede={lede} centered={centered} />;
}

export function SituationStatsSection({ stats }: { stats: SituationStat[] }) {
  return (
    <section className="stats" aria-label="Key facts">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              as="div"
              d={i > 0 ? (Math.min(i, 3) as 1 | 2 | 3) : undefined}
              className="stat"
            >
              <b>
                {stat.prefix}
                {stat.value}
                {stat.suffix ? <em>{stat.suffix}</em> : null}
              </b>
              <span>{stat.label}</span>
              {stat.sub ? <p className="sub">{stat.sub}</p> : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SituationCourtProcessSection({
  data,
  alt,
}: {
  data: SituationCourtProcess;
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-prose-grid">
          <Reveal>
            <ol
              className="steps steps--4"
              style={{ listStyle: "none", padding: 0 }}
              aria-label="Court-ordered sale steps"
            >
              {data.steps.map((step) => (
                <li key={step.num} className="step">
                  <span className="step-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal d={1}>
            <div className="situation-info-card">
              <h3>{data.sidebarTitle}</h3>
              <ul>
                {data.sidebarItems.map((item) => (
                  <li key={item.strong}>
                    <strong>{item.strong}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>
            {data.callout ? (
              <div className="situation-aside-cta" style={{ marginTop: 20 }}>
                <h3>{data.callout.title}</h3>
                <p>{data.callout.body}</p>
                <Link href="#offer" className="btn btn--cta">
                  Get a cash offer now
                  <Arr />
                </Link>
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SituationBuyProcessSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["buyProcess"]>;
  alt?: boolean;
}) {
  if (data.layout === "visual") {
    return <InheritedBuyProcessVisual data={data} alt />;
  }

  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <Reveal className="situation-buy-grid">
          <div className="situation-buy-features">
            {data.features.map((item) => {
              const iconKey = INHERITED_BUY_PROCESS_FEATURES[item.title]?.iconKey;
              const featureIcon = iconKey ? INHERITED_BUY_FEATURE_ICONS[iconKey] : null;

              return (
              <div key={item.title} className="situation-buy-feature">
                <span
                  className={`situation-buy-feature__icon${featureIcon ? " situation-buy-feature__icon--svg" : ""}`}
                  aria-hidden
                >
                  {featureIcon ?? item.icon ?? "✓"}
                </span>
                <div>
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="body-standard">{item.body}</p>
                </div>
              </div>
            );
            })}
          </div>
          <div className="situation-buy-steps">
            <h3 className="situation-buy-steps__title h-3">{data.stepsTitle}</h3>
            <ol>
              {data.steps.map((step) => (
                <li key={step.num}>
                  <span className="situation-buy-steps__num">{step.num}</span>
                  <div>
                    <h4 className="h-4">{step.title}</h4>
                    <p className="body-standard">
                      {step.body}
                      {step.link ? (
                        <>
                          {" "}
                          <Link href={step.link.href} className="situation-inline-link">
                            {step.link.label}
                          </Link>
                        </>
                      ) : null}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SituationProbateSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["probate"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-probate-grid">
          <div className="situation-probate-faq">
            {data.items.map((item, i) => (
              <Reveal key={item.question} className="situation-probate-q" d={i > 0 ? 1 : undefined}>
                <span className="situation-probate-q__label">{item.label}</span>
                <h3 className="feature-title">{item.question}</h3>
                <p className="body-standard">{item.answer}</p>
              </Reveal>
            ))}
          </div>
          <Reveal d={1} className="situation-probate-aside">
            <div className="situation-info-card">
              <h3 className="h-4">{data.timelineTitle}</h3>
              <ol className="situation-probate-timeline">
                {data.timeline.map((item) => (
                  <li key={item.stage}>
                    <strong className="feature-title">{item.stage}</strong>
                    <span>{item.duration}</span>
                    <p className="body-standard">{item.body}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="situation-aside-cta">
              <h3 className="h-4">{data.helpTitle}</h3>
              <p className="body-standard">{data.helpBody}</p>
              <a href={SITE.phoneHref} className="phone">
                {SITE.phone}
              </a>
              <Link href="#offer" className="btn btn--cta" style={{ width: "100%", justifyContent: "center" }}>
                Submit your property online
                <Arr />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SituationTaxSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["tax"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-tax-grid">
          <Reveal>
            <div>
              {data.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="situation-tax-p body-standard">
                  {p}
                </p>
              ))}
              <p className="situation-tax-disclaimer body-standard">{data.disclaimer}</p>
            </div>
          </Reveal>
          <div className="situation-tax-cards">
            {data.cards.map((card, i) => (
              <Reveal key={card.title} className="situation-tax-card" d={i > 0 ? ((i % 2) as 1 | 2) : undefined}>
                <span className="situation-tax-card__label">{card.label}</span>
                <h3 className="feature-title">{card.title}</h3>
                <p className="body-standard">{card.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SituationValuationSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["valuation"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section situation-valuation${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-valuation-grid">
          <div className="situation-val-scenarios">
            {data.scenarios.map((item, i) => (
              <Reveal key={item.title} className="situation-val-scenario" d={i > 0 ? 1 : undefined}>
                <span className="situation-val-scenario__label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal d={1} className="situation-val-stats">
            <h3>{data.statsTitle}</h3>
            <dl>
              {data.stats.map((row) => (
                <div key={row.label} className="situation-val-stat-row">
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            {data.statsNote ? <p className="situation-val-stats__note">{data.statsNote}</p> : null}
            <Link href="#offer" className="btn btn--cta" style={{ width: "100%", justifyContent: "center" }}>
              Get my cash offer
              <Arr />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SituationTenantRightsSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["tenantRights"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section situation-tenant-rights${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-tenant-rights__grid">
          <Reveal>
            <ul className="situation-tenant-rights__list">
              {data.items.map((item) => (
                <li key={item.strong} className="body-standard">
                  <strong>{item.strong}</strong> {item.text}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal d={1} className="situation-info-card situation-info-card--plain">
            <h3>{data.callout.title}</h3>
            {data.callout.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <Link href="#offer" className="btn btn--cta">
              Ask about cash-for-keys
              <Arr />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SituationObligationsSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["obligations"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section situation-obligations${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-obligations__grid">
          {data.cards.map((card, i) => (
            <Reveal
              key={card.title}
              className={`situation-obligation-card${card.featured ? " situation-obligation-card--featured" : ""}`}
              d={i > 0 ? ((i % 4) as 1 | 2 | 3) : undefined}
            >
              <h3>{card.title}</h3>
              {card.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {card.featured ? (
                <Link href="#offer" className="btn btn--cta">
                  Get a cash offer
                  <Arr />
                </Link>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SituationCaseStudiesSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["caseStudies"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section situation-case-studies${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-case-studies__grid">
          {data.cases.map((c, i) => (
            <Reveal key={c.title} className="situation-case-card" d={i > 0 ? 1 : undefined}>
              <span className="situation-case-card__tag">{c.tag}</span>
              <h3>{c.title}</h3>
              {c.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              <div className="situation-case-card__stat">
                <span className="situation-case-card__stat-value">{c.statValue}</span>
                <span className="situation-case-card__stat-label">{c.statLabel}</span>
              </div>
            </Reveal>
          ))}
        </div>
        {data.takeaways && data.takeaways.length > 0 ? (
          <Reveal className="situation-case-takeaways">
            <h3>Key takeaways from real deals</h3>
            <ul>
              {data.takeaways.map((item) => (
                <li key={item.strong}>
                  <strong>{item.strong}</strong> {item.text}
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function SituationInsuranceSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["insurance"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section situation-insurance${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-insurance__grid">
          {data.cards.map((card, i) => (
            <Reveal key={card.title} className="situation-insurance-card" d={i > 0 ? 1 : undefined}>
              <span className="situation-insurance-card__tag">{card.tag}</span>
              <h3>{card.title}</h3>
              {card.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {card.cta ? (
                <Link href="#offer" className="btn btn--cta">
                  Discuss my situation
                  <Arr />
                </Link>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const ENVIRONMENTAL_ICONS: Record<string, ReactNode> = {
  mold: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" strokeLinecap="round" />
    </svg>
  ),
  lead: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" />
      <path d="M14 2v6h6M12 18v-6M9 15h6" strokeLinecap="round" />
    </svg>
  ),
  disposal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polyline points="3 6 5 6 21 6" />
      <path
        d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
    </svg>
  ),
};

export function SituationEnvironmentalSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["environmental"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section situation-environmental${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-environmental__grid">
          {data.items.map((item, i) => {
            const iconKey = item.icon?.toLowerCase();
            const icon = iconKey ? ENVIRONMENTAL_ICONS[iconKey] : null;

            return (
              <Reveal
                key={item.title}
                className="situation-environmental-card"
                d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
              >
                {icon ? <span className="situation-environmental-card__icon">{icon}</span> : null}
                <h3 className="h-4">{item.title}</h3>
                <p className="body-standard">{item.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TenantMarketFactorIcon({ icon }: { icon: NonNullable<SituationTenantMarketFactor["icon"]> }) {
  switch (icon) {
    case "phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "house":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "document":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function SituationTenantMarketSection({
  data,
}: {
  data: SituationTenantMarketContent;
}) {
  const factorCols = data.factors.length >= 4 ? " situation-tenant-market__factors--4" : "";

  return (
    <section className="section situation-tenant-market">
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className={`situation-tenant-market__factors${factorCols}`}>
          {data.factors.map((f, i) => (
            <Reveal key={f.title} className="situation-tenant-market__factor" d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}>
              {f.icon ? (
                <span className="situation-tenant-market__factor-icon" aria-hidden>
                  <TenantMarketFactorIcon icon={f.icon} />
                </span>
              ) : null}
              {f.label ? <span className="situation-tenant-market__factor-label">{f.label}</span> : null}
              {f.value ? <span className="situation-tenant-market__factor-value">{f.value}</span> : null}
              <h3 className="feature-title">{f.title}</h3>
              <p className="body-standard">{f.body}</p>
            </Reveal>
          ))}
        </div>
        {data.testimonial ? (
          <Reveal className="situation-tenant-market__testimonial">
            <blockquote className="situation-tenant-market__testimonial-quote">
              <span className="situation-tenant-market__quote-mark h-2" aria-hidden>
                &ldquo;
              </span>
              <p className="body-standard">{data.testimonial.quote}</p>
            </blockquote>
            <div className="situation-tenant-market__testimonial-meta">
              <div className="situation-tenant-market__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <p className="situation-tenant-market__testimonial-name feature-title">{data.testimonial.name}</p>
              <p className="situation-tenant-market__testimonial-location body-standard">{data.testimonial.location}</p>
              {data.testimonial.note ? (
                <p className="situation-tenant-market__testimonial-note body-standard">{data.testimonial.note}</p>
              ) : null}
            </div>
          </Reveal>
        ) : null}
        {data.callout ? (
          <Reveal className="situation-tenant-market__callout">
            <div className="situation-tenant-market__callout-copy">
              <strong className="feature-title">{data.callout.title}</strong>
              <p className="body-standard">{data.callout.body}</p>
            </div>
            {data.callout.cta ? (
              <Link href={data.callout.cta.href} className="btn btn--cta situation-tenant-market__callout-cta">
                {data.callout.cta.label}
                <Arr />
              </Link>
            ) : null}
          </Reveal>
        ) : null}
        {data.footerNote ? (
          <p className="situation-tenant-market__footer-note body-standard">{data.footerNote}</p>
        ) : null}
        {data.regions && data.regions.length > 0 ? (
          <Reveal className="situation-tenant-market__regions">
            {data.regions.map((r) => (
              <div key={r.label} className="situation-tenant-market__region">
                <span className="situation-tenant-market__region-label">{r.label}</span>
                <p className="body-standard">{r.body}</p>
              </div>
            ))}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function SituationPayoffSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["payoff"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section situation-payoff${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-payoff__flow">
          {data.steps.map((step, i) => (
            <Reveal key={step.num} className="situation-payoff__step" d={i > 0 ? ((i % 4) as 1 | 2 | 3) : undefined}>
              <span className="situation-payoff__step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
        {data.equityNote ? (
          <Reveal className="situation-payoff__equity">
            <div>
              <p className="situation-payoff__equity-title">{data.equityNote.title}</p>
              <p>{data.equityNote.body}</p>
            </div>
            <Link href="#offer" className="btn btn--cta">
              Talk to our team
              <Arr />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function SituationForestSituationsSection({
  data,
}: {
  data: NonNullable<SituationFullContent["situations"]>;
}) {
  return (
    <section className="section situation-forest-sit">
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-forest-sit__grid">
          {data.items.map((item, i) => {
            const photo =
              item.image && item.imageAlt
                ? { image: item.image, imageAlt: item.imageAlt }
                : LIEN_PROPERTY_SITUATION_IMAGES[item.title];

            return (
              <Reveal
                key={item.title}
                className="situation-forest-sit__card"
                d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
              >
                {photo ? (
                  <div className="situation-forest-sit__media">
                    <Image
                      src={photo.image}
                      alt={photo.imageAlt}
                      width={800}
                      height={500}
                      sizes="(min-width: 1024px) 33vw, (min-width: 720px) 50vw, 100vw"
                      className="situation-forest-sit__img"
                    />
                  </div>
                ) : null}
                <div className="situation-forest-sit__body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SituationProseSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["prose"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-prose-grid">
          <Reveal>
            <div>
              {data.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="body-standard">
                  {p}
                </p>
              ))}
              <div className="situation-hero__actions">
                <Link href="#offer" className="btn btn--cta">
                  Get my cash offer
                  <Arr />
                </Link>
                <a href={SITE.phoneHref} className="btn btn--ghost">
                  Call {SITE.phone}
                </a>
              </div>
            </div>
          </Reveal>
          {data.sidebar || data.extraCard ? (
            <Reveal d={1}>
              {data.sidebar ? (
                <div className="situation-info-card">
                  {data.sidebar.badge ? (
                    <span className="situation-info-card__badge">{data.sidebar.badge}</span>
                  ) : null}
                  <h3>{data.sidebar.title}</h3>
                  <ul>
                    {data.sidebar.items.map((item) => (
                      <li key={item.text}>
                        {item.strong ? (
                          <>
                            <strong>{item.strong}</strong> {item.text}
                          </>
                        ) : (
                          item.text
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {data.extraCard ? (
                <div className="situation-info-card situation-info-card--plain">
                  <h3>{data.extraCard.title}</h3>
                  <ul>
                    {data.extraCard.items.map((item) => (
                      <li key={item.strong}>
                        <strong>{item.strong}</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function SituationInfoBlockColumn({
  block,
  delay,
}: {
  block: NonNullable<SituationFullContent["infoBlocks"]>[number];
  delay?: 1;
}) {
  return (
    <Reveal d={delay} className="situation-info-block">
      <h3 className="h-3">{block.title}</h3>
      {block.body ? <p className="body-standard">{block.body}</p> : null}
      {block.chapters ? (
        <div className="situation-chapter-grid">
          {block.chapters.map((ch) => (
            <div key={ch.title} className="situation-chapter">
              <h4 className="h-4">{ch.title}</h4>
              <p className="body-standard">{ch.body}</p>
            </div>
          ))}
        </div>
      ) : null}
      {block.list ? (
        <ul className="situation-info-list">
          {block.list.map((item) => (
            <li key={item.title}>
              <strong className="feature-title">{item.title}</strong>
              <p className="body-standard">{item.body}</p>
            </li>
          ))}
        </ul>
      ) : null}
      {block.footer ? <p className="situation-info-block__footer body-standard">{block.footer}</p> : null}
    </Reveal>
  );
}

export function SituationInfoBlocksSection({
  blocks,
  alt,
}: {
  blocks: NonNullable<SituationFullContent["infoBlocks"]>;
  alt?: boolean;
}) {
  const callout = blocks.find((block) => block.callout)?.callout;

  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap situation-info-blocks">
        <div className="situation-info-split">
          {blocks.map((block, i) => (
            <SituationInfoBlockColumn key={block.title} block={block} delay={i > 0 ? 1 : undefined} />
          ))}
        </div>
        {callout ? (
          <Reveal className="situation-info-callout">
            <div className="situation-info-card situation-info-callout__card">
              <h3 className="h-4">{callout.title}</h3>
              <p className="body-standard">{callout.body}</p>
              <Link href="#offer" className="btn btn--cta">
                Get a cash offer
                <Arr />
              </Link>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function SituationProsConsSection({
  data,
}: {
  data: NonNullable<SituationFullContent["prosCons"]>;
}) {
  return (
    <section
      className={`section situation-proscons${data.light ? " situation-proscons--light section-alt" : ""}`}
    >
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-proscons__grid">
          <Reveal className="situation-proscons-card situation-proscons-card--pro">
            <span className="situation-proscons-card__lab">Pros of selling for cash</span>
            <ul>
              {data.advantages.map((item) => (
                <li key={item.strong}>
                  <strong>{item.strong}</strong> {item.text}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="situation-proscons-card situation-proscons-card--con" d={1}>
            <span className="situation-proscons-card__lab situation-proscons-card__lab--amber">
              Things to consider
            </span>
            <ul>
              {data.tradeoffs.map((item) => (
                <li key={item.strong}>
                  <strong>{item.strong}</strong> {item.text}
                </li>
              ))}
            </ul>
            {data.footerNote ? <p className="situation-proscons-card__note">{data.footerNote}</p> : null}
          </Reveal>
        </div>
        {data.when ? (
          <Reveal className="situation-proscons-when" d={1}>
            <h3 className="situation-proscons-when__title">
              <SectionTitle lead={data.when.titleLead} em={data.when.titleEm} tail={data.when.titleTail} />
            </h3>
            {data.when.lede ? <p className="situation-proscons-when__lede">{data.when.lede}</p> : null}
            {data.when.imageCards ? (
              <SituationImageCardsGrid
                items={data.when.items}
                imageMap={SELL_AS_IS_WHEN_IMAGES}
                className="sit-cards situation-proscons-when__cards"
              />
            ) : (
              <div className="situation-proscons-when__chips">
                {data.when.items.map((item) => (
                  <div key={item.title} className="situation-proscons-chip">
                    {item.icon ? <span className="situation-proscons-chip__icon">{item.icon}</span> : null}
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function SituationTrustSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["trust"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section situation-trust${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <div className="situation-trust__grid">
          <div>
            <SituationSectionHead
              eyebrow={data.eyebrow}
              title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
              lede={data.lede}
            />
            <ul className="situation-trust__points">
              {data.points.map((point) => (
                <li key={point.title}>
                  <span className="situation-trust__check" aria-hidden>
                    ✓
                  </span>
                  <div>
                    <h4>{point.title}</h4>
                    <p>{point.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Reveal d={1} className="situation-trust__card">
            <h3>{data.card.title}</h3>
            <p>{data.card.body}</p>
            <Link href="#offer" className="btn btn--cta" style={{ width: "100%", justifyContent: "center" }}>
              Get my as-is cash offer
              <Arr />
            </Link>
            <div className="situation-trust__stats">
              {data.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="situation-trust__stat-value">{stat.value}</span>
                  <span className="situation-trust__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SituationDiffSection({
  data,
  slug,
  alt,
}: {
  data: NonNullable<SituationFullContent["diff"]>;
  slug: string;
  alt?: boolean;
}) {
  const imageMap = data.imageCards ? SITUATION_PAGE_DIFF_IMAGES[slug] : undefined;

  return (
    <section className={`section${alt ? " section-alt" : ""}${imageMap ? " seller-situations" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
          centered
        />
        {imageMap ? (
          <SituationImageCardsGrid
            items={data.items.map((item) => ({ title: item.title, body: item.body }))}
            imageMap={imageMap}
            className="sit-cards"
          />
        ) : (
          <div className="situation-diff-grid">
            {data.items.map((item, i) => (
              <Reveal key={item.num} className="situation-diff-card" d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}>
                <span className="num">{item.num}</span>
                <h3 className="feature-title">{item.title}</h3>
                <p className="body-standard">{item.body}</p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SituationWhyCheckIcon() {
  return (
    <span className="situation-why-check" aria-hidden>
      <svg viewBox="0 0 12 12" fill="none">
        <polyline points="1 6 5 10 11 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function SituationWhyUsSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["whyUs"]>;
  alt?: boolean;
}) {
  if (data.grid) {
    return (
      <section className={`section situation-whyus-grid-section${alt ? " section-alt" : ""}`}>
        <div className="wrap">
          <SituationSectionHead
            eyebrow={data.eyebrow}
            title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
            lede={data.lede}
          />
          {data.imageCards ? (
            <SituationImageCardsGrid
              items={data.items}
              imageMap={SELL_AS_IS_WHY_US_IMAGES}
              className="sit-cards situation-whyus-cards"
            />
          ) : (
            <div className="situation-whyus-cards">
              {data.items.map((item, i) => (
                <Reveal key={item.title} className="situation-whyus-card" d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}>
                  {item.icon ? <span className="situation-whyus-card__icon">{item.icon}</span> : null}
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="section situation-why-section">
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="situation-why-grid">
          <ul className="situation-why-list">
            {data.items.map((item) => (
              <li key={item.title}>
                <SituationWhyCheckIcon />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          {data.asideTitle ? (
            <div className="situation-why-aside">
              <Reveal d={1} className="situation-aside-cta">
                <h4 className="situation-aside-cta__title">{data.asideTitle}</h4>
                {data.asideBody ? <p>{data.asideBody}</p> : null}
                {data.asideList ? (
                  <ul className="situation-aside-cta__list">
                    {data.asideList.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : null}
                <a href={SITE.phoneHref} className="phone">
                  {SITE.phone}
                </a>
                <Link href="#offer" className="btn btn--cta situation-aside-cta__btn">
                  Request My Cash Offer
                  <Arr />
                </Link>
                <a href={`mailto:${SITE.email}`} className="situation-aside-cta__email">
                  {SITE.email}
                </a>
              </Reveal>
              {data.footerNote ? (
                <div className="situation-why-aside-note">
                  {data.asideNoteTitle ? (
                    <p className="situation-why-aside-note__title">{data.asideNoteTitle}</p>
                  ) : null}
                  <p>{data.footerNote}</p>
                </div>
              ) : null}
            </div>
          ) : null}

        </div>
      </div>
    </section>
  );
}

export function SituationResourcesSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["resources"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
        />
        <div className="city-sit-grid">
          {data.items.map((item, i) => (
            <Reveal key={item.title} className="city-sit-card" d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}>
              {item.tag ? (
                <span className="eyebrow" style={{ marginBottom: 4 }}>
                  {item.tag}
                </span>
              ) : null}
              <h3 className="feature-title">{item.title}</h3>
              <p className="body-standard">{item.body}</p>
              {item.note ? <p className="situation-resource-note body-standard">{item.note}</p> : null}
              {item.phone ? (
                <a href={`tel:${item.phone.replace(/\D/g, "")}`} className="situation-resource-phone">
                  {item.phone}
                </a>
              ) : null}
              {item.href ? (
                <a href={item.href} className="situation-resource-link" target="_blank" rel="noopener noreferrer">
                  {item.linkLabel ?? `${new URL(item.href).hostname.replace(/^www\./, "")} →`}
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>
        {data.footerNote ? <p className="situation-resources-footer body-standard">{data.footerNote}</p> : null}
      </div>
    </section>
  );
}

function titleToParts(parts: SituationTitleParts) {
  return <SectionTitle lead={parts.titleLead} em={parts.titleEm} tail={parts.titleTail} />;
}

export function renderSituationSection(
  id: SituationSectionId,
  content: SituationFullContent,
  alt: boolean,
) {
  switch (id) {
    case "stats":
      return content.stats ? <SituationStatsSection key={id} stats={content.stats} /> : null;

    case "empathy":
      if (
        (content.slug === "divorce" ||
          content.slug === "tenants" ||
          content.slug === "lien" ||
          content.slug === "storm-damage" ||
          content.slug === "cash-home-buyers" ||
          content.slug === "fire-damage" ||
          content.slug === "water-damage" ||
          content.slug === "sell-as-is" ||
          content.slug === "as-is-florida") &&
        content.empathy
      ) {
        return <SituationEmpathyCtaSection key={id} data={content.empathy} alt={alt} />;
      }
      return content.empathy ? (
        <EmpathyNumbersSection key={id} data={content.empathy} alt={alt} />
      ) : null;

    case "stages":
      return content.stages ? <StageCardsSection key={id} data={content.stages} alt={alt} /> : null;

    case "tenantMarket":
      return content.tenantMarket ? (
        <SituationTenantMarketSection key={id} data={content.tenantMarket} />
      ) : null;

    case "foreclosureLaw":
      return content.foreclosureLaw ? (
        <ForeclosureLawSection key={id} data={content.foreclosureLaw} />
      ) : null;

    case "floodLaw":
      return content.floodLaw ? <SituationFloodLawSection key={id} data={content.floodLaw} alt={alt} /> : null;

    case "femaInsurance":
      return content.femaInsurance ? <SituationFemaInsuranceSection key={id} data={content.femaInsurance} /> : null;

    case "moldDisclosure":
      return content.moldDisclosure ? (
        <SituationMoldDisclosureSection key={id} data={content.moldDisclosure} alt={alt} />
      ) : null;

    case "courtProcess":
      return content.courtProcess ? (
        <SituationCourtProcessSection key={id} data={content.courtProcess} alt={alt} />
      ) : null;

    case "buyProcess":
      return content.buyProcess ? (
        <SituationBuyProcessSection key={id} data={content.buyProcess} alt={alt} />
      ) : null;

    case "probate":
      return content.probate ? (
        <SituationProbateSection key={id} data={content.probate} alt={alt} />
      ) : null;

    case "tax":
      if (content.slug === "divorce" && content.tax) {
        return <SituationTaxIconCardsSection key={id} data={content.tax} alt={alt} />;
      }
      return content.tax ? <SituationTaxSection key={id} data={content.tax} alt={alt} /> : null;

    case "valuation":
      return content.valuation ? (
        <SituationValuationSection key={id} data={content.valuation} alt={alt} />
      ) : null;

    case "process":
      if (content.slug === "divorce" && content.process) {
        return <SituationStepCardsSection key={id} data={content.process} />;
      }
      return content.process ? (
        <ProcessSection
          key={id}
          eyebrow={content.process.eyebrow}
          title={titleToParts(content.process)}
          lede={content.process.lede}
          steps={content.process.steps}
          note={content.process.note}
          keySteps={content.process.keySteps}
          docs={content.process.docs}
          disclosureNote={content.process.disclosureNote}
          showStepMeta={false}
          primaryCta={{ label: content.process.primaryCta ?? "Start with a free offer", href: "#offer" }}
          secondaryCta={
            content.process.secondaryCta ?? {
              label: `Call ${SITE.phone}`,
              href: SITE.phoneHref,
            }
          }
        />
      ) : null;

    case "prose":
      return content.prose ? <SituationProseSection key={id} data={content.prose} alt={alt} /> : null;

    case "payoff":
      return content.payoff ? <SituationPayoffSection key={id} data={content.payoff} alt={alt} /> : null;

    case "tenantRights":
      return content.tenantRights ? (
        <SituationTenantRightsSection key={id} data={content.tenantRights} alt={alt} />
      ) : null;

    case "obligations":
      return content.obligations ? (
        <SituationObligationsSection key={id} data={content.obligations} alt={alt} />
      ) : null;

    case "caseStudies":
      return content.caseStudies ? (
        <SituationCaseStudiesSection key={id} data={content.caseStudies} alt={alt} />
      ) : null;

    case "insurance":
      return content.insurance ? (
        <SituationInsuranceSection key={id} data={content.insurance} alt={alt} />
      ) : null;

    case "environmental":
      return content.environmental ? (
        <SituationEnvironmentalSection key={id} data={content.environmental} alt={alt} />
      ) : null;

    case "cards":
      if (content.slug === "divorce" && content.cards) {
        return <SituationPillCardsSection key={id} data={content.cards} alt={alt} />;
      }
      if (content.cards?.numberedCards) {
        return (
          <SituationNumberedCardsSection
            key={id}
            data={content.cards}
            alt={alt}
            imageMap={SITUATION_PAGE_CARD_IMAGES[content.slug]}
          />
        );
      }
      if (content.cards?.iconCards) {
        return (
          <SituationIconCardsSection
            key={id}
            data={content.cards}
            alt={alt}
            imageMap={
              content.slug === "lien"
                ? LIEN_TYPE_CARD_IMAGES
                : SITUATION_PAGE_CARD_IMAGES[content.slug]
            }
          />
        );
      }
      return content.cards ? (
        content.cards.cityImageCards ? (
          <section key={id} className={`section${alt ? " section-alt" : ""}`} id="cards">
            <div className="wrap">
              <CitySituationsSection
                embedded
                alt={false}
                eyebrow={content.cards.eyebrow}
                title={titleToParts(content.cards)}
                lede={content.cards.lede ?? ""}
                items={mapSituationPageCityCards(content.slug, content.cards.items)}
              />
              {content.cards.exclusionNote ? (
                <div className="situation-exclusion-note">
                  <p>
                    <strong>What we don&apos;t purchase:</strong> {content.cards.exclusionNote}
                  </p>
                </div>
              ) : null}
            </div>
          </section>
        ) : content.cards.imageCards ? (
          <SellerSituationsSection
            key={id}
            sectionId="cards"
            className={alt ? "section-alt" : ""}
            eyebrow={content.cards.eyebrow}
            title={titleToParts(content.cards)}
            lede={content.cards.lede ?? ""}
            linkable={false}
            items={mapSituationPageCardsToSellerCards(
              content.slug,
              content.cards.items.map((item) => ({ title: item.title, body: item.body })),
            )}
            after={
              content.cards.exclusionNote ? (
                <div className="situation-exclusion-note">
                  <p>
                    <strong>What we don&apos;t purchase:</strong> {content.cards.exclusionNote}
                  </p>
                </div>
              ) : undefined
            }
          />
        ) : (
          <section key={id} className={`section${alt ? " section-alt" : ""}`}>
            <div className="wrap">
              <CitySituationsSection
                embedded
                alt={false}
                eyebrow={content.cards.eyebrow}
                title={titleToParts(content.cards)}
                lede={content.cards.lede ?? ""}
                items={content.cards.items.map((item) => ({
                  icon: item.icon ?? "•",
                  title: item.title,
                  body: item.body,
                }))}
              />
              {content.cards.exclusionNote ? (
                <div className="situation-exclusion-note">
                  <p>
                    <strong>What we don&apos;t purchase:</strong> {content.cards.exclusionNote}
                  </p>
                </div>
              ) : null}
            </div>
          </section>
        )
      ) : null;

    case "areas":
      return content.areas ? (
        <AreasSection
          key={id}
          eyebrow={content.areas.eyebrow}
          title={titleToParts(content.areas)}
          lede={content.areas.lede}
          listHeading={content.slug === "inherited" ? "Communities we serve" : undefined}
          areasNote={content.areas.areasNote}
          areasNoteLink={content.areas.areasNoteLink}
          areasNoteAfter={content.areas.areasNoteAfter}
          areasAside={content.areas.areasAside}
        />
      ) : null;

    case "testimonials":
      return content.testimonials ? (
        <SituationTestimonialsSection
          key={id}
          data={content.testimonials}
          className={alt ? "section-alt" : ""}
        />
      ) : (
        <ReviewsSectionBlock key={id} className={alt ? "section-alt" : ""} />
      );

    case "situations":
      return content.situations ? (
        content.situations.dark ? (
          <SituationForestSituationsSection key={id} data={content.situations} />
        ) : content.situations.imageCards ? (
          <SellerSituationsSection
            key={id}
            className={alt ? "section-alt" : ""}
            eyebrow={content.situations.eyebrow}
            title={titleToParts(content.situations)}
            lede={content.situations.lede ?? ""}
            linkable={false}
            items={mapSituationPageSituationsToSellerCards(
              content.slug,
              content.situations.items.map((item) => ({ title: item.title, body: item.body })),
            )}
          />
        ) : (
          <CitySituationsSection
            key={id}
            alt={alt}
            eyebrow={content.situations.eyebrow}
            title={titleToParts(content.situations)}
            lede={content.situations.lede ?? ""}
            items={content.situations.items.map((item) => ({
              icon: item.icon ?? "•",
              title: item.title,
              body: item.body,
            }))}
          />
        )
      ) : null;

    case "market":
      return content.market ? (
        content.market.dark ? (
          <SituationTenantMarketSection key={id} data={content.market as SituationTenantMarketContent} />
        ) : (
          <MarketSection
            key={id}
            alt={alt}
            eyebrow={content.market.eyebrow}
            title={titleToParts(content.market)}
            lede={content.market.lede}
            factors={content.market.factors.map((f, i) => ({
              letter: String.fromCharCode(65 + i),
              title: f.title,
              body: f.body,
            }))}
            showChart={content.market.showChart !== false}
            showLocal={content.market.showLocal === true}
            badgeValue={content.market.badgeValue}
            badgeLabel={content.market.badgeLabel}
            chartImage={
              content.market.chartImage ??
              (content.slug === "foreclosure" ? ASSETS.marketChartForeclosure : undefined)
            }
            chartImageAlt={
              content.market.chartImageAlt ??
              (content.slug === "foreclosure"
                ? "Chart illustrating the St. Petersburg foreclosure cash home market"
                : undefined)
            }
            sideImage={content.market.sideImage}
            sideImageAlt={content.market.sideImageAlt}
          />
        )
      ) : null;

    case "guarantee": {
      if (!content.guarantee) return null;
      const asideTitle = content.guarantee.asideTitle ?? content.guarantee.ctaTitle;
      const asideBody = content.guarantee.asideBody ?? content.guarantee.ctaBody;
      return (
        <GuaranteeSection
          key={id}
          eyebrow={content.guarantee.eyebrow}
          title={titleToParts(content.guarantee)}
          lede={content.guarantee.lede}
          items={content.guarantee.items}
          asideTitle={asideTitle}
          asideBody={asideBody}
          showAside={Boolean(asideTitle && asideBody)}
          asidePrimaryLabel="Get My Cash Offer"
          variant="card"
        />
      );
    }

    case "prosCons":
      return content.prosCons ? <SituationProsConsSection key={id} data={content.prosCons} /> : null;

    case "trust":
      return content.trust ? <SituationTrustSection key={id} data={content.trust} alt={alt} /> : null;

    case "comparison":
      return content.comparison ? (
        <CityCompareSection
          key={id}
          alt={alt}
          eyebrow={content.comparison.eyebrow}
          title={titleToParts(content.comparison)}
          lede={content.comparison.lede ?? ""}
          traditionalLabel={content.comparison.traditionalLabel}
          traditionalTimeline={content.comparison.traditionalTimeline}
          cashLabel={content.comparison.cashLabel}
          cashTimeline={content.comparison.cashTimeline}
          featuredBadge={content.comparison.featuredBadge}
          rows={content.comparison.rows}
          tradeoffs={content.comparison.tradeoffs}
          cashNote={content.comparison.cashNote}
          traditionalNote={content.comparison.traditionalNote}
        />
      ) : null;

    case "infoBlocks":
      return content.infoBlocks ? (
        <SituationInfoBlocksSection key={id} blocks={content.infoBlocks} alt={alt} />
      ) : null;

    case "diff":
      return content.diff ? (
        <SituationDiffSection key={id} data={content.diff} slug={content.slug} alt={alt} />
      ) : null;

    case "resources":
      return content.resources ? (
        <SituationResourcesSection key={id} data={content.resources} alt={alt} />
      ) : null;

    case "whyUs":
      return content.whyUs ? <SituationWhyUsSection key={id} data={content.whyUs} alt={alt} /> : null;

    case "faq":
      return (
        <FaqSection
          key={id}
          className="situation-faq"
          eyebrow={content.faq.eyebrow}
          title={titleToParts(content.faq)}
          items={content.faq.items}
        />
      );

    case "finalCta":
      return (
        <FinalCtaSection
          key={id}
          eyebrow={content.finalCta.eyebrow ?? "Ready to sell?"}
          title={
            <SectionTitle
              lead={content.finalCta.titleLead}
              em={content.finalCta.titleEm}
              tail={content.finalCta.titleTail}
            />
          }
          description={content.finalCta.description}
          offerHref="#offer"
          bullets={content.finalCta.bullets}
        />
      );

    default:
      return null;
  }
}
