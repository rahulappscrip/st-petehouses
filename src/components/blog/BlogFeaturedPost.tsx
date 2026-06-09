import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { getBlogPostHref } from "@/lib/blog";

export function BlogFeaturedPost({ post }: { post: BlogPost }) {
  return (
    <div className="featured">
      <Link
        href={getBlogPostHref(post.slug)}
        className="featured-img"
        aria-label={`Read featured article: ${post.title}`}
      >
        {post.heroImage ? (
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt ?? post.title}
            fill
            sizes="(max-width: 1100px) 100vw, 50vw"
            priority
            style={{ objectFit: "cover" }}
          />
        ) : (
          <>
            <span className="ph-stripes" aria-hidden="true" />
            <span className="label">
              {post.featuredImageLabel ?? "[ IMAGE: featured cover · St Pete bungalow ]"}
            </span>
          </>
        )}
      </Link>
      <div className="featured-body">
        {post.featuredTag ? <span className="featured-tag">{post.featuredTag}</span> : null}
        <h2>
          <Link href={getBlogPostHref(post.slug)}>{post.title}</Link>
        </h2>
        <p>{post.excerpt}</p>
        <div className="featured-meta">
          <span className="author-mini">
            <span className="av" aria-hidden="true">
              {post.authorInitials}
            </span>
            {post.author}
          </span>
          <span className="dot" />
          <span>{post.dateDisplay}</span>
          <span className="dot" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}
