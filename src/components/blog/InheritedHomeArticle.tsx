import { SiteImage } from "@/components/ui/SiteImage";
import Link from "next/link";
import { BlogAuthorBio } from "@/components/blog/BlogAuthorBio";
import type { BlogPost } from "@/lib/blog";

export function InheritedHomeArticle({ post }: { post: BlogPost }) {
  return (
    <>
      <section id="intro">
        <p className="lede">
          If you&apos;ve recently inherited a home in Florida and you&apos;re trying to figure out what it&apos;s
          actually worth, you&apos;re in the right place. Pricing an inherited home in Florida comes down to three
          things: understanding where the property stands in probate, knowing your stepped-up tax basis so you can
          estimate the real financial outcome, and using recent local comparable sales — adjusted for the home&apos;s
          actual condition — to set a realistic price range.
        </p>
        <p>
          You also have a choice about how to sell: listing on the open market for potentially more money, or
          accepting a cash offer for speed and certainty. This guide walks through each piece of that framework in
          plain language.
        </p>
        <div className="disclaimer">
          <p>
            <strong>This is general information, not legal or tax advice.</strong> Every estate is different. Work
            with a Florida probate attorney or tax professional for guidance specific to your situation.
          </p>
        </div>
      </section>

      <section id="framework">
        <h2>What a Florida-specific pricing framework looks like.</h2>
        <p>
          A practical pricing framework for an inherited home in Florida starts with four questions: Where does the
          property stand in probate? What is the tax basis? What are comparable homes actually selling for nearby?
          And does speed or maximum price matter more to the heirs?
        </p>
        <div className="glossary">
          <span className="lab">Definition</span>
          <p>
            <strong>Florida-specific pricing framework for inherited homes:</strong> A structured approach that
            combines Florida probate status and expected timeline, the federal stepped-up tax basis, recent local
            comparable sales adjusted for condition, and the seller&apos;s priorities for speed versus top dollar.
          </p>
        </div>
        <p>
          The first step is clarifying probate status. Until the personal representative has legal authority to sell,
          the home can&apos;t close. Second, pin down the property&apos;s tax basis under{" "}
          <a href="https://www.irs.gov/publications/p551" rel="noopener noreferrer" target="_blank">
            IRS Publication 551
          </a>
          . Third, gather recent comparable sales in the same neighborhood and adjust for condition. Fourth, decide
          whether your priority is maximizing gross price through a traditional listing or gaining speed through an
          as-is cash sale.
        </p>
        <p>
          Florida does not impose a state estate tax or inheritance tax for decedents who died on or after January 1,
          2005. For more seller education resources, visit the{" "}
          <Link href="/blog">We Buy St Pete Houses blog</Link>.
        </p>
      </section>

      <section id="probate-timing">
        <h2>
          How probate timing affects your <em>price</em> and sale strategy.
        </h2>
        <p>
          Probate timing directly shapes pricing strategy because it determines how soon you can actually close a
          sale — and how much the estate will spend on carrying costs in the meantime. According to{" "}
          <a
            href="https://www.floridabar.org/public/consumer/pamphlet026/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Florida Bar probate guidance
          </a>
          , a simple, uncontested estate involves a 3-month creditor-claims period after notice, and many
          straightforward probates remain open for roughly 5–6 months.
        </p>
        <p>
          Those months matter financially. While the estate is open, someone is paying property insurance, property
          taxes, HOA dues, utilities, and basic maintenance. Every month the home sits unsold, the net proceeds
          shrink.
        </p>
        <div className="pull">
          <p>
            Every month an inherited home sits in probate without a pricing plan is a month of carrying costs quietly
            eating into the estate&apos;s bottom line.
          </p>
        </div>
      </section>

      <section id="factors">
        <h2>
          Key Florida-specific factors that affect <em>inherited home value</em>.
        </h2>
        <p>
          Florida is not a one-size-fits-all market, and several state-specific factors can move the needle on what
          an inherited home is actually worth.
        </p>
        <figure className="figure">
          <SiteImage
            src="https://pub-4ee5abe5561c4d33a588ca34bfa5d5a5.r2.dev/tools/6de59ddf-e9e4-4c87-a82b-918e0c30551f.jpg"
            alt="A quiet St. Petersburg, Florida neighborhood illustrating local context for inherited home pricing."
            title="St. Petersburg neighborhood context for pricing an inherited home"
            width={1200}
            height={675}
            sizes="(max-width: 1100px) 100vw, 1100px"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>
            <b>Local context matters.</b> A quiet St. Petersburg street — the same square-footage home can price
            very differently depending on neighborhood, flood zone, and condition.
          </figcaption>
        </figure>
        <p>
          <strong>Location: coastal vs. inland.</strong> Flood zone designations, hurricane exposure, and proximity to
          the coast all affect both buyer demand and insurance costs.
        </p>
        <p>
          <strong>Insurance realities.</strong> Florida&apos;s property insurance market is a major pricing factor.
          Older roofs or outdated systems can make a property difficult to insure at all.
        </p>
        <p>
          <strong>Age, condition, and deferred maintenance.</strong> Many inherited homes have sat with the same owner
          for decades. Buyers — especially those relying on financing — will discount for condition.
        </p>
        <div className="glossary">
          <span className="lab">Definition</span>
          <p>
            <strong>Probate-adjusted valuation:</strong> An estimate of an inherited property&apos;s realistic market
            value that accounts for Florida-specific risks — including storm exposure, insurance costs, HOA
            obligations, and code-compliance issues.
          </p>
        </div>
      </section>

      <section id="checklist">
        <h2>
          How to price an inherited home in Florida: a <em>5-step checklist</em>.
        </h2>
        <ol className="checklist">
          <li>
            <div>
              <b>Confirm title and probate status.</b>
              <p>
                Work with the personal representative and a Florida probate attorney to verify probate is open and
                authority to sell has been granted.
              </p>
            </div>
          </li>
          <li>
            <div>
              <b>Identify your tax basis.</b>
              <p>
                Under IRS Publication 551, inherited property generally has a basis equal to fair market value at
                the date of death. Talk to a tax professional to confirm your specific situation.
              </p>
            </div>
          </li>
          <li>
            <div>
              <b>Gather recent comparable sales.</b>
              <p>
                Pull sales of similar homes in the same neighborhood from the past three to six months. Adjust for
                differences in size, condition, and upgrades.
              </p>
            </div>
          </li>
          <li>
            <div>
              <b>Estimate closing, probate, and carrying costs.</b>
              <p>
                Add up what the estate will spend between now and closing: insurance, property taxes, HOA dues,
                utilities, and maintenance.
              </p>
            </div>
          </li>
          <li>
            <div>
              <b>Set a pricing range and choose your sale path.</b>
              <p>
                Based on your comps, condition, and carrying-cost timeline, set a realistic range. Then decide: list
                traditionally, sell as-is, or pursue a{" "}
                <Link href="/contact">fast cash offer</Link>.
              </p>
            </div>
          </li>
        </ol>
        <div className="pull">
          <p>
            Probate status + tax basis + honest comps + carrying costs = a realistic price range. That&apos;s the
            entire formula.
          </p>
        </div>
      </section>

      <section id="mistakes">
        <h2>Common pricing mistakes heirs make.</h2>
        <div className="mistakes">
          <div className="mit">
            <b>Overpricing based on emotional attachment.</b>
            <em>How to avoid it</em>
            <p>Anchor your expectations in recent comparable sales within the same neighborhood, not sentiment.</p>
          </div>
          <div className="mit">
            <b>Assuming the home can be sold immediately.</b>
            <em>How to avoid it</em>
            <p>Confirm probate status with a Florida probate attorney before you do anything else.</p>
          </div>
          <div className="mit">
            <b>Overlooking the stepped-up basis and tax consequences.</b>
            <em>How to avoid it</em>
            <p>Review the IRS basis overview or talk to your tax professional before setting a price.</p>
          </div>
          <div className="mit">
            <b>Underestimating carrying costs during probate.</b>
            <em>How to avoid it</em>
            <p>Calculate your monthly holding costs early and factor them into your pricing timeline.</p>
          </div>
          <div className="mit">
            <b>Using outdated or non-local comps.</b>
            <em>How to avoid it</em>
            <p>Use sales from the past three to six months in the same immediate area, adjusted for condition.</p>
          </div>
        </div>
      </section>

      <section id="cash-offers">
        <h2>
          Cash offers and <em>fast sale options</em> for inherited Florida homes.
        </h2>
        <p>
          A bona fide cash buyer can simplify an inherited home sale: fewer contingencies, no lender-required
          appraisal or repair demands, the ability to purchase as-is, and closing timelines that can align with
          probate milestones.
        </p>
        <ul>
          <li>
            <strong>Clear, written terms.</strong> The offer should spell out price, timeline, and conditions in
            writing.
          </li>
          <li>
            <strong>Proof of funds.</strong> A legitimate cash buyer will provide verification that funds are
            available.
          </li>
          <li>
            <strong>No surprise fees.</strong> Understand upfront who pays closing costs.
          </li>
          <li>
            <strong>Realistic closing timeline.</strong> The buyer should understand probate governs the timeline.
          </li>
        </ul>
        <p>
          In the Tampa Bay area, <Link href="/contact">We Buy St Pete Houses</Link> specializes in purchasing
          inherited and as-is properties for cash with flexible closing timelines.
        </p>
      </section>

      <section id="taxes">
        <h2>Tax basics when you sell an inherited home in Florida.</h2>
        <p>
          <strong>Florida state taxes.</strong> Florida does not impose a state estate tax or inheritance tax for
          decedents who died on or after January 1, 2005.
        </p>
        <div className="glossary">
          <span className="lab">Definition</span>
          <p>
            <strong>Stepped-up basis (inherited property):</strong> Under federal tax rules, inherited property
            generally receives a basis equal to its fair market value at the date of the decedent&apos;s death.
          </p>
        </div>
        <p>
          <strong>Federal capital gains.</strong> If you sell for more than the stepped-up basis, the difference may
          be subject to federal capital gains tax. Confirm your specific situation with a CPA or tax professional.
        </p>
        <div className="disclaimer">
          <p>
            <strong>This section is general information, not legal or tax advice.</strong> Consult a Florida probate
            attorney or CPA for personalized planning.
          </p>
        </div>
      </section>

      <section id="comps">
        <h2>
          Using comps and probate data to <em>estimate market value</em>.
        </h2>
        <figure className="figure">
          <SiteImage
            src="https://pub-4ee5abe5561c4d33a588ca34bfa5d5a5.r2.dev/tools/54095a2f-c838-438d-8869-6aefe8fe715b.jpg"
            alt="Infographic showing the Florida probate timeline and price-path guidance for inherited homes."
            title="Florida probate timeline and inherited home pricing paths"
            width={1200}
            height={675}
            sizes="(max-width: 1100px) 100vw, 1100px"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>
            <b>The probate timeline shapes price strategy.</b> A 3-month creditor period plus a ~5–6 month
            simple-estate window — every month of carrying cost is a real input to your pricing range.
          </figcaption>
        </figure>
        <p>
          Start by identifying recent sales of similar properties in the same neighborhood, sold within the past three
          to six months. Adjust for condition — inherited homes often come with deferred maintenance that recently
          sold comps may not share.
        </p>
        <p>
          Your stepped-up tax basis acts as a financial guardrail — if the net sale price is close to or below that
          basis, capital gains are minimal, and you can focus on getting a fair market return.
        </p>
      </section>

      <section id="adapt-national">
        <h2>
          Turning national checklists into a <em>Florida-ready</em> plan.
        </h2>
        <p>
          Most national checklists don&apos;t mention that Florida has no state inheritance or estate tax for recent
          decedents. They also tend to skip Florida&apos;s probate timeline and insurance realities.
        </p>
        <ul>
          <li>
            <strong>Check Florida probate rules first.</strong> Confirm whether probate has been opened before pricing
            decisions.
          </li>
          <li>
            <strong>Verify that tax information applies to Florida.</strong> Focus on federal stepped-up basis rules
            instead of state inheritance taxes that don&apos;t apply here.
          </li>
          <li>
            <strong>Factor in local insurance and HOA costs.</strong> These directly affect what buyers will pay.
          </li>
          <li>
            <strong>Cross-check example prices against recent local sales.</strong> National averages are meaningless
            for a specific Florida neighborhood.
          </li>
        </ul>
        <p>
          For more <Link href="/blog">Florida-focused seller resources</Link>, go beyond the first page of national
          search results.
        </p>
      </section>

      <BlogAuthorBio post={post} />
    </>
  );
}
