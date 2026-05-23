import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  const results: Record<string, string> = {};

  const configs = [
    { label: "465-ssl", port: 465, secure: true },
    { label: "587-tls", port: 587, secure: false },
  ];

  for (const cfg of configs) {
    const t = nodemailer.createTransport({
      host: "send.one.com",
      port: cfg.port,
      secure: cfg.secure,
      requireTLS: !cfg.secure,
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
