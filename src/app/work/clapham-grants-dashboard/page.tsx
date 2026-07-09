import Link from "next/link";
import Image from "next/image";
import NavHeader from "@/components/ui/nav-header";
import CtaFooter from "@/components/ui/cta-footer";
import { BgGrid } from "@/components/ui/bg-grid";
import { AnimateInView } from "@/components/ui/animate-in-view";

export const metadata = {
  title: "Community foundation grants dashboard — Data & Reporting case study | Cube86",
  description:
    "How Cube86 built a live grants dashboard for a south London community foundation — cutting quarterly reporting from 2 days to 20 minutes with a real Google Sheets data pipeline.",
  openGraph: {
    title: "Community foundation grants dashboard — Data & Reporting case study | Cube86",
    description:
      "A community foundation was spending 2 days every quarter assembling trustee reports by hand. We built a live dashboard with a one-click PDF export — connected directly to their Google Sheet.",
    url: "https://cube86.com/work/clapham-grants-dashboard",
  },
};

const HERO_STATS = [
  { value: "2 days → 20 min", label: "Quarterly reporting time" },
  { value: "< 60 sec", label: "Pipeline latency" },
  { value: "$0 / mo", label: "Cost to run" },
];

const HERO_SUBTITLE =
  "A small community foundation in south London was spending two full days every quarter pulling grant data into a trustee report by hand. Their primary funder had just started asking for monthly data — a cadence the old process couldn't sustain. We built a live dashboard connected directly to their Google Sheet: always current, always ready, with the funder's monthly report one click away.";

const PROBLEM = [
  "All 40+ active grants lived in an 18-tab Google Sheet, inconsistently updated across two staff members and a part-timer. Every quarter, the Finance Manager spent two full days pulling the numbers — disbursed to date, status breakdowns, spend by category — into a Word document for the trustee board, then a separate spreadsheet for their primary funder.",
  "Three trustees had independently asked whether they could just see the data live. The funder's new requirement for monthly data made the answer urgent. The existing process couldn't run monthly without consuming most of one person's working week.",
];

const PROBLEM_LIST = [
  "Two full days of manual work per quarterly trustee report",
  "Trustees blind between reports — no way to check current figures",
  "Primary funder now asking for monthly data the existing process couldn't sustain",
  "Grant data spread across 18 tabs, inconsistently maintained",
];

const SOLUTION = [
  "We built a password-protected live dashboard — a single shareable link that connects directly to their Google Sheet through a lightweight n8n integration. Every time a trustee or the funder opens it, they see data that is never more than 60 seconds stale. No login accounts to manage, no spreadsheet to share, nothing to export manually.",
  "The period filter — This month, This quarter, Year to date, All time — was the direct answer to the monthly funder request: switch the filter, every number and chart on the page rescopes instantly. One click on Export PDF generates a print-ready report matching exactly what's on screen, branded and dated, ready to forward.",
];

const FEATURES = [
  {
    title: "Live data pipeline",
    body: "The dashboard never talks to Google directly. n8n sits between them — polling the Sheet on every page load, responding in under a second. The same integration pattern scales to any data source the client already uses, with no new Google Cloud credentials to manage.",
  },
  {
    title: "Period filter",
    body: "This month / This quarter / Year to date / All time. Switching the filter rescopes every KPI, every chart, and every table simultaneously — including the PDF. The direct answer to a funder asking for monthly data when the old process ran quarterly.",
  },
  {
    title: "One-click PDF export",
    body: "Generates a print-ready, branded report in the browser — KPI row, status breakdown, category spend, full grant-activity table, confidentiality footer, page numbers. Client-side, so no server to hit and no wait.",
  },
];

const CHALLENGES = [
  {
    n: "01",
    title: "Making the data always current without a server-side database",
    body: "A dashboard that reads a Google Sheet on every page load would be slow and expensive. Instead, the Next.js server fetches from the n8n webhook and caches the response for 60 seconds — fast enough for any trustee session, fresh enough for the Finance Manager watching a data entry update propagate. If the webhook is ever unreachable, a bundled copy of the last known dataset loads instead, so the demo never breaks mid-session.",
  },
  {
    n: "02",
    title: "One set of numbers for screen and PDF",
    body: "The biggest risk in a reporting tool is the screen showing one figure and the exported document showing another. Every computed metric — disbursed YTD, grants by status, spend by category — lives in a single metrics module. Both the React dashboard and the react-pdf export call the same function with the same data. The numbers cannot diverge.",
  },
  {
    n: "03",
    title: "A PDF that renders without a server",
    body: "react-pdf runs entirely in the browser. No export endpoint, no lambda, no timeout risk. The client clicks Export PDF, the browser assembles the document from the current in-memory data, and the file downloads immediately. The only limit is browser memory — well within range for 40–60 grants.",
  },
  {
    n: "04",
    title: "Password gate without per-user accounts",
    body: "The brief called for a single shareable link protected by one password — not a full auth system with accounts and password resets. A lightweight middleware layer checks a cookie on every request, redirects to a login page if absent, and sets it on a correct submission. Simple, auditable, and exactly as much security as the client needed for an internal reporting tool.",
  },
];

const BEFORE = [
  "Two full days of manual data assembly per quarterly report",
  "Trustees waiting for a report to see any current figures",
  "Primary funder's monthly requests impossible to fulfil at pace",
  "18-tab spreadsheet as the only source of truth — or 18 sources of error",
];

const AFTER = [
  "Trustees check live data any time — no waiting for a report cycle",
  "Monthly funder requests fulfilled in under a minute, any day of the month",
  "Finance Manager freed from repetitive data assembly every quarter",
  "One shareable link, one password, always current",
];

const OUTCOME_STATS = [
  { value: "2 days → 20 min", label: "Quarterly reporting time" },
  { value: "< 60 sec", label: "Data pipeline latency" },
  { value: "1-click", label: "PDF export — any period, any time" },
];

const CTA_BODY =
  "If your team is still assembling reports by hand every month, we can change that. Book a free audit and we'll show you exactly what's possible.";

const SCREENSHOT_HERO = {
  src: "/case-studies/clapham-grants-dashboard/dashboard-light.png",
  alt: "Live grants dashboard — light mode — KPIs, grants by status and spend by category",
};

const SCREENSHOTS = [
  {
    src: "/case-studies/clapham-grants-dashboard/pdf-report.png",
    alt: "One-click PDF export — branded funder report generated from the current dashboard view",
  },
  {
    src: "/case-studies/clapham-grants-dashboard/n8n-workflow.png",
    alt: "n8n automation workflow — Webhook triggers Google Sheets read and responds with live grant data",
  },
  {
    src: "/case-studies/clapham-grants-dashboard/dashboard-dark.png",
    alt: "Live grants dashboard — dark mode",
  },
  {
    src: "/case-studies/clapham-grants-dashboard/dashboard-mobile.png",
    alt: "Responsive mobile layout — trustees can check live data from any device",
  },
];

export default function ClaphamGrantsDashboard() {
  return (
    <>
      <NavHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-white border-b border-[var(--border)]">
          <BgGrid withReveal={true} />
          <div className="relative mx-auto max-w-4xl px-6 md:px-8 pt-10 md:pt-14 pb-16 md:pb-20">
            <Link
              href="/work"
              className="text-[14px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors duration-200"
            >
              ← All work
            </Link>

            <p className="mt-8 text-[12px] uppercase tracking-[0.18em] text-[var(--brand-forest)] font-semibold">
              Data &amp; Reporting · Charities &amp; Foundations
            </p>
            <h1 className="mt-4 font-display text-[38px] md:text-[58px] lg:text-[64px] leading-[1.03] tracking-[-0.02em] text-[var(--ink)]">
              A community foundation cut quarterly reporting from two days to twenty minutes
            </h1>
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.65] text-[var(--ink-muted)] max-w-2xl">
              {HERO_SUBTITLE}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {HERO_STATS.map((s, i) => (
                <AnimateInView key={s.label} delay={i * 0.08}>
                  <div className="rounded-xl border border-[var(--border-strong)] bg-[var(--bg-cream)] px-5 py-4 text-center min-w-[130px]">
                    <div className="font-display text-[22px] leading-none tracking-[-0.02em] text-[var(--brand-forest)]">
                      {s.value}
                    </div>
                    <div className="mt-2 text-[12px] text-[var(--ink-soft)]">{s.label}</div>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="relative overflow-hidden bg-[#F7F7F7] py-20 md:py-24">
          <BgGrid withReveal={true} />
          <div className="relative mx-auto max-w-4xl px-6 md:px-8">

            {/* The Problem */}
            <AnimateInView>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold">
                  The Problem
                </p>
                <h2 className="mt-3 font-display text-[30px] md:text-[42px] leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
                  Two days of manual work, every quarter
                </h2>
                <div className="mt-7 grid md:grid-cols-2 gap-7 md:gap-9 items-start">
                  <div className="space-y-4">
                    {PROBLEM.map((p) => (
                      <p key={p} className="text-[16px] leading-[1.8] text-[var(--ink-muted)]">
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="rounded-2xl bg-white border border-[var(--border)] p-6 shadow-card">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--ink-soft)] font-semibold mb-4">
                      Before
                    </p>
                    <ul className="space-y-3">
                      {PROBLEM_LIST.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.55] text-[var(--ink-muted)]">
                          <span aria-hidden className="mt-[2px] text-[var(--ink-soft)] font-semibold shrink-0">×</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateInView>

            {/* The Solution */}
            <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-[var(--border)]">
              <AnimateInView>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold">
                    The Solution
                  </p>
                  <h2 className="mt-3 font-display text-[30px] md:text-[42px] leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
                    A live link — always current, always ready
                  </h2>
                  <div className="mt-7 max-w-2xl space-y-4">
                    {SOLUTION.map((p) => (
                      <p key={p} className="text-[16px] leading-[1.8] text-[var(--ink-muted)]">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimateInView>

              <div className="mt-9 grid md:grid-cols-3 gap-5">
                {FEATURES.map((f, i) => (
                  <AnimateInView key={f.title} delay={i * 0.08} as="article">
                    <article className="h-full rounded-2xl bg-white border border-[var(--border)] p-6 shadow-card hover:-translate-y-0.5 hover:shadow-card-strong transition-[transform,box-shadow] duration-300">
                      <h3 className="font-display text-[19px] leading-tight text-[var(--ink)]">{f.title}</h3>
                      <p className="mt-3 text-[14px] leading-[1.65] text-[var(--ink-muted)]">{f.body}</p>
                    </article>
                  </AnimateInView>
                ))}
              </div>

              {/* Screenshots */}
              <div className="mt-12">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold mb-5">
                  In practice
                </p>
                <div className="space-y-3">
                  {/* Hero shot — full width */}
                  <AnimateInView>
                    <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-card bg-white aspect-[16/9] relative">
                      <Image
                        src={SCREENSHOT_HERO.src}
                        alt={SCREENSHOT_HERO.alt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </div>
                  </AnimateInView>
                  {/* 2×2 grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {SCREENSHOTS.map((s, i) => (
                      <AnimateInView key={s.src} delay={i * 0.07}>
                        <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-card bg-white aspect-[4/3] relative">
                          <Image
                            src={s.src}
                            alt={s.alt}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 50vw, 40vw"
                          />
                        </div>
                      </AnimateInView>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* How We Solved It */}
            <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-[var(--border)]">
              <AnimateInView>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold">
                    How we solved it
                  </p>
                  <h2 className="mt-3 font-display text-[30px] md:text-[42px] leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
                    The parts that actually needed thinking
                  </h2>
                </div>
              </AnimateInView>

              <div className="mt-9 grid md:grid-cols-2 gap-5">
                {CHALLENGES.map((c, i) => (
                  <AnimateInView key={c.n} delay={i * 0.07} as="article">
                    <article className="h-full rounded-2xl bg-white border border-[var(--border)] p-7 shadow-card hover:-translate-y-0.5 hover:shadow-card-strong transition-[transform,box-shadow] duration-300">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--brand-forest)] text-[var(--accent-lime)] font-display text-[15px]">
                        {c.n}
                      </span>
                      <h3 className="mt-4 font-display text-[20px] leading-tight text-[var(--ink)]">{c.title}</h3>
                      <p className="mt-3 text-[14px] leading-[1.7] text-[var(--ink-muted)]">{c.body}</p>
                    </article>
                  </AnimateInView>
                ))}
              </div>
            </div>

            {/* The Outcome */}
            <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-[var(--border)]">
              <AnimateInView>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold">
                    The Outcome
                  </p>
                  <h2 className="mt-3 font-display text-[30px] md:text-[42px] leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
                    What changed after go-live
                  </h2>
                </div>
              </AnimateInView>

              <div className="mt-9 grid md:grid-cols-2 gap-5">
                <AnimateInView>
                  <div className="h-full rounded-2xl bg-white border border-[var(--border)] p-7 shadow-card">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--ink-soft)] font-semibold mb-4">
                      Before
                    </p>
                    <ul className="space-y-3">
                      {BEFORE.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[14px] leading-[1.55] text-[var(--ink-muted)]">
                          <span aria-hidden className="mt-[2px] text-[var(--ink-soft)] font-semibold shrink-0">×</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateInView>
                <AnimateInView delay={0.08}>
                  <div className="h-full rounded-2xl bg-[var(--brand-forest)] text-[var(--bg-cream)] p-7 shadow-card">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--accent-lime)] font-semibold mb-4">
                      After
                    </p>
                    <ul className="space-y-3">
                      {AFTER.map((a) => (
                        <li key={a} className="flex items-start gap-3 text-[14px] leading-[1.55] text-[var(--bg-cream)]/85">
                          <span aria-hidden className="mt-[1px] text-[var(--accent-lime)] font-semibold shrink-0">✓</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateInView>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {OUTCOME_STATS.map((s, i) => (
                  <AnimateInView key={s.label} delay={i * 0.08}>
                    <div className="rounded-xl border border-[var(--border-strong)] bg-white px-5 py-5 text-center shadow-card">
                      <div className="font-display text-[24px] leading-none tracking-[-0.02em] text-[var(--brand-forest)]">
                        {s.value}
                      </div>
                      <div className="mt-2 text-[12px] text-[var(--ink-soft)]">{s.label}</div>
                    </div>
                  </AnimateInView>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 md:mt-20">
              <div className="rounded-2xl bg-[var(--brand-forest)] text-[var(--bg-cream)] p-8 md:p-12 text-center">
                <h2 className="font-display text-[26px] md:text-[34px] leading-tight text-[var(--bg-cream)]">
                  Want this for your organisation?
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] text-[var(--bg-cream)]/70 max-w-md mx-auto">
                  {CTA_BODY}
                </p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--accent-lime)] text-[var(--brand-forest-deep)] font-semibold text-[15px] px-6 py-3.5 hover:bg-[var(--accent-lime-bright)] active:scale-[0.98] transition-[transform,background-color] duration-200"
                >
                  Book a free audit
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <CtaFooter />
    </>
  );
}
