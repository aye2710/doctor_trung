import { CheckCircle2, Phone, MessageCircle } from "lucide-react";

const benefits = [
  "Điều trị không phẫu thuật — can thiệp ít xâm lấn",
  "Công nghệ cao: TMS, RF/PRF, Block thần kinh",
  "Phác đồ cá nhân hóa theo từng bệnh nhân",
  "Đồng hành xuyên suốt quá trình điều trị",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center bg-[#FFFBEB] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-amber-200/40 rounded-full blur-[80px] lg:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-amber-100/30 rounded-full blur-[60px] lg:blur-[80px] pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-2 relative z-10">
        
        {/* Left column - Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left px-5 sm:px-8 md:px-12 lg:px-0 py-12 sm:py-16 lg:py-24 xl:py-28">
          
          {/* Badge */}
          <span className="text-[10px] sm:text-xs uppercase tracking-[3px] font-semibold text-primary bg-primary-light px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-4 sm:mb-5 lg:mb-6">
            CHUYÊN KHOA ĐIỀU TRỊ ĐAU
          </span>

          {/* Chức danh */}
          <p className="text-sm sm:text-base lg:text-lg font-medium text-text-secondary/80 mb-1 sm:mb-2">
            Thạc sĩ. Bác sĩ
          </p>

          {/* Tên bác sĩ */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary leading-[1.08] mb-3 sm:mb-4 tracking-tight whitespace-nowrap">
            Đàm Quang Trung
          </h1>

          {/* Mô tả */}
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed max-w-[480px] lg:max-w-[520px] mb-6 sm:mb-8">
            Chuyên điều trị các bệnh lý đau cột sống, khớp và thần kinh bằng phương pháp không phẫu thuật — giúp bệnh nhân trở lại cuộc sống khỏe mạnh, không còn đau.
          </p>

          {/* Bullet lợi ích */}
          <div className="flex flex-col gap-2 sm:gap-3 mb-8 sm:mb-10 w-full max-w-[480px]">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-200"
            >
              Đặt lịch khám
            </a>
            <a
              href="https://zalo.me/097561215"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border border-border hover:border-primary/30 text-text-primary text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-secondary" />
              Chat Zalo
            </a>
            <a
              href="tel:097561215"
              className="inline-flex items-center justify-center gap-2 bg-white border border-border hover:border-primary/30 text-text-primary text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-secondary" />
              Gọi ngay
            </a>
          </div>

        </div>

        {/* Right column - Doctor photo */}
        <div className="lg:col-span-6 relative flex justify-center items-center w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[700px]">
          
          {/* Photo placeholder */}
          <div className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[500px] aspect-[3/4] border border-dashed border-border rounded-2xl flex items-center justify-center bg-surface/50">
            <p className="text-xs sm:text-sm text-text-secondary/50 font-medium">Ảnh bác sĩ</p>
          </div>

        </div>

      </div> 
    </section>
  );
}