import { Link } from "react-router-dom";
import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";
import { Brain, Monitor, Zap, TriangleAlert, Flame, ArrowRight } from "lucide-react";

const serviceIcons = [Brain, Monitor, Zap, TriangleAlert, Flame];

const services = [
  {
    title: "Từ trường xuyên sọ (TMS)",
    desc: "Kích thích từ trường lên vỏ não giúp giảm đau thần kinh trung ương, đau mãn tính — không xâm lấn, không dùng thuốc.",
    tag: "Công nghệ cao"
  },
  {
    title: "Điều trị đau cổ vai gáy",
    desc: "Chẩn đoán chính xác nguyên nhân và áp dụng phác đồ can thiệp giảm đau phù hợp giúp phục hồi vận động vùng cổ vai gáy.",
    tag: "Thế mạnh"
  },
  {
    title: "Điều trị đau dây thần kinh",
    desc: "Can thiệp vào các điểm đau thần kinh ngoại biên bằng sóng cao tần và kỹ thuật block thần kinh dưới hướng dẫn siêu âm.",
    tag: "Thế mạnh"
  },
  {
    title: "Điều trị đau xương cụt",
    desc: "Giảm áp lực vùng xương cụt kết hợp điều trị nguyên nhân nền — cải thiện tư thế ngồi và vận động hàng ngày.",
    tag: "Chuyên sâu"
  },
  {
    title: "Điều trị đau sau Zona",
    desc: "Kiểm soát cơn đau rát bỏng dai dẳng sau Zona bằng phác đồ đa tầng kết hợp can thiệp thần kinh và vật lý trị liệu.",
    tag: "Chuyên sâu"
  }
];

export function ServicesCompact() {
  return (
    <SectionReveal id="services" className="py-24 bg-gradient-to-b from-background to-blue-50/30 border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[3px] font-semibold text-secondary">
            DỊCH VỤ ĐIỀU TRỊ
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary leading-tight mt-3 mb-4">
            Chuyên sâu trong từng phương pháp
          </h2>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
            5 dịch vụ trọng tâm — từ công nghệ cao đến can thiệp chuyên sâu, đáp ứng đa dạng tình trạng đau.
          </p>
        </div>

        <StaggerReveal className="flex flex-wrap justify-center gap-6 md:gap-8">
          {services.map((svc, i) => {
            const Icon = serviceIcons[i];
            return (
              <StaggerItem
                key={svc.title}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.333px)] max-w-[400px]"
              >
                <div className="group border border-border/80 rounded-[20px] p-8 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(14,116,144,0.1)] hover:-translate-y-1.5 hover:border-primary transition-all duration-200 h-full flex flex-col border-t-2 border-t-secondary">
                  <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-6 shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[1.5px] font-semibold text-secondary mb-3">
                    {svc.tag}
                  </span>
                  <h3 className="text-lg md:text-xl font-heading font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed flex-1 line-clamp-3">
                    {svc.desc}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/60">
                    <Link
                      to="/chuyen-mon"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary transition-colors"
                    >
                      Xem chi tiết
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </SectionReveal>
  );
}