import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { SituationStagesContent } from "@/lib/situation-types";

type Props = {
  data: SituationStagesContent;
  alt?: boolean;
  layout?: "grid" | "timeline";
};

export function StageCardsSection({ data, alt, layout = "grid" }: Props) {
  const title = (
    <>
      {data.titleLead}
      {data.titleEm ? <em>{data.titleEm}</em> : null}
      {data.titleTail}
    </>
  );

  const timeline = layout === "timeline";

  return (
    <section
      className={`section situation-stages${alt ? " section-alt" : ""}${timeline ? " situation-stages--timeline" : ""}`}
    >
      <div className="wrap">
        <SectionHead eyebrow={data.eyebrow} title={title} lede={data.lede} />
        {timeline ? (
          <div className="situation-stages__track">
            {data.items.map((item, i) => (
              <Reveal
                key={item.title}
                className="situation-stages__node"
                d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
              >
                <span
                  className={`situation-stages__dot${i < 3 ? " situation-stages__dot--active" : " situation-stages__dot--accent"}`}
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h3 className="h-4">{item.title}</h3>
                <p className="body-standard">{item.body}</p>
                <span className="situation-stages__timing">{item.label}</span>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="situation-stages__grid">
            {data.items.map((item, i) => (
              <Reveal
                key={item.title}
                className="situation-stages__card"
                d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
              >
                {item.label ? (
                  <span className="situation-stages__label">{item.label}</span>
                ) : null}
                <h3 className="h-3">{item.title}</h3>
                <p className="body-standard">{item.body}</p>
                {item.link ? (
                  <a
                    href={item.link.href}
                    className="situation-stages__link"
                    {...(item.link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.link.label}
                  </a>
                ) : null}
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
