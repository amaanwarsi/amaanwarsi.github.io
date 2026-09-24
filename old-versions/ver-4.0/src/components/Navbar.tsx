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
          ? "bg-bg-base/70 backdrop-blur-md border-border py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="font-medium text-lg text-text-primary tracking-tight">
          Amaan Warsi
        </Link>
        <nav className="flex gap-4 sm:gap-6 text-sm text-text-secondary items-center">
          <Link href="#work" className="hover:text-accent transition-colors hidden sm:block">Work</Link>
          <Link href="#about" className="hover:text-accent transition-colors hidden sm:block">About</Link>
          <Link href="#contact" className="hover:text-accent transition-colors hidden sm:block">Contact</Link>
          
          <button 
            onClick={triggerCommandPalette}
            className="ml-0 sm:ml-4 px-2 py-1.5 bg-bg-raised/80 backdrop-blur-sm border border-border rounded-md text-xs font-mono text-text-muted hover:border-text-secondary hover:text-text-primary transition-all flex items-center gap-1.5 group shadow-sm"
          >
            <Command className="w-3.5 h-3.5 group-hover:text-accent transition-colors" />
            <span className="hidden sm:inline-block">K</span>
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
