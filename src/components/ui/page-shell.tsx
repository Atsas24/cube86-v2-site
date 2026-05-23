import NavHeader from "./nav-header";
import CtaFooter from "./cta-footer";
import { BgGrid } from "@/components/ui/bg-grid";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

export default function PageShell({ eyebrow, title, subtitle, children }: Props) {
  return (
    <>
      <NavHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-white border-b border-[var(--border)]">
          <BgGrid withReveal={true} />
          <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12 pt-16 md:pt-24 pb-16 md:pb-20">
            <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--brand-forest)] font-semibold">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[40px] md:text-[60px] lg:text-[72px] leading-[1.02] tracking-[-0.02em] text-[var(--ink)] max-w-4xl">
              {title}
            </h1>
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.65] text-[var(--ink-muted)] max-w-2xl">
              {subtitle}
            </p>
          </div>
        </section>
        {children}
      </main>
      <CtaFooter />
    </>
  );
}
