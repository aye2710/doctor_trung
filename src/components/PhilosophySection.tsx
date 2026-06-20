import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";
import { ShieldCheck, Target, Users, Activity } from "lucide-react";

interface PhilosophyItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function PhilosophySection() {
  const philosophies: PhilosophyItem[] = [
    {
      num: "01",
      title: "Điều trị đúng nguyên nhân",
      desc: "Không chỉ dừng lại ở việc làm dịu cơn đau tức thời bằng thuốc giảm đau. Bác sĩ tập trung tìm kiếm nguồn gốc thực thể của bệnh lý thông qua chẩn đoán lâm sàng và hình ảnh chính xác để chữa trị từ căn nguyên.",
      icon: Target
    },
    {
      num: "02",
      title: "Ưu tiên bảo tồn khi phù hợp",
      desc: "Luôn cân nhắc tối đa các phương pháp điều trị bảo tồn không phẫu thuật như tiêm khớp giảm đau, dùng thuốc nội khoa thế hệ mới kết hợp tập luyện trị liệu trước khi có các chỉ định can thiệp ngoại khoa sâu hơn.",
      icon: ShieldCheck
    },
    {
      num: "03",
      title: "Cá nhân hóa theo từng người bệnh",
      desc: "Mỗi người bệnh có một độ tuổi, đặc thù công việc và thể trạng khớp khác nhau. Phác đồ điều trị được thiết kế riêng biệt để tương thích tối đa với điều kiện sinh hoạt và mục tiêu vận động cá nhân của người bệnh.",
      icon: Users
    },
    {
      num: "04",
      title: "Theo dõi và phục hồi lâu dài",
      desc: "Quá trình chăm sóc không kết thúc khi cơn đau thuyên giảm. Bác sĩ đồng hành cùng người bệnh thiết lập các bài tập phục hồi chức năng chủ động, theo dõi sát sao tiến độ để duy trì sức mạnh cơ xương khớp bền vững.",
      icon: Activity
    }
  ];

  return (
    <SectionReveal
      id="philosophy"
      className="py-20 bg-soft-blue/30 border-b border-border"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-medical-blue font-bold">
            TRIẾT LÝ ĐIỀU TRỊ
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-medical-navy italic tracking-tight leading-tight mt-2 mb-4">
            Những nguyên tắc trong hành trình chăm sóc người bệnh.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light">
            Không chỉ là kỹ thuật y học, triết lý điều trị là kim chỉ nam giúp Bác sĩ Trung đồng hành lâu dài cùng người bệnh, lấy sự an toàn và vận động bền vững làm giá trị cốt lõi.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {philosophies.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.num}>
                <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 text-left flex gap-6 hover:border-primary-blue hover:shadow-xs transition-all duration-300 h-full group">
                  
                  {/* Left Column Icon */}
                  <div className="w-12 h-12 rounded-xl bg-light-blue flex items-center justify-center flex-shrink-0 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Right Column Content */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono font-bold text-text-secondary/60">
                      NGUYÊN TẮC {item.num}
                    </span>
                    <h3 className="text-lg md:text-xl font-serif italic text-medical-navy font-bold group-hover:text-primary-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light font-sans">
                      {item.desc}
                    </p>
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
