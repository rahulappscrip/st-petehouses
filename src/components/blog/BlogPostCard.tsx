import Link from "next/link";
import { SiteImage } from "@/components/ui/SiteImage";
import type { BlogPost } from "@/lib/blog";
import { getBlogHeroImageCopy, getBlogPostHref } from "@/lib/blog";

export function BlogPostCard({ post }: { post: BlogPost }) {
  const heroImage = post.heroImage ? getBlogHeroImageCopy(post) : null;

  return (
    <Link href={getBlogPostHref(post.slug)} className="post">
      <div className={`post-img${post.heroImage ? " post-img--photo" : ` tone-${post.imageTone}`}`}>
        {post.heroImage && heroImage ? (
          <SiteImage
            src={post.heroImage}
            alt={heroImage.alt}
            title={heroImage.title}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <>
            <span className="stripes" aria-hidden="true" />
            {post.imageGlyph ? (
              <span className="glyph" aria-hidden="true">
                {post.imageGlyph}
              </span>
            ) : null}
          </>
        )}
        <span className={post.tagVariant === "sun" ? "tag sun" : "tag"}>{post.categoryLabel}</span>
      </div>
      <div className="post-body">
        <h3>{post.listTitle ?? post.title}</h3>
        <p>{post.listExcerpt ?? post.excerpt}</p>
        <div className="post-meta">
          <span>{post.author}</span>
          <span className="dot" />
          <span>{post.dateDisplay}</span>
          <span className="dot" />
          <span className="read">Read →</span>
        </div>
      </div>
    </Link>
  );
}
