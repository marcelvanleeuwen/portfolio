import type { Metadata } from "next";
import { allKnowledges } from "content-collections";
import { KnowledgeIndex } from "@/components/knowledge-index";

export const metadata: Metadata = {
  title: "Knowledge",
  description: "Practical notes and guides from my homelab.",
};

export default function KnowledgePage() {
  const articles = [...allKnowledges]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((article) => ({
      title: article.title,
      summary: article.summary,
      category: article.category,
      slug: article._meta.path,
    }));

  return (
    <section>
      <h1 className="mb-2 text-4xl font-semibold tracking-tight">
        Knowledge
      </h1>

      <p className="mb-8 text-sm text-muted-foreground">
        Practical notes and guides from my homelab.
      </p>

      <KnowledgeIndex articles={articles} />
    </section>
  );
}