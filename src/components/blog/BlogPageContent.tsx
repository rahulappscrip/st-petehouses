"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { BlogFeaturedPost } from "@/components/blog/BlogFeaturedPost";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import {
  BLOG_CATEGORIES,
  BLOG_LISTING_PAGE_SIZE,
  BLOG_PAGE,
  BLOG_POSTS,
  getCategoryCount,
  getFeaturedPost,
  type BlogCategory,
} from "@/lib/blog";

export function BlogPageContent() {
  const [activeFilter, setActiveFilter] = useState<BlogCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsRef = useRef<HTMLDivElement>(null);

  const featured = getFeaturedPost();

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      if (post.excludeFromListing) return false;
      const matchesCategory = activeFilter === "all" || post.category === activeFilter;
      const title = post.listTitle ?? post.title;
      const matchesSearch =
        !query ||
        title.toLowerCase().includes(query) ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.categoryLabel.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, search]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / BLOG_LISTING_PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedPosts = useMemo(() => {
    const start = (safePage - 1) * BLOG_LISTING_PAGE_SIZE;
    return filteredPosts.slice(start, start + BLOG_LISTING_PAGE_SIZE);
  }, [filteredPosts, safePage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, search]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    postsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{BLOG_PAGE.eyebrow}</span>
          </Reveal>
          <Reveal d={1}>
            <h1>
              The St. Petersburg home seller&apos;s <em>resource</em>.
            </h1>
          </Reveal>
          <Reveal d={2}>
            <p className="lede">{BLOG_PAGE.lede}</p>
          </Reveal>

          <Reveal d={3}>
            <div className="filter-bar">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`pill${activeFilter === cat.id ? " active" : ""}`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  {cat.label} <span className="count">{getCategoryCount(cat.id)}</span>
                </button>
              ))}
              <label className="filter-search" aria-label="Search articles">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
                <input
                  type="search"
                  placeholder="Search articles…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </div>
          </Reveal>
        </div>
      </section>

      {featured ? (
        <section className="section">
          <div className="wrap">
            <Reveal>
              <BlogFeaturedPost post={featured} />
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head" ref={postsRef}>
              <h2>
                Latest <em>articles</em>
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
            <p className="no-results">No articles match your search. Try a different filter or keyword.</p>
          )}

          <BlogPagination currentPage={safePage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </section>
    </main>
  );
}
