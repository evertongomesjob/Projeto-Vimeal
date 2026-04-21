import { Link } from "react-router-dom";
import { useLocale } from "../context/LocaleContext";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pb-8 pt-20 text-paper dark:bg-black">
      <div className="container-site">
        <div className="mb-[60px] grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <div className="flex items-baseline gap-0.5 text-[28px] font-bold tracking-[-0.02em]">
              <span className="inline-block origin-left scale-x-[0.62] text-paper" aria-hidden>
                _
              </span>
              <span className="text-brand-light">Vimeal</span>
            </div>
            <p className="mt-4 max-w-[300px] text-sm leading-[1.55] text-paper/60">{t("footer.tagline")}</p>
          </div>
          <div>
            <h4 className="mb-4 text-[13px] font-bold">{t("footer.explore")}</h4>
            <Link to="/#servicos" className="block py-1.5 text-sm text-paper/[0.65] transition hover:text-brand-light">
              {t("nav.services")}
            </Link>
            <Link to="/#stack" className="block py-1.5 text-sm text-paper/[0.65] transition hover:text-brand-light">
              {t("nav.stack")}
            </Link>
            <Link to="/#processo" className="block py-1.5 text-sm text-paper/[0.65] transition hover:text-brand-light">
              {t("nav.process")}
            </Link>
            <Link to="/#sobre" className="block py-1.5 text-sm text-paper/[0.65] transition hover:text-brand-light">
              {t("nav.about")}
            </Link>
          </div>
          <div>
            <h4 className="mb-4 text-[13px] font-bold">{t("footer.content")}</h4>
            <Link to="/blog" className="block py-1.5 text-sm text-paper/[0.65] transition hover:text-brand-light">
              {t("footer.blog")}
            </Link>
            <span className="block py-1.5 text-sm text-paper/40">{t("footer.cases")}</span>
            <span className="block py-1.5 text-sm text-paper/40">{t("footer.newsletter")}</span>
          </div>
          <div>
            <h4 className="mb-4 text-[13px] font-bold">{t("footer.contact")}</h4>
            <a
              href="mailto:contato@vimeal.com.br"
              className="block py-1.5 text-sm text-paper/[0.65] transition hover:text-brand-light"
            >
              {t("footer.email")}
            </a>
            <a
              href="https://www.linkedin.com/company/vimeal-business-intelligence/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-1.5 text-sm text-paper/[0.65] transition hover:text-brand-light"
            >
              {t("footer.linkedIn")}
            </a>
            <span className="block py-1.5 text-sm text-paper/40">{t("footer.gitHub")}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-white/[0.08] pt-6 text-[13px] text-paper/50 sm:flex-row">
          <span>{t("footer.copyright", { year })}</span>
          <span className="uppercase tracking-wide">{t("footer.location")}</span>
        </div>
      </div>
    </footer>
  );
}
