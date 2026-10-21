import type { CSSProperties } from "react";
import styles from "./new-year-theme.module.css";

export function NewYearTheme() {
  return (
    <div className={styles.decorations} aria-hidden="true">
      <div className={styles.glow} />
      {[0, 1, 2].map((burst) => (
        <div key={burst} className={styles.firework} style={{
          "--delay": `${burst * -2.7}s`,
        } as CSSProperties}>
          {Array.from({ length: 12 }, (_, ray) => (
            <span key={ray} className={styles.ray} style={{
              "--angle": `${ray * 30}deg`,
            } as CSSProperties} />
          ))}
        </div>
      ))}
      <div className={styles.confetti}>
        {Array.from({ length: 18 }, (_, i) => (
          <span key={i} style={{
            left: `${(i * 37 + 9) % 100}%`,
            "--delay": `${i * -2.3}s`,
            "--duration": `${20 + (i % 5) * 3}s`,
          } as CSSProperties} />
        ))}
      </div>
      <div className={styles.greeting}>
        <svg viewBox="0 0 64 64" fill="none">
          <path d="M32 5v10m0 34v10M5 32h10m34 0h10M13 13l7 7m24 24 7 7M13 51l7-7m24-24 7-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="m32 22 2.8 6.3 6.9.7-5.2 4.6 1.5 6.8-6-3.5-6 3.5 1.5-6.8-5.2-4.6 6.9-.7z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
          <circle cx="9" cy="21" r="1.2" fill="currentColor" />
          <circle cx="53" cy="42" r="1.2" fill="currentColor" />
        </svg>
        <span>Happy New Year</span>
      </div>
    </div>
  );
}
