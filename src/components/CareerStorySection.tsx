import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const timelineItems = [
  {
    num: "01",
    title: "Khởi đầu với ngành y",
    period: "Học viện Quân Y (2006 - 2012)",
    content: "Tốt nghiệp Bác sĩ đa khoa tại Học viện Quân Y, đặt nền móng y khoa vững chắc và rèn luyện y đức nghề nghiệp."
  },
  {
    num: "02",
    title: "Kinh nghiệm Nội tổng hợp",
    period: "Bệnh viện Xanh Pôn (2013 - 2019)",
    content: "Công tác tại khoa Nội tổng hợp, trực tiếp thăm khám và điều trị cho hàng ngàn bệnh nhân."
  },
  {
    num: "03",
    title: "Đào tạo chuyên sâu",
    period: "Đại học Y Hà Nội (2016 - 2018)",
    content: "Nâng cao chuyên môn, định hướng phát triển theo con đường Điều trị đau và Gây mê Hồi sức."
  },
  {
    num: "04",
    title: "Gây mê Hồi sức & Điều trị đau",
    period: "Bệnh viện Bưu Điện (2019 - nay)",
    content: "Tập trung vào các phương pháp can thiệp giảm đau không xâm lấn, không phẫu thuật."
  },
  {
    num: "05",
    title: "Đào tạo quốc tế & Chuyên sâu",
    period: "PRF Symposium, Pain Fellowship",
    content: "Cập nhật y khoa tiên tiến qua các khóa đào tạo quốc tế: PRF Symposium (6.0 CME Châu Âu), Global Online Pain Fellowship (12 tháng)."
  }
];

export function CareerStorySection() {
  return (
    <SectionReveal
      id="career-story"
      className="py-16 bg-primary text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-base uppercase tracking-[3px] font-semibold text-secondary">
            HÀNH TRÌNH HỌC VẤN
          </span>
          <h2 className="text-2xl md:text-3xl font-heading text-white tracking-tight leading-tight mt-2 mb-3">
            Mỗi dấu mốc chuyên môn đều bắt đầu từ mong muốn giúp người bệnh thoát khỏi cơn đau.
          </h2>
        </div>

        <div className="relative flex flex-col gap-8 md:gap-10 pl-5 md:pl-10 border-l border-white/20 text-left max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            >
              <div className="absolute -left-[22px] md:-left-[39px] top-1 w-3 h-3 rounded-full border-2 border-secondary bg-primary transition-all duration-300 group-hover:scale-125 group-hover:bg-secondary" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
                <div className="md:col-span-4 flex flex-col gap-0.5">
                  <span className="text-2xl md:text-3xl font-heading text-secondary/50 font-semibold leading-none">
                    {item.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-secondary mt-0.5">
                    {item.period}
                  </span>
                </div>
                <div className="md:col-span-8 flex flex-col gap-1">
                  <h3 className="text-base md:text-lg font-heading text-white group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/70 leading-relaxed font-sans">
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