import { DATA } from "@/data/resume";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border pt-6 text-center text-xs leading-relaxed text-muted-foreground">
      <p>© 2026 {DATA.name} · Original content and personal photos.</p>
    </footer>
  );
}
