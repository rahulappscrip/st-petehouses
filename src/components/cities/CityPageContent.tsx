import { HeroSection } from "@/components/home/HeroSection";
import { SellerSituationsSection } from "@/components/home/SellerSituationsSection";
import { CityBenefitsSection } from "@/components/cities/CityBenefitsSection";
import { CityAfterAcceptSection } from "@/components/cities/CityAfterAcceptSection";
import { CityCompareSection } from "@/components/cities/CityCompareSection";
import { CityContactSection } from "@/components/cities/CityContactSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AreasSection } from "@/components/home/AreasSection";
import { MarketSection } from "@/components/home/MarketSection";
import { GuaranteeSection } from "@/components/home/GuaranteeSection";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import {
  buildCityTitleParts,
  getCityFullContent,
  type CityFullContent,
  type CitySectionId,
} from "@/lib/city-content";
import { notFound } from "next/navigation";
import { mapCityBenefitsToSellerCards, mapCitySituationsToSellerCards, SITE } from "@/lib/constants";
import type { CityPageData } from "@/lib/cities";

type Props = {
  page: CityPageData;
};

function SectionTitle({ lead, em, tail }: { lead: string; em: string; tail: string }) {
  return (
    <>
      {lead}
      <em>{em}</em>
      {tail}
    </>
  );
}

function renderCitySection(id: CitySectionId, content: CityFullContent, page: CityPageData, alt: boolean) {
  switch (id) {
    case "process":
      return (
        <ProcessSection
          key={id}
          eyebrow={content.process.eyebrow}
          title={
            <SectionTitle
              lead={content.process.titleLead}
              em={content.process.titleEm}
              tail={content.process.titleTail}
            />
          }
          lede={content.process.lede}
          steps={content.process.steps}
          showStepMeta={false}
          primaryCta={{ label: content.process.primaryCtaLabel, href: "#offer" }}
          secondaryCta={{ label: content.process.secondaryCtaLabel, href: SITE.phoneHref }}
        />
      );

    case "areas":
      return (
        <AreasSection
          key={id}
          eyebrow={content.areas.eyebrow}
          title={
            <SectionTitle lead={content.areas.titleLead} em={content.areas.titleEm} tail={content.areas.titleTail} />
          }
          lede={content.areas.lede}
          listHeading="Service area — cities"
          mapCity={page.cityName}
          featuredCityHref={`/${page.route}`}
        />
      );

    case "situations":
      return (
        <SellerSituationsSection
          key={id}
          eyebrow={content.situations.eyebrow}
          title={
            <SectionTitle
              lead={content.situations.titleLead}
              em={content.situations.titleEm}
              tail={content.situations.titleTail}
            />
          }
          lede={content.situations.lede}
          items={mapCitySituationsToSellerCards(content.situations.items)}
        />
      );

    case "testimonials":
      if (!content.testimonials) return null;
      return (
        <ReviewsSection
          key={id}
          eyebrow={content.testimonials.eyebrow}
          title={
            <SectionTitle
              lead={content.testimonials.titleLead}
              em={content.testimonials.titleEm}
              tail={content.testimonials.titleTail}
            />
          }
          lede={content.testimonials.lede}
          items={content.testimonials.items}
          showGoogleLink={false}
          showRatingBadge={false}
        />
      );

    case "market":
      if (!content.market) return null;
      return (
        <MarketSection
          key={id}
          eyebrow={content.market.eyebrow}
          title={
            <SectionTitle lead={content.market.titleLead} em={content.market.titleEm} tail={content.market.titleTail} />
          }
          lede={content.market.lede}
          factors={content.market.factors}
          chartImage={content.market.chartImage}
          chartImageAlt={content.market.chartImageAlt}
          showLocal={false}
          alt={alt}
        />
      );

    case "guarantee":
      if (!content.guarantee) return null;
      return (
        <GuaranteeSection
          key={id}
          eyebrow={content.guarantee.eyebrow}
          title={
            <SectionTitle
              lead={content.guarantee.titleLead}
              em={content.guarantee.titleEm}
              tail={content.guarantee.titleTail}
            />
          }
          lede={content.guarantee.intro ?? content.guarantee.lede}
          items={content.guarantee.items}
          asideTitle={content.guarantee.asideTitle}
          asideBody={content.guarantee.asideBody}
          asidePrimaryLabel="Request My Cash Offer"
          asideSecondaryLabel="Get my offer →"
        />
      );

    case "comparison":
      return (
        <CityCompareSection
          key={id}
          eyebrow={content.comparison.eyebrow}
          title={
            <SectionTitle
              lead={content.comparison.titleLead}
              em={content.comparison.titleEm}
              tail={content.comparison.titleTail}
            />
          }
          lede={content.comparison.lede}
          traditionalLabel={content.comparison.traditionalLabel}
          cashLabel={content.comparison.cashLabel}
          rows={content.comparison.rows}
          alt={alt}
        />
      );

    case "benefits":
      if (!content.benefits) return null;
      if (content.benefits.imageCardLayout) {
        return (
          <SellerSituationsSection
            key={id}
            sectionId="benefits"
            eyebrow={content.benefits.eyebrow}
            title={
              <SectionTitle
                lead={content.benefits.titleLead}
                em={content.benefits.titleEm}
                tail={content.benefits.titleTail}
              />
            }
            lede={content.benefits.lede}
            items={mapCityBenefitsToSellerCards(content.benefits.items)}
            linkable={false}
          />
        );
      }
      return (
        <CityBenefitsSection
          key={id}
          eyebrow={content.benefits.eyebrow}
          title={
            <SectionTitle
              lead={content.benefits.titleLead}
              em={content.benefits.titleEm}
              tail={content.benefits.titleTail}
            />
          }
          lede={content.benefits.lede}
          items={content.benefits.items}
        />
      );

    case "afterAccept":
      if (!content.afterAccept) return null;
      return (
        <CityAfterAcceptSection
          key={id}
          eyebrow={content.afterAccept.eyebrow}
          title={
            <SectionTitle
              lead={content.afterAccept.titleLead}
              em={content.afterAccept.titleEm}
              tail={content.afterAccept.titleTail}
            />
          }
          lede={content.afterAccept.lede}
          steps={content.afterAccept.steps}
          alt={alt}
        />
      );

    case "resources":
      if (!content.resources) return null;
      return (
        <ResourcesSection
          key={id}
          eyebrow={content.resources.eyebrow}
          title={
            <SectionTitle
              lead={content.resources.titleLead}
              em={content.resources.titleEm}
              tail={content.resources.titleTail}
            />
          }
          lede={content.resources.lede}
          resources={content.resources.items.map((item) => ({
            title: item.title,
            sub: item.sub,
            href: item.href,
          }))}
          showBeforeAfter={false}
          alt={alt}
        />
      );

    case "contact":
      if (!content.contact) return null;
      return (
        <CityContactSection
          key={id}
          eyebrow={content.contact.eyebrow}
          title={
            <SectionTitle lead={content.contact.titleLead} em={content.contact.titleEm} tail={content.contact.titleTail} />
          }
          lede={content.contact.lede}
        />
      );

    case "faq":
      return (
        <FaqSection
          key={id}
          className="city-faq"
          eyebrow={content.faq.eyebrow ?? "FAQ"}
          items={content.faq.items}
          title={
            <SectionTitle lead={content.faq.titleLead} em={content.faq.titleEm} tail={content.faq.titleTail} />
          }
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

function CityFullPageContent({ page, content }: Props & { content: CityFullContent }) {
  const titleParts = buildCityTitleParts(page.cityName);

  return (
    <>
      <HeroSection
        content={{
          title: (
            <>
              {titleParts.lead}
              <em>{titleParts.em}</em>
              {titleParts.tail}
            </>
          ),
          subheadline: content.heroSubheadline,
          formTitle: content.formTitle,
          formIntro: content.formIntro,
          addressPlaceholder: `123 Main St, ${page.cityName}, FL`,
        }}
      />

      <StatsSection />

      {content.sectionOrder.map((sectionId, i) => renderCitySection(sectionId, content, page, i % 2 === 1))}
    </>
  );
}

export function CityPageContent({ page }: Props) {
  const content = getCityFullContent(page.route);
  if (!content) notFound();
  return <CityFullPageContent page={page} content={content} />;
}
