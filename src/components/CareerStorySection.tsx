import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";

interface TimelineItem {
  num: string;
  title: string;
  period: string;
  content: string;
}

export function CareerStorySection() {
  const timelineItems: TimelineItem[] = [
    {
      num: "01",
      title: "Khởi đầu với ngành y",
      period: "Đào tạo Y khoa Chính quy",
      content: "Bắt đầu hành trình y học với việc học tập chính quy tại trường đại học y khoa danh tiếng. Đây là giai đoạn nền móng giúp tiếp thu sâu sắc kiến thức y khoa nền tảng, giải phẫu hệ vận động và rèn luyện y đức nghề nghiệp."
    },
    {
      num: "02",
      title: "Lựa chọn chuyên ngành Cơ Xương Khớp",
      period: "Định Hướng Chuyên Sâu Lâm Sàng",
      content: "Thấu hiểu sự ảnh hưởng to lớn của các cơn đau cơ xương khớp đến khả năng vận động và tự chủ cuộc sống của người trung niên và người già, bác sĩ quyết định cống hiến chuyên sâu cho lĩnh vực Cơ Xương Khớp."
    },
    {
      num: "03",
      title: "Phát triển kinh nghiệm lâm sàng",
      period: "Thực hành tại Bệnh viện Hạng I",
      content: "Trực tiếp tham gia công tác thăm khám, chẩn đoán cận lâm sàng và điều trị nội khoa chuyên sâu cho hàng ngàn lượt bệnh nhân trong môi trường thực tiễn bệnh viện lớn đầy áp lực."
    },
    {
      num: "04",
      title: "Cập nhật y khoa liên tục",
      period: "Nghiên cứu & Đào tạo chuyên khoa",
      content: "Liên tục tham gia các khóa đào tạo nâng cao kỹ năng lâm sàng (như can thiệp khớp ít xâm lấn dưới hướng dẫn siêu âm) và báo cáo nghiên cứu khoa học tại các hội thảo y khoa chuyên ngành lớn."
    },
    {
      num: "05",
      title: "Đồng hành cùng người bệnh hôm nay",
      period: "Sứ mệnh Phục hồi Vận động Chủ động",
      content: "Áp dụng phương châm điều trị bảo tồn kết hợp cá nhân hóa chuyên sâu, hỗ trợ người bệnh duy trì thói quen tập luyện khoa học để tối ưu hóa tầm vận động tự nhiên và bảo vệ khớp trọn đời."
    }
  ];

  return (
    <SectionReveal
      id="career-story"
      className="py-20 bg-medical-navy text-white relative overflow-hidden"
    >
      {/* Decorative background grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-medical-blue/20 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-sky-blue font-bold">
            CÂU CHUYỆN & HÀNH TRÌNH NGHỀ NGHIỆP
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic text-white tracking-tight leading-tight mt-2 mb-4">
            Mỗi dấu mốc chuyên môn đều bắt đầu từ mong muốn giúp người bệnh vận động tốt hơn.
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed font-light">
            Nhìn lại những chặng đường phát triển chuyên môn lâm sàng chính quy, củng cố nền tảng kiến thức và năng lực điều trị khớp cột sống toàn diện.
          </p>
        </div>

        {/* Timeline Layout */}
        <StaggerReveal className="relative flex flex-col gap-12 md:gap-16 pl-6 md:pl-12 border-l border-white/20 text-left">
          
          {timelineItems.map((item, index) => (
            <StaggerItem key={index} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full border-2 border-primary-blue bg-medical-navy transition-all duration-300 group-hover:scale-120 group-hover:bg-primary-blue" />
              
              {/* Timeline content card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                
                {/* Milestone Number & Period (4 columns) */}
                <div className="md:col-span-4 flex flex-col gap-1">
                  <span className="text-4xl md:text-5xl font-serif italic text-sky-blue/80 font-semibold leading-none">
                    {item.num}
                  </span>
                  <span className="text-xs uppercase tracking-widest font-mono text-primary-blue font-bold mt-1">
                    {item.period}
                  </span>
                </div>

                {/* Milestone Title & Paragraph (8 columns) */}
                <div className="md:col-span-8 flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-serif italic text-white group-hover:text-sky-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed font-light font-sans">
                    {item.content}
                  </p>
                </div>

              </div>
            </StaggerItem>
          ))}

        </StaggerReveal>

      </div>
    </SectionReveal>
  );
}
