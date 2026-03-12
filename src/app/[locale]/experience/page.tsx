import { Experience } from "@/components/sections/Experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ExperiencePage() {
  const t = useTranslations("timeline");

  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        >
          <ArrowLeft className="h-4 w-4" />
          返回首页
        </Link>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <Experience />
      </div>
    </main>
  );
}
