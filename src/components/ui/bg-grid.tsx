"use client";
import { useId, useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame, useMotionTemplate } from "framer-motion";

export function BgGrid({ opacity = 0.038, withReveal = false }: { opacity?: number; withReveal?: boolean }) {
  const id = useId();
  const revealId = useId();
  const gridX = useMotionValue(0);
  const gridY = useMotionValue(0);
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame(() => {
    gridX.set((gridX.get() + 0.32) % 40);
    gridY.set((gridY.get() + 0.32) % 40);
  });

  useEffect(() => {
    if (!withReveal) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        mouseX.set(x);
        mouseY.set(y);
      } else {
        mouseX.set(-999);
        mouseY.set(-999);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [withReveal, mouseX, mouseY]);

  const maskImage = useMotionTemplate`radial-gradient(340px circle at ${mouseX}px ${mouseY}px, black 10%, transparent 80%)`;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <svg
        className="absolute inset-0 w-full h-full text-[var(--brand-forest)]"
        style={{ opacity }}
      >
        <defs>
          <motion.pattern
            id={id}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x={gridX}
            y={gridY}
          >
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </motion.pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>

      {withReveal && (
        <motion.div
          className="absolute inset-0"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        >
          <svg className="absolute inset-0 w-full h-full text-[var(--brand-forest)]" style={{ opacity: 0.22 }}>
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
      )}
    </div>
  );
}
