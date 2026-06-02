import Link from "next/link";
import { SITE } from "@/lib/constants";

type ReadyToSellCardProps = {
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function ReadyToSellCard({
  className,
  eyebrow = "Ready to sell?",
  title = "Get a no-obligation cash offer.",
  description = "Tell us about your property. Offer in 24 hours, close in as little as 7 days.",
  primaryLabel = "Get my cash offer →",
  primaryHref = "/get-cash-offer",
}: ReadyToSellCardProps) {
  return (
    <aside className={className ? `about-cta-card ${className}` : "about-cta-card"}>
      <span className="about-cta-card__eyebrow">{eyebrow}</span>
      <h2 className="about-cta-card__title">{title}</h2>
      <p className="about-cta-card__text">{description}</p>

      <div className="about-cta-card__actions">
        <Link href={primaryHref} className="btn btn--cta about-cta-card__btn">
          {primaryLabel}
        </Link>
        <a href={SITE.phoneHref} className="btn btn--ghost about-cta-card__btn">
          📞 {SITE.phone}
        </a>
      </div>
    </aside>
  );
}
