"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Play, ExternalLink, X, Calendar, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

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

const galleryGradients = [
  "from-rose-500/80 to-pink-600/80",
  "from-violet-500/80 to-indigo-600/80",
  "from-cyan-500/80 to-blue-600/80",
  "from-amber-500/80 to-orange-600/80",
];

function MacOSModal({
  open,
  title,
  url,
  onClose,
}: {
  open: boolean;
  title: string;
  url: string;
  onClose: () => void;
}) {
  const t = useTranslations("projectGallery");

  const handleOpen = () => {
    onClose();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="fixed top-1/2 left-1/2 z-[101] w-[340px] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-2xl backdrop-blur-2xl dark:border-slate-700/50 dark:bg-slate-900/90">
              <div className="flex items-center gap-2 px-4 pt-4">
                <button
                  onClick={onClose}
                  className="group flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#FF5F57] transition-opacity hover:opacity-90"
                  aria-label="Close"
                >
                  <X className="h-2 w-2 text-[#4A0002] opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
                <div className="h-3.5 w-3.5 rounded-full bg-[#FEBC2E]" />
                <div className="h-3.5 w-3.5 rounded-full bg-[#28C840]" />
              </div>

              <div className="px-6 pt-5 pb-2 text-center">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {t("modal_title")}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {title}
                </p>
              </div>

              <div className="flex gap-3 px-6 pt-3 pb-5">
                <button
                  onClick={onClose}
                  className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  {t("modal_cancel")}
                </button>
                <button
                  onClick={handleOpen}
                  className="flex-1 rounded-xl bg-primary-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-700 hover:shadow-md"
                >
                  {t("modal_open")}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function ProjectGallery() {
  const t = useTranslations("projectGallery");
  const [modal, setModal] = useState<{
    open: boolean;
    title: string;
    url: string;
  }>({ open: false, title: "", url: "" });

  const handleCardClick = (title: string, url: string) => {
    setModal({ open: true, title, url });
  };

  const items = [
    {
      workTagKey: "work1_tag" as const,
      workUrl: "https://www.douyin.com/",
      projectTitleKey: "project1_title" as const,
      projectRoleKey: "project1_role" as const,
      projectDateKey: "project1_date" as const,
      projectDescKey: "project1_desc" as const,
    },
    {
      workTagKey: "work2_tag" as const,
      workUrl: "https://www.douyin.com/",
      projectTitleKey: "project2_title" as const,
      projectRoleKey: "project2_role" as const,
      projectDateKey: "project2_date" as const,
      projectDescKey: "project2_desc" as const,
    },
    {
      workTagKey: "work3_tag" as const,
      workUrl: "https://www.douyin.com/",
      projectTitleKey: "project3_title" as const,
      projectRoleKey: "project3_role" as const,
      projectDateKey: "project3_date" as const,
      projectDescKey: "project3_desc" as const,
    },
    {
      workTagKey: "work4_tag" as const,
      workUrl: "https://www.douyin.com/",
      projectTitleKey: "project4_title" as const,
      projectRoleKey: "project4_role" as const,
      projectDateKey: "project4_date" as const,
      projectDescKey: "project4_desc" as const,
    },
  ] as const;

  return (
    <section id="projects" className="bg-slate-50 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div
                onClick={() =>
                  handleCardClick(t(item.projectTitleKey), item.workUrl)
                }
                className="group flex cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900"
              >
                <div className="relative w-28 flex-shrink-0 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${galleryGradients[i]} transition-transform duration-500 group-hover:scale-105`}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/35">
                      <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
                    </div>
                  </div>

                  <div className="absolute top-2 left-2">
                    <span className="rounded-full bg-black/30 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-md">
                      {t(item.workTagKey)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <div
                      className={`mb-2 h-0.5 w-8 rounded-full bg-gradient-to-r ${gradients[i]}`}
                    />

                    <h3 className="text-sm font-semibold leading-snug text-slate-800 dark:text-slate-100">
                      {t(item.projectTitleKey)}
                    </h3>

                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {t(item.projectDescKey)}
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {projectTags[i].map((tag, j) => (
                      <span
                        key={j}
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tagColors[j % tagColors.length]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
                      <User className="h-2.5 w-2.5" />
                      {t(item.projectRoleKey)}
                    </div>

                    <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400">
                      <Calendar className="h-2.5 w-2.5" />
                      {t(item.projectDateKey)}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <MacOSModal
        open={modal.open}
        title={modal.title}
        url={modal.url}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
      />
    </section>
  );
}
