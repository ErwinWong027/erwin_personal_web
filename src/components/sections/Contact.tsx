"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (_data: FormData) => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("email_label"),
      value: "zihan.wang@edhec.com",
      href: "mailto:zihan.wang@edhec.com",
    },
    {
      icon: MessageCircle,
      label: t("wechat_label"),
      value: "brilliantbiscuit",
      href: undefined,
    },
    {
      icon: MapPin,
      label: t("location_label"),
      value: t("location_value"),
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="bg-slate-100/50 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <AnimateOnScroll className="space-y-6 lg:col-span-2">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 transition-shadow hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950/50">
                  <item.icon className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500 dark:text-slate-200 dark:hover:text-primary-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll className="lg:col-span-3" delay={0.15}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 dark:border-slate-800/80 dark:bg-slate-900"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  {t("form_name")}
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className={`w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 ${
                    errors.name
                      ? "border-red-400"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  {t("form_email")}
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  className={`w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 ${
                      errors.email
                      ? "border-red-400"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  {t("form_message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: true })}
                  className={`w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 ${
                      errors.message
                      ? "border-red-400"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-lg hover:shadow-primary-500/20"
              >
                {t("form_submit")}
                <Send className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    {t("form_success")}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
