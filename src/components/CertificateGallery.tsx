import { useState } from "react";
import { certificates } from "../data/certificates";
import { CertificateCard } from "./CertificateCard";
import { ImageLightbox } from "./ImageLightbox";
import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";

export function CertificateGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Convert certificates data list to match ImageLightbox expected schema
  const lightboxImages = certificates.map((cert) => ({
    src: cert.image,
    title: cert.title,
    issuer: cert.issuer,
    year: cert.year,
    alt: cert.alt
  }));

  return (
    <SectionReveal
      id="certificates"
      className="py-20 bg-background relative border-b border-border"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-medical-blue font-bold">
            CHỨNG NHẬN CHUYÊN MÔN
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-medical-navy italic tracking-tight leading-tight mt-2 mb-4">
            Những dấu mốc chuyên môn trên hành trình chăm sóc người bệnh.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light">
            Các chứng nhận và chương trình đào tạo thể hiện quá trình học tập, cập nhật kiến thức và phát triển năng lực chuyên môn của Bác sĩ Trung.
          </p>
        </div>

        {/* 6 Certificate Cards Grid */}
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <StaggerItem key={cert.id}>
              <CertificateCard
                cert={cert}
                onClick={() => handleOpen(index)}
              />
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Lightbox modal overlay */}
        <ImageLightbox
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          images={lightboxImages}
          currentIndex={currentIndex}
          onNavigate={(idx) => setCurrentIndex(idx)}
        />

      </div>
    </SectionReveal>
  );
}
