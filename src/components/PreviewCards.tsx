import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";
import { ArrowRight, Building2, BookOpen, Activity } from "lucide-react";

const cards = [
  {
    icon: Building2,
    title: "Hội nghị & Diễn đàn",
    desc: "Cập nhật những tiến bộ mới nhất trong lĩnh vực Điều trị Đau.",
    link: "#events",
    label: "Xem chi tiết"
  },
  {
    icon: BookOpen,
    title: "Góc kiến thức Y khoa",
    desc: "Bài viết chuyên sâu về kiểm soát cơn đau và phục hồi vận động.",
    link: "#knowledge",
    label: "Xem chi tiết"
  },
  {
    icon: Activity,
    title: "Vấn đề thường gặp",
    desc: "Dấu hiệu, triệu chứng và hướng xử trí bệnh lý cơ xương khớp.",
    link: "#pain-points",
    label: "Xem chi tiết"
  }
];

export function PreviewCards() {
  return (
    <SectionReveal
      id="preview"
      className="py-20 bg-background border-b border-border"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.title}>
                <a
                  href={card.link}
                  className="block border border-border rounded-2xl p-8 bg-surface hover:border-gold hover:shadow-[0_8px_30px_rgba(11,42,74,0.06)] transition-all duration-300 group h-full"
                >
                  <div className="w-12 h-12 rounded-[14px] bg-gold-light flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-medical-navy mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-light leading-relaxed mb-5">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-medical-navy uppercase tracking-[1.5px] group-hover:text-gold transition-colors">
                    {card.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </SectionReveal>
  );
}