import { doctorProfile } from "../data/doctorProfile";
import { Calendar } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const BOOKING_URL = "#";

export function BookingSection() {
  const displayHospital = doctorProfile.hospital.replace(/^\[|\]$/g, "");

  return (
    <SectionReveal
      id="booking"
      className="py-20 bg-background border-b border-border relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Booking CTA Banner */}
        <div className="bg-medical-navy rounded-2xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="text-left max-w-xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
              Bắt đầu hành trình điều trị đau đúng cách.
            </h2>
            <p className="text-sm md:text-base text-white/70 font-light mt-3 leading-relaxed">
              Đăng ký lịch hẹn chính thức thông qua hệ thống phân phối lịch khám của {displayHospital}.
            </p>
          </div>

          <a
            href={BOOKING_URL}
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-[#d4b85a] text-medical-navy text-sm font-semibold px-8 py-3.5 rounded-full transition-all whitespace-nowrap shadow-md cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            Đặt lịch khám tại bệnh viện
          </a>

        </div>
      </div>
    </SectionReveal>
  );
}