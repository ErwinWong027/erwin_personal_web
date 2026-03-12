"use client";

import { useTranslations } from "next-intl";
import {
  FileJson,
  Map,
  Code2,
  RefreshCw,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tools = [
  { name: "Cursor", desc: "AI IDE" },
  { name: "Claude", desc: "对话 & 规划" },
  { name: "Next.js 16", desc: "框架" },
  { name: "Tailwind 4", desc: "样式" },
  { name: "Motion 12", desc: "动画" },
  { name: "next-intl", desc: "双语" },
];

export function AIMethodology() {
  const t = useTranslations("aiMethod");

  const steps = [
    {
      icon: FileJson,
      titleKey: "step1_title" as const,
      descKey: "step1_desc" as const,
      inputKey: "step1_input" as const,
      color: "border-amber-400 dark:border-amber-500",
      iconColor: "text-amber-600 dark:text-amber-400",
      dotColor: "bg-amber-500",
    },
    {
      icon: Map,
      titleKey: "step2_title" as const,
      descKey: "step2_desc" as const,
      inputKey: "step2_input" as const,
      color: "border-blue-400 dark:border-blue-500",
      iconColor: "text-blue-600 dark:text-blue-400",
      dotColor: "bg-blue-500",
    },
    {
      icon: Code2,
      titleKey: "step3_title" as const,
      descKey: "step3_desc" as const,
      inputKey: "step3_input" as const,
      color: "border-violet-400 dark:border-violet-500",
      iconColor: "text-violet-600 dark:text-violet-400",
      dotColor: "bg-violet-500",
    },
    {
      icon: RefreshCw,
      titleKey: "step4_title" as const,
      descKey: "step4_desc" as const,
      inputKey: "step4_input" as const,
      color: "border-emerald-400 dark:border-emerald-500",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      dotColor: "bg-emerald-500",
    },
  ];

  return (
    <section id="ai-method" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <AnimateOnScroll>
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t("intro")}
          </p>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b from-amber-300 via-violet-300 to-emerald-300 md:left-1/2 md:block dark:from-amber-700 dark:via-violet-700 dark:to-emerald-700" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimateOnScroll key={step.titleKey} delay={i * 0.12}>
                  <div className="relative md:flex md:items-start md:gap-8">
                    {/* Timeline dot (desktop) */}
                    <div className="absolute top-3 left-1/2 z-10 hidden -translate-x-1/2 md:block">
                      <div
                        className={`h-3 w-3 rounded-full ${step.dotColor} ring-4 ring-white dark:ring-slate-950`}
                      />
                    </div>

                    {/* Left / Right positioning */}
                    <div
                      className={`md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
                    >
                      <div
                        className={`rounded-2xl border-l-4 ${step.color} bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-slate-900`}
                      >
                        {/* Step header */}
                        <div
                          className={`flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                            <step.icon
                              className={`h-5 w-5 ${step.iconColor}`}
                            />
                          </div>
                          <h3 className="text-base font-semibold">
                            {t(step.titleKey)}
                          </h3>
                        </div>

                        {/* Description */}
                        <p
                          className={`mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 ${isLeft ? "md:text-right" : ""}`}
                        >
                          {t(step.descKey)}
                        </p>

                        {/* Concrete input/output badge */}
                        <div
                          className={`mt-4 flex ${isLeft ? "md:justify-end" : ""}`}
                        >
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                            <ArrowRight className="h-3 w-3" />
                            {t(step.inputKey)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>

        {/* Toolchain */}
        <AnimateOnScroll className="mt-20">
          <h3 className="mb-6 text-center text-sm font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
            {t("toolchain_title")}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool.name}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm transition-all hover:-translate-y-0.5 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary-500" />
                <span className="font-medium">{tool.name}</span>
                <span className="text-slate-400 dark:text-slate-500">
                  {tool.desc}
                </span>
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Closing statement */}
        <AnimateOnScroll className="mt-10 text-center">
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
            {t("cta")}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
