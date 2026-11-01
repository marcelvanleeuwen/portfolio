"use client";

import Image from "next/image";
import { Expand, X } from "lucide-react";
import { useId, useRef } from "react";
import styles from "./rack-photo.module.css";

export function RackPhoto({ src, alt }: { src: string; alt: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [year, caption = ""] = alt.split(" — ");

  return (
    <>
      <button
        type="button"
        className={styles.photo}
        aria-label={`View ${alt}`}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        <span className={styles.thumbnail}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 420px, (min-width: 640px) 50vw, 100vw"
            className={styles.image}
          />
          <span className={styles.expand} aria-hidden="true">
            <Expand size={16} />
          </span>
        </span>
        <span className={styles.caption}>
          <strong>{year}</strong>
          <span>{caption}</span>
        </span>
      </button>

      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className={styles.viewer}>
          <header className={styles.header}>
            <h2 id={titleId}>{alt}</h2>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label="Close photo"
              className={styles.close}
            >
              <X size={22} />
            </button>
          </header>
          <div className={styles.fullPhoto}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="95vw"
              className={styles.image}
            />
          </div>
          <a href={src} target="_blank" rel="noopener noreferrer" className={styles.original}>
            Open original photo
          </a>
        </div>
      </dialog>
    </>
  );
}
