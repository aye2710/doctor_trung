import { doctorProfile } from "../data/doctorProfile";
import { AlertCircle, Calendar, Clock, MapPin, Landmark, Phone, Mail, MessageCircle } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

export function BookingFull() {
  const displayHospital = doctorProfile.hospital.replace(/^\[|\]$/g, "");

  return (
    <SectionReveal id="dat-lich" className="py-20 bg-background relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-[3px] font-semibold text-gold">
            LIÊN HỆ & ĐẶT LỊCH
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-medical-navy italic tracking-tight leading-tight mt-2 mb-4">
            Bắt đầu hành trình điều trị đau đúng cách.
          </h1>
          <p className="text-sm text-text-secondary font-light max-w-2xl mx-auto">
            Bác sĩ Trung hiện đang thực hiện lịch khám trực tiếp tại bệnh viện công. Người bệnh có thể đăng ký hẹn giờ chính thức thông qua cổng đăng ký y khoa.
          </p>
        </div>

        <div className="bg-surface border border-border shadow-lg rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gold-light text-gold flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[1px] text-text-secondary font-mono">Đơn vị công tác</h4>
                  <p className="text-base font-semibold text-medical-navy mt-1">{displayHospital}</p>
                  <p className="text-sm text-text-secondary mt-0.5 font-light">Khoa Gây mê Hồi sức & Điều trị đau</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gold-light text-gold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[1px] text-text-secondary font-mono">Địa điểm khám bệnh</h4>
                  <p className="text-base font-semibold text-medical-navy mt-1">Phòng khám chuyên khoa Điều trị Đau</p>
                  <p className="text-sm text-text-secondary mt-0.5 font-light">Khu khám bệnh theo yêu cầu · Sảnh A</p>
                  <p className="text-xs text-text-secondary/70 mt-0.5">{doctorProfile.hospitalAddress}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gold-light text-gold flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[1px] text-text-secondary font-mono">Lịch khám</h4>
                  <p className="text-base font-semibold text-medical-navy mt-1">Thứ Hai - Thứ Sáu</p>
                  <p className="text-sm text-text-secondary mt-0.5 font-light">Sáng 07:30 - 11:30 · Chiều 13:00 - 16:30</p>
                  <p className="text-xs text-text-secondary/70 mt-0.5">* Lịch có thể thay đổi dựa trên lịch mổ hoặc hội chẩn y khoa.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gold-light text-gold flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[1px] text-text-secondary font-mono">Liên hệ</h4>
                  <p className="text-base font-semibold text-medical-navy mt-1">{doctorProfile.phone}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary mt-1 font-light">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-gold" />
                      Zalo: {doctorProfile.zalo}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-gold" />
                      {doctorProfile.email}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-gold-light/40 border border-gold/30 rounded-2xl p-5 flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div className="text-sm text-medical-navy leading-relaxed font-light">
                <strong className="font-semibold text-gold block mb-0.5 uppercase tracking-wide text-[10px]">
                  Thông báo bắt buộc
                </strong>
                Bác sĩ Trung chỉ tiếp nhận khám lâm sàng thông qua hệ thống phân phối lịch hẹn trực tiếp của bệnh viện. Không tự tiếp nhận đặt lịch khám riêng bên ngoài.
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 bg-soft-blue border border-border/80 rounded-2xl p-6 md:p-8 flex flex-col justify-center items-stretch gap-4 text-center">
            <h3 className="text-xl font-heading text-medical-navy font-bold">
              Đăng ký khám y khoa
            </h3>
            <p className="text-xs text-text-secondary font-light mb-2">
              Nhấp vào liên kết dưới đây để chuyển tiếp sang hệ thống đặt lịch trực tuyến của bệnh viện.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-medical-navy hover:bg-medical-blue text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Đặt lịch khám tại bệnh viện
            </a>
            <div className="text-[10px] text-text-secondary/70 mt-2">
              Hệ thống đăng ký tự động thuộc hạ tầng số của bệnh viện. Không thu phí dịch vụ đặt chỗ.
            </div>
          </div>

        </div>

      </div>
    </SectionReveal>
  );
}