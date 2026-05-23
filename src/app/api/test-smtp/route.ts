import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  const results: Record<string, string> = {};

  const configs = [
    { label: "587-ipv4", port: 587, secure: false, family: 4 },
    { label: "465-ipv4", port: 465, secure: true, family: 4 },
  ];

  for (const cfg of configs) {
    const t = nodemailer.createTransport({
      host: "send.one.com",
      port: cfg.port,
      secure: cfg.secure,
      requireTLS: !cfg.secure,
      family: cfg.family,
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 8000,
      auth: { user: process.env.SMTP_EMAIL, pass: process.env.SMTP_PASSWORD },
    });
    try {
      await t.verify();
      results[cfg.label] = "OK";
    } catch (e) {
      results[cfg.label] = e instanceof Error ? e.message : String(e);
    }
  }

  return NextResponse.json(results);
}
