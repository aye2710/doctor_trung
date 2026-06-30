import { useState, useRef } from "react";
import { certificates } from "../data/certificates";
import { CertificateCard } from "./CertificateCard";
import { ImageLightbox } from "./ImageLightbox";
import { SectionReveal } from "./SectionReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CertificateGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const lightboxImages = certificates.map((cert) => ({
    src: cert.image,
    title: cert.title,
    issuer: cert.issuer,
    year: cert.year,
    alt: cert.alt
  }));

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <SectionReveal
      id="certificates"
      className="py-20 bg-soft-blue relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-base uppercase tracking-[3px] font-semibold text-secondary">
            CHỨNG CHỈ CHUYÊN MÔN
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mt-2 mb-3">
            Những dấu mốc chuyên môn trên hành trình chăm sóc người bệnh.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Các chứng nhận và chương trình đào tạo thể hiện quá trình học tập, cập nhật kiến thức và phát triển năng lực chuyên môn của Bác sĩ Trung.
          </p>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface border border-border shadow-md flex items-center justify-center text-text-secondary hover:text-primary-blue hover:border-primary-blue transition-all opacity-0 group-hover:opacity-100 -translate-x-4 md:-translate-x-6 cursor-pointer"
            aria-label="Kéo sang trái"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 scroll-smooth"
          >
            {certificates.map((cert, index) => (
              <div key={cert.id} className="flex-shrink-0 w-[280px] md:w-[320px] snap-start">
                <CertificateCard
                  cert={cert}
                  onClick={() => handleOpen(index)}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface border border-border shadow-md flex items-center justify-center text-text-secondary hover:text-primary-blue hover:border-primary-blue transition-all opacity-0 group-hover:opacity-100 translate-x-4 md:translate-x-6 cursor-pointer"
            aria-label="Kéo sang phải"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

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
