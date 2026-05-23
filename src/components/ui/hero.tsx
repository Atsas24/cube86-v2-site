"use client";

import Link from "next/link";
import { useId } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";


const WORDS = ["Less", "admin.", "More", "of", "what", "you're", "actually"];

export default function Hero() {
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridX = useMotionValue(0);
  const gridY = useMotionValue(0);
  const baseId = useId();
  const revealId = useId();

  useAnimationFrame(() => {
    gridX.set((gridX.get() + 0.32) % 40);
    gridY.set((gridY.get() + 0.32) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(340px circle at ${mouseX}px ${mouseY}px, black 10%, transparent 80%)`;

  return (
    <section
      className="relative bg-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <svg className="absolute inset-0 w-full h-full opacity-[0.038] text-[var(--brand-forest)]">
          <defs>
            <motion.pattern
              id={baseId}
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              x={gridX}
              y={gridY}
            >
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </motion.pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${baseId})`} />
        </svg>
        <motion.div
          className="absolute inset-0 opacity-[0.22]"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        >
          <svg className="w-full h-full text-[var(--brand-forest)]">
            <defs>
              <motion.pattern
                id={revealId}
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                x={gridX}
                y={gridY}
              >
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </motion.pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${revealId})`} />
          </svg>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 md:px-10 lg:px-12 pt-16 sm:pt-20 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 text-center">

        {/* Animated headline */}
        <h1
          className="font-display font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]"
          style={{ fontSize: "clamp(32px, 6vw, 76px)" }}
        >
          {WORDS.map((word, i) => (
            <motion.span
              key={word + i}
              className="inline-block"
              style={{ marginRight: "0.28em" }}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: i * 0.09, duration: 0.55, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            className="inline-block italic text-[var(--brand-forest)]"
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: WORDS.length * 0.09,
              duration: 0.55,
              ease: "easeOut",
            }}
          >
            good at.
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 sm:mt-6 text-sm sm:text-[17px] md:text-[19px] leading-[1.7] text-[var(--ink-muted)] max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
        >
          We design and build the automations, AI agents and operating systems
          that let ambitious teams stop firefighting and start growing —
          whether you run a business, a charity or a practice.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-forest)] text-[var(--bg-cream)] font-semibold text-sm sm:text-[15px] px-5 sm:px-7 py-3 sm:py-4 hover:bg-[var(--brand-forest-deep)] active:scale-[0.98] transition-[transform,background-color] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Tell us what's slowing you down
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] text-[var(--ink)] font-medium text-sm sm:text-[15px] px-5 sm:px-7 py-3 sm:py-4 hover:bg-[#F7F7F7] active:scale-[0.98] transition-[transform,background-color] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Explore services
          </Link>
        </motion.div>


      </div>
    </section>
  );
}
