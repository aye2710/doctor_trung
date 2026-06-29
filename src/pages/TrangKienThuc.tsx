import { PageLayout } from "../components/PageLayout";
import { useActiveSection } from "../hooks/useActiveSection";
import { KnowledgeSection } from "../components/KnowledgeSection";

export function TrangKienThuc() {
  const activeSection = useActiveSection(["kien-thuc"]);

  return (
    <PageLayout activeSection={activeSection}>
      <div className="flex flex-col">
        <KnowledgeSection />
      </div>
    </PageLayout>
  );
}