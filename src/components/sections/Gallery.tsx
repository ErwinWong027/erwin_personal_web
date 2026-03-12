"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Play, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

// ============================================================
// Replace these with your actual Douyin/Xiaohongshu video data.
// cover: path to thumbnail image in /public/images/
// url:   link to the video platform
// ============================================================
const galleryItems = [
  {
    id: "1",
    titleKey: "card1_title" as const,
    tagKey: "card1_tag" as const,
    cover: "/images/cover-1.jpg",
    url: "https://www.douyin.com/",
    gradient: "from-rose-500/80 to-pink-600/80",
  },
  {
    id: "2",
    titleKey: "card2_title" as const,
    tagKey: "card2_tag" as const,
    cover: "/images/cover-2.jpg",
    url: "https://www.douyin.com/",
    gradient: "from-violet-500/80 to-indigo-600/80",
  },
  {
    id: "3",
    titleKey: "card3_title" as const,
    tagKey: "card3_tag" as const,
    cover: "/images/cover-3.jpg",
    url: "https://www.douyin.com/",
    gradient: "from-cyan-500/80 to-blue-600/80",
  },
  {
    id: "4",
    titleKey: "card4_title" as const,
    tagKey: "card4_tag" as const,
    cover: "/images/cover-4.jpg",
    url: "https://www.douyin.com/",
    gradient: "from-amber-500/80 to-orange-600/80",
  },
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
  const t = useTranslations("gallery");

  const handleOpen = () => {
    onClose();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* macOS-style dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="fixed top-1/2 left-1/2 z-[101] w-[340px] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-2xl backdrop-blur-2xl dark:border-slate-700/50 dark:bg-slate-900/90">
              {/* Window controls */}
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

              {/* Content */}
              <div className="px-6 pt-5 pb-2 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 dark:bg-primary-950/50">
                  <ExternalLink className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {t("modal_title")}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {title}
                </p>
              </div>

              {/* Buttons */}
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

export function Gallery() {
  const t = useTranslations("gallery");
  const [modal, setModal] = useState<{
    open: boolean;
    title: string;
    url: string;
  }>({ open: false, title: "", url: "" });

  const handleCardClick = (title: string, url: string) => {
    setModal({ open: true, title, url });
  };

  return (
    <section id="gallery" className="bg-slate-100/50 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {galleryItems.map((item, i) => (
            <AnimateOnScroll key={item.id} delay={i * 0.1}>
              <button
                onClick={() =>
                  handleCardClick(t(item.titleKey), item.url)
                }
                className="group relative w-full overflow-hidden rounded-[20px] border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-800/60 dark:bg-slate-900"
              >
                {/* Cover image area (3:4 aspect) */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Placeholder gradient (remove when using real images) */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`}
                  />

                  {/* Uncomment below to use actual cover images: */}
                  {/* <img
                    src={item.cover}
                    alt={t(item.titleKey)}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  /> */}

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/35">
                      <Play className="ml-1 h-6 w-6 fill-white text-white" />
                    </div>
                  </div>

                  {/* Tag pill */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                      {t(item.tagKey)}
                    </span>
                  </div>
                </div>

                {/* Title bar */}
                <div className="px-3.5 py-3">
                  <p className="truncate text-left text-sm font-medium text-slate-700 transition-colors group-hover:text-primary-600 dark:text-slate-200 dark:group-hover:text-primary-400">
                    {t(item.titleKey)}
                  </p>
                </div>
              </button>
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
