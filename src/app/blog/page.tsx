import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { paginate, normalizePage } from "@/lib/pagination";
import { ChevronRight } from "lucide-react";

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

const PAGE_SIZE = 8;
const BLUR_FADE_DELAY = 0.04;

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

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
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

  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">
          Blog{" "}
          <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {sortedPosts.length} posts
          </span>
        </h1>

        <p className="text-sm text-muted-foreground mb-8">
          My thoughts on technology, homelabs, life, and more.
        </p>
      </BlurFade>

      <form
        action="/blog"
        method="get"
        key={`${query}:${category}`}
        className="mb-8 flex flex-col gap-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Search blog
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search articles…"
              className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>

          <label className="text-sm font-medium">
            Category
            <select
              name="category"
              defaultValue={category}
              className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
          <button
            type="submit"
            className="rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-accent/50"
          >
            Search
          </button>

          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Clear filters
          </Link>
        </div>
      </form>

      {paginatedPosts.length > 0 ? (
        <>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col gap-5">
              {paginatedPosts.map((post, id) => {
                const slug = post._meta.path.replace(/\.mdx$/, "");
                const indexNumber =
                  (pagination.page - 1) * PAGE_SIZE + id + 1;

                return (
                  <BlurFade
                    delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                    key={slug}
                  >
                    <Link
                      href={`/blog/${slug}`}
                      className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                        {String(indexNumber).padStart(2, "0")}.
                      </span>

                      <div className="flex flex-col gap-y-2 flex-1">
                        <p className="tracking-tight text-lg font-medium">
                          <span className="group-hover:text-foreground transition-colors">
                            {post.title}
                            <ChevronRight
                              className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                              aria-hidden
                            />
                          </span>
                        </p>

                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-xs text-muted-foreground">
                            {post.publishedAt}
                          </p>

                          {post.category && (
                            <span className="rounded-md border border-border bg-card px-2 py-0.5 text-xs text-muted-foreground">
                              {post.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>
          </BlurFade>

          {pagination.totalPages > 1 && (
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex gap-3 items-center justify-between mt-8">
                <div className="text-sm text-muted-foreground">
                  Page {pagination.page} of {pagination.totalPages}
                </div>

                <div className="flex gap-2">
                  {pagination.hasPreviousPage ? (
                    <Link
                      href={pageHref(pagination.page - 1)}
                      className={`${paginationClass} hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                    >
                      Previous
                    </Link>
                  ) : (
                    <span
                      className={`${paginationClass} opacity-50 cursor-not-allowed`}
                    >
                      Previous
                    </span>
                  )}

                  {pagination.hasNextPage ? (
                    <Link
                      href={pageHref(pagination.page + 1)}
                      className={`${paginationClass} hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                    >
                      Next
                    </Link>
                  ) : (
                    <span
                      className={`${paginationClass} opacity-50 cursor-not-allowed`}
                    >
                      Next
                    </span>
                  )}
                </div>
              </div>
            </BlurFade>
          )}
        </>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">
              No articles found. Try another search or category.
            </p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}