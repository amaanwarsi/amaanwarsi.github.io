import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { EndOfDemo } from "@/components/EndOfDemo";

export const metadata = {
  title: "Alapdorl Forms Case Study | Amaan Warsi",
  description: "EdTech Assessment Platform 2020 – 2021",
};

export default function AlapdorlFormsCaseStudy() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-earth/70 hover:text-charcoal transition-colors font-inter">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <article className="space-y-12">
        <header className="space-y-4 reveal is-in">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
            <h1 className="text-4xl md:text-5xl font-poppins font-medium tracking-[-0.015em] text-charcoal">Alapdorl Forms</h1>
            <span className="text-sm font-mono text-earth/60">2020 - 2021</span>
          </div>
          <p className="text-xl text-earth leading-relaxed font-inter font-light">
            EdTech Assessment Platform
          </p>
        </header>

        <section className="space-y-4 reveal is-in">
          <h2 className="text-2xl font-poppins font-medium text-charcoal">The Build</h2>
          <p className="text-earth leading-relaxed font-inter font-light">
            Built during lockdown after identifying that teachers struggled to distribute and monitor online tests for students.
          </p>
          <ul className="space-y-3 text-earth leading-relaxed list-disc list-outside ml-5 mt-4 font-inter font-light">
            <li>Created a platform where teachers could sign up, submit any Google Form or external form URL, and receive a shortened URL to share with students.</li>
            <li>Designed a secure student testing flow with full-screen mode and automatic cheating flags when a browser tab was switched.</li>
            <li>Hosted the platform publicly and ran targeted online ads, acquiring early sign-ups and real usage from educators.</li>
          </ul>

          <div className="bg-surface border border-line p-6 rounded-lg space-y-4 mt-8">
            <h3 className="text-sm font-mono text-earth/70">Tech Stack</h3>
            <div className="text-earth text-sm font-mono">
              PHP, MySQL, JavaScript
            </div>
          </div>
        </section>

        <section className="space-y-4 reveal is-in">
          <h2 className="text-2xl font-poppins font-medium text-charcoal">Demo</h2>
          <div className="bg-surface border border-line border-dashed aspect-video rounded-xl flex items-center justify-center text-earth/60">
            TODO: Insert Alapdorl Forms screenshots or demo video
          </div>
        </section>
        <EndOfDemo projectName="Alapdorl Forms" />
      </article>
      </main>
      <Footer />
    </>
  );
}
