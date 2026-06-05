import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { SituationFullContent } from "@/lib/situation-types";

type Props = {
  data: NonNullable<SituationFullContent["cards"]>;
  alt?: boolean;
};

export function SituationPillCardsSection({ data, alt }: Props) {
  return (
    <section className={`section situation-divorce-children${alt ? " section-alt" : ""}`}>
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

        <div className="situation-divorce-children__grid">
          {data.items.map((item, i) => {
            const pill = item.label;

            return (
              <Reveal
                key={item.title}
                as="article"
                className="situation-divorce-children__card"
                d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
              >
                {pill ? <span className="situation-divorce-children__pill">{pill}</span> : null}
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
