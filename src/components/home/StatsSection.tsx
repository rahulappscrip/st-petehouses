import { Reveal } from "@/components/ui/Reveal";
import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="stats" aria-label="Key facts">
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              as="div"
              d={i > 0 ? (i as 1 | 2 | 3) : undefined}
              className="stat"
            >
              <b>
                {stat.value}
                {"suffix" in stat && stat.suffix ? <em>{stat.suffix}</em> : null}
              </b>
              <span>{stat.label}</span>
              <p className="sub">{stat.sub}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
