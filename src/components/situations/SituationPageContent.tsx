import { SituationHeroSection } from "@/components/situations/SituationHeroSection";
import { renderSituationSection } from "@/components/situations/SituationSections";
import type { SituationFullContent } from "@/lib/situation-types";

type Props = {
  content: SituationFullContent;
};

export function SituationPageContent({ content }: Props) {
  return (
    <div className={`situation-page situation-page--${content.pageKey}`}>
      <SituationHeroSection
        breadcrumb={content.breadcrumb}
        hero={content.hero}
        situationSlug={content.pageKey}
      />

      {content.hero.keySteps && !content.process?.keySteps ? (
        <section className="situation-key-steps" aria-label="What to do right now">
          <div className="wrap">
            <h2 className="h-3">{content.hero.keySteps.title}</h2>
            <ul>
              {content.hero.keySteps.items.map((item) => (
                <li key={item} className="body-standard">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {content.sectionOrder.map((sectionId, index) =>
        renderSituationSection(sectionId, content, index % 2 === 1),
      )}
    </div>
  );
}
