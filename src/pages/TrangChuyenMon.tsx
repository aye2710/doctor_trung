import { PageLayout } from "../components/PageLayout";
import { useActiveSection } from "../hooks/useActiveSection";
import { PainPointsSection } from "../components/PainPointsSection";

export function TrangChuyenMon() {
  const activeSection = useActiveSection(["chuyen-mon"]);

  return (
    <PageLayout activeSection={activeSection}>
      <div className="flex flex-col">
        <PainPointsSection />
      </div>
    </PageLayout>
  );
}