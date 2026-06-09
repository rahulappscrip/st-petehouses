import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { BlogToc } from "@/components/blog/BlogToc";
import { InheritedHomeArticle } from "@/components/blog/InheritedHomeArticle";
import { PlaceholderBlogArticle } from "@/components/blog/PlaceholderBlogArticle";
import { FaqSection } from "@/components/home/FaqSection";
import { Arr } from "@/components/ui/Arr";
import type { BlogPost } from "@/lib/blog";
import { DEFAULT_BLOG_NEXT_CTA } from "@/lib/blog";
import { SITE } from "@/lib/constants";

const ghostOnDarkStyle = {
  "--bg": "transparent",
  "--fg": "var(--paper)",
  "--bd": "color-mix(in oklab, var(--paper) 40%, transparent)",
} as CSSProperties;

function CrumbArrow() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function BlogNextCta({ post }: { post: BlogPost }) {
  const cta = post.nextCta ?? DEFAULT_BLOG_NEXT_CTA;

  return (
    <section className="next-cta">
      <div className="wrap">
        <div className="cta-card blog-next-cta-card">
          <div>
            <span className="blog-next-cta-card__eyebrow">{cta.eyebrow}</span>
            <h2>
              {cta.title.before}
              <em>{cta.title.emphasis}</em>
              {cta.title.after}
            </h2>
            <p>{cta.description}</p>
            <div className="actions">
              <Link href="/contact" className="btn btn--cta">
                Get my cash offer
                <Arr />
              </Link>
              {cta.secondaryCta ? (
                <Link href={cta.secondaryCta.href} className="btn" style={ghostOnDarkStyle}>
                  {cta.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
          <aside>
            <span className="lab">{cta.asideLabel}</span>
            <a href={SITE.phoneHref} className="num">
              {SITE.phone}
            </a>
            <ul>
              {cta.asideBullets.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function renderArticleBody(post: BlogPost) {
  if (post.slug === "how-to-price-an-inherited-home-in-florida") {
    return <InheritedHomeArticle post={post} />;
  }
  return <PlaceholderBlogArticle post={post} />;
}

function getDetailTitle(post: BlogPost): ReactNode {
  if (post.detailHeadline) {
    const { before, emphasis, after } = post.detailHeadline;
    return (
      <>
        {before}
        <em>{emphasis}</em>
        {after}
      </>
    );
  }
  return post.title;
}

export function BlogDetailContent({ post }: { post: BlogPost }) {
  const toc =
    post.toc ??
    (post.isPlaceholder
      ? [
          { id: "overview", label: "What this guide covers" },
          { id: "takeaways", label: "Key takeaways" },
        ]
      : []);

  const breadcrumbTitle =
    post.slug === "how-to-price-an-inherited-home-in-florida"
      ? "How to Price an Inherited Home in Florida"
      : post.title.length > 48
        ? `${post.title.slice(0, 48)}…`
        : post.title;

  return (
    <main className="blog-detail-page">
      <section className="article-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <CrumbArrow />
            <Link href="/blog">Blog</Link>
            <CrumbArrow />
            <span>{breadcrumbTitle}</span>
          </nav>

          {post.tags?.length ? (
            <div className="tag-row">
              {post.tags.map((tag, i) => (
                <span key={tag} className={i === 0 ? "tag sun" : "tag"}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <h1>{getDetailTitle(post)}</h1>
          <p className="lede">{post.excerpt}</p>

          <div className="article-meta">
            <span>Published {post.dateDisplay}</span>
            <span>{post.readTime}</span>
          </div>

          <div className="byline">
            <span className="av" aria-hidden="true">
              {post.authorInitials}
            </span>
            <span className="author">
              <b>By {post.author}</b>
              <span>
                {post.authorRole} · We Buy St Pete Houses
              </span>
            </span>
          </div>

          {post.heroImage ? (
            <figure className="hero-image">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt ?? post.title}
                fill
                sizes="(max-width: 1100px) 100vw, 1100px"
                priority
                style={{ objectFit: "cover" }}
              />
              {post.heroImageCaption ? <figcaption>{post.heroImageCaption}</figcaption> : null}
            </figure>
          ) : (
            <figure className="hero-image hero-image--placeholder" aria-hidden="true">
              <figcaption>[ IMAGE: article hero placeholder ]</figcaption>
            </figure>
          )}
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body">{renderArticleBody(post)}</article>
        {toc.length > 0 ? <BlogToc items={toc} /> : null}
      </div>

      {post.faq?.length ? (
        <FaqSection
          items={post.faq}
          className="faq-section"
          eyebrow="FAQ"
          title={
            <>
              Frequently asked <em>questions</em>.
            </>
          }
          includeSchema={false}
        />
      ) : null}

      <BlogNextCta post={post} />
    </main>
  );
}
