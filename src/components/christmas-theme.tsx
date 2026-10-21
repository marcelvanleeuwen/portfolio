import type { CSSProperties } from "react";
import styles from "./christmas-theme.module.css";

export function ChristmasTheme() {
  return (
    <div className={styles.decorations} aria-hidden="true">
      <div className={styles.glow} />
      <svg className={styles.tree} viewBox="0 0 100 140" fill="none">
        <ellipse cx="50" cy="132" rx="32" ry="4" fill="currentColor" opacity="0.06" />
        <path d="M46 113h8v17h-8z" fill="#a58a70" />
        <path d="m50 19 22 35H61l22 32H69l24 33H7l24-33H17l22-32H28z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M35 63c10 5 21 7 34 5M24 94c16 7 34 9 53 5" stroke="#c9a16a" strokeOpacity="0.65" strokeWidth="1.2" strokeLinecap="round" />
        <path d="m50 5 2.6 5.4 6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6-4.3-4.2 6-.9z" fill="#c9a16a" fillOpacity="0.8" />
        <g fill="#a75c56" fillOpacity="0.7">
          <circle cx="43" cy="49" r="2.2" />
          <circle cx="62" cy="83" r="2.2" />
          <circle cx="32" cy="106" r="2.2" />
        </g>
        <g fill="#c9a16a" fillOpacity="0.85">
          <circle cx="57" cy="59" r="1.8" />
          <circle cx="39" cy="84" r="1.8" />
          <circle cx="67" cy="109" r="1.8" />
        </g>
      </svg>
      <div className={styles.lights}>
        {Array.from({ length: 19 }, (_, i) => (
          <span key={i} style={{ "--delay": `${i * -0.37}s` } as CSSProperties} />
        ))}
      </div>
      <div className={styles.snow}>
        {Array.from({ length: 24 }, (_, i) => (
          <span key={i} style={{
            left: `${(i * 37 + 7) % 100}%`,
            "--delay": `${-i * 1.7}s`,
            "--duration": `${15 + (i % 7) * 3}s`,
            "--size": `${2 + (i % 3)}px`,
          } as CSSProperties} />
        ))}
      </div>
    </div>
  );
}

export function ChristmasHat() {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 80" className={styles.hat}>
      <path d="M17 57C24 37 27 13 50 12c19-1 26 12 30 27L65 43c-2-11-7-15-12-13L50 58Z" fill="#a84c47" />
      <path d="M23 52c11-4 25-4 35 1" fill="none" stroke="#f5f1e9" strokeWidth="13" strokeLinecap="round" />
      <circle cx="79" cy="42" r="8" fill="#f5f1e9" />
    </svg>
  );
}
