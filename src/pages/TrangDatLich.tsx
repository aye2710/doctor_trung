import { PageLayout } from "../components/PageLayout";
import { useActiveSection } from "../hooks/useActiveSection";
import { BookingFull } from "../components/BookingFull";

export function TrangDatLich() {
  const activeSection = useActiveSection(["dat-lich"]);

  return (
    <PageLayout activeSection={activeSection}>
      <div className="flex flex-col">
        <BookingFull />
      </div>
    </PageLayout>
  );
}