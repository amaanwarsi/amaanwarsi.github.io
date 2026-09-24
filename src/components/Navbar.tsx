"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Command } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define a custom event trigger for the command palette
  const triggerCommandPalette = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-line py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="font-poppins font-medium text-lg text-charcoal tracking-[-0.015em]">
          Amaan Warsi
        </Link>
        <nav className="flex gap-4 sm:gap-6 text-sm text-earth items-center">
          <Link href="#work" className="nav-link hidden sm:block">Work</Link>
          <Link href="#about" className="nav-link hidden sm:block">About</Link>
          <Link href="#contact" className="nav-link hidden sm:block">Contact</Link>

          <button
            onClick={triggerCommandPalette}
            aria-label="Open Menu"
            className="ml-0 sm:ml-4 px-2 py-1.5 bg-surface border border-line rounded-md text-xs font-mono text-earth hover:border-line-strong hover:text-charcoal transition-all flex items-center gap-1.5 group"
          >
            <Command className="w-3.5 h-3.5 group-hover:text-charcoal transition-colors" />
            <span className="hidden sm:inline-block">K</span>
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
