import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface EndOfDemoProps {
  projectName?: string;
}

export function EndOfDemo({ projectName }: EndOfDemoProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 space-y-3 border border-line border-dashed rounded-xl bg-gradient-to-b from-transparent to-surface mt-16 text-center reveal is-in">
      <span className="text-3xl mb-2">🏁</span>
      <h3 className="text-lg font-poppins font-medium text-charcoal tracking-[-0.015em]">You&apos;ve reached the end</h3>
      <p className="text-earth text-sm max-w-sm leading-relaxed font-inter font-light">
        Thanks for checking out {projectName ? `the ${projectName} case study` : "this case study"}.
      </p>
      <div className="pt-4">
        <Link href="/" className="btn-secondary group px-5 py-2.5">
          <ArrowLeft className="w-4 h-4 text-earth/60 mr-2 group-hover:text-charcoal transition-colors" />
          Go to home
        </Link>
      </div>
    </div>
  );
}
