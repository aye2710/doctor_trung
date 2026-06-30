import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";
import { Calendar, Stethoscope, FileText, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Đặt lịch hẹn",
    desc: "Đăng ký lịch khám qua tổng đài hoặc cổng bệnh viện."
  },
  {
    icon: Stethoscope,
    title: "Thăm khám & Chẩn đoán",
    desc: "Khám lâm sàng, chỉ định siêu âm/X-quang/MRI nếu cần."
  },
  {
    icon: FileText,
    title: "Tư vấn & Điều trị",
    desc: "Giải thích tình trạng và đề xuất phác đồ cá nhân hóa."
  },
  {
    icon: HeartPulse,
    title: "Phục hồi & Tái khám",
    desc: "Hướng dẫn bài tập tại nhà và theo dõi định kỳ."
  }
];

export function PatientJourney() {
  return (
    <SectionReveal
      id="journey"
      className="py-20 bg-soft-blue relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-base uppercase tracking-[3px] font-semibold text-secondary">
            QUY TRÌNH KHÁM
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mt-2 mb-3">
            Quy trình minh bạch, lấy lợi ích vận động lâu dài của người bệnh làm trọng tâm.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop horizontal track */}
          <div className="absolute top-[18px] left-[5%] right-[5%] h-[2px] bg-border pointer-events-none hidden lg:block" />

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-left relative">
            
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title} className="relative rounded-[24px] shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                  {/* Dot */}
                  <div className="w-9 h-9 rounded-full border-[2.5px] border-gold bg-background flex items-center justify-center mb-4 relative z-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-gold" />
                  </div>
                  <div>
                    <div className="mb-3">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="text-base font-bold text-medical-navy mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-text-secondary font-light leading-relaxed max-w-[200px]">
                      {step.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}

          </StaggerReveal>
        </div>

      </div>
    </SectionReveal>
  );
}