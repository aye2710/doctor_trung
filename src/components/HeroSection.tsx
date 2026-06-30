import { CheckCircle2, Phone, MessageCircle } from "lucide-react";

const benefits = [
  "Điều trị không phẫu thuật — can thiệp ít xâm lấn",
  "Công nghệ cao: TMS, RF/PRF, Block thần kinh",
  "Phác đồ cá nhân hóa theo từng bệnh nhân",
  "Đồng hành xuyên suốt quá trình điều trị",
];

const stats = [
  { value: "5+", label: "Năm kinh nghiệm" },
  { value: "3.000+", label: "Ca điều trị" },
  { value: "95%", label: "Hài lòng" },
  { value: "24/7", label: "Hỗ trợ tư vấn" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary-100 via-primary-100 to-[#D6EAFA] overflow-hidden"
    >
      {/* Background blur decorations */}
      <div className="absolute top-[-15%] right-[-8%] w-[500px] h-[500px] bg-[#4BB8FA]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-8%] w-[300px] h-[300px] bg-[#2C5EAD]/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[auto] lg:min-h-[860px] pb-32 lg:pb-36">
          
          {/* Left column - Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left justify-center py-16 lg:py-24">
            
            {/* Badge */}
            <span className="text-[10px] sm:text-xs uppercase tracking-[3px] font-semibold text-primary bg-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-4 sm:mb-5 lg:mb-6 shadow-sm">
              CHUYÊN KHOA ĐIỀU TRỊ ĐAU
            </span>

            {/* Chức danh */}
            <p className="text-sm sm:text-base lg:text-lg font-medium text-text-secondary/80 mb-1 sm:mb-2">
              Thạc sĩ. Bác sĩ
            </p>

            {/* Tên bác sĩ */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-900 leading-[1.08] mb-2 sm:mb-3 tracking-tight whitespace-nowrap">
              Đàm Quang Trung
            </h1>

            {/* Slogan */}
            <p className="text-sm sm:text-base lg:text-lg font-heading font-bold text-primary-900 leading-relaxed mb-4 sm:mb-5">
              <span className="text-text-secondary/60 font-normal">"</span>Lấy lại những ngày không còn đau<span className="text-text-secondary/60 font-normal">"</span>
            </p>

            {/* Mô tả */}
            <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed max-w-[480px] lg:max-w-[520px] mb-6 sm:mb-8">
              Chuyên điều trị các bệnh lý đau cột sống, khớp và thần kinh bằng phương pháp không phẫu thuật — giúp bệnh nhân trở lại cuộc sống khỏe mạnh, không còn đau.
            </p>

            {/* Bullet lợi ích */}
            <div className="flex flex-col gap-2 sm:gap-3 mb-8 sm:mb-10 w-full max-w-[480px]">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-900 hover:-translate-y-[2px] hover:shadow-lg text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-200"
              >
                Đặt lịch khám
              </a>
              <a
                href="https://zalo.me/097561215"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border border-primary hover:border-primary-900 text-primary text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:bg-primary-100"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                Chat Zalo
              </a>
              <a
                href="tel:097561215"
                className="inline-flex items-center justify-center gap-2 bg-white border border-primary hover:border-primary-900 text-primary text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:bg-primary-100"
              >
                <Phone className="w-4 h-4 text-primary" />
                Gọi ngay
              </a>
            </div>

          </div>

          {/* Right column - Doctor photo */}
          <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-center w-full min-h-[400px] lg:min-h-0">
            
            {/* Background ellipse shape */}
            <div className="absolute bottom-8 right-[5%] w-[420px] h-[500px] lg:w-[520px] lg:h-[600px] bg-[#4BB8FA]/25 rounded-full pointer-events-none" />

            {/* Doctor photo placeholder */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] aspect-[3/4] border-2 border-dashed border-border/60 rounded-[32px] flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
              <p className="text-xs sm:text-sm text-text-secondary/50 font-medium">Ảnh bác sĩ</p>
            </div>

          </div>

        </div>
      </div>

        {/* Stats Bar - full width */}
        <div className="relative -mt-20 lg:-mt-24 z-20 pb-12 lg:pb-16">
          <div className="bg-primary-900 shadow-[0_12px_30px_rgba(44,94,173,0.15)] py-7 md:py-8 w-full">
            <div className="max-w-[1280px] mx-auto px-8 md:px-14">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center text-center relative">
                    <span className="text-4xl md:text-5xl xl:text-[52px] font-extrabold text-white leading-none tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs md:text-sm text-white/80 mt-1.5 font-medium">
                      {stat.label}
                    </span>
                    {index < stats.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}
