import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onMobileMenuOpen: () => void;
}

export function Header({ activeSection, onMobileMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isGroupActive = (ids: string[]) => {
    return ids.includes(activeSection);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-surface/85 backdrop-blur-md border-b border-border transition-all duration-300 ${
        isScrolled ? "py-3 shadow-md" : "py-5 shadow-sm"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Subtitle */}
        <a href="#home" className="flex flex-col focus:outline-2 focus:outline-primary-blue rounded px-2 -mx-2">
          <span className="text-2xl font-serif font-bold text-medical-navy tracking-tight">
            Dr. Trung
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-medical-blue font-semibold mt-0.5">
            Chuyên khoa Điều trị Đau
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          
          {/* Menu item: Giới thiệu */}
          <a
            href="#home"
            className={`text-sm font-medium tracking-wide transition-colors ${
              isGroupActive(["home", "doctor-profile"])
                ? "text-primary-blue font-semibold"
                : "text-text-secondary hover:text-medical-blue"
            }`}
          >
            Giới thiệu
          </a>

          {/* Menu item: Hành trình */}
          <a
            href="#career-story"
            className={`text-sm font-medium tracking-wide transition-colors ${
              isGroupActive(["career-story"])
                ? "text-primary-blue font-semibold"
                : "text-text-secondary hover:text-medical-blue"
            }`}
          >
            Hành trình
          </a>

          {/* Dropdown Menu item: Chuyên môn */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }
              }}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors cursor-pointer focus:outline-2 focus:outline-primary-blue rounded p-1 ${
                isGroupActive(["certificates", "pain-points", "philosophy"])
                  ? "text-primary-blue font-semibold"
                  : "text-text-secondary hover:text-medical-blue"
              }`}
            >
              Chuyên môn
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-188" : ""}`} />
            </button>

            {/* Dropdown Panel */}
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-surface border border-border shadow-xl rounded-xl py-2 z-50 animate-fade-in">
                <a
                  href="#certificates"
                  onClick={() => setIsDropdownOpen(false)}
                  className={`block px-5 py-3 text-sm transition-colors hover:bg-soft-blue ${
                    activeSection === "certificates" ? "text-primary-blue bg-light-blue/40 font-medium" : "text-text-primary"
                  }`}
                >
                  Chứng nhận chuyên môn
                </a>
                <a
                  href="#pain-points"
                  onClick={() => setIsDropdownOpen(false)}
                  className={`block px-5 py-3 text-sm transition-colors hover:bg-soft-blue ${
                    activeSection === "pain-points" ? "text-primary-blue bg-light-blue/40 font-medium" : "text-text-primary"
                  }`}
                >
                  Những vấn đề thường gặp
                </a>
                <a
                  href="#philosophy"
                  onClick={() => setIsDropdownOpen(false)}
                  className={`block px-5 py-3 text-sm transition-colors hover:bg-soft-blue ${
                    activeSection === "philosophy" ? "text-primary-blue bg-light-blue/40 font-medium" : "text-text-primary"
                  }`}
                >
                  Triết lý điều trị
                </a>
              </div>
            )}
          </div>

          {/* Menu item: Hoạt động */}
          <a
            href="#events"
            className={`text-sm font-medium tracking-wide transition-colors ${
              isGroupActive(["events"])
                ? "text-primary-blue font-semibold"
                : "text-text-secondary hover:text-medical-blue"
            }`}
          >
            Hoạt động
          </a>

          {/* Menu item: Kiến thức */}
          <a
            href="#knowledge"
            className={`text-sm font-medium tracking-wide transition-colors ${
              isGroupActive(["knowledge"])
                ? "text-primary-blue font-semibold"
                : "text-text-secondary hover:text-medical-blue"
            }`}
          >
            Kiến thức
          </a>

          {/* Menu item: Đặt lịch */}
          <a
            href="#booking"
            className={`text-sm font-medium tracking-wide transition-colors ${
              isGroupActive(["booking"])
                ? "text-primary-blue font-semibold"
                : "text-text-secondary hover:text-medical-blue"
            }`}
          >
            Đặt lịch
          </a>

        </nav>

        {/* Header Right CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#booking"
            className="hidden sm:inline-flex items-center justify-center bg-primary-blue hover:bg-medical-blue text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-primary-blue cursor-pointer"
          >
            Đặt lịch khám
          </a>

          {/* Mobile hamburger menu button */}
          <button
            onClick={onMobileMenuOpen}
            className="lg:hidden p-2.5 text-text-primary hover:bg-light-blue rounded-lg transition-colors cursor-pointer"
            aria-label="Mở menu di động"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </header>
  );
}
