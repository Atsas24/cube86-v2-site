"use client";

import Link from "next/link";

export function MobileCtaBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 pointer-events-none">
      <div className="h-16 bg-gradient-to-t from-[var(--bg-cream)] to-transparent" />
      <div className="bg-[var(--bg-cream)] px-4 pb-5 pt-2 pointer-events-auto">
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 w-full rounded-full bg-[var(--brand-forest)] text-[var(--bg-cream)] font-semibold text-[15px] px-6 py-4 shadow-lg active:scale-[0.98] transition-transform duration-150"
        >
          Book a free call
          <span aria-hidden className="text-[var(--accent-lime)]">→</span>
        </Link>
      </div>
    </div>
  );
}
