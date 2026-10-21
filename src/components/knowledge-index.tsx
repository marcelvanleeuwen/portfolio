import Link from "next/link";
import { normalizePage, paginate } from "@/lib/pagination";

const PAGE_SIZE = 10;

type Article = {
  title: string;
  summary: string;
  category: string;
  updatedAt: string;
  slug: string;
};

export function KnowledgeIndex({
  articles,
  query = "",
  category = "",
  page,
}: {
  articles: Article[];
  query?: string;
  category?: string;
  page?: string;
}) {

  const categories = [
    ...new Set(articles.map((article) => article.category)),
  ].sort();

  const searchWords = query.toLowerCase().trim().split(/\s+/);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      category === "" || article.category === category;

    const searchableText =
      `${article.title} ${article.summary} ${article.category}`
        .toLowerCase();

    const matchesSearch = searchWords.every((word) =>
      searchableText.includes(word)
    );

    return matchesCategory && matchesSearch;
  });

  const pageCount = Math.max(1, Math.ceil(filteredArticles.length / PAGE_SIZE));
  const currentPage = normalizePage(page, pageCount);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const { items: visibleArticles, pagination } = paginate(filteredArticles, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  function pageHref(pageNumber: number) {
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (category) params.set("category", category);
    params.set("page", String(pageNumber));
    return `/knowledge?${params.toString()}`;
  }

  const paginationClass =
    "h-8 w-fit px-2 flex items-center justify-center text-sm " +
    "border border-border rounded-lg";

  const fieldClass =
    "mt-2 w-full rounded-lg border border-border bg-background " +
    "px-3 py-2 text-sm focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <>
      <form action="/knowledge" method="get" key={`${query}:${category}`} className="mb-8 flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Search knowledge
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search articles…"
            className={fieldClass}
          />
        </label>

        <label className="text-sm font-medium">
          Category
          <select
            name="category"
            defaultValue={category}
            className={fieldClass}
          >
            <option value="">All categories</option>

            {categories.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex items-center gap-4">
        <button type="submit" className="rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-accent/50">
          Search
        </button>
        <Link href="/knowledge" className="text-sm text-muted-foreground hover:text-foreground">
          Clear filters
        </Link>
      </div>
      </form>

      <p
        role="status"
        className="mb-4 text-xs text-muted-foreground"
      >
        {filteredArticles.length > 0 && (
          <>{startIndex + 1}–{Math.min(startIndex + PAGE_SIZE, filteredArticles.length)} of </>
        )}
        {filteredArticles.length}{" "}
        {filteredArticles.length === 1 ? "article" : "articles"}
      </p>

      <div className="flex flex-col gap-4">
        {visibleArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/knowledge/${article.slug}`}
            className="rounded-xl border border-border p-4
              transition-colors hover:bg-accent/50
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-ring"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <p>{article.category}</p>
              <p>
                Updated <time dateTime={article.updatedAt}>{article.updatedAt}</time>
              </p>
            </div>

            <h2 className="mt-2 text-lg font-medium">
              {article.title}
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {article.summary}
            </p>
          </Link>
        ))}

        {filteredArticles.length === 0 && (
          <p className="rounded-xl border border-border p-8
            text-center text-sm text-muted-foreground">
            No articles found. Try another search or category.
          </p>
        )}
      </div>

      {pagination.totalPages > 1 && (
        <nav aria-label="Knowledge pagination" className="flex gap-3 items-center justify-between mt-8">
          <div className="text-sm text-muted-foreground">
            Page {pagination.page} of {pagination.totalPages}
          </div>
          <div className="flex gap-2">
            {pagination.hasPreviousPage ? (
              <Link href={pageHref(pagination.page - 1)} className={`${paginationClass} hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}>
                Previous
              </Link>
            ) : (
              <span className={`${paginationClass} opacity-50 cursor-not-allowed`}>Previous</span>
            )}
            {pagination.hasNextPage ? (
              <Link href={pageHref(pagination.page + 1)} className={`${paginationClass} hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}>
                Next
              </Link>
            ) : (
              <span className={`${paginationClass} opacity-50 cursor-not-allowed`}>Next</span>
            )}
          </div>
        </nav>
      )}
    </>
  );
}
