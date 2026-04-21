import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocale } from "../context/LocaleContext";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/#servicos", key: "nav.services" as const },
  { to: "/#stack", key: "nav.stack" as const },
  { to: "/#processo", key: "nav.process" as const },
  { to: "/#sobre", key: "nav.about" as const },
  { to: "/blog", key: "nav.blog" as const },
];

export function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const navLinkActive = (to: string) =>
    to === "/blog" && location.pathname.startsWith("/blog") ? "text-brand" : "text-ink-2 dark:text-zinc-300";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-300 dark:border-white/10 ${
        scrolled
          ? "border-line bg-white/95 shadow-sm dark:bg-zinc-950/95"
          : "border-transparent bg-white/90 dark:bg-zinc-950/90"
      }`}
    >
      <div className="container-site flex h-[76px] items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-0 text-2xl font-extrabold leading-none tracking-[-0.045em] text-ink md:text-3xl dark:text-paper"
          aria-label={t("nav.homeAria")}
          onClick={() => setMenuOpen(false)}
        >
          {/* -mr: compensa área vazia no V; -translate-y: base do símbolo alinha à baseline das minúsculas. */}
          <svg
            viewBox="15 23 70 54"
            preserveAspectRatio="xMidYMid meet"
            className="-mr-[0.14em] block h-[1em] w-[calc(1em*70/54)] shrink-0 -translate-y-[0.085em] text-brand dark:text-brand-light"
            aria-hidden="true"
          >
            <path d="M18 26 L50 74 L82 26" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.25"/>
            <path d="M26 26 L50 62 L74 26" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.55"/>
            <path d="M34 26 L50 50 L66 26" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="ml-[0.12em] leading-none">
            imeal<span className="text-brand dark:text-brand-light">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t("nav.principal")}>
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`py-2 text-sm font-medium transition hover:text-brand ${navLinkActive(item.to)}`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            to="/#contato"
            className="hidden items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand-sm transition hover:bg-brand-dark sm:inline-flex"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.ctaTalk")}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-2 md:hidden dark:border-white/10 dark:text-zinc-200"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <span className="text-lg leading-none" aria-hidden>
                ×
              </span>
            ) : (
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="menu-mobile"
          className="border-b border-line bg-white px-6 py-4 dark:border-white/10 dark:bg-zinc-950 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label={t("nav.mobile")}>
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-lg px-3 py-2 text-base font-medium hover:bg-paper-2 dark:hover:bg-zinc-900 ${
                  item.to === "/blog" && location.pathname.startsWith("/blog")
                    ? "text-brand"
                    : "text-ink dark:text-zinc-200"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              to="/#contato"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-center text-sm font-semibold text-white shadow-brand-sm hover:bg-brand-dark"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.ctaTalk")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
