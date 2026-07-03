import Link from "next/link";
import { SITE, TOPBAR } from "@/lib/constants";
import type { TestimonialsData } from "@/lib/reviews/types";

type TopBarProps = {
  testimonials: TestimonialsData;
};

export function TopBar({ testimonials }: TopBarProps) {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="topbar-l">
          <span>
            <span className="stars">★★★★★</span>
            {testimonials.rating}
          </span>
        </div>
        <div className="topbar-r">
          <a href={SITE.phoneHref} className="topbar-phone topbar-hide-mobile">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M22 16v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 3.2 2 2 0 0 1 4 1h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 8.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16z" />
            </svg>
            {SITE.phone}
          </a>
          <span className="sep topbar-hide-mobile" />
          <Link href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</Link>
        </div>
      </div>
    </div>
  );
}
