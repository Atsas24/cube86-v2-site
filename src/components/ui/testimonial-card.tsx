"use client";

export default function TestimonialCard() {
  return (
    <section className="relative bg-[var(--bg-cream)] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="relative rounded-3xl bg-[var(--brand-forest-deep)] text-[var(--bg-cream)] p-8 md:p-12 lg:p-16 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(600px 300px at 90% 0%, rgba(199,227,106,0.08), transparent 60%), radial-gradient(500px 300px at 0% 100%, rgba(41,80,61,0.6), transparent 60%)",
            }}
          />
          <div aria-hidden className="absolute inset-0 grain" />

          <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <svg width="36" height="28" viewBox="0 0 36 28" fill="none" className="text-[var(--accent-lime)]" aria-hidden>
                <path d="M0 28V16C0 7.163 7.163 0 16 0H17V8H16C11.582 8 8 11.582 8 16H16V28H0ZM20 28V16C20 7.163 27.163 0 36 0V8C31.582 8 28 11.582 28 16H36V28H20Z" fill="currentColor" />
              </svg>
              <p className="mt-6 font-display text-[24px] md:text-[30px] lg:text-[36px] leading-[1.25] text-[var(--bg-cream)]">
                &ldquo;Cube86 didn&apos;t just automate a few tasks. They redesigned the way our team operates. We&apos;ve cut admin in half and our donors actually hear from us on time now.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-[var(--brand-forest)] border border-[var(--border-onforest)]"
                  aria-hidden
                />
                <div>
                  <div className="text-[14px] text-[var(--bg-cream)] font-medium">
                    Operations Director
                  </div>
                  <div className="text-[12px] text-[var(--bg-cream)]/60">
                    UK-based charity, 40 staff
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-3 gap-3 md:gap-4">
              {[
                { value: "2023", label: "Founded" },
                { value: "50+", label: "Clients" },
                { value: "4", label: "Industries" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-[var(--border-onforest)] bg-white/[0.03] p-4 md:p-5 text-center"
                >
                  <div className="font-display text-[28px] md:text-[34px] text-[var(--bg-cream)] leading-none">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-[var(--bg-cream)]/60">
                    {s.label}
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
