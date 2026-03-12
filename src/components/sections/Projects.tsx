"use client";

import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calendar, User } from "lucide-react";

const tagColors = [
  "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
];

const gradients = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-violet-500 to-purple-600",
  "from-amber-500 to-orange-600",
];

const projectTags = [
  ["MATLAB", "信号处理", "软著"],
  ["BIM", "结构设计", "一等奖"],
  ["BIM", "数据管理", "数字化"],
  ["施工管理", "质量安全", "资料归档"],
];

export function Projects() {
  const t = useTranslations("projects");

  const cards = [
    {
      titleKey: "card1_title" as const,
      roleKey: "card1_role" as const,
      dateKey: "card1_date" as const,
      descKey: "card1_desc" as const,
    },
    {
      titleKey: "card2_title" as const,
      roleKey: "card2_role" as const,
      dateKey: "card2_date" as const,
      descKey: "card2_desc" as const,
    },
    {
      titleKey: "card3_title" as const,
      roleKey: "card3_role" as const,
      dateKey: "card3_date" as const,
      descKey: "card3_desc" as const,
    },
    {
      titleKey: "card4_title" as const,
      roleKey: "card4_role" as const,
      dateKey: "card4_date" as const,
      descKey: "card4_desc" as const,
    },
  ];

  return (
    <section id="projects" className="bg-slate-100/50 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card, i) => (
            <AnimateOnScroll key={card.titleKey} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900">
                {/* Gradient top bar */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${gradients[i]}`}
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold leading-snug">
                    {t(card.titleKey)}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {t(card.roleKey)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {t(card.dateKey)}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {t(card.descKey)}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {projectTags[i].map((tag, j) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${tagColors[j % tagColors.length]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
