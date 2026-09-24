import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-12 pb-20 mt-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center gap-2 text-sm text-earth">
        <span className="font-poppins font-medium text-charcoal text-base md:text-xl tracking-tight">{siteConfig.name}</span>
        <div className="flex gap-6">
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm hover:text-charcoal transition-colors font-mono">GitHub</a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm hover:text-charcoal transition-colors font-mono">LinkedIn</a>
          <a href={siteConfig.links.x} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm hover:text-charcoal transition-colors font-mono">X (Twitter)</a>
          <a href={`mailto:${siteConfig.email}`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm hover:text-charcoal transition-colors font-mono">Email</a>
        </div>
      </div>
    </footer>
  );
}
