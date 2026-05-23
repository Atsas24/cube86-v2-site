import PageShell from "@/components/ui/page-shell";
import Link from "next/link";
import { BgGrid } from "@/components/ui/bg-grid";
import { FAQ } from "@/components/ui/faq";

export const metadata = {
  title: "Charities & Non-profits — Cube86",
  description: "Cube86 helps charities and non-profits automate donor reporting, grant management and volunteer coordination.",
  openGraph: {
    title: "Charities & Non-profits — Cube86",
    description: "Free your charity from admin with automation for donor reporting, grant tracking, volunteer coordination and board reporting.",
    url: "https://cube86.com/industries/charities",
  },
};

const AUTOMATIONS = [
  {
    title: "Donor reporting automation",
    body: "Impact reports, thank-you letters and renewal reminders go out automatically at the right time. Donors feel valued without your team writing 200 personalised emails by hand.",
  },
  {
    title: "Grant tracking dashboard",
    body: "All active grants, deadlines, milestones and reporting requirements in one live view — with automated alerts when a report is due or a deadline is approaching.",
  },
  {
    title: "Volunteer coordination",
    body: "Shift scheduling, attendance tracking and communications handled in one system. Volunteers get automated reminders; coordinators get a single view of who is where.",
  },
  {
    title: "Fundraising pipeline",
    body: "Prospect donors move through a defined journey — cultivation, ask, thank, steward — with automated touchpoints at each stage so nothing falls through the cracks.",
  },
  {
    title: "Board and trustee reporting",
    body: "Monthly board packs generated automatically from your live data. The right numbers, the right format, sent on the right day — no staff time wasted building slides.",
  },
  {
    title: "Gift Aid automation",
    body: "Eligible donations flagged, declarations collected and HMRC submissions prepared automatically — recovering every pound you're entitled to without manual admin.",
  },
];

export default function CharitiesPage() {
  return (
    <PageShell
      eyebrow="Industries · Charities & non-profits"
      title="More mission. Less admin."
      subtitle="We help charities free up staff time, impress funders with clean data and build internal systems that let your team focus on impact — not spreadsheets."
    >
      <section className="relative overflow-hidden bg-[#F7F7F7] py-20 md:py-28">
        <BgGrid withReveal={true} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

          <div className="max-w-3xl mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold">How we help</p>
            <h2 className="mt-3 font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
              The back-office burden charities can&apos;t afford to carry.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-[var(--ink-muted)]">
              Charities face the same operational complexity as businesses but with a fraction of the admin resource. We build automation systems that free your staff from repetitive tasks — donor comms, grant reporting, volunteer coordination — so they can spend their time on the work that actually matters.
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
                q: "Do you work with small charities, or only larger organisations?",
                a: "We work with charities of all sizes — from one or two staff members to teams of fifty or more. We scope everything to your budget and build only what will actually save you time. Smaller charities often see the biggest return because a single automation can free up the equivalent of a part-time role.",
              },
              {
                q: "Can you help us meet funder reporting requirements?",
                a: "Yes. We build automated reporting systems that pull your impact data into funder-ready formats on schedule — so reports that used to take two days take twenty minutes. We can also automate grant deadline alerts and milestone tracking.",
              },
              {
                q: "We use different CRMs for different funding streams. Can you connect them?",
                a: "That's one of the most common problems we solve for charities. We connect multiple CRMs, fundraising platforms and spreadsheets into a single source of truth — so you stop re-entering data and start seeing an accurate, live picture of your organisation.",
              },
              {
                q: "Do we need to change our existing tools?",
                a: "No. We build around the tools you already use. If your team is on Salesforce, Beacon or a bespoke CRM, we connect to it rather than asking you to switch. We only suggest new tools when there's a clear gap that can't be filled any other way.",
              },
            ]} />
          </div>

          <div className="mt-14 rounded-2xl bg-[var(--brand-forest)] text-[var(--bg-cream)] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h3 className="font-display text-[26px] md:text-[32px] leading-tight text-[var(--bg-cream)]">
                Let your team focus on impact, not admin.
              </h3>
              <p className="mt-2 text-[15px] text-[var(--bg-cream)]/70">
                20-minute call. We&apos;ll identify the three tasks eating the most staff time.
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
