import { PageLayout } from "../components/PageLayout";
import { useActiveSection } from "../hooks/useActiveSection";
import { useSoftSectionSnap } from "../hooks/useSoftSectionSnap";

import { HeroSection } from "../components/HeroSection";
import { PainPointsCompact } from "../components/PainPointsCompact";
import { PhilosophySection } from "../components/PhilosophySection";
import { DoctorProfileSection } from "../components/DoctorProfileSection";
import { CareerStorySection } from "../components/CareerStorySection";
import { ActivityPreview } from "../components/ActivityPreview";
import { CertificateGallery } from "../components/CertificateGallery";
import { PatientJourney } from "../components/PatientJourney";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FAQSection } from "../components/FAQSection";
import { BookingCompact } from "../components/BookingCompact";

const sectionIds = [
  "home", "pain-points", "philosophy", "doctor-profile",
  "career-story", "certificates", "activities", "journey", "testimonials",
  "faq", "booking"
];

export function TrangGioiThieu() {
  const activeSection = useActiveSection(sectionIds);
  useSoftSectionSnap(sectionIds, true);

  return (
    <PageLayout activeSection={activeSection} sectionIds={sectionIds}>
      <div className="flex flex-col">
        <HeroSection />
        <PainPointsCompact />
        <PhilosophySection />
        <DoctorProfileSection />
        <CareerStorySection />
        <CertificateGallery />
        <ActivityPreview />
        <PatientJourney />
        <TestimonialsSection />
        <FAQSection />
        <BookingCompact />
      </div>
    </PageLayout>
  );
}