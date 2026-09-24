"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import { Footer } from "@/components/Footer";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, Server, Smartphone, Terminal, Lightbulb, Layout, Sliders, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

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
      className={cn("card group relative block ", className)}
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

const testimonialsData = [
  {
    quote: "TODO: Exact quote from a freelance client. They need social proof and a low-friction way to reach out. Be sure to use a real quote! This space allows for slightly longer, more impactful quotes.",
    name: "TODO: Client Name",
    role: "TODO: Role at Company",
  },
  {
    quote: "TODO: Another quote from a client. Social proof is incredibly important to establish trust quickly.",
    name: "TODO: Another Name",
    role: "TODO: Another Role",
  },
  {
    quote: "TODO: A third quote to round out the carousel. This builds a pattern of success.",
    name: "TODO: Third Name",
    role: "TODO: Third Role",
  }
];

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const next = () => setActiveIndex((current) => (current + 1) % testimonialsData.length);
  const prev = () => setActiveIndex((current) => (current - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <div
      className="relative reveal-stagger is-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative rounded-2xl bg-surface/30">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonialsData.map((t, i) => (
            <div key={i} className="w-full shrink-0 p-8 md:p-16 flex flex-col items-center text-center justify-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white border border-line overflow-hidden shrink-0 relative shadow-sm">
                  <div className="absolute inset-0 flex items-center justify-center bg-earth/5 text-earth/40">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  </div>
                </div>
                <div>
                  <div className="text-base font-poppins font-medium text-charcoal">{t.name}</div>
                  <div className="text-sm text-earth mt-1 font-mono">{t.role}</div>
                </div>
              </div>

              <div className="flex flex-col items-center max-w-3xl mx-auto">
                <p className="text-charcoal md:text-xl leading-relaxed font-inter font-light">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-line flex items-center justify-center text-earth hover:text-charcoal hover:border-line-strong transition-colors shadow-sm z-10 hidden md:flex"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-line flex items-center justify-center text-earth hover:text-charcoal hover:border-line-strong transition-colors shadow-sm z-10 hidden md:flex"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              activeIndex === i ? "bg-accent w-6" : "bg-line hover:bg-line-strong"
            )}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
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
            <span>FROM PROBLEM TO PRODUCT.</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-medium tracking-[-0.015em] text-charcoal max-w-4xl leading-[1.1]">
            I build products,<br />
            <span className="text-earth/65">not just features.</span>
          </h1>
          <p className="text-lg md:text-xl text-earth max-w-2xl leading-relaxed font-inter font-light">
            I research problems, work through what’s worth building, and use my technical background to take products from an idea to something people can actually use.
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
            <GlowCard href="/work/zaykatap" className="p-8 md:p-10 md:col-span-2">
              <div className="space-y-5">
                <div className="flex flex-row justify-between items-start gap-4">
                  <h3 className="text-3xl font-poppins font-medium text-charcoal group-hover:text-accent transition-colors">ZaykaTap</h3>
                  
                  {/* Desktop: View Details */}
                  <div className="hidden md:inline-flex items-center text-sm font-medium text-earth group-hover:text-accent transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Mobile: Founder Chip */}
                  <span className="chip shrink-0 hover:bg-surface hover:text-accent md:hidden">Founder</span>
                </div>
                
                <p className="text-earth max-w-2xl text-lg leading-relaxed font-inter font-light">
                  A marketplace connecting food vendors and cafés, with free QR menus, live ordering, and analytics for cafés. Building the product end-to-end across the café, vendor, and marketplace experience.
                </p>
                
                <div className="flex flex-row flex-wrap md:flex-nowrap justify-between items-center md:items-end gap-6 pt-6 border-t border-line">
                  <div className="flex flex-wrap gap-8 text-sm font-mono text-earth/70">
                    <div className="flex flex-col gap-1">
                      <span className="text-charcoal text-lg font-inter font-medium">1</span>
                      <span className="text-[10px] uppercase tracking-[0.1em]">Marketplace</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-charcoal text-lg font-inter font-medium">Free</span>
                      <span className="text-[10px] uppercase tracking-[0.1em]">Café Tools</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-charcoal text-lg font-inter font-medium">2</span>
                      <span className="text-[10px] uppercase tracking-[0.1em]">User Sides</span>
                    </div>
                  </div>
                  
                  {/* Desktop: Founder Chip */}
                  <span className="chip shrink-0 hover:bg-surface hover:text-accent hidden md:inline-flex">Founder</span>
                  
                  {/* Mobile: View Details */}
                  <div className="inline-flex md:hidden items-center text-sm font-medium text-earth group-hover:text-accent transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard href="/work/dar-al-safa" className="flex flex-col justify-between min-h-[260px] px-8 pt-8 pb-4 md:px-10 md:pt-10 md:pb-4">
              <div className="space-y-4">
                <h3 className="text-2xl font-poppins font-medium text-charcoal group-hover:text-accent transition-colors">Dar Al Safa</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  Online learning platform connecting students with universities, institutes, and independent teachers.
                </p>
              </div>
              <div className="mt-8 flex flex-row justify-between items-center gap-4 pt-4">
                <div className="text-sm font-mono text-earth/70">In Progress</div>
                <div className="inline-flex items-center text-sm font-medium text-earth group-hover:text-accent transition-colors shrink-0">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </GlowCard>

            <GlowCard href="/work/alapdorl-forms" className="flex flex-col justify-between min-h-[260px] px-8 pt-8 pb-4 md:px-10 md:pt-10 md:pb-4">
              <div className="space-y-4">
                <h3 className="text-2xl font-poppins font-medium text-charcoal group-hover:text-accent transition-colors">Alapdorl Forms</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  Built during lockdown to help teachers share and monitor online tests, with built-in tab-switch detection.
                </p>
              </div>
              <div className="mt-8 flex flex-row justify-between items-center gap-4 pt-4">
                <div className="text-sm font-mono text-earth/70">Built & Launched</div>
                <div className="inline-flex items-center text-sm font-medium text-earth group-hover:text-accent transition-colors shrink-0">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </GlowCard>

            <Link href="/labs" className="md:col-span-2 group block bg-surface border border-line border-dashed p-8 rounded-xl hover:bg-warm-gray transition-colors flex items-center justify-center min-h-[150px]">
              <div className="text-center space-y-2">
                <div className="text-charcoal font-poppins font-medium group-hover:text-accent transition-colors">Client Work & Labs</div>
                <div className="text-sm text-earth/70 font-inter">View experimental builds</div>
              </div>
            </Link>
          </div>
        </motion.section>

        {/* 02. About */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="about"
          className="space-y-12 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">02.</span>
            <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">My Story</h2>
            <div className="eyebrow-rule ml-4"></div>
          </div>

          <div className="max-w-3xl space-y-12 reveal-stagger is-in">
            <p className="text-2xl md:text-3xl text-charcoal font-poppins font-medium leading-snug tracking-[-0.015em]" style={{ "--stagger-idx": 1 } as React.CSSProperties}>
              I&apos;m Amaan, a B.Tech CSE student graduating in 2027. <br className="hidden md:block" />
              <span className="text-earth/60 font-light">I started out on the engineering side.</span>
            </p>

            <div className="space-y-8 text-lg md:text-xl text-earth leading-relaxed font-inter font-light">
              <p style={{ "--stagger-idx": 2 } as React.CSSProperties}>
                I spent my early days building software, getting into the weeds of execution, and working through the messy part of turning requirements into something that actually works.
              </p>

              <div className="pl-6 md:pl-8 border-l-2 border-line space-y-8" style={{ "--stagger-idx": 3 } as React.CSSProperties}>
                <p>
                  But over time, I found myself getting more interested in the decisions <em className="text-charcoal font-medium not-italic">before</em> the code.
                </p>
                <p>
                  Understanding the problem, figuring out what people actually need, and deciding what is worth building. My technical background helps me understand the engineering side without treating it like a black box, allowing me to bridge the gap between user needs and technical reality.
                </p>
              </div>

              <p style={{ "--stagger-idx": 4 } as React.CSSProperties}>
                <strong className="text-charcoal font-medium">That&apos;s what pulled me toward Product Management.</strong> I&apos;m now looking for an APM or Product role where I can work on real products, learn from an experienced team, and get better at making those core decisions.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 03. Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="process"
          className="space-y-10 reveal is-in"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="eyebrow">03.</span>
              <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">How I Build Products</h2>
              <div className="eyebrow-rule ml-4"></div>
            </div>
            <p className="text-lg text-earth leading-relaxed font-inter font-light max-w-3xl">
              I realized early on that writing perfect code doesn&apos;t matter if you&apos;re building the wrong thing. I shifted my focus to the complete product lifecycle to ensure what gets built actually solves real friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 reveal-stagger is-in">
            <div className="p-8 space-y-6 flex flex-col border-b md:border-r border-line hover:bg-surface/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-surface border border-line flex items-center justify-center text-charcoal group-hover:text-accent group-hover:scale-110 transition-transform">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-poppins font-medium text-charcoal">Understand the Problem</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  I look at the problem before jumping into the solution — researching existing products, talking to users, and figuring out where the actual friction is.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-line mt-auto">
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">User Research</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Market Research</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Problem Definition</span>
              </div>
            </div>

            <div className="p-8 space-y-6 flex flex-col border-b border-line hover:bg-surface/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-surface border border-line flex items-center justify-center text-charcoal group-hover:text-accent group-hover:scale-110 transition-transform">
                <Layout className="w-5 h-5" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-poppins font-medium text-charcoal">Shape the Product</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  I turn what I learn into requirements, user flows, MVP scope, and features worth building.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-line mt-auto">
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">PRDs</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Requirements</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">User Flows</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">MVP Definition</span>
              </div>
            </div>

            <div className="p-8 space-y-6 flex flex-col border-b md:border-b-0 md:border-r border-line hover:bg-surface/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-surface border border-line flex items-center justify-center text-charcoal group-hover:text-accent group-hover:scale-110 transition-transform">
                <Sliders className="w-5 h-5" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-poppins font-medium text-charcoal">Make the Tradeoffs</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  I prioritize what matters, think through monetization, and balance user needs with what can realistically be built.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-line mt-auto">
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Feature Prioritization</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Product Positioning</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Monetization</span>
              </div>
            </div>

            <div className="p-8 space-y-6 flex flex-col hover:bg-surface/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-surface border border-line flex items-center justify-center text-charcoal group-hover:text-accent group-hover:scale-110 transition-transform">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-poppins font-medium text-charcoal">Build & Ship</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  My technical background lets me work closely with engineering and take ideas from a spec to a working product.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-line mt-auto">
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Product Development</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Agile / Scrum</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Technical Collaboration</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Story Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center space-y-8 reveal is-in"
        >
          <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent to-line"></div>
          <p className="text-xl md:text-2xl text-charcoal font-poppins font-medium max-w-2xl leading-snug tracking-[-0.015em]">
            But defining the product is only half the equation. <br className="hidden md:block" />
            <span className="text-earth/60 font-light">You still need the technical depth to actually build it.</span>
          </p>
          <div className="w-px h-16 md:h-24 bg-gradient-to-t from-transparent to-line"></div>
        </motion.div>

        {/* 3. Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="skills"
          className="space-y-10 reveal is-in"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="eyebrow">04.</span>
              <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Engineering Capabilities</h2>
              <div className="eyebrow-rule ml-4"></div>
            </div>
            <p className="text-lg text-earth leading-relaxed font-inter font-light max-w-3xl">
              While my mindset is product-first, my roots are deeply technical. Having a solid backend engineering foundation allows me to understand tradeoffs, write realistic specs, and bridge the gap between ideas and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger is-in">
            <div className="card p-8 space-y-6 flex flex-col group hover:border-line-strong transition-colors">
              <div className="w-12 h-12 rounded-full bg-surface border border-line flex items-center justify-center text-charcoal group-hover:text-accent group-hover:scale-110 transition-transform">
                <Server className="w-5 h-5" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Backend Systems</h3>
                <p className="text-earth text-sm leading-relaxed font-inter font-light">
                  APIs, real-time communication, data modeling, caching, and asynchronous processing.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-line mt-auto">
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Node.js</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">PHP</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Redis</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">RabbitMQ</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">WebSockets</span>
              </div>
            </div>

            <div className="card p-8 space-y-6 flex flex-col group hover:border-line-strong transition-colors">
              <div className="w-12 h-12 rounded-full bg-surface border border-line flex items-center justify-center text-charcoal group-hover:text-accent group-hover:scale-110 transition-transform">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Frontend & Mobile</h3>
                <p className="text-earth text-sm leading-relaxed font-inter font-light">
                  Responsive web apps and cross-platform mobile development with type safety.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-line mt-auto">
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Next.js</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">React Native</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">TypeScript</span>
              </div>
            </div>

            <div className="card p-8 space-y-6 flex flex-col group hover:border-line-strong transition-colors">
              <div className="w-12 h-12 rounded-full bg-surface border border-line flex items-center justify-center text-charcoal group-hover:text-accent group-hover:scale-110 transition-transform">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Infra & DevOps</h3>
                <p className="text-earth text-sm leading-relaxed font-inter font-light">
                  Containerization, deployment pipelines, reverse proxies, and self-managed VPS hosting.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-line mt-auto">
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Docker</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">Nginx</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">GitHub Actions</span>
                <span className="px-2.5 py-1 bg-surface border border-line rounded-md text-xs font-mono text-earth">MySQL</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. About */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="about"
          className="space-y-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">05.</span>
            <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">What I Care About</h2>
            <div className="eyebrow-rule ml-4"></div>
          </div>

          <div className="space-y-8 reveal-stagger is-in">
            <p className="text-lg md:text-xl text-earth leading-relaxed border-l-2 border-accent pl-6 font-inter font-light">
              I care about understanding why something needs to exist, keeping the experience simple, and making decisions that hold up when the product meets real users.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-2">
                <h3 className="text-lg font-poppins font-medium text-charcoal tracking-[-0.015em]">Systems over screens</h3>
                <p className="text-earth text-sm leading-relaxed font-inter font-light">I care about what happens behind the interface — data, architecture, and reliability.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-poppins font-medium text-charcoal tracking-[-0.015em]">Ship over theorize</h3>
                <p className="text-earth text-sm leading-relaxed font-inter font-light">I learn by building, shipping, and seeing how people actually use it.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-poppins font-medium text-charcoal tracking-[-0.015em]">Understand the trade-offs</h3>
                <p className="text-earth text-sm leading-relaxed font-inter font-light">I want to know why we chose something, what it costs, and what we&apos;re giving up.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 5. Experience / Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="experience"
          className="space-y-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">06.</span>
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

        {/* 6. Case Studies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="case-studies"
          className="space-y-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">07.</span>
            <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Case Studies</h2>
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

        {/* 7. Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="education"
          className="space-y-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">08.</span>
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

        {/* 8. Social Proof (Testimonials) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="testimonials"
          className="space-y-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">09.</span>
            <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Client Feedback</h2>
            <div className="eyebrow-rule ml-4"></div>
          </div>

          <TestimonialCarousel />
        </motion.section>

        {/* 9. Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="contact"
          className="space-y-10 pb-10 reveal is-in"
        >
          <div className="flex items-center gap-4">
            <span className="eyebrow">10.</span>
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
              <a href={`mailto:${siteConfig.email}`} className="btn-primary">
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/resume" className="btn-secondary">
                View Resume
                <ArrowUpRight className="w-4 h-4 ml-2 text-earth/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Greet message */}
        <div className="flex justify-center items-center pt-10 md:pt-24 pb-12 overflow-hidden">
          <p className="text-7xl md:text-8xl lg:text-[10rem] font-poppins font-medium text-charcoal select-none tracking-[-0.04em] leading-none text-center">
            Have a nice day!
          </p>
        </div>

      </main>

      <Footer />
    </>
  );
}
