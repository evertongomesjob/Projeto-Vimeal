import { useLocale } from "../context/LocaleContext";
import { ClientLogoCell } from "./ClientLogoCell";
import { clientBrands } from "../data/clientBrands";

export function Clients() {
  const { t } = useLocale();

  const loop = [...clientBrands, ...clientBrands];

  return (
    <section
      id="clientes"
      className="scroll-mt-24 border-t border-line/70 bg-gradient-to-b from-paper via-paper-2/90 to-paper pt-[120px] dark:border-white/[0.07] dark:from-[#0f0e0b] dark:via-zinc-950 dark:to-[#0f0e0b]"
    >
      <div className="container-site pb-14">
        <p className="mb-4 inline-flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-brand before:inline-block before:h-0.5 before:w-8 before:rounded-sm before:bg-brand before:content-['']">
          {t("clients.kicker")}
        </p>
        <h2 className="mb-4 max-w-[22ch] text-[clamp(36px,4.5vw,52px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink dark:text-paper">
          {t("clients.title")}{" "}
          <span className="text-brand">{t("clients.titleAccent")}</span>
        </h2>
        <p className="max-w-2xl text-[17px] leading-relaxed text-ink-3 dark:text-zinc-400">{t("clients.lead")}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-2 shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
            <span className="text-brand" aria-hidden>
              ●
            </span>
            {t("clients.proof1")}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-2 shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
            <span className="text-brand" aria-hidden>
              ●
            </span>
            {t("clients.proof2")}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-2 shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
            <span className="text-brand" aria-hidden>
              ●
            </span>
            {t("clients.proof3")}
          </span>
        </div>
      </div>

      {/* Faixa #fff na base da secção (sem creme abaixo) — alinha com Serviços (bg-white) */}
      <div className="relative w-full overflow-hidden border-t border-line/80 bg-white pb-40 pt-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/10 dark:bg-white">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-white to-transparent dark:from-white"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-white to-transparent dark:from-white"
          aria-hidden
        />

        <div className="min-w-0 w-full">
          <div className="client-logos-marquee-track">
            {loop.map(({ id, logoFile }, i) => {
              const label = t(`clients.brands.${id}`);
              return (
                <div key={`${id}-${i}`} className="group shrink-0">
                  <ClientLogoCell id={id} logoFile={logoFile} label={label} showLabel={false} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
