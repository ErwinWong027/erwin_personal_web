"use client";

import { useTranslations } from "next-intl";
import { Image as ImageIcon, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function BeforeAfterComparison() {
  const t = useTranslations("aiMethod");

  const comparisons = [
    {
      titleKey: "compare1_title" as const,
      beforeKey: "compare1_before" as const,
      afterKey: "compare1_after" as const,
      descKey: "compare1_caption" as const,
    },
    {
      titleKey: "compare2_title" as const,
      beforeKey: "compare2_before" as const,
      afterKey: "compare2_after" as const,
      descKey: "compare2_caption" as const,
    },
    {
      titleKey: "compare3_title" as const,
      beforeKey: "compare3_before" as const,
      afterKey: "compare3_after" as const,
      descKey: "compare3_caption" as const,
    },
  ];

  return (
    <AnimateOnScroll className="mt-20">
      <h3 className="mb-8 text-center text-2xl font-bold">{t("section4_title")}</h3>
      <div className="space-y-8">
        {comparisons.map((comparison) => (
          <div key={comparison.titleKey} className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-900/50">
            <h4 className="mb-6 text-center text-lg font-semibold">{t(comparison.titleKey)}</h4>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 mx-auto dark:bg-slate-700">
                  <ImageIcon className="h-8 w-8 text-slate-400" />
                </div>
                <p className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-300">Before</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t(comparison.beforeKey)}</p>
                <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">{t("placeholder_label")}</p>
              </div>
              <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 mx-auto dark:bg-slate-700">
                  <ImageIcon className="h-8 w-8 text-slate-400" />
                </div>
                <p className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-300">After</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t(comparison.afterKey)}</p>
                <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">{t("placeholder_label")}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <ArrowRight className="h-4 w-4 text-primary-500" />
              <span>{t(comparison.descKey)}</span>
            </div>
          </div>
        ))}
      </div>
    </AnimateOnScroll>
  );
}
