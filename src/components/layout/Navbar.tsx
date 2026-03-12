"use client";

import { useTranslations } from "next-intl";
import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const homeChildren = [
  { key: "aiChat", href: "#ai-chat" },
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "gallery", href: "#gallery" },
] as const;

const standalonePages = [
  { key: "timeline", href: "/timeline" },
  { key: "aiMethod", href: "/ai-methodology" },
  { key: "contact", href: "/contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";
  const isHomePage = pathname === `/${currentLocale}` || pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = () => {
    const next = currentLocale === "zh" ? "en" : "zh";
    router.push(`/${next}`);
  };

  const handleAnchorNav = (anchor: string) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    
    if (isHomePage) {
      const el = document.querySelector(anchor);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${currentLocale}${anchor}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    setDropdownOpen(false);
    
    if (isHomePage) {
      const el = document.querySelector("#hero");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${currentLocale}`);
    }
  };

  const handlePageNav = (href: string) => {
    setMobileOpen(false);
    router.push(`/${currentLocale}${href}`);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          onClick={handleLogoClick}
          className="text-lg font-bold tracking-tight"
        >
          {currentLocale === "zh" ? "吴邪" : "Wu Xie"}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              {t("home")}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {dropdownOpen && (
              <ul
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute left-0 top-full z-50 mt-1 min-w-[160px] rounded-xl border border-slate-200/60 bg-white/95 p-2 shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/95"
              >
                {homeChildren.map((child) => (
                  <li key={child.key}>
                    <a
                      href={child.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleAnchorNav(child.href);
                      }}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                    >
                      {t(child.key)}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {standalonePages.map((page) => (
            <li key={page.key}>
              <button
                onClick={() => handlePageNav(page.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              >
                {t(page.key)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={switchLocale}
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label="Switch language"
          >
            <Globe className="h-4 w-4" />
          </button>
          <div className="flex items-center rounded-lg border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-800">
            <button
              onClick={() => currentLocale !== "zh" && switchLocale()}
              className={`rounded px-2 py-1 text-xs font-medium transition-all ${
                currentLocale === "zh"
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              }`}
            >
              中
            </button>
            <button
              onClick={() => currentLocale !== "en" && switchLocale()}
              className={`rounded px-2 py-1 text-xs font-medium transition-all ${
                currentLocale === "en"
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              }`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-500 md:hidden dark:text-slate-400"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200/60 bg-white/95 backdrop-blur-xl md:hidden dark:border-slate-800/60 dark:bg-slate-950/95">
          <ul className="mx-auto max-w-6xl space-y-1 px-6 py-4">
            <li>
              <button
                onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400"
              >
                {t("home")}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileHomeOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileHomeOpen && (
                <ul className="ml-4 mt-1 space-y-1 border-l border-slate-200 pl-3 dark:border-slate-700">
                  {homeChildren.map((child) => (
                    <li key={child.key}>
                      <a
                        href={child.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleAnchorNav(child.href);
                        }}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        {t(child.key)}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {standalonePages.map((page) => (
              <li key={page.key}>
                <button
                  onClick={() => handlePageNav(page.href)}
                  className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 dark:text-slate-400"
                >
                  {t(page.key)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
