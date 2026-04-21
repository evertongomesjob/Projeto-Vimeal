/** Resolve chave pontilhada (ex.: `nav.blog`) ou com índices (ex.: `a.0.b`) em objeto aninhado. */
export function translate(root: unknown, path: string): string {
  const parts = path.split(".");
  let cur: unknown = root;
  for (const p of parts) {
    if (cur === null || cur === undefined) return path;
    if (typeof cur !== "object") return path;
    const n = Number(p);
    if (!Number.isNaN(n) && Array.isArray(cur)) {
      cur = cur[n];
    } else if (p in (cur as object)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return path;
    }
  }
  return typeof cur === "string" ? cur : path;
}
