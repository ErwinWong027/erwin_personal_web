"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";

const PHASE_INTERVAL_MS = 4000;
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
  const [phasePaused, setPhasePaused] = useState(false);
  const [phaseProgress, setPhaseProgress] = useState(0);
  const phaseIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phaseProgressRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
      color: "border-primary-400 dark:border-primary-500",
      dotColor: "bg-primary-500",
      bg: "bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/30 dark:to-primary-900/30",
    },
    {
      titleKey: "phase2_title" as const,
      labelKey: "phase2_label" as const,
      paragraphKey: "phase2_paragraph" as const,
      whatChangedKey: "phase2_what_changed" as const,
      whyMatteredKey: "phase2_why_mattered" as const,
      outputsKey: "phase2_outputs" as const,
      color: "border-primary-400 dark:border-primary-500",
      dotColor: "bg-primary-500",
      bg: "bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/30 dark:to-primary-900/30",
    },
    {
      titleKey: "phase3_title" as const,
      labelKey: "phase3_label" as const,
      paragraphKey: "phase3_paragraph" as const,
      whatChangedKey: "phase3_what_changed" as const,
      whyMatteredKey: "phase3_why_mattered" as const,
      outputsKey: "phase3_outputs" as const,
      color: "border-primary-400 dark:border-primary-500",
      dotColor: "bg-primary-500",
      bg: "bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/30 dark:to-primary-900/30",
    },
    {
      titleKey: "phase4_title" as const,
      labelKey: "phase4_label" as const,
      paragraphKey: "phase4_paragraph" as const,
      whatChangedKey: "phase4_what_changed" as const,
      whyMatteredKey: "phase4_why_mattered" as const,
      outputsKey: "phase4_outputs" as const,
      color: "border-primary-400 dark:border-primary-500",
      dotColor: "bg-primary-500",
      bg: "bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/30 dark:to-primary-900/30",
    },
  ];

  const advancePhase = useCallback(() => {
    setActivePhaseIndex((prev) => (prev + 1) % phases.length);
    setPhaseProgress(0);
  }, [phases.length]);

  const startPhaseCycle = useCallback(() => {
    if (phaseIntervalRef.current) clearInterval(phaseIntervalRef.current);
    if (phaseProgressRef.current) clearInterval(phaseProgressRef.current);
    setPhaseProgress(0);
    phaseIntervalRef.current = setInterval(advancePhase, PHASE_INTERVAL_MS);
    phaseProgressRef.current = setInterval(() => {
      setPhaseProgress((p) => Math.min(p + 100 / (PHASE_INTERVAL_MS / 50), 100));
    }, 50);
  }, [advancePhase]);

  useEffect(() => {
    if (!phasePaused) {
      startPhaseCycle();
    } else {
      if (phaseIntervalRef.current) clearInterval(phaseIntervalRef.current);
      if (phaseProgressRef.current) clearInterval(phaseProgressRef.current);
    }
    return () => {
      if (phaseIntervalRef.current) clearInterval(phaseIntervalRef.current);
      if (phaseProgressRef.current) clearInterval(phaseProgressRef.current);
    };
  }, [phasePaused, startPhaseCycle]);

  const goToPhase = (idx: number) => {
    setActivePhaseIndex(idx);
    setPhaseProgress(0);
    if (!phasePaused) startPhaseCycle();
  };

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
          <div className="grid gap-4 md:grid-cols-4">
            {logicItems.map((item) => (
              <div
                key={item.titleKey}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-slate-200 dark:bg-slate-700 dark:group-hover:bg-slate-600">
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <h4 className="mb-2 text-base font-semibold">{t(item.titleKey)}</h4>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {t(item.bodyKey)}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold">{t("section2_title")}</h3>
          <div
            className="flex flex-col gap-8 md:flex-row md:gap-12"
            onMouseEnter={() => setPhasePaused(true)}
            onMouseLeave={() => setPhasePaused(false)}
          >
            {/* Left: Phase navigation */}
            <div className="relative flex shrink-0 md:w-48">
              <div className="absolute top-0 bottom-0 left-3 w-px bg-slate-200 md:left-1/2 md:-translate-x-px dark:bg-slate-800" />
              <ul className="relative flex w-full flex-row gap-0 overflow-x-auto md:flex-col md:gap-0 md:overflow-visible">
                {phases.map((phase, i) => {
                  const isActive = i === activePhaseIndex;
                  return (
                    <li key={phase.titleKey} className="relative shrink-0 md:shrink">
                      <button
                        onClick={() => goToPhase(i)}
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
                        <div className="flex flex-col items-start md:absolute md:right-full md:mr-5">
                          <span
                            className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
                              isActive
                                ? "text-slate-900 dark:text-slate-100"
                                : "text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300"
                            }`}
                          >
                            {t(phase.labelKey)}
                          </span>
                          {isActive && (
                            <div className="mt-1 h-0.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-none ${phase.dotColor}`}
                                style={{ width: `${phaseProgress}%` }}
                              />
                            </div>
                          )}
                        </div>
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
      </div>
    </section>
  );
}
