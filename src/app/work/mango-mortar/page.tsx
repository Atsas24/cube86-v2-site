import Link from "next/link";
import Image from "next/image";
import NavHeader from "@/components/ui/nav-header";
import CtaFooter from "@/components/ui/cta-footer";
import { BgGrid } from "@/components/ui/bg-grid";
import { AnimateInView } from "@/components/ui/animate-in-view";

export const metadata = {
  title: "Cotswolds B&B — AI guest assistant case study | Cube86",
  description:
    "How Cube86 built a 24/7 AI chat assistant for a Cotswolds bed and breakfast — recovering 3-5 bookings a week lost to slow responses.",
  openGraph: {
    title: "Cotswolds B&B — AI guest assistant case study | Cube86",
    description:
      "A 24/7 AI guest assistant that answers instantly, escalates intelligently and sounds exactly like the guesthouse. 3-5 bookings recovered every week.",
    url: "https://cube86.com/work/mango-mortar",
  },
};

const HERO_STATS = [
  { value: "3–5 / week", label: "Bookings recovered" },
  { value: "24 / 7", label: "Instant coverage" },
  { value: "< 2 sec", label: "Response time" },
];

const HERO_SUBTITLE =
  "A Cotswolds bed and breakfast was losing 3–5 reservations every week — not from lack of rooms, but from lack of response. We built them a 24/7 AI guest assistant that answers instantly, escalates intelligently and sounds exactly like them.";

const PROBLEM = [
  "The owners run all nine rooms themselves — breakfast service, check-ins, housekeeping, everything. During the morning rush (7:30–10:30am) and after 9pm, the phone went unanswered and inbox replies lagged by hours.",
  "Guests asking about parking, dietary options or pet policy couldn't get a fast answer, so they booked elsewhere. The owners estimated they were losing 3–5 reservations a week — not from lack of availability, but from lack of someone at the desk.",
];

const PROBLEM_LIST = [
  "Enquiries during breakfast sat unanswered for hours",
  "After-9pm coverage: zero",
  "20–30 min/day answering the same FAQ emails",
  "3–5 bookings/week lost to response lag",
];

const SOLUTION = [
  "We built a branded AI chat widget embedded directly on the guesthouse website. Powered by Claude Haiku — fast and cost-efficient — it answers guest questions instantly at any hour, using a live FAQ database the owners control themselves through a simple admin panel.",
  "When something falls outside what the AI can confidently answer — room availability, special requests, event enquiries — it captures the guest's name, email and message, and routes it directly to the owners by email. No guest drops off without a path forward.",
];

const FEATURES = [
  {
    title: "Chat widget",
    body: "Floating button, bottom-right of the page. Streams responses in real time. Feels like a message from the guesthouse, not a help-desk ticket.",
  },
  {
    title: "Smart escalation",
    body: "Claude signals when a query is out of scope. A contact form appears before the guest leaves — name, email and message sent straight to the owners.",
  },
  {
    title: "Admin panel",
    body: "FAQs are editable at /admin — add, update or remove entries in a simple form. Changes go live immediately. No code, no deployment needed.",
  },
];

const CHALLENGES = [
  {
    n: "01",
    title: "Sounding like the guesthouse, not a chatbot",
    body: "Getting the AI to write in the warm, unhurried voice of a small Cotswolds guesthouse — not a corporate help desk — took careful prompt engineering. The constraint: never break character, never say \"I'm just an AI\", always use \"we\" and \"our guests\". We tested against 20+ real guest questions before the tone felt right.",
  },
  {
    n: "02",
    title: "Knowing when to give up gracefully",
    body: "The widget needed to answer confidently when it could and hand off cleanly when it couldn't — without hallucinating availability or inventing policies. Claude returns a structured signal when a query falls out of scope; the frontend catches it and shows a contact form before the guest disengages.",
  },
  {
    n: "03",
    title: "Admin a non-technical owner can run",
    body: "The owners needed to update FAQs themselves — no Git, no deployment, no code editor. The answer: a password-protected /admin panel that writes directly to the live FAQ store. They can add, edit or remove an entry in two minutes from their phone, and it reflects instantly on the live chat.",
  },
  {
    n: "04",
    title: "Cost that works at nine rooms",
    body: "A nine-room guesthouse can't absorb enterprise AI costs. Claude Haiku processes a full guest conversation for a fraction of a cent — cheap enough that running the widget 24/7 costs less per month than a single unanswered booking. The build was designed around that constraint from day one.",
  },
];

const BEFORE = [
  "Enquiries during breakfast sat unanswered for hours",
  "Zero coverage after 9pm",
  "20–30 min/day answering the same FAQ emails",
  "3–5 bookings/week lost to slow responses",
];

const AFTER = [
  "Every FAQ answered in under 2 seconds, any hour",
  "Complex enquiries captured and emailed with guest contact details",
  "FAQ updates take 2 minutes from any device",
  "Breakfast service no longer interrupted by the phone",
];

const OUTCOME_STATS = [
  { value: "3–5 / week", label: "Bookings recovered" },
  { value: "5 hrs / day", label: "Coverage added" },
  { value: "2 min", label: "To update any FAQ" },
];

const CTA_BODY =
  "If you're losing enquiries to response delays, we can fix that. Book a free audit and we'll show you exactly what's possible.";

const SCREENSHOTS = [
  { src: "/case-studies/mango-mortar/widget-open.png", alt: "Chat widget open showing the welcome greeting" },
  { src: "/case-studies/mango-mortar/widget-parking.png", alt: "Guest asking about parking — answered in under 2 seconds" },
  { src: "/case-studies/mango-mortar/widget-breakfast.png", alt: "Guest asking about breakfast times and dietary options" },
  { src: "/case-studies/mango-mortar/admin-panel.png", alt: "The owner-facing FAQ admin panel" },
];

export default function MangoMortarCaseStudy() {
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
              AI Chat Agent · Hospitality
            </p>
            <h1 className="mt-4 font-display text-[38px] md:text-[58px] lg:text-[64px] leading-[1.03] tracking-[-0.02em] text-[var(--ink)]">
              A Cotswolds B&amp;B stopped losing bookings at breakfast
            </h1>
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.65] text-[var(--ink-muted)] max-w-2xl">
              {HERO_SUBTITLE}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {HERO_STATS.map((s, i) => (
                <AnimateInView key={s.label} delay={i * 0.08}>
                  <div className="rounded-xl border border-[var(--border-strong)] bg-[var(--bg-cream)] px-5 py-4 text-center min-w-[130px]">
                    <div className="font-display text-[26px] leading-none tracking-[-0.02em] text-[var(--brand-forest)]">
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
                  Five hours a day, no one was home
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
                    A 24/7 guest assistant that sounds like the guesthouse
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

              {/* Screenshots strip */}
              <div className="mt-12">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold mb-5">
                  In practice
                </p>
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
                      <div className="font-display text-[28px] leading-none tracking-[-0.02em] text-[var(--brand-forest)]">
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
                  Want this for your business?
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
