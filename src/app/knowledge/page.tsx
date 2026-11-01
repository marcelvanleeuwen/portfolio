import { PageTitle } from "@/components/page-title";
import { BookOpenIcon } from "lucide-react";
import type { Metadata } from "next";
import { allKnowledges } from "content-collections";
import { KnowledgeIndex } from "@/components/knowledge-index";

export const metadata: Metadata = {
  title: "Knowledge",
  description: "Practical notes and guides from my homelab.",
};

export default async function KnowledgePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string; category?: string }>;
}) {
  const { page, q = "", category = "" } = await searchParams;
  const articles = [...allKnowledges]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((article) => ({
      title: article.title,
      summary: article.summary,
      category: article.category,
      updatedAt: article.updatedAt,
      slug: article._meta.path,
    }));

  return (
    <section>
      <PageTitle
        icon={<BookOpenIcon />}
        badge={
          <span className="bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm font-normal tracking-normal">
            {articles.length} {articles.length === 1 ? "article" : "articles"}
          </span>
        }
      >
        Knowledge
      </PageTitle>

      <p className="mb-8 text-sm text-muted-foreground">
        Practical notes and guides from my homelab.
      </p>

      <KnowledgeIndex articles={articles} page={page} query={q.trim()} category={category} />
    </section>
  );
}