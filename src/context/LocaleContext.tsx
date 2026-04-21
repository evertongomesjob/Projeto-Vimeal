import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { messagesEn } from "../i18n/en";
import { messagesPt, type Messages } from "../i18n/pt";
import { translate } from "../i18n/translate";

export type Locale = "pt" | "en";

const STORAGE_KEY = "vimeal-locale";

const bundles: Record<Locale, Messages> = {
  pt: messagesPt,
  en: messagesEn,
};

function detectLocale(): Locale {
  if (typeof window === "undefined") return "pt";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "pt") return saved;
  } catch {
    /* ignore */
  }
  const list = typeof navigator !== "undefined" ? navigator.languages ?? [navigator.language] : [];
  for (const l of list) {
    if (l && l.toLowerCase().startsWith("en")) return "en";
  }
  return "pt";
}

function applyHtmlLang(locale: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
}

type TParams = Record<string, string | number | undefined>;

function interpolate(template: string, params?: TParams): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k: string) => {
    const v = params[k];
    return v === undefined || v === null ? `{${k}}` : String(v);
  });
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: TParams) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale());

  useEffect(() => {
    applyHtmlLang(locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    applyHtmlLang(next);
  }, []);

  const t = useCallback(
    (key: string, params?: TParams) => {
      const raw = translate(bundles[locale], key);
      return interpolate(raw, params);
    },
    [locale]
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
