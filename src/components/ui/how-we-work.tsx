"use client";

import Link from "next/link";

const STEPS = [
  {
    number: "01",
    title: "Discovery call (20 mins)",
    body: "We understand your operation, ask the right questions and identify the two or three manual processes costing your team the most time each week.",
  },
  {
    number: "02",
    title: "Audit & proposal",
    body: "We map the full picture — tools, data flows, manual steps — and propose a phased build in plain English. No jargon. No fluff.",
  },
  {
    number: "03",
    title: "Build & launch",
    body: "We design, build and test the automations, dashboards and agents. You're kept in the loop throughout. We don't disappear until it's working.",
  },
  {
    number: "04",
    title: "Iterate & optimise",
    body: "We monitor what we've built, tune it as your business evolves and expand the system as you grow. This is a relationship, not a handoff.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative bg-[var(--brand-forest-deep)] text-[var(--bg-cream)] overflow-hidden py-20 md:py-28 lg:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 400px at 100% 0%, rgba(199,227,106,0.07), transparent 55%), radial-gradient(600px 400px at 0% 100%, rgba(41,80,61,0.5), transparent 55%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 grain" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: heading + CTA */}
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent-lime)] font-semibold">
              How we work
            </p>
            <h2 className="mt-3 font-display text-[36px] md:text-[48px] lg:text-[54px] leading-[1.02] tracking-[-0.02em] text-[var(--bg-cream)]">
              From first call to running system — in four steps.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-[var(--bg-cream)]/60 max-w-sm">
              We work alongside your team — not as a vendor at arm&apos;s length, but as the ops and automation partner you wish you already had.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-lime)] text-[var(--brand-forest-deep)] font-semibold text-[15px] px-7 py-4 hover:bg-[var(--accent-lime-bright)] active:scale-[0.98] transition-[transform,background-color] duration-200"
              >
                Start with a free 20-min call
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* Right: process steps */}
          <div className="lg:col-span-7">
            <div className="space-y-0 divide-y divide-white/[0.07]">
              {STEPS.map((step) => (
                <div key={step.number} className="group py-6 flex gap-6 items-start">
                  <span className="font-display text-[36px] leading-none text-[var(--bg-cream)]/15 group-hover:text-[var(--accent-lime)]/40 transition-colors duration-300 shrink-0 w-12 text-right">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-[22px] md:text-[24px] leading-tight text-[var(--bg-cream)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.7] text-[var(--bg-cream)]/60">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
