import { doctorProfile } from "../data/doctorProfile";
import { DoctorProfileCard } from "./DoctorProfileCard";
import { SectionReveal } from "./SectionReveal";

export function DoctorProfileSection() {
  return (
    <SectionReveal
      id="doctor-profile"
      className="py-20 bg-soft-blue/60 border-y border-border relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-medical-blue font-bold">
            THÔNG TIN BÁC SĨ
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-medical-navy italic tracking-tight leading-tight mt-2 mb-4">
            Chuyên môn được xây dựng từ quá trình học tập và thực hành lâm sàng.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light">
            Bác sĩ Trung hiện công tác trong lĩnh vực Cơ Xương Khớp, tập trung vào việc thăm khám, đánh giá, điều trị và theo dõi phục hồi vận động cho người bệnh.
          </p>
        </div>

        {/* Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Structural Card (4-5 Cols) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <DoctorProfileCard profile={doctorProfile} />
          </div>

          {/* Right Column - Storytelling narrative & workspace photo (7-8 Cols) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8 text-left">
            
            {/* Biography Paragraphs */}
            <div className="flex flex-col gap-4 text-base md:text-lg text-text-secondary leading-relaxed font-light">
              {doctorProfile.fullIntroduction.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quote block */}
            <blockquote className="bg-surface border-l-4 border-primary-blue rounded-r-xl p-5 md:p-6 shadow-xs italic text-medical-navy font-serif text-lg">
              &ldquo;Trong y khoa, đặc biệt là Cơ Xương Khớp, việc điều trị không thể vội vã. Cần kiên nhẫn để thấu hiểu từng cử động nhỏ của khớp, tìm đúng nguyên nhân và phục hồi dần khả năng tự vận động của người bệnh.&rdquo;
              <cite className="block text-xs uppercase tracking-widest text-text-secondary font-mono font-bold not-italic mt-3">
                — Bác sĩ Trung
              </cite>
            </blockquote>

            {/* Clinical Working Image */}
            {doctorProfile.workingImage && (
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video max-h-80 w-full mt-2 border border-border">
                <img
                  src={doctorProfile.workingImage}
                  alt="Bác sĩ Trung đang trao đổi lâm sàng cùng bệnh nhân"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-101"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-xs md:text-sm font-sans font-light">
                    Môi trường làm việc lâm sàng thân thiện, gần gũi và tối ưu hóa trải nghiệm thăm khám cho người bệnh.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </SectionReveal>
  );
}
