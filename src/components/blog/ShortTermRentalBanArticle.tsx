import { SiteImage } from "@/components/ui/SiteImage";
import { BlogAuthorBio } from "@/components/blog/BlogAuthorBio";
import type { BlogPost } from "@/lib/blog";

const STR_BLOG_IMAGE = "/assets/images";

export function ShortTermRentalBanArticle({ post }: { post: BlogPost }) {
  return (
    <>
      <section id="intro">
        <p className="lede">
          If you&apos;ve been searching about the Short Term Rental Ban in St. Petersburg, FL, here&apos;s the
          plain-language answer: St. Petersburg has not enacted a blanket ban on all short-term rental activity —
          but it has put in place a layered set of rules that heavily condition what&apos;s allowed, where, and
          under what licensing and tax obligations.
        </p>
        <p>
          What you can do on your property depends on your zoning, whether you&apos;re renting a whole unit or a room
          in your own home, and whether you&apos;ve met state-level licensing and tax requirements.
        </p>
        <p>
          This guide covers the key rules, the 30-day minimum discussion, enforcement risks, and a quick checklist
          to assess your own property today.
        </p>
        <div className="disclaimer">
          <p>
            <strong>This is an educational overview, not legal advice.</strong> Always verify current details with
            official city, county, and state resources for your specific address, and consult a qualified attorney
            for case-specific guidance.
          </p>
        </div>
      </section>

      <section id="what-is">
        <h2>
          What is the Short-Term Rental &quot;Ban&quot; in <em>St. Petersburg, FL?</em>
        </h2>
        <p>
          &quot;Short-term rental ban&quot; is a shorthand that gets used loosely. In reality, it refers to a
          collection of local rules — zoning overlays, licensing requirements, and use restrictions — that limit or
          condition stays below a certain length. It is not a single ordinance that makes all STR activity illegal
          in St. Petersburg.
        </p>
        <p>Understanding the rules requires knowing which layer of government you&apos;re dealing with:</p>
        <ul>
          <li>
            <strong>City of St. Petersburg</strong> sets its own zoning, land use, and code enforcement rules within
            city limits.
          </li>
          <li>
            <strong>Unincorporated Pinellas County</strong> operates under a separate regulatory framework for areas
            outside city boundaries.
          </li>
          <li>
            <strong>State of Florida</strong> layers on DBPR licensing and transient rental tax obligations that
            apply regardless of local rules.
          </li>
        </ul>

        <div className="glossary">
          <span className="lab">Key distinction</span>
          <p>
            <strong>What&apos;s allowed depends on your zoning designation</strong>, whether you&apos;re operating a
            whole-home rental or renting rooms within your own residence, and whether you&apos;ve obtained the right
            permits at each level of government. A single address search on the city&apos;s planning portal is the
            only reliable starting point.
          </p>
        </div>

        <p>
          As a concrete example: in unincorporated Pinellas County (not the City of St. Petersburg), Short-Term
          Rentals require a Short-Term Rental Certificate of Use under Ordinance No. 16-52. That applies outside city
          limits only — but it illustrates how jurisdiction-specific these rules are. Confirm your exact address and
          zoning with the city before drawing any conclusions.
        </p>

        <figure className="figure">
          <SiteImage
            src={`${STR_BLOG_IMAGE}/first-photo.webp`}
            alt="Illustration of layered government regulation — city, county, and state levels that govern short-term rental rules in St. Petersburg, Florida."
            title="City, county, and state STR rules that apply in St. Petersburg"
            width={900}
            height={506}
            sizes="(max-width: 1100px) 100vw, 900px"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>
            <b>Three regulatory layers.</b> City of St. Pete, Pinellas County, and Florida state rules can all apply
            simultaneously — with different requirements at each level.
          </figcaption>
        </figure>
      </section>

      <section id="30-day-rule">
        <h2>
          The 30-Day Minimum Rule and <em>Key Exceptions</em>
        </h2>
        <p>
          The &quot;30-day minimum&quot; is commonly referenced in STR conversations around St. Petersburg, but
          it&apos;s important to understand where it actually comes from.
        </p>
        <p>
          At the state level, Florida defines a transient rental as accommodations rented for six months or less, and
          Florida imposes a 6% state sales tax on all transient rentals — with counties authorized to add local taxes
          on top.
        </p>
        <p>
          Many Florida cities use a 30-day threshold to draw the line between transient and longer-term tenancies, but
          the City of St. Petersburg&apos;s specific conditions should be verified directly in current city code — not
          assumed based on general Florida practice.
        </p>
        <p>
          The <strong>owner-occupied vs. non-owner-occupied</strong> distinction also matters significantly:
        </p>
        <ul>
          <li>
            <strong>Whole-home rentals</strong> where you don&apos;t live on-site are more likely to trigger DBPR
            public lodging licensing requirements under Chapter 509.
          </li>
          <li>
            <strong>Owner-occupied room rentals</strong> — renting a room within your primary residence — may not
            constitute a public lodging establishment and may not require a DBPR vacation rental license, depending on
            structure and occupancy.
          </li>
        </ul>

        <div className="pull">
          <p>
            The 30-day threshold is often misunderstood. Where it comes from — and which level of government set it —
            determines how it applies to your property.
          </p>
        </div>
      </section>

      <section id="enforcement">
        <h2>
          Enforcement, Penalties, and <em>Fines for STR Violations</em>
        </h2>
        <p>
          Operating outside the rules isn&apos;t theoretical — enforcement is real and consequences compound quickly.
          Non-compliance can trigger simultaneous city fines, state tax liability, and state licensing enforcement.
          This is not a situation where you want to &quot;wait and see.&quot;
        </p>

        <div className="warning">
          <span className="lab">⚠ Enforcement risk</span>
          <p>
            Three separate enforcement mechanisms can fire at once: city code enforcement, Florida DOR tax penalties,
            and DBPR licensing violations. Each runs on its own timeline and can accumulate independently.
          </p>
        </div>

        <h3>City-level enforcement</h3>
        <p>
          City-level enforcement typically starts with a neighbor complaint, followed by a code enforcement
          inspection. Confirmed violations can result in citations and daily fines that escalate for repeat
          offenders. Review current fine schedules directly on the official city or county site —{" "}
          <a
            href="https://www.stpete.org/government/city_departments/neighborhood_affairs/code_enforcement/index.php"
            rel="noopener noreferrer"
            target="_blank"
          >
            St. Petersburg Code Enforcement Division →
          </a>
        </p>

        <h3>State tax enforcement</h3>
        <p>
          Florida requires a 6% state sales tax on transient rentals, and counties may add local option taxes. If
          you&apos;ve collected rent on short stays without remitting these taxes, the Florida Department of Revenue
          can pursue back taxes, interest, and penalties. Register and remit before your first booking — not
          retroactively when you get caught.
        </p>

        <h3>DBPR licensing enforcement</h3>
        <p>
          Operating a vacation rental classified as a public lodging establishment without the required DBPR license is
          a state-level violation. The Division of Hotels and Restaurants can act against unlicensed operations. If
          your property meets the definition under{" "}
          <a
            href="https://www.flsenate.gov/Laws/Statutes/2023/Chapter509"
            rel="noopener noreferrer"
            target="_blank"
          >
            Florida Statute Chapter 509
          </a>
          , a license is required before you take your first booking.
        </p>

        <figure className="figure">
          <SiteImage
            src={`${STR_BLOG_IMAGE}/second-photo.webp`}
            alt="A formal notice document representing a code enforcement violation notice for a short-term rental property in St. Petersburg."
            title="Code enforcement violation notice for a St. Petersburg short-term rental"
            width={900}
            height={506}
            sizes="(max-width: 1100px) 100vw, 900px"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>
            <b>Enforcement is real.</b> Code violations, unpaid transient taxes, and unlicensed DBPR operations can
            each generate independent fines and penalties.
          </figcaption>
        </figure>
      </section>

      <section id="investor-strategy">
        <h2>
          How St. Pete&apos;s STR Rules Shape <em>Investor Strategy</em>
        </h2>
        <p>
          Tighter STR rules reshape the economics of holding rental property. When nightly rentals are restricted,
          investors face a real strategic decision — and the window to act before fines or enforcement accumulate is
          often narrower than expected.
        </p>
        <p>The three most common pivots we see:</p>
        <ul>
          <li>
            <strong>Mid-term furnished rentals (30+ day stays)</strong> — Targets traveling nurses, corporate
            relocations, and snowbirds. Can preserve solid cash flow while staying outside the strictest STR rules.
          </li>
          <li>
            <strong>Traditional 12-month leases</strong> — Falls outside transient tax and DBPR licensing requirements.
            Lower monthly income but minimal compliance risk and simpler management.
          </li>
          <li>
            <strong>Selling the property</strong> — Eliminates ongoing regulatory exposure entirely. The right move
            when the investment no longer serves your goals at an acceptable return.
          </li>
        </ul>
        <p>
          The investors we see in the most difficult positions are those who underestimated compliance risk in their
          original deal model and are now squeezed on cash flow, code complaints, and tax exposure simultaneously. A
          2-unit property near downtown St. Pete generating strong Airbnb income can flip from profitable to
          problematic quickly if STR restrictions make that strategy non-compliant.
        </p>

        <div className="pull">
          <p>
            When the STR math stops working, the alternatives are pivot to mid-term, convert to annual, or sell.
            Waiting rarely improves the outcome.
          </p>
        </div>
      </section>

      <section id="compliance">
        <h2>
          Step-by-Step Compliance: How to Stay <em>Legal Under St. Pete STR Rules</em>
        </h2>

        <ol className="checklist">
          <li>
            <div>
              <b>Confirm your jurisdiction.</b>
              <p>
                Is your address within the City of St. Petersburg, unincorporated Pinellas County, or another city
                like St. Pete Beach? This single question determines which local rules apply — and they differ
                materially.
              </p>
            </div>
          </li>
          <li>
            <div>
              <b>Look up your zoning.</b>
              <p>
                Use the relevant city or county planning portal to search your exact address and confirm whether STR
                activity is permitted, conditional, or prohibited in your specific zone.
              </p>
            </div>
          </li>
          <li>
            <div>
              <b>Check for a local permit requirement.</b>
              <p>
                For example, unincorporated Pinellas County requires a Short-Term Rental Certificate of Use under
                Ordinance No. 16-52. Confirm whether your jurisdiction has an equivalent requirement.
              </p>
            </div>
          </li>
          <li>
            <div>
              <b>Determine DBPR licensing requirements.</b>
              <p>
                DBPR regulates vacation rentals under{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2023/Chapter509"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Chapter 509
                </a>
                . If your property qualifies as a public lodging establishment, apply for a Vacation Rental license
                through the Division of Hotels and Restaurants before operating.
              </p>
            </div>
          </li>
          <li>
            <div>
              <b>Check the owner-occupied exemption.</b>
              <p>
                DBPR guidance indicates that renting rooms within your owner-occupied home may not require a vacation
                rental license. Review the official guidance to confirm whether your situation qualifies — don&apos;t
                assume.
              </p>
            </div>
          </li>
          <li>
            <div>
              <b>Register for transient rental taxes.</b>
              <p>
                If your stays are six months or less, Florida&apos;s 6% state sales tax applies, plus any Pinellas
                County local option taxes. Register, collect, and remit before your first booking — not after your
                first complaint.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section id="licensing-taxes">
        <h2>
          Licensing, Permits, and Taxes: <em>Florida&apos;s State Requirements</em>
        </h2>
        <p>
          Beyond local rules, every STR operator in Florida faces a state-level compliance layer that exists regardless
          of what the city allows:
        </p>

        <h3>DBPR Vacation Rental Licensing</h3>
        <p>
          Florida&apos;s DBPR regulates vacation rentals as public lodging under{" "}
          <a
            href="https://www.flsenate.gov/Laws/Statutes/2023/Chapter509"
            rel="noopener noreferrer"
            target="_blank"
          >
            Chapter 509
          </a>
          . If your property meets the definition of a public lodging establishment, you need a license before
          operating. Verify current fee schedules on the DBPR website before applying — fees change periodically.
        </p>

        <h3>Transient Rental Taxes</h3>
        <p>
          Florida imposes a 6% state sales tax on all transient rentals (six months or less), and Pinellas County may
          add local option taxes on top. The DR-15TDT form lists county-by-county rates. This is the state-level
          baseline — local St. Petersburg or Pinellas County rules still apply on top.{" "}
          <a
            href="https://floridarevenue.com/taxes/taxesfees/Pages/doc_stamp.aspx"
            rel="noopener noreferrer"
            target="_blank"
          >
            Florida Department of Revenue — Transient Rentals →
          </a>
        </p>

        <figure className="figure">
          <SiteImage
            src={`${STR_BLOG_IMAGE}/Third-photo.webp`}
            alt="Florida state compliance documents and tax forms related to short-term rental licensing and transient rental tax registration."
            title="Florida STR licensing and transient rental tax registration documents"
            width={900}
            height={506}
            sizes="(max-width: 1100px) 100vw, 900px"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>
            <b>State compliance runs parallel to local rules.</b> DBPR licensing and Florida transient rental tax
            registration apply regardless of what the city permits.
          </figcaption>
        </figure>
      </section>

      <section id="alternatives">
        <h2>
          Alternatives If STR Is Restricted — <em>And When Selling Makes Sense</em>
        </h2>
        <p>
          If nightly rentals are off the table under current rules, you have practical alternatives. The right path
          depends on your property, your cash flow needs, and how much ongoing compliance overhead you want to manage.
        </p>
        <ul>
          <li>
            <strong>12-Month Traditional Leases</strong> — Falls outside transient tax and DBPR licensing requirements
            for true long-term tenancies. Lower monthly income but minimal compliance risk.
          </li>
          <li>
            <strong>Mid-Term Furnished Rentals (30+ Days)</strong> — Targets traveling nurses, snowbirds, and
            corporate stays. Generally avoids the strictest STR rules while preserving premium pricing over bare annual
            leases.
          </li>
          <li>
            <strong>Owner-Occupied Room Rentals</strong> — May not require a DBPR vacation rental license if you live
            on-site. Verify official DBPR guidance for your exact arrangement before proceeding.
          </li>
          <li>
            <strong>Selling the Property</strong> — Eliminates ongoing regulatory exposure entirely. The right move
            when the investment no longer serves your goals at an acceptable return, or when compliance risk outweighs
            income.
          </li>
        </ul>
        <div className="disclaimer">
          <p>
            <strong>Important:</strong> HOA and condo association rules can be stricter than local ordinances. Always
            check your governing documents — city-level approval does not override an HOA prohibition on short-term
            rentals.
          </p>
        </div>
      </section>

      <section id="jurisdictions">
        <h2>
          St. Petersburg vs. <em>Nearby Jurisdictions</em>
        </h2>
        <p>
          Rules differ materially by jurisdiction — what&apos;s allowed in unincorporated Pinellas County or St. Pete
          Beach may not be allowed in the City of St. Petersburg, and vice versa. Never use one jurisdiction&apos;s
          rules as a proxy for another&apos;s.
        </p>
        <ul>
          <li>
            <strong>Unincorporated Pinellas County:</strong> STRs require a Short-Term Rental Certificate of Use
            under Ordinance No. 16-52. This county-level requirement applies only outside incorporated city limits.
          </li>
          <li>
            <strong>St. Pete Beach:</strong> STRs are generally restricted for stays under 30 days in most residential
            zones. In RM zoning and the Pass-A-Grille Overlay District, limited exceptions exist — review the
            city&apos;s official STR documentation for current details.
          </li>
          <li>
            <strong>The City of St. Petersburg:</strong> City rules apply only within incorporated boundaries. Confirm
            current ordinance text and zoning conditions directly with the city. Do not use Pinellas County or St. Pete
            Beach rules as a proxy.
          </li>
        </ul>
        <p>
          If you operate across multiple jurisdictions, track and comply with each separately. State DBPR licensing and
          transient tax obligations apply everywhere.
        </p>
      </section>

      <div className="disclaimer">
        <p>
          <strong>This article is for informational and educational purposes only.</strong> It is not legal, tax, or
          financial advice. Regulations change — always verify current rules with the City of St. Petersburg, Pinellas
          County, the Florida DBPR, and the Florida Department of Revenue, and consult a qualified attorney or CPA
          for your specific situation.
        </p>
      </div>

      <BlogAuthorBio post={post} />
    </>
  );
}
