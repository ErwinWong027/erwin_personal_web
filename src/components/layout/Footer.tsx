import { useTranslations } from "next-intl";
import { Github, Mail } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t("copyright")}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:zihan.wang@edhec.com"
            className="text-slate-400 transition-colors hover:text-primary-500 dark:text-slate-500 dark:hover:text-primary-400"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/ErwinWong027"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-primary-500 dark:text-slate-500 dark:hover:text-primary-400"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
