import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Arr } from "@/components/ui/Arr";
import { CityCompareSection } from "@/components/cities/CityCompareSection";
import { CitySituationsSection } from "@/components/cities/CitySituationsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AreasSection } from "@/components/home/AreasSection";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { MarketSection } from "@/components/home/MarketSection";
import { GuaranteeSection } from "@/components/home/GuaranteeSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { SITE } from "@/lib/constants";
import type {
  SituationFullContent,
  SituationSectionId,
  SituationStat,
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
                <p key={p.slice(0, 48)}>{p}</p>
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
          {data.sidebar ? (
            <Reveal d={1} className="situation-info-card">
              <h3>{data.sidebar.title}</h3>
              <ul>
                {data.sidebar.items.map((item) => (
                  <li key={item.strong}>
                    <strong>{item.strong}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function SituationInfoBlocksSection({
  blocks,
  alt,
}: {
  blocks: NonNullable<SituationFullContent["infoBlocks"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <div className="situation-info-split">
          {blocks.map((block, i) => (
            <Reveal key={block.title} d={i > 0 ? 1 : undefined}>
              <h2 className="h-3">{block.title}</h2>
              {block.body ? <p>{block.body}</p> : null}
              {block.chapters ? (
                <div className="situation-chapter-grid">
                  {block.chapters.map((ch) => (
                    <div key={ch.title} className="situation-chapter">
                      <h4>{ch.title}</h4>
                      <p>{ch.body}</p>
                    </div>
                  ))}
                </div>
              ) : null}
              {block.list ? (
                <div>
                  {block.list.map((item) => (
                    <div key={item.title} className="situation-resource-item">
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              ) : null}
              {block.footer ? <p>{block.footer}</p> : null}
              {block.callout ? (
                <div className="situation-info-card" style={{ marginTop: 20 }}>
                  <h3>{block.callout.title}</h3>
                  <p>{block.callout.body}</p>
                  <Link href="#offer" className="btn btn--cta" style={{ marginTop: 16 }}>
                    Get a cash offer
                    <Arr />
                  </Link>
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SituationDiffSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["diff"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SituationSectionHead
          eyebrow={data.eyebrow}
          title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
          lede={data.lede}
          centered
        />
        <div className="situation-diff-grid">
          {data.items.map((item, i) => (
            <Reveal key={item.num} className="situation-diff-card" d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}>
              <span className="num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SituationWhyUsSection({
  data,
  alt,
}: {
  data: NonNullable<SituationFullContent["whyUs"]>;
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <div className="situation-why-grid">
          <div>
            <SituationSectionHead
              eyebrow={data.eyebrow}
              title={<SectionTitle lead={data.titleLead} em={data.titleEm} tail={data.titleTail} />}
              lede={data.lede}
            />
            <ul className="situation-why-list">
              {data.items.map((item) => (
                <li key={item.title}>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {data.asideTitle ? (
            <Reveal d={1} className="situation-aside-cta">
              <h3>{data.asideTitle}</h3>
              <p>{data.asideBody}</p>
              <a href={SITE.phoneHref} className="phone">
                {SITE.phone}
              </a>
              <Link href="#offer" className="btn btn--cta" style={{ marginTop: 16, width: "100%", justifyContent: "center" }}>
                Request my offer
                <Arr />
              </Link>
            </Reveal>
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
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
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

    case "process":
      return content.process ? (
        <ProcessSection
          key={id}
          eyebrow={content.process.eyebrow}
          title={titleToParts(content.process)}
          lede={content.process.lede}
          steps={content.process.steps}
          showStepMeta={false}
          primaryCta={{ label: content.process.primaryCta ?? "Start with a free offer", href: "#offer" }}
          secondaryCta={{ label: `Call ${SITE.phone}`, href: SITE.phoneHref }}
        />
      ) : null;

    case "prose":
      return content.prose ? <SituationProseSection key={id} data={content.prose} alt={alt} /> : null;

    case "cards":
      return content.cards ? (
        <CitySituationsSection
          key={id}
          alt={alt}
          eyebrow={content.cards.eyebrow}
          title={titleToParts(content.cards)}
          lede={content.cards.lede ?? ""}
          items={content.cards.items.map((item) => ({
            icon: item.icon ?? "•",
            title: item.title,
            body: item.body,
          }))}
        />
      ) : null;

    case "areas":
      return content.areas ? (
        <AreasSection
          key={id}
          eyebrow={content.areas.eyebrow}
          title={titleToParts(content.areas)}
          lede={content.areas.lede}
        />
      ) : null;

    case "testimonials":
      return content.testimonials ? (
        <TestimonialsSection
          key={id}
          className={alt ? "section-alt" : ""}
          eyebrow={content.testimonials.eyebrow}
          title={titleToParts(content.testimonials)}
          lede={content.testimonials.lede}
          items={content.testimonials.items}
          showGoogleLink={false}
        />
      ) : null;

    case "situations":
      return content.situations ? (
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
      ) : null;

    case "market":
      return content.market ? (
        <MarketSection
          key={id}
          eyebrow={content.market.eyebrow}
          title={titleToParts(content.market)}
          lede={content.market.lede}
          factors={content.market.factors.map((f, i) => ({
            letter: String.fromCharCode(65 + i),
            title: f.title,
            body: f.body,
          }))}
        />
      ) : null;

    case "guarantee":
      return content.guarantee ? (
        <GuaranteeSection
          key={id}
          eyebrow={content.guarantee.eyebrow}
          title={titleToParts(content.guarantee)}
          lede={content.guarantee.lede}
          items={content.guarantee.items}
          asideTitle={content.guarantee.asideTitle}
          asideBody={content.guarantee.asideBody}
        />
      ) : null;

    case "comparison":
      return content.comparison ? (
        <CityCompareSection
          key={id}
          alt={alt}
          eyebrow={content.comparison.eyebrow}
          title={titleToParts(content.comparison)}
          lede={content.comparison.lede ?? ""}
          traditionalLabel={content.comparison.traditionalLabel}
          cashLabel={content.comparison.cashLabel}
          rows={content.comparison.rows}
        />
      ) : null;

    case "infoBlocks":
      return content.infoBlocks ? (
        <SituationInfoBlocksSection key={id} blocks={content.infoBlocks} alt={alt} />
      ) : null;

    case "diff":
      return content.diff ? <SituationDiffSection key={id} data={content.diff} alt={alt} /> : null;

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
          showFullLink={false}
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
        />
      );

    default:
      return null;
  }
}
