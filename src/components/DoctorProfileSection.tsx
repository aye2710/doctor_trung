import { doctorProfile } from "../data/doctorProfile";
import { DoctorProfileCard } from "./DoctorProfileCard";
import { SectionReveal } from "./SectionReveal";

export function DoctorProfileSection() {
  return (
    <SectionReveal
      id="doctor-profile"
      className="py-20 bg-background relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-base uppercase tracking-[3px] font-semibold text-secondary">
            LÝ DO CHỌN BÁC SĨ
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mt-2 mb-3">
            Chuyên môn Điều trị Đau được xây dựng từ quá trình học tập và thực hành lâm sàng.
          </h2>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-[560px] mx-auto">
            Bác sĩ Trung hiện công tác tại Bệnh viện Bưu Điện trong lĩnh vực Gây mê Hồi sức & Điều trị đau, tập trung vào các phương pháp can thiệp giảm đau không xâm lấn, không phẫu thuật.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-5">
            <DoctorProfileCard profile={doctorProfile} />
          </div>

          {/* Right Column - Working Image */}
          <div className="lg:col-span-7">
            <div className="rounded-[20px] overflow-hidden aspect-[4/3] bg-gradient-to-br from-light-blue to-sky-blue flex items-center justify-center border border-border">
              {doctorProfile.workingImage ? (
                <img src={doctorProfile.workingImage} alt="Bác sĩ Trung tại nơi làm việc" className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm text-medical-blue/50">[ Hình ảnh bác sĩ tại nơi làm việc ]</span>
              )}
            </div>
          </div>

        </div>

      </div>
    </SectionReveal>
  );
}