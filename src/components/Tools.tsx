import { useMemo } from "react";
import type { IconType } from "react-icons";
import { SiDatabricks, SiSnowflake } from "react-icons/si";
import { useLocale } from "../context/LocaleContext";

type ToolPill = {
  name: string;
  src?: string;
  Icon?: IconType;
  iconClassName?: string;
  iconBoxClass?: string;
};

type GroupDef = {
  title: string;
  description: string;
  dotClass?: string;
  tools: ToolPill[];
};

export function Tools() {
  const { t } = useLocale();

  const groups: GroupDef[] = useMemo(
    () => [
      {
        title: t("tools.g1Title"),
        description: t("tools.g1Desc"),
        tools: [
          { name: t("tools.toolPowerBi"), src: "/tools/powerbi.svg" },
          { name: t("tools.toolSsrs"), src: "/tools/microsoftsqlserver.svg" },
        ],
      },
      {
        title: t("tools.g2Title"),
        description: t("tools.g2Desc"),
        dotClass: "bg-accent",
        tools: [
          { name: t("tools.toolFabric"), src: "/tools/fabric.svg" },
          { name: t("tools.toolAzure"), src: "/tools/azure.svg" },
          { name: t("tools.toolDataFactory"), src: "/tools/azuresqldatabase.svg" },
        ],
      },
      {
        title: t("tools.g3Title"),
        description: t("tools.g3Desc"),
        tools: [
          { name: t("tools.toolSqlServer"), src: "/tools/microsoftsqlserver.svg" },
          { name: t("tools.toolSsis"), src: "/tools/microsoftsqlserver.svg" },
          { name: t("tools.toolSsas"), src: "/tools/microsoftsqlserver.svg" },
        ],
      },
      {
        title: t("tools.g4Title"),
        description: t("tools.g4Desc"),
        dotClass: "bg-accent",
        tools: [
          { name: t("tools.toolAzureDevOps"), src: "/tools/azuredevops.svg" },
          {
            name: t("tools.toolDatabricks"),
            Icon: SiDatabricks,
            iconClassName: "text-[#FF3621]",
            iconBoxClass: "bg-[#FF3621]/10",
          },
          {
            name: t("tools.toolSnowflake"),
            Icon: SiSnowflake,
            iconClassName: "text-[#29B5E8]",
            iconBoxClass: "bg-[#29B5E8]/10",
          },
        ],
      },
    ],
    [t]
  );

  return (
    <section id="stack" className="scroll-mt-24 bg-paper-2 py-[120px] dark:bg-zinc-900/40">
      <div className="container-site">
        <div className="mb-16 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-[60px]">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-brand before:inline-block before:h-0.5 before:w-8 before:rounded-sm before:bg-brand before:content-['']">
              {t("tools.kicker")}
            </p>
            <h2 className="text-[clamp(36px,4.4vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink dark:text-paper">
              {t("tools.title")} <span className="text-brand">{t("tools.titleAccent")}</span>
            </h2>
            <p className="mt-4 text-lg leading-normal text-ink-3 dark:text-zinc-400">{t("tools.lead")}</p>
          </div>
          <div className="inline-flex items-center gap-3.5 self-start rounded-xl border border-line bg-white px-[18px] py-3.5 text-sm dark:border-white/10 dark:bg-zinc-900 lg:self-end">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-brand text-[13px] font-bold text-white">
              PL
            </div>
            <div>
              <strong className="block text-sm font-semibold text-ink dark:text-paper">{t("tools.certName")}</strong>
              <span className="text-xs text-ink-3 dark:text-zinc-400">{t("tools.certSubtitle")}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-line bg-white p-7 dark:border-white/10 dark:bg-zinc-900/60"
            >
              <div className="mb-1.5 flex items-center gap-2.5">
                <span className={`h-2 w-2 shrink-0 rounded-full ${group.dotClass ?? "bg-brand"}`} aria-hidden />
                <h3 className="text-[17px] font-bold tracking-[-0.01em] text-ink dark:text-paper">{group.title}</h3>
              </div>
              <p className="mb-5 text-[13px] text-ink-3 dark:text-zinc-400">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool.name}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-paper py-2 pl-2.5 pr-3 text-[13px] font-medium text-ink dark:border-white/10 dark:bg-zinc-950 dark:text-paper"
                  >
                    {tool.Icon ? (
                      <span
                        className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-sm ${tool.iconBoxClass ?? ""}`}
                      >
                        <tool.Icon className={`h-4 w-4 ${tool.iconClassName ?? ""}`} aria-hidden />
                      </span>
                    ) : (
                      <img
                        src={tool.src}
                        alt=""
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
