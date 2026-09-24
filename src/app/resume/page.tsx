import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Resume | Amaan Warsi",
  description: "Amaan Warsi's Resume",
};

export default function ResumePage() {
  return (
    <main className="h-[100dvh] bg-white flex flex-col">
      {/* Custom Header for Viewer */}
      <header className="h-16 border-b border-line bg-surface flex items-center justify-between px-4 sm:px-6 shrink-0 z-10 gap-4">
        <div className="flex items-center flex-1 min-w-0">
          <Link href="/#contact" className="text-earth hover:text-charcoal transition-colors flex items-center gap-2 group min-w-0">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform shrink-0" />
            <span className="text-sm font-poppins font-medium truncate">Back to Portfolio</span>
          </Link>
        </div>

        <div className="hidden sm:block text-sm font-mono text-earth/80 truncate text-center px-4 max-w-[40%]">
          Amaan_Warsi_Resume.pdf
        </div>

        <div className="flex-1 flex justify-end shrink-0 min-w-0">
          <a
            href={siteConfig.resume}
            className="btn-primary text-xs py-2 px-4 shadow-sm min-w-0"
            download
          >
            <Download className="w-3.5 h-3.5 mr-1.5 shrink-0" />
            <span className="whitespace-nowrap truncate">Download PDF</span>
          </a>
        </div>
      </header>

      {/* Embed Container */}
      <div className="flex-1 w-full bg-warm-gray relative p-2 md:p-0">
        <div className="w-full h-full relative rounded-lg md:rounded-none overflow-hidden shadow-sm md:shadow-none">
          <iframe
            src={siteConfig.resumePreview}
            className="absolute inset-0 w-full h-full border-none bg-white"
            title="Amaan Warsi Resume"
            allow="autoplay"
          />
        </div>
      </div>
    </main>
  );
}
