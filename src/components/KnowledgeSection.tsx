import { articles } from "../data/articles";
import { ArticleCard } from "./ArticleCard";
import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";

export function KnowledgeSection() {
  return (
    <SectionReveal
      id="knowledge"
      className="py-20 bg-background relative border-b border-border"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-medical-blue font-bold">
            GÓC KIẾN THỨC Y KHOA
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-medical-navy italic tracking-tight leading-tight mt-2 mb-4">
            Hiểu đúng để chăm sóc Cơ Xương Khớp đúng cách.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light">
            Cung cấp các thông tin y khoa chính quy, bài viết hướng dẫn phòng ngừa và kiểm soát cơn đau khớp dựa trên các cơ sở nghiên cứu lâm sàng tin cậy.
          </p>
        </div>

        {/* 6 Articles Grid */}
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <StaggerItem key={article.id}>
              <ArticleCard article={article} />
            </StaggerItem>
          ))}
        </StaggerReveal>

      </div>
    </SectionReveal>
  );
}
