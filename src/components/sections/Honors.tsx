"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import {
  Play,
  ExternalLink,
  X,
  Calendar,
  User,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const tagColors = [
  "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
];

const gradients = [
  "from-rose-500 to-pink-600",
  "from-primary-500 to-blue-600",
  "from-lime-500 to-green-600",
  "from-fuchsia-500 to-purple-600",
  "from-red-500 to-rose-600",
  "from-teal-500 to-cyan-600",
  "from-indigo-500 to-blue-600",
  "from-orange-500 to-amber-600",
  "from-slate-500 to-gray-600",
  "from-yellow-500 to-amber-600",
  "from-purple-500 to-pink-600",
];

const galleryGradients = [
  "from-rose-500/80 to-pink-600/80",
  "from-violet-500/80 to-indigo-600/80",
  "from-primary-500/80 to-blue-600/80",
  "from-amber-500/80 to-orange-600/80",
  "from-emerald-500/80 to-teal-600/80",
  "from-lime-500/80 to-green-600/80",
  "from-fuchsia-500/80 to-purple-600/80",
  "from-red-500/80 to-rose-600/80",
  "from-teal-500/80 to-cyan-600/80",
  "from-indigo-500/80 to-blue-600/80",
  "from-orange-500/80 to-amber-600/80",
];

const honorTags = [
  ["三创赛", "商业模式", "校特等"],
  ["三创赛", "省二", "指导老师奖"],
  ["互联网+", "创业", "创新"],
  ["大创", "国家级", "科研"],
  ["品牌策划", "市场调研", "一等奖"],
  ["商业分析", "团队协作", "全国一等奖"],
  ["广告设计", "创意策划", "参赛"],
  ["创业模拟", "经营决策", "参赛"],
  ["创新竞赛", "专业技能", "获奖"],
  ["财经", "创新创业", "团队协作"],
  ["软件著作权", "MATLAB", "算法"],
];

const honorItems = [
  { workTagKey: "work5_tag",  workUrl: "/奖状证书/三创校特等奖.pdf",                              imageUrl: "/奖状证书/三创校特等奖.jpg",                              projectTitleKey: "project5_title",  projectRoleKey: "project5_role",  projectDateKey: "project5_date",  projectDescKey: "project5_desc"  },
  { workTagKey: "work6_tag",  workUrl: "/奖状证书/三创省二.jpeg",                                 imageUrl: "/奖状证书/三创省二.jpeg",                                 projectTitleKey: "project6_title",  projectRoleKey: "project6_role",  projectDateKey: "project6_date",  projectDescKey: "project6_desc"  },
  { workTagKey: "work7_tag",  workUrl: "/奖状证书/互联网_获奖证书.pdf",                           imageUrl: "/奖状证书/互联网_获奖证书.jpg",                           projectTitleKey: "project7_title",  projectRoleKey: "project7_role",  projectDateKey: "project7_date",  projectDescKey: "project7_desc"  },
  { workTagKey: "work8_tag",  workUrl: "/奖状证书/大创项目国家级公示.pdf",                        imageUrl: "/奖状证书/大创项目国家级公示.jpg",                        projectTitleKey: "project8_title",  projectRoleKey: "project8_role",  projectDateKey: "project8_date",  projectDescKey: "project8_desc"  },
  { workTagKey: "work9_tag",  workUrl: "/奖状证书/品牌策划大赛新加坡中国一等奖.pdf",              imageUrl: "/奖状证书/品牌策划大赛新加坡中国一等奖.jpg",              projectTitleKey: "project9_title",  projectRoleKey: "project9_role",  projectDateKey: "project9_date",  projectDescKey: "project9_desc"  },
  { workTagKey: "work10_tag", workUrl: "/奖状证书/商业精英挑战赛新加坡总决赛全国一等奖.pdf",      imageUrl: "/奖状证书/商业精英挑战赛新加坡总决赛全国一等奖.jpg",      projectTitleKey: "project10_title", projectRoleKey: "project10_role", projectDateKey: "project10_date", projectDescKey: "project10_desc" },
  { workTagKey: "work11_tag", workUrl: "/奖状证书/大广赛.PNG",                                    imageUrl: "/奖状证书/大广赛.PNG",                                    projectTitleKey: "project11_title", projectRoleKey: "project11_role", projectDateKey: "project11_date", projectDescKey: "project11_desc" },
  { workTagKey: "work12_tag", workUrl: "/奖状证书/学创杯.png",                                    imageUrl: "/奖状证书/学创杯.png",                                    projectTitleKey: "project12_title", projectRoleKey: "project12_role", projectDateKey: "project12_date", projectDescKey: "project12_desc" },
  { workTagKey: "work13_tag", workUrl: "/奖状证书/美灵杯.png",                                    imageUrl: "/奖状证书/美灵杯.png",                                    projectTitleKey: "project13_title", projectRoleKey: "project13_role", projectDateKey: "project13_date", projectDescKey: "project13_desc" },
  { workTagKey: "work14_tag", workUrl: "/奖状证书/财经创新创业大赛.JPG",                          imageUrl: "/奖状证书/财经创新创业大赛.JPG",                          projectTitleKey: "project14_title", projectRoleKey: "project14_role", projectDateKey: "project14_date", projectDescKey: "project14_desc" },
  { workTagKey: "work15_tag", workUrl: "/奖状证书/软著.jpg",                                      imageUrl: "/奖状证书/软著.jpg",                                      projectTitleKey: "project15_title", projectRoleKey: "project15_role", projectDateKey: "project15_date", projectDescKey: "project15_desc" },
] as const;

const isPdfFile = (url: string) => /\.pdf$/i.test(url);
const isImageFile = (url: string) => /\.(jpg|jpeg|png|gif|webp|bmp)$/i.test(url);

const getImageUrl = (workUrl: string, imageUrl: string | null): string | null => {
  if (imageUrl && !isPdfFile(imageUrl)) return imageUrl;
  if (imageUrl && isImageFile(imageUrl)) return imageUrl;
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
  const t = useTranslations("projectGallery");

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
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 dark:bg-primary-950/50">
                  <ExternalLink className="h-6 w-6 text-primary-500 dark:text-primary-400" />
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
                  onClick={() => { onClose(); window.open(url, "_blank", "noopener,noreferrer"); }}
                  className="flex-1 rounded-xl bg-primary-500 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-cyan-600 hover:shadow-md"
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

export function Honors() {
  const t = useTranslations("projectGallery");
  const [modal, setModal] = useState<{ open: boolean; title: string; url: string }>({
    open: false,
    title: "",
    url: "",
  });

  return (
    <div className="mt-16">
      <h3 className="mb-8 text-center text-2xl font-bold">{t("honors_title")}</h3>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {honorItems.map((item, i) => (
          <AnimateOnScroll key={i} delay={i * 0.05}>
            <div
              onClick={() => setModal({ open: true, title: t(item.projectTitleKey), url: item.workUrl })}
              className="group flex h-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900"
            >
              <div className="relative w-28 flex-shrink-0 overflow-hidden">
                {(() => {
                  const displayImage = getImageUrl(item.workUrl, item.imageUrl);
                  if (displayImage) {
                    return (
                      <>
                        <img
                          src={displayImage}
                          alt={t(item.projectTitleKey)}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-lg">
                            <ImageIcon className="h-5 w-5 text-primary-500" />
                          </div>
                        </div>
                      </>
                    );
                  }
                  return (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${galleryGradients[i]} transition-transform duration-500 group-hover:scale-105`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/35">
                          {isPdfFile(item.workUrl) ? (
                            <FileText className="h-4 w-4 fill-white text-white" />
                          ) : (
                            <Play className="h-4 w-4 fill-white text-white" />
                          )}
                        </div>
                      </div>
                    </>
                  );
                })()}
                <div className="absolute top-2 left-2">
                  <span className="rounded-full bg-black/30 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-md">
                    {t(item.workTagKey)}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className={`mb-2 h-0.5 w-8 rounded-full bg-gradient-to-r ${gradients[i]}`} />
                  <h3 className="text-sm font-semibold leading-snug text-slate-800 dark:text-slate-100">
                    {t(item.projectTitleKey)}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {t(item.projectDescKey)}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {honorTags[i].map((tag, j) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tagColors[j % tagColors.length]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
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

      <MacOSModal
        open={modal.open}
        title={modal.title}
        url={modal.url}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
      />
    </div>
  );
}
