import { useMemo } from "react";
import { useLocale } from "../context/LocaleContext";

export function Process() {
  const { t } = useLocale();

  const steps = useMemo(
    () => [
      { num: t("process.s1Num"), title: t("process.s1Title"), body: t("process.s1Body"), duration: t("process.s1Dur") },
      { num: t("process.s2Num"), title: t("process.s2Title"), body: t("process.s2Body"), duration: t("process.s2Dur") },
      { num: t("process.s3Num"), title: t("process.s3Title"), body: t("process.s3Body"), duration: t("process.s3Dur") },
      { num: t("process.s4Num"), title: t("process.s4Title"), body: t("process.s4Body"), duration: t("process.s4Dur") },
    ],
    [t]
  );

  return (
    <section id="processo" className="scroll-mt-24 border-t border-line bg-white py-[120px] dark:border-white/10 dark:bg-zinc-950">
      <div className="container-site">
        <div className="mb-16 max-w-[720px]">
          <p className="mb-4 inline-flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-brand before:inline-block before:h-0.5 before:w-8 before:rounded-sm before:bg-brand before:content-['']">
            {t("process.kicker")}
          </p>
          <h2 className="text-[clamp(36px,4.4vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink dark:text-paper">
            {t("process.title")} <span className="text-brand">{t("process.titleAccent")}</span>
          </h2>
          <p className="mt-4 text-lg leading-normal text-ink-3 dark:text-zinc-400">{t("process.lead")}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative rounded-[14px] border border-line bg-white p-7 dark:border-white/10 dark:bg-zinc-900/60"
            >
              <div className="absolute -top-3.5 left-5 rounded-md bg-ink px-3 py-1.5 font-mono text-xs font-semibold tracking-[0.04em] text-paper dark:bg-zinc-800 sm:text-sm">
                {s.num}
              </div>
              <h3 className="mb-2.5 mt-4 text-[19px] font-bold tracking-[-0.02em] text-ink dark:text-paper">{s.title}</h3>
              <p className="text-sm leading-[1.55] text-ink-3 dark:text-zinc-400">{s.body}</p>
              <p className="mt-3.5 border-t border-dashed border-line pt-3.5 font-mono text-xs font-semibold tracking-[0.04em] text-brand dark:text-brand-light sm:text-sm">
                {s.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
