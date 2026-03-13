"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface TimelineCardProps {
  title: string;
  role: string;
  period: string;
  description?: string;
  highlights?: string[];
  color: string;
  position: "left" | "right";
  index: number;
}

export function TimelineCard({
  title,
  role,
  period,
  description,
  highlights,
  color,
  position,
  index,
}: TimelineCardProps) {
  return (
    <AnimateOnScroll delay={index * 0.1}>
      <div
        className={`relative mb-8 flex w-full md:w-[calc(50%-2rem)] ${
          position === "left" ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        {/* 时间轴节点（菱形）- 左侧卡片 */}
        {position === "left" && (
          <div
            className="absolute right-0 top-6 hidden h-4 w-4 translate-x-1/2 rotate-45 transform items-center justify-center bg-slate-400 md:block z-10 shadow-md"
            style={{ marginRight: "-1rem" }}
          />
        )}

        {/* 时间轴节点（菱形）- 右侧卡片 */}
        {position === "right" && (
          <div
            className="absolute left-0 top-6 hidden h-4 w-4 -translate-x-1/2 rotate-45 transform items-center justify-center bg-slate-400 md:block z-10 shadow-md"
            style={{ marginLeft: "-1rem" }}
          />
        )}

        {/* 卡片容器 */}
        <div
          className={`relative flex-1 rounded-xl border-2 border-slate-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${color}`}
        >
          {/* 时间段 */}
          <div className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-700">
            {period}
          </div>

          {/* 标题（公司/学校） */}
          <h3 className="mb-1 text-base font-bold text-slate-900">{title}</h3>

          {/* 职位/学位 */}
          <p className="mb-3 text-sm font-semibold text-slate-700">{role}</p>

          {/* 描述文本 */}
          {description && (
            <p className="mb-3 text-sm leading-relaxed text-slate-800">
              {description}
            </p>
          )}

          {/* 要点列表 */}
          {highlights && highlights.length > 0 && (
            <ul className="space-y-1">
              {highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-slate-800"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-800" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </AnimateOnScroll>
  );
}
