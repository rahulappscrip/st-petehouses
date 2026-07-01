import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { ABOUT_PAGE } from "@/lib/about-content";

const DEFAULT_AUTHOR = {
  name: "Benette Andrew",
  initials: "BA",
  role: "Co-Founder & Head of Acquisitions · We Buy St Pete Houses",
  bio: "Benette is the Co-Founder and Head of Acquisitions of a St. Petersburg-based real estate investment company, where she has led property acquisitions and deal structuring across the Greater Tampa Bay area since 2020. Her work centers on sourcing and structuring off-market property opportunities and guiding homeowners through fast, as-is sales.",
};

type BlogAuthorBioProps = {
  post?: Pick<
    BlogPost,
    "author" | "authorInitials" | "authorRole" | "authorCompany" | "authorBio" | "authorAvatar"
  >;
};

function resolveAuthorRole(post: BlogAuthorBioProps["post"]): string {
  const company = post?.authorCompany?.trim();
  if (company) return company;

  const role = post?.authorRole?.trim();
  if (role) return `${role} · We Buy St Pete Houses`;

  return DEFAULT_AUTHOR.role;
}

export function BlogAuthorBio({ post }: BlogAuthorBioProps = {}) {
  const name = post?.author?.trim() || DEFAULT_AUTHOR.name;
  const initials = post?.authorInitials?.trim() || DEFAULT_AUTHOR.initials;
  const role = resolveAuthorRole(post);
  const bio = post?.authorBio?.trim() || DEFAULT_AUTHOR.bio;
  const avatar = post?.authorAvatar?.trim();

  return (
    <aside className="author-bio">
      <div
        className="av"
        aria-hidden="true"
        style={avatar ? { backgroundImage: `url("${avatar}")` } : undefined}
      >
        {avatar ? "" : initials}
      </div>
      <div className="meta">
        <b>{name}</b>
        <span className="role">{role}</span>
        <p>{bio}</p>
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
