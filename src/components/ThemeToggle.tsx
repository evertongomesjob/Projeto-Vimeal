import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useLocale } from "../context/LocaleContext";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-ink-3 transition hover:bg-paper-2 hover:text-ink dark:border-white/10 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
      aria-pressed={isDark}
      aria-label={isDark ? t("theme.useLight") : t("theme.useDark")}
      title={isDark ? t("theme.titleLight") : t("theme.titleDark")}
    >
      {isDark ? <HiOutlineSun className="h-5 w-5" aria-hidden /> : <HiOutlineMoon className="h-5 w-5" aria-hidden />}
    </button>
  );
}
