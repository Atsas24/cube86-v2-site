"use client";

import Link from "next/link";
import { AnimateInView } from "@/components/ui/animate-in-view";

const STATS = [
  { value: "8", label: "Services. One integrated operating system." },
  { value: "48 hrs", label: "Average time to first working delivery." },
  { value: "100%", label: "Managed delivery — no dev team or IT resource needed on your side." },
];

export default function StatsRow() {
  return (
    <section className="relative bg-[var(--brand-forest-deep)] border-y border-white/[0.07] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">
          {STATS.map((s, i) => (
            <AnimateInView key={s.label} delay={i * 0.1}>
              <div className="md:px-8 first:pl-0 last:pr-0 pt-8 md:pt-0 first:pt-0 text-center">
                <p className="font-display text-[52px] md:text-[60px] leading-none tracking-[-0.03em] text-[var(--bg-cream)]">
                  {s.value}
                </p>
                <p className="mt-3 text-[15px] leading-[1.6] text-[var(--bg-cream)]/60">
                  {s.label}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--accent-lime)] hover:text-[var(--accent-lime-bright)] transition-colors duration-200"
          >
            See the work behind these numbers
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
