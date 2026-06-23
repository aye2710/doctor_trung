import { useEffect } from "react";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { id: "home", label: "Giới thiệu chung" },
    { id: "doctor-profile", label: "Thông tin bác sĩ" },
    { id: "career-story", label: "Hành trình nghề nghiệp" },
    { id: "certificates", label: "Chứng nhận chuyên môn" },
    { id: "events", label: "Hội nghị & Hội thảo" },
    { id: "pain-points", label: "Vấn đề thường gặp" },
    { id: "philosophy", label: "Triết lý điều trị" },
    { id: "journey", label: "Hành trình thăm khám" },
    { id: "knowledge", label: "Góc kiến thức" },
    { id: "booking", label: "Đặt lịch khám" }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-medical-navy/40 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Menu điều hướng"
      onClick={onClose}
    >
      {/* Menu Drawer Content Panel */}
      <div
        className="w-full max-w-sm h-full bg-surface shadow-2xl flex flex-col justify-between p-6 animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <div>
              <h2 className="text-xl font-serif font-bold text-medical-navy">Dr. Trung</h2>
              <p className="text-xs tracking-wider uppercase text-medical-blue mt-0.5 font-medium">Điều trị Đau</p>
            </div>
            <button
              onClick={onClose}
              className="p-3 text-text-primary hover:bg-light-blue rounded-full transition-colors cursor-pointer"
              style={{ minHeight: "48px", minWidth: "48px" }}
              aria-label="Đóng menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links List */}
          <nav className="flex flex-col gap-1 mt-6">
            {links.map((link) => {
              const active = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={onClose}
                  className={`flex items-center text-base px-4 rounded-lg font-medium transition-colors cursor-pointer ${
                    active 
                      ? "text-primary-blue bg-light-blue/50 font-bold" 
                      : "text-text-primary hover:text-primary-blue hover:bg-soft-blue"
                  }`}
                  style={{ minHeight: "48px" }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Drawer footer CTA */}
        <div className="border-t border-border pt-6 flex flex-col gap-4">
          <a
            href="#booking"
            onClick={onClose}
            className="flex items-center justify-center bg-primary-blue hover:bg-medical-blue text-white rounded-xl text-base font-semibold transition-colors cursor-pointer"
            style={{ minHeight: "48px" }}
          >
            Đặt lịch khám bệnh viện
          </a>
          <p className="text-center text-[10px] text-text-secondary">
            Bác sĩ Trung · Chuyên khoa Điều trị Đau
          </p>
        </div>

      </div>
    </div>
  );
}
