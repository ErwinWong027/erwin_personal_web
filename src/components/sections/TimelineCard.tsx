"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface TimelineCardProps {
  title: string;
  role: string;
  period: string;
  description?: string;
  highlights?: readonly string[];
  background?: string;
  color: string;
  position: "left" | "right";
  index: number;
  variant?: "education" | "work";
  imageSrc?: string;
  imageAlt?: string;
}

export function TimelineCard({
  title,
  role,
  period,
  description,
  highlights,
  background,
  color,
  position,
  index,
  variant = "education",
  imageSrc,
  imageAlt,
}: TimelineCardProps) {
  if (variant === "work") {
    return (
      <AnimateOnScroll delay={index * 0.1}>
        <div className={`relative w-full rounded-xl border-2 border-slate-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${color}`}>
          <div className="flex flex-col md:flex-row">
            {/* 左栏：基本信息 */}
            <div className="flex flex-col justify-start border-b-2 border-slate-800 p-6 md:w-2/5 md:border-b-0 md:border-r-2">
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                {period}
              </div>
              <h3 className="mb-1 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mb-4 text-sm font-semibold text-slate-700">{role}</p>
              {background && (
                <p className="text-sm leading-relaxed text-slate-800">
                  {background}
                </p>
              )}
            </div>

            {/* 右栏：成果亮点 */}
            <div className="p-6 md:w-3/5">
              {highlights && highlights.length > 0 && (
                <ol className="space-y-3">
                  {highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-800"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    );
  }

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
          {/* 学校Logo - 显示在对侧 */}
          {imageSrc && (
            <div className={`absolute top-6 hidden md:block ${position === "left" ? "left-full ml-16" : "right-full mr-16"}`}>
              <div className={`relative overflow-hidden rounded-lg bg-white shadow-md ${index === 0 ? "h-20 w-32" : "h-16 w-24"}`}>
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
          
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
