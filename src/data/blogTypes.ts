export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "figure"; src: string; alt: string; caption?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Imagem temática para cards (fundo quase transparente) */
  coverImage: string;
  category: string;
  date: string;
  readMinutes: number;
  featured?: boolean;
  content: ContentBlock[];
};
