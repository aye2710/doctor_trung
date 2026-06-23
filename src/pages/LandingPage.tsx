import { useState } from "react";
import { Header } from "../components/Header";
import { MobileMenu } from "../components/MobileMenu";
import { Footer } from "../components/Footer";

// 10 Section components
import { HeroSection } from "../components/HeroSection";
import { DoctorProfileSection } from "../components/DoctorProfileSection";
// import { CareerStorySection } from "../components/CareerStorySection";
import { CertificateGallery } from "../components/CertificateGallery";
import { MedicalEventsSection } from "../components/MedicalEventsSection";
import { PainPointsSection } from "../components/PainPointsSection";
// import { SignsSection } from "../components/SignsSection";
import { PhilosophySection } from "../components/PhilosophySection";
import { PatientJourney } from "../components/PatientJourney";
import { KnowledgeSection } from "../components/KnowledgeSection";
import { BookingSection } from "../components/BookingSection";

// Custom hooks
import { useActiveSection } from "../hooks/useActiveSection";
import { useSoftSectionSnap } from "../hooks/useSoftSectionSnap";

export function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Exact 10 section IDs in order
  const sectionIds = [
    "home",
    "doctor-profile",
    // "career-story",
    "certificates",
    "events",
    "knowledge",
    "pain-points",
    // "signs",
    "philosophy",
    "journey",
    "booking"
  ];

  // Track the active section
  const activeSection = useActiveSection(sectionIds);

  // Trigger soft snapping on desktop (>=1024px)
  useSoftSectionSnap(sectionIds, true);

  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col font-sans">
      
      {/* Navigation Header */}
      <Header
        activeSection={activeSection}
        onMobileMenuOpen={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Drawer Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />


      {/* Page Main Core layout */}
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-6 md:px-8 xl:pl-32 xl:pr-8 py-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 relative items-start">
          
          {/* Left Column: 10 main scrolling sections (68% width on desktop) */}
          <div className="lg:col-span-12 flex flex-col gap-0 border-r border-border/10">
            <HeroSection />
            <DoctorProfileSection />
            {/* <CareerStorySection /> */}
            <CertificateGallery />
            <MedicalEventsSection />
            <KnowledgeSection />
            <PainPointsSection />
            {/* <SignsSection /> */}
            <PhilosophySection />
            <PatientJourney />
            <BookingSection />
          </div>

         

        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
export default LandingPage;
