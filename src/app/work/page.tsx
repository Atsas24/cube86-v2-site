import PageShell from "@/components/ui/page-shell";
import Link from "next/link";
import { BgGrid } from "@/components/ui/bg-grid";

export const metadata = {
  title: "Work — Cube86",
  description: "Use cases and example projects from Cube86 — automations and AI systems we build for SMEs, charities and professional services.",
  openGraph: {
    title: "Work — Cube86",
    description: "The automations, AI systems and data pipelines we build most often for SMEs, charities and professional services.",
    url: "https://cube86.com/work",
  },
};

const USE_CASES = [
  {
    sector: "Operations automation",
    tag: "Typical project",
    title: "End-to-end invoice and approval automation",
    description:
      "A professional services firm was spending 6+ hours a week manually chasing invoice approvals, re-entering data from email into their accounting software and following up on overdue payments. We built a single automated flow: invoice drafted from CRM data, sent to the right approver, synced to Xero on approval, and chased automatically on day 7 and day 14 if unpaid.",
    outcomes: [
      "6 hours of weekly admin eliminated",
      "Average payment time reduced from 34 to 19 days",
      "Zero invoices missed or lost in email threads",
    ],
  },
  {
    sector: "AI agents",
    tag: "Typical project",
    title: "AI receptionist for a clinic",
    description:
      "A busy healthcare practice was missing calls during appointments and losing potential patients to voicemail. We deployed an AI telephone agent trained on their services, pricing and appointment availability — it answers every call, books appointments directly into the calendar, sends confirmation texts and escalates medical queries to a human. Running 24/7.",
    outcomes: [
      "100% of calls answered, any hour",
      "40% of appointments now booked without staff involvement",
      "Patient satisfaction scores improved — no more hold music",
    ],
  },
  {
    sector: "Lead generation",
    tag: "Typical project",
    title: "Automated B2B outreach pipeline",
    description:
      "A consultancy wanted to grow their pipeline without hiring a sales team. We built a lead generation system using Clay and Apollo to find ideal prospects, enrich their data and pass them into a personalised email sequence. Replies trigger a human follow-up; non-responses are re-engaged at day 7 and day 21. The pipeline now runs without anyone touching it.",
    outcomes: [
      "200+ qualified prospects contacted per week automatically",
      "12% reply rate on cold outreach (industry average: 3-5%)",
      "3 new client conversations opened in first month",
    ],
  },
  {
    sector: "Data & reporting",
    tag: "Typical project",
    title: "Live donor dashboard for a charity",
    description:
      "A mid-sized charity was producing monthly reports manually — pulling data from three CRMs, a fundraising platform and a spreadsheet, and formatting everything by hand. We connected every source into a single Airtable base, built a live dashboard and set up automated weekly summaries emailed to the leadership team every Monday at 8am.",
    outcomes: [
      "Monthly reporting time cut from 2 days to 20 minutes",
      "Leadership team always looking at current data, not last month's",
      "Grant reports now generated in one click",
    ],
  },
];

export default function WorkPage() {
  return (
    <PageShell
      eyebrow="Work"
      title="The kinds of problems we solve."
      subtitle="The automations, AI systems and data pipelines we build most often. Each is presented as a typical project — the outcomes are representative of what these builds deliver in practice."
    >
      <section className="relative overflow-hidden bg-[#F7F7F7] py-20 md:py-28">
        <BgGrid withReveal={true} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12 space-y-6">
          <Link
            href="/work/hospitality-ai-chat-widget"
            className="group block rounded-2xl bg-white border border-[var(--border)] p-8 md:p-10 shadow-card hover:-translate-y-0.5 hover:shadow-card-strong transition-[transform,box-shadow] duration-300"
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--brand-forest)] font-semibold">
                AI Chat Agent · Hospitality
              </span>
              <span className="text-[11px] uppercase tracking-[0.14em] rounded-full bg-[var(--accent-lime)] text-[var(--brand-forest-deep)] font-semibold px-2.5 py-0.5">
                Case study
              </span>
            </div>

            <h3 className="font-display text-[26px] md:text-[32px] leading-[1.1] text-[var(--ink)]">
              A Cotswolds B&amp;B stopped losing bookings at breakfast
            </h3>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--ink-muted)] max-w-3xl">
              A nine-room guesthouse was losing 3–5 reservations a week to response lag. We built a 24/7 AI guest assistant that answers instantly, escalates intelligently and sounds exactly like them.
            </p>

            <span className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--brand-forest)] group-hover:gap-2.5 transition-[gap] duration-200">
              Read the case study
              <span aria-hidden>→</span>
            </span>
          </Link>

          {USE_CASES.map((w) => (
            <article
              key={w.title}
              className="rounded-2xl bg-white border border-[var(--border)] p-8 md:p-10 shadow-card hover:-translate-y-0.5 hover:shadow-card-strong transition-[transform,box-shadow] duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--brand-forest)] font-semibold">
                  {w.sector}
                </span>
                <span className="text-[11px] uppercase tracking-[0.14em] rounded-full bg-[var(--brand-forest)]/10 text-[var(--brand-forest)] font-semibold px-2.5 py-0.5">
                  {w.tag}
                </span>
              </div>

              <h3 className="font-display text-[26px] md:text-[32px] leading-[1.1] text-[var(--ink)]">
                {w.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.75] text-[var(--ink-muted)] max-w-3xl">
                {w.description}
              </p>

              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <p className="text-[12px] uppercase tracking-[0.16em] text-[var(--brand-forest)] font-semibold mb-3">
                  Outcomes
                </p>
                <ul className="space-y-2">
                  {w.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-[15px] text-[var(--ink)]">
                      <span aria-hidden className="mt-[7px] inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand-forest)] shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <div className="rounded-2xl bg-[var(--brand-forest)] text-[var(--bg-cream)] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--accent-lime)] font-semibold mb-2">
                Work with us
              </p>
              <h3 className="font-display text-[26px] md:text-[32px] leading-tight text-[var(--bg-cream)]">
                We&apos;re selective — and honest about what we can deliver.
              </h3>
              <p className="mt-2 text-[15px] text-[var(--bg-cream)]/70 max-w-xl">
                We&apos;d rather take fewer projects and do them properly than overpromise and underdeliver. If we&apos;re not the right fit, we&apos;ll tell you in the first call.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[var(--accent-lime)] text-[var(--brand-forest-deep)] font-semibold text-[15px] px-6 py-3.5 hover:bg-[var(--accent-lime-bright)] transition-colors duration-200"
            >
              Book a discovery call →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
