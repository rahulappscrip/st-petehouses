import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Demo Page (Temporary)",
  description: "Internal demo page for layout and content experiments.",
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p
            className="eyebrow"
            style={{
              display: "inline-flex",
              padding: "10px 14px",
              borderRadius: 8,
              background: "color-mix(in oklab, var(--sun) 22%, var(--paper))",
              border: "1px solid color-mix(in oklab, var(--sun) 45%, transparent)",
            }}
          >
            Temporary demo — safe to delete
          </p>
          <div className="section-head" style={{ marginTop: 24 }}>
            <h1 className="h-2">
              Demo page for <em>quick experiments</em>
            </h1>
            <p className="lede">
              Use this route to preview layouts, copy, or components before they go live. This page
              is not linked in navigation and is excluded from search indexing.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Sample block</p>
            <h2 className="h-2">What you might test here</h2>
            <p className="lede">
              Drop in a new hero, form, chart, or marketing section. When you are done, remove{" "}
              <code>src/app/demo/</code>.
            </p>
          </div>

          <div className="factor-list" style={{ marginTop: 32 }}>
            <div className="factor">
              <span className="pre">1</span>
              <div>
                <h3>Layout checks</h3>
                <p>
                  Verify spacing, typography, and responsive behavior against the live header and
                  footer.
                </p>
              </div>
            </div>
            <div className="factor">
              <span className="pre">2</span>
              <div>
                <h3>Content drafts</h3>
                <p>
                  Paste placeholder copy for city pages, situation pages, or landing page variants
                  before wiring into CMS or content files.
                </p>
              </div>
            </div>
            <div className="factor">
              <span className="pre">3</span>
              <div>
                <h3>Component previews</h3>
                <p>
                  Render a single section in isolation — for example a market chart, testimonial
                  row, or CTA card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Placeholder CTA</p>
            <h2 className="h-2">Ready to go back to the real site?</h2>
            <p className="lede">
              This is dummy content only. Replace or delete this page when experiments are
              complete.
            </p>
          </div>
          <p style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link href="/" className="btn btn--cta">
              Back to homepage
            </Link>
            <a href={SITE.phoneHref} className="btn btn--ghost">
              Call {SITE.phone}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
