import Link from "next/link";
import { BlogAuthorBio } from "@/components/blog/BlogAuthorBio";
import type { BlogPost } from "@/lib/blog";

export function PlaceholderBlogArticle({ post }: { post: BlogPost }) {
  return (
    <>
      <section id="intro">
        <p className="lede">{post.excerpt}</p>
        <p>
          This is a demonstration article on the We Buy St Pete Houses blog. The full guide is coming soon — in the
          meantime, here&apos;s a preview of the topics we&apos;ll cover for Tampa Bay sellers.
        </p>
        <div className="disclaimer">
          <p>
            <strong>Demo content.</strong> This article uses placeholder copy for layout preview. Contact our team for
            personalized guidance on your situation.
          </p>
        </div>
      </section>

      <section id="overview">
        <h2>What this guide will cover.</h2>
        <p>
          We write these articles for Florida homeowners who want straight answers — not sales pressure. This
          preview outlines the key questions we&apos;ll address when the full version publishes.
        </p>
        <ul>
          <li>How the process works in Pinellas County and the wider Tampa Bay market</li>
          <li>What documents and timelines to expect before closing</li>
          <li>When a cash sale makes sense versus listing with an agent</li>
          <li>Common mistakes sellers make — and how to avoid them</li>
        </ul>
      </section>

      <section id="takeaways">
        <h2>
          Key takeaways for <em>Tampa Bay</em> sellers.
        </h2>
        <div className="pull">
          <p>
            Every situation is different, but speed, certainty, and net proceeds are the three levers that matter
            most when you&apos;re deciding how to sell.
          </p>
        </div>
        <p>
          Whether you&apos;re dealing with tenants, deferred maintenance, or a tight timeline, a local cash buyer can
          often close on your schedule with fewer contingencies than a traditional listing. The trade-off is
          typically a lower headline price in exchange for less hassle and faster certainty.
        </p>
        <p>
          Ready to talk through your property?{" "}
          <Link href="/contact">Request a no-obligation cash offer</Link> — we respond within 24 hours.
        </p>
      </section>

      <BlogAuthorBio post={post} />
    </>
  );
}
