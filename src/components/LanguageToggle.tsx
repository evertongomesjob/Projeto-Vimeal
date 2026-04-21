import { HiGlobeAlt } from "react-icons/hi2";
import { useLocale, type Locale } from "../context/LocaleContext";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  function pick(next: Locale) {
    setLocale(next);
  }

  return (
    <div
      className="flex items-center gap-1 rounded-lg border border-line bg-paper/80 p-0.5 dark:border-white/10 dark:bg-zinc-900/80"
      role="group"
      aria-label={t("lang.switchAria")}
    >
      <span className="sr-only">{t("lang.hint")}</span>
      <span className="pl-1.5 text-ink-3 dark:text-zinc-500" aria-hidden>
        <HiGlobeAlt className="h-4 w-4" />
      </span>
      {(["pt", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => pick(code)}
          className={`rounded-md px-2 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
            locale === code
              ? "bg-ink text-paper shadow-sm dark:bg-paper dark:text-ink"
              : "text-ink-3 hover:bg-white hover:text-ink dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          }`}
          aria-pressed={locale === code}
          title={code === "pt" ? t("lang.pt") : t("lang.en")}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
