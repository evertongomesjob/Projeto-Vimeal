import { FormEvent, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { useLocale } from "../context/LocaleContext";

const CONTACT_EMAIL = "contato@vimeal.com.br";
const LINKEDIN_HREF = "https://www.linkedin.com/company/vimeal-business-intelligence/";

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 6l10 8 10-8" />
    </svg>
  );
}

function IconLinkedIn() {
  return <FaLinkedin className="h-[18px] w-[18px]" aria-hidden />;
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function Contact() {
  const { t } = useLocale();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const empresa = String(data.get("empresa") ?? "").trim();
    const mensagem = String(data.get("mensagem") ?? "").trim();

    const body = [
      `${t("contact.mailName")}: ${nome}`,
      `${t("contact.mailEmail")}: ${email}`,
      empresa ? `${t("contact.mailCompany")}: ${empresa}` : "",
      "",
      `${t("contact.mailMessage")}:`,
      mensagem,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t("contact.mailSubject"))}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    form.reset();
  }

  return (
    <section id="contato" className="scroll-mt-24 bg-paper-2 py-[120px] dark:bg-zinc-900/30">
      <div className="container-site">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-brand before:inline-block before:h-0.5 before:w-8 before:rounded-sm before:bg-brand before:content-['']">
              {t("contact.kicker")}
            </p>
            <h2 className="mb-6 text-[clamp(40px,5vw,64px)] font-bold leading-none tracking-[-0.03em] text-ink dark:text-paper">
              {t("contact.title")} <span className="text-brand">{t("contact.titleAccent")}</span>
            </h2>
            <p className="mb-10 text-[17px] leading-[1.55] text-ink-3 dark:text-zinc-400">{t("contact.lead")}</p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-line bg-white text-brand dark:border-white/10 dark:bg-zinc-900">
                  <IconMail />
                </div>
                <div>
                  <div className="mb-0.5 font-mono text-xs font-semibold uppercase tracking-[0.06em] text-ink-3 dark:text-zinc-400 sm:text-sm">
                    {t("contact.labelEmail")}
                  </div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-base font-semibold text-ink hover:text-brand dark:text-paper">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-line bg-white text-brand dark:border-white/10 dark:bg-zinc-900">
                  <IconLinkedIn />
                </div>
                <div>
                  <div className="mb-0.5 font-mono text-xs font-semibold uppercase tracking-[0.06em] text-ink-3 dark:text-zinc-400 sm:text-sm">
                    {t("contact.labelLinkedIn")}
                  </div>
                  <a
                    href={LINKEDIN_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-ink hover:text-brand dark:text-paper"
                  >
                    /company/vimeal-business-intelligence
                  </a>
                </div>
              </div>
              <div className="flex gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-line bg-white text-brand dark:border-white/10 dark:bg-zinc-900">
                  <IconClock />
                </div>
                <div>
                  <div className="mb-0.5 font-mono text-xs font-semibold uppercase tracking-[0.06em] text-ink-3 dark:text-zinc-400 sm:text-sm">
                    {t("contact.labelHours")}
                  </div>
                  <p className="text-base font-semibold text-ink dark:text-paper">{t("contact.hoursValue")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-10 dark:border-white/10 dark:bg-zinc-900">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="mb-4 sm:mb-0">
                  <label htmlFor="nome" className="mb-1.5 block text-[13px] font-semibold text-ink dark:text-paper">
                    {t("contact.formName")}
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={t("contact.phName")}
                    className="w-full rounded-[10px] border border-line bg-paper px-3.5 py-3 text-[15px] text-ink outline-none transition placeholder:text-ink-4 focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(175,74,67,0.1)] dark:border-white/10 dark:bg-zinc-950 dark:text-paper dark:focus:bg-zinc-900"
                  />
                </div>
                <div className="mb-4 sm:mb-0">
                  <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold text-ink dark:text-paper">
                    {t("contact.formEmail")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={t("contact.phEmail")}
                    className="w-full rounded-[10px] border border-line bg-paper px-3.5 py-3 text-[15px] text-ink outline-none transition placeholder:text-ink-4 focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(175,74,67,0.1)] dark:border-white/10 dark:bg-zinc-950 dark:text-paper dark:focus:bg-zinc-900"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="empresa" className="mb-1.5 block text-[13px] font-semibold text-ink dark:text-paper">
                  {t("contact.formCompany")}
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  autoComplete="organization"
                  placeholder={t("contact.phCompany")}
                  className="w-full rounded-[10px] border border-line bg-paper px-3.5 py-3 text-[15px] text-ink outline-none transition placeholder:text-ink-4 focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(175,74,67,0.1)] dark:border-white/10 dark:bg-zinc-950 dark:text-paper dark:focus:bg-zinc-900"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mensagem" className="mb-1.5 block text-[13px] font-semibold text-ink dark:text-paper">
                  {t("contact.formMessage")}
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={4}
                  placeholder={t("contact.phMessage")}
                  className="min-h-[100px] w-full resize-y rounded-[10px] border border-line bg-paper px-3.5 py-3 text-[15px] text-ink outline-none transition placeholder:text-ink-4 focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(175,74,67,0.1)] dark:border-white/10 dark:bg-zinc-950 dark:text-paper dark:focus:bg-zinc-900"
                />
              </div>
              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-[10px] border-0 bg-brand py-4 text-[15px] font-semibold text-white transition hover:bg-brand-dark"
              >
                {t("contact.submit")}
              </button>
              <p className="mt-4 text-center text-xs text-ink-3 dark:text-zinc-500">{t("contact.footNote")}</p>
              {sent && (
                <p className="mt-3 text-center text-sm font-medium text-brand" role="status">
                  {t("contact.sentHint")} {CONTACT_EMAIL}.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
