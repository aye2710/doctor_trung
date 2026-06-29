import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { SectionReveal } from "./SectionReveal";
import { ArrowRight } from "lucide-react";

export function KnowledgeCompact() {
  const topArticles = articles.slice(0, 3);

  return (
    <SectionReveal id="knowledge" className="py-16 bg-background border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="text-left max-w-3xl mb-10">
          <span className="text-[11px] uppercase tracking-[3px] font-semibold text-gold">
            GÓC KIẾN THỨC Y KHOA
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-medical-navy italic tracking-tight leading-tight mt-2 mb-3">
            Hiểu đúng để kiểm soát đau và chăm sóc sức khỏe đúng cách.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {topArticles.map((article) => (
            <div key={article.id} className="bg-surface border border-border rounded-xl overflow-hidden hover:border-gold hover:shadow-md transition-all duration-300 group">
              <div className="aspect-[16/10] bg-gradient-to-br from-light-blue to-sky-blue flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-medical-blue bg-white/80 px-3 py-1 rounded-full uppercase tracking-wider">
                  {article.category}
                </span>
              </div>
              <div className="p-4">
                <div className="flex gap-3 text-[10px] font-mono text-text-secondary/70 mb-2">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="text-sm font-bold text-medical-navy line-clamp-2 leading-snug group-hover:text-gold transition-colors">
                  {article.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/kien-thuc"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-medical-navy uppercase tracking-[1.5px] hover:text-gold transition-colors"
        >
          Xem tất cả bài viết
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </SectionReveal>
  );
}