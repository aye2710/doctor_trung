import { Link, useLocation } from "react-router-dom";
import { Menu, Stethoscope } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onMobileMenuOpen: () => void;
}

export function Header({ activeSection, onMobileMenuOpen }: HeaderProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinkClass = (isActive: boolean) =>
    `text-sm font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 ${
      isActive
        ? "text-primary font-semibold after:w-full"
        : "text-text-secondary hover:text-primary after:w-0 hover:after:w-full"
    }`;

  const isOnPage = (path: string) => location.pathname === path;
  const isInGroup = (ids: string[]) => isHome && ids.includes(activeSection);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-border transition-all duration-300"
      style={{ height: "72px" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between h-full">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 focus:outline-2 focus:outline-secondary rounded px-2 -mx-2">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-primary tracking-tight leading-none font-heading">
              Dr. Trung
            </span>
            <span className="text-[8px] uppercase tracking-[2px] font-semibold text-text-secondary mt-1 leading-none">
              Chuyên khoa Điều trị Đau
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">

          <Link
            to="/"
            className={navLinkClass(isHome && isInGroup(["home", "doctor-profile", "career-story"]))}
          >
            Giới thiệu
          </Link>

          <Link
            to="/chuyen-mon"
            className={navLinkClass(isOnPage("/chuyen-mon"))}
          >
            Chuyên môn
          </Link>

          <Link
            to="/hoat-dong"
            className={navLinkClass(isOnPage("/hoat-dong"))}
          >
            Hoạt động
          </Link>

          <Link
            to="/cam-nhan"
            className={navLinkClass(isOnPage("/cam-nhan"))}
          >
            Cảm nhận
          </Link>

          <Link
            to="/dat-lich"
            className={navLinkClass(isOnPage("/dat-lich"))}
          >
            Đặt lịch
          </Link>

        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link
            to="/dat-lich"
            className="hidden sm:inline-flex items-center justify-center bg-primary hover:bg-primary-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm"
          >
            Đặt lịch khám
          </Link>

          <button
            onClick={onMobileMenuOpen}
            className="lg:hidden p-2.5 text-text-primary hover:bg-gold-light rounded-lg transition-colors cursor-pointer"
            aria-label="Mở menu di động"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </header>
  );
}