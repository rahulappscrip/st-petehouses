import { Reveal } from "@/components/ui/Reveal";
import { STATS } from "@/lib/constants";

type StatItem = {
  value: string;
  suffix?: string;
  label: string;
  sub?: string;
  href?: string;
};

type StatsSectionProps = {
  stats?: readonly StatItem[];
  className?: string;
};

function StatValue({ stat }: { stat: StatItem }) {
  const content = (
    <>
      {stat.value}
      {stat.suffix ? <em>{stat.suffix}</em> : null}
    </>
  );

  if (stat.href) {
    return (
      <a href={stat.href} className="stat__link">
        {content}
      </a>
    );
  }

  return content;
}

export function StatsSection({ stats = STATS, className = "" }: StatsSectionProps) {
  const gridClass =
    stats.length === 3 ? "stats-grid stats-grid--3" : "stats-grid";

  return (
    <section
      className={`stats${className ? ` ${className}` : ""}`}
      aria-label="Key facts"
    >
      <div className="wrap">
        <div className={gridClass}>
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              as="div"
              d={i > 0 ? (i as 1 | 2 | 3) : undefined}
              className="stat"
            >
              <b>
                <StatValue stat={stat} />
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
