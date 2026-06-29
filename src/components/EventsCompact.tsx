import { Link } from "react-router-dom";
import { medicalEvents } from "../data/medicalEvents";
import { SectionReveal } from "./SectionReveal";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export function EventsCompact() {
  const topEvents = medicalEvents.slice(0, 3);

  return (
    <SectionReveal id="events" className="py-16 bg-background border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="text-left max-w-3xl mb-10">
          <span className="text-[11px] uppercase tracking-[3px] font-semibold text-gold">
            HỘI NGHỊ · DIỄN ĐÀN · HỘI THẢO
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-medical-navy italic tracking-tight leading-tight mt-2 mb-3">
            Kết nối chuyên môn và cập nhật những tiến bộ mới trong y khoa.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {topEvents.map((event) => (
            <div key={event.id} className="bg-surface border border-border rounded-xl p-5 hover:border-gold transition-all duration-300">
              <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-wider bg-gold-light px-2 py-0.5 rounded">
                {event.type}
              </span>
              <h4 className="text-sm font-bold text-medical-navy mt-3 line-clamp-2 leading-snug">
                {event.title}
              </h4>
              <div className="flex flex-wrap gap-3 text-[10px] text-text-secondary mt-2 font-mono">
                {event.date && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </span>
                )}
                {event.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/hoat-dong"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-medical-navy uppercase tracking-[1.5px] hover:text-gold transition-colors"
        >
          Xem tất cả hoạt động
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </SectionReveal>
  );
}