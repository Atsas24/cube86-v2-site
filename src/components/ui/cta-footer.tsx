"use client";

import Link from "next/link";
import Logo from "./logo";

const FOOTER_LINKS = [
  {
    heading: "Services",
    links: [
      { label: "Operations automation", href: "/services" },
      { label: "AI voice & chat agents", href: "/services" },
      { label: "Marketing & growth", href: "/services" },
      { label: "Dashboards & reporting", href: "/services" },
      { label: "CRM & lifecycle", href: "/services" },
      { label: "Websites", href: "/services" },
      { label: "Lead generation", href: "/services" },
      { label: "Personal & freelancer", href: "/services" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Small business", href: "/industries/small-business" },
      { label: "Charities & non-profits", href: "/industries/charities" },
      { label: "Professional services", href: "/industries/professional-services" },
      { label: "Hospitality", href: "/industries/hospitality" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function CtaFooter() {
  return (
    <section className="relative bg-[var(--brand-forest)] text-[var(--bg-cream)] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 500px at 100% 0%, rgba(199,227,106,0.10), transparent 60%), radial-gradient(700px 500px at 0% 100%, rgba(21,42,32,0.7), transparent 60%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 grain" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12 pt-20 md:pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--accent-lime)] font-semibold">
              Let&apos;s get started
            </p>
            <h2 className="mt-3 font-display text-[40px] md:text-[60px] lg:text-[78px] leading-[0.98] text-[var(--bg-cream)]">
              <span className="block">Tell us what&apos;s slowing you down.</span>
              <span className="block mt-[0.2em]">We&apos;ll find a way to <span className="italic whitespace-nowrap">fix it.</span></span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-lime)] text-[var(--brand-forest-deep)] text-[15px] font-semibold px-6 py-3.5 hover:bg-[var(--accent-lime-bright)] active:scale-[0.98] transition-[transform,background-color] duration-200"
            >
              Book a 20-min call
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-onforest)] text-[var(--bg-cream)] text-[15px] font-medium px-6 py-3.5 hover:bg-white/5 transition-[background-color] duration-200"
            >
              See our work
            </Link>
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 pb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <Logo variant="cream" />
            <p className="mt-5 text-[14px] leading-[1.7] text-[var(--bg-cream)]/65 max-w-xs">
              We design and build operating systems for ambitious teams.
              Operations, automation and AI — done with you, not just for you.
            </p>
          </div>
          {FOOTER_LINKS.map((g) => (
            <div key={g.heading} className="lg:col-span-2">
              <h4 className="text-[12px] uppercase tracking-[0.18em] text-[var(--accent-lime)]/80 font-semibold">
                {g.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-[var(--bg-cream)]/75 hover:text-[var(--bg-cream)] transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--border-onforest)] py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[12px] text-[var(--bg-cream)]/55">
            © {new Date().getFullYear()} Cube86. All rights reserved.
          </p>
          <p className="text-[12px] text-[var(--bg-cream)]/55">
            Built in London. Working globally.
          </p>
        </div>
      </div>
    </section>
  );
}
