"use client";

import { useTranslations } from "next-intl";
import { GraduationCap, Briefcase, FolderGit2, FileCode2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skills = [
  "AI Agent 设计",
  "产品经理",
  "SQL",
  "Python",
  "数据分析",
  "A/B 实验",
  "Scrum / SAFe",
  "全栈开发",
  "RAG",
  "Dify",
];

export function About() {
  const t = useTranslations("about");

  const stats = [
    {
      icon: GraduationCap,
      value: t("stat_university"),
      label: t("stat_university_desc"),
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/50",
    },
    {
      icon: Briefcase,
      value: t("stat_internships"),
      label: t("stat_internships_desc"),
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/50",
    },
    {
      icon: FolderGit2,
      value: t("stat_projects"),
      label: t("stat_projects_desc"),
      color: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-50 dark:bg-violet-950/50",
    },
    {
      icon: FileCode2,
      value: t("stat_patents"),
      label: t("stat_patents_desc"),
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-950/50",
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Description */}
          <AnimateOnScroll className="lg:col-span-3">
            <div className="flex items-start gap-6">
              <img
                src="/images/avatar.png"
                alt="Erwin Avatar"
                className="hidden h-20 w-20 shrink-0 rounded-2xl object-cover shadow-md sm:flex"
              />
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {t("description")}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {stats.map((stat, i) => (
              <AnimateOnScroll key={stat.label} delay={i * 0.1}>
                <div
                  className={`rounded-2xl ${stat.bg} p-5 text-center transition-shadow hover:shadow-md`}
                >
                  <stat.icon className={`mx-auto h-6 w-6 ${stat.color}`} />
                  <p className="mt-3 text-xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Skills */}
        <AnimateOnScroll className="mt-16">
          <h3 className="mb-6 text-center text-sm font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
            {t("skills_title")}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
