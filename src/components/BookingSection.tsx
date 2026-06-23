import { doctorProfile } from "../data/doctorProfile";
import { AlertCircle, Calendar, Clock, MapPin, Landmark } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const BOOKING_URL = "#";

export function BookingSection() {
  // Strip bracket placeholders for production
  const displayHospital = doctorProfile.hospital.replace(/^\[|\]$/g, "");

  return (
    <SectionReveal
      id="booking"
      className="py-20 bg-soft-blue border-b border-border relative overflow-hidden"
    >
      {/* Graphic background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-sky-blue/20 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-medical-blue font-bold">
            LIÊN HỆ & ĐẶT LỊCH
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-medical-navy italic tracking-tight leading-tight mt-2 mb-4">
            Bắt đầu hành trình điều trị đau đúng cách.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light">
            Bác sĩ Trung hiện đang thực hiện lịch khám trực tiếp tại bệnh viện công. Người bệnh có thể đăng ký hẹn giờ chính thức thông qua cổng đăng ký y khoa để được hỗ trợ chu đáo.
          </p>
        </div>

        {/* Content Box layout */}
        <div className="bg-surface border border-border shadow-lg rounded-3xl p-6 md:p-10 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Clinic/Hospital details - 7 Columns */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            
            <div className="flex flex-col gap-6">
              
              {/* Landmark - Hospital name */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-light-blue text-primary-blue flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-text-secondary font-mono">Đơn vị công tác</h4>
                  <p className="text-base md:text-lg font-semibold text-medical-navy mt-1">
                    {displayHospital}
                  </p>
                  <p className="text-sm text-text-secondary mt-0.5 font-light">
                    Khoa Gây mê Hồi sức & Điều trị đau
                  </p>
                </div>
              </div>

              {/* Clinic location details */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-light-blue text-primary-blue flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-text-secondary font-mono">Địa điểm khám bệnh</h4>
                  <p className="text-base font-semibold text-medical-navy mt-1">
                    Phòng khám chuyên khoa Điều trị Đau - Khu khám bệnh theo yêu cầu
                  </p>
                  <p className="text-sm text-text-secondary mt-0.5 font-light">
                    Sảnh A, Toà nhà hành chính trung tâm bệnh viện
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-light-blue text-primary-blue flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-text-secondary font-mono">Lịch khám đề xuất</h4>
                  <p className="text-base font-semibold text-medical-navy mt-1">
                    Thứ Hai - Thứ Sáu (Sáng từ 07:30 - Chiều đến 16:30)
                  </p>
                  <p className="text-sm text-text-secondary mt-0.5 font-light">
                    * Lịch có thể thay đổi đột xuất dựa trên lịch mổ lâm sàng hoặc hội chẩn y khoa quốc tế.
                  </p>
                </div>
              </div>

            </div>

            {/* Mandatory Warning Alert Block */}
            <div className="bg-light-blue/40 border border-sky-blue rounded-2xl p-5 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-primary-blue flex-shrink-0 mt-0.5" />
              <div className="text-sm text-medical-navy leading-relaxed font-sans font-light">
                <strong className="font-semibold text-primary-blue block mb-0.5 uppercase tracking-wide text-xs">
                  Thông báo bắt buộc
                </strong>
                Bác sĩ Trung chỉ tiếp nhận khám lâm sàng thông qua hệ thống phân phối lịch hẹn trực tiếp của bệnh viện công tác. <span className="font-semibold text-medical-blue">Không tự tiếp nhận đặt lịch khám riêng bên ngoài hệ thống chính thức.</span>
              </div>
            </div>

          </div>

          {/* Action CTAs - 5 Columns */}
          <div className="lg:col-span-5 bg-soft-blue border border-border/80 rounded-2xl p-6 md:p-8 flex flex-col justify-center items-stretch gap-4 text-center">
            
            <h3 className="text-xl font-serif italic text-medical-navy font-bold">
              Đăng ký khám y khoa
            </h3>
            
            <p className="text-xs text-text-secondary leading-relaxed font-sans font-light mb-4">
              Nhấp vào liên kết dưới đây để chuyển tiếp trực tiếp sang hệ thống xếp hàng y tế trực tuyến của bệnh viện và chọn lịch của Bác sĩ Trung.
            </p>

            <a
              href={BOOKING_URL}
              className="inline-flex items-center justify-center gap-2 bg-primary-blue hover:bg-medical-blue text-white text-base font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              Đặt lịch khám tại bệnh viện
            </a>
            
            <a
              href={BOOKING_URL}
              className="inline-flex items-center justify-center bg-white hover:bg-light-blue text-medical-navy border border-border text-sm font-medium px-6 py-3 rounded-xl transition-all hover:border-primary-blue cursor-pointer"
            >
              Xem lịch khám chi tiết
            </a>

            <div className="text-[10px] text-text-secondary/70 mt-4 leading-normal">
              Hệ thống đăng ký hoàn toàn tự động thuộc hạ tầng số của bệnh viện chính thức. Không thu phí dịch vụ đặt chỗ.
            </div>

          </div>

        </div>

      </div>
    </SectionReveal>
  );
}

