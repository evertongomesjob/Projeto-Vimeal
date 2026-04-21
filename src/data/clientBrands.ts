/**
 * Marcas na faixa — logos só em `public/logos/` (servidos como `/logos/...`).
 * Nome do ficheiro: `{id}.png` ou `logoFile` quando o nome for outro.
 */
export type ClientBrand = {
  id: string;
  /** Nome do ficheiro em `public/logos/` (ex.: "entrust it.png"). Por defeito: `{id}.png`. */
  logoFile?: string;
};

/** +20% face ao tamanho base (UHC). */
export const clientBrandLogoExtraScaleIds = new Set<string>(["uhc"]);

/**
 * Michelin: +20% extra sobre o boost (+20%) → ~×1,44 face ao tamanho base.
 */
export const clientBrandLogoSuperScaleIds = new Set<string>(["michelin"]);

/** Logos maiores que o desejado — −20% face ao tamanho base no UI. */
export const clientBrandLogoReducedScaleIds = new Set<string>(["intel", "portoSeguro"]);

/** +30% face ao tamanho base no UI. */
export const clientBrandLogoBoost130Ids = new Set<string>(["niteo"]);

/** +20% face ao tamanho base — BV Financeira e Sascar. */
export const clientBrandLogoBoost120Ids = new Set<string>(["bvFinanceira", "sascar"]);

/** +10% face ao tamanho base. */
export const clientBrandLogoBoost110Ids = new Set<string>([
  "arbit",
  "interfile",
  "bradesco",
  "cip",
  "einstein",
  "fuseIt",
  "act",
]);

export const clientBrands: ClientBrand[] = [
  { id: "itau" },
  { id: "bradesco" },
  { id: "bvFinanceira" },
  { id: "portoSeguro" },
  { id: "cip" },
  { id: "einstein" },
  { id: "uhc" },
  { id: "zurich" },
  { id: "intel" },
  { id: "arbit" },
  { id: "interfile" },
  { id: "niteo" },
  { id: "clarusIt" },
  { id: "entrustIt", logoFile: "entrust it.png" },
  { id: "extractta" },
  { id: "act" },
  { id: "fuseIt", logoFile: "Fuse It.png" },
  { id: "reply", logoFile: "Reply.png" },
  { id: "pwc" },
  { id: "sascar" },
  { id: "michelin", logoFile: "michelling.png" },
  { id: "tensar" },
];

/** Caminho público para PNG em `public/logos/` (nunca URLs externas). */
export function localLogoPublicPath(id: string, logoFile?: string): string {
  const file = logoFile ?? `${id}.png`;
  return `/logos/${encodeURIComponent(file)}`;
}
