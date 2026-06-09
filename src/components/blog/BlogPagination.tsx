"use client";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function getPaginationItems(currentPage: number, totalPages: number): (number | "ellipsis")[] {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const items: (number | "ellipsis")[] = [1];

  if (currentPage > 3) {
    items.push("ellipsis");
  }

  const rangeStart = Math.max(2, currentPage - 1);
  const rangeEnd = Math.min(totalPages - 1, currentPage + 1);

  for (let page = rangeStart; page <= rangeEnd; page += 1) {
    items.push(page);
  }

  if (currentPage < totalPages - 2) {
    items.push("ellipsis");
  }

  items.push(totalPages);
  return items;
}

export function BlogPagination({ currentPage, totalPages, onPageChange }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const items = getPaginationItems(currentPage, totalPages);

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        type="button"
        className="nav-arr"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Prev
      </button>

      {items.map((item, index) =>
        item === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="ellipsis" aria-hidden>
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className={item === currentPage ? "current" : undefined}
            onClick={() => onPageChange(item)}
            aria-label={`Page ${item}`}
            aria-current={item === currentPage ? "page" : undefined}
          >
            {item}
          </button>
        ),
      )}

      <button
        type="button"
        className="nav-arr"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        Next
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </nav>
  );
}
