import PageShell from "@/components/ui/page-shell";
import { BgGrid } from "@/components/ui/bg-grid";
import { ContactForm } from "@/components/ui/contact-form";

export const metadata = {
  title: "Contact — Cube86",
  description: "Book a 20-minute call with the Cube86 team.",
  openGraph: {
    title: "Contact — Cube86",
    description: "Tell us what's slow. We'll tell you what to fix first. Book a free 20-minute call.",
    url: "https://cube86.com/contact",
  },
};

const EXPECT = [
  {
    title: "20-minute discovery call",
    body: "No deck, no pitch. We ask questions, you describe what's slow, and we tell you honestly whether automation will help.",
  },
  {
    title: "A plain-English recommendation",
    body: "We won't sell you a retainer you don't need. If we can help, we'll tell you exactly what to build and roughly what it costs.",
  },
  {
    title: "Fast turnaround",
    body: "We reply to every enquiry within one business day. Most builds start within two weeks of the first call.",
  },
];

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Tell us what's slow. We'll tell you what to fix first."
      subtitle="20 minutes. No deck. No pitch. We'll look at the part of your operation that hurts most and tell you, plainly, whether automation will help."
    >
      <section className="relative bg-[var(--bg-cream)] py-20 md:py-28">
        <BgGrid withReveal={true} />
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Trust panel */}
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold mb-8">
                What to expect
              </p>
              <div className="space-y-8">
                {EXPECT.map((item, i) => (
                  <div key={item.title} className="flex gap-5">
                    <span className="font-display text-[28px] leading-none text-[var(--brand-forest)]/20 shrink-0 w-8 text-right">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[18px] leading-snug text-[var(--ink)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[1.7] text-[var(--ink-muted)]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-[var(--border)]">
                <p className="text-[13px] text-[var(--ink-muted)]">
                  Prefer email?{" "}
                  <a
                    href="mailto:hello@cube86.com"
                    className="text-[var(--brand-forest)] font-medium underline underline-offset-2"
                  >
                    hello@cube86.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageShell>
  );
}

