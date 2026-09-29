"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Smartphone, Sparkles, Headset } from "lucide-react";
import { Footer } from "@/components/Footer";
import { EndOfDemo } from "@/components/EndOfDemo";
import { CaseStudyTOC, TOCItem } from "@/components/CaseStudyTOC";
import { PRDModal } from "@/components/PRDModal";

const TOC_ITEMS: TOCItem[] = [
  { id: "overview", label: "Overview", number: "01" },
  { id: "problem", label: "The Problem", number: "02" },
  { id: "users", label: "The Users", number: "03" },
  { id: "mvp", label: "The MVP", number: "04" },
  { id: "business-model", label: "Business Model", number: "05" },
  { id: "architecture", label: "Architecture", number: "06" },
  { id: "trade-offs", label: "Trade-offs", number: "07" },
  { id: "learnings", label: "Learnings", number: "08" },
  { id: "artifacts", label: "Artifacts", number: "09" },
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
                  ZaykaTap is a marketplace connecting food vendors and cafés. For cafés, it provides free QR menus, live ordering, and table management. For food vendors, it opens a targeted B2B channel to reach those exact cafés.
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
            <section id="problem" className="space-y-8 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">02.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">The problem wasn&apos;t the menu</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              
              <p className="text-xl text-earth leading-relaxed font-inter font-light">
                Restaurants already had digital menus. They didn&apos;t have a simple way to turn them into <span className="font-medium text-charcoal">live ordering systems.</span>
              </p>

              <div className="space-y-10 my-12">
                {/* Scene 1 */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-charcoal font-inter uppercase tracking-widest">Scene 1: The Café</h3>
                  <p className="text-earth leading-relaxed font-inter font-light">
                    Picture a busy café on a Saturday night. Customers are waving down staff just to get a menu. When they finally order, it&apos;s jotted on paper and walked to the kitchen. It&apos;s slow, error-prone, and deeply frustrating.
                  </p>
                </div>

                {/* Scene 2 */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-charcoal font-inter uppercase tracking-widest">Scene 2: The Vendor</h3>
                  <p className="text-earth leading-relaxed font-inter font-light">
                    Meanwhile, food vendors are blindly trying to sell their supplies to these exact cafés with zero targeted reach. They rely on cold calls and physical walk-ins, entirely missing the venues that need them most.
                  </p>
                </div>
              </div>

              <div className="mt-16 py-8 flex flex-col items-center justify-center text-center">
                <span className="text-xs uppercase tracking-widest text-earth/50 font-mono mb-4">The Insight</span>
                <p className="text-xl md:text-2xl font-inter font-light text-charcoal leading-relaxed max-w-2xl">
                  I saw a massive gap in the market: solve the café&apos;s chaos, and you build the exact audience the vendors want to reach.
                </p>
              </div>
            </section>

            {/* 03 Users */}
            <section id="users" className="space-y-4 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">03.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Three users, three different problems</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                Any solution had to survive the chaos of the real world and satisfy three distinct groups:
              </p>
              <ul className="space-y-3 text-earth leading-relaxed font-inter font-light list-disc list-outside ml-5">
                <li><strong className="font-medium text-charcoal">Customers:</strong> They just want to order food. They don&apos;t want to download an app or pinch-and-zoom a static PDF on spotty 3G.</li>
                <li><strong className="font-medium text-charcoal">Kitchens:</strong> They need chaos reduced. Live order tickets absolutely cannot get lost, and low-end tablets dropping Wi-Fi can&apos;t break the system.</li>
                <li><strong className="font-medium text-charcoal">Food Vendors:</strong> They need targeted reach. They want to advertise and sell supplies directly to the cafés that need them most.</li>
              </ul>
            </section>

            {/* 04 MVP */}
            <section id="mvp" className="space-y-4 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">04.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">The MVP I actually needed</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                I could have built a massive restaurant management system. Instead, I focused on speed and a frictionless ordering flow. Competitors were offering clunky web apps that looked a decade old. Small cafés were priced out of enterprise POS systems.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                I decided to build exactly what they needed, nothing more: QR menus, live ordering directly to the kitchen, basic table management, and simple analytics. It had to feel like a premium, native app experience for the customer, right in the browser.
              </p>
            </section>

            {/* 05 Business Model */}
            <section id="business-model" className="space-y-4 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">05.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Why cafés get the core product for free</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                I could have charged cafés a flat subscription from day one. Instead, I kept the entire core platform—unlimited orders, unlimited tables, and basic AI analytics—completely free.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                That removed all friction for adoption. A café can sign up and digitize their entire operation without paying a dime. In the future, paid subscriptions will target power users who need premium capabilities:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 reveal-stagger is-in">
                <div className="card p-5 space-y-3 group hover:border-accent/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-surface border border-line flex items-center justify-center text-charcoal group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-medium text-charcoal font-inter">White-label Apps</div>
                  <p className="text-xs text-earth/70 font-light font-inter leading-relaxed">Custom branded apps for top-tier venues.</p>
                </div>
                <div className="card p-5 space-y-3 group hover:border-accent/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-surface border border-line flex items-center justify-center text-charcoal group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-medium text-charcoal font-inter">Advanced AI</div>
                  <p className="text-xs text-earth/70 font-light font-inter leading-relaxed">Predictive demand and inventory forecasting.</p>
                </div>
                <div className="card p-5 space-y-3 group hover:border-accent/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-surface border border-line flex items-center justify-center text-charcoal group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                    <Headset className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-medium text-charcoal font-inter">Priority Support</div>
                  <p className="text-xs text-earth/70 font-light font-inter leading-relaxed">Dedicated SLA and 24/7 direct assistance.</p>
                </div>
              </div>
              <p className="text-earth leading-relaxed font-inter font-light mt-4">
                By giving away the core infrastructure, we rapidly onboarded cafés, building the precise, highly engaged audience that food vendors pay to reach.
              </p>
            </section>

            {/* 06 Architecture */}
            <section id="architecture" className="space-y-8 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">06.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">When live orders changed the architecture</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              
              <div className="space-y-4">
                <p className="text-earth leading-relaxed font-inter font-light">
                  Live orders made stale data unacceptable. That pushed the architecture toward WebSockets and caching rather than repeated database polling.
                </p>
                <p className="text-earth leading-relaxed font-inter font-light">
                  If every customer phone and kitchen tablet hammered the database with SQL queries to check for new orders, the server would melt. Instead, when a customer pays, the order drops into the database once, then instantly fires through Redis to trigger a WebSocket event. The kitchen hears a &ldquo;ding!&rdquo; in milliseconds.
                </p>
                
                <h3 className="text-lg font-poppins font-medium text-charcoal mt-6">Structuring for scale without microservices</h3>
                <p className="text-earth leading-relaxed font-inter font-light">
                  To keep the heavy B2B admin panels from slowing down the high-traffic customer frontend, I split the monolith across strict subdomains:
                </p>

                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-line text-xs font-mono uppercase tracking-widest text-earth/50">
                        <th className="py-3 px-4 font-normal w-1/4">Subdomain</th>
                        <th className="py-3 px-4 font-normal w-3/4">Product Reasoning</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-inter font-light text-earth/80">
                      <tr className="border-b border-line/50 hover:bg-surface/50 transition-colors">
                        <td className="py-3 px-4 font-mono text-charcoal font-medium">api.</td>
                        <td className="py-3 px-4 leading-relaxed">Centralized business logic. Handles RabbitMQ retries for payment webhooks to ensure zero dropped orders.</td>
                      </tr>
                      <tr className="border-b border-line/50 hover:bg-surface/50 transition-colors">
                        <td className="py-3 px-4 font-mono text-charcoal font-medium">app.</td>
                        <td className="py-3 px-4 leading-relaxed">Café dashboard. Kept completely separate from the customer frontend so heavy analytics queries don&apos;t impact ordering speed.</td>
                      </tr>
                      <tr className="border-b border-line/50 hover:bg-surface/50 transition-colors">
                        <td className="py-3 px-4 font-mono text-charcoal font-medium">menu.</td>
                        <td className="py-3 px-4 leading-relaxed">Aggressively optimized customer UI. Uses DOM virtualization to render massive menus instantly on cheap smartphones.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 07 Trade-offs */}
            <section id="trade-offs" className="space-y-4 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">07.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">What I deliberately left out</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                I ruthlessly cut server costs for edge cases to keep the product economically viable.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                For example, generating pixel-perfect PDF menus with complex templates and QR codes is computationally heavy. I completely stripped that from the backend and shifted it to the client-side of the React Native app. The server doesn&apos;t even know it&apos;s happening.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                Similarly, before a café owner&apos;s image upload ever hits my server, it&apos;s processed client-side and converted to WebP. This reduced initial payloads by 70–80%, improving the Time to Interactive (TTI) on 3G networks without increasing server load.
              </p>
            </section>

            {/* 08 Learnings */}
            <section id="learnings" className="space-y-4 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">08.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">What building it taught me</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                Building a two-sided marketplace forced me to make pragmatic technical choices. I learned that technical constraints often drive better product decisions. Moving heavy image processing and PDF generation to the client-side wasn&apos;t just cheaper—it made the core backend significantly more resilient.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                Most importantly, I learned that small businesses don&apos;t care about the tech stack or perfect code. They care if the kitchen tablet rings the instant a customer pays. If it works consistently, they trust it.
              </p>

              {/* Metrics grid — framed as internal testing or design outcomes where needed */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 reveal-stagger is-in">
                <div className="card p-6 space-y-2">
                  <div className="text-3xl font-poppins font-medium text-charcoal">&lt; 1.5s</div>
                  <div className="text-sm font-medium text-accent font-inter">Time to Interactive (3G)</div>
                  <p className="text-xs text-earth/70 leading-relaxed pt-2 border-t border-line font-inter font-light">
                    Achieved via aggressive client-side compression and DOM virtualization.
                  </p>
                </div>
                <div className="card p-6 space-y-2">
                  <div className="text-3xl font-poppins font-medium text-charcoal">90%</div>
                  <div className="text-sm font-medium text-accent font-inter">Lower Database I/O</div>
                  <p className="text-xs text-earth/70 leading-relaxed pt-2 border-t border-line font-inter font-light">
                    Internal testing showed massive drops in load by bypassing SQL polling for WebSockets.
                  </p>
                </div>
              </div>
            </section>

            {/* 09 Artifacts */}
            <section id="artifacts" className="space-y-6 reveal is-in scroll-mt-28 pb-12">
              <div className="flex items-center gap-4">
                <span className="eyebrow">09.</span>
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
