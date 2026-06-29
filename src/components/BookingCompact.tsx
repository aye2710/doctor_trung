import { Link } from "react-router-dom";
import { SectionReveal } from "./SectionReveal";
import { doctorProfile } from "../data/doctorProfile";
import { Calendar, ArrowRight } from "lucide-react";

export function BookingCompact() {
  const displayHospital = doctorProfile.hospital.replace(/^\[|\]$/g, "");

  return (
    <SectionReveal id="booking" className="py-16 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="bg-medical-navy rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
              Bắt đầu hành trình điều trị đau đúng cách.
            </h2>
            <p className="text-sm text-white/70 font-light mt-2">
              Đăng ký lịch hẹn chính thức thông qua hệ thống phân phối lịch khám của {displayHospital}.
            </p>
          </div>
          <Link
            to="/dat-lich"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-primary text-sm font-semibold px-6 py-3 rounded-full transition-all whitespace-nowrap shadow-md"
          >
            <Calendar className="w-4 h-4" />
            Đặt lịch khám
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionReveal>
  );
}