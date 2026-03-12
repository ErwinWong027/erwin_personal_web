"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import {
  Target,
  Database,
  Bot,
  Layers,
  Users,
  FileJson,
  RefreshCw,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BeforeAfterComparison } from "./BeforeAfterComparison";

export function AIMethodology() {
  const t = useTranslations("aiMethod");
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const metrics = [
    { icon: RefreshCw, textKey: "metrics1" as const },
    { icon: FileJson, textKey: "metrics2" as const },
    { icon: Zap, textKey: "metrics3" as const },
    { icon: Bot, textKey: "metrics4" as const },
  ];

  const logicItems = [
    {
      icon: Users,
      titleKey: "logic1_title" as const,
      bodyKey: "logic1_body" as const,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/50",
    },
    {
      icon: FileJson,
      titleKey: "logic2_title" as const,
      bodyKey: "logic2_body" as const,
      color: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-50 dark:bg-violet-950/50",
    },
    {
      icon: Database,
      titleKey: "logic3_title" as const,
      bodyKey: "logic3_body" as const,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/50",
    },
    {
      icon: Layers,
      titleKey: "logic4_title" as const,
      bodyKey: "logic4_body" as const,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-950/50",
    },
  ];

  const phases = [
    {
      titleKey: "phase1_title" as const,
      labelKey: "phase1_label" as const,
      paragraphKey: "phase1_paragraph" as const,
      whatChangedKey: "phase1_what_changed" as const,
      whyMatteredKey: "phase1_why_mattered" as const,
      outputsKey: "phase1_outputs" as const,
      color: "border-amber-400 dark:border-amber-500",
      dotColor: "bg-amber-500",
      bg: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30",
    },
    {
      titleKey: "phase2_title" as const,
      labelKey: "phase2_label" as const,
      paragraphKey: "phase2_paragraph" as const,
      whatChangedKey: "phase2_what_changed" as const,
      whyMatteredKey: "phase2_why_mattered" as const,
      outputsKey: "phase2_outputs" as const,
      color: "border-blue-400 dark:border-blue-500",
      dotColor: "bg-blue-500",
      bg: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30",
    },
    {
      titleKey: "phase3_title" as const,
      labelKey: "phase3_label" as const,
      paragraphKey: "phase3_paragraph" as const,
      whatChangedKey: "phase3_what_changed" as const,
      whyMatteredKey: "phase3_why_mattered" as const,
      outputsKey: "phase3_outputs" as const,
      color: "border-violet-400 dark:border-violet-500",
      dotColor: "bg-violet-500",
      bg: "bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/30 dark:to-violet-900/30",
    },
    {
      titleKey: "phase4_title" as const,
      labelKey: "phase4_label" as const,
      paragraphKey: "phase4_paragraph" as const,
      whatChangedKey: "phase4_what_changed" as const,
      whyMatteredKey: "phase4_why_mattered" as const,
      outputsKey: "phase4_outputs" as const,
      color: "border-emerald-400 dark:border-emerald-500",
      dotColor: "bg-emerald-500",
      bg: "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/30",
    },
  ];

  const workflows = [
    { key: "workflow1" as const },
    { key: "workflow2" as const },
    { key: "workflow3" as const },
    { key: "workflow4" as const },
    { key: "workflow5" as const },
  ];

  const activePhase = phases[activePhaseIndex];

  return (
    <section id="ai-method" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t("intro")}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-20">
          <div className="grid gap-4 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.textKey}
                className="flex items-center gap-3 rounded-xl bg-white dark:bg-slate-800 p-4 shadow-sm"
              >
                <metric.icon className="h-5 w-5 shrink-0 text-primary-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t(metric.textKey)}
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold">{t("section1_title")}</h3>
          <p className="mx-auto mb-12 max-w-3xl text-center text-base text-slate-600 dark:text-slate-300">
            {t("section1_intro")}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {logicItems.map((item) => (
              <div
                key={item.titleKey}
                className={`rounded-2xl ${item.bg} p-6 transition-all hover:shadow-md`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-sm">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <h4 className="text-base font-bold">{t(item.titleKey)}</h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t(item.bodyKey)}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold">{t("section2_title")}</h3>
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            {/* Left: Phase navigation */}
            <div className="relative flex shrink-0 md:w-48">
              <div className="absolute top-0 bottom-0 left-3 w-px bg-slate-200 md:left-1/2 md:-translate-x-px dark:bg-slate-800" />
              <ul className="relative flex w-full flex-row gap-0 overflow-x-auto md:flex-col md:gap-0 md:overflow-visible">
                {phases.map((phase, i) => {
                  const isActive = i === activePhaseIndex;
                  return (
                    <li key={phase.titleKey} className="relative shrink-0 md:shrink">
                      <button
                        onClick={() => setActivePhaseIndex(i)}
                        className="group flex w-full items-center gap-3 py-3 pl-0 md:py-4 md:pl-0"
                      >
                        <div className="relative z-10 flex items-center justify-center md:mx-auto">
                          <motion.div
                            animate={{ scale: isActive ? 1.5 : 1 }}
                            whileHover={{ scale: 1.4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className={`h-3 w-3 rounded-full ring-4 transition-colors duration-200 ${
                              isActive
                                ? `${phase.dotColor} ring-white dark:ring-slate-950`
                                : "bg-slate-300 ring-white group-hover:bg-slate-400 dark:bg-slate-600 dark:ring-slate-950 dark:group-hover:bg-slate-500"
                            }`}
                          />
                        </div>
                        <span
                          className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 md:absolute md:right-full md:mr-5 ${
                            isActive
                              ? "text-slate-900 dark:text-slate-100"
                              : "text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300"
                          }`}
                        >
                          {t(phase.labelKey)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: Content card */}
            <div className="relative min-h-[280px] flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhaseIndex}
                  initial={{ opacity: 0, scale: 0.92, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8 }}
                  className={`rounded-2xl border-l-4 ${activePhase.color} ${activePhase.bg} p-8 shadow-sm`}
                >
                  <h3 className="mb-4 text-xl font-bold">{t(activePhase.titleKey)}</h3>
                  <p className="mb-6 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    {t(activePhase.paragraphKey)}
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl bg-white/70 dark:bg-slate-800/70 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        <h4 className="text-sm font-semibold">What Changed</h4>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">
                        {t(activePhase.whatChangedKey)}
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/70 dark:bg-slate-800/70 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <h4 className="text-sm font-semibold">Why It Mattered</h4>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {t(activePhase.whyMatteredKey)}
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/70 dark:bg-slate-800/70 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <h4 className="text-sm font-semibold">Outputs</h4>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">
                        {t(activePhase.outputsKey)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-20">
          <h3 className="mb-4 text-center text-2xl font-bold">{t("section3_title")}</h3>
          <p className="mx-auto mb-8 max-w-3xl text-center text-base text-slate-600 dark:text-slate-300">
            {t("section3_intro")}
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workflows.map((workflow) => (
              <div
                key={workflow.key}
                className="rounded-xl bg-white dark:bg-slate-800 p-4 shadow-sm"
              >
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {t(workflow.key)}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <BeforeAfterComparison />

        <AnimateOnScroll className="mt-20 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 p-8 dark:from-primary-950/50 dark:to-primary-900/50">
            <h3 className="mb-6 text-2xl font-bold">{t("section5_title")}</h3>
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {t("section5_body")}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
