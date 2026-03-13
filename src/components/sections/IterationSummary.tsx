"use client";

import { useTranslations, useLocale } from "next-intl";
import { Target, Database, Bot, Layers, ArrowRight, CheckCircle } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

const INTERVAL_MS = 3500;

export function IterationSummary() {
  const t = useTranslations("iterationSummary");
  const locale = useLocale();
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stages = [
    {
      icon: Target,
      titleKey: "stage1_title" as const,
      summaryKey: "stage1_summary" as const,
      bulletsKey: ["stage1_bullet1", "stage1_bullet2", "stage1_bullet3"] as const,
    },
    {
      icon: Database,
      titleKey: "stage2_title" as const,
      summaryKey: "stage2_summary" as const,
      bulletsKey: ["stage2_bullet1", "stage2_bullet2", "stage2_bullet3"] as const,
    },
    {
      icon: Bot,
      titleKey: "stage3_title" as const,
      summaryKey: "stage3_summary" as const,
      bulletsKey: ["stage3_bullet1", "stage3_bullet2", "stage3_bullet3"] as const,
    },
    {
      icon: Layers,
      titleKey: "stage4_title" as const,
      summaryKey: "stage4_summary" as const,
      bulletsKey: ["stage4_bullet1", "stage4_bullet2", "stage4_bullet3"] as const,
    },
  ];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % stages.length);
    setProgress(0);
  }, [stages.length]);

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);
    intervalRef.current = setInterval(advance, INTERVAL_MS);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (INTERVAL_MS / 50), 100));
    }, 50);
  }, [advance]);

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [startCycle]);

  const goTo = (idx: number) => {
    setActive(idx);
    setProgress(0);
    startCycle();
  };

  const activeStage = stages[active];

  return (
    <section id="iteration-summary" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
            {t("intro")}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="relative">
            {/* Step tabs */}
            <div className="flex items-stretch gap-0 relative">
              {stages.map((stage, i) => {
                const isActive = i === active;
                const isPast = i < active;
                return (
                  <button
                    key={stage.titleKey}
                    onClick={() => goTo(i)}
                    className={`group flex-1 flex flex-col items-center gap-2 px-3 pt-4 pb-3 text-sm font-medium transition-all duration-300 border-b-2 cursor-pointer
                      ${isActive
                        ? "border-primary-500 text-primary-600 dark:text-primary-400"
                        : isPast
                          ? "border-primary-300 text-slate-500 dark:border-primary-700 dark:text-slate-400"
                          : "border-slate-200 text-slate-400 dark:border-slate-700 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                      }`}
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300
                        ${isActive
                          ? "bg-primary-500 text-white shadow-md shadow-primary-200 dark:shadow-primary-900 scale-110"
                          : isPast
                            ? "bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400"
                            : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500 group-hover:bg-slate-200 dark:group-hover:bg-slate-700"
                        }`}
                    >
                      <stage.icon className="h-4 w-4" />
                    </div>
                    <span className="hidden sm:block text-xs leading-tight text-center">
                      {t(stage.titleKey)}
                    </span>
                    <span className="sm:hidden text-xs">{i + 1}</span>
                  </button>
                );
              })}
              {/* progress bar */}
              <div
                className="absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-none"
                style={{ width: `${(active / stages.length) * 100 + progress / stages.length}%` }}
              />
            </div>

            {/* Active card */}
            <div
              key={active}
              className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-800 shadow-sm animate-fade-in"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/30">
                  <activeStage.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary-500 dark:text-primary-400 uppercase tracking-wider">
                    Phase {active + 1} / {stages.length}
                  </span>
                  <h3 className="text-base font-semibold leading-tight">
                    {t(activeStage.titleKey)}
                  </h3>
                </div>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t(activeStage.summaryKey)}
              </p>

              <ul className="grid sm:grid-cols-3 gap-3">
                {activeStage.bulletsKey.map((bulletKey) => (
                  <li key={bulletKey} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                    <span>{t(bulletKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dot nav */}
            <div className="mt-5 flex items-center justify-center gap-3">
              {stages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer
                    ${i === active ? "w-6 bg-primary-500" : "w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"}`}
                  aria-label={`Go to phase ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-10 text-center">
          <Link
            href={`/${locale}/ai-methodology`}
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary-600 hover:shadow-lg dark:bg-primary-600 dark:hover:bg-primary-700"
          >
            {t("cta")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
