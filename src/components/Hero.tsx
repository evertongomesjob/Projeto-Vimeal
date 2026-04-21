import { useLocale } from "../context/LocaleContext";
import { HeroArchitectureDiagram } from "./HeroArchitectureDiagram";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-paper pb-[100px] pt-[80px] dark:from-zinc-950 dark:to-zinc-900">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(175,74,67,0.06),transparent_50%)] dark:opacity-40"
        aria-hidden
      />
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-2 pl-2.5 pr-4 text-sm font-medium text-ink-2 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
              <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold tracking-[0.04em] text-white">
                BI
              </span>
              {t("hero.badgeSuffix")}
            </div>
            <h1 className="mb-6 text-[clamp(48px,5.5vw,80px)] font-bold leading-none tracking-[-0.035em] text-ink dark:text-paper">
              {t("hero.titleLine1")}
              <br />
              <span className="text-brand">{t("hero.titleLine2")}</span>
            </h1>
            <p className="mb-8 max-w-[480px] text-[19px] leading-normal text-ink-3 dark:text-zinc-400">{t("hero.lead")}</p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white shadow-brand transition hover:bg-brand-dark"
              >
                {t("hero.ctaTalk")}
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-[10px] border border-line bg-white px-[22px] py-3.5 text-[15px] font-semibold text-ink transition hover:border-ink dark:border-white/15 dark:bg-zinc-900 dark:text-paper dark:hover:border-white/30"
              >
                {t("hero.ctaServices")}
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl border border-line bg-white p-5 shadow-arch dark:border-white/10 dark:bg-zinc-900">
            <div className="absolute left-5 top-[18px] flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink-3 dark:text-zinc-400 sm:text-sm">
              <span className="text-brand" aria-hidden>
                ●
              </span>
              <span>{t("hero.archCaption")}</span>
            </div>
            <HeroArchitectureDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
