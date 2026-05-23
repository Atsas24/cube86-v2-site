"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Logo from "./logo";

const INDUSTRIES = [
  { label: "Small business", href: "/industries/small-business" },
  { label: "Charities & non-profits", href: "/industries/charities" },
  { label: "Professional services", href: "/industries/professional-services" },
  { label: "Hospitality", href: "/industries/hospitality" },
];

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

const MOBILE_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Small business", href: "/industries/small-business" },
  { label: "Charities & non-profits", href: "/industries/charities" },
  { label: "Professional services", href: "/industries/professional-services" },
  { label: "Hospitality", href: "/industries/hospitality" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export default function NavHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const industriesDropdownRef = useRef<HTMLDivElement>(null);
  const industriesButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (industriesOpen) {
          setIndustriesOpen(false);
          setFocusedIndex(-1);
          industriesButtonRef.current?.focus();
        }
        if (mobileOpen) {
          setMobileOpen(false);
          mobileButtonRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [industriesOpen, mobileOpen]);

  const handleIndustriesKeyDown = (e: React.KeyboardEvent) => {
    if (!industriesOpen && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setIndustriesOpen(true);
      setFocusedIndex(0);
      return;
    }

    if (!industriesOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => (prev < INDUSTRIES.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0) {
          window.location.href = INDUSTRIES[focusedIndex].href;
        }
        break;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        <Logo variant="forest" />

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors duration-200 ease-out rounded-lg focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {l.label}
            </Link>
          ))}

          {/* Industries dropdown */}
          <div
            ref={industriesDropdownRef}
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => { setIndustriesOpen(false); setFocusedIndex(-1); }}
          >
            <button
              ref={industriesButtonRef}
              type="button"
              className="flex items-center gap-1 text-[15px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors duration-200 ease-out rounded-lg focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 focus-visible:outline-none px-3 py-2"
              onClick={() => setIndustriesOpen((v) => !v)}
              onKeyDown={handleIndustriesKeyDown}
              aria-expanded={industriesOpen}
              aria-haspopup="menu"
            >
              Industries
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className={`transition-transform duration-200 ease-out ${industriesOpen ? "rotate-180" : ""}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {industriesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl bg-white border border-[var(--border)] shadow-card-strong py-2 z-50" role="menu">
                <div className="px-3 pt-1 pb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)] font-semibold">Industries we serve</span>
                </div>
                {INDUSTRIES.map((ind, idx) => (
                  <Link
                    key={ind.href}
                    href={ind.href}
                    onClick={() => { setIndustriesOpen(false); setFocusedIndex(-1); }}
                    className={`block px-4 py-2.5 text-[14px] font-medium transition-colors duration-150 ease-out rounded-lg focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 focus-visible:outline-none ${
                      focusedIndex === idx
                        ? "bg-[var(--bg-cream)] text-[var(--brand-forest)]"
                        : "text-[var(--ink)] hover:bg-[var(--bg-cream)] hover:text-[var(--brand-forest)]"
                    }`}
                    role="menuitem"
                  >
                    {ind.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-forest)] text-[var(--bg-cream)] text-[14px] font-medium px-5 py-2.5 hover:bg-[var(--brand-forest-mid)] active:scale-[0.98] transition-[background-color,transform] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Book a call
            <span aria-hidden className="text-[var(--accent-lime)]">→</span>
          </Link>

          <button
            ref={mobileButtonRef}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-strong)] text-[var(--ink)] focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 focus-visible:outline-none transition-colors duration-200 ease-out"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d={mobileOpen ? "M3 3l12 12M15 3L3 15" : "M2 5h14M2 9h14M2 13h14"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[60] top-16 border-t border-[var(--border)] bg-white overflow-y-auto">
          <div className="px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-1">
            {MOBILE_LINKS.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[var(--ink)] py-2.5 text-sm sm:text-[15px] border-b border-[var(--border)] rounded-lg focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 focus-visible:outline-none transition-colors duration-200 ease-out ${
                  i >= 1 && i <= 4 ? "pl-3 sm:pl-4 text-[var(--ink-muted)] text-xs sm:text-[14px]" : "font-medium"
                }`}
              >
                {i === 1 && <span className="block text-[10px] uppercase tracking-[0.18em] text-[var(--brand-forest)] font-semibold mb-1">Industries</span>}
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 sm:mt-4 inline-flex items-center justify-center rounded-full bg-[var(--brand-forest)] text-[var(--bg-cream)] px-5 py-3 sm:py-3.5 font-medium text-sm sm:text-[15px] focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 focus-visible:outline-none transition-colors duration-200 ease-out"
            >
              Book a call →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
