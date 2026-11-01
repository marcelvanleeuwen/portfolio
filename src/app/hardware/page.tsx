import { PageTitle } from "@/components/page-title";
import type { Metadata } from "next";
import Image from "next/image";
import { CpuIcon } from "lucide-react";
import styles from "./hardware.module.css";
import { readFile } from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = {
  title: "Hardware",
  description:
    "The hardware in my homelab: UDM SE, UNAS Pro, UPS 2U, USW Aggregation, two U6 Pro access points, a G4 Instant camera, four Minisforum MS-01 Proxmox nodes, and two SilverStone cooling panels.",
};

export const dynamic = "force-static";

export default async function HardwarePage() {
  const content = await readFile(
    path.join(process.cwd(), "content", "pages", "hardware.md"),
    "utf8"
  );

  return (
    <main>
      <article className="prose max-w-full dark:prose-invert">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <PageTitle icon={<CpuIcon />}>{children}</PageTitle>
            ),
            // Each Markdown table row becomes a product card.
            table: ({ children }) => (
              <div className="not-prose">{children}</div>
            ),
            thead: () => null,
            tbody: ({ children }) => (
              <div className={styles.grid} role="list" aria-label="My hardware">
                {children}
              </div>
            ),
            tr: ({ children }) => (
              <div className={styles.card} role="listitem">{children}</div>
            ),
            td: ({ children }) => <div>{children}</div>,
            img: ({ src, alt }) => (
              <span className={styles.imageFrame}>
                <Image
                  src={typeof src === "string" ? src : ""}
                  alt={alt ?? ""}
                  fill
                  sizes="(min-width: 768px) 260px, (min-width: 640px) 50vw, 100vw"
                  className={styles.image}
                />
              </span>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
