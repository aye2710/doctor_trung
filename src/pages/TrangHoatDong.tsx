import { PageLayout } from "../components/PageLayout";
import { useActiveSection } from "../hooks/useActiveSection";
import { MedicalEventsSection } from "../components/MedicalEventsSection";

export function TrangHoatDong() {
  const activeSection = useActiveSection(["hoat-dong"]);

  return (
    <PageLayout activeSection={activeSection}>
      <div className="flex flex-col">
        <MedicalEventsSection />
      </div>
    </PageLayout>
  );
}