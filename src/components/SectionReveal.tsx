import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function SectionReveal({ children, id, className = "" }: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // Custom animation values based on reduced motion setting
  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 32, scale: 0.98, filter: "blur(6px)" };

  const animate = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" };

  const transition = {
    duration: shouldReduceMotion ? 0.3 : 0.8,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
  };

  return (
    <motion.section
      id={id}
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={transition}
    >
      {children}
    </motion.section>
  );
}
