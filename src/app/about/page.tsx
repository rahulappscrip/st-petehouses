import type { Metadata } from "next";
import { LeadOfferForm } from "@/components/shared/LeadOfferForm";
import { PageIntroColumn } from "@/components/shared/PageIntroColumn";

export const metadata: Metadata = {
  title: "About Us · We Buy St Pete Houses",
  description: "A local Tampa Bay cash home buyer. Family-run, transparent, focused on fair offers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-page__bg" aria-hidden />

      <div className="wrap">
        <div className="about-page__grid">
          <PageIntroColumn
            breadcrumbLabel="About We Buy St Pete Houses"
            title={
              <>
                About We Buy <em>St Pete</em> Houses.
              </>
            }
            subtitle="A local Tampa Bay cash home buyer. Family-run, transparent, focused on fair offers."
          >
            <p>
              We started buying houses in St. Petersburg in 2014 because the traditional real-estate path
              doesn&apos;t fit every situation. After hundreds of closings across Pinellas, Hillsborough, and
              Manatee, we&apos;ve refined a process that puts the seller in control: clear written offers, no fees,
              and closing dates you choose. We&apos;re local, we answer the phone ourselves, and we treat every
              situation with discretion.
            </p>
          </PageIntroColumn>

          <LeadOfferForm />
        </div>
      </div>
    </section>
  );
}
