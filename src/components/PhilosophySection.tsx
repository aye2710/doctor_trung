import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";
import { Radio, Brain, Zap, Scan, Stethoscope } from "lucide-react";

const treatments = [
  {
    icon: Radio,
    title: "Sóng cao tần RF/PRF",
    desc: "Ứng dụng sóng cao tần tác động lên dây thần kinh ngoại biên, giúp giảm đau mạn tính kéo dài mà không cần phẫu thuật.",
  },
  {
    icon: Brain,
    title: "TMS - Từ trường xuyên sọ",
    desc: "Kích thích từ trường không xâm lấn lên vỏ não, điều chỉnh tín hiệu đau — giải pháp mới cho đau mạn tính.",
  },
  {
    icon: Zap,
    title: "Block thần kinh",
    desc: "Tiêm ức chế dẫn truyền thần kinh giúp giảm đau nhanh và tạo điều kiện cho vật lý trị liệu phục hồi.",
  },
  {
    icon: Scan,
    title: "Can thiệp dưới siêu âm",
    desc: "Tiêm thuốc chính xác vào vị trí tổn thương dưới hướng dẫn siêu âm, đảm bảo an toàn và hiệu quả cao.",
  },
  {
    icon: Stethoscope,
    title: "Điều trị nội khoa cá nhân hóa",
    desc: "Phác đồ thuốc và chế độ vận động được xây dựng riêng theo từng cơ địa, tình trạng bệnh và mức độ đau.",
  },
];

export function PhilosophySection() {
  return (
    <SectionReveal
      id="philosophy"
      className="py-24 bg-soft-blue"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="text-center max-w-[740px] mx-auto mb-20">
          <span className="text-base uppercase tracking-[3px] font-semibold text-secondary">
            ĐIỀU TRỊ KHÔNG PHẪU THUẬT
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mt-3 mb-4">
            Điều trị an toàn, hiệu quả và bền vững
          </h2>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Bác sĩ Trung áp dụng các phương pháp can thiệp giảm đau không xâm lấn, không phẫu thuật, giúp người bệnh kiểm soát cơn đau và cải thiện chất lượng cuộc sống.
          </p>
        </div>

        {/* Cards - centered layout */}
        <StaggerReveal className="flex flex-wrap justify-center gap-8 md:gap-10">
          {treatments.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.title}
                className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-26.667px)] max-w-[400px]"
              >
                <div className="group border border-border rounded-[24px] p-8 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_40px_rgba(14,116,144,0.12)] hover:-translate-y-[6px] hover:border-primary transition-all duration-300 h-full flex flex-col">
                  <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-light flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-[22px] h-[22px] md:w-6 md:h-6 text-primary" />
                  </div>
                  <h4 className="text-2xl md:text-[28px] leading-tight font-heading font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-base text-text-secondary leading-[1.7] line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>

      </div>
    </SectionReveal>
  );
}
