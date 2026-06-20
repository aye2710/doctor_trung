import type { Article } from "../data/articles";
import { ArrowUpRight, Clock } from "lucide-react";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group focus-within:outline-2 focus-within:outline-primary-blue">
      
      {/* Article Cover Image Container */}
      <div className="aspect-[16/10] overflow-hidden bg-light-blue relative">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
          loading="lazy"
        />
        {/* Category Badge overlay */}
        <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-xs text-medical-blue text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
          {article.category}
        </span>
      </div>

      {/* Article Details */}
      <div className="p-5 md:p-6 flex-1 flex flex-col justify-between text-left">
        <div className="flex flex-col gap-3">
          
          {/* Metadata row */}
          <div className="flex gap-4 text-[10px] font-mono font-semibold text-text-secondary/70">
            <span>{article.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-serif italic text-medical-navy font-bold leading-snug group-hover:text-primary-blue transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Summary description paragraph */}
          <p className="text-sm text-text-secondary leading-relaxed font-light font-sans line-clamp-3">
            {article.summary}
          </p>

        </div>

        {/* Read Article CTA Link */}
        <div className="pt-5 mt-5 border-t border-border/60">
          <a
            href="#booking" // In simple frontend, navigate to booking/contact for details
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary-blue group-hover:text-medical-blue uppercase tracking-widest focus:outline-none"
            aria-label={`Đọc bài viết: ${article.title}`}
          >
            Đọc bài viết
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>

    </article>
  );
}
