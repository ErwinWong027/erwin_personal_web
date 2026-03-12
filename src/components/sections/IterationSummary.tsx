"use client";

import { useTranslations } from "next-intl";
import { Target, Database, Bot, Layers, ArrowRight, CheckCircle } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

export function IterationSummary() {
  const t = useTranslations("iterationSummary");

  const stages = [
    {
      icon: Target,
      titleKey: "stage1_title" as const,
      summaryKey: "stage1_summary" as const,
      bulletsKey: ["stage1_bullet1", "stage1_bullet2", "stage1_bullet3"] as const,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/50 dark:to-amber-900/50",
      border: "border-amber-200 dark:border-amber-800",
    },
    {
      icon: Database,
      titleKey: "stage2_title" as const,
      summaryKey: "stage2_summary" as const,
      bulletsKey: ["stage2_bullet1", "stage2_bullet2", "stage2_bullet3"] as const,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50",
      border: "border-blue-200 dark:border-blue-800",
    },
    {
      icon: Bot,
      titleKey: "stage3_title" as const,
      summaryKey: "stage3_summary" as const,
      bulletsKey: ["stage3_bullet1", "stage3_bullet2", "stage3_bullet3"] as const,
      color: "text-violet-600 dark:text-violet-400",
      bg: "bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/50 dark:to-violet-900/50",
      border: "border-violet-200 dark:border-violet-800",
    },
    {
      icon: Layers,
      titleKey: "stage4_title" as const,
      summaryKey: "stage4_summary" as const,
      bulletsKey: ["stage4_bullet1", "stage4_bullet2", "stage4_bullet3"] as const,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50",
      border: "border-emerald-200 dark:border-emerald-800",
    },
  ];

  return (
    <section id="iteration-summary" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-500 dark:text-slate-400">
            {t("intro")}
          </p>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2">
          {stages.map((stage, i) => (
            <AnimateOnScroll key={stage.titleKey} delay={i * 0.1}>
              <div
                className={`h-full rounded-2xl border ${stage.border} ${stage.bg} p-6 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-sm">
                    <stage.icon className={`h-6 w-6 ${stage.color}`} />
                  </div>
                  <h3 className="text-lg font-bold">
                    {t(stage.titleKey)}
                  </h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {t(stage.summaryKey)}
                </p>

                <ul className="space-y-2">
                  {stage.bulletsKey.map((bulletKey) => (
                    <li key={bulletKey} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                      <span>{t(bulletKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12">
          <div className="rounded-2xl bg-white dark:bg-slate-800 p-6 text-center shadow-sm">
            <p className="text-base text-slate-600 dark:text-slate-300 mb-6">
              {t("takeaway")}
            </p>
            <Link
              href="/ai-methodology"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 dark:bg-primary-500 dark:hover:bg-primary-600"
            >
              {t("cta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
