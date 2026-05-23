"use client";

import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  variant?: "forest" | "cream";
};

export default function Logo({ variant = "forest" }: LogoProps) {
  const textColor = variant === "forest" ? "var(--brand-forest)" : "var(--bg-cream)";
  const accentColor = variant === "forest" ? "var(--brand-forest-mid)" : "var(--accent-lime)";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-0 -ml-2 hover:opacity-90 transition-opacity duration-200"
      aria-label="Cube86 home"
    >
      <Image
        src="/cube86-logo-transparent.png"
        alt=""
        width={56}
        height={56}
        priority
        className="object-contain h-10 w-10 md:h-12 md:w-12"
      />
      <span
        className="font-display font-semibold text-2xl md:text-[26px] -ml-1.5 leading-none"
        style={{ color: textColor, letterSpacing: "-0.02em" }}
      >
        Cube<span style={{ color: accentColor }}>86</span>
      </span>
    </Link>
  );
}
