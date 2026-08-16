import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { EndOfDemo } from "@/components/EndOfDemo";

export const metadata = {
  title: "Alapdorl Case Study | Amaan Warsi",
  description: "PHP-based search engine with webmaster tools.",
};

export default function AlapdorlCaseStudy() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <article className="space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary">Alapdorl</h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            PHP-based search engine with comprehensive webmaster tools.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium text-text-primary">The Build</h2>
          <p className="text-text-secondary leading-relaxed">
            Built a full-fledged search engine from the ground up, focusing on custom algorithms and robust indexing.
          </p>
          <ul className="space-y-3 text-text-secondary leading-relaxed list-disc list-outside ml-5 mt-4">
            <li>Engineered core search functionality using custom ranking algorithms to prioritize relevant query results.</li>
            <li>Developed automated web crawlers and spiders to traverse, collect, and index external web content.</li>
            <li>Built the webmaster user interface and a secure domain verification system to authenticate site ownership.</li>
            <li>Integrated third-party REST APIs (Pixabay, YouTube, NewsAPI) to accelerate feature development and aggregate multimedia content.</li>
          </ul>

          <div className="bg-bg-raised border border-border p-6 rounded-lg space-y-4 mt-8">
            <h3 className="text-sm font-mono text-text-muted">Tech Stack</h3>
            <div className="text-text-secondary text-sm font-mono">
              PHP, MySQL, JavaScript, REST APIs
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium text-text-primary">Demo</h2>
          <div className="bg-bg-card border border-border border-dashed aspect-video rounded-xl flex items-center justify-center text-text-muted">
            TODO: Insert Alapdorl screenshots or demo video
          </div>
        </section>
        <EndOfDemo projectName="Alapdorl" />
      </article>
      </main>
      <Footer />
    </>
  );
}
