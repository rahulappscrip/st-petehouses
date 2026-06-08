import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { MeetFounderSection } from "@/components/about/MeetFounderSection";
import { SituationHeroSection } from "@/components/situations/SituationHeroSection";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_HERO, ABOUT_PAGE, ABOUT_STATS } from "@/lib/about-content";

export function AboutPageContent() {
  const { mission, commitment, reviews, faq, cta } = ABOUT_PAGE;

  return (
    <div className="about-us-page">
      <SituationHeroSection breadcrumb={ABOUT_PAGE.hero.breadcrumb} hero={ABOUT_HERO} />
      <StatsSection stats={ABOUT_STATS} />

      <ProcessSection
        eyebrow=""
        title={
          <>
            {mission.titleLead}
            <em>{mission.titleEm}</em>
          </>
        }
        lede={mission.body}
        steps={mission.values.map((value, index) => ({
          num: String(index + 1).padStart(2, "0"),
          title: value.title,
          body: value.body,
        }))}
        showStepMeta={false}
        showCtas={false}
      />

      <MeetFounderSection />

      <section className="about-commitment section">
        <div className="wrap about-commitment__inner">
          <Reveal className="about-commitment__header">
            <h2 className="h-2">
              {commitment.titleLead}
              <em>{commitment.titleEm}</em>
            </h2>
            <p className="body-standard">{commitment.body}</p>
          </Reveal>

          <div className="about-commitment__grid">
            {commitment.items.map((item, i) => (
              <Reveal
                key={item.title}
                as="article"
                className="about-commitment__card"
                d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
              >
                <div className="about-commitment__num" aria-hidden>
                  {item.num}
                </div>
                <h3 className="h-4">{item.title}</h3>
                <p className="body-standard">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection
        className="section-alt about-reviews"
        eyebrow={reviews.eyebrow}
        title={
          <>
            {reviews.titleLead}
            <em>{reviews.titleEm}</em>
          </>
        }
        lede={reviews.lede}
        items={reviews.items}
        showRatingBadge={false}
        showGoogleLink
        googleLinkLabel={`${reviews.googleCta} →`}
      />

      <FaqSection
        eyebrow={faq.eyebrow}
        title={
          <>
            {faq.titleLead}
            <em>{faq.titleEm}</em>
          </>
        }
        items={faq.items}
        className="about-faq"
      />

      <FinalCtaSection
        eyebrow={cta.eyebrow}
        title={
          <>
            {cta.titleLead}
            <em>{cta.titleEm}</em>
          </>
        }
        description={cta.description}
        offerHref="/contact"
      />
    </div>
  );
}
