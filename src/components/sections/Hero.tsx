"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

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
        className={`inline-block w-0.5 h-[1.1em] align-text-bottom bg-primary-400 ${
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-primary-50/30 to-slate-100 dark:from-slate-950 dark:via-primary-950/20 dark:to-slate-900" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest text-primary-600 uppercase dark:text-primary-400"
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
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary-600/20 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30"
          >
            {t("cta_projects")}
            <ArrowDown className="h-4 w-4" />
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
