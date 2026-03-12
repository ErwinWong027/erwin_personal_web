"use client";

import { useTranslations, useLocale } from "next-intl";
import { Target, Database, Bot, Layers, ArrowRight, CheckCircle } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

export function IterationSummary() {
  const t = useTranslations("iterationSummary");
  const locale = useLocale();

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

  return (
    <section id="iteration-summary" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
            {t("intro")}
          </p>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          {stages.map((stage, i) => (
            <AnimateOnScroll key={stage.titleKey} delay={i * 0.1}>
              <div
                className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700">
                    <stage.icon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                  </div>
                  <h3 className="text-base font-semibold">
                    {t(stage.titleKey)}
                  </h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {t(stage.summaryKey)}
                </p>

                <ul className="space-y-2">
                  {stage.bulletsKey.map((bulletKey) => (
                    <li key={bulletKey} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                      <span>{t(bulletKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-10 text-center">
          <Link
              href={`/${locale}/ai-methodology`}
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary-700 hover:shadow-lg dark:bg-primary-500 dark:hover:bg-primary-600"
            >
            {t("cta")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
