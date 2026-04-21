import type { ContentBlock } from "../data/blogTypes";

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-slate-700 dark:text-zinc-300">
      {blocks.map((block, i) => {
        const key = `${i}-${block.type}`;
        switch (block.type) {
          case "p":
            return (
              <p key={key} className="text-slate-700 dark:text-zinc-300">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={key}
                className="font-display mt-10 scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 first:mt-0 dark:text-white"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={key} className="font-display mt-8 text-xl font-semibold text-slate-900 dark:text-white">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={key} className="list-disc space-y-2 pl-6 text-slate-700 marker:text-brand dark:text-zinc-300">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "blockquote":
            return (
              <blockquote
                key={key}
                className="border-l-4 border-brand/40 bg-brand/[0.04] py-3 pl-5 pr-4 text-slate-800 italic dark:bg-brand/[0.08] dark:text-zinc-200"
              >
                {block.text}
              </blockquote>
            );
          case "figure":
            return (
              <figure key={key} className="my-8 overflow-hidden rounded-xl border border-slate-200/80 bg-surface-muted shadow-sm dark:border-zinc-700 dark:bg-zinc-900/40">
                <img
                  src={block.src}
                  alt={block.alt}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {block.caption ? (
                  <figcaption className="border-t border-slate-200/80 px-4 py-3 text-center text-sm text-slate-500 dark:border-zinc-700 dark:text-zinc-500">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
