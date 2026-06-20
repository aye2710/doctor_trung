import type { DoctorProfile } from "../data/doctorProfile";
import { Award, Briefcase, GraduationCap, Heart, Languages } from "lucide-react";

interface DoctorProfileCardProps {
  profile: DoctorProfile;
}

// Helper to filter out bracketed placeholder strings
function cleanValue(value: string | undefined, fallback?: string): string | null {
  if (!value || (value.startsWith("[") && value.endsWith("]"))) {
    return fallback || null;
  }
  return value;
}

export function DoctorProfileCard({ profile }: DoctorProfileCardProps) {
  const displayDegree = cleanValue(profile.degree, "Bác sĩ Chuyên khoa II");
  const displayTitle = cleanValue(profile.hospitalTitle, "Bác sĩ Điều trị");
  const displayHospital = cleanValue(profile.hospital, "Bệnh viện đa khoa");
  const displayExperience = cleanValue(profile.experience);
  
  // Filter languages array if empty or placeholder
  const displayLanguages = profile.languages && profile.languages.length > 0 
    ? profile.languages.join(", ") 
    : null;

  return (
    <div className="bg-surface border border-border shadow-md rounded-2xl p-6 md:p-8 flex flex-col gap-6">
      
      {/* Short professional summary */}
      <div>
        <h3 className="text-xl font-serif italic text-medical-navy font-bold">
          {cleanValue(profile.fullName, "Bác sĩ Trung")}
        </h3>
        <p className="text-sm font-medium text-medical-blue mt-1 uppercase tracking-wider">
          Chuyên khoa {profile.specialty}
        </p>
      </div>

      <hr className="border-border" />

      {/* Profile info list */}
      <div className="flex flex-col gap-5">
        
        {/* Degree */}
        {displayDegree && (
          <div className="flex gap-3.5 items-start">
            <GraduationCap className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-secondary">Học vị</p>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{displayDegree}</p>
            </div>
          </div>
        )}

        {/* Hospital Title */}
        {displayTitle && (
          <div className="flex gap-3.5 items-start">
            <Briefcase className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-secondary">Chức danh bệnh viện</p>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{displayTitle}</p>
            </div>
          </div>
        )}

        {/* Hospital */}
        {displayHospital && (
          <div className="flex gap-3.5 items-start">
            <Award className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-secondary">Nơi công tác</p>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{displayHospital}</p>
            </div>
          </div>
        )}

        {/* Experience */}
        {displayExperience && (
          <div className="flex gap-3.5 items-start">
            <Heart className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-secondary">Kinh nghiệm lâm sàng</p>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{displayExperience}</p>
            </div>
          </div>
        )}

        {/* Languages */}
        {displayLanguages && (
          <div className="flex gap-3.5 items-start">
            <Languages className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-secondary">Ngôn ngữ tư vấn</p>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{displayLanguages}</p>
            </div>
          </div>
        )}

      </div>

      {profile.focusAreas && profile.focusAreas.length > 0 && (
        <>
          <hr className="border-border" />
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-medical-blue mb-3">
              Lĩnh vực tập trung
            </h4>
            <ul className="flex flex-col gap-2">
              {profile.focusAreas.map((area, idx) => (
                <li key={idx} className="flex gap-2 items-start text-xs text-text-secondary leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-success-teal flex-shrink-0 mt-1.5" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

    </div>
  );
}
