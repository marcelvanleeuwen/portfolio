import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";
import Markdown from "react-markdown";
import { RackPhoto } from "@/components/rack-photo";
import styles from "./homelab.module.css";

export const metadata: Metadata = {
  title: "Homelab",
  description:
    "My homelab from 2009 to 2026: the racks in the shed, summer heat, and the move to smaller systems in my hallway.",
};

export const dynamic = "force-static";

export default async function HomelabPage() {
  const content = await readFile(
    path.join(process.cwd(), "content", "pages", "homelab.md"),
    "utf8"
  );

  return (
    <main>
      <article className="prose max-w-full dark:prose-invert">
        <Markdown
          components={{
            ul: ({ children }) => (
              <ul className={`not-prose ${styles.collage}`}>{children}</ul>
            ),
            li: ({ children }) => <li className={styles.tile}>{children}</li>,
            img: ({ src, alt }) => (
              <RackPhoto
                src={typeof src === "string" ? src : ""}
                alt={alt ?? "Homelab rack"}
              />
            ),
          }}
        >
          {content}
        </Markdown>
      </article>
    </main>
  );
}
