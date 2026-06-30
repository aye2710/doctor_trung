import { useState } from "react";
import { doctorProfile } from "../data/doctorProfile";
import { AlertCircle, Clock, MapPin, Landmark, Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

export function BookingFull() {
  const displayHospital = doctorProfile.hospital.replace(/^\[|\]$/g, "");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionReveal id="dat-lich" className="py-20 bg-background relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-base uppercase tracking-[3px] font-semibold text-secondary">
            LIÊN HỆ & ĐẶT LỊCH
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary leading-tight mt-3 mb-4">
            Bắt đầu hành trình điều trị đau đúng cách.
          </h1>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Bác sĩ Trung hiện đang thực hiện lịch khám trực tiếp tại bệnh viện công. Người bệnh có thể đăng ký hẹn giờ chính thức thông qua cổng đăng ký y khoa.
          </p>
        </div>

        <div className="bg-surface border border-border shadow-card rounded-[32px] p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch">
          
          {/* Left - Info */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[1px] text-text-secondary">Đơn vị công tác</h4>
                  <p className="text-base font-semibold text-primary mt-1">{displayHospital}</p>
                  <p className="text-sm text-text-secondary mt-0.5">Khoa Gây mê Hồi sức & Điều trị đau</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[1px] text-text-secondary">Địa điểm khám bệnh</h4>
                  <p className="text-base font-semibold text-primary mt-1">Phòng khám chuyên khoa Điều trị Đau</p>
                  <p className="text-sm text-text-secondary mt-0.5">Khu khám bệnh theo yêu cầu · Sảnh A</p>
                  <p className="text-xs text-text-secondary/70 mt-0.5">{doctorProfile.hospitalAddress}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[1px] text-text-secondary">Lịch khám</h4>
                  <p className="text-base font-semibold text-primary mt-1">Thứ Hai - Thứ Sáu</p>
                  <p className="text-sm text-text-secondary mt-0.5">Sáng 07:30 - 11:30 · Chiều 13:00 - 16:30</p>
                  <p className="text-xs text-text-secondary/70 mt-0.5">* Lịch có thể thay đổi dựa trên lịch mổ hoặc hội chẩn y khoa.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[1px] text-text-secondary">Liên hệ</h4>
                  <p className="text-base font-semibold text-primary mt-1">{doctorProfile.phone}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary mt-1">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-primary" />
                      Zalo: {doctorProfile.zalo}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-primary" />
                      {doctorProfile.email}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-primary-100/50 border border-primary-100 rounded-2xl p-5 flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-text-primary leading-relaxed">
                <strong className="font-semibold text-primary block mb-0.5 uppercase tracking-wide text-[10px]">
                  Thông báo bắt buộc
                </strong>
                Bác sĩ Trung chỉ tiếp nhận khám lâm sàng thông qua hệ thống phân phối lịch hẹn trực tiếp của bệnh viện. Không tự tiếp nhận đặt lịch khám riêng bên ngoài.
              </div>
            </div>

          </div>

          {/* Right - Booking Form */}
          <div className="lg:col-span-5">
            {submitted ? (
              <div className="bg-soft-blue rounded-[24px] p-8 md:p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
                <CheckCircle2 className="w-14 h-14 text-primary" />
                <h3 className="text-xl font-heading font-bold text-primary-900">
                  Đăng ký thành công
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
                  Cảm ơn bạn đã đăng ký. Bác sĩ Trung sẽ liên hệ xác nhận lịch hẹn trong thời gian sớm nhất qua số điện thoại bạn đã cung cấp.
                </p>
                <div className="flex flex-col items-center gap-2 mt-2">
                  <p className="text-xs text-text-caption">Hoặc liên hệ trực tiếp:</p>
                  <a
                    href={`tel:${doctorProfile.phone}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-900 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {doctorProfile.phone}
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-soft-blue rounded-[24px] p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-heading font-bold text-primary-900 mb-6">
                  Đăng ký lịch hẹn
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-[1px] mb-1.5">
                      Họ và tên <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nhập họ và tên"
                      className="w-full px-4 py-3 bg-white border border-border rounded-[14px] text-sm text-text-primary placeholder:text-text-caption/60 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(21,145,220,0.1)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-[1px] mb-1.5">
                      Số điện thoại <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Nhập số điện thoại"
                      className="w-full px-4 py-3 bg-white border border-border rounded-[14px] text-sm text-text-primary placeholder:text-text-caption/60 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(21,145,220,0.1)] transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-[1px] mb-1.5">
                        Ngày mong muốn
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-white border border-border rounded-[14px] text-sm text-text-primary outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(21,145,220,0.1)] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-[1px] mb-1.5">
                        Giờ mong muốn
                      </label>
                      <select className="w-full px-4 py-3 bg-white border border-border rounded-[14px] text-sm text-text-primary outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(21,145,220,0.1)] transition-all appearance-none bg-no-repeat bg-[length:16px] bg-[right_14px_center]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%235F7285' viewBox='0 0 16 16'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E")` }}>
                        <option value="">Chọn giờ</option>
                        <option value="07:30-08:00">07:30 - 08:00</option>
                        <option value="08:00-09:00">08:00 - 09:00</option>
                        <option value="09:00-10:00">09:00 - 10:00</option>
                        <option value="10:00-11:00">10:00 - 11:00</option>
                        <option value="11:00-11:30">11:00 - 11:30</option>
                        <option value="13:00-14:00">13:00 - 14:00</option>
                        <option value="14:00-15:00">14:00 - 15:00</option>
                        <option value="15:00-16:00">15:00 - 16:00</option>
                        <option value="16:00-16:30">16:00 - 16:30</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-[1px] mb-1.5">
                      Triệu chứng
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mô tả triệu chứng bạn đang gặp phải..."
                      className="w-full px-4 py-3 bg-white border border-border rounded-[14px] text-sm text-text-primary placeholder:text-text-caption/60 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(21,145,220,0.1)] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-900 text-white text-sm font-semibold px-6 py-3.5 rounded-[14px] transition-all shadow-sm cursor-pointer mt-1"
                  >
                    <Send className="w-4 h-4" />
                    Gửi đăng ký
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>

      </div>
    </SectionReveal>
  );
}
