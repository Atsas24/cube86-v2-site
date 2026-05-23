import PageShell from "@/components/ui/page-shell";
import Link from "next/link";
import { BgGrid } from "@/components/ui/bg-grid";
import { FAQ } from "@/components/ui/faq";

export const metadata = {
  title: "Professional Services Automation — Cube86",
  description: "Cube86 builds intake, billing, reporting and client management systems for clinics, legal practices and consultancies.",
  openGraph: {
    title: "Professional Services Automation — Cube86",
    description: "Intake, matter management, billing and compliance automation for clinics, legal practices, accountants and consultancies.",
    url: "https://cube86.com/industries/professional-services",
  },
};

const AUTOMATIONS = [
  {
    title: "Client intake automation",
    body: "New enquiries trigger a structured intake flow — initial questionnaire, conflict check, welcome pack and first appointment booked. No admin time, no dropped leads.",
  },
  {
    title: "Matter and case tracking",
    body: "A live pipeline view of every active matter, case or project — status, next action, deadline and responsible team member — updated automatically as work progresses.",
  },
  {
    title: "Billing and time capture",
    body: "Time entries logged, bills drafted and payment reminders sent automatically. Aged debt reports land in your inbox every Monday. Cash flow stops being a surprise.",
  },
  {
    title: "Compliance document management",
    body: "Client files, signed engagements, ID checks and regulatory documents captured, version-controlled and filed automatically — audit-ready without the manual effort.",
  },
  {
    title: "Client communication sequences",
    body: "Regular update emails, milestone notifications and satisfaction check-ins sent at the right points in the client journey. Clients stay informed; your team stays focused.",
  },
  {
    title: "AI assistant for admin",
    body: "Meeting notes summarised, action items extracted, follow-up emails drafted — a Claude-powered AI assistant that handles the admin that follows every client conversation.",
  },
];

export default function ProfessionalServicesPage() {
  return (
    <PageShell
      eyebrow="Industries · Professional services"
      title="Compliant by design. Automated by default."
      subtitle="Intake, matter management, billing and reporting systems built for clinics, legal practices, accountants and consultancies."
    >
      <section className="relative overflow-hidden bg-[#F7F7F7] py-20 md:py-28">
        <BgGrid withReveal={true} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

          <div className="max-w-3xl mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold">How we help</p>
            <h2 className="mt-3 font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
              Billable hours lost to admin are hours you can&apos;t get back.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-[var(--ink-muted)]">
              Professional services firms carry a paradox: the more clients they win, the more time their best people spend on admin instead of client work. We fix that by automating the intake, billing, compliance and reporting tasks that currently sit between your team and the work they&apos;re actually paid for.
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
                q: "Will automation work with our existing practice management software?",
                a: "In most cases, yes. We build integrations with the tools you already use — Clio, LEAP, Xero, Karbon, Salesforce and others. If your software has an API or supports Zapier/n8n connectors, we can connect to it. We'll confirm compatibility before any work starts.",
              },
              {
                q: "How do you handle data security and confidentiality?",
                a: "We take data security seriously. All automations are built with principle of least privilege — systems only access the data they need. We don't store client data on third-party platforms unless explicitly required, and we're happy to work within your existing data governance policies.",
              },
              {
                q: "Can you automate billing without us losing control of the process?",
                a: "Absolutely. Automation handles the repetitive parts — time capture, invoice generation, payment reminders — while keeping your team in the approval loop for anything that needs a human decision. You stay in control; we remove the admin around that control.",
              },
              {
                q: "What if our processes are complex or non-standard?",
                a: "Professional services work is rarely simple, and we know that. We start every engagement with a process audit so we understand how your firm actually works — not how a generic template assumes it works. Every build is customised to your specific workflows and edge cases.",
              },
            ]} />
          </div>

          <div className="mt-14 rounded-2xl bg-[var(--brand-forest)] text-[var(--bg-cream)] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h3 className="font-display text-[26px] md:text-[32px] leading-tight text-[var(--bg-cream)]">
                How much admin are your fee-earners doing right now?
              </h3>
              <p className="mt-2 text-[15px] text-[var(--bg-cream)]/70">
                Book a 20-minute call. We&apos;ll audit where the time is going and what to fix first.
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
