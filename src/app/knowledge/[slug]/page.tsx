import { allKnowledges } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return allKnowledges.map((article) => ({
    slug: article._meta.path,
  }));
}

export default async function KnowledgeArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = allKnowledges.find(
    (article) => article._meta.path === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <section>
      <Link
        href="/knowledge"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Knowledge
      </Link>

      <p className="mb-2 text-sm text-muted-foreground">
        {article.category}
      </p>

      <h1 className="text-3xl font-semibold tracking-tight">
        {article.title}
      </h1>

      <p className="mt-3 text-sm text-muted-foreground">
        Updated{" "}
        <time dateTime={article.updatedAt}>
          {article.updatedAt}
        </time>
      </p>

      <article className="prose mt-6 max-w-full dark:prose-invert">
        <MDXContent
          code={article.mdx}
          components={mdxComponents}
        />
      </article>
    </section>
  );
}