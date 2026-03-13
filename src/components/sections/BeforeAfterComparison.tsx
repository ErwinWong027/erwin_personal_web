"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const beforeImages = ["/images/Before1.png", "/images/Before2.png", "/images/Before3.png"];
const afterImages = ["/images/After1.png", "/images/After2.png", "/images/After3.png"];

export function BeforeAfterComparison() {
  const t = useTranslations("aiMethod");

  const comparisons = [
    {
      titleKey: "compare1_title" as const,
      descKey: "compare1_caption" as const,
      index: 0,
    },
    {
      titleKey: "compare2_title" as const,
      descKey: "compare2_caption" as const,
      index: 1,
    },
    {
      titleKey: "compare3_title" as const,
      descKey: "compare3_caption" as const,
      index: 2,
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
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={beforeImages[comparison.index]}
                    alt="Before"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/50">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Before</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={afterImages[comparison.index]}
                    alt="After"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/50">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">After</p>
                </div>
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
