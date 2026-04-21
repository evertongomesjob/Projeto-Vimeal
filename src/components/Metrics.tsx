import { useLocale } from "../context/LocaleContext";

export function Metrics() {
  const { t } = useLocale();

  return (
    <section className="bg-ink py-[50px] text-paper dark:bg-zinc-950">
      <div className="container-site">
        <div className="mb-10 flex flex-col gap-3 border-b border-white/[0.12] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.08em] text-brand-light">{t("metrics.kicker")}</p>
            <h2 className="mt-3 max-w-3xl text-[clamp(28px,4vw,44px)] font-bold leading-tight tracking-[-0.03em] text-paper">
              {t("metrics.title")}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-paper/65 sm:text-base">{t("metrics.lead")}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          <div className="lg:border-0 lg:pl-0 lg:pr-4 xl:pr-6">
            <div className="mb-2 text-[clamp(36px,4vw,48px)] font-bold leading-none tracking-[-0.03em] xl:text-[48px]">
              ~10<span className="text-brand-light">.</span>
            </div>
            <p className="text-[13px] text-paper/[0.55]">{t("metrics.years")}</p>
          </div>
          <div className="lg:border-l lg:border-white/[0.12] lg:px-4 xl:px-6">
            <div className="mb-2 text-[clamp(36px,4vw,48px)] font-bold leading-none tracking-[-0.03em] xl:text-[48px]">
              40<span className="text-brand-light">+</span>
            </div>
            <p className="text-[13px] text-paper/[0.55]">{t("metrics.projects")}</p>
          </div>
          <div className="lg:border-l lg:border-white/[0.12] lg:px-4 xl:px-6">
            <div className="mb-2 text-[clamp(36px,4vw,48px)] font-bold leading-none tracking-[-0.03em] xl:text-[48px]">
              25<span className="text-brand-light">+</span>
            </div>
            <p className="text-[13px] text-paper/[0.55]">{t("metrics.clients")}</p>
          </div>
          <div className="lg:border-l lg:border-white/[0.12] lg:px-4 xl:px-6">
            <div className="mb-2 text-[clamp(36px,4vw,48px)] font-bold leading-none tracking-[-0.03em] xl:text-[48px]">
              PL<span className="text-brand-light">-</span>300
            </div>
            <p className="text-[13px] text-paper/[0.55]">{t("metrics.pl300")}</p>
          </div>
          <div className="lg:border-l lg:border-white/[0.12] lg:px-4 xl:px-6">
            <div className="mb-2 text-[clamp(36px,4vw,48px)] font-bold leading-none tracking-[-0.03em] xl:text-[48px]">
              1<span className="text-brand-light">×</span>1
            </div>
            <p className="text-[13px] text-paper/[0.55]">{t("metrics.oneOnOne")}</p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl border-t border-white/[0.12] pt-10 text-center text-base font-medium leading-relaxed text-paper/80 sm:text-lg lg:mt-12 lg:pt-12">
          {t("metrics.impactBefore")}
          <span className="whitespace-nowrap text-brand-light">{t("metrics.impactHighlight")}</span>
          {t("metrics.impactAfter")}
        </p>
      </div>
    </section>
  );
}
