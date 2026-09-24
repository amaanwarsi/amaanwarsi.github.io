"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  Terminal,
  Code,
  BookOpen,
  Clock,
  X,
  User,
  Briefcase,
  MessageSquare,
  Mail,
  FileCheck
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const MENU_DATA = [
  {
    category: "Main", items: [
      { label: "Selected Work", href: "/#work", icon: Briefcase, desktopHidden: true },
      { label: "About Me", href: "/#about", icon: User },
      { label: "How I Build Products", href: "/#process", icon: Code },
      { label: "Experience", href: "/#experience", icon: Clock },
      { label: "Case Studies", href: "/#case-studies", icon: FileText },
      { label: "Client Feedback", href: "/#testimonials", icon: MessageSquare }
    ]
  },
  {
    category: "Background", items: [
      { label: "Engineering", href: "/#skills", icon: Terminal },
      { label: "Education", href: "/#education", icon: BookOpen }
    ]
  },
  {
    category: "Connect", items: [
      { label: "Get In Touch", href: "/#contact", icon: Mail },
      { label: "View Resume", href: "/resume", icon: FileCheck }
    ]
  }
];

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

  const filteredData = MENU_DATA.map(group => ({
    ...group,
    items: group.items.filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
  })).filter(group => group.items.length > 0);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center sm:pt-[15vh]">
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
            className="relative w-full h-[100dvh] sm:h-auto sm:max-w-xl bg-white sm:border border-line sm:rounded-xl overflow-hidden flex flex-col sm:mx-4 pt-2 sm:pt-0"
          >
            {/* Search Input */}
            <div className="flex items-center px-4 py-3 border-b border-line gap-3 shrink-0">
              <Search className="w-5 h-5 text-earth/60 shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, skills, or contact..."
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-charcoal placeholder:text-earth/60 text-sm font-inter"
              />
              
              <AnimatePresence>
                {query.length > 0 && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setQuery("")}
                    className="p-1 text-earth/60 hover:text-charcoal transition-colors rounded-full hover:bg-surface shrink-0"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                )}
              </AnimatePresence>

              <div className="hidden sm:flex shrink-0 gap-1 text-[10px] font-mono text-earth bg-surface px-2 py-1 rounded">
                ESC to close
              </div>
              <button
                onClick={() => setOpen(false)}
                className="sm:hidden shrink-0 text-xs px-2 py-1.5 text-earth/80 hover:text-charcoal transition-colors bg-surface rounded"
                aria-label="Close command palette"
              >
                Close
              </button>
            </div>

            {/* Results */}
            <div className="p-2 space-y-1 flex-1 sm:max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-line pb-4">

              {filteredData.length === 0 && (
                <div className="px-4 py-8 text-center text-sm text-earth/60 font-inter">No results found for &quot;{query}&quot;</div>
              )}

              {filteredData.map((group, groupIdx) => (
                <div key={group.category}>
                  <div className={`px-3 py-2 text-xs font-medium text-earth/60 uppercase tracking-wider ${groupIdx > 0 ? "mt-2 border-t border-line pt-4" : "mt-2"}`}>
                    {group.category}
                  </div>
                  {group.items.map(item => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface text-earth hover:text-charcoal transition-colors cursor-pointer group ${item.desktopHidden ? 'sm:hidden' : ''}`}
                      >
                        <Icon className="w-4 h-4 text-earth/60 group-hover:text-charcoal" />
                        <span className="text-sm font-inter">{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              ))}

              {/* Mobile Footer */}
              <div className="sm:hidden mt-6 pt-4 flex flex-col items-center gap-2 shrink-0 px-3 pb-12 text-center">
                <span className="text-xs font-medium text-earth/60 uppercase tracking-wider">Amaan Warsi</span>
                <div className="flex flex-wrap justify-center gap-5 text-sm font-inter text-earth">
                  <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-charcoal transition-colors">GitHub</a>
                  <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-charcoal transition-colors">LinkedIn</a>
                  <a href={siteConfig.links.x} target="_blank" rel="noopener noreferrer" className="hover:text-charcoal transition-colors">X (Twitter)</a>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-charcoal transition-colors">Email</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
