"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import { Footer } from "@/components/Footer";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";

function GlowCard({ children, href, className }: { children: React.ReactNode, href: string, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link
      href={href}
      onMouseMove={handleMouseMove}
      className={cn("group relative block rounded-xl border border-border bg-bg-card p-8 md:p-10 overflow-hidden", className)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(239, 159, 39, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <CommandPalette />

      {/* Subtle Radial Gradient Glow Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-bg-base to-bg-base"></div>

      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-32 pb-16 md:py-32 space-y-32">

        {/* 1. Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          id="hero"
          className="space-y-8 relative"
        >
          <div className="inline-flex items-center gap-3 text-sm text-accent-soft font-mono mb-4">
            <span>Hello, I&apos;m Amaan.</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary max-w-4xl leading-[1.1]">
            Backend engineer,<br />
            <span className="text-text-secondary">systems builder.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
            I build resilient backend architectures and full-stack products. Founder of ZaykaTap. Focused on shipping software that works flawlessly in the real world.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="#work" className="bg-text-primary text-bg-base px-6 py-3 rounded-lg font-medium hover:bg-text-secondary transition-colors text-center shadow-lg shadow-text-primary/10">
              View Projects
            </a>
            <a href="#contact" className="bg-bg-raised border border-border text-text-primary px-6 py-3 rounded-lg font-medium hover:border-text-muted transition-colors text-center">
              Contact Me
            </a>
          </div>
        </motion.section>

        {/* 2. Featured Work */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="work"
          className="space-y-10"
        >
          <div className="flex items-center gap-4">
            <span className="text-accent-soft text-sm font-mono">01</span>
            <h2 className="text-2xl font-medium text-text-primary">Selected Work</h2>
            <div className="h-px bg-border flex-1 ml-4 opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlowCard href="/work/zaykatap" className="md:col-span-2">
              <div className="space-y-5">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <h3 className="text-3xl font-medium text-text-primary group-hover:text-accent transition-colors">ZaykaTap</h3>
                  <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 self-start">Founder & Lead</span>
                </div>
                <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
                  Real-time QR-based web ordering platform and React Native mobile app. Engineered with PHP APIs, Express/WebSockets, MariaDB, and Redis.
                </p>
                <div className="flex flex-wrap gap-8 pt-6 border-t border-border/50 text-sm font-mono text-text-muted">
                  <div className="flex flex-col gap-1">
                    <span className="text-text-primary text-lg">1</span>
                    <span className="text-xs uppercase tracking-wider">SaaS Product</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-text-primary text-lg">3+</span>
                    <span className="text-xs uppercase tracking-wider">Production Systems</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-text-primary text-lg">&lt; 50ms</span>
                    <span className="text-xs uppercase tracking-wider">Latency</span>
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard href="/work/proctora" className="flex flex-col justify-between min-h-[300px]">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-text-primary group-hover:text-accent transition-colors">Proctora</h3>
                <p className="text-text-secondary leading-relaxed">
                  Open-source exam proctoring system. Real-time monitoring using OpenCV & MediaPipe with automated violation detection.
                </p>
              </div>
              <div className="mt-8 text-sm font-mono text-accent-soft">Python / OpenCV</div>
            </GlowCard>

            <GlowCard href="/work/alapdorl" className="flex flex-col justify-between min-h-[300px]">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-text-primary group-hover:text-accent transition-colors">Alapdorl</h3>
                <p className="text-text-secondary leading-relaxed">
                  PHP-based search engine with webmaster tools. Engineered core search functionality using custom ranking algorithms and automated web crawlers.
                </p>
              </div>
              <div className="mt-8 text-sm font-mono text-accent-soft">PHP / MySQL / APIs</div>
            </GlowCard>

            <Link href="/labs" className="md:col-span-2 group block bg-bg-base border border-border border-dashed p-8 rounded-xl hover:bg-bg-raised transition-colors flex items-center justify-center min-h-[150px]">
              <div className="text-center space-y-2">
                <div className="text-text-primary font-medium group-hover:text-accent transition-colors">Client Work & Labs</div>
                <div className="text-sm text-text-muted">View experimental builds</div>
              </div>
            </Link>
          </div>
        </motion.section>

        {/* 3. Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="skills"
          className="space-y-10"
        >
          <div className="flex items-center gap-4">
            <span className="text-accent-soft text-sm font-mono">02</span>
            <h2 className="text-2xl font-medium text-text-primary">Engineering Capabilities</h2>
            <div className="h-px bg-border flex-1 ml-4 opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-raised/50 p-6 rounded-xl border border-border space-y-4">
              <h3 className="text-sm font-mono text-text-primary">Backend Systems</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                APIs, real-time communication, data modeling, caching, and asynchronous processing.
              </p>
              <div className="text-xs font-mono text-accent-soft pt-2">
                Node.js · PHP · Redis · RabbitMQ · WebSockets
              </div>
            </div>
            <div className="bg-bg-raised/50 p-6 rounded-xl border border-border space-y-4">
              <h3 className="text-sm font-mono text-text-primary">Frontend & Mobile</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Responsive web apps and cross-platform mobile development with type safety.
              </p>
              <div className="text-xs font-mono text-text-muted pt-2">
                React · Next.js · React Native · TypeScript
              </div>
            </div>
            <div className="bg-bg-raised/50 p-6 rounded-xl border border-border space-y-4">
              <h3 className="text-sm font-mono text-text-primary">Infra & DevOps</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Containerization, deployment pipelines, reverse proxies, and self-managed VPS hosting.
              </p>
              <div className="text-xs font-mono text-text-muted pt-2">
                Docker · Nginx · GitHub Actions · MySQL
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. About */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="about"
          className="space-y-10"
        >
          <div className="flex items-center gap-4">
            <span className="text-accent-soft text-sm font-mono">03</span>
            <h2 className="text-2xl font-medium text-text-primary">What I Care About</h2>
            <div className="h-px bg-border flex-1 ml-4 opacity-50"></div>
          </div>

          <div className="space-y-8">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed border-l-2 border-accent pl-6">
              I like building software where engineering decisions actually matter — systems that need to stay reliable when users, orders, data and real-world constraints start piling up.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-text-primary">Systems over screens</h3>
                <p className="text-text-secondary text-sm leading-relaxed">I enjoy backend architecture, data flow and infrastructure.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-text-primary">Ship over theorize</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Most of my learning comes from building and deploying real systems.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-text-primary">Understand the trade-offs</h3>
                <p className="text-text-secondary text-sm leading-relaxed">I care about why something is designed a certain way, not just which technology is popular.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. Experience / Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="experience"
          className="space-y-10"
        >
          <div className="flex items-center gap-4">
            <span className="text-accent-soft text-sm font-mono">04</span>
            <h2 className="text-2xl font-medium text-text-primary">Experience</h2>
            <div className="h-px bg-border flex-1 ml-4 opacity-50"></div>
          </div>

          <div className="space-y-12 pl-4 border-l border-border">
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-accent ring-4 ring-bg-base"></div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-mono text-text-muted">
                  <span>ZaykaTap</span>
                  <span className="bg-bg-raised px-2 py-0.5 rounded text-xs border border-border">Present</span>
                </div>
                <div className="text-lg text-text-primary font-medium">Founder & Lead Engineer</div>
                <p className="text-text-secondary leading-relaxed max-w-3xl">
                  Architected and deployed the core backend systems handling real-time order processing, syncing web apps and React Native client apps.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-border ring-4 ring-bg-base"></div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-mono text-text-muted">
                  <span>TMU, Moradabad</span>
                  <span>Apr 2026 - Jun 2026</span>
                </div>
                <div className="text-lg text-text-primary font-medium">Backend Developer Intern</div>
                <p className="text-text-secondary leading-relaxed max-w-3xl">
                  Shipped dynamic CMS features across 4+ production Laravel applications. Architected a multi-PDF management system and built cross-server SSH backup pipelines.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-border ring-4 ring-bg-base"></div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-mono text-text-muted">
                  <span>Independent</span>
                  <span>Nov 2021 - Feb 2023</span>
                </div>
                <div className="text-lg text-text-primary font-medium">Freelance Full-Stack Developer</div>
                <p className="text-text-secondary leading-relaxed max-w-3xl">
                  Built and deployed custom web applications using JavaScript, PHP, and MySQL. Created REST APIs and handled backend logic for data-driven features.
                </p>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 5. Case Studies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="case-studies"
          className="space-y-10"
        >
          <div className="flex items-center gap-4">
            <span className="text-accent-soft text-sm font-mono">05</span>
            <h2 className="text-2xl font-medium text-text-primary">Engineering Notes</h2>
            <div className="h-px bg-border flex-1 ml-4 opacity-50"></div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border hover:scrollbar-thumb-text-muted items-stretch">
            <Link href="/notes/self-hosted-deployments" aria-label="Read note: Zero-Downtime Infrastructure" className="snap-start shrink-0 w-[85vw] sm:w-[400px] bg-bg-raised/50 border border-border p-6 rounded-xl hover:border-text-muted transition-colors group flex flex-col justify-between h-[260px] space-y-6">
              <article className="h-full flex flex-col justify-between space-y-6">
                <div className="space-y-3 flex-1 flex flex-col">
                  <header className="space-y-2">
                    <div className="text-xs font-mono text-accent-soft flex items-center gap-2">
                      <span>Infrastructure</span>
                      <span aria-hidden="true">•</span>
                      <time dateTime="2026-06-10" className="text-text-muted">Jun 2026</time>
                    </div>
                    <h3 className="text-xl font-medium text-text-primary group-hover:text-accent transition-colors">Zero-Downtime Infrastructure</h3>
                  </header>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    Maximizing utility and keeping operational costs near zero with Docker, Nginx, and GitHub Actions.
                  </p>
                </div>
                <footer className="text-xs font-mono text-text-muted pt-4 border-t border-border/50">Docker · Nginx · GH Actions</footer>
              </article>
            </Link>

            <Link href="/notes/websockets-vs-polling" aria-label="Read note: WebSockets vs Polling" className="snap-start shrink-0 w-[85vw] sm:w-[400px] bg-bg-raised/50 border border-border p-6 rounded-xl hover:border-text-muted transition-colors group flex flex-col justify-between h-[260px] space-y-6">
              <article className="h-full flex flex-col justify-between space-y-6">
                <div className="space-y-3 flex-1 flex flex-col">
                  <header className="space-y-2">
                    <div className="text-xs font-mono text-accent-soft flex items-center gap-2">
                      <span>Architecture</span>
                      <span aria-hidden="true">•</span>
                      <time dateTime="2026-08-15" className="text-text-muted">Aug 2026</time>
                    </div>
                    <h3 className="text-xl font-medium text-text-primary group-hover:text-accent transition-colors">WebSockets vs Polling</h3>
                  </header>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    Tested real-time order delivery under different connection patterns for scalable restaurant platforms.
                  </p>
                </div>
                <footer className="text-xs font-mono text-text-muted pt-4 border-t border-border/50">Node.js · WebSocket · Redis</footer>
              </article>
            </Link>

            <Link href="/notes/frontend-performance" aria-label="Read note: High-Performance Mobile Rendering" className="snap-start shrink-0 w-[85vw] sm:w-[400px] bg-bg-raised/50 border border-border p-6 rounded-xl hover:border-text-muted transition-colors group flex flex-col justify-between h-[260px] space-y-6">
              <article className="h-full flex flex-col justify-between space-y-6">
                <div className="space-y-3 flex-1 flex flex-col">
                  <header className="space-y-2">
                    <div className="text-xs font-mono text-accent-soft flex items-center gap-2">
                      <span>Performance</span>
                      <span aria-hidden="true">•</span>
                      <time dateTime="2026-08-16" className="text-text-muted">Aug 2026</time>
                    </div>
                    <h3 className="text-xl font-medium text-text-primary group-hover:text-accent transition-colors">High-Performance Mobile Rendering</h3>
                  </header>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    Optimizing for spotty networks and slow mobile devices in real-world hospitality environments.
                  </p>
                </div>
                <footer className="text-xs font-mono text-text-muted pt-4 border-t border-border/50">Next.js · WebP · Virtualization</footer>
              </article>
            </Link>

          </div>
        </motion.section>

        {/* 6. Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="education"
          className="space-y-10"
        >
          <div className="flex items-center gap-4">
            <span className="text-accent-soft text-sm font-mono">06</span>
            <h2 className="text-2xl font-medium text-text-primary">Education</h2>
            <div className="h-px bg-border flex-1 ml-4 opacity-50"></div>
          </div>

          <div className="bg-bg-raised/50 border border-border p-8 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
              <h3 className="text-lg text-text-primary font-medium">Teerthanker Mahaveer University</h3>
              <span className="text-sm font-mono text-text-muted">2023 - 2027</span>
            </div>
            <div className="text-text-secondary">B.Tech in Computer Science & Engineering</div>
          </div>
        </motion.section>

        {/* 7. Social Proof (Testimonials) */}
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="testimonials"
          className="space-y-10"
        >
          <div className="flex items-center gap-4">
            <span className="text-accent-soft text-sm font-mono">07</span>
            <h2 className="text-2xl font-medium text-text-primary">Client Feedback</h2>
            <div className="h-px bg-border flex-1 ml-4 opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-bg-raised/30 border border-border/50 p-8 rounded-xl flex flex-col justify-between gap-6 hover:border-border transition-colors">
                <p className="text-text-secondary leading-relaxed text-sm italic">&quot;TODO: Exact quote from a freelance client. They need social proof and a low-friction way to reach out.&quot;</p>
                <div className="flex items-center gap-4 pt-6 border-t border-border/30">
                  <div className="w-10 h-10 rounded-full bg-bg-raised border border-border"></div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">TODO: Name</div>
                    <div className="text-xs text-text-muted mt-0.5 font-mono">TODO: Role</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section> */}

        {/* 8. Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="contact"
          className="space-y-10 pb-10"
        >
          <div className="flex items-center gap-4">
            <span className="text-accent-soft text-sm font-mono">08</span>
            <h2 className="text-2xl font-medium text-text-primary">Get in Touch</h2>
            <div className="h-px bg-border flex-1 ml-4 opacity-50"></div>
          </div>

          <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/20 via-bg-card to-bg-card border border-border p-10 md:p-16 rounded-2xl flex flex-col items-center gap-8 overflow-hidden relative text-center shadow-2xl">
            <div className="max-w-2xl space-y-6 relative z-10">
              <h3 className="text-4xl md:text-5xl font-medium text-text-primary tracking-tight">Ready to scale your next big idea?</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                Whether you&apos;re an agency looking for a reliable freelance backend engineer, or a founder needing technical leadership to architect your product, my inbox is open.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10 pt-4">
              <a href="mailto:itsamaan.warsi@gmail.com" className="group bg-text-primary text-bg-base px-8 py-4 rounded-lg font-medium hover:scale-105 transition-all text-center shadow-xl shadow-text-primary/10 flex items-center justify-center gap-2">
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://docs.google.com/document/d/1VZaQBNaFtDeClbwAw1uM37r5XvCLYtrJD6sEXM49-dM/edit?usp=drive_link" target="_blank" className="bg-bg-base/50 backdrop-blur border border-border text-text-primary px-8 py-4 rounded-lg font-medium hover:bg-bg-raised transition-colors text-center flex items-center justify-center gap-2">
                View Resume
                <ExternalLink className="w-4 h-4 text-text-muted" />
              </a>
            </div>
          </div>
        </motion.section>

      </main>

      <Footer />
    </>
  );
}
