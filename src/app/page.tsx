import NavHeader from "@/components/ui/nav-header";
import Hero from "@/components/ui/hero";
import FeatureGrid from "@/components/ui/feature-grid";
import IntegrationsBand from "@/components/ui/integrations-band";
import ValueStatement from "@/components/ui/value-statement";
import StatsRow from "@/components/ui/stats-row";
import ServicesTabs from "@/components/ui/services-tabs";
import HowWeWork from "@/components/ui/how-we-work";
import CtaFooter from "@/components/ui/cta-footer";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cube86",
  description:
    "Operations automation, AI agents and business systems for SMEs, charities and professional services.",
  url: "https://cube86.com",
  email: "hello@cube86.com",
  areaServed: [{ "@type": "Country", name: "United Kingdom" }],
  serviceType: [
    "Operations Automation",
    "AI Voice & Chat Agents",
    "Marketing & Growth Systems",
    "Data, Reporting & Dashboards",
    "CRM & Customer Experience",
    "Website & Digital Presence",
    "Lead Generation Systems",
    "Personal & Freelancer Automation",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <NavHeader />
      <main className="flex-1">
        <Hero />
        <StatsRow />
        <ServicesTabs />
        <FeatureGrid />
        <IntegrationsBand />
        <ValueStatement />
        <HowWeWork />
      </main>
      <CtaFooter />
    </>
  );
}
