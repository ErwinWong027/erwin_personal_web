"use client";

import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Honors } from "./Honors";

const educationEntries = [
  { id: "edu-edhec",    titleKey: "t5_title",  subtitleKey: "t5_subtitle",  descKey: "t5_desc",  date: "2022.07" },
  { id: "edu-bachelor", titleKey: "t1_title",  subtitleKey: "t1_subtitle",  descKey: "t1_desc",  date: "2018.09" },
  { id: "edu-uol",      titleKey: "t11_title", subtitleKey: "t11_subtitle", descKey: "t11_desc", date: "2025.09" },
] as const;

const workEntries = [
  { id: "jobark",    titleKey: "t9_title", subtitleKey: "t9_subtitle", descKey: "t9_desc", date: "2025.04" },
  { id: "bytedance", titleKey: "t8_title", subtitleKey: "t8_subtitle", descKey: "t8_desc", date: "2024.09" },
  { id: "iterative", titleKey: "t7_title", subtitleKey: "t7_subtitle", descKey: "t7_desc", date: "2023.09" },
  { id: "crosspath", titleKey: "t6_title", subtitleKey: "t6_subtitle", descKey: "t6_desc", date: "2023.06" },
] as const;

function EntryCard({
  title,
  subtitle,
  desc,
  date,
}: {
  title: string;
  subtitle: string;
  desc: string;
  date: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-1 flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold leading-snug text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <span className="shrink-0 text-xs text-slate-400">{date}</span>
      </div>
      <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{desc}</p>
    </div>
  );
}

export function Experience() {
  const t = useTranslations("timeline");

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          <div className="mb-16">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {t("section_education")}
            </p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
              {educationEntries.map((entry) => (
                <EntryCard
                  key={entry.id}
                  title={t(entry.titleKey)}
                  subtitle={t(entry.subtitleKey)}
                  desc={t(entry.descKey)}
                  date={entry.date}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {t("section_work")}
            </p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {workEntries.map((entry) => (
                <EntryCard
                  key={entry.id}
                  title={t(entry.titleKey)}
                  subtitle={t(entry.subtitleKey)}
                  desc={t(entry.descKey)}
                  date={entry.date}
                />
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <Honors />
      </div>
    </section>
  );
}
