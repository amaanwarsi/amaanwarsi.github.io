import Link from "next/link";
import { ArrowLeft, Terminal, ExternalLink, Code2 } from "lucide-react";
import TerminalSimulator from "@/components/TerminalSimulator";

export const metadata = {
  title: "Labs | Amaan Warsi",
  description: "Experiments, retro OS concepts, and random builds.",
};

export default function Labs() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="space-y-8">
        <header className="space-y-4 border-b border-border pb-8">
          <div className="flex items-center gap-3">
            <Terminal className="w-8 h-8 text-accent" />
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary">Labs</h1>
          </div>
          <p className="text-xl text-text-secondary leading-relaxed">
            The retro-OS-shell concept and other experimental builds. Things that are fun, broken, or in progress.
          </p>
        </header>

        <TerminalSimulator />

        <section className="space-y-6 pt-8 border-t border-border">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-medium tracking-tight text-text-primary">Side Projects</h2>
          </div>

          <div className="grid gap-6">
            <div className="bg-bg-raised border border-border rounded-xl p-6 md:p-8 space-y-6 hover:border-border/80 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium text-text-primary flex items-center gap-2">
                    Imgx
                  </h3>
                  <p className="text-text-secondary text-base md:text-lg">
                    Smarter image loading for the web
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="https://amaanwarsi.thedev.id/ImgX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-primary hover:text-accent transition-colors bg-bg-card px-4 py-2 rounded-lg border border-border hover:border-accent/50">
                    <ExternalLink className="w-4 h-4" />
                    Docs
                  </a>
                  <a href="https://github.com/amaanwarsi/ImgX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-primary hover:text-accent transition-colors bg-bg-card px-4 py-2 rounded-lg border border-border hover:border-accent/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    Source
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-text-muted">
                <span className="bg-bg-card px-2.5 py-1 rounded-md border border-border">npm package</span>
                <span className="bg-bg-card px-2.5 py-1 rounded-md border border-border">License: MIT</span>
              </div>

              <div className="space-y-6 text-text-secondary text-sm md:text-base leading-relaxed">
                <p>
                  Imgx is a lightweight, framework-agnostic image loading library for the web. It only enhances images you explicitly opt into with a configurable <code>data-*</code> attribute such as <code>data-imgx</code>, and leaves every other <code>&lt;img&gt;</code> untouched.
                </p>

                <div>
                  <h4 className="text-text-primary text-base font-medium mb-2">Why Imgx</h4>
                  <p>
                    Modern image loading often becomes a mix of one-off lazy-loading code, placeholder CSS, fallback logic, and component-specific behavior. Imgx packages those concerns into a reusable ES module with a small public API and a pluggable renderer system.
                  </p>
                </div>

                <div>
                  <h4 className="text-text-primary text-base font-medium mb-2">What It Does</h4>
                  <ul className="list-disc pl-5 space-y-1.5 marker:text-text-muted">
                    <li>Selectively targets marked images only</li>
                    <li>Auto-initializes on <code>DOMContentLoaded</code></li>
                    <li>Supports manual <code>init()</code> and <code>rescan()</code></li>
                    <li>Tracks a clear lifecycle: idle &rarr; loading &rarr; loaded &rarr; error</li>
                    <li>Uses <code>IntersectionObserver</code> for lazy loading with fallback behavior</li>
                    <li>Supports global config, per-image overrides, and programmatic overrides</li>
                    <li>Includes built-in renderers: skeleton, svgAnimation, blurPreview, dominantColor, fallback</li>
                    <li>Supports transitions, retry logic, fallback sources, and a plugin API</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-raised border border-border rounded-xl p-6 md:p-8 space-y-6 hover:border-border/80 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium text-text-primary flex items-center gap-2">
                    MPM
                  </h3>
                  <p className="text-text-secondary text-base md:text-lg">
                    Minimal package manager
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="https://amaanwarsi.thedev.id/mpm/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-primary hover:text-accent transition-colors bg-bg-card px-4 py-2 rounded-lg border border-border hover:border-accent/50">
                    <ExternalLink className="w-4 h-4" />
                    Docs
                  </a>
                  <a href="https://github.com/amaanwarsi/mpm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-primary hover:text-accent transition-colors bg-bg-card px-4 py-2 rounded-lg border border-border hover:border-accent/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    Source
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-text-muted">
                <span className="bg-bg-card px-2.5 py-1 rounded-md border border-border">npm package</span>
                <span className="bg-bg-card px-2.5 py-1 rounded-md border border-border">License: MIT</span>
              </div>

              <div className="space-y-6 text-text-secondary text-sm md:text-base leading-relaxed">
                <p>
                  MPM (Minimal Package Manager) is a CLI tool that fetches only the assets you need (<code>.min.js</code>, <code>.css</code>, etc.) from npm packages without installing the entire <code>node_modules</code> tree.
                </p>
                <p>
                  Stop pulling gigabytes of dependencies just to get a single minified file. MPM resolves packages from the npm registry, extracts their tarballs, intelligently ranks the files, and copies the best candidate(s) into an <code>asset_modules/</code> folder (or your custom output directory). Built on top of npm for speed, low risk, and a familiar workflow.
                </p>

                <div>
                  <h4 className="text-text-primary text-base font-medium mb-2">Why MPM?</h4>
                  <ul className="list-disc pl-5 space-y-1.5 marker:text-text-muted">
                    <li><strong>Saves disk space</strong> &ndash; no node_modules bloat, only the final assets.</li>
                    <li><strong>Fast</strong> &ndash; downloads only the tarball, extracts temporarily, and copies what matters.</li>
                    <li><strong>Low risk</strong> &ndash; doesn&apos;t execute any package code, never runs postinstall.</li>
                    <li><strong>Smart ranking</strong> &ndash; automatically picks the most likely asset (minified, inside /dist, matching package name, reasonable size).</li>
                    <li><strong>Fallback to GitHub</strong> &ndash; if npm fails, MPM scans GitHub repositories for the same asset patterns.</li>
                    <li><strong>Tracks everything</strong> &ndash; updates your package.json under an &quot;assets&quot; section for reproducibility.</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="bg-bg-raised border border-border rounded-xl p-6 md:p-8 space-y-6 hover:border-border/80 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium text-text-primary flex items-center gap-2">
                    Molt
                  </h3>
                  <p className="text-text-secondary text-base md:text-lg">
                    International trade business
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="https://molt.amaanwarsi.tech/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-primary hover:text-accent transition-colors bg-bg-card px-4 py-2 rounded-lg border border-border hover:border-accent/50">
                    <ExternalLink className="w-4 h-4" />
                    Website
                  </a>
                  <a href="https://github.com/amaanwarsi/molt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-primary hover:text-accent transition-colors bg-bg-card px-4 py-2 rounded-lg border border-border hover:border-accent/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    Source
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-text-muted">
                <span className="bg-bg-card px-2.5 py-1 rounded-md border border-border">Next.js 16</span>
                <span className="bg-bg-card px-2.5 py-1 rounded-md border border-border">React 19</span>
                <span className="bg-bg-card px-2.5 py-1 rounded-md border border-border">Tailwind CSS v4</span>
              </div>

              <div className="space-y-6 text-text-secondary text-sm md:text-base leading-relaxed">
                <p>
                  Molt is a Next.js website for an international trade and sourcing business based in India. It presents the company&apos;s services, explains the sourcing workflow, captures trade inquiries, and sends inbound submissions through an SMTP-backed contact API.
                </p>

                <div>
                  <h4 className="text-text-primary text-base font-medium mb-2">What This Project Includes</h4>
                  <ul className="list-disc pl-5 space-y-1.5 marker:text-text-muted">
                    <li>Landing page sections for hero, about, process, services, client profiles, sourcing request, and CTA content</li>
                    <li>A dedicated <code>/contact</code> page with a general inquiry form</li>
                    <li>Legal pages for <code>/terms</code>, <code>/privacy</code>, and <code>/disclaimer</code></li>
                    <li>A shared API route at <code>/api/contact</code> that handles both contact and sourcing request submissions</li>
                    <li>SEO essentials including metadata, Open Graph tags, <code>robots.js</code>, and <code>sitemap.js</code></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-text-primary text-base font-medium mb-2">Tech Stack</h4>
                  <ul className="list-disc pl-5 space-y-1.5 marker:text-text-muted">
                    <li>Next.js 16 App Router</li>
                    <li>React 19</li>
                    <li>Tailwind CSS v4</li>
                    <li>Nodemailer for email delivery</li>
                    <li>Vercel Analytics and Speed Insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
