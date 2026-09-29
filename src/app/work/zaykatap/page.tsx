"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, X, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";
import { EndOfDemo } from "@/components/EndOfDemo";
import { CaseStudyTOC, TOCItem } from "@/components/CaseStudyTOC";
import { siteConfig } from "@/config/site";
import { PRDModal } from "@/components/PRDModal";

const TOC_ITEMS: TOCItem[] = [
  { id: "overview", label: "Overview", number: "01" },
  { id: "problem", label: "Problem", number: "02" },
  { id: "why-now", label: "Why Now?", number: "03" },
  { id: "product", label: "Product", number: "04" },
  { id: "engineering", label: "Engineering", number: "05" },
  { id: "artifacts", label: "Artifacts", number: "06" },
];


export default function ZaykaTapCaseStudy() {
  const [prdOpen, setPrdOpen] = useState(false);

  return (
    <>
      {prdOpen && <PRDModal onClose={() => setPrdOpen(false)} projectName="ZaykaTap" />}

      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-8 pb-16 md:py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-earth/70 hover:text-charcoal transition-colors font-inter mb-8 md:mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Wide layout: TOC pinned left, article centred */}
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-16 items-start">
          <CaseStudyTOC items={TOC_ITEMS} />

          <article className="flex-1 min-w-0 space-y-20 w-full">

            {/* 01 Overview */}
            <section id="overview" className="space-y-6 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">01.</span>
                <div className="eyebrow-rule" />
              </div>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <h1 className="text-4xl md:text-5xl font-poppins font-medium tracking-[-0.015em] text-charcoal">ZaykaTap</h1>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <a href="https://thezaykatap.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-blue-600 transition-colors font-inter">
                      thezaykatap.com
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-line-strong" />
                    <a 
                      href="#artifacts"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-earth hover:text-charcoal transition-colors font-inter group"
                    >
                      Jump to PRD
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
                <p className="text-xl text-earth leading-relaxed font-inter font-light">
                  I built ZaykaTap to fix a glaring hole in the hospitality industry: bridging the gap between hungry customers, busy kitchens, and the food vendors that supply them—all running on a ridiculously fast, highly resilient tech stack.
                </p>
                {/* Inline meta — no cards */}
                <div className="flex flex-wrap gap-x-6 gap-y-1 pt-1 text-sm font-inter">
                  <span className="text-earth/50"><span className="font-medium text-charcoal">Role</span> · Founder &amp; Architect</span>
                  <span className="text-earth/50"><span className="font-medium text-charcoal">Timeline</span> · 2025 – 2026</span>
                  <span className="text-earth/50"><span className="font-medium text-charcoal">Status</span> · Live</span>
                  <span className="text-earth/50"><span className="font-medium text-charcoal">Platform</span> · Web + React Native</span>
                </div>
              </div>
            </section>

            {/* 02 Problem */}
            <section id="problem" className="space-y-4 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">02.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Problem</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                Picture a busy cafe on a Saturday night. Customers are waving down staff just to get a menu. When they finally order, it&apos;s jotted on paper and walked to the kitchen. It&apos;s slow, error-prone, and frustrating for everyone. Meanwhile, food vendors are blindly trying to sell their supplies to these exact cafes with zero targeted reach.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                The catch? Any digital fix had to survive the chaos of the real world: spotty cafe Wi-Fi, low-end smartphones dropping connection, and kitchens that absolutely cannot afford to lose a single order ticket.
              </p>
            </section>

            {/* 03 Why Now? */}
            <section id="why-now" className="space-y-4 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">03.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Why Now?</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                Post-pandemic, QR menus were everywhere, but honestly, looking at what the competitors were offering was depressing. They were either glorified, static PDFs you had to awkwardly pinch and zoom, or clunky, ugly web apps that looked like they were built a decade ago. Small cafes were left stitching together these terrible links with WhatsApp messages because they were priced out of enterprise POS systems.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                I knew the biggest differentiator wouldn&apos;t just be having a digital menu—it had to be <em className="font-medium text-charcoal not-italic">speed and sheer aesthetic quality</em>. I wanted to build an ordering engine that didn&apos;t just do the heavy lifting for the kitchen, but actually felt like a premium, native app experience for the customer.
              </p>
            </section>

            {/* 04 Product */}
            <section id="product" className="space-y-6 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">04.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Product</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                ZaykaTap ships as a unified marketplace. I owned the end-to-end delivery—from sketching the initial database schema to publishing the cross-platform apps and writing the payment logic.
              </p>
              <ul className="space-y-3 text-earth leading-relaxed font-inter font-light list-disc list-outside ml-5">
                <li><strong className="font-medium text-charcoal">For Customers:</strong> Scan a table QR code and instantly drop into a buttery-smooth, beautifully designed digital menu. It&apos;s lightning fast, highly visual, and completely frictionless—place orders directly to the kitchen without ever downloading an app.</li>
                <li><strong className="font-medium text-charcoal">For Kitchens:</strong> Live order tickets pop up instantly on a React Native app we shipped to the Play Store.</li>
                <li><strong className="font-medium text-charcoal">For Vendors:</strong> Targeted ad placements to reach cafes directly, opening a new B2B sales channel.</li>
              </ul>
              <p className="text-earth leading-relaxed font-inter font-light pt-2">
                We monetize through two clear paths: paid white-label subscriptions for cafes who want their own branding, and premium ad rankings for food vendors.
              </p>
            </section>

            {/* 05 Engineering */}
            <section id="engineering" className="space-y-8 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">05.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Engineering</h2>
                <div className="eyebrow-rule ml-2" />
              </div>

              <div className="space-y-4">
                <p className="text-xl text-charcoal leading-relaxed font-inter font-light">
                  I didn&apos;t just want to build a prototype. I wanted to build this the right way—production-ready, highly resilient, and ridiculously fast.
                </p>

                <h3 className="text-lg font-poppins font-medium text-charcoal mt-6">The Architecture</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  I designed a monolith-ready-for-microservices backend using PHP. I spun up a raw VPS, containerized everything with Docker and Nginx, and automated deployments via GitHub Actions for true zero-downtime shipping.
                </p>
                <p className="text-earth leading-relaxed font-inter font-light">
                  To keep things perfectly isolated, I split the stack across strict subdomains:
                </p>
                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-line text-xs font-mono uppercase tracking-widest text-earth/50">
                        <th className="py-3 px-4 font-normal w-1/4">Subdomain</th>
                        <th className="py-3 px-4 font-normal w-1/4">Role</th>
                        <th className="py-3 px-4 font-normal w-1/2">Strategy</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-inter font-light text-earth/80">
                      <tr className="border-b border-line/50 hover:bg-surface/50 transition-colors">
                        <td className="py-3 px-4 font-mono text-charcoal font-medium">api.</td>
                        <td className="py-3 px-4 font-medium text-charcoal">Business Logic</td>
                        <td className="py-3 px-4 leading-relaxed">Centralized logic, independently scalable. Easily swapped for microservices if load dictates.</td>
                      </tr>
                      <tr className="border-b border-line/50 hover:bg-surface/50 transition-colors">
                        <td className="py-3 px-4 font-mono text-charcoal font-medium">app.</td>
                        <td className="py-3 px-4 font-medium text-charcoal">Cafe Dashboard</td>
                        <td className="py-3 px-4 leading-relaxed">Keeps heavy B2B admin panels completely separate from the high-traffic customer frontend.</td>
                      </tr>
                      <tr className="border-b border-line/50 hover:bg-surface/50 transition-colors">
                        <td className="py-3 px-4 font-mono text-charcoal font-medium">menu.</td>
                        <td className="py-3 px-4 font-medium text-charcoal">Customer UI</td>
                        <td className="py-3 px-4 leading-relaxed">Aggressively optimized, blazing-fast frontend designed directly for patrons on mobile networks.</td>
                      </tr>
                      <tr className="border-b border-line/50 hover:bg-surface/50 transition-colors">
                        <td className="py-3 px-4 font-mono text-charcoal font-medium">auth.</td>
                        <td className="py-3 px-4 font-medium text-charcoal">Security</td>
                        <td className="py-3 px-4 leading-relaxed">Locked down for generating tokens and handling OAuth without exposing core application logic.</td>
                      </tr>
                      <tr className="border-b border-line/50 hover:bg-surface/50 transition-colors">
                        <td className="py-3 px-4 font-mono text-charcoal font-medium">static.</td>
                        <td className="py-3 px-4 font-medium text-charcoal">Assets &amp; Media</td>
                        <td className="py-3 px-4 leading-relaxed">Routes all minified, gzipped scripts and user-uploaded media. Designed for a frictionless flip to a CDN as traffic scales.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-poppins font-medium text-charcoal">Frontend Performance: Surviving the Wild</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  Restaurant menus are notoriously heavy. Hundreds of items, massive images, spotty 3G. If this lagged, users would bounce immediately.
                </p>
                <p className="text-earth leading-relaxed font-inter font-light">
                  Before a cafe owner&apos;s image ever hits my server, it&apos;s processed client-side—compressed and converted to WebP. On the customer side, I built an aggressive DOM virtualization engine. We render the first 5 items instantly, and lazy-load the rest on scroll. The result? A Time to Interactive (TTI) of under 1.5 seconds on a 3G network and zero memory crashes on cheap Android phones.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-poppins font-medium text-charcoal">Backend Resilience: Beating the Database</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  Live ordering means constant updates. But if every customer phone and kitchen tablet is hammering the database with SQL polling queries, the server melts.
                </p>
                <p className="text-earth leading-relaxed font-inter font-light">
                  Instead, I introduced Redis. When a customer pays, the order drops into the database once, then instantly fires through Redis to trigger a WebSocket event. The kitchen hears a &ldquo;ding!&rdquo; in milliseconds, and the database barely breaks a sweat. This cut I/O load by 90%.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-poppins font-medium text-charcoal">Taming the Chaos with RabbitMQ</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  Payment gateways love to timeout or send duplicate webhooks. I couldn&apos;t risk charging a customer twice or failing to activate a cafe&apos;s subscription.
                </p>
                <p className="text-earth leading-relaxed font-inter font-light">
                  My webhook endpoint is dead simple: validate the signature, save it for a strict idempotency check, and return 200 OK instantly. The heavy lifting—activating subscriptions, generating tokens, firing emails—is tossed to RabbitMQ. It handles retries in the background, keeping the core API completely unblocked.
                </p>
                <p className="text-earth leading-relaxed font-inter font-light">
                  I also ruthlessly cut server costs for the weird edge cases. Generating pixel-perfect PDF menus with complex templates and QR codes? I completely stripped that from the backend and shifted it to the client-side of the React Native app. The server doesn&apos;t even know it&apos;s happening.
                </p>
              </div>

              <div className="space-y-4 mt-10">
                <h3 className="text-lg font-poppins font-medium text-charcoal">The Impact</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 reveal-stagger is-in">
                  <div className="card p-6 space-y-2">
                    <div className="text-3xl font-poppins font-medium text-charcoal">&lt; 1.5s</div>
                    <div className="text-sm font-medium text-accent font-inter">Time to Interactive (3G)</div>
                    <p className="text-xs text-earth/70 leading-relaxed pt-2 border-t border-line font-inter font-light">
                      Reduced initial payload by 70–80% via client-side WebP conversion, compressing assets before they even touch the server.
                    </p>
                  </div>

                  <div className="card p-6 space-y-2">
                    <div className="text-3xl font-poppins font-medium text-charcoal">90%</div>
                    <div className="text-sm font-medium text-accent font-inter">Lower Database I/O</div>
                    <p className="text-xs text-earth/70 leading-relaxed pt-2 border-t border-line font-inter font-light">
                      Bypassed SQL polling completely by routing real-time kitchen updates through Redis and WebSockets.
                    </p>
                  </div>

                  <div className="card p-6 space-y-2">
                    <div className="text-3xl font-poppins font-medium text-charcoal">~100%</div>
                    <div className="text-sm font-medium text-accent font-inter">Payment Reliability</div>
                    <p className="text-xs text-earth/70 leading-relaxed pt-2 border-t border-line font-inter font-light">
                      Zero duplicate billing. Webhooks acknowledge in &lt;100ms while RabbitMQ handles the heavy subscription logic in the background.
                    </p>
                  </div>

                  <div className="card p-6 space-y-2">
                    <div className="text-3xl font-poppins font-medium text-charcoal">70%</div>
                    <div className="text-sm font-medium text-accent font-inter">Lower Memory Footprint</div>
                    <p className="text-xs text-earth/70 leading-relaxed pt-2 border-t border-line font-inter font-light">
                      Virtualization prevents low-end Androids from crashing on massive 500+ item menus by prioritizing the first 5 elements.
                    </p>
                  </div>
                </div>

                {/* Near-Zero Operational Cost — redesigned as inline callout text */}
                <p className="text-sm text-earth/70 leading-relaxed font-inter font-light border-l-2 border-line pl-4 mt-2">
                  By aggressively offloading heavy tasks (like shifting complex PDF template generation entirely to the client-side app) and heavily caching assets, the entire architecture scales to the first 1,000 users on a single, low-cost VPS with true zero-downtime deployments.
                </p>
              </div>
            </section>

            {/* 06 Artifacts */}
            <section id="artifacts" className="space-y-6 reveal is-in scroll-mt-28 pb-12">
              <div className="flex items-center gap-4">
                <span className="eyebrow">06.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Artifacts</h2>
                <div className="eyebrow-rule ml-2" />
              </div>

              {/* Artifact items */}
              <div className="space-y-4">
                {/* PRD */}
                <button
                  onClick={() => setPrdOpen(true)}
                  className="card p-6 w-full flex flex-col sm:flex-row sm:items-center text-left hover:border-accent/30 transition-all group gap-4"
                >
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="text-sm sm:text-base font-medium text-charcoal font-inter">Product Requirements Document</div>
                    <div className="text-xs sm:text-sm text-earth/60 font-inter font-light">ZaykaTap PRD · v1.2</div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-accent group-hover:text-blue-600 transition-colors">
                    Request Access
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Placeholder for future artifacts */}
                <div className="card p-6 border-dashed bg-transparent flex flex-col items-center justify-center text-center gap-2 min-h-[120px]">
                  <p className="font-mono text-sm text-earth/50">Screenshots &amp; diagrams coming soon</p>
                  <p className="text-xs text-earth/40 font-inter font-light">Architecture diagrams and product screenshots will live here.</p>
                </div>
              </div>
            </section>

            <EndOfDemo projectName="ZaykaTap" />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
