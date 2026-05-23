"use client";

const INTEGRATIONS = [
  "Notion", "Airtable", "HubSpot", "Slack",
  "Google Workspace", "Microsoft 365", "Stripe", "Xero",
  "Make", "n8n", "Zapier", "Claude",
];

export default function IntegrationsBand() {
  return (
    <section className="relative bg-[var(--brand-forest-deep)] text-[var(--bg-cream)] py-20 md:py-28 lg:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 400px at 0% 0%, rgba(31,59,45,0.7), transparent 60%), radial-gradient(600px 400px at 100% 100%, rgba(199,227,106,0.06), transparent 60%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 grain" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--accent-lime)] font-semibold">
            Works with what you have
          </p>
          <h2 className="mt-3 font-display text-[36px] md:text-[44px] lg:text-[54px] leading-[1.02] text-[var(--bg-cream)]">
            Don&apos;t replace.
            <br />
            <span className="italic">Integrate.</span>
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.7] text-[var(--bg-cream)]/70 max-w-md">
            Already using some of these? Good — we build around what you have.
            Starting from scratch? We&apos;ll recommend the right stack and set
            it up for you. Either way, nothing rips, nothing migrates, and
            nothing waits a quarter to go live.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {INTEGRATIONS.map((name) => (
              <div
                key={name}
                className="aspect-[5/3] rounded-xl border border-[var(--border-onforest)] bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300 flex items-center justify-center text-center px-3"
              >
                <span className="text-[13px] md:text-[14px] text-[var(--bg-cream)]/85 font-medium">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
