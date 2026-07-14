import Link from "next/link";
import { SiteImage } from "@/components/ui/SiteImage";
import type { BlogPost } from "@/lib/blog";
import { getBlogAuthorHref, resolveBlogAuthorAvatar } from "@/lib/blog";
import { PERSON_IMAGES } from "@/lib/image-accessibility";

const DEFAULT_AUTHOR = {
  name: "Bennett Andrews",
  initials: "BA",
  role: "Co-Founder & Head of Acquisitions · We Buy St Pete Houses",
  bio: "Benette is the Co-Founder and Head of Acquisitions of a St. Petersburg-based real estate investment company, where she has led property acquisitions and deal structuring across the Greater Tampa Bay area since 2020. Her work centers on sourcing and structuring off-market property opportunities and guiding homeowners through fast, as-is sales.",
};

type BlogAuthorBioProps = {
  post?: Pick<
    BlogPost,
    | "author"
    | "authorSlug"
    | "authorInitials"
    | "authorRole"
    | "authorCompany"
    | "authorBio"
    | "authorAvatar"
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
  const role = resolveAuthorRole(post);
  const bio = post?.authorBio?.trim() || DEFAULT_AUTHOR.bio;
  const avatar = resolveBlogAuthorAvatar(post?.authorAvatar);
  const authorHref = post?.authorSlug ? getBlogAuthorHref(post.authorSlug) : undefined;

  return (
    <aside className="author-bio">
      <div className="av" aria-hidden="true">
        <SiteImage
          src={avatar}
          alt={PERSON_IMAGES.johnByline.alt}
          title={PERSON_IMAGES.johnByline.title}
          width={96}
          height={96}
          className="av__img"
        />
      </div>
      <div className="meta">
        <b>
          {authorHref ? (
            <Link href={authorHref} className="author-link">
              {name}
            </Link>
          ) : (
            name
          )}
        </b>
        <span className="role">{role}</span>
        <p>{bio}</p>
        <div className="links">
          {authorHref ? <Link href={authorHref}>More from {name}</Link> : null}
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Request an offer</Link>
        </div>
      </div>
    </aside>
  );
}
