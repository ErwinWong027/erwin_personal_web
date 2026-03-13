"use client";

import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Honors } from "./Honors";
import { TimelineCard } from "./TimelineCard";

interface EduEntry {
  title: string;
  role: string;
  period: string;
  highlights: string[];
}

interface WorkEntry {
  title: string;
  role: string;
  period: string;
  background: string;
  highlights: string[];
}

const educationMeta = [
  { id: "edu-edhec", key: "edu_edhec", color: "bg-gradient-135 from-pink-200 to-pink-300", imageSrc: "/images/EDHEC_Logo_horizontal_new.jpg", imageAlt: "EDHEC Business School" },
  { id: "edu-uol", key: "edu_uol", color: "bg-gradient-135 from-blue-200 to-blue-300", imageSrc: "/images/University_of_London_coat_of_arms.svg.png", imageAlt: "University of London" },
  { id: "edu-bachelor", key: "edu_bachelor", color: "bg-gradient-135 from-purple-200 to-purple-300", imageSrc: "/images/财大标志+.jpg", imageAlt: "Shanghai University of Finance and Economics" },
] as const;

const workMeta = [
  { id: "jobark", key: "work_jobark", color: "bg-gradient-135 from-yellow-200 to-yellow-300" },
  { id: "bytedance", key: "work_bytedance", color: "bg-gradient-135 from-green-200 to-green-300" },
  { id: "iterative", key: "work_iterative", color: "bg-gradient-135 from-orange-200 to-orange-300" },
  { id: "crosspath", key: "work_crosspath", color: "bg-gradient-135 from-cyan-200 to-cyan-300" },
] as const;

export function Experience() {
  const t = useTranslations("timeline");

  return (
    <section id="experience" className="relative py-12">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          {/* 教育经历 */}
          <div className="relative mb-20">
            <p className="mb-4 text-left text-2xl font-bold text-slate-900 dark:text-slate-100">
              {t("section_education")}
            </p>

            {/* 时间轴线 - 仅桌面端显示 */}
            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 md:block" />

            {/* 教育经历卡片 */}
            <div className="relative">
              {educationMeta.map(({ id, key, color, imageSrc, imageAlt }, index) => {
                const entry = t.raw(key) as EduEntry;
                return (
                  <TimelineCard
                    key={id}
                    title={entry.title}
                    role={entry.role}
                    period={entry.period}
                    highlights={entry.highlights}
                    color={color}
                    position={index % 2 === 0 ? "left" : "right"}
                    index={index}
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                  />
                );
              })}
            </div>
          </div>

          {/* 分隔线 */}
          <div className="mx-auto mb-20 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          {/* 工作经历 */}
          <div className="relative">
            <p className="mb-6 text-left text-2xl font-bold text-slate-900 dark:text-slate-100">
              {t("section_work")}
            </p>

            {/* 工作经历卡片 - 全宽垂直排列 */}
            <div className="flex flex-col gap-6">
              {workMeta.map(({ id, key, color }, index) => {
                const entry = t.raw(key) as WorkEntry;
                return (
                  <TimelineCard
                    key={id}
                    title={entry.title}
                    role={entry.role}
                    period={entry.period}
                    background={entry.background}
                    highlights={entry.highlights}
                    color={color}
                    position="left"
                    index={index}
                    variant="work"
                  />
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>

        <Honors />
      </div>
    </section>
  );
}
