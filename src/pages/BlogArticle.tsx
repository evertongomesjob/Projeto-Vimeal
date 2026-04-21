import { Link, Navigate, useParams } from "react-router-dom";
import { ArticleBody } from "../components/ArticleBody";
import { useLocale, type Locale } from "../context/LocaleContext";
import { getPostBySlug, blogPosts } from "../data/blogPosts";

function formatDate(iso: string, locale: Locale) {
  const locStr = locale === "en" ? "en-US" : "pt-BR";
  return new Date(iso + "T12:00:00").toLocaleDateString(locStr, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const { t, locale } = useLocale();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="bg-white pb-20 pt-28 dark:bg-zinc-950 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-slate-500 dark:text-zinc-500" aria-label={t("blogArticle.trailAria")}>
          <Link to="/" className="hover:text-brand">
            {t("blogArticle.breadcrumbHome")}
          </Link>
          <span className="mx-2 text-slate-300 dark:text-zinc-600">/</span>
          <Link to="/blog" className="hover:text-brand">
            {t("blogArticle.breadcrumbBlog")}
          </Link>
        </nav>

        <header className="mt-8 border-b border-slate-200 pb-10 dark:border-zinc-800">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">{post.category}</p>
          <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl sm:leading-tight">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-zinc-400">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-zinc-500">
            <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
            <span aria-hidden className="text-slate-300 dark:text-zinc-600">
              ·
            </span>
            <span>{t("blogArticle.readMinutes", { n: post.readMinutes })}</span>
            <span aria-hidden className="text-slate-300 dark:text-zinc-600">
              ·
            </span>
            <span>Vimeal</span>
          </div>
        </header>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-surface-muted shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <img src={post.coverImage} alt="" className="max-h-[min(320px,40vh)] w-full object-cover" loading="eager" />
        </div>

        <div className="pt-10">
          <ArticleBody blocks={post.content} />
        </div>

        <footer className="mt-16 border-t border-slate-200 pt-10 dark:border-zinc-800">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
            {t("blogArticle.backToBlog")}
          </Link>
        </footer>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-slate-200 px-4 pt-16 dark:border-zinc-800 sm:px-6 lg:px-8">
        <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">{t("blogArticle.continueReading")}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/blog/${p.slug}`}
                className="block rounded-xl border border-slate-200 bg-surface-muted p-4 transition hover:border-brand/30 dark:border-zinc-700 dark:bg-zinc-900/60"
              >
                <span className="text-sm font-medium text-brand">{p.category}</span>
                <p className="mt-2 font-display font-semibold leading-snug text-slate-900 dark:text-white">{p.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
