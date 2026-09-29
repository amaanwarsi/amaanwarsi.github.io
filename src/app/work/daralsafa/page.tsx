"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, X, Mail, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";
import { EndOfDemo } from "@/components/EndOfDemo";
import { CaseStudyTOC, TOCItem } from "@/components/CaseStudyTOC";
import { siteConfig } from "@/config/site";
import { PRDModal } from "@/components/PRDModal";

const TOC_ITEMS: TOCItem[] = [
  { id: "overview", label: "Overview", number: "01" },
  { id: "problem", label: "Problem", number: "02" },
  { id: "goals", label: "Goals", number: "03" },
  { id: "product", label: "Product", number: "04" },
  { id: "engineering", label: "Engineering", number: "05" },
  { id: "artifacts", label: "Artifacts", number: "06" },
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
                  Online learning platform connecting students with universities, institutes, and independent teachers.
                </p>
                {/* Inline meta — no cards */}
                <div className="flex flex-wrap gap-x-6 gap-y-1 pt-1 text-sm font-inter">
                  <span className="text-earth/50"><span className="font-medium text-charcoal">Role</span> · Lead Engineer &amp; Product</span>
                  <span className="text-earth/50"><span className="font-medium text-charcoal">Timeline</span> · 2026 – Present</span>
                  <span className="text-earth/50"><span className="font-medium text-charcoal">Status</span> · Live MVP</span>
                  <span className="text-earth/50"><span className="font-medium text-charcoal">Platform</span> · Web</span>
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
                If you want to pursue formal Islamic education today, you&apos;re essentially walking into a maze. I spoke to dozens of students and they all shared the exact same frustration: credible information is completely scattered. You have to hunt down university websites, rely on WhatsApp forwards, or dig through Facebook groups just to find out if a course even exists.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                There was no single place to compare curriculums, verify a scholar&apos;s credentials, or figure out which educational path actually made sense. Students were wasting weeks just trying to piece together basic information before they could even start learning.
              </p>
            </section>

            {/* 03 Goals */}
            <section id="goals" className="space-y-4 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">03.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Goals</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                I didn&apos;t just want to build another directory; I wanted to build the definitive infrastructure for distance Islamic education. The goal was twofold:
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                First, for the <strong className="font-medium text-charcoal">students</strong>, I wanted to create a centralized hub where discovering, comparing, and enrolling in verified degree and certificate programs is entirely frictionless. They needed a seamless learning environment to track their progress and earn verifiable academic credentials.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                Second, for the <strong className="font-medium text-charcoal">institutions and independent scholars</strong>, I needed to strip away the technical overhead. They required a platform where they could effortlessly adopt distance learning, manage global cohorts, and issue certificates—all without needing an IT department.
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
                Before writing a single line of code, I ran deep user research and surveyed 30 students to map out exactly what was broken. That research turned into a comprehensive PRD and strict user flows that shaped the live MVP.
              </p>
              <ul className="space-y-3 text-earth leading-relaxed font-inter font-light list-disc list-outside ml-5">
                <li><strong className="font-medium text-charcoal">For Students:</strong> A beautifully simple interface to browse verified programs, enroll instantly, access course materials, and track their progress towards an academic credential.</li>
                <li><strong className="font-medium text-charcoal">For Universities:</strong> A powerful, intuitive dashboard to publish curriculums, manage global student cohorts, and deliver distance learning at scale.</li>
                <li><strong className="font-medium text-charcoal">For Scholars:</strong> Dedicated portals to upload lectures, create quizzes, grade submissions, and monitor student performance without wrestling with clunky legacy LMS software.</li>
              </ul>
            </section>

            {/* 05 Engineering */}
            <section id="engineering" className="space-y-4 reveal is-in scroll-mt-28">
              <div className="flex items-center gap-4">
                <span className="eyebrow">05.</span>
                <h2 className="text-2xl font-poppins font-medium text-charcoal tracking-[-0.015em]">Engineering</h2>
                <div className="eyebrow-rule ml-2" />
              </div>
              <p className="text-earth leading-relaxed font-inter font-light">
                For the live MVP, I architected a highly scalable backend using <strong className="font-medium text-charcoal">Laravel</strong> and <strong className="font-medium text-charcoal">MySQL</strong>, exposing clean, fast REST APIs to power the frontend experiences.
              </p>
              <p className="text-earth leading-relaxed font-inter font-light">
                But building the product was only half the battle—it needed to be rock-solid in production. I containerized the entire application stack using <strong className="font-medium text-charcoal">Docker</strong> to guarantee consistency from my local machine all the way to the live server. Finally, I wired up a strict <strong className="font-medium text-charcoal">CI/CD</strong> pipeline, automating our testing and deployment workflows. This meant we could iterate rapidly based on student feedback and ship updates with zero downtime.
              </p>
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
                    <div className="text-xs sm:text-sm text-earth/60 font-inter font-light">Dar Al Safa PRD · v1.0</div>
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

            <EndOfDemo projectName="Dar Al Safa" />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
