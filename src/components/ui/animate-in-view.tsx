"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

export function AnimateInView({ children, delay = 0, className, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const MotionEl = as === "div" ? motion.div
    : as === "section" ? motion.section
    : as === "article" ? motion.article
    : motion.li;

  return (
    <div ref={ref}>
      <MotionEl
        initial={{ opacity: 0, y: 22 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        {children}
      </MotionEl>
    </div>
  );
}
