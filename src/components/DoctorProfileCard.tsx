import type { DoctorProfile } from "../data/doctorProfile";
import { Award, Briefcase, GraduationCap, Heart, Activity } from "lucide-react";

interface DoctorProfileCardProps {
  profile: DoctorProfile;
}

function cleanValue(value: string | undefined, fallback?: string): string | null {
  if (!value || (value.startsWith("[") && value.endsWith("]"))) {
    return fallback || null;
  }
  return value;
}

export function DoctorProfileCard({ profile }: DoctorProfileCardProps) {
  const displayDegree = cleanValue(profile.degree, "Bác sĩ");
  const displayTitle = cleanValue(profile.hospitalTitle, "Bác sĩ Điều trị");
  const displayHospital = cleanValue(profile.hospital, "Bệnh viện đa khoa");
  const displayExperience = cleanValue(profile.experience);
  
  const displayCases = cleanValue(profile.casesPerformed);

  return (
    <div className="bg-surface border border-border shadow-[0_4px_20px_rgba(11,42,74,0.04)] rounded-[20px] p-8 md:p-10 flex flex-col gap-5">
      
      {/* Header */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-medical-navy">
          {cleanValue(profile.fullName, "Bác sĩ Trung")}
        </h3>
        <p className="text-xs font-semibold text-medical-blue mt-1 uppercase tracking-[1px]">
          Chuyên khoa {profile.specialty}
        </p>
      </div>

      <div className="h-[1px] bg-border" />

      {/* Profile items */}
      <div className="flex flex-col gap-[18px]">
        
        {displayDegree && (
          <div className="flex gap-3.5 items-start">
            <div className="w-9 h-9 rounded-[10px] bg-gold-light flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-4 h-4 text-gold" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[1px] text-text-secondary">Học vị</p>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{displayDegree}</p>
            </div>
          </div>
        )}

        {displayTitle && (
          <div className="flex gap-3.5 items-start">
            <div className="w-9 h-9 rounded-[10px] bg-gold-light flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-4 h-4 text-gold" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[1px] text-text-secondary">Chức danh</p>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{displayTitle}</p>
            </div>
          </div>
        )}

        {displayHospital && (
          <div className="flex gap-3.5 items-start">
            <div className="w-9 h-9 rounded-[10px] bg-gold-light flex items-center justify-center flex-shrink-0">
              <Award className="w-4 h-4 text-gold" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[1px] text-text-secondary">Nơi công tác</p>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{displayHospital}</p>
            </div>
          </div>
        )}

        {displayExperience && (
          <div className="flex gap-3.5 items-start">
            <div className="w-9 h-9 rounded-[10px] bg-gold-light flex items-center justify-center flex-shrink-0">
              <Heart className="w-4 h-4 text-gold" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[1px] text-text-secondary">Kinh nghiệm</p>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{displayExperience}</p>
            </div>
          </div>
        )}

        {displayCases && (
          <div className="flex gap-3.5 items-start">
            <div className="w-9 h-9 rounded-[10px] bg-gold-light flex items-center justify-center flex-shrink-0">
              <Activity className="w-4 h-4 text-gold" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[1px] text-text-secondary">Số ca đã thực hiện</p>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{displayCases}</p>
            </div>
          </div>
        )}

      </div>

      <div className="h-[1px] bg-border" />

      {/* Focus Areas */}
      {profile.focusAreas && profile.focusAreas.length > 0 && (
        <div>
          <p className="text-[11px] uppercase tracking-[1.5px] font-semibold text-gold mb-3">
            Lĩnh vực tập trung
          </p>
          <div className="flex flex-col gap-2.5">
            {profile.focusAreas.map((area, idx) => (
              <div key={idx} className="flex gap-2.5 items-start text-xs md:text-sm text-text-secondary leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                {area}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}