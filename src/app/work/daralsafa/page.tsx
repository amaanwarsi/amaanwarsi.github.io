import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { EndOfDemo } from "@/components/EndOfDemo";

export const metadata = {
  title: "Dar Al Safa Case Study | Amaan Warsi",
  description: "Online learning platform connecting students with universities, institutes, and independent teachers.",
};

export default function DarAlSafaCaseStudy() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-earth/70 hover:text-charcoal transition-colors font-inter">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <article className="space-y-12">
        <header className="space-y-4 reveal is-in">
          <h1 className="text-4xl md:text-5xl font-poppins font-medium tracking-[-0.015em] text-charcoal">Dar Al Safa</h1>
          <p className="text-xl text-earth leading-relaxed font-inter font-light">
            Online learning platform connecting students with universities, institutes, and independent teachers.
          </p>
        </header>

        <section className="space-y-4 reveal is-in">
          <div className="bg-surface border border-line border-dashed min-h-[40vh] rounded-xl flex items-center justify-center text-earth/60">
            <p className="font-mono text-sm">Case study coming soon.</p>
          </div>
        </section>
        
        <EndOfDemo projectName="Dar Al Safa" />
      </article>
      </main>
      <Footer />
    </>
  );
}
