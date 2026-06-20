import React from "react";

interface StoryProgressNavProps {
  activeSection: string;
}

interface SectionInfo {
  id: string;
  num: string;
  name: string;
}

export function StoryProgressNav({ activeSection }: StoryProgressNavProps) {
  const sections: SectionInfo[] = [
    { id: "home", num: "01", name: "Giới thiệu" },
    { id: "doctor-profile", num: "02", name: "Thông tin bác sĩ" },
    { id: "career-story", num: "03", name: "Hành trình nghề nghiệp" },
    { id: "certificates", num: "04", name: "Chứng nhận chuyên môn" },
    { id: "events", num: "05", name: "Hoạt động chuyên ngành" },
    { id: "pain-points", num: "06", name: "Vấn đề khớp thường gặp" },
    { id: "philosophy", num: "07", name: "Triết lý điều trị" },
    { id: "journey", num: "08", name: "Hành trình thăm khám" },
    { id: "knowledge", num: "09", name: "Góc kiến thức" },
    { id: "booking", num: "10", name: "Đặt lịch khám" }
  ];

  const activeIndex = sections.findIndex((s) => s.id === activeSection);

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <nav
      className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-start gap-4 py-8"
      aria-label="Tiến trình tài liệu y khoa"
    >
      {/* Background timeline track */}
      <div className="absolute left-[9px] top-8 bottom-8 w-[2px] bg-border pointer-events-none" />

      {/* Progress navigation steps */}
      {sections.map((sec, idx) => {
        const isActive = idx === activeIndex;
        const isVisited = idx < activeIndex;

        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            onClick={(e) => handleClick(sec.id, e)}
            className="flex items-center gap-4 group focus:outline-none relative cursor-pointer"
            aria-label={`Chương ${sec.num}: ${sec.name}`}
          >
            {/* Nav Node Dot */}
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center bg-background transition-all duration-300 z-10 ${
                isActive
                  ? "border-primary-blue scale-110 shadow-sm"
                  : isVisited
                  ? "border-sky-blue bg-light-blue"
                  : "border-border group-hover:border-medical-blue"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-primary-blue"
                    : isVisited
                    ? "bg-medical-blue"
                    : "bg-transparent"
                }`}
              />
            </div>

            {/* Label - Only fully visible when active, or on hover */}
            <div
              className={`flex items-baseline gap-2 transition-all duration-300 bg-background/90 backdrop-blur-xs py-0.5 px-2 rounded-md ${
                isActive
                  ? "opacity-100 translate-x-0 font-medium"
                  : "opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto"
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-medical-blue">
                {sec.num}
              </span>
              <span className="text-xs uppercase tracking-wider text-text-primary whitespace-nowrap">
                {sec.name}
              </span>
            </div>
          </a>
        );
      })}
    </nav>
  );
}
