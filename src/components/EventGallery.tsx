import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedImage } from "./common/OptimizedImage";

interface EventImage {
  src: string;
  alt: string;
}

interface EventGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: EventImage[];
}

export function EventGallery({ isOpen, onClose, title, images }: EventGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeIndex, images.length, onClose]);

  if (!isOpen || images.length === 0) return null;

  const displayTitle = title.replace(/^\[|\]$/g, "");

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-medical-navy/95 backdrop-blur-md p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Bộ sưu tập hình ảnh ${displayTitle}`}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between w-full pb-4 border-b border-white/10 z-10">
        <div>
          <h3 className="text-white text-lg md:text-xl font-serif italic max-w-xs sm:max-w-md md:max-w-2xl truncate">
            {displayTitle}
          </h3>
          <p className="text-white/40 text-xs mt-1 uppercase tracking-wider">
            Hình ảnh sự kiện chuyên khoa
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          aria-label="Đóng"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Slider Area */}
      <div className="relative flex items-center justify-center flex-1 my-4 select-none">
        
        {/* Back Arrow */}
        <button
          onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute left-0 md:left-4 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer z-10"
          aria-label="Hình trước"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Current Image display */}
        <div className="flex flex-col items-center max-h-[58vh] md:max-h-[62vh] max-w-full px-12 md:px-20">
          <OptimizedImage
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="max-h-[50vh] md:max-h-[54vh] max-w-full object-contain rounded shadow-2xl border border-white/10 bg-white/5"
            priority
          />
          <p className="text-white/70 text-sm mt-4 text-center px-4 max-w-2xl font-sans font-light">
            {images[activeIndex].alt}
          </p>
        </div>

        {/* Forward Arrow */}
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
          className="absolute right-0 md:right-4 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer z-10"
          aria-label="Hình sau"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Footer bar with pagination and thumbnails */}
      <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-4 z-10">
        <div className="text-white/80 font-mono text-sm tracking-widest font-light">
          {activeIndex + 1} / {images.length}
        </div>
        
        {/* Navigation Thumbnails */}
        <div className="flex gap-2 max-w-full overflow-x-auto py-2 px-4 no-scrollbar">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                idx === activeIndex 
                  ? "border-primary-blue scale-105 opacity-100" 
                  : "border-transparent opacity-40 hover:opacity-85"
              }`}
              aria-label={`Xem hình số ${idx + 1}`}
            >
              <OptimizedImage src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
