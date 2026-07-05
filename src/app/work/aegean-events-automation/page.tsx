import Link from "next/link";
import Image from "next/image";
import NavHeader from "@/components/ui/nav-header";
import CtaFooter from "@/components/ui/cta-footer";
import { BgGrid } from "@/components/ui/bg-grid";
import { AnimateInView } from "@/components/ui/animate-in-view";

export const metadata = {
  title: "Kos Island wedding planner — Operations automation case study | Cube86",
  description:
    "How Cube86 built a wedding enquiry automation for a boutique destination-wedding planner on Kos Island — cutting admin per booking from 3.5 hours to 10 minutes.",
  openGraph: {
    title: "Kos Island wedding planner — Operations automation case study | Cube86",
    description:
      "A boutique destination-wedding planner was losing 30% of couples to faster-replying competitors. We automated the entire enquiry pipeline to respond in under a minute.",
    url: "https://cube86.com/work/aegean-events-automation",
  },
};

const HERO_STATS = [
  { value: "3.5 hrs → 10 min", label: "Admin per new enquiry" },
  { value: "3 days → <1 hr", label: "Enquiry to fully handled" },
  { value: "$0 / mo", label: "Cost to run" },
];

const HERO_SUBTITLE =
  "A boutique destination-wedding planner on Kos Island was losing bookings before a single planning call happened — not from a lack of couples enquiring, but from how long it took to get back to them. We built an automation that answers, organises and follows up the moment an enquiry lands, in under an hour instead of three days.";

const PROBLEM = [
  "A new enquiry arrived the same way it always had: through the website contact form or a DM. Someone copied the details into a notes app. A team member created a folder on Google Drive, copied the details into a shared spreadsheet, and emailed a welcome pack — packages and pricing — when they remembered to.",
  "Destination-wedding couples don't enquire with one planner. They enquire with two or three, at the same time, and book with whoever replies fastest and most professionally. By the time the team followed up, 30% of couples had already booked elsewhere. Their own calculation: 3.5 hours of admin per enquiry, spread across three people, before a single planning call ever happened.",
];

const PROBLEM_LIST = [
  "Welcome packs sent whenever someone remembered — sometimes days later",
  "Venue and date conflicts checked two days in, if at all",
  "Three days from enquiry to an assigned planner",
  "30% of couples already booked with a faster-replying competitor",
];

const SOLUTION = [
  "We built an automation that fires the instant a couple submits the enquiry form. It creates the booking folder, logs the enquiry, sends a personalised welcome pack by email, opens a task for the assigned planner with a ready-made checklist, and alerts the creative director on duty — all within about a minute, with nobody at a desk needing to do any of it.",
  "If the couple hasn't confirmed receipt within 48 hours, one chase email goes out automatically, without anyone needing to remember.",
];

const FEATURES = [
  {
    title: "Instant intake",
    body: "The moment the form is submitted, a nested Drive folder, a new tracker row and a welcome email with the wedding pack attached are all in place before the couple has closed the tab.",
  },
  {
    title: "Built-in accountability",
    body: "Every booking creates a task for the assigned planner with a ready-made checklist — check availability, send pricing, book the call, update the calendar — plus an instant email to the creative director on duty.",
  },
  {
    title: "Automatic follow-through",
    body: "An hourly check reads the tracker and chases any couple who hasn't confirmed receipt after 48 hours, exactly once, so no enquiry goes quiet just because someone forgot.",
  },
];

const CHALLENGES = [
  {
    n: "01",
    title: "When the free staff-alert channel disappeared overnight",
    body: "Days before the build started, Microsoft retired the free webhook connector the planned staff-alert channel depended on — the only replacement needs a paid work licence. We rerouted staff alerts through email instead: the same couple, package, timeline and task details, landing in an inbox every planner already checks, at no extra cost.",
  },
  {
    n: "02",
    title: "A welcome pack that survives a server with no memory",
    body: "The free hosting tier wipes its disk on every restart, and the cloud-drive credential meant to serve the welcome pack had already expired. We embedded the pack directly inside the automation's own code as data, so sending it never depends on fetching a file from anywhere else.",
  },
  {
    n: "03",
    title: "A 48-hour timer that can't oversleep",
    body: "Holding a 48-hour countdown open in memory doesn't survive a free-tier server that goes to sleep after 15 minutes of inactivity. Instead, an hourly check reads the tracker and chases anyone still unconfirmed — restart-safe, because it never has anything to remember between checks.",
  },
  {
    n: "04",
    title: "Assigning planners without a headcount of software seats",
    body: "The task board's people-picker only understands invited workspace members mapped by internal ID — unnecessary setup for a simple hand-off. The planner's name is a plain field instead: it shows up immediately, needs no invitations, and can be upgraded later if the team grows into the tool full-time.",
  },
];

const BEFORE = [
  "Welcome packs sent whenever someone remembered — sometimes days later",
  "Venue and date conflicts checked two days in, if at all",
  "Three days from enquiry to an assigned planner",
  "30% of couples already booked with a faster-replying competitor",
];

const AFTER = [
  "Every couple has a welcome pack and booking reference within a minute of enquiring",
  "Planner and creative director notified instantly, with a checklist already waiting",
  "Zero missed follow-ups — the 48-hour chase never depends on anyone's memory",
  "Three people freed from coordinating a single admin hand-off",
];

const OUTCOME_STATS = [
  { value: "3.5 hrs → 10 min", label: "Admin time per booking" },
  { value: "24 / 7", label: "Automatic coverage" },
  { value: "< 60 sec", label: "For the pipeline to complete" },
];

const CTA_BODY =
  "If you're losing enquiries to response delays, we can fix that. Book a free audit and we'll show you exactly what's possible.";

const SCREENSHOTS = [
  {
    src: "/case-studies/aegean-events-automation/welcome-email.png",
    alt: "Welcome email received by the couple, with the wedding welcome pack attached",
  },
  {
    src: "/case-studies/aegean-events-automation/alert-email.png",
    alt: "Internal alert email sent to the creative director and planner with booking details",
  },
  {
    src: "/case-studies/aegean-events-automation/booking-tracker.png",
    alt: "Booking tracker spreadsheet showing status flow from New to Welcome Sent to Acknowledged",
  },
  {
    src: "/case-studies/aegean-events-automation/planner-task.png",
    alt: "Planner task card with booking properties and a ready-made checklist",
  },
];

export default function AegeanEventsCaseStudy() {
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
              Operations Automation · Hospitality &amp; Events
            </p>
            <h1 className="mt-4 font-display text-[38px] md:text-[58px] lg:text-[64px] leading-[1.03] tracking-[-0.02em] text-[var(--ink)]">
              A Kos Island wedding planner stopped losing couples to faster replies
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
                  Three days, three people, and a couple already gone
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
                    A same-day reply that runs itself
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
