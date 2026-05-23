import PageShell from "@/components/ui/page-shell";
import ServicesTabs from "@/components/ui/services-tabs";

export const metadata = {
  title: "Services — Cube86",
  description: "Operations automation, AI agents, CRM, dashboards, growth and websites for SMEs and charities.",
  openGraph: {
    title: "Services — Cube86",
    description: "Operations automation, AI agents, CRM, dashboards, growth and websites for SMEs and charities.",
    url: "https://cube86.com/services",
  },
};

const SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "LocalBusiness", name: "Cube86", url: "https://cube86.com" },
  serviceType: "Business Automation & AI Systems",
  description:
    "Operations automation, AI voice and chat agents, CRM, dashboards, marketing systems, lead generation and website development for SMEs, charities and professional services firms.",
  areaServed: [{ "@type": "Country", name: "United Kingdom" }],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_SCHEMA) }}
      />
    <PageShell
      eyebrow="Services"
      title="An operating system, not a one-off project."
      subtitle="Pick a single service or layer them into a complete operating system. Either way, we work as embedded operators — not vendors."
    >
      <ServicesTabs />
    </PageShell>
    </>
  );
}
