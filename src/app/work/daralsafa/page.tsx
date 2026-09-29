"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle, Clock } from "lucide-react";
import { Footer } from "@/components/Footer";
import { EndOfDemo } from "@/components/EndOfDemo";
import { CaseStudyTOC, TOCItem } from "@/components/CaseStudyTOC";
import { PRDModal } from "@/components/PRDModal";

const TOC_ITEMS: TOCItem[] = [
  { id: "overview", label: "Overview", number: "01" },
  { id: "problem", label: "The Problem", number: "02" },
  { id: "users", label: "The Users", number: "03" },
  { id: "mvp", label: "The MVP", number: "04" },
  { id: "execution", label: "Execution", number: "05" },
  { id: "learnings", label: "Learnings", number: "06" },
  { id: "artifacts", label: "Artifacts", number: "07" },
];

export default function DarAlSafaCaseStudy() {
  const [prdOpen, setPrdOpen] = useState(false);

  return (
    <>
      {prdOpen && <PRDModal onClose={() => setPrdOpen(false)} projectName="Dar Al Safa" />}

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
                  <h1 className="text-4xl md:text-5xl font-poppins font-medium tracking-[-0.015em] text-charcoal">Dar Al Safa</h1>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <a href="https://daralsafa.site" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-blue-600 transition-colors font-inter">
                      daralsafa.site
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
                  An online learning infrastructure connecting students with universities, institutes, and independent scholars for verified Islamic education.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 pt-1 text-sm font-inter">
                  <span className="text-earth/50"><span className="font-medium text-charcoal">Role</span> · Lead Engineer &amp; Product</span>
                  <span className="text-earth/50"><span className="font-medium text-charcoal">Timeline</span> · 2026 – Present</span>
                  <span className="text-earth/50"><span className="font-medium text-charcoal">Status</span> · Live MVP</span>
                  <span className="text-earth/50"><span className="font-medium text-charcoal">Platform</span> · Web</span>
                </div>
              </div>
            </section>

            {/* 02 Problem */}
            <section id="problem" className="space-y-8 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">02.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">The education maze</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                If you want to pursue formal Islamic education today, you&apos;re essentially walking into a maze. 
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                There is no single place to compare curriculums, verify a scholar&apos;s credentials, or figure out which educational path actually makes sense. Students waste weeks hunting down outdated university websites, relying on WhatsApp forwards, or digging through Facebook groups just to find out if a course exists.
              </p>
              
              <div className="mt-16 py-8 flex flex-col items-center justify-center text-center">
                <span className="text-xs uppercase tracking-widest text-earth/50 font-mono mb-4">The Insight</span>
                <p className="text-xl md:text-2xl font-inter font-light text-charcoal leading-relaxed max-w-2xl">
                  The problem wasn&apos;t a lack of online education. The problem was that credible information was completely scattered, blocking students before they even started.
                </p>
              </div>
            </section>

            {/* 03 Users */}
            <section id="users" className="space-y-8 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">03.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">One platform, three disconnected users</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              
              <p className="text-xl text-earth leading-relaxed font-inter font-light">
                I surveyed 30 students and mapped out exactly what was broken. It became clear that the ecosystem was failing <span className="font-medium text-charcoal">three distinct groups</span> for very different reasons:
              </p>

              <div className="space-y-10 my-12">
                {/* User 1 */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-charcoal font-inter uppercase tracking-widest">1. The Students</h3>
                  <p className="text-earth leading-relaxed font-inter font-light">
                    They need to discover verified programs, compare curriculums, and enroll without jumping across five different unmaintained websites.
                  </p>
                </div>

                {/* User 2 */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-charcoal font-inter uppercase tracking-widest">2. Independent Scholars</h3>
                  <p className="text-earth leading-relaxed font-inter font-light">
                    They have deep domain knowledge but completely lack the technical skills to host lectures, manage global cohorts, and grade submissions online.
                  </p>
                </div>

                {/* User 3 */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-charcoal font-inter uppercase tracking-widest">3. Institutions</h3>
                  <p className="text-earth leading-relaxed font-inter font-light">
                    They desperately want to offer distance learning and issue verifiable certificates, but they don&apos;t have dedicated IT departments to maintain legacy, clunky LMS software.
                  </p>
                </div>
              </div>
            </section>

            {/* 04 MVP */}
            <section id="mvp" className="space-y-4 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">04.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">What the first version actually needed</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                The product direction became obvious: build a centralized hub that removes technical overhead for educators and discovery friction for students.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                But I had to strictly scope the MVP. Building less was a deliberate product decision, not a technical limitation. The first version couldn&apos;t solve every education problem. It only needed to solve discovery and delivery well.
              </p>
              
              <div className="mt-12 flex flex-col">
                {/* Built */}
                <div className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center mt-1">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <div className="w-px h-full bg-accent/20 my-2" />
                  </div>
                  <div className="pb-10">
                    <h3 className="text-lg font-poppins font-medium text-charcoal tracking-[-0.01em] mb-3">What made the cut</h3>
                    <ul className="space-y-2 text-earth leading-relaxed font-inter font-light">
                      <li><span className="text-accent/50 mr-2">•</span>A simple interface to browse verified programs</li>
                      <li><span className="text-accent/50 mr-2">•</span>Instant enrollment and payment</li>
                      <li><span className="text-accent/50 mr-2">•</span>A unified dashboard for course materials</li>
                      <li><span className="text-accent/50 mr-2">•</span>A zero-setup portal for educators to upload lectures</li>
                    </ul>
                  </div>
                </div>

                {/* Postponed */}
                <div className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center mt-1">
                    <Clock className="w-5 h-5 text-earth/40 shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-lg font-poppins font-medium text-charcoal/60 tracking-[-0.01em] mb-3">What I postponed</h3>
                    <ul className="space-y-2 text-earth/60 leading-relaxed font-inter font-light">
                      <li><span className="text-earth/40 mr-2">-</span>Complex community forums</li>
                      <li><span className="text-earth/40 mr-2">-</span>Advanced gamification</li>
                      <li><span className="text-earth/40 mr-2">-</span>Automated AI grading</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 05 Execution */}
            <section id="execution" className="space-y-4 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">05.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Execution &amp; Architecture</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                Because the platform had to support distinct workflows for students, individual teachers, and large institutions, the backend needed a structure that could evolve without coupling every experience together.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                I architected the backend using Laravel and MySQL. Exposing clean REST APIs allowed me to keep the frontend completely decoupled. The database schema strictly separated institutional data from independent scholar courses to prevent permission leaks.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                To ensure we could ship updates rapidly based on early student feedback, I containerized the stack with Docker and wired up a strict CI/CD pipeline. We can push a fix and have it live with zero downtime.
              </p>
            </section>

            {/* 06 Learnings */}
            <section id="learnings" className="space-y-4 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">06.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Trade-offs &amp; Learnings</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                Building a multi-sided platform taught me that prioritizing the core flow is the only way to ship. I could have built a massive, feature-heavy LMS from day one. Instead, focusing strictly on finding a course and actually taking it allowed us to launch the MVP significantly faster.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                The biggest takeaway? Institutions don&apos;t want software that requires a 50-page manual. They want tools that don&apos;t require an IT team to run. The technology has to get completely out of their way.
              </p>
            </section>

            {/* 07 Artifacts */}
            <section id="artifacts" className="space-y-6 reveal is-in scroll-mt-28 pb-12">
              <div className="flex items-center gap-4">
                <span className="eyebrow">07.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Artifacts</h2>
                <div className="eyebrow-rule ml-2" />
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setPrdOpen(true)}
                  className="card p-6 w-full flex flex-col sm:flex-row sm:items-center text-left hover:border-accent/30 transition-all group gap-4"
                >
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="text-sm sm:text-base font-medium text-charcoal font-inter">Product Requirements Document</div>
                    <div className="text-xs sm:text-sm text-earth/60 font-inter font-light">Dar Al Safa PRD · v1.0</div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-accent group-hover:text-blue-600 transition-colors">
                    Request Access
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>

                <div className="card p-6 border-dashed bg-transparent flex flex-col items-center justify-center text-center gap-2 min-h-[120px]">
                  <p className="font-mono text-sm text-earth/50">Screenshots &amp; diagrams coming soon</p>
                  <p className="text-xs text-earth/40 font-inter font-light">Architecture diagrams and product screenshots will live here.</p>
                </div>
              </div>
            </section>

            <EndOfDemo projectName="Dar Al Safa" />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
