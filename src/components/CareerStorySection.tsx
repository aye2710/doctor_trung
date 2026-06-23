import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

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
      period: "Học viện Quân Y (2006 - 2012)",
      content: "Tốt nghiệp Bác sĩ đa khoa tại Học viện Quân Y, một trong những trường đào tạo y khoa hàng đầu cả nước. Đây là giai đoạn nền móng giúp tiếp thu kiến thức y khoa nền tảng vững chắc và rèn luyện y đức nghề nghiệp."
    },
    {
      num: "02",
      title: "Kinh nghiệm Nội tổng hợp",
      period: "Bệnh viện Đa khoa Xanh Pôn (2013 - 2019)",
      content: "Công tác tại khoa Nội tổng hợp 2 của Bệnh viện Đa khoa Xanh Pôn, trực tiếp tham gia thăm khám, chẩn đoán và điều trị nội khoa cho hàng ngàn lượt bệnh nhân, tích lũy kinh nghiệm lâm sàng phong phú."
    },
    {
      num: "03",
      title: "Đào tạo chuyên sâu",
      period: "Đại học Y Hà Nội (2016 - 2018)",
      content: "Theo học chương trình đào tạo chuyên sâu tại Đại học Y Hà Nội, củng cố và nâng cao kiến thức chuyên môn, định hướng phát triển theo con đường điều trị đau và gây mê hồi sức."
    },
    {
      num: "04",
      title: "Gây mê Hồi sức & Điều trị đau",
      period: "Bệnh viện Bưu Điện (2019 - nay)",
      content: "Chuyển sang Bệnh viện Bưu Điện với vai trò Bác sĩ Gây mê Hồi sức & Điều trị đau, tập trung vào các phương pháp can thiệp giảm đau không xâm lấn, không phẫu thuật."
    },
    {
      num: "05",
      title: "Đào tạo quốc tế & Chuyên sâu",
      period: "PRF Symposium, Pain Fellowship & CME Quốc tế",
      content: "Liên tục cập nhật y khoa tiên tiến qua các khóa đào tạo quốc tế: PRF Symposium tại Hà Lan - Pháp (6.0 CME Châu Âu), Global Online Pain Fellowship (12 tháng), cùng nhiều chứng chỉ can thiệp giảm đau trong nước."
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
            Mỗi dấu mốc chuyên môn đều bắt đầu từ mong muốn giúp người bệnh thoát khỏi cơn đau.
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed font-light">
            Nhìn lại những chặng đường phát triển chuyên môn lâm sàng chính quy, củng cố nền tảng kiến thức và năng lực điều trị đau toàn diện.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative flex flex-col gap-12 md:gap-16 pl-6 md:pl-12 border-l border-white/20 text-left">
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
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
            </motion.div>
          ))}

        </div>

      </div>
    </SectionReveal>
  );
}
