import { Link } from "react-router-dom";
import { SectionReveal } from "./SectionReveal";
import { ArrowRight } from "lucide-react";

const painPoints = [
  {
    title: "Đau cổ vai gáy",
    desc: "Đau mỏi vùng cổ, lan xuống vai và cánh tay",
    image: "/images/pain-points/pain-neck.webp",
  },
  {
    title: "Đau dây thần kinh",
    desc: "Đau nhói, tê bì dọc theo đường đi của dây thần kinh",
    image: "/images/pain-points/pain-nerve.jpg",
  },
  {
    title: "Đau xương cụt",
    desc: "Đau nhức khi ngồi lâu, khó chịu khi đứng lên",
    image: "/images/pain-points/pain-coccyx.avif",
  },
  {
    title: "Đau sau Zona",
    desc: "Đau rát bỏng dai dẳng sau khi tổn thương da đã lành",
    image: "/images/pain-points/pain-zona.webp",
  },
];

export function PainPointsCompact() {
  return (
    <SectionReveal id="pain-points" className="py-20 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-base uppercase tracking-[3px] font-semibold text-secondary">
            TRIỆU CHỨNG THƯỜNG GẶP
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mt-2 mb-3">
            Bạn đang gặp phải những cơn đau này?
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Đau kéo dài không chỉ ảnh hưởng đến sức khỏe mà còn làm giảm chất lượng cuộc sống. Bác sĩ Trung chuyên điều trị các triệu chứng đau phổ biến sau.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {painPoints.map((point, i) => (
            <div key={i} className="bg-surface border border-border rounded-2xl overflow-hidden text-left hover:border-secondary hover:shadow-md transition-all duration-200 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                  {point.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed mt-1">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/chuyen-mon"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            Xem chi tiết từng vấn đề
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionReveal>
  );
}