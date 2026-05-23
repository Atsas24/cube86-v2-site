import Link from "next/link";
import { BgGrid } from "@/components/ui/bg-grid";

export default function ValueStatement() {
  return (
    <section className="relative bg-[var(--bg-cream)] overflow-hidden py-20 md:py-28">
      <BgGrid withReveal={true} />
      <div className="relative mx-auto max-w-5xl px-6 md:px-10 lg:px-12 text-center">
        <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold">
          Our commitment
        </span>
        <blockquote className="mt-6 font-display text-[28px] md:text-[36px] lg:text-[44px] leading-[1.15] tracking-[-0.02em] text-[var(--ink)] max-w-3xl mx-auto">
          &ldquo;Most businesses don&apos;t have a technology problem.
          They have a prioritisation problem. We fix both.&rdquo;
        </blockquote>
        <p className="mt-8 text-[16px] leading-[1.7] text-[var(--ink-muted)] max-w-xl mx-auto">
          We start every engagement by finding what matters most — then we build
          it, test it, and hand it over running. No slide decks, no locked-in
          retainers, no waiting six months for ROI.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] text-[var(--ink)] text-[15px] font-medium px-7 py-4 hover:bg-white active:scale-[0.98] transition-[transform,background-color] duration-200"
        >
          See how we start
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
