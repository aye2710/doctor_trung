import { doctorProfile } from "../data/doctorProfile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Strip brackets for display
  const displayHospital = doctorProfile.hospital.replace(/^\[|\]$/g, "");

  return (
    <footer className="bg-medical-navy text-white py-12 md:py-16 border-t border-white/10 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-10 border-b border-white/10">
          
          {/* Brand info */}
          <div className="flex flex-col gap-3">
            <span className="text-2xl font-serif font-bold tracking-tight">
              Dr. Trung
            </span>
            <span className="text-xs uppercase tracking-widest font-mono text-sky-blue font-semibold">
              Chuyên khoa Điều trị Đau
            </span>
            <p className="text-white/60 text-sm mt-2 max-w-sm font-sans font-light leading-relaxed">
              Đồng hành cùng người bệnh trong quá trình kiểm soát cơn đau, phục hồi vận động và duy trì chất lượng cuộc sống lâu dài.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/50">
              Liên kết nhanh
            </h4>
            <nav className="flex flex-col gap-2.5">
              <a href="#home" className="text-sm text-white/80 hover:text-sky-blue transition-colors w-fit">Giới thiệu chung</a>
              <a href="#doctor-profile" className="text-sm text-white/80 hover:text-sky-blue transition-colors w-fit">Thông tin bác sĩ</a>
              <a href="#certificates" className="text-sm text-white/80 hover:text-sky-blue transition-colors w-fit">Chứng nhận chuyên môn</a>
              <a href="#events" className="text-sm text-white/80 hover:text-sky-blue transition-colors w-fit">Hoạt động chuyên ngành</a>
              <a href="#booking" className="text-sm text-white/80 hover:text-sky-blue transition-colors w-fit">Đặt lịch khám</a>
            </nav>
          </div>

          {/* Contact / Hospital info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/50">
              Thông tin công tác
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/80 font-sans font-light leading-relaxed">
              <p>
                <strong className="font-semibold text-white">Đơn vị công tác chính thức:</strong><br />
                {displayHospital}
              </p>
              <p className="mt-2 text-xs text-white/60">
                * Mọi yêu cầu thăm khám chính quy vui lòng thực hiện thông qua cổng thông tin và lịch làm việc trực tiếp tại bệnh viện.
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start text-xs text-white/40 leading-relaxed">
          <div className="max-w-2xl">
            <strong className="text-white/60 uppercase block mb-1">Tuyên bố miễn trừ trách nhiệm (Medical Disclaimer)</strong>
            Nội dung trên website chỉ mang tính chất cung cấp thông tin tham khảo, hướng dẫn y khoa cơ bản và câu chuyện phát triển thương hiệu cá nhân của Bác sĩ Trung. Thông tin này không thay thế cho việc trực tiếp đến thăm khám, chẩn đoán cận lâm sàng và tư vấn y khoa chuyên sâu từ bác sĩ chuyên khoa Điều trị Đau tại bệnh viện chính thức.
          </div>
          <div className="whitespace-nowrap mt-2 md:mt-0 font-light">
            &copy; {currentYear} Dr. Trung. Bản quyền được bảo lưu.
          </div>
        </div>

      </div>
    </footer>
  );
}
