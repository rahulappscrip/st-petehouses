import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Arr } from "@/components/ui/Arr";
import { SITE } from "@/lib/constants";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
};

export function CityContactSection({ eyebrow, title, lede }: Props) {
  return (
    <section className="section section-alt">
      <div className="wrap">
        <div className="situation-grid">
          <Reveal className="situation-body">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h-2">{title}</h2>
            <p>{lede}</p>
            <ul className="situation-benefits" style={{ marginTop: 24 }}>
              <li>
                <strong>Phone:</strong>{" "}
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <strong>Online:</strong>{" "}
                <Link href={SITE.cashOfferHref}>Submit our simple online form</Link>
              </li>
            </ul>
          </Reveal>

          <aside className="situation-aside">
            <span className="situation-aside__eyebrow">Start your offer now</span>
            <h2>Takes less than 2 minutes.</h2>
            <p>No commitment required. We respond within 24 hours.</p>
            <div className="situation-aside__actions">
              <Link href="#offer" className="btn btn--cta">
                Get my cash offer
                <Arr />
              </Link>
              <a href={SITE.phoneHref} className="btn btn--ghost">
                Call {SITE.phone}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
