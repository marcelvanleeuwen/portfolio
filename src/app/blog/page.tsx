import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { paginate, normalizePage } from "@/lib/pagination";

export const metadata: Metadata = {
  title: "Blog",
  description: "My thoughts on technology, homelabs, life, and more.",
  openGraph: {
    title: "Blog",
    description: "My thoughts on technology, homelabs, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "My thoughts on technology, homelabs, life, and more.",
  },
};

const PAGE_SIZE = 10;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    q?: string;
    category?: string;
  }>;
}) {
  const {
    page: pageParam,
    q = "",
    category = "",
  } = await searchParams;

  const query = q.trim();

  const categories = [
    ...new Set(
      allPosts
        .map((post) => post.category)
        .filter((value): value is string => Boolean(value))
    ),
  ].sort();

  const searchWords = query.toLowerCase().split(/\s+/);

  const sortedPosts = [...allPosts]
    .filter((post) => {
      const matchesCategory =
        category === "" || post.category === category;

      const searchableText =
        `${post.title} ${post.summary} ${post.category ?? ""}`
          .toLowerCase();

      const matchesSearch = searchWords.every((word) =>
        searchableText.includes(word)
      );

      return matchesCategory && matchesSearch;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    );

  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / PAGE_SIZE));
  const currentPage = normalizePage(pageParam, totalPages);

  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  function pageHref(page: number) {
    const params = new URLSearchParams();

    if (query) {
      params.set("q", query);
    }

    if (category) {
      params.set("category", category);
    }

    params.set("page", String(page));

    return `/blog?${params.toString()}`;
  }

  const paginationClass =
    "h-8 w-fit px-2 flex items-center justify-center text-sm " +
    "border border-border rounded-lg";

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const fieldClass =
    "mt-2 w-full rounded-lg border border-border bg-background " +
    "px-3 py-2 text-sm focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <section id="blog">
      <h1 className="mb-2 text-4xl font-semibold tracking-tight">
        Blog{" "}
        <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
          {allPosts.length} {allPosts.length === 1 ? "post" : "posts"}
        </span>
      </h1>

      <p className="mb-8 text-sm text-muted-foreground">
        My thoughts on technology, homelabs, life, and more.
      </p>

      <form action="/blog" method="get" key={`${query}:${category}`} className="mb-8 flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Search blog
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
            <select name="category" defaultValue={category} className={fieldClass}>
              <option value="">All categories</option>
              {categories.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex items-center gap-4">
          <button type="submit" className="rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-accent/50">
            Search
          </button>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
            Clear filters
          </Link>
        </div>
      </form>

      <p role="status" className="mb-4 text-xs text-muted-foreground">
        {sortedPosts.length > 0 && (
          <>{startIndex + 1}–{Math.min(startIndex + PAGE_SIZE, sortedPosts.length)} of </>
        )}
        {sortedPosts.length} {sortedPosts.length === 1 ? "post" : "posts"}
      </p>

      <div className="flex flex-col gap-4">
        {paginatedPosts.map((post) => (
          <Link
            key={post._meta.path}
            href={`/blog/${post._meta.path.replace(/\.mdx$/, "")}`}
            className="rounded-xl border border-border p-4
              transition-colors hover:bg-accent/50
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-ring"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <p>{post.category ?? "Blog"}</p>
              <p>Published <time dateTime={post.publishedAt}>{post.publishedAt}</time></p>
            </div>
            <h2 className="mt-2 text-lg font-medium">{post.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{post.summary}</p>
          </Link>
        ))}
        {sortedPosts.length === 0 && (
          <p className="rounded-xl border border-border p-8 text-center text-sm text-muted-foreground">
            No articles found. Try another search or category.
          </p>
        )}
      </div>

      {pagination.totalPages > 1 && (
        <nav aria-label="Blog pagination" className="flex gap-3 items-center justify-between mt-8">
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
    </section>
  );
}
