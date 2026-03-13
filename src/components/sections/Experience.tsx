"use client";

import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Honors } from "./Honors";
import { TimelineCard } from "./TimelineCard";

const educationEntries = [
  {
    id: "edu-edhec",
    title: "法国 EDHEC 商学院",
    role: "硕士 · 企业战略与管理",
    period: "2022.07 - 2025.02",
    description: "专注于企业战略管理与数字化转型方向",
    highlights: [
      "系统学习战略规划、组织行为学、创新管理等核心课程",
      "参与多个企业咨询项目，提供战略优化方案",
      "跨文化学习环境，与来自 30+ 国家的学生协作",
    ],
    color: "bg-gradient-135 from-pink-200 to-pink-300",
  },
  {
    id: "edu-bachelor",
    title: "江西财经大学",
    role: "本科 · 市场营销",
    period: "2018.09 - 2022.06",
    description: "主修市场营销，辅修数据分析",
    highlights: [
      "系统学习市场营销理论、消费者行为学、品牌管理",
      "参与全国大学生市场营销大赛获省级奖项",
      "完成多个企业实战项目，积累营销实践经验",
    ],
    color: "bg-gradient-135 from-purple-200 to-purple-300",
  },
  {
    id: "edu-uol",
    title: "伦敦大学",
    role: "学士（在读）· 计算机科学（AI 方向）",
    period: "2025.09 - 2026.02",
    description: "专注于人工智能与机器学习方向",
    highlights: [
      "学习 Python 编程、数据结构、机器学习算法",
      "参与 AI 实验室项目，研究自然语言处理应用",
      "结合商科背景，探索 AI 在商业场景的落地",
    ],
    color: "bg-gradient-135 from-blue-200 to-blue-300",
  },
] as const;

const workEntries = [
  {
    id: "jobark",
    title: "求职方舟",
    role: "AI 产品经理",
    period: "2025.04 - 2025.12",
    location: "杭州",
    highlights: [
      "负责 AI 求职产品的规划与迭代，用户覆盖 10 万+",
      "设计智能简历优化功能，提升用户求职成功率 35%",
      "主导 AI 面试模拟功能开发，日活跃用户破万",
      "跨部门协作，推动产品从 0 到 1 上线",
    ],
    color: "bg-gradient-135 from-yellow-200 to-yellow-300",
  },
  {
    id: "bytedance",
    title: "字节跳动",
    role: "搜索产品实习生",
    period: "2024.09 - 2024.12",
    location: "上海",
    highlights: [
      "参与抖音搜索产品的策略优化，DAU 提升 8%",
      "分析用户搜索行为数据，提出 15+ 优化建议",
      "设计搜索联想功能，用户点击率提升 12%",
      "协助完成竞品分析报告，支持产品决策",
    ],
    color: "bg-gradient-135 from-green-200 to-green-300",
  },
  {
    id: "iterative",
    title: "Iterative Games",
    role: "Web3 产品实习生",
    period: "2023.09 - 2023.12",
    location: "巴黎",
    highlights: [
      "参与区块链游戏产品设计，用户留存率提升 20%",
      "研究 Web3 用户行为，输出 3 份深度分析报告",
      "设计 NFT 道具交易系统，优化用户体验流程",
      "参与社区运营， Discord 成员增长 5000+",
    ],
    color: "bg-gradient-135 from-orange-200 to-orange-300",
  },
  {
    id: "crosspath",
    title: "CrossPath",
    role: "运营助理实习生",
    period: "2023.06 - 2023.08",
    location: "伦敦",
    highlights: [
      "协助运营多个小红书账号，总粉丝破 5 万",
      "策划内容营销活动，单篇笔记曝光量 10 万+",
      "分析竞品数据，输出周度运营优化建议",
      "协调 KOL 合作，提升品牌影响力",
    ],
    color: "bg-gradient-135 from-cyan-200 to-cyan-300",
  },
] as const;

export function Experience() {
  const t = useTranslations("timeline");

  return (
    <section id="experience" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          {/* 教育经历 */}
          <div className="relative mb-20">
            <p className="mb-6 text-left text-2xl font-bold text-slate-900 dark:text-slate-100">
              {t("section_education")}
            </p>

            {/* 时间轴线 - 仅桌面端显示 */}
            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 md:block" />

            {/* 教育经历卡片 */}
            <div className="relative">
              {educationEntries.map((entry, index) => (
                <TimelineCard
                  key={entry.id}
                  title={entry.title}
                  role={entry.role}
                  period={entry.period}
                  description={entry.description}
                  highlights={entry.highlights}
                  color={entry.color}
                  position={index % 2 === 0 ? "left" : "right"}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* 分隔线 */}
          <div className="mx-auto mb-20 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          {/* 工作经历 */}
          <div className="relative">
            <p className="mb-6 text-left text-2xl font-bold text-slate-900 dark:text-slate-100">
              {t("section_work")}
            </p>

            {/* 时间轴线 - 仅桌面端显示 */}
            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 md:block" />

            {/* 工作经历卡片 */}
            <div className="relative">
              {workEntries.map((entry, index) => (
                <TimelineCard
                  key={entry.id}
                  title={entry.title}
                  role={entry.role}
                  period={entry.period}
                  highlights={entry.highlights}
                  color={entry.color}
                  position={index % 2 === 0 ? "left" : "right"}
                  index={index}
                />
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <Honors />
      </div>
    </section>
  );
}
