"use client";

import { useState, useEffect } from "react";

export interface TOCItem {
  id: string;
  label: string;
  number: string;
}

interface CaseStudyTOCProps {
  items: TOCItem[];
}

export function CaseStudyTOC({ items }: CaseStudyTOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id);
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  // Auto-scroll the horizontal list on mobile when active item changes
  useEffect(() => {
    if (activeId && typeof window !== "undefined" && window.innerWidth < 1280) {
      const activeBtn = document.getElementById(`toc-btn-${activeId}`);
      const container = document.getElementById("toc-container");
      if (activeBtn && container) {
        const scrollLeft =
          activeBtn.offsetLeft -
          container.clientWidth / 2 +
          activeBtn.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [activeId]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      {/* ── MOBILE: sticky top bar ──────────────────────────────────── */}
      <nav
        aria-label="Table of contents"
        className="xl:hidden sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-line -mx-4 px-0 md:-mx-8 mb-8 w-screen shadow-sm"
      >
        <ol
          id="toc-container"
          className="flex flex-row overflow-x-auto gap-0 scrollbar-none snap-x snap-mandatory px-4 md:px-8"
        >
          {items.map(({ id, label, number }) => {
            const isActive = activeId === id;
            return (
              <li key={id} className="shrink-0 snap-start">
                <button
                  id={`toc-btn-${id}`}
                  onClick={() => handleClick(id)}
                  className={`flex items-center gap-2 text-left px-3 py-3.5 border-b-2 transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-transparent text-earth/50 hover:text-charcoal"
                  }`}
                >
                  <span
                    className={`text-xs font-mono ${
                      isActive ? "text-accent" : "text-earth/30"
                    }`}
                  >
                    {number}
                  </span>
                  <span
                    className={`text-sm font-inter ${
                      isActive ? "font-medium" : "font-light"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* ── DESKTOP: sticky sidebar ─────────────────────────────────── */}
      <nav
        aria-label="Table of contents"
        className="hidden xl:block sticky top-28 self-start w-48 shrink-0"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-earth/50 font-inter font-medium mb-4 pl-4">
          On this page
        </p>
        <ol className="border-l border-line relative">
          {items.map(({ id, label, number }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={`group flex items-center gap-3 w-full text-left py-2.5 pl-4 -ml-px border-l-2 transition-all duration-200 ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-transparent text-earth/50 hover:text-charcoal hover:border-line-strong"
                  }`}
                >
                  <span
                    className={`shrink-0 text-xs font-mono transition-colors duration-200 ${
                      isActive
                        ? "text-accent"
                        : "text-earth/40 group-hover:text-earth/60"
                    }`}
                  >
                    {number}
                  </span>
                  <span
                    className={`text-sm font-inter transition-colors duration-200 leading-snug ${
                      isActive ? "font-medium" : "font-light"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
