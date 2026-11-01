import { PageTitle } from "@/components/page-title";
import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";
import Markdown from "react-markdown";
import { FluxIcon } from "@/components/flux-logo";

export const metadata: Metadata = {
  title: "RunOnFlux",
  description:
    "Why I run FluxNodes, how the Flux cloud network works, and where to find the official whitepaper, documentation, and Discord community.",
};

export const dynamic = "force-static";

export default async function FluxPage() {
  const content = await readFile(
    path.join(process.cwd(), "content", "pages", "flux.md"),
    "utf8"
  );

  return (
    <main>
      <article className="prose max-w-full dark:prose-invert">
        <Markdown
          components={{
            h1: ({ children }) => (
              <>
                <PageTitle icon={<FluxIcon />}>{children}</PageTitle>
                <p className="text-sm text-muted-foreground">
                  A project I take part in through my homelab
                </p>
              </>
            ),
          }}
        >
          {content}
        </Markdown>
      </article>
    </main>
  );
}
