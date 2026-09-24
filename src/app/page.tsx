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
      className={cn("card group relative block p-8 md:p-10", className)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.05),
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

      <main className="max-w-4xl mx-auto px-4 md:px-8 pt-32 pb-16 md:py-32 space-y-32">

        {/* 1. Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          id="hero"
          className="space-y-8 relative reveal is-in"
        >
          <div className="inline-flex items-center gap-3 text-sm text-earth/70 font-inter mb-4">
            <span>Hello, I&apos;m Amaan.</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-medium tracking-[-0.015em] text-charcoal max-w-4xl leading-[1.1]">
            Backend engineer,<br />
            <span className="text-earth/65">systems builder.</span>
          </h1>
          <p className="text-lg md:text-xl text-earth max-w-2xl leading-relaxed font-inter font-light">
            I build resilient backend architectures and full-stack products. Founder of ZaykaTap. Focused on shipping software that works flawlessly in the real world.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="#work" className="btn-primary">
              View Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="#contact" className="btn-secondary">
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
          className="space-y-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">01.</span>
            <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Selected Work</h2>
            <div className="eyebrow-rule ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stagger is-in">
            <GlowCard href="/work/zaykatap" className="md:col-span-2">
              <div className="space-y-5">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <h3 className="text-3xl font-poppins font-medium text-charcoal group-hover:text-accent transition-colors">ZaykaTap</h3>
                  <span className="chip self-start">Founder & Lead</span>
                </div>
                <p className="text-earth max-w-2xl text-lg leading-relaxed font-inter font-light">
                  Real-time QR-based web ordering platform and React Native mobile app. Engineered with PHP APIs, Express/WebSockets, MariaDB, and Redis.
                </p>
                <div className="flex flex-wrap gap-8 pt-6 border-t border-line text-sm font-mono text-earth/70">
                  <div className="flex flex-col gap-1">
                    <span className="text-charcoal text-lg font-inter font-medium">1</span>
                    <span className="text-[10px] uppercase tracking-[0.1em]">SaaS Product</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-charcoal text-lg font-inter font-medium">3+</span>
                    <span className="text-[10px] uppercase tracking-[0.1em]">Production Systems</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-charcoal text-lg font-inter font-medium">&lt; 50ms</span>
                    <span className="text-[10px] uppercase tracking-[0.1em]">Latency</span>
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard href="/work/proctora" className="flex flex-col justify-between min-h-[300px]">
              <div className="space-y-4">
                <h3 className="text-2xl font-poppins font-medium text-charcoal group-hover:text-accent transition-colors">Proctora</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  Open-source exam proctoring system. Real-time monitoring using OpenCV & MediaPipe with automated violation detection.
                </p>
              </div>
              <div className="mt-8 text-sm font-mono text-earth/70">Python / OpenCV</div>
            </GlowCard>

            <GlowCard href="/work/alapdorl" className="flex flex-col justify-between min-h-[300px]">
              <div className="space-y-4">
                <h3 className="text-2xl font-poppins font-medium text-charcoal group-hover:text-accent transition-colors">Alapdorl</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  PHP-based search engine with webmaster tools. Engineered core search functionality using custom ranking algorithms and automated web crawlers.
                </p>
              </div>
              <div className="mt-8 text-sm font-mono text-earth/70">PHP / MySQL / APIs</div>
            </GlowCard>

            <Link href="/labs" className="md:col-span-2 group block bg-surface border border-line border-dashed p-8 rounded-xl hover:bg-warm-gray transition-colors flex items-center justify-center min-h-[150px]">
              <div className="text-center space-y-2">
                <div className="text-charcoal font-poppins font-medium group-hover:text-accent transition-colors">Client Work & Labs</div>
                <div className="text-sm text-earth/70 font-inter">View experimental builds</div>
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
          className="space-y-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">02.</span>
            <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Engineering Capabilities</h2>
            <div className="eyebrow-rule ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger is-in">
            <div className="card p-6 space-y-4">
              <h3 className="text-sm font-poppins font-medium text-charcoal">Backend Systems</h3>
              <p className="text-earth text-sm leading-relaxed font-inter font-light">
                APIs, real-time communication, data modeling, caching, and asynchronous processing.
              </p>
              <div className="text-xs font-mono text-earth/70 pt-2">
                Node.js · PHP · Redis · RabbitMQ · WebSockets
              </div>
            </div>
            <div className="card p-6 space-y-4">
              <h3 className="text-sm font-poppins font-medium text-charcoal">Frontend & Mobile</h3>
              <p className="text-earth text-sm leading-relaxed font-inter font-light">
                Responsive web apps and cross-platform mobile development with type safety.
              </p>
              <div className="text-xs font-mono text-earth/70 pt-2">
                React · Next.js · React Native · TypeScript
              </div>
            </div>
            <div className="card p-6 space-y-4">
              <h3 className="text-sm font-poppins font-medium text-charcoal">Infra & DevOps</h3>
              <p className="text-earth text-sm leading-relaxed font-inter font-light">
                Containerization, deployment pipelines, reverse proxies, and self-managed VPS hosting.
              </p>
              <div className="text-xs font-mono text-earth/70 pt-2">
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
          className="space-y-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">03.</span>
            <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">What I Care About</h2>
            <div className="eyebrow-rule ml-4"></div>
          </div>

          <div className="space-y-8 reveal-stagger is-in">
            <p className="text-lg md:text-xl text-earth leading-relaxed border-l-2 border-accent pl-6 font-inter font-light">
              I like building software where engineering decisions actually matter — systems that need to stay reliable when users, orders, data and real-world constraints start piling up.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-2">
                <h3 className="text-lg font-poppins font-medium text-charcoal tracking-[-0.015em]">Systems over screens</h3>
                <p className="text-earth text-sm leading-relaxed font-inter font-light">I enjoy backend architecture, data flow and infrastructure.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-poppins font-medium text-charcoal tracking-[-0.015em]">Ship over theorize</h3>
                <p className="text-earth text-sm leading-relaxed font-inter font-light">Most of my learning comes from building and deploying real systems.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-poppins font-medium text-charcoal tracking-[-0.015em]">Understand the trade-offs</h3>
                <p className="text-earth text-sm leading-relaxed font-inter font-light">I care about why something is designed a certain way, not just which technology is popular.</p>
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
          className="space-y-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">04.</span>
            <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Experience</h2>
            <div className="eyebrow-rule ml-4"></div>
          </div>

          <div className="space-y-12 pl-4 border-l border-line reveal-stagger is-in">
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-charcoal ring-4 ring-white"></div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-mono text-earth/70">
                  <span>ZaykaTap</span>
                  <span className="bg-surface px-2 py-0.5 rounded text-xs border border-line text-earth">Present</span>
                </div>
                <div className="text-lg text-charcoal font-poppins font-medium">Founder & Lead Engineer</div>
                <p className="text-earth leading-relaxed max-w-3xl font-inter font-light">
                  Architected and deployed the core backend systems handling real-time order processing, syncing web apps and React Native client apps.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-line ring-4 ring-white"></div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-mono text-earth/70">
                  <span>TMU, Moradabad</span>
                  <span>Apr 2026 - Jun 2026</span>
                </div>
                <div className="text-lg text-charcoal font-poppins font-medium">Backend Developer Intern</div>
                <p className="text-earth leading-relaxed max-w-3xl font-inter font-light">
                  Shipped dynamic CMS features across 4+ production Laravel applications. Architected a multi-PDF management system and built cross-server SSH backup pipelines.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-line ring-4 ring-white"></div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-mono text-earth/70">
                  <span>Independent</span>
                  <span>Nov 2021 - Feb 2023</span>
                </div>
                <div className="text-lg text-charcoal font-poppins font-medium">Freelance Full-Stack Developer</div>
                <p className="text-earth leading-relaxed max-w-3xl font-inter font-light">
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
          className="space-y-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">05.</span>
            <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Engineering Notes</h2>
            <div className="eyebrow-rule ml-4"></div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-line hover:scrollbar-thumb-earth/40 items-stretch reveal-stagger is-in">
            <Link href="/notes/self-hosted-deployments" aria-label="Read note: Zero-Downtime Infrastructure" className="snap-start shrink-0 w-[85vw] sm:w-[400px] card hover:border-line-strong transition-colors group flex flex-col justify-between h-[260px] p-6 space-y-6">
              <article className="h-full flex flex-col justify-between space-y-6">
                <div className="space-y-3 flex-1 flex flex-col">
                  <header className="space-y-2">
                    <div className="text-xs font-mono text-earth/60 flex items-center gap-2">
                      <span>Infrastructure</span>
                      <span aria-hidden="true">•</span>
                      <time dateTime="2026-06-10" className="text-earth/60">Jun 2026</time>
                    </div>
                    <h3 className="text-xl font-poppins font-medium text-charcoal group-hover:text-accent transition-colors tracking-[-0.015em]">Zero-Downtime Infrastructure</h3>
                  </header>
                  <p className="text-earth text-sm leading-relaxed line-clamp-3 font-inter font-light">
                    Maximizing utility and keeping operational costs near zero with Docker, Nginx, and GitHub Actions.
                  </p>
                </div>
                <footer className="text-xs font-mono text-earth/60 pt-4 border-t border-line">Docker · Nginx · GH Actions</footer>
              </article>
            </Link>

            <Link href="/notes/websockets-vs-polling" aria-label="Read note: WebSockets vs Polling" className="snap-start shrink-0 w-[85vw] sm:w-[400px] card hover:border-line-strong transition-colors group flex flex-col justify-between h-[260px] p-6 space-y-6">
              <article className="h-full flex flex-col justify-between space-y-6">
                <div className="space-y-3 flex-1 flex flex-col">
                  <header className="space-y-2">
                    <div className="text-xs font-mono text-earth/60 flex items-center gap-2">
                      <span>Architecture</span>
                      <span aria-hidden="true">•</span>
                      <time dateTime="2026-08-15" className="text-earth/60">Aug 2026</time>
                    </div>
                    <h3 className="text-xl font-poppins font-medium text-charcoal group-hover:text-accent transition-colors tracking-[-0.015em]">WebSockets vs Polling</h3>
                  </header>
                  <p className="text-earth text-sm leading-relaxed line-clamp-3 font-inter font-light">
                    Tested real-time order delivery under different connection patterns for scalable restaurant platforms.
                  </p>
                </div>
                <footer className="text-xs font-mono text-earth/60 pt-4 border-t border-line">Node.js · WebSocket · Redis</footer>
              </article>
            </Link>

            <Link href="/notes/frontend-performance" aria-label="Read note: High-Performance Mobile Rendering" className="snap-start shrink-0 w-[85vw] sm:w-[400px] card hover:border-line-strong transition-colors group flex flex-col justify-between h-[260px] p-6 space-y-6">
              <article className="h-full flex flex-col justify-between space-y-6">
                <div className="space-y-3 flex-1 flex flex-col">
                  <header className="space-y-2">
                    <div className="text-xs font-mono text-earth/60 flex items-center gap-2">
                      <span>Performance</span>
                      <span aria-hidden="true">•</span>
                      <time dateTime="2026-08-16" className="text-earth/60">Aug 2026</time>
                    </div>
                    <h3 className="text-xl font-poppins font-medium text-charcoal group-hover:text-accent transition-colors tracking-[-0.015em]">High-Performance Mobile Rendering</h3>
                  </header>
                  <p className="text-earth text-sm leading-relaxed line-clamp-3 font-inter font-light">
                    Optimizing for spotty networks and slow mobile devices in real-world hospitality environments.
                  </p>
                </div>
                <footer className="text-xs font-mono text-earth/60 pt-4 border-t border-line">Next.js · WebP · Virtualization</footer>
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
          className="space-y-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">06.</span>
            <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Education</h2>
            <div className="eyebrow-rule ml-4"></div>
          </div>

          <div className="card p-8 reveal is-in">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
              <h3 className="text-lg text-charcoal font-poppins font-medium tracking-[-0.015em]">Teerthanker Mahaveer University</h3>
              <span className="text-sm font-mono text-earth/60">2023 - 2027</span>
            </div>
            <div className="text-earth font-inter font-light">B.Tech in Computer Science & Engineering</div>
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
              <div key={i} className="card p-8 flex flex-col justify-between gap-6 hover:border-line-strong transition-colors">
                <p className="text-earth leading-relaxed text-sm italic font-light">"TODO: Exact quote from a freelance client. They need social proof and a low-friction way to reach out."</p>
                <div className="flex items-center gap-4 pt-6 border-t border-line/30">
                  <div className="w-10 h-10 rounded-full bg-surface border border-line"></div>
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
          className="space-y-10 pb-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">08.</span>
            <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Get in Touch</h2>
            <div className="eyebrow-rule ml-4"></div>
          </div>

          <div className="bg-surface border border-line p-10 md:p-16 rounded-2xl flex flex-col items-center gap-8 overflow-hidden relative text-center">
            <div className="max-w-2xl space-y-6 relative z-10 reveal-stagger is-in">
              <h3 className="text-4xl md:text-5xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Ready to scale your next big idea?</h3>
              <p className="text-earth leading-relaxed text-lg font-inter font-light">
                Whether you&apos;re an agency looking for a reliable freelance backend engineer, or a founder needing technical leadership to architect your product, my inbox is open.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10 pt-4 reveal is-in">
              <a href="mailto:itsamaan.warsi@gmail.com" className="btn-primary">
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://docs.google.com/document/d/1VZaQBNaFtDeClbwAw1uM37r5XvCLYtrJD6sEXM49-dM/edit?usp=drive_link" target="_blank" className="btn-secondary">
                View Resume
                <ExternalLink className="w-4 h-4 ml-2 text-earth/60" />
              </a>
            </div>
          </div>
        </motion.section>

      </main>

      <Footer />
    </>
  );
}
