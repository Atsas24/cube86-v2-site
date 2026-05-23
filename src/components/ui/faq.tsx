"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

export function FAQ({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[var(--border)]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-6 py-5 text-left"
          >
            <span className="font-display text-[18px] md:text-[20px] leading-snug text-[var(--ink)]">
              {item.q}
            </span>
            <span
              aria-hidden
              className="shrink-0 mt-1 w-6 h-6 rounded-full border border-[var(--border-strong)] flex items-center justify-center text-[var(--brand-forest)] text-[16px] leading-none transition-transform duration-200"
              style={{ transform: open === i ? "rotate(45deg)" : "none" }}
            >
              +
            </span>
          </button>
          {open === i && (
            <p className="pb-5 text-[15px] leading-[1.75] text-[var(--ink-muted)]">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
