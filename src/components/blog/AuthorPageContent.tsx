"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { SiteImage } from "@/components/ui/SiteImage";
import { Reveal } from "@/components/ui/Reveal";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BLOG_LISTING_PAGE_SIZE, resolveBlogAuthorAvatar, type BlogPost } from "@/lib/blog";
import { SITE } from "@/lib/constants";
import type { BlogAuthorProfile } from "@/lib/wordpress";

type AuthorPageContentProps = {
  author: BlogAuthorProfile;
  posts: BlogPost[];
};

function CrumbArrow() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function splitAuthorName(name: string): { first: string; rest: string } {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length <= 1) return { first: name.trim(), rest: "" };
  return { first: parts[0], rest: parts.slice(1).join(" ") };
}

function bioParagraphs(bio?: string): string[] {
  if (!bio?.trim()) return [];
  return bio
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function AuthorPageContent({ author, posts }: AuthorPageContentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsRef = useRef<HTMLDivElement>(null);
  const avatar = resolveBlogAuthorAvatar(author.avatar);
  const { first: firstName, rest: lastName } = splitAuthorName(author.name);
  const paragraphs = bioParagraphs(author.bio);
  const companyTag = SITE.name;
  const totalPages = Math.max(1, Math.ceil(posts.length / BLOG_LISTING_PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedPosts = useMemo(() => {
    const start = (safePage - 1) * BLOG_LISTING_PAGE_SIZE;
    return posts.slice(start, start + BLOG_LISTING_PAGE_SIZE);
  }, [posts, safePage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    postsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const articleCount = posts.length;
  const articleWord = articleCount === 1 ? "Article" : "Articles";

  return (
    <main className="blog-page author-page">
      <section className="author-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <CrumbArrow />
            <Link href="/blog">Blog</Link>
            <CrumbArrow />
            <span>{author.name}</span>
          </nav>

          <div className="author-hero__banner">
            <div className="author-hero__media">
              <div className="author-hero__photo">
                <SiteImage
                  src={avatar}
                  alt={`Portrait of ${author.name}`}
                  title={author.name}
                  fill
                  sizes="(max-width: 720px) 200px, 260px"
                  className="author-hero__photo-img"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div className="author-hero__badge" aria-label={`${articleCount} ${articleWord.toLowerCase()} published`}>
                <strong>{articleCount}</strong>
                <span>
                  {articleWord}
                  <br />
                  published
                </span>
              </div>
            </div>

            <div className="author-hero__content">
              <div className="author-hero__topline">
                <span className="author-hero__label">Author profile</span>
                <span className="author-hero__company">{companyTag}</span>
              </div>

              <h1 className="author-hero__name">
                {firstName}
                {lastName ? (
                  <>
                    {" "}
                    <span>{lastName}</span>
                  </>
                ) : null}
              </h1>

              {paragraphs.length > 0 ? (
                <div className="author-hero__bio">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head" ref={postsRef}>
              <h2>
                Articles by <em>{author.name}</em>
              </h2>
              <Link href="/blog" className="btn btn--link">
                View all articles →
              </Link>
            </div>
          </Reveal>

          {paginatedPosts.length > 0 ? (
            <div className="posts">
              {paginatedPosts.map((post, index) => (
                <Reveal key={post.slug} d={index % 3 === 1 ? 1 : index % 3 === 2 ? 2 : undefined}>
                  <BlogPostCard post={post} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="no-results">No articles published by this author yet.</p>
          )}

          <BlogPagination currentPage={safePage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </section>
    </main>
  );
}
