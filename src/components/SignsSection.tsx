import { PersonStanding, UserRound, User, CircleUser, UserX, UserRoundX } from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";

interface SignItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const signs: SignItem[] = [
  {
    icon: <PersonStanding className="w-12 h-12" />,
    title: "Đau khớp gối",
    desc: "Đau nhức khi đi lại, lên xuống cầu thang",
  },
  {
    icon: <UserRound className="w-12 h-12" />,
    title: "Đau vai gáy",
    desc: "Cứng cổ, khó xoay đầu, tê bì cánh tay",
  },
  {
    icon: <User className="w-12 h-12" />,
    title: "Đau cột sống",
    desc: "Đau mỏi thắt lưng khi ngồi hoặc đứng lâu",
  },
  {
    icon: <CircleUser className="w-12 h-12" />,
    title: "Thoát vị đĩa đệm",
    desc: "Đau buốt lan xuống mông, chân, tê râm ran",
  },
  {
    icon: <UserX className="w-12 h-12" />,
    title: "Thoái hóa khớp",
    desc: "Cứng khớp buổi sáng, sưng đau theo thời tiết",
  },
  {
    icon: <UserRoundX className="w-12 h-12" />,
    title: "Hạn chế vận động",
    desc: "Khó cúi, xoay người, giảm linh hoạt cơ thể",
  },
];

export function SignsSection() {
  return (
    <SectionReveal
      id="signs"
      className="py-16 md:py-20 bg-gradient-to-b from-background to-soft-blue"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-medical-blue font-bold">
            DẤU HIỆU CẢNH BÁO
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-medical-navy italic tracking-tight leading-tight mt-2 mb-3">
            Dấu hiệu bạn không nên bỏ qua
          </h2>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">
            Nếu bạn gặp một trong những dấu hiệu dưới đây, đã đến lúc lắng nghe cơ thể nhiều hơn.
          </p>
        </div>

        {/* 6 Icon Cards Grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {signs.map((sign) => (
            <StaggerItem key={sign.title}>
              <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-primary-blue flex flex-col items-center gap-4 group h-full">
                
                {/* Large person icon */}
                <div className="w-24 h-24 rounded-full bg-light-blue flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300 shrink-0">
                  {sign.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-heading text-medical-navy font-bold group-hover:text-primary-blue transition-colors">
                  {sign.title}
                </h3>

                {/* One-line description */}
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light font-sans">
                  {sign.desc}
                </p>

              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

      </div>
    </SectionReveal>
  );
}
