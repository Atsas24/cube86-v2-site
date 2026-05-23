"use client";

import { useState } from "react";
import { BgGrid } from "@/components/ui/bg-grid";
import { ScrollReveal } from "@/components/ui/dashboard-scroll";

type Service = {
  id: string;
  title: string;
  subtitle: string;
  detail: string;
  bullets: string[];
  tag: string;
};

const SERVICES: Service[] = [
  {
    id: "ops",
    title: "Operations Automation",
    subtitle:
      "We map your most manual, repetitive processes and build the workflows, internal tools and approval systems that run them automatically.",
    detail:
      "Most teams carry a hidden tax: approvals that travel by email, data re-entered from one tool into another, reports assembled by hand every Monday morning. We document every step of your most costly processes, identify where human effort adds no real value, and replace those steps with automated flows. The result is a business that runs more consistently, at lower cost, with fewer errors — and your team free to focus on work that actually moves things forward.",
    bullets: [
      "Process audit — we map and prioritise what's costing your team the most time",
      "Approval and sign-off flows for invoices, requests and onboarding — built around your existing process",
      "Custom internal tools and databases built to the way your team actually works",
      "Document generation — contracts, quotes and reports produced automatically from your data",
      "Task routing — the right action lands with the right person without anyone forwarding emails",
      "Error alerts and audit trails so nothing falls through the cracks",
    ],
    tag: "",
  },
  {
    id: "voice",
    title: "AI Voice & Chat Agents",
    subtitle:
      "Always-on AI receptionists and support agents that handle routine enquiries in your tone — so your team only deals with the conversations that need a human.",
    detail:
      "Every unanswered call and slow reply costs you a customer. AI agents handle first-line contact instantly — answering questions, taking bookings, qualifying leads and collecting information — in your brand's voice, at any hour. When a conversation genuinely needs a human, the agent hands it over cleanly, with full context, so your team never starts from scratch. The system learns your most common enquiries and improves continuously.",
    bullets: [
      "AI telephone receptionist — answers, qualifies and routes every inbound call",
      "Web chat agent embedded on your site or landing pages",
      "WhatsApp and SMS automation for appointment reminders and follow-ups",
      "Booking and availability handling integrated directly with your calendar",
      "Lead qualification — the agent captures name, need and budget before handing off",
      "Escalation logic — urgent or complex queries reach a human immediately, every time",
    ],
    tag: "",
  },
  {
    id: "marketing",
    title: "Marketing & Growth Systems",
    subtitle:
      "Content pipelines, social automation and lead funnels built to compound — you brief the strategy once, the system executes it week after week.",
    detail:
      "Consistent marketing is what separates the businesses that grow from the ones that plateau. The problem is most teams don't have the capacity to show up consistently. We build the systems that do it for them: AI-assisted content pipelines that turn a single brief into a week of posts, email sequences that nurture cold leads over time, and funnels that capture and qualify interest automatically. You stay in control of strategy; the system handles execution.",
    bullets: [
      "AI content production pipeline — blog, social and email drafts generated from one brief",
      "Multi-channel scheduling (LinkedIn, Instagram, X) with performance reporting",
      "Email nurture sequences that move cold contacts to warm leads over time",
      "Landing pages connected to automated follow-up flows",
      "Lead scoring — contacts ranked by engagement and buying signals automatically",
      "Campaign performance dashboards pulling all your channel data into one view",
    ],
    tag: "",
  },
  {
    id: "data",
    title: "Data, Reporting & Dashboards",
    subtitle:
      "We connect your tools into a single source of truth and build the dashboards, exec views and automated reports that make decisions obvious.",
    detail:
      "Decisions made on last month's data are guesses. We connect every tool your business runs on — CRM, finance, ops, marketing — and build a live dashboard that reflects what's actually happening right now. Regular reports are automated and delivered on schedule, so leadership never has to chase numbers. If something goes wrong, alerts fire before it becomes a problem. The goal is a business where everyone is looking at the same accurate picture.",
    bullets: [
      "Live KPI dashboard pulling from all your existing tools (no manual updates)",
      "CRM, finance, ops and marketing data unified into one view",
      "Automated weekly and monthly reports delivered to your inbox on schedule",
      "Board pack and investor report templates generated automatically",
      "Anomaly alerts — if a metric moves outside normal range, you hear about it immediately",
      "Grant and donor-ready reporting for charities and funded organisations",
    ],
    tag: "",
  },
  {
    id: "crm",
    title: "CRM & Customer Experience",
    subtitle:
      "We design and build CRM systems around your actual customer or donor journey — from first contact through to retention and renewal.",
    detail:
      "A CRM that nobody updates is just expensive clutter. We design CRM systems around how your team actually works — clean pipelines, sensible stages, automated data entry — so the system stays accurate without anyone having to maintain it manually. Every touchpoint in the customer journey is mapped: welcome sequences, follow-up reminders, renewal nudges and win-back flows all run automatically. Your team focuses on relationships; the CRM handles the admin.",
    bullets: [
      "CRM design and build — from scratch, or restructuring what you already have",
      "Automated data entry — new contacts captured from forms, calls and emails without manual input",
      "Lifecycle sequences: welcome, onboarding, follow-up, renewal and win-back flows",
      "Pipeline alerts — deals or matters that haven't moved in X days surface automatically",
      "Segmentation and tagging that stays clean as your contact list grows",
      "Integration with your invoicing, calendar and communication tools",
    ],
    tag: "",
  },
  {
    id: "web",
    title: "Website & Digital Presence",
    subtitle:
      "A modern, conversion-focused marketing site that loads fast, ranks well and turns visitors into enquiries — built with Next.js and Tailwind.",
    detail:
      "Your website is often the first thing a potential client judges you by. We build marketing sites that work: fast-loading, well-structured, clearly written and designed to convert. Every page is built with organic search in mind, and the site is connected to your analytics and CRM from day one so you know what's working. We don't do templates — every site is built for your specific audience, positioning and goals.",
    bullets: [
      "Design and development in Next.js and Tailwind CSS — no templates, no page builders",
      "Conversion-optimised layout: clear hierarchy, strong CTAs, fast load times",
      "On-page SEO — title tags, structured headings, metadata and schema markup from the start",
      "Core Web Vitals and technical health passing before launch",
      "Analytics and form tracking connected to your CRM from day one",
      "Ongoing hosting, updates and performance monitoring if required",
    ],
    tag: "",
  },
  {
    id: "leadgen",
    title: "Lead Generation Systems",
    subtitle:
      "We build automated lead generation pipelines that find, qualify and contact prospects — so your team always has a full pipeline without manual prospecting.",
    detail:
      "A sales pipeline that depends on manual prospecting is a pipeline that dries up the moment your team gets busy. We build systems that identify the right prospects, enrich their contact data, and reach out with personalised messages automatically. Replies trigger a human follow-up; non-responders enter a timed re-engagement sequence. The result is a consistent flow of qualified conversations without anyone spending hours on LinkedIn or cold email spreadsheets.",
    bullets: [
      "Ideal customer profile definition and targeted prospect list building",
      "Data enrichment — company size, role, email and phone verified automatically",
      "Personalised cold email sequences written and sent at scale",
      "LinkedIn outreach automation with connection requests and follow-up messages",
      "Lead scoring and CRM entry — qualified leads land in your pipeline automatically",
      "Reply handling — positive responses trigger immediate human follow-up",
    ],
    tag: "",
  },
  {
    id: "personal",
    title: "Personal & Freelancer Automation",
    subtitle:
      "Not a business? We help individuals, freelancers and side-project founders automate the admin so they can spend more time on what they actually love doing.",
    detail:
      "Automation isn't just for large teams. If you're a freelancer spending hours on invoicing, a founder manually sending onboarding emails, or an individual trying to build something on the side, we can build you a personal operating system that handles the repetitive parts. Small automations compound quickly — a 30-minute weekly task automated is 26 hours back per year. We scope everything to your budget and build only what will actually save you time.",
    bullets: [
      "Personal productivity systems built around how you actually work and think",
      "Freelancer toolkit: automated invoicing, proposal generation and client onboarding",
      "Side-project automations: waitlists, email capture and launch sequences",
      "Social media scheduling and content repurposing pipelines",
      "Personal finance tracking and monthly spending summaries automated",
      "AI assistant setup configured to your specific workflows and communication style",
    ],
    tag: "",
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState(0);
  const svc = SERVICES[active];

  return (
    <section className="relative bg-[var(--bg-cream)] py-20 md:py-28 lg:py-32">
      <BgGrid withReveal={true} />
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brand-forest)] font-semibold">
            What we do
          </p>
          <h2 className="mt-3 font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-[var(--ink)]">
            Eight services. One operating system for your business.
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.7] text-[var(--ink-muted)] max-w-2xl">
            Pick a single service, or layer them into a complete operating
            system. We work as embedded operators — present enough to understand
            your business, light enough to keep you moving fast.
          </p>
        </div>

        <ScrollReveal>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 lg:items-stretch">
          {/* Tab list */}
          <ul className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-6 px-6 lg:mx-0 lg:px-0">
            {SERVICES.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.id} className="shrink-0 lg:shrink snap-start">
                  <button
                    onClick={() => setActive(i)}
                    className={`relative w-full text-left rounded-2xl border px-5 py-4 transition-[background-color,border-color] duration-300 ${
                      isActive
                        ? "bg-[var(--brand-forest)] border-[var(--brand-forest)]"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--border-strong)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] uppercase tracking-[0.18em] font-semibold shrink-0 ${isActive ? "text-[var(--accent-lime)]" : "text-[var(--brand-forest)]/60"}`}>
                        0{i + 1}
                      </span>
                      <span className={`font-display text-[16px] md:text-[18px] leading-tight ${isActive ? "text-[var(--bg-cream)]" : "text-[var(--ink)]"}`}>
                        {s.title}
                      </span>
                    </div>
                    {s.tag && (
                      <span className={`mt-2 ml-7 inline-block text-[10px] uppercase tracking-[0.14em] rounded-full px-2.5 py-0.5 font-semibold ${isActive ? "bg-[var(--accent-lime)] text-[var(--brand-forest-deep)]" : "bg-[var(--brand-forest)]/10 text-[var(--brand-forest)]"}`}>
                        {s.tag}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Content card — stretches to match full tab list height */}
          <div className="lg:col-span-8 flex">
            <div className="w-full rounded-2xl bg-[var(--bg-cream)] border border-[var(--border)] shadow-card-strong p-6 md:p-10 flex flex-col">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--brand-forest)] font-semibold">
                  Service · 0{active + 1}
                </span>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-forest)] text-[var(--bg-cream)] text-[13px] font-medium px-4 py-2 hover:bg-[var(--brand-forest-mid)] active:scale-[0.98] transition-[transform,background-color] duration-200"
                >
                  Start a project
                  <span aria-hidden className="text-[var(--accent-lime)]">→</span>
                </a>
              </div>

              <h3 className="mt-5 font-display text-[28px] md:text-[34px] leading-[1.1] text-[var(--ink)]">
                {svc.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.7] text-[var(--ink-muted)] font-medium">
                {svc.subtitle}
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] text-[var(--ink-muted)]">
                {svc.detail}
              </p>

              <div className="mt-6 pt-6 border-t border-[var(--border)] flex-1">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--brand-forest)] font-semibold mb-4">
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] text-[var(--ink)]">
                      <span aria-hidden className="mt-[8px] inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand-forest)] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
