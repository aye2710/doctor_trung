import { doctorProfile } from "../data/doctorProfile";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const displayHospital = doctorProfile.hospital.replace(/^\[|\]$/g, "");

  return (
    <footer className="bg-medical-navy text-white pt-40 pb-10 -mt-20 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-10 border-b border-white/10">
          
          {/* Brand */}
          <div>
            <span className="text-xl font-bold tracking-tight">
              Dr. Trung
            </span>
            <span className="block text-[9px] uppercase tracking-[3px] text-sky-blue font-semibold mt-0.5">
              Chuyên khoa Điều trị Đau
            </span>
            <p className="text-sm text-white/55 font-light mt-4 max-w-xs leading-relaxed">
              Đồng hành cùng người bệnh trong quá trình kiểm soát cơn đau, phục hồi vận động và duy trì chất lượng cuộc sống lâu dài.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[2px] text-white/40 font-semibold mb-4">
              Liên kết nhanh
            </h4>
            <nav className="flex flex-col gap-2.5">
              <a href="#home" className="text-sm text-white/70 hover:text-gold transition-colors font-light">Giới thiệu</a>
              <a href="#certificates" className="text-sm text-white/70 hover:text-gold transition-colors font-light">Chuyên môn</a>
              <a href="#events" className="text-sm text-white/70 hover:text-gold transition-colors font-light">Hoạt động</a>
              <a href="#knowledge" className="text-sm text-white/70 hover:text-gold transition-colors font-light">Kiến thức</a>
              <a href="#booking" className="text-sm text-white/70 hover:text-gold transition-colors font-light">Đặt lịch khám</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[2px] text-white/40 font-semibold mb-4">
              Thông tin công tác
            </h4>
            <p className="text-sm text-white/70 font-light">
              <strong className="text-white font-semibold">Đơn vị công tác chính thức:</strong><br />
              {displayHospital}
            </p>
            <p className="text-xs text-white/35 mt-3">
              * Mọi yêu cầu thăm khám vui lòng thực hiện thông qua cổng thông tin bệnh viện.
            </p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs text-white/35">
          <span>&copy; {currentYear} Dr. Trung. Bản quyền được bảo lưu.</span>
          <span className="mt-2 md:mt-0">Medical Disclaimer: Thông tin chỉ mang tính tham khảo.</span>
        </div>

      </div>
    </footer>
  );
}