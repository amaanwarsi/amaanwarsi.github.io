"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Terminal, Code, BookOpen, Clock, X } from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-white border border-line rounded-xl overflow-hidden flex flex-col mx-4"
          >
            {/* Search Input */}
            <div className="flex items-center px-4 py-3 border-b border-line gap-3">
              <Search className="w-5 h-5 text-earth/60" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, skills, or contact..."
                className="flex-1 bg-transparent border-none outline-none text-charcoal placeholder:text-earth/60 text-sm font-inter"
              />
              <div className="hidden sm:flex gap-1 text-[10px] font-mono text-earth bg-surface px-2 py-1 rounded">
                ESC to close
              </div>
              <button
                onClick={() => setOpen(false)}
                className="sm:hidden p-1 text-earth/60 hover:text-charcoal transition-colors bg-surface rounded"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mock Results */}
            <div className="p-2 space-y-1 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-line">
              <div className="px-3 py-2 text-xs font-medium text-earth/60 uppercase tracking-wider">Pages</div>
              <a href="#skills" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface text-earth hover:text-charcoal transition-colors cursor-pointer group">
                <Code className="w-4 h-4 text-earth/60 group-hover:text-charcoal" />
                <span className="text-sm font-inter">Skills</span>
              </a>
              <a href="#experience" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface text-earth hover:text-charcoal transition-colors cursor-pointer group">
                <Clock className="w-4 h-4 text-earth/60 group-hover:text-charcoal" />
                <span className="text-sm font-inter">Experience</span>
              </a>
              <a href="#education" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface text-earth hover:text-charcoal transition-colors cursor-pointer group">
                <BookOpen className="w-4 h-4 text-earth/60 group-hover:text-charcoal" />
                <span className="text-sm font-inter">Education</span>
              </a>
              <a href="#case-studies" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface text-earth hover:text-charcoal transition-colors cursor-pointer group">
                <FileText className="w-4 h-4 text-earth/60 group-hover:text-charcoal" />
                <span className="text-sm font-inter">Case studies</span>
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface text-earth hover:text-charcoal transition-colors cursor-pointer group">
                <Terminal className="w-4 h-4 text-earth/60 group-hover:text-charcoal" />
                <span className="text-sm font-inter">Labs</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
