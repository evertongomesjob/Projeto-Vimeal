import { Link } from "react-router-dom";
import type { BlogPost } from "../data/blogTypes";

type Props = {
  post: BlogPost;
  /** Cards mais compactos na home (3 colunas) */
  compact?: boolean;
};

function formatDate(iso: string, variant: "long" | "short") {
  const d = new Date(iso + "T12:00:00");
  if (variant === "short") {
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
  }
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export function BlogPostCard({ post, compact }: Props) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black shadow-soft transition hover:border-brand/40 hover:shadow-card ${
        compact ? "min-h-[240px]" : "min-h-[280px]"
      }`}
    >
      {/* Foto só como textura + véu preto semitransparente (sem tom azulado) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={post.coverImage}
          alt=""
          className="h-full w-full scale-105 object-cover opacity-[0.2] transition duration-500 group-hover:scale-110 group-hover:opacity-[0.28]"
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/82"
          aria-hidden
        />
      </div>

      <div className={`relative z-10 flex flex-1 flex-col ${compact ? "p-5" : "p-6"} text-white`}>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/75">
          {post.category}
        </span>
        <h3
          className={`font-display mt-3 font-semibold leading-snug text-white ${
            compact ? "text-base sm:text-lg" : "text-lg sm:text-xl"
          }`}
        >
          <Link to={`/blog/${post.slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            {post.title}
          </Link>
        </h3>
        <p
          className={`mt-3 flex-1 leading-relaxed text-white/85 ${
            compact ? "line-clamp-4 text-sm" : "line-clamp-5 text-sm sm:text-[0.9375rem]"
          }`}
        >
          {post.excerpt}
        </p>
        <div
          className={`mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-white/15 pt-4 text-xs text-white/55`}
        >
          <time dateTime={post.date}>{formatDate(post.date, compact ? "short" : "long")}</time>
          <span>{post.readMinutes} min{compact ? "" : " de leitura"}</span>
        </div>
      </div>
    </article>
  );
}
