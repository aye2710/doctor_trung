import { Link } from "react-router-dom";
import { SectionReveal } from "./SectionReveal";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { medicalEvents } from "../data/medicalEvents";

export function ActivityPreview() {
  const topEvents = medicalEvents.slice(0, 3);

  return (
    <SectionReveal id="activities" className="py-20 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-base uppercase tracking-[3px] font-semibold text-secondary">
            HOẠT ĐỘNG CHUYÊN MÔN
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mt-2 mb-3">
            Kết nối chuyên môn và cập nhật những tiến bộ mới
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Bác sĩ Trung thường xuyên tham gia các hội nghị, diễn đàn và chương trình đào tạo trong nước và quốc tế, không ngừng nâng cao chuyên môn trong lĩnh vực Điều trị Đau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {topEvents.map((event) => (
            <div key={event.id} className="bg-surface border border-border rounded-2xl p-6 hover:border-secondary hover:shadow-md transition-all duration-200">
              <span className="text-[10px] uppercase tracking-[1.5px] font-semibold text-secondary bg-primary-light px-2.5 py-1 rounded-full">
                {event.type}
              </span>
              <h4 className="text-sm font-heading font-bold text-primary mt-3 leading-snug line-clamp-2">
                {event.title}
              </h4>
              <div className="flex flex-wrap gap-3 text-xs text-text-secondary mt-2">
                {event.date && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </span>
                )}
                {event.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {event.location}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/hoat-dong"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            Xem tất cả hoạt động
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionReveal>
  );
}