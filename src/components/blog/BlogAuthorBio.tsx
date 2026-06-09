import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { ABOUT_PAGE } from "@/lib/about-content";

export function BlogAuthorBio({ post }: { post: BlogPost }) {
  return (
    <aside className="author-bio">
      <div className="av" aria-hidden="true">
        {post.authorInitials}
      </div>
      <div className="meta">
        <b>{post.author}</b>
        <span className="role">{post.authorRole} · We Buy St Pete Houses</span>
        <p>
          John is the Co-Founder and Head of Acquisitions of a St. Petersburg-based real estate investment
          company, where he has led property acquisitions and deal structuring across the Greater Tampa Bay
          area since 2020. His work centers on sourcing and structuring off-market property opportunities and
          guiding homeowners through fast, as-is sales.
        </p>
        <div className="links">
          <a href={ABOUT_PAGE.founder.linkedIn} rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Request an offer</Link>
        </div>
      </div>
    </aside>
  );
}
