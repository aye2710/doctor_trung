import { useState } from "react";
import { medicalEvents } from "../data/medicalEvents";
import type { MedicalEvent } from "../data/medicalEvents";
import { MedicalEventItem } from "./MedicalEventItem";
import { EventGallery } from "./EventGallery";
import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";

export function MedicalEventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<MedicalEvent | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleOpen = (event: MedicalEvent) => {
    setSelectedEvent(event);
    setIsGalleryOpen(true);
  };

  return (
    <SectionReveal
      id="events"
      className="py-20 bg-soft-blue"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-base uppercase tracking-[3px] font-semibold text-secondary">
            HỘI NGHỊ · DIỄN ĐÀN · HỘI THẢO
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mt-2 mb-3">
            Kết nối chuyên môn và cập nhật những tiến bộ mới trong y khoa.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Bác sĩ Trung thường xuyên tham gia các hội nghị, diễn đàn và chương trình trao đổi chuyên môn nhằm cập nhật kiến thức và chia sẻ kinh nghiệm trong lĩnh vực Điều trị Đau & Gây mê Hồi sức.
          </p>
        </div>

        {/* Alternate Editorial Events list */}
        <StaggerReveal className="flex flex-col">
          {medicalEvents.map((event, index) => (
            <StaggerItem key={event.id}>
              <MedicalEventItem
                event={event}
                index={index}
                onOpenGallery={() => handleOpen(event)}
              />
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Global Event gallery overlay */}
        {selectedEvent && (
          <EventGallery
            key={selectedEvent.id}
            isOpen={isGalleryOpen}
            onClose={() => setIsGalleryOpen(false)}
            title={selectedEvent.title}
            images={selectedEvent.images}
          />
        )}

      </div>
    </SectionReveal>
  );
}
