import { useLocale } from "../context/LocaleContext";

export function About() {
  const { t } = useLocale();

  return (
    <section id="sobre" className="scroll-mt-24 bg-ink py-[120px] text-paper dark:bg-zinc-950">
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-brand-light before:inline-block before:h-0.5 before:w-8 before:rounded-sm before:bg-brand-light before:content-['']">
              {t("about.kicker")}
            </p>
            <h2 className="mb-6 text-[clamp(40px,4.8vw,64px)] font-bold leading-[1.05] tracking-[-0.03em]">
              {t("about.title")}{" "}
              <span className="text-brand-light">{t("about.titleAccent")}</span>
            </h2>
            <p className="mb-4 text-[17px] leading-[1.6] text-paper/70">{t("about.p1")}</p>
            <p className="text-[17px] leading-[1.6] text-paper/70">{t("about.p2")}</p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]">
            <dl>
              <div className="grid grid-cols-[1fr_1.4fr] items-center gap-4 border-b border-white/[0.08] py-[18px] first:pt-0">
                <dt className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-paper/65 sm:text-sm">{t("about.dtCompany")}</dt>
                <dd className="m-0 text-base font-medium">{t("about.ddCompany")}</dd>
              </div>
              <div className="grid grid-cols-[1fr_1.4fr] items-center gap-4 border-b border-white/[0.08] py-[18px]">
                <dt className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-paper/65 sm:text-sm">{t("about.dtLocation")}</dt>
                <dd className="m-0 text-base font-medium">{t("about.ddLocation")}</dd>
              </div>
              <div className="grid grid-cols-[1fr_1.4fr] items-center gap-4 border-b border-white/[0.08] py-[18px]">
                <dt className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-paper/65 sm:text-sm">{t("about.dtMode")}</dt>
                <dd className="m-0 text-base font-medium">{t("about.ddMode")}</dd>
              </div>
              <div className="grid grid-cols-[1fr_1.4fr] items-center gap-4 py-[18px] last:pb-0">
                <dt className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-paper/65 sm:text-sm">{t("about.dtSince")}</dt>
                <dd className="m-0 font-mono text-sm font-medium">{t("about.ddSince")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
