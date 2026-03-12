"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ExternalLink, X, Calendar, Award, Image as ImageIcon, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

const honorGradients = [
  "from-amber-500 to-orange-600",
  "from-yellow-500 to-amber-600",
  "from-orange-500 to-red-600",
  "from-red-500 to-pink-600",
  "from-pink-500 to-rose-600",
  "from-rose-500 to-red-600",
  "from-violet-500 to-purple-600",
  "from-purple-500 to-indigo-600",
  "from-indigo-500 to-blue-600",
  "from-blue-500 to-cyan-600",
  "from-cyan-500 to-teal-600",
  "from-emerald-500 to-green-600",
];

const isImageFile = (url: string): boolean => {
  return /\.(jpg|jpeg|png|gif|webp|bmp)$/i.test(url);
};

const isPdfFile = (url: string): boolean => {
  return /\.pdf$/i.test(url);
};

const getImageUrl = (workUrl: string, imageUrl: string | null): string | null => {
  if (imageUrl && !isPdfFile(imageUrl)) {
    return imageUrl;
  }
  if (imageUrl && isImageFile(imageUrl)) {
    return imageUrl;
  }
  return null;
};

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
  const t = useTranslations("honors");

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
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-950/50">
                  <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
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
                  className="flex-1 rounded-xl bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-amber-700 hover:shadow-md"
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

export function HonorsGallery() {
  const t = useTranslations("honors");
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
      workTagKey: "honor1_tag" as const,
      workUrl: "/奖状证书/三创校特等奖.pdf",
      imageUrl: "/奖状证书/三创参赛证书.jpeg",
      titleKey: "honor1_title" as const,
      dateKey: "honor1_date" as const,
      descKey: "honor1_desc" as const,
    },
    {
      workTagKey: "honor2_tag" as const,
      workUrl: "/奖状证书/三创省二.jpeg",
      imageUrl: "/奖状证书/三创省二.jpeg",
      titleKey: "honor2_title" as const,
      dateKey: "honor2_date" as const,
      descKey: "honor2_desc" as const,
    },
    {
      workTagKey: "honor3_tag" as const,
      workUrl: "/奖状证书/互联网_获奖证书.pdf",
      imageUrl: "/奖状证书/互联网_获奖证书.jpg",
      titleKey: "honor3_title" as const,
      dateKey: "honor3_date" as const,
      descKey: "honor3_desc" as const,
    },
    {
      workTagKey: "honor4_tag" as const,
      workUrl: "/奖状证书/大创项目国家级公示.pdf",
      imageUrl: "/奖状证书/大创项目国家级公示.jpg",
      titleKey: "honor4_title" as const,
      dateKey: "honor4_date" as const,
      descKey: "honor4_desc" as const,
    },
    {
      workTagKey: "honor5_tag" as const,
      workUrl: "/奖状证书/品牌策划大赛新加坡中国一等奖.pdf",
      imageUrl: "/奖状证书/品牌策划大赛新加坡中国一等奖.jpg",
      titleKey: "honor5_title" as const,
      dateKey: "honor5_date" as const,
      descKey: "honor5_desc" as const,
    },
    {
      workTagKey: "honor6_tag" as const,
      workUrl: "/奖状证书/商业精英挑战赛新加坡总决赛全国一等奖.pdf",
      imageUrl: "/奖状证书/商业精英挑战赛新加坡总决赛全国一等奖.jpg",
      titleKey: "honor6_title" as const,
      dateKey: "honor6_date" as const,
      descKey: "honor6_desc" as const,
    },
    {
      workTagKey: "honor7_tag" as const,
      workUrl: "/奖状证书/大广赛.PNG",
      imageUrl: "/奖状证书/大广赛.PNG",
      titleKey: "honor7_title" as const,
      dateKey: "honor7_date" as const,
      descKey: "honor7_desc" as const,
    },
    {
      workTagKey: "honor8_tag" as const,
      workUrl: "/奖状证书/学创杯.png",
      imageUrl: "/奖状证书/学创杯.png",
      titleKey: "honor8_title" as const,
      dateKey: "honor8_date" as const,
      descKey: "honor8_desc" as const,
    },
    {
      workTagKey: "honor9_tag" as const,
      workUrl: "/奖状证书/美灵杯.png",
      imageUrl: "/奖状证书/美灵杯.png",
      titleKey: "honor9_title" as const,
      dateKey: "honor9_date" as const,
      descKey: "honor9_desc" as const,
    },
    {
      workTagKey: "honor10_tag" as const,
      workUrl: "/奖状证书/财经创新创业大赛.JPG",
      imageUrl: "/奖状证书/财经创新创业大赛.JPG",
      titleKey: "honor10_title" as const,
      dateKey: "honor10_date" as const,
      descKey: "honor10_desc" as const,
    },
    {
      workTagKey: "honor11_tag" as const,
      workUrl: "/奖状证书/软著.jpg",
      imageUrl: "/奖状证书/软著.jpg",
      titleKey: "honor11_title" as const,
      dateKey: "honor11_date" as const,
      descKey: "honor11_desc" as const,
    },
  ];

  return (
    <section id="honors" className="bg-amber-50/50 py-24 dark:bg-amber-950/20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div
                onClick={() =>
                  handleCardClick(t(item.titleKey), item.workUrl)
                }
                className="group cursor-pointer overflow-hidden rounded-2xl border border-amber-200/50 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-amber-800/50 dark:bg-slate-900"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {(() => {
                    const displayImage = getImageUrl(item.workUrl, item.imageUrl);
                    if (displayImage) {
                      return (
                        <>
                          <img
                            src={displayImage}
                            alt={t(item.titleKey)}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-lg">
                              <ImageIcon className="h-6 w-6 text-amber-600" />
                            </div>
                          </div>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${honorGradients[i % honorGradients.length]} transition-transform duration-500 group-hover:scale-105`}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/25 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/35">
                              {isPdfFile(item.workUrl) ? (
                                <FileText className="h-6 w-6 fill-white text-white" />
                              ) : (
                                <ImageIcon className="h-6 w-6 fill-white text-white" />
                              )}
                            </div>
                          </div>
                        </>
                      );
                    }
                  })()}

                  <div className="absolute top-2 left-2">
                    <span className="rounded-full bg-black/30 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-md">
                      {t(item.workTagKey)}
                    </span>
                  </div>
                </div>

                <div className="p-3">
                  <div
                    className={`mb-2 h-0.5 w-8 rounded-full bg-gradient-to-r ${honorGradients[i % honorGradients.length]}`}
                  />

                  <h3 className="text-xs font-semibold leading-snug text-slate-800 dark:text-slate-100">
                    {t(item.titleKey)}
                  </h3>

                  <div className="mt-1.5 flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400">
                    <Calendar className="h-2.5 w-2.5" />
                    {t(item.dateKey)}
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
