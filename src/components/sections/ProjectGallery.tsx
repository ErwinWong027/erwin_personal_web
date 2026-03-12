"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Play, ExternalLink, X, Calendar, User, FileText, Image as ImageIcon } from "lucide-react";
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
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-blue-600",
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

const projectTags = [
  ["MATLAB", "信号处理", "软著"],
  ["BIM", "结构设计", "一等奖"],
  ["BIM", "数据管理", "数字化"],
  ["施工管理", "质量安全", "资料归档"],
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

const galleryGradients = [
  "from-rose-500/80 to-pink-600/80",
  "from-violet-500/80 to-indigo-600/80",
  "from-cyan-500/80 to-blue-600/80",
  "from-amber-500/80 to-orange-600/80",
  "from-emerald-500/80 to-teal-600/80",
  "from-lime-500/80 to-green-600/80",
  "from-fuchsia-500/80 to-purple-600/80",
  "from-red-500/80 to-rose-600/80",
  "from-teal-500/80 to-cyan-600/80",
  "from-indigo-500/80 to-blue-600/80",
  "from-orange-500/80 to-amber-600/80",
  "from-blue-500/80 to-indigo-600/80",
  "from-slate-500/80 to-gray-600/80",
  "from-yellow-500/80 to-amber-600/80",
  "from-purple-500/80 to-pink-600/80",
];

const isImageFile = (url: string): boolean => {
  return /\.(jpg|jpeg|png|gif|webp|bmp)$/i.test(url);
};

const isPdfFile = (url: string): boolean => {
  return /\.pdf$/i.test(url);
};

const getImageUrl = (workUrl: string, imageUrl: string | null): string | null => {
  // 如果有明确的 imageUrl 且不是 PDF，返回 imageUrl
  if (imageUrl && !isPdfFile(imageUrl)) {
    return imageUrl;
  }
  // 如果 workUrl 是图片，返回 workUrl
  if (imageUrl && isImageFile(imageUrl)) {
    return imageUrl;
  }
  // 否则返回 null，使用渐变背景
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

  const items: {
    workTagKey: string;
    workUrl: string;
    imageUrl: string | null;
    projectTitleKey: string;
    projectRoleKey: string;
    projectDateKey: string;
    projectDescKey: string;
  }[] = [
    {
      workTagKey: "work1_tag" as const,
      workUrl: "https://www.douyin.com/",
      imageUrl: null,
      projectTitleKey: "project1_title" as const,
      projectRoleKey: "project1_role" as const,
      projectDateKey: "project1_date" as const,
      projectDescKey: "project1_desc" as const,
    },
    {
      workTagKey: "work2_tag" as const,
      workUrl: "https://www.douyin.com/",
      imageUrl: null,
      projectTitleKey: "project2_title" as const,
      projectRoleKey: "project2_role" as const,
      projectDateKey: "project2_date" as const,
      projectDescKey: "project2_desc" as const,
    },
    {
      workTagKey: "work3_tag" as const,
      workUrl: "https://www.douyin.com/",
      imageUrl: null,
      projectTitleKey: "project3_title" as const,
      projectRoleKey: "project3_role" as const,
      projectDateKey: "project3_date" as const,
      projectDescKey: "project3_desc" as const,
    },
    {
      workTagKey: "work4_tag" as const,
      workUrl: "https://www.douyin.com/",
      imageUrl: null,
      projectTitleKey: "project4_title" as const,
      projectRoleKey: "project4_role" as const,
      projectDateKey: "project4_date" as const,
      projectDescKey: "project4_desc" as const,
    },
    {
      workTagKey: "work5_tag" as const,
      workUrl: "/奖状证书/三创校特等奖.pdf",
      imageUrl: "/奖状证书/三创校特等奖.jpg",
      projectTitleKey: "project5_title" as const,
      projectRoleKey: "project5_role" as const,
      projectDateKey: "project5_date" as const,
      projectDescKey: "project5_desc" as const,
    },
    {
      workTagKey: "work6_tag" as const,
      workUrl: "/奖状证书/三创省二.jpeg",
      imageUrl: "/奖状证书/三创省二.jpeg",
      projectTitleKey: "project6_title" as const,
      projectRoleKey: "project6_role" as const,
      projectDateKey: "project6_date" as const,
      projectDescKey: "project6_desc" as const,
    },
    {
      workTagKey: "work7_tag" as const,
      workUrl: "/奖状证书/互联网_获奖证书.pdf",
      imageUrl: "/奖状证书/互联网_获奖证书.jpg",
      projectTitleKey: "project7_title" as const,
      projectRoleKey: "project7_role" as const,
      projectDateKey: "project7_date" as const,
      projectDescKey: "project7_desc" as const,
    },
    {
      workTagKey: "work8_tag" as const,
      workUrl: "/奖状证书/大创项目国家级公示.pdf",
      imageUrl: "/奖状证书/大创项目国家级公示.jpg",
      projectTitleKey: "project8_title" as const,
      projectRoleKey: "project8_role" as const,
      projectDateKey: "project8_date" as const,
      projectDescKey: "project8_desc" as const,
    },
    {
      workTagKey: "work9_tag" as const,
      workUrl: "/奖状证书/品牌策划大赛新加坡中国一等奖.pdf",
      imageUrl: "/奖状证书/品牌策划大赛新加坡中国一等奖.jpg",
      projectTitleKey: "project9_title" as const,
      projectRoleKey: "project9_role" as const,
      projectDateKey: "project9_date" as const,
      projectDescKey: "project9_desc" as const,
    },
    {
      workTagKey: "work10_tag" as const,
      workUrl: "/奖状证书/商业精英挑战赛新加坡总决赛全国一等奖.pdf",
      imageUrl: "/奖状证书/商业精英挑战赛新加坡总决赛全国一等奖.jpg",
      projectTitleKey: "project10_title" as const,
      projectRoleKey: "project10_role" as const,
      projectDateKey: "project10_date" as const,
      projectDescKey: "project10_desc" as const,
    },
    {
      workTagKey: "work11_tag" as const,
      workUrl: "/奖状证书/大广赛.PNG",
      imageUrl: "/奖状证书/大广赛.PNG",
      projectTitleKey: "project11_title" as const,
      projectRoleKey: "project11_role" as const,
      projectDateKey: "project11_date" as const,
      projectDescKey: "project11_desc" as const,
    },
    {
      workTagKey: "work12_tag" as const,
      workUrl: "/奖状证书/学创杯.png",
      imageUrl: "/奖状证书/学创杯.png",
      projectTitleKey: "project12_title" as const,
      projectRoleKey: "project12_role" as const,
      projectDateKey: "project12_date" as const,
      projectDescKey: "project12_desc" as const,
    },
    {
      workTagKey: "work13_tag" as const,
      workUrl: "/奖状证书/美灵杯.png",
      imageUrl: "/奖状证书/美灵杯.png",
      projectTitleKey: "project13_title" as const,
      projectRoleKey: "project13_role" as const,
      projectDateKey: "project13_date" as const,
      projectDescKey: "project13_desc" as const,
    },
    {
      workTagKey: "work14_tag" as const,
      workUrl: "/奖状证书/财经创新创业大赛.JPG",
      imageUrl: "/奖状证书/财经创新创业大赛.JPG",
      projectTitleKey: "project14_title" as const,
      projectRoleKey: "project14_role" as const,
      projectDateKey: "project14_date" as const,
      projectDescKey: "project14_desc" as const,
    },
    {
      workTagKey: "work15_tag" as const,
      workUrl: "/奖状证书/软著.jpg",
      imageUrl: "/奖状证书/软著.jpg",
      projectTitleKey: "project15_title" as const,
      projectRoleKey: "project15_role" as const,
      projectDateKey: "project15_date" as const,
      projectDescKey: "project15_desc" as const,
    },
  ] as const;

  return (
    <section id="project-gallery" className="bg-slate-100/50 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div
                onClick={() =>
                  handleCardClick(t(item.projectTitleKey), item.workUrl)
                }
                className="group flex cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900"
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
                              <ImageIcon className="h-5 w-5 text-primary-600" />
                            </div>
                          </div>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${galleryGradients[i]} transition-transform duration-500 group-hover:scale-105`}
                          />
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
                    }
                  })()}

                  <div className="absolute top-2 left-2">
                    <span className="rounded-full bg-black/30 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-md">
                      {t(item.workTagKey)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <div
                    className={`mb-2 h-1 w-12 rounded-full bg-gradient-to-r ${gradients[i]}`}
                  />

                  <h3 className="text-sm font-semibold leading-snug">
                    {t(item.projectTitleKey)}
                  </h3>

                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-0.5">
                      <User className="h-3 w-3" />
                      {t(item.projectRoleKey)}
                    </span>
                    <span className="inline-flex items-center gap-0.5">
                      <Calendar className="h-3 w-3" />
                      {t(item.projectDateKey)}
                    </span>
                  </div>

                  <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {t(item.projectDescKey)}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {projectTags[i].map((tag, j) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tagColors[j % tagColors.length]}`}
                      >
                        {tag}
                      </span>
                    ))}
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
