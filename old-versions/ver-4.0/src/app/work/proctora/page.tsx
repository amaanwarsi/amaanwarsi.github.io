import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ImageGallery } from "@/components/ImageGallery";
import { EndOfDemo } from "@/components/EndOfDemo";

const PROCTORA_IMAGES = [
  { src: "/images/proctora_home.webp", alt: "Proctora Home Interface" },
  { src: "/images/proctora_start.webp", alt: "Proctora Exam Start Screen" },
  { src: "/images/proctora_workspace.webp", alt: "Proctora Active Workspace" },
  { src: "/images/proctora_detections-alert.webp", alt: "Proctora Violation Detection Alert" },
  { src: "/images/proctora_alert-quit.webp", alt: "Proctora Early Quit Warning" },
  { src: "/images/proctora_alert-submit.webp", alt: "Proctora Submission Alert" },
  { src: "/images/proctora_confirmation.webp", alt: "Proctora Final Confirmation" }
];

export const metadata = {
  title: "Proctora Case Study | Amaan Warsi",
  description: "Open-source exam proctoring system with real-time monitoring.",
};

export default function ProctoraCaseStudy() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="space-y-12">
          <header className="space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary">Proctora</h1>
              <a href="https://github.com/amaanwarsi/Proctora" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors">
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xl text-text-secondary leading-relaxed">
              An open-source exam proctoring system with token auth, session locking, and device fingerprinting.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-text-primary">The Build</h2>
            <p className="text-text-secondary leading-relaxed">
              Built to ensure academic integrity in remote environments, this system relies on computer vision and strict session management to track and prevent violations automatically.
            </p>
            <ul className="space-y-3 text-text-secondary leading-relaxed list-disc list-outside ml-5 mt-4">
              <li>Implemented real-time monitoring using OpenCV & MediaPipe (face, audio, window activity) with automated violation detection.</li>
              <li>Designed a robust relational schema to track sessions, violations, and results seamlessly scaling from SQLite to MySQL.</li>
              <li>Integrated a continuous integration (CI) pipeline using GitHub Actions to maintain code quality and testing.</li>
            </ul>

            <div className="bg-bg-raised border border-border p-6 rounded-lg space-y-4 mt-8">
              <h3 className="text-sm font-mono text-text-muted">Tech Stack</h3>
              <div className="text-text-secondary text-sm font-mono leading-relaxed">
                Python, Flask, OpenCV, MediaPipe, SQLite, MySQL, PyGetWindow, GitHub Actions
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-medium text-text-primary">Interface & Flow</h2>
            <ImageGallery images={PROCTORA_IMAGES} />
            <EndOfDemo projectName="Proctora" />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
