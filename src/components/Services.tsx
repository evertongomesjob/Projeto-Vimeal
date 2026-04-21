import { useLocale } from "../context/LocaleContext";

function IconFeature() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M3 3v18h18M7 14l4-4 3 3 5-7" />
      <circle cx="7" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="11" cy="10" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="14" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="19" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Icon01() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="4" width="18" height="4" rx="1" />
      <rect x="3" y="10" width="18" height="4" rx="1" />
      <rect x="3" y="16" width="18" height="4" rx="1" />
      <circle cx="7" cy="6" r="1" fill="currentColor" stroke="none" />
      <circle cx="7" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="7" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Icon02() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  );
}

function Icon03() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M7 14l3-4 3 2 4-6" />
    </svg>
  );
}

function Icon04() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 17a4 4 0 010-8 6 6 0 0111.5-1.5A4.5 4.5 0 0120 17" />
      <path d="M12 13v6M8 16l4 3 4-3" />
    </svg>
  );
}

const baseCard =
  "group relative col-span-12 overflow-hidden rounded-2xl border border-line bg-paper p-9 transition duration-300 hover:border-brand hover:bg-white hover:shadow-[0_10px_40px_-20px_rgba(21,18,14,0.2)] dark:border-white/10 dark:bg-zinc-900/50 dark:hover:border-brand md:col-span-6";

const featureCard =
  "group relative col-span-12 overflow-hidden rounded-2xl border border-ink bg-ink p-9 text-paper transition duration-300 hover:border-brand dark:border-zinc-800 dark:bg-zinc-950";

const iconBox =
  "mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] border border-line bg-white text-brand dark:border-white/10 dark:bg-zinc-900";

const iconBoxFeature =
  "mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/[0.12] bg-white/[0.08] text-brand-light";

const arrow =
  "absolute right-9 top-9 flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand transition-all duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:bg-brand group-hover:text-white";

const arrowFeature =
  "absolute right-9 top-9 flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.08] text-brand-light transition-all duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:bg-brand group-hover:text-white";

export function Services() {
  const { t } = useLocale();

  return (
    <section id="servicos" className="scroll-mt-24 bg-white py-[120px] dark:bg-zinc-950">
      <div className="container-site">
        <div className="mb-16 max-w-[720px]">
          <p className="mb-4 inline-flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-brand before:inline-block before:h-0.5 before:w-8 before:rounded-sm before:bg-brand before:content-['']">
            {t("services.kicker")}
          </p>
          <h2 className="text-[clamp(36px,4.4vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink dark:text-paper">
            {t("services.title")} <span className="text-brand">{t("services.titleAccent")}</span>
          </h2>
          <p className="mt-4 text-lg leading-normal text-ink-3 dark:text-zinc-400">{t("services.lead")}</p>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className={featureCard}>
            <div className="mb-5 font-mono text-sm font-semibold tracking-[0.06em] text-brand-light">{t("services.featureTag")}</div>
            <div className={iconBoxFeature}>
              <IconFeature />
            </div>
            <h3 className="mb-3 max-w-[560px] text-[32px] font-bold leading-[1.15] tracking-[-0.02em]">{t("services.featureTitle")}</h3>
            <p className="max-w-[560px] text-[17px] leading-[1.55] text-paper/70">{t("services.featureBody")}</p>
            <div className={arrowFeature} aria-hidden>
              →
            </div>
          </div>

          <div className={baseCard}>
            <div className="mb-5 font-mono text-sm font-semibold tracking-[0.06em] text-brand">/01</div>
            <div className={iconBox}>
              <Icon01 />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-ink dark:text-paper">{t("services.s1Title")}</h3>
            <p className="text-[15px] leading-[1.55] text-ink-3 dark:text-zinc-400">{t("services.s1Body")}</p>
            <div className={arrow} aria-hidden>
              →
            </div>
          </div>

          <div className={baseCard}>
            <div className="mb-5 font-mono text-sm font-semibold tracking-[0.06em] text-brand">/02</div>
            <div className={iconBox}>
              <Icon02 />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-ink dark:text-paper">{t("services.s2Title")}</h3>
            <p className="text-[15px] leading-[1.55] text-ink-3 dark:text-zinc-400">{t("services.s2Body")}</p>
            <div className={arrow} aria-hidden>
              →
            </div>
          </div>

          <div className={baseCard}>
            <div className="mb-5 font-mono text-sm font-semibold tracking-[0.06em] text-brand">/03</div>
            <div className={iconBox}>
              <Icon03 />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-ink dark:text-paper">{t("services.s3Title")}</h3>
            <p className="text-[15px] leading-[1.55] text-ink-3 dark:text-zinc-400">{t("services.s3Body")}</p>
            <div className={arrow} aria-hidden>
              →
            </div>
          </div>

          <div className={baseCard}>
            <div className="mb-5 font-mono text-sm font-semibold tracking-[0.06em] text-brand">/04</div>
            <div className={iconBox}>
              <Icon04 />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-ink dark:text-paper">{t("services.s4Title")}</h3>
            <p className="text-[15px] leading-[1.55] text-ink-3 dark:text-zinc-400">{t("services.s4Body")}</p>
            <div className={arrow} aria-hidden>
              →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
