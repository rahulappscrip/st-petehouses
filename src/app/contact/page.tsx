import type { Metadata } from "next";
import { LeadOfferForm } from "@/components/shared/LeadOfferForm";
import { PageIntroColumn } from "@/components/shared/PageIntroColumn";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us · We Buy St Pete Houses",
  description: "Contact We Buy St Pete Houses for a no-obligation cash offer in Tampa Bay.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="about-page">
      <div className="about-page__bg" aria-hidden />
      <div className="wrap">
        <div className="about-page__grid">
          <PageIntroColumn
            breadcrumbLabel="Contact Us"
            title="Contact We Buy St Pete Houses."
            subtitle="Reach us by phone or email and we&apos;ll respond quickly with clear next steps."
          >
            <p>
              We&apos;re a local Tampa Bay team, and we keep communication simple. Call, text, or email us with your
              property details and timing. You&apos;ll get straightforward answers, a no-pressure process, and an offer you
              can review on your schedule..
            </p>
            <p className="about-page__contact-line">
              <strong>Phone:</strong> <a href={SITE.phoneHref}>{SITE.phone}</a>
            </p>
            <p className="about-page__contact-line">
              <strong>Email:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </PageIntroColumn>

          <LeadOfferForm />
        </div>
      </div>
    </section>
  );
}
