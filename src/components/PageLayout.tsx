import type { ReactNode } from "react";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";
import { useState } from "react";

interface PageLayoutProps {
  children: ReactNode;
  activeSection: string;
  sectionIds?: string[];
}

export function PageLayout({ children, activeSection }: PageLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col font-sans">
      <Header
        activeSection={activeSection}
        onMobileMenuOpen={() => setIsMobileMenuOpen(true)}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
      <main className="flex-1 w-full pt-[72px]">
        {children}
      </main>
      <FloatingContact />
      <Footer />
    </div>
  );
}