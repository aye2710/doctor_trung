import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";

interface JourneyStep {
  num: string;
  title: string;
  desc: string;
}

export function PatientJourney() {
  const steps: JourneyStep[] = [
    {
      num: "01",
      title: "Đặt lịch khám",
      desc: "Hẹn giờ chính quy qua tổng đài hoặc cổng đăng ký của bệnh viện để tránh chờ đợi."
    },
    {
      num: "02",
      title: "Khám lâm sàng",
      desc: "Bác sĩ trực tiếp lắng nghe bệnh sử, kiểm tra khớp và đo tầm vận động thực tế."
    },
    {
      num: "03",
      title: "Chẩn đoán hình ảnh",
      desc: "Chỉ định siêu âm khớp, X-quang hoặc MRI khi thực sự cần thiết để chẩn đoán chính xác."
    },
    {
      num: "04",
      title: "Tư vấn phác đồ",
      desc: "Giải thích rõ ràng tình trạng bệnh lý và đề xuất phác đồ điều trị bảo tồn cá nhân hóa."
    },
    {
      num: "05",
      title: "Theo dõi y khoa",
      desc: "Kiểm tra mức độ đáp ứng thuốc, tình trạng giảm đau khớp định kỳ để có điều chỉnh."
    },
    {
      num: "06",
      title: "Phục hồi vận động",
      desc: "Hướng dẫn các bài tập bổ trợ tại nhà giúp gia tăng biên độ vận động khớp bền vững."
    }
  ];

  return (
    <SectionReveal
      id="journey"
      className="py-20 bg-background relative border-b border-border"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-medical-blue font-bold">
            HÀNH TRÌNH THĂM KHÁM
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-medical-navy italic tracking-tight leading-tight mt-2 mb-4">
            Một hành trình rõ ràng từ thăm khám đến phục hồi vận động.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light">
            Quy trình y khoa minh bạch, tuân thủ các quy tắc lâm sàng chính quy, lấy lợi ích vận động lâu dài của người bệnh làm trọng tâm hàng đầu.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Horizontal connecting track line for desktop (hidden on mobile) */}
          <div className="absolute top-[20px] left-[5%] right-[5%] h-[2px] bg-border pointer-events-none hidden lg:block" />

          {/* Staggered grid listing the steps */}
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 text-left pl-6 border-l border-border md:pl-8 lg:border-l-0 lg:pl-0 relative">
            
            {steps.map((step) => (
              <StaggerItem key={step.num} className="relative">
                {/* Node Dot marker */}
                {/* Desktop center dot, Mobile absolute left line dot */}
                <div className="absolute -left-[35px] md:-left-[43px] lg:left-1/2 lg:-translate-x-1/2 top-1.5 lg:top-3.5 w-3.5 h-3.5 rounded-full border-2 border-primary-blue bg-background z-10" />

                <div className="flex flex-col lg:items-center lg:text-center mt-0 lg:mt-8 gap-2">
                  {/* Step Ordinal number */}
                  <span className="text-xl font-serif italic text-primary-blue font-bold leading-none bg-background lg:px-2 z-10">
                    {step.num}
                  </span>
                  
                  {/* Step Title */}
                  <h3 className="text-base font-semibold text-text-primary mt-1 font-sans">
                    {step.title}
                  </h3>

                  {/* Step Brief Description */}
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light font-sans lg:max-w-[180px]">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}

          </StaggerReveal>
        </div>

      </div>
    </SectionReveal>
  );
}
