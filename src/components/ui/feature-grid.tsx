"use client";

import { useState } from "react";
import Image from "next/image";
import { DashboardScroll } from "@/components/ui/dashboard-scroll";
import { BgGrid } from "@/components/ui/bg-grid";
import { AnimateInView } from "@/components/ui/animate-in-view";

const FEATURES = [
  {
    eyebrow: "01",
    title: "Workflow Automation",
    body: "We eliminate your most repetitive admin — approvals, reporting, onboarding, invoicing — and turn them into automated workflows that run without you.",
    image: "/dash-workflow-v5.jpg",
    alt: "Workflow automation dashboard",
  },
  {
    eyebrow: "02",
    title: "AI Voice & Chat Agents",
    body: "Always-on AI receptionists that handle first-line enquiries, book appointments and qualify leads across phone, web chat and WhatsApp — 24 hours a day.",
    image: "/dash-voice-v5.jpg",
    alt: "AI voice receptionist workflow",
  },
  {
    eyebrow: "03",
    title: "Unified Reporting",
    body: "One live dashboard pulling from every tool you use — CRM, finance, ops, marketing. No more chasing spreadsheets or switching between platforms.",
    image: "/dash-reporting-v5.jpg",
    alt: "Live business intelligence dashboard",
  },
];

export default function FeatureGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white border-t border-[var(--border)] py-20 md:py-28 lg:py-32">
      <BgGrid withReveal={true} />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 md:mb-18">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold">
              What you&apos;ll get
            </p>
            <h2 className="mt-3 font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-[var(--ink)] max-w-2xl">
              Modern tools, wired together to make everything run smarter.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[16px] md:text-[17px] leading-[1.7] text-[var(--ink-muted)] max-w-md">
            We design the system first, then choose the right tools to build
            it — whether that means working with what you already have or
            setting up something new from scratch.
          </p>
        </div>

        {/* Dashboard showcase with crossfade */}
        <div className="mb-6">
          <DashboardScroll>
            <div className="relative w-full">
              {FEATURES.map((f, i) => (
                <div
                  key={f.image}
                  className={`transition-opacity duration-300 ${
                    i === 0 ? "" : "absolute inset-0"
                  } ${activeIndex === i ? "opacity-100" : "opacity-0"}`}
                >
                  <Image
                    src={f.image}
                    alt={f.alt}
                    width={1380}
                    height={776}
                    className="w-full h-auto block"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </DashboardScroll>
        </div>

        {/* Feature cards — hover changes the dashboard image above */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {FEATURES.map((f, i) => (
            <AnimateInView key={f.eyebrow} delay={i * 0.08}>
              <article
                className={`rounded-2xl bg-[var(--brand-forest-deep)] p-6 md:p-8 cursor-default transition-[transform,box-shadow,outline-color] duration-300 outline outline-1 ${
                  activeIndex === i
                    ? "-translate-y-1 shadow-[0_20px_48px_-12px_rgba(15,26,20,0.28)] outline-[var(--accent-lime)]/40"
                    : "outline-transparent hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_rgba(15,26,20,0.28)]"
                }`}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(0)}
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent-lime)] font-semibold">
                  {f.eyebrow}
                </span>
                <h3 className="mt-4 font-display text-[22px] md:text-[24px] leading-[1.15] text-[var(--bg-cream)]">
                  {f.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[var(--bg-cream)]/60">
                  {f.body}
                </p>
              </article>
            </AnimateInView>
          ))}
        </div>

      </div>
    </section>
  );
}
