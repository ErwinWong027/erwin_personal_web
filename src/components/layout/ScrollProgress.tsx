"use client";

import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary-500 to-primary-400"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
