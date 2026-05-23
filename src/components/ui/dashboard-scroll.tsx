"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);

  return (
    <div ref={ref} style={{ perspective: "1400px" }}>
      <motion.div style={{ rotateX, scale, opacity }}>
        {children}
      </motion.div>
    </div>
  );
}

export function DashboardScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0.5, 1]);

  return (
    <div ref={ref} style={{ perspective: "1200px" }}>
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          boxShadow:
            "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        }}
        className="border-[3px] border-[#383838] bg-[#1a1a1a] rounded-[20px] p-[6px] md:p-3 overflow-hidden"
      >
        <div className="rounded-2xl overflow-hidden bg-[#ebebeb]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
