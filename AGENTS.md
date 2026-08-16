# AGENTS.md

Build brief for any coding agent (Claude Code, Cursor, Codex, etc.) working in this repo. This repo is a personal portfolio site for Amaan Warsi — backend engineer and founder of ZaykaTap. Read this whole file before writing code.

## 1. Who this site is for

Two visitors, two jobs:

- **Recruiters / hiring managers** scanning fast (assume ~7 seconds on first pass). They need to see, in order: who you are, what you've shipped, and proof it's real.
- **Freelance prospects** vetting credibility before they message you on WhatsApp or email. They need social proof and a low-friction way to reach out.

Everything on the site should serve one of these two visitors. If a section doesn't help either, cut it.

## 2. Tech stack

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: a distinct sans for UI/body (e.g. Geist Sans or General Sans — avoid Inter, it reads as the default-template font at this point) + a monospace for code/status/command-palette accents (e.g. JetBrains Mono or Berkeley Mono)
- **Icons**: Tabler or Lucide, outline style only
- **Content**: MDX or plain TS data files for case studies — no headless CMS needed for v1
- **Contact form**: a serverless route (Next.js route handler) posting to email via Resend/SMTP, with a `mailto:` fallback link always visible
- **Analytics**: default to a privacy-respecting option (Plausible or Umami) over Google Analytics, self-hosted on the same VPS if convenient
- **Deployment**: two valid paths, pick one and commit to it —
  1. **Vercel** — fastest, zero-config, good default for a static/ISR site
  2. **Existing VPS via Docker + Nginx** — reuse the GitHub Actions pipeline pattern already built for ZaykaTap (build image, push to GHCR, SSH deploy, health check). Only choose this if the goal is specifically to demonstrate deployment chops to a recruiter.

## 3. Setup commands

```bash
pnpm install
pnpm dev          # local dev server
pnpm build        # production build
pnpm lint
pnpm typecheck
```

Run `lint` and `typecheck` before considering any task finished. Do not commit `.env` files or secrets — use `.env.example` with placeholder keys.

## 4. Design system

Direction: **technical minimalism** — dark by default, project-forward, restrained. One signature interactive detail (command palette) instead of a whole theme. No gradients, no neon, no stock photography, no autoplay video.

**Colors** (dark-first; a light theme is a nice-to-have, not required for v1):

| Token | Hex | Use |
|---|---|---|
| `bg-base` | `#171512` | Page background |
| `bg-raised` | `#1c1a17` | Section background |
| `bg-card` | `#232019` | Card surface |
| `text-primary` | `#FAEEDA` | Headings, primary text |
| `text-secondary` | `#B4B2A9` | Body copy |
| `text-muted` | `#888780` | Captions, metadata |
| `accent` | `#EF9F27` | Links, highlights, active states |
| `accent-soft` | `#FAC775` | Eyebrows, subtle accents |
| `success` | `#639922` | Status indicators |
| `border` | `#444441` | Hairlines, dividers |

This palette deliberately echoes ZaykaTap's own charcoal-and-saffron brand — anyone who clicks through from the portfolio to the product should feel the continuity.

**Typography**: two weights only (regular, medium). Sentence case everywhere — no Title Case, no all-caps headings.

**Layout**: bento-style grid for project cards (one flagship card larger than the rest). Generous whitespace. Mobile-first — test every section at 375px before anything wider.

## 5. Required sections

Build these as sections on a single scrolling home page, with dedicated case-study pages linked from the featured-work cards. Don't split routine content across too many pages — every extra click loses recruiters.

### Home (`/`)
1. **Nav** — logo/name left, anchor links right (Work, About, Contact), command-palette trigger (`⌘K` / `Ctrl K`) that fuzzy-searches projects, skills, and sections
2. **Hero** — name, one-line positioning ("Backend engineer, product founder"), a real sentence about what you do (not a tagline cliché), and a live status pill if feasible (e.g. pulling ZaykaTap API uptime) — this one detail does more to prove backend skill than any amount of copy
3. **Featured work** — bento grid, 3-5 cards. ZaykaTap gets the largest card. Each card links to a full case-study page
4. **Skills / stack** — grouped by category (backend, frontend/mobile, infra), not a wall of logos. Only list what you can defend in an interview
5. **Experience / timeline** — B.Tech CSE at Teerthanker Mahaveer University (2023-2027), founding ZaykaTap, freelance client work — compact, dated, no filler
6. **Testimonials** — your freelance client quotes, with name + role. Real quotes only, never invented
7. **Contact** — email (mailto), resume download, GitHub/LinkedIn, and the contact form
8. **Footer** — socials, copyright, and a quiet link to `/labs`

### Case study pages (`/work/[slug]`)
- **`/work/zaykatap`** — the flagship. Structure: problem → your role → architecture (backend: PHP APIs, Express/WebSockets, MariaDB, Redis, RabbitMQ, Docker + Nginx on VPS, ProxySQL) → **web ordering platform** (QR-based, real-time) → **mobile app** (React Native, Play Store, IAP integration) → deployment pipeline (GitHub Actions, GHCR, auto-rollback) → outcomes/traction (real numbers only — leave `TODO` placeholders rather than inventing metrics)
- **`/work/ultron`** — offline voice-activated assistant on Raspberry Pi (wake word, whisper.cpp, local LLM via Ollama, Piper TTS)
- Additional case studies as needed for freelance client projects (only include ones you have permission to show publicly)

### Other routes
- **`/labs`** — the retro-OS-shell concept, or any experimental/fun build. Deliberately not linked from the main nav — footer only. This is where personality goes so it never competes with the "hire me" read of the home page
- **`/resume.pdf`** — static asset, plus a `/resume` route that embeds or redirects to it
- **`404`** — on-brand, minimal, one link home

## 6. Content checklist — confirm with Amaan before shipping

The agent should stub these with a visible `TODO:` comment rather than inventing content:

- [ ] ZaykaTap case study numbers (cafes onboarded, orders processed, latency, whatever is real and defensible)
- [ ] ZaykaTap screenshots — web ordering flow, React Native app screens
- [ ] 3 freelance client testimonials (exact quote + name + role + permission to publish)
- [ ] Resume PDF, current version
- [ ] Contact email and preferred socials (GitHub, LinkedIn, X)
- [ ] Whether a headshot/avatar is wanted, or the site stays avatar-free

## 7. Do / don't

**Do**: real screenshots, honest numbers, restrained motion (150-200ms transitions max), semantic HTML, keyboard-navigable command palette, alt text on every image.

**Don't**: gradients, drop shadows as decoration, particle/3D hero backgrounds, stock photography, fake testimonials, fabricated metrics, more than one accent color per view.

## 8. Performance and accessibility targets

- Lighthouse: 95+ on Performance, Accessibility, Best Practices, SEO
- No layout shift from web fonts (use `font-display: swap` + size-adjust or local fallback)
- All interactive elements reachable and operable by keyboard, including the command palette
- Images: served via `next/image`, WebP/AVIF, explicit width/height

## 9. SEO and meta

- Per-page `<title>` and meta description, unique per case study
- Open Graph image: 1200x630, generated from the same dark/amber design system (not a generic template)
- `sitemap.xml` and `robots.txt` generated at build time
- Structured data (`Person` schema) on the home page

## 10. Definition of done

Before marking any section complete:
1. `pnpm lint && pnpm typecheck` pass
2. Section works at 375px, 768px, and 1440px viewports
3. No placeholder Lorem Ipsum or fabricated numbers remain — either real content or a visible `TODO:`
4. Every image has alt text
5. Command palette opens via keyboard shortcut and is dismissible via `Esc`

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
