import { useMemo, useState } from "react";
import {
  clientBrandLogoBoost110Ids,
  clientBrandLogoBoost120Ids,
  clientBrandLogoBoost130Ids,
  clientBrandLogoExtraScaleIds,
  clientBrandLogoReducedScaleIds,
  clientBrandLogoSuperScaleIds,
  localLogoPublicPath,
} from "../data/clientBrands";

type Props = {
  id: string;
  label: string;
  /** Nome do ficheiro em `public/logos/` quando não for `{id}.png`. */
  logoFile?: string;
  /** Se false, só o logo (ex.: faixa em movimento). */
  showLabel?: boolean;
  className?: string;
};

/**
 * Logo apenas a partir de `public/logos/` (`/logos/...`). Sem CDN.
 * Se o ficheiro falhar a carregar, mostra só o nome.
 */
export function ClientLogoCell({
  id,
  label,
  logoFile,
  showLabel = true,
  className = "",
}: Props) {
  const [loadFailed, setLoadFailed] = useState(false);

  const src = useMemo(() => localLogoPublicPath(id, logoFile), [id, logoFile]);

  const showLogo = !loadFailed;

  const reducedScale = clientBrandLogoReducedScaleIds.has(id);
  const superScale = !reducedScale && clientBrandLogoSuperScaleIds.has(id);
  const boost130 = !reducedScale && !superScale && clientBrandLogoBoost130Ids.has(id);
  const boost120 = !reducedScale && !superScale && !boost130 && clientBrandLogoBoost120Ids.has(id);
  const boost110 = !reducedScale && !superScale && !boost130 && !boost120 && clientBrandLogoBoost110Ids.has(id);
  const extraScale =
    !reducedScale && !superScale && !boost130 && !boost120 && !boost110 && clientBrandLogoExtraScaleIds.has(id);

  /** BV/Sascar e UHC: +20% (×1,2) — mesmas classes. */
  const scale120 = boost120 || extraScale;

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2.5 text-center ${
        showLabel ? "min-h-[135px] w-full px-2 py-4" : "min-h-0 w-auto shrink-0 px-3 py-1"
      } ${className}`}
    >
      {showLogo ? (
        showLabel ? (
          <img
            key={src}
            src={src}
            alt=""
            title={label}
            width={reducedScale ? 125 : superScale ? 225 : boost130 ? 203 : scale120 ? 187 : boost110 ? 172 : 156}
            height={reducedScale ? 38 : superScale ? 68 : boost130 ? 61 : scale120 ? 56 : boost110 ? 52 : 47}
            loading="lazy"
            decoding="async"
            onError={() => setLoadFailed(true)}
            className={`object-contain object-center opacity-100 ${
              reducedScale
                ? "h-[2.34rem] max-h-[2.34rem] w-auto max-w-[min(100%,146px)]"
                : superScale
                  ? "h-[4.212rem] max-h-[4.212rem] w-auto max-w-[min(100%,262px)]"
                  : boost130
                    ? "h-[3.8025rem] max-h-[3.8025rem] w-auto max-w-[min(100%,237px)]"
                    : scale120
                      ? "h-[3.51rem] max-h-[3.51rem] w-auto max-w-[min(100%,218px)]"
                      : boost110
                        ? "h-[3.2175rem] max-h-[3.2175rem] w-auto max-w-[min(100%,200px)]"
                        : "h-[2.925rem] max-h-[2.925rem] w-auto max-w-[min(100%,182px)]"
            }`}
          />
        ) : (
          <div className="relative flex flex-col items-center">
            <img
              key={src}
              src={src}
              alt=""
              aria-label={label}
              width={reducedScale ? 125 : superScale ? 225 : boost130 ? 203 : scale120 ? 187 : boost110 ? 172 : 156}
              height={reducedScale ? 38 : superScale ? 68 : boost130 ? 61 : scale120 ? 56 : boost110 ? 52 : 47}
              loading="lazy"
              decoding="async"
              onError={() => setLoadFailed(true)}
              className={`object-contain object-center opacity-100 ${
                reducedScale
                  ? "h-[2.6rem] max-h-[2.6rem] w-auto max-w-[min(100%,138px)] sm:h-[2.86rem] sm:max-h-[2.86rem]"
                  : superScale
                    ? "h-[4.68rem] max-h-[4.68rem] w-auto max-w-[min(100%,248px)] sm:h-[5.148rem] sm:max-h-[5.148rem]"
                    : boost130
                      ? "h-[4.225rem] max-h-[4.225rem] w-auto max-w-[min(100%,224px)] sm:h-[4.6475rem] sm:max-h-[4.6475rem]"
                      : scale120
                        ? "h-[3.9rem] max-h-[3.9rem] w-auto max-w-[min(100%,206px)] sm:h-[4.29rem] sm:max-h-[4.29rem]"
                        : boost110
                          ? "h-[3.575rem] max-h-[3.575rem] w-auto max-w-[min(100%,189px)] sm:h-[3.9325rem] sm:max-h-[3.9325rem]"
                          : "h-[3.25rem] max-h-[3.25rem] w-auto max-w-[min(100%,172px)] sm:h-[3.575rem] sm:max-h-[3.575rem]"
              }`}
            />
            <span
              role="tooltip"
              className="absolute left-1/2 top-full z-[60] mt-2 max-w-[min(90vw,280px)] -translate-x-1/2 whitespace-normal rounded-md bg-zinc-900 px-2.5 py-1.5 text-center text-[11px] font-medium leading-snug text-zinc-100 opacity-0 shadow-lg ring-1 ring-black/30 transition-opacity duration-200 group-hover:opacity-100 dark:bg-zinc-800 dark:text-zinc-50 dark:ring-white/10"
            >
              {label}
            </span>
          </div>
        )
      ) : null}
      {showLabel ? (
        <span
          className={`text-center text-[12px] font-semibold leading-snug tracking-tight text-ink transition group-hover:text-brand dark:text-paper sm:text-[13px] ${
            showLogo ? "text-[11px] font-medium text-ink-3 dark:text-zinc-400" : ""
          }`}
        >
          {label}
        </span>
      ) : !showLogo ? (
        <span
          className={`truncate text-center text-[11px] font-semibold text-ink/90 dark:text-ink ${
            reducedScale
              ? "max-w-[138px]"
              : superScale
                ? "max-w-[248px]"
                : boost130
                  ? "max-w-[224px]"
                  : scale120
                    ? "max-w-[206px]"
                    : boost110
                      ? "max-w-[189px]"
                      : "max-w-[172px]"
          }`}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
