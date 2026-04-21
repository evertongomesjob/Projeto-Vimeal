/**
 * Gera public/logos/{id}.png — tenta várias fontes e domínios por marca.
 * Executar: node scripts/download-client-logos.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "logos");

/** id -> lista de domínios a tentar (ordem importa) */
const map = {
  itau: ["itau.com.br"],
  bradesco: ["bradesco.com.br"],
  bvFinanceira: ["bv.com.br"],
  portoSeguro: ["portoseguro.com.br"],
  cip: ["cip.org.br"],
  einstein: ["einstein.br"],
  uhc: ["unitedhealthgroup.com"],
  zurich: ["zurich.com.br"],
  intel: ["intel.com"],
  arbit: ["arbit.com.br"],
  interfile: ["interfile.com.br", "system.interfile.com.br", "interfile.com"],
  niteo: ["niteo.com.br"],
  clarusIt: ["clarus.com.br", "clarus.com"],
  entrustIt: ["entrust.com"],
  extractta: ["extractta.com.br"],
  act: ["act.com.br"],
  fuseIt: ["fuseit.com.br", "fuseit.com"],
  reply: ["reply.com"],
  pwc: ["pwc.com.br"],
  sascar: ["sascar.com.br"],
  michelin: ["michelin.com", "michelin.com.br"],
  tensar: ["tensarcorp.com", "tensar.com", "www.tensar.com"],
};

/** URLs por domínio (Clearbit → Google favicon → icon.horse) */
function urlsForDomain(domain) {
  return [
    `https://logo.clearbit.com/${domain}`,
    `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`,
    `https://icon.horse/icon/${domain}`,
  ];
}

function isPng(buf) {
  return (
    buf.length >= 8 &&
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47
  );
}

async function download(url, dest) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(url, { redirect: "follow", signal: controller.signal });
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 80) return false;
    const googleFav = url.includes("google.com/s2/favicons");
    if (!res.ok && !(googleFav && isPng(buf))) return false;
    fs.writeFileSync(dest, buf);
    return true;
  } catch {
    try {
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
    } catch {
      /* ignore */
    }
    return false;
  } finally {
    clearTimeout(t);
  }
}

fs.mkdirSync(outDir, { recursive: true });

for (const [id, domains] of Object.entries(map)) {
  const dest = path.join(outDir, `${id}.png`);
  let ok = false;
  outer: for (const domain of domains) {
    for (const url of urlsForDomain(domain)) {
      ok = await download(url, dest);
      if (ok) break outer;
    }
  }
  process.stdout.write(`${id}: ${ok ? "OK" : "FAIL"}\n`);
}

process.stdout.write(`\nPasta: ${outDir}\n`);
