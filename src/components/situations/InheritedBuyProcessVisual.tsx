import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { SituationFullContent } from "@/lib/situation-types";
import { INHERITED_BUY_PROCESS_FEATURES, INHERITED_BUY_STEP_SVG } from "@/lib/constants";
import { INHERITED_BUY_FEATURE_ICONS } from "@/components/situations/InheritedBuyProcessIcons";

type Props = {
  data: NonNullable<SituationFullContent["buyProcess"]>;
  alt?: boolean;
};

export function InheritedBuyProcessVisual({ data, alt }: Props) {
  return (
    <section className={`section situation-inherited-buy${alt ? " section-alt" : ""}`} id="buyProcess">
      <div className="wrap">
        <SectionHead
          eyebrow={data.eyebrow}
          title={
            <>
              {data.titleLead}
              <em>{data.titleEm}</em>
              {data.titleTail}
            </>
          }
          lede={data.lede}
        />

        <div className="situation-inherited-buy__cards">
          {data.features.map((item, i) => {
            const media = INHERITED_BUY_PROCESS_FEATURES[item.title];
            const iconKey = item.icon ?? media?.iconKey;
            const featureIcon = iconKey ? INHERITED_BUY_FEATURE_ICONS[iconKey] : null;

            return (
              <Reveal
                key={item.title}
                className="situation-inherited-buy__card"
                d={i > 0 ? ((i % 4) as 1 | 2 | 3) : undefined}
              >
                <div className="situation-inherited-buy__card-media">
                  <div className="situation-inherited-buy__card-img-wrap">
                    {media?.image ? (
                      <Image
                        src={media.image}
                        alt={media.imageAlt}
                        width={640}
                        height={480}
                        sizes="(min-width: 1080px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="situation-inherited-buy__card-img"
                      />
                    ) : null}
                  </div>
                  {featureIcon ? (
                    <span className="situation-inherited-buy__card-badge">{featureIcon}</span>
                  ) : null}
                </div>
                <h3 className="situation-inherited-buy__card-title">{item.title}</h3>
                <p className="situation-inherited-buy__card-text">{item.body}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="situation-inherited-buy__timeline">
          <h3 className="situation-inherited-buy__timeline-title">{data.stepsTitle}</h3>
          <ol className="situation-inherited-buy__steps">
            {data.steps.map((step) => {
              const stepIcon = step.icon ? INHERITED_BUY_STEP_SVG[step.icon] : undefined;

              return (
                <li key={step.num} className="situation-inherited-buy__step">
                  {stepIcon ? (
                    <span className="situation-inherited-buy__step-icon situation-inherited-buy__step-icon--svg">
                      <Image
                        src={stepIcon.src}
                        alt={stepIcon.alt}
                        width={60}
                        height={60}
                        className="situation-inherited-buy__step-icon-img"
                      />
                    </span>
                  ) : null}
                  <h4 className="situation-inherited-buy__step-title">{step.title}</h4>
                  <p className="situation-inherited-buy__step-text">
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
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
