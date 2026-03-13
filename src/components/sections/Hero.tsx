"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowDown, Download, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { SquirclePhoto } from "@/components/ui/SquirclePhoto";

function TypeWriter({ text, delay = 60 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      <span
        className={`inline-block w-0.5 h-[1.1em] align-text-bottom bg-cyan-400 ${
          done ? "animate-pulse" : ""
        }`}
      />
    </span>
  );
}

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-100 dark:from-slate-950 dark:via-cyan-950/20 dark:to-slate-900" />
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          background: 'linear-gradient(-45deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
        }}
      />

      {/* Animated glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-56 h-56 rounded-full opacity-8 dark:opacity-4"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(6, 182, 212, 0.1) 40%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full opacity-8 dark:opacity-4"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-44 h-44 rounded-full opacity-8 dark:opacity-4"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.1) 40%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full opacity-6 dark:opacity-3"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.1) 40%, transparent 70%)',
          filter: 'blur(45px)',
        }}
        animate={{
          x: [0, -70, 0],
          y: [0, 70, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 lg:flex-row lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-widest text-primary-500 uppercase dark:text-primary-400"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {t("name")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-lg font-medium text-slate-500 dark:text-slate-400"
          >
            {t("role")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-xl text-slate-600 sm:text-2xl dark:text-slate-300"
          >
            <TypeWriter text={t("tagline")} delay={50} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary-500/20 transition-all hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-xl hover:shadow-primary-500/30"
            >
              {t("cta_about")}
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#ai-chat"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#ai-chat")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary-500/20 transition-all hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-xl hover:shadow-primary-500/30"
            >
              {t("cta_ai_chat")}
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600"
            >
              {t("cta_resume")}
              <Download className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-shrink-0"
        >
          <SquirclePhoto
            src="/images/background.jpg"
            alt="Profile Photo"
            size={320}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
