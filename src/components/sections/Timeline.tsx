"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  Briefcase,
  FolderGit2,
  Trophy,
  BookOpen,
  FileCode2,
  Users,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

type TimelineEntry = {
  id: string;
  year: string;
  date: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
  tagKey: string;
  icon: typeof GraduationCap;
  color: string;
  dotColor: string;
};

const entries: TimelineEntry[] = [
  {
    id: "edu-bachelor",
    year: "2018",
    date: "2018.09",
    titleKey: "t1_title",
    subtitleKey: "t1_subtitle",
    descKey: "t1_desc",
    tagKey: "t1_tag",
    icon: GraduationCap,
    color: "text-blue-600 dark:text-blue-400",
    dotColor: "bg-blue-500",
  },
  {
    id: "campus",
    year: "2019",
    date: "2019.09",
    titleKey: "t2_title",
    subtitleKey: "t2_subtitle",
    descKey: "t2_desc",
    tagKey: "t2_tag",
    icon: Users,
    color: "text-teal-600 dark:text-teal-400",
    dotColor: "bg-teal-500",
  },
  {
    id: "project-dachuang",
    year: "2020",
    date: "2020.10",
    titleKey: "t3_title",
    subtitleKey: "t3_subtitle",
    descKey: "t3_desc",
    tagKey: "t3_tag",
    icon: FolderGit2,
    color: "text-violet-600 dark:text-violet-400",
    dotColor: "bg-violet-500",
  },
  {
    id: "awards-2021",
    year: "2021",
    date: "2021.11",
    titleKey: "t4_title",
    subtitleKey: "t4_subtitle",
    descKey: "t4_desc",
    tagKey: "t4_tag",
    icon: Trophy,
    color: "text-rose-600 dark:text-rose-400",
    dotColor: "bg-rose-500",
  },
  {
    id: "edu-master",
    year: "2022",
    date: "2022.07",
    titleKey: "t5_title",
    subtitleKey: "t5_subtitle",
    descKey: "t5_desc",
    tagKey: "t5_tag",
    icon: GraduationCap,
    color: "text-indigo-600 dark:text-indigo-400",
    dotColor: "bg-indigo-500",
  },
  {
    id: "crosspath",
    year: "2023",
    date: "2023.06",
    titleKey: "t6_title",
    subtitleKey: "t6_subtitle",
    descKey: "t6_desc",
    tagKey: "t6_tag",
    icon: Briefcase,
    color: "text-amber-600 dark:text-amber-400",
    dotColor: "bg-amber-500",
  },
  {
    id: "iterative",
    year: "2023",
    date: "2023.09",
    titleKey: "t7_title",
    subtitleKey: "t7_subtitle",
    descKey: "t7_desc",
    tagKey: "t7_tag",
    icon: Briefcase,
    color: "text-cyan-600 dark:text-cyan-400",
    dotColor: "bg-cyan-500",
  },
  {
    id: "bytedance",
    year: "2024",
    date: "2024.09",
    titleKey: "t8_title",
    subtitleKey: "t8_subtitle",
    descKey: "t8_desc",
    tagKey: "t8_tag",
    icon: Briefcase,
    color: "text-emerald-600 dark:text-emerald-400",
    dotColor: "bg-emerald-500",
  },
  {
    id: "jobark",
    year: "2025",
    date: "2025.04",
    titleKey: "t9_title",
    subtitleKey: "t9_subtitle",
    descKey: "t9_desc",
    tagKey: "t9_tag",
    icon: Briefcase,
    color: "text-orange-600 dark:text-orange-400",
    dotColor: "bg-orange-500",
  },
  {
    id: "adventurex",
    year: "2025",
    date: "2025.07",
    titleKey: "t10_title",
    subtitleKey: "t10_subtitle",
    descKey: "t10_desc",
    tagKey: "t10_tag",
    icon: FolderGit2,
    color: "text-violet-600 dark:text-violet-400",
    dotColor: "bg-violet-500",
  },
  {
    id: "edu-uol",
    year: "2025",
    date: "2025.09",
    titleKey: "t11_title",
    subtitleKey: "t11_subtitle",
    descKey: "t11_desc",
    tagKey: "t11_tag",
    icon: GraduationCap,
    color: "text-blue-600 dark:text-blue-400",
    dotColor: "bg-blue-500",
  },
  {
    id: "google-hackathon",
    year: "2025",
    date: "2025.11",
    titleKey: "t12_title",
    subtitleKey: "t12_subtitle",
    descKey: "t12_desc",
    tagKey: "t12_tag",
    icon: FolderGit2,
    color: "text-lime-600 dark:text-lime-400",
    dotColor: "bg-lime-500",
  },
  {
    id: "shenzhen-hackathon",
    year: "2025",
    date: "2025.12",
    titleKey: "t13_title",
    subtitleKey: "t13_subtitle",
    descKey: "t13_desc",
    tagKey: "t13_tag",
    icon: FolderGit2,
    color: "text-teal-600 dark:text-teal-400",
    dotColor: "bg-teal-500",
  },
];

export function Timeline() {
  const t = useTranslations("timeline");
  const [activeId, setActiveId] = useState(entries[entries.length - 1].id);

  const active = entries.find((e) => e.id === activeId) ?? entries[0];
  const Icon = active.icon;

  return (
    <section id="timeline" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            {/* ── Left: Timeline sidebar ── */}
            <div className="relative flex shrink-0 md:w-48">
              {/* Vertical track */}
              <div className="absolute top-0 bottom-0 left-3 w-px bg-slate-200 md:left-1/2 md:-translate-x-px dark:bg-slate-800" />

              <ul className="relative flex w-full flex-row gap-0 overflow-x-auto md:flex-col md:gap-0 md:overflow-visible">
                {entries.map((entry) => {
                  const isActive = entry.id === activeId;
                  return (
                    <li key={entry.id} className="relative shrink-0 md:shrink">
                      <button
                        onClick={() => setActiveId(entry.id)}
                        className="group flex w-full items-center gap-3 py-3 pl-0 md:py-4 md:pl-0"
                      >
                        {/* Dot */}
                        <div className="relative z-10 flex items-center justify-center md:mx-auto">
                          <motion.div
                            animate={{
                              scale: isActive ? 1.5 : 1,
                            }}
                            whileHover={{ scale: 1.4 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                            }}
                            className={`h-3 w-3 rounded-full ring-4 transition-colors duration-200 ${
                              isActive
                                ? `${entry.dotColor} ring-white dark:ring-slate-950`
                                : "bg-slate-300 ring-white group-hover:bg-slate-400 dark:bg-slate-600 dark:ring-slate-950 dark:group-hover:bg-slate-500"
                            }`}
                          />
                        </div>

                        {/* Year label */}
                        <span
                          className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 md:absolute md:right-full md:mr-5 ${
                            isActive
                              ? "text-slate-900 dark:text-slate-100"
                              : "text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300"
                          }`}
                        >
                          {entry.date}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ── Right: Content card ── */}
            <div className="relative min-h-[280px] flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.92, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -6 }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800/80 dark:bg-slate-900"
                >
                  {/* macOS-style window header */}
                  <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-3.5 dark:border-slate-800">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                    <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                    <div className="h-3 w-3 rounded-full bg-[#28C840]" />
                    <span className="ml-3 text-xs font-medium text-slate-400 dark:text-slate-500">
                      {active.date}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800`}
                      >
                        <Icon className={`h-5 w-5 ${active.color}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold leading-snug">
                            {t(active.titleKey)}
                          </h3>
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
                            {t(active.tagKey)}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                          {t(active.subtitleKey)}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {t(active.descKey)}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
