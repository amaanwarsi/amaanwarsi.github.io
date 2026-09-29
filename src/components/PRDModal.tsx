"use client";

import { X, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

interface PRDModalProps {
  onClose: () => void;
  projectName: string;
}

export function PRDModal({ onClose, projectName }: PRDModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="card max-w-sm w-full p-8 relative overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-earth/50 hover:text-charcoal transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-poppins font-medium text-charcoal tracking-[-0.015em]">
              Request PRD Access
            </h3>
            <p className="text-sm text-earth leading-relaxed font-inter font-light mt-3">
              The full Product Requirements Document for {projectName} is kept private. If you&apos;re reviewing my work, I&apos;d be happy to share it directly.
            </p>
          </div>

          <div className="flex flex-row items-center gap-3 pt-6 border-t border-line">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex-1 flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border border-line hover:border-accent/40 hover:bg-surface transition-all group"
            >
              <Mail className="w-5 h-5 text-earth/50 group-hover:text-accent transition-colors" />
              <span className="text-xs font-inter font-medium text-charcoal">
                Email me
              </span>
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border border-line hover:border-accent/40 hover:bg-surface transition-all group"
            >
              <svg
                className="w-5 h-5 text-earth/50 group-hover:text-accent transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="text-xs font-inter font-medium text-charcoal">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
