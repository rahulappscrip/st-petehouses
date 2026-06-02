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
            breadcrumbLabel="Get in touch"
            title="Get in touch."
            subtitle="Reach We Buy St Pete Houses - call, email, or fill out the form."
          >
            <p>
              Phone: <a href={SITE.phoneHref}>{SITE.phone}</a>. Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              {" "}PO Box 143, St. Petersburg, FL 33731. We answer in person during business hours and reply within one
              business day.
            </p>
          </PageIntroColumn>

          <LeadOfferForm />
        </div>
      </div>
    </section>
  );
}
