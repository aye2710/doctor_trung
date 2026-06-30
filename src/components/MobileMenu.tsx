import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { to: "/", label: "Giới thiệu", isActive: isHome },
    { to: "/#certificates", label: "Chứng nhận chuyên môn", isActive: false },
    { to: "/chuyen-mon", label: "Vấn đề thường gặp", isActive: location.pathname === "/chuyen-mon" },
    { to: "/#philosophy", label: "Triết lý điều trị", isActive: false },
    { to: "/hoat-dong", label: "Hoạt động", isActive: location.pathname === "/hoat-dong" },
    { to: "/cam-nhan", label: "Cảm nhận bệnh nhân", isActive: location.pathname === "/cam-nhan" },
    { to: "/dat-lich", label: "Đặt lịch khám", isActive: location.pathname === "/dat-lich" },
  ];

  const isActiveLink = (item: typeof links[0]) => {
    if (item.to.startsWith("#")) return isHome && activeSection === item.to.slice(1);
    if (item.to.startsWith("/#")) return false;
    return item.isActive;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-medical-navy/40 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Menu điều hướng"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm h-full bg-surface shadow-2xl flex flex-col justify-between p-6 animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <div>
              <h2 className="text-xl font-bold text-medical-navy">Dr. Trung</h2>
              <p className="text-[9px] uppercase tracking-[3px] text-medical-blue mt-0.5 font-semibold">Chuyên khoa Điều trị Đau</p>
            </div>
            <button
              onClick={onClose}
              className="p-3 text-text-primary hover:bg-gold-light rounded-full transition-colors cursor-pointer"
              style={{ minHeight: "48px", minWidth: "48px" }}
              aria-label="Đóng menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 mt-6">
            {links.map((link) => {
              const active = isActiveLink(link);
              const content = (
                <span
                  className={`flex items-center text-base px-4 rounded-lg font-medium transition-colors ${
                    active
                      ? "text-gold bg-gold-light/50 font-bold"
                      : "text-text-primary hover:text-gold hover:bg-gold-light/30"
                  }`}
                  style={{ minHeight: "48px" }}
                >
                  {link.label}
                </span>
              );

              if (link.to.startsWith("#")) {
                return (
                  <a key={link.label} href={link.to} onClick={onClose}>
                    {content}
                  </a>
                );
              }
              if (link.to.startsWith("/#")) {
                return (
                  <a key={link.label} href={link.to} onClick={onClose}>
                    {content}
                  </a>
                );
              }
              return (
                <Link key={link.label} to={link.to} onClick={onClose}>
                  {content}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-border pt-6 flex flex-col gap-4">
          <Link
            to="/dat-lich"
            onClick={onClose}
            className="flex items-center justify-center bg-primary hover:bg-primary-900 text-white rounded-xl text-base font-semibold transition-colors"
            style={{ minHeight: "48px" }}
          >
            Đặt lịch khám
          </Link>
          <p className="text-center text-[10px] text-text-secondary">
            Bác sĩ Trung · Chuyên khoa Điều trị Đau
          </p>
        </div>

      </div>
    </div>
  );
}