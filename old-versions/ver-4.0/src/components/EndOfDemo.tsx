import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface EndOfDemoProps {
  projectName?: string;
}

export function EndOfDemo({ projectName }: EndOfDemoProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 space-y-3 border border-border border-dashed rounded-xl bg-gradient-to-b from-transparent to-bg-raised/50 mt-16 text-center">
      <span className="text-3xl mb-2">🏁</span>
      <h3 className="text-lg font-medium text-text-primary">You&apos;ve reached the end</h3>
      <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
        Thanks for checking out {projectName ? `the ${projectName} case study` : "this case study"}.
      </p>
      <div className="pt-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-text-primary bg-bg-raised border border-border px-5 py-2.5 rounded-lg hover:border-text-muted hover:text-accent transition-all group shadow-sm">
          <ArrowLeft className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
          Go to home
        </Link>
      </div>
    </div>
  );
}
