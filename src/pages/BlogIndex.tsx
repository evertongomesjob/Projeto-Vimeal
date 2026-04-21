import { Link } from "react-router-dom";
import { BlogPostCard } from "../components/BlogPostCard";
import { useLocale, type Locale } from "../context/LocaleContext";
import { blogPosts } from "../data/blogPosts";

function formatDate(iso: string, locale: Locale) {
  const locStr = locale === "en" ? "en-US" : "pt-BR";
  return new Date(iso + "T12:00:00").toLocaleDateString(locStr, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

export function BlogIndex() {
  const { t, locale } = useLocale();
  const hero = sorted.find((p) => p.featured) ?? sorted[0];
  const rest = sorted.filter((p) => p.slug !== hero.slug);

  return (
    <div className="bg-white pb-20 pt-28 dark:bg-zinc-950 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">{t("blogIndex.kicker")}</p>
          <h1 className="font-display mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {t("blogIndex.title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-zinc-400">{t("blogIndex.intro")}</p>
        </header>

        {hero && (
          <article className="mt-14 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-card dark:border-zinc-700/50 dark:bg-transparent">
            <div className="grid gap-0 lg:grid-cols-5">
              <div className="relative flex min-h-[280px] flex-col justify-center overflow-hidden p-8 text-white lg:col-span-2 lg:p-10">
                <div className="pointer-events-none absolute inset-0">
                  <img
                    src={hero.coverImage}
                    alt=""
                    className="h-full w-full object-cover opacity-25 transition duration-500 hover:opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand/90 to-brand-dark/95" />
                </div>
                <div className="relative z-10">
                  <span className="text-sm font-semibold uppercase tracking-wide text-white/85">{t("blogIndex.featured")}</span>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-rose-100/90">{hero.category}</p>
                  <h2 className="font-display mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                    <Link to={`/blog/${hero.slug}`} className="hover:underline">
                      {hero.title}
                    </Link>
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/92">{hero.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
                    <time dateTime={hero.date}>{formatDate(hero.date, locale)}</time>
                    <span>{t("blogIndex.readMin", { n: hero.readMinutes })}</span>
                  </div>
                  <Link
                    to={`/blog/${hero.slug}`}
                    className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-surface-muted"
                  >
                    {t("blogIndex.readFull")}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center border-t border-slate-200/90 bg-gradient-to-br from-slate-50 via-[#faf9f8] to-[#fff3eb] p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] dark:border-zinc-700 dark:from-zinc-900/50 dark:via-zinc-900/60 dark:to-zinc-900/70 dark:shadow-none lg:col-span-3 lg:border-l lg:border-slate-200/90 lg:border-t-0 lg:p-10">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-zinc-500">
                  {t("blogIndex.sidebarTitle")}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600 dark:text-zinc-400">{t("blogIndex.sidebarBody")}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-zinc-300">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {t("blogIndex.bullet1")}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {t("blogIndex.bullet2")}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {t("blogIndex.bullet3")}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        )}

        <h2 className="font-display mt-16 text-2xl font-bold text-slate-900 dark:text-white">{t("blogIndex.allPosts")}</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {rest.map((post) => (
            <li key={post.slug}>
              <BlogPostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
