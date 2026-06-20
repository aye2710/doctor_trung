import { doctorProfile } from "../data/doctorProfile";
import { Calendar, User } from "lucide-react";

// Helper function to clean placeholders for production-ready display
function formatData(value: string | undefined, fallback: string): string {
  if (!value || (value.startsWith("[") && value.endsWith("]"))) {
    return fallback;
  }
  return value;
}

export function HeroSection() {
  const displayName = formatData(doctorProfile.fullName, "Bác sĩ Trung");
  const displayDegree = formatData(doctorProfile.degree, "Bác sĩ Chuyên khoa II");
  const displayTitle = formatData(doctorProfile.hospitalTitle, "Bác sĩ Điều trị");
  const displayHospital = formatData(doctorProfile.hospital, "Bệnh viện đa khoa đầu ngành");

  const handleScrollToProfile = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("doctor-profile");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-background via-soft-blue to-background"
    >
      {/* Background graphic elements */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 bg-sky-blue/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/10 left-1/10 w-72 h-72 bg-light-blue/30 rounded-full blur-2xl pointer-events-none z-0" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column - Content (58%) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Label */}
          <span className="text-xs uppercase tracking-widest font-mono text-medical-blue font-bold bg-light-blue px-3.5 py-1.5 rounded-full mb-6">
            CHUYÊN KHOA CƠ XƯƠNG KHỚP
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-medical-navy italic leading-tight tracking-tight mb-4">
            {displayName}
          </h1>

          {/* Degree & Hospital Title */}
          <p className="text-lg md:text-xl text-medical-blue font-medium mb-2 font-sans">
            {displayDegree} · {displayTitle}
          </p>
          
          <p className="text-sm md:text-base text-text-secondary mb-6 font-mono font-medium">
            Hiện đang công tác tại <span className="text-medical-navy font-semibold">{displayHospital}</span>
          </p>

          {/* Short Introduction Paragraph */}
          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl font-light">
            {doctorProfile.shortIntroduction}
          </p>

          {/* Quote Block */}
          {doctorProfile.quote && (
            <div className="border-l-2 border-primary-blue pl-4 py-1 mb-8 max-w-lg italic text-medical-navy text-base md:text-lg font-serif">
              &ldquo;{doctorProfile.quote}&rdquo;
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 bg-primary-blue hover:bg-medical-blue text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-primary-blue cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              Đặt lịch khám tại bệnh viện
            </a>
            
            <a
              href="#doctor-profile"
              onClick={handleScrollToProfile}
              className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-light-blue text-medical-navy border border-border text-base font-medium px-8 py-3.5 rounded-full transition-all hover:border-primary-blue focus:outline-2 focus:outline-offset-2 focus:outline-primary-blue cursor-pointer"
            >
              <User className="w-5 h-5" />
              Tìm hiểu về bác sĩ
            </a>
          </div>

          {/* Short details / Trust points */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border w-full max-w-md">
            <div>
              <p className="text-xl md:text-2xl font-serif italic text-primary-blue font-bold">15+</p>
              <p className="text-xs text-text-secondary mt-1 font-light uppercase tracking-wider">Năm kinh nghiệm</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-serif italic text-primary-blue font-bold">Cá nhân</p>
              <p className="text-xs text-text-secondary mt-1 font-light uppercase tracking-wider">Điều trị chuyên sâu</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-serif italic text-primary-blue font-bold">Bảo tồn</p>
              <p className="text-xs text-text-secondary mt-1 font-light uppercase tracking-wider">Phục hồi vận động</p>
            </div>
          </div>

        </div>

        {/* Right column - Doctor Portrait (42%) */}
        <div className="lg:col-span-5 flex justify-center w-full lg:w-auto relative">
          {/* Circular/elliptical back vector graphic */}
          <div className="absolute inset-0 bg-gradient-to-br from-light-blue to-sky-blue/30 rounded-[36px] -rotate-3 scale-102 -z-10 pointer-events-none" />
          
          <div className="w-full max-w-md lg:max-w-full aspect-[4/5] rounded-[28px] md:rounded-[36px] overflow-hidden shadow-lg border-4 border-surface bg-surface flex items-center justify-center">
            <img
              src={doctorProfile.portraitImage}
              alt={`Ảnh chân dung Bác sĩ Trung`}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
              loading="eager"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
