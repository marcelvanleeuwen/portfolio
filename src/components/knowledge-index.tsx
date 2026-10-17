"use client";

import { useState } from "react";
import Link from "next/link";

type Article = {
  title: string;
  summary: string;
  category: string;
  slug: string;
};

export function KnowledgeIndex({
  articles,
}: {
  articles: Article[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

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

  const fieldClass =
    "mt-2 w-full rounded-lg border border-border bg-background " +
    "px-3 py-2 text-sm focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <>
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Search knowledge
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles…"
            className={fieldClass}
          />
        </label>

        <label className="text-sm font-medium">
          Category
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
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

      <p
        role="status"
        className="mb-4 text-xs text-muted-foreground"
      >
        {filteredArticles.length}{" "}
        {filteredArticles.length === 1 ? "article" : "articles"}
      </p>

      <div className="flex flex-col gap-4">
        {filteredArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/knowledge/${article.slug}`}
            className="rounded-xl border border-border p-4
              transition-colors hover:bg-accent/50
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-ring"
          >
            <p className="text-xs text-muted-foreground">
              {article.category}
            </p>

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
    </>
  );
}