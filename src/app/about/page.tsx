import PageShell from "@/components/ui/page-shell";
import { BgGrid } from "@/components/ui/bg-grid";

export const metadata = {
  title: "About — Cube86",
  description: "Cube86 is an operations, automation and AI consultancy for ambitious teams.",
  openGraph: {
    title: "About — Cube86",
    description: "A small, senior team building automation and AI systems for businesses that want to grow without adding overhead.",
    url: "https://cube86.com/about",
  },
};

const DIFFERENTIATORS = [
  {
    label: "Outcomes, not outputs",
    body: "We're not here to build things for the sake of building. Every system we deliver has a measurable outcome attached to it — hours saved, revenue recovered, errors eliminated.",
  },
  {
    label: "Fast first delivery",
    body: "Most automation agencies lock you into long retainers before you see anything. We ship a working first build within two weeks of the kickoff call, so you can judge us by results, not proposals.",
  },
  {
    label: "Embedded, not remote",
    body: "We work inside your operation, not at arm's length. We learn how your team actually works, and we build around that — not around a template that almost fits.",
  },
  {
    label: "Honest scope",
    body: "If we can't solve a problem well, we say so in the first call. We'd rather lose a project than overpromise and underdeliver. Our reputation depends on it.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="We build the operating system you wish you already had."
      subtitle="Cube86 is a small, senior team. We work alongside founders, ops leads and leadership teams to ship systems that quietly compound — week after week, quarter after quarter."
    >
      <section className="relative bg-[var(--bg-cream)] py-20 md:py-28">
        <BgGrid withReveal={true} />
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Story */}
            <div className="lg:col-span-6">
              <div className="text-[17px] leading-[1.75] text-[var(--ink-muted)] space-y-6">
                <p>
                  We started Cube86 because the gap between &ldquo;we should automate this&rdquo;
                  and &ldquo;this is now running itself every Monday at 09:00&rdquo; is wider than
                  most agencies admit. Tools alone don&apos;t close it. Slide decks don&apos;t close
                  it. Embedded operators do.
                </p>
                <p>
                  That&apos;s what we are: a fractional ops, automation and AI team you can
                  point at the part of your business that&apos;s slowest, most manual or most
                  invisible. We design it, build it, run it, and hand it back when it&apos;s
                  stable.
                </p>
                <p>
                  We work with small businesses, charities and professional services
                  firms across the UK and EU. Hospitality remains a strong vertical for
                  us, but the playbook now spans clinics, consultancies, agencies and
                  mission-driven non-profits.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-[var(--border)] grid grid-cols-3 gap-6">
                {[
                  { label: "Speciality", value: "Automation" },
                  { label: "AI Agents", value: "Voice & Chat" },
                  { label: "Approach", value: "Embedded ops" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--brand-forest)]/60 font-semibold">{item.label}</p>
                    <p className="mt-1 font-display text-[20px] text-[var(--ink)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What makes us different */}
            <div className="lg:col-span-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold mb-8">
                What makes us different
              </p>
              <div className="space-y-8">
                {DIFFERENTIATORS.map((d) => (
                  <div key={d.label} className="border-b border-[var(--border)] pb-8 last:border-0 last:pb-0">
                    <h3 className="font-display text-[20px] leading-snug text-[var(--ink)]">
                      {d.label}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.7] text-[var(--ink-muted)]">
                      {d.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageShell>
  );
}
