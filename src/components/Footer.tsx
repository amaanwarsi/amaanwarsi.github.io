import Link from "next/link";
import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-4 md:px-8 py-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-muted pb-16 mt-16">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <span className="font-medium text-text-primary">© 2026 Amaan Warsi.</span>
        <div className="flex gap-6">
          <a href="https://github.com/amaanwarsi" target="_blank" className="hover:text-accent transition-colors font-mono">GitHub</a>
          <a href="https://linkedin.com/in/amaanwarsi" target="_blank" className="hover:text-accent transition-colors font-mono">LinkedIn</a>
          <a href="https://x.com/amaanwarsi" target="_blank" className="hover:text-accent transition-colors font-mono">X (Twitter)</a>
        </div>
      </div>
      <Link href="/labs" className="group flex items-center gap-2 hover:text-accent transition-colors font-mono text-xs border border-border px-3 py-1.5 rounded-md hover:border-accent">
        <Terminal className="w-3 h-3 group-hover:text-accent transition-colors" />
        /labs
      </Link>
    </footer>
  );
}
