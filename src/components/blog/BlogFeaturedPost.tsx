import Link from "next/link";
import { SiteImage } from "@/components/ui/SiteImage";
import type { BlogPost } from "@/lib/blog";
import { getBlogHeroImageCopy, getBlogPostHref, resolveBlogAuthorAvatar } from "@/lib/blog";
import { PERSON_IMAGES } from "@/lib/image-accessibility";

export function BlogFeaturedPost({ post }: { post: BlogPost }) {
  const heroImage = post.heroImage ? getBlogHeroImageCopy(post) : null;

  return (
    <div className="featured">
      <Link
        href={getBlogPostHref(post.slug)}
        className="featured-img"
        aria-label={`Read featured article: ${post.title}`}
      >
        {post.heroImage && heroImage ? (
          <SiteImage
            src={post.heroImage}
            alt={heroImage.alt}
            title={heroImage.title}
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
              <SiteImage
                src={resolveBlogAuthorAvatar(post.authorAvatar)}
                alt={PERSON_IMAGES.johnByline.alt}
                title={PERSON_IMAGES.johnByline.title}
                width={28}
                height={28}
                className="av__img"
              />
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
