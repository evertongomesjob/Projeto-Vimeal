import { Link } from "react-router-dom";
import type { BlogPost } from "../data/blogTypes";
import { useLocale, type Locale } from "../context/LocaleContext";

function formatPostMeta(dateIso: string, readMin: number, locale: Locale) {
  const d = new Date(dateIso + "T12:00:00");
  const locStr = locale === "en" ? "en-US" : "pt-BR";
  const short = d.toLocaleDateString(locStr, { day: "2-digit", month: "short", year: "2-digit" });
  return `${readMin} min · ${short}`;
}

function PostCoverFeatured() {
  return (
    <svg viewBox="0 0 200 120" className="h-[55%] w-[55%] opacity-[0.85]" aria-hidden>
      <g fill="none" stroke="#fff" strokeWidth="2" opacity="0.9">
        <path d="M20 90 L40 70 L60 80 L80 50 L100 60 L120 30 L140 45 L160 25 L180 20" />
        <circle cx="120" cy="30" r="3" fill="#fff" />
        <circle cx="160" cy="25" r="3" fill="#fff" />
        <circle cx="180" cy="20" r="3" fill="#fff" />
      </g>
      <line x1="20" y1="100" x2="180" y2="100" stroke="#fff" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function PostCoverBars() {
  return (
    <svg viewBox="0 0 200 120" className="h-[55%] w-[55%] opacity-[0.85]" aria-hidden>
      <g fill="#fff" opacity="0.9">
        <rect x="30" y="80" width="20" height="25" rx="2" />
        <rect x="60" y="60" width="20" height="45" rx="2" />
        <rect x="90" y="40" width="20" height="65" rx="2" />
        <rect x="120" y="25" width="20" height="80" rx="2" />
        <rect x="150" y="15" width="20" height="90" rx="2" />
      </g>
    </svg>
  );
}

function PostCoverRadial() {
  return (
    <svg viewBox="0 0 200 120" className="h-[55%] w-[55%] opacity-[0.85]" aria-hidden>
      <g fill="none" stroke="#af4a43" strokeWidth="2" opacity="0.9">
        <circle cx="100" cy="60" r="36" />
        <circle cx="100" cy="60" r="22" />
        <line x1="100" y1="24" x2="100" y2="96" stroke="#d88a82" />
        <line x1="64" y1="60" x2="136" y2="60" stroke="#d88a82" />
      </g>
    </svg>
  );
}

type CardProps = {
  post: BlogPost;
  featured?: boolean;
  cover: "featured" | "accent" | "ink";
  locale: Locale;
};

function InsightCard({ post, featured, cover, locale }: CardProps) {
  const coverClass =
    cover === "featured"
      ? "bg-gradient-to-br from-brand to-brand-dark"
      : cover === "accent"
        ? "bg-gradient-to-br from-accent to-accent-ink"
        : "bg-gradient-to-br from-ink to-ink-2";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition duration-300 hover:-translate-y-1 hover:shadow-post-hover dark:border-white/10 dark:bg-zinc-900/40 ${
        featured ? "" : ""
      }`}
    >
      <Link to={`/blog/${post.slug}`} className="flex flex-1 flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
        <div
          className={`relative flex aspect-video items-center justify-center overflow-hidden ${coverClass}`}
          aria-hidden
        >
          {cover === "featured" && <PostCoverFeatured />}
          {cover === "accent" && <PostCoverBars />}
          {cover === "ink" && <PostCoverRadial />}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex flex-wrap gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.06em] text-ink-3 dark:text-zinc-400 sm:text-sm">
            <span className="font-semibold text-brand">{post.category}</span>
            <span aria-hidden>•</span>
            <span>{formatPostMeta(post.date, post.readMinutes, locale)}</span>
          </div>
          <h3
            className={`mb-2.5 font-bold leading-tight tracking-[-0.02em] text-ink dark:text-paper ${
              featured ? "text-xl sm:text-[28px]" : "text-[19px]"
            }`}
          >
            {post.title}
          </h3>
          <p className="flex-1 text-sm leading-normal text-ink-3 dark:text-zinc-400">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}

type Props = {
  posts: BlogPost[];
};

export function Insights({ posts }: Props) {
  const { t, locale } = useLocale();
  const [a, b, c] = posts;
  if (!a) return null;

  return (
    <section className="border-t border-line bg-white py-[120px] dark:border-white/10 dark:bg-zinc-950">
      <div className="container-site">
        <div className="mb-12 flex flex-col flex-wrap items-end justify-between gap-5 sm:flex-row">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-brand before:inline-block before:h-0.5 before:w-8 before:rounded-sm before:bg-brand before:content-['']">
              {t("insights.kicker")}
            </p>
            <h2 className="text-[clamp(36px,4.4vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink dark:text-paper">
              {t("insights.title")} <span className="text-brand">{t("insights.titleAccent")}</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-ink-3 dark:text-zinc-400">{t("insights.sub")}</p>
          </div>
          <Link
            to="/blog"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand px-5 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
          >
            {t("insights.ctaBlog")}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-6">
          <InsightCard post={a} featured cover="featured" locale={locale} />
          {b && <InsightCard post={b} cover="accent" locale={locale} />}
          {c && <InsightCard post={c} cover="ink" locale={locale} />}
        </div>
      </div>
    </section>
  );
}
