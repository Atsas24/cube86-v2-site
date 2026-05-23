import PageShell from "@/components/ui/page-shell";
import Link from "next/link";
import { BgGrid } from "@/components/ui/bg-grid";
import { FAQ } from "@/components/ui/faq";

export const metadata = {
  title: "Hospitality Automation — Cube86",
  description: "Cube86 builds AI receptionists, revenue automation and guest experience systems for hotels, restaurants and bars.",
  openGraph: {
    title: "Hospitality Automation — Cube86",
    description: "AI receptionists, reservation automation, review management and revenue systems for hotels, restaurants and bars.",
    url: "https://cube86.com/industries/hospitality",
  },
};

const AUTOMATIONS = [
  {
    title: "AI telephone receptionist",
    body: "An AI agent answers every call, handles reservations, answers FAQs and escalates to a real person only when needed. Never miss a booking because the phone was busy.",
  },
  {
    title: "Reservation and booking automation",
    body: "Reservations confirmed, reminders sent, tables allocated and prepayment collected — all without a member of staff touching a keyboard. Works with OpenTable, Resy and custom systems.",
  },
  {
    title: "Guest experience flows",
    body: "Pre-arrival messages, in-stay check-ins and post-visit review requests go out automatically. Every guest feels looked after; your team focuses on the room, not the inbox.",
  },
  {
    title: "Revenue management alerts",
    body: "Occupancy thresholds trigger automated rate adjustments and availability pushes to OTAs. Maximise RevPAR without a full-time revenue manager on payroll.",
  },
  {
    title: "Staff scheduling and comms",
    body: "Rota updates, shift reminders and team announcements distributed automatically via WhatsApp or SMS. No more WhatsApp chaos at 6am before a busy service.",
  },
  {
    title: "Supplier and stock automation",
    body: "Daily usage data triggers reorder suggestions, supplier POs and delivery confirmations. Stock levels stay right; over-ordering and run-outs stop happening.",
  },
];

export default function HospitalityPage() {
  return (
    <PageShell
      eyebrow="Industries · Hospitality"
      title="Where Cube86 was forged."
      subtitle="AI receptionists, revenue automation, guest experience and ops for hotels, restaurants and bars — battle-tested and still evolving."
    >
      <section className="relative overflow-hidden bg-[#F7F7F7] py-20 md:py-28">
        <BgGrid withReveal={true} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

          <div className="max-w-3xl mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold">How we help</p>
            <h2 className="mt-3 font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
              Hospitality runs on people. Let the machines handle the rest.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-[var(--ink-muted)]">
              Hospitality businesses are high-volume, high-touch and perpetually short-staffed. We automate the repetitive, high-stakes tasks — answering phones, confirming bookings, managing stock — so your team can be fully present for guests. This is where Cube86 started, and we know the terrain.
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
                q: "How does an AI receptionist handle complex or unusual requests?",
                a: "The AI handles the majority of first-line enquiries — bookings, availability, pricing, directions — and escalates anything it can't confidently answer to a human staff member immediately, with full context of the conversation. You define the escalation rules; the AI handles the rest.",
              },
              {
                q: "Can the AI receptionist work with our existing booking system?",
                a: "Yes. We integrate with the most common hospitality booking and PMS platforms including OpenTable, ResDiary, Resy, OPERA, Mews and others. The AI checks availability and books directly — no double-booking, no manual entry.",
              },
              {
                q: "What about reviews — can you really automate that without it feeling fake?",
                a: "The review follow-up is personalised and triggered at the right moment — typically the day after a stay or visit, when the experience is fresh. The message references the actual visit (date, table, room type) and asks a genuine question. Response rates are significantly higher than generic follow-ups.",
              },
              {
                q: "We're a small independent venue, not a chain. Is this too enterprise for us?",
                a: "Most of our hospitality clients are independents — a single restaurant, a boutique hotel, a small group of venues. We scope everything to what you actually need. A single AI receptionist and a review automation can be running within two weeks and costs far less than you'd expect.",
              },
            ]} />
          </div>

          <div className="mt-14 rounded-2xl bg-[var(--brand-forest)] text-[var(--bg-cream)] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h3 className="font-display text-[26px] md:text-[32px] leading-tight text-[var(--bg-cream)]">
                Ready to stop losing bookings to an unanswered phone?
              </h3>
              <p className="mt-2 text-[15px] text-[var(--bg-cream)]/70">
                20-minute call. We&apos;ll show you what an AI receptionist can do for your venue.
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
