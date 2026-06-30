import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { GraduationCap, HeartPulse, BookOpen, Stethoscope, Globe } from "lucide-react";

const timelineItems = [
  {
    num: "01",
    icon: GraduationCap,
    title: "Khởi đầu với ngành y",
    period: "Học viện Quân Y (2006 - 2012)",
    content: "Tốt nghiệp Bác sĩ đa khoa — Học viện Quân Y."
  },
  {
    num: "02",
    icon: HeartPulse,
    title: "Kinh nghiệm Nội tổng hợp",
    period: "Bệnh viện Xanh Pôn (2013 - 2019)",
    content: "6 năm kinh nghiệm tại khoa Nội tổng hợp, thăm khám và điều trị cho hàng ngàn bệnh nhân."
  },
  {
    num: "03",
    icon: BookOpen,
    title: "Đào tạo chuyên sâu",
    period: "Đại học Y Hà Nội (2016 - 2018)",
    content: "Định hướng chuyên sâu Điều trị đau và Gây mê Hồi sức."
  },
  {
    num: "04",
    icon: Stethoscope,
    title: "Gây mê Hồi sức & Điều trị đau",
    period: "Bệnh viện Bưu Điện (2019 - nay)",
    content: "Can thiệp giảm đau không xâm lấn, không phẫu thuật."
  },
  {
    num: "05",
    icon: Globe,
    title: "Đào tạo quốc tế",
    period: "PRF Symposium, Pain Fellowship",
    content: "PRF Symposium (Hà Lan-Pháp) — 6.0 CME Châu Âu. Global Online Pain Fellowship (12 tháng)."
  }
];

export function CareerStorySection() {
  return (
    <SectionReveal
      id="career-story"
      className="py-14 bg-primary text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4BB8FA]/20 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-base uppercase tracking-[3px] font-semibold text-white/80">
            HÀNH TRÌNH HỌC VẤN
          </span>
          <h2 className="text-xl md:text-2xl font-heading text-white tracking-tight leading-tight mt-2">
            Từ Học viện Quân Y đến Bệnh viện Bưu Điện
          </h2>
        </div>

        <div className="relative flex flex-col gap-6 md:gap-8 pl-10 md:pl-16 border-l border-white/20 text-left max-w-4xl mx-auto">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              >
                <div className="absolute -left-[42px] md:-left-[60px] top-1 w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-white/50 bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent">

  
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start">
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-1 md:w-48 shrink-0">
                    <span className="text-3xl md:text-4xl font-heading text-white/60 font-semibold leading-none">
                      {item.num}
                    </span>
                    <span className="text-xs md:text-sm uppercase tracking-wider font-semibold text-white/70">
                      {item.period}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base md:text-lg font-heading text-white group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </SectionReveal>
  );
}