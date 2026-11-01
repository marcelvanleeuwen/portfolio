import type { ReactNode } from "react";
import styles from "./page-title.module.css";

export function PageTitle({
  icon,
  children,
  badge,
}: {
  icon: ReactNode;
  children: ReactNode;
  badge?: ReactNode;
}) {
  return (
    <h1 className={styles.title}>
      <span className={styles.label}>
        <span className={styles.icon} aria-hidden="true">{icon}</span>
        <span>{children}</span>
      </span>
      {badge}
    </h1>
  );
}
