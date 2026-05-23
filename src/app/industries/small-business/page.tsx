import PageShell from "@/components/ui/page-shell";
import Link from "next/link";
import { BgGrid } from "@/components/ui/bg-grid";
import { FAQ } from "@/components/ui/faq";

export const metadata = {
  title: "Small Business Automation — Cube86",
  description: "Cube86 helps small businesses automate admin, streamline operations and grow without adding headcount.",
  openGraph: {
    title: "Small Business Automation — Cube86",
    description: "Replace spreadsheets and manual admin with automation systems built for small businesses. Quote-to-cash, onboarding, reporting and more.",
    url: "https://cube86.com/industries/small-business",
  },
};

const AUTOMATIONS = [
  {
    title: "Quote-to-cash automation",
    body: "From enquiry to invoice — we automate the entire sales flow. New lead comes in, proposal goes out, invoice fires when work completes. No chasing, no manual steps.",
  },
  {
    title: "Customer onboarding flows",
    body: "Every new customer gets the same brilliant first experience, every time. Welcome emails, document collection, task assignment and kick-off booking — all triggered automatically.",
  },
  {
    title: "AI receptionist (phone + chat)",
    body: "An always-on AI agent answers your calls and web enquiries, qualifies leads, books appointments and hands off to you with full context — even at 11pm on a Sunday.",
  },
  {
    title: "Supplier and inventory alerts",
    body: "Low stock thresholds trigger reorder suggestions. Supplier invoices are captured and matched automatically. You stop managing spreadsheets and start managing decisions.",
  },
  {
    title: "Reporting dashboard",
    body: "Revenue, costs, jobs in progress, customer feedback — one live dashboard pulling from every tool you use. Ready in two minutes on a Monday morning.",
  },
  {
    title: "Review and reputation automation",
    body: "After every completed job, a personalised follow-up goes out asking for a Google review. Responses are monitored and flagged. Your reputation builds itself.",
  },
];

export default function SmallBusinessPage() {
  return (
    <PageShell
      eyebrow="Industries · Small business"
      title="The operating system that replaces your spreadsheets."
      subtitle="Quote-to-cash, customer onboarding, internal tooling and reporting — built once, run automatically, owned by you."
    >
      <section className="relative overflow-hidden bg-[#F7F7F7] py-20 md:py-28">
        <BgGrid withReveal={true} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

          <div className="max-w-3xl mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold">How we help</p>
            <h2 className="mt-3 font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
              Small teams doing big things deserve tools that keep up.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-[var(--ink-muted)]">
              Most small businesses are run by people wearing every hat — owner, sales, ops, admin. We take the admin off your plate by automating the repeatable parts of your business. The result is more time on client work, fewer dropped balls and a business that runs more smoothly as it grows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUTOMATIONS.map((a) => (
              <article key={a.title} className="rounded-2xl bg-white border border-[var(--border)] p-6 shadow-card hover:-translate-y-0.5 hover:shadow-card-strong transition-[transform,box-shadow] duration-300">
                <h3 className="font-display text-[20px] leading-tight text-[var(--ink)]">{a.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[var(--ink-muted)]">{a.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold mb-6">
              Common questions
            </p>
            <FAQ items={[
              {
                q: "Do I need to be technical to work with you?",
                a: "Not at all. We handle everything — tool selection, building, testing and handover. You tell us what problem you want to solve; we figure out how to solve it and deliver something your team can use from day one.",
              },
              {
                q: "How long does a typical project take?",
                a: "Most single-service builds take one to three weeks from first call to live system. More complex builds with multiple workflows or integrations typically run four to eight weeks. We'll give you a clear timeline before any work starts.",
              },
              {
                q: "What tools do you build with?",
                a: "We pick the right tool for the job based on your needs, budget and what you're already using. If you have an existing stack, we build around it. If you're starting from scratch, we recommend and set everything up for you. We don't have a preferred vendor — we have a preferred outcome.",
              },
              {
                q: "What happens after the build — do you offer support?",
                a: "Yes. We offer ongoing maintenance and monitoring if you want it, but we also hand over full documentation so your team can make simple changes independently. Most clients stay on a light monthly retainer for tweaks and additions; others prefer one-off projects.",
              },
              {
                q: "How much does it cost?",
                a: "Project costs vary depending on scope. Single-service builds typically start from a few hundred pounds; full operating system builds are priced on scope. We'll give you a clear, fixed quote after the first call — no surprises.",
              },
            ]} />
          </div>

          <div className="mt-14 rounded-2xl bg-[var(--brand-forest)] text-[var(--bg-cream)] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h3 className="font-display text-[26px] md:text-[32px] leading-tight text-[var(--bg-cream)]">
                Ready to stop running your business in spreadsheets?
              </h3>
              <p className="mt-2 text-[15px] text-[var(--bg-cream)]/70">
                Book a free 20-min call. We&apos;ll tell you exactly what to automate first.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[var(--accent-lime)] text-[var(--brand-forest-deep)] font-semibold text-[15px] px-6 py-3.5 hover:bg-[var(--accent-lime-bright)] transition-colors duration-200"
            >
              Book a call →
            </Link>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
