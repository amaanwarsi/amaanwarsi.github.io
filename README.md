# Amaan Warsi — Personal Portfolio

This repository contains the source code for my personal portfolio website, built with modern web technologies and designed for absolute performance, slick typography, and an impeccable developer/user experience.

## Tech Stack & Architecture

- **Framework**: [Next.js (App Router)](https://nextjs.org/) + TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom, highly constrained design system
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for staggered reveals, layout transitions, and micro-interactions
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Geist/Inter (Sans) paired with Poppins for headings, and a monospace font for technical accents.

## Key Features

- **Command Palette (⌘K)**: A fully functional, keyboard-accessible command palette built from scratch to navigate the site like an IDE.
- **Micro-interactions**: Subtle hover states, glow effects tracking the mouse (`useMotionTemplate`), and staggered entrance animations.
- **Responsive Design**: Flawless execution across mobile, tablet, and desktop viewports, with dynamic UI adaptions (e.g., sticky Table of Contents that converts to a horizontal scrolling nav on mobile).
- **Performance**: Strict adherence to Next.js Image optimization (`next/image`), optimized fonts, and minimal client-side JS overhead.

## Work in Progress: Case Studies & PRDs

> **Note**: We deliberately make the PRD (Product Requirements Document), detailed Case Studies, and Client Feedback sections hidden. For now, they are commented out in the codebase and set to `noindex, nofollow` for search engines.
> 
> The goal is to ensure the portfolio reflects only validated, finalized content. Once the case studies and testimonials are fully vetted and permission is cleared, these sections will be uncommented and published to the live site.

## Setup & Local Development

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev

# Build for production
pnpm build
```

*Codebase maintains a strict linting and type-checking standard. Always run `pnpm lint && pnpm typecheck` before committing.*