export function Footer() {
  return (
    <footer className="border-t border-line py-10 pb-16 mt-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center gap-4 text-sm text-earth">
        <div className="flex gap-6">
          <a href="https://github.com/amaanwarsi" target="_blank" rel="noopener noreferrer" className="underline hover:text-charcoal transition-colors font-mono">GitHub</a>
          <a href="https://linkedin.com/in/amaanwarsi" target="_blank" rel="noopener noreferrer" className="underline hover:text-charcoal transition-colors font-mono">LinkedIn</a>
          <a href="https://x.com/itsamaanwarsi" target="_blank" rel="noopener noreferrer" className="underline hover:text-charcoal transition-colors font-mono">X (Twitter)</a>
        </div>
        <span className="font-poppins font-medium text-charcoal text-xs">© 2026 Amaan Warsi.</span>
      </div>
    </footer>
  );
}
