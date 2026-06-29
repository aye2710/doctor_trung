import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedImage } from "./common/OptimizedImage";

interface LightboxItem {
  src: string;
  title: string;
  issuer?: string;
  year?: string;
  alt: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    // Store original overflow setting
    const originalOverflow = document.body.style.overflow;
    
    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];
  
  // Strip placeholders brackets for production display
  const displayTitle = currentItem.title.replace(/^\[|\]$/g, "");
  const displayIssuer = currentItem.issuer ? currentItem.issuer.replace(/^\[|\]$/g, "") : "";
  const displayYear = currentItem.year ? currentItem.year.replace(/^\[|\]$/g, "") : "";

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-medical-navy/95 backdrop-blur-md p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Hình ảnh chứng nhận chuyên môn"
    >
      {/* Top controls */}
      <div className="absolute top-4 right-4 flex items-center gap-4 z-50">
        <button
          onClick={onClose}
          className="p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          aria-label="Đóng"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Lightbox content container */}
      <div className="relative flex items-center justify-center w-full max-w-4xl flex-1 select-none">
        
        {/* Left Arrow */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-0 p-3 md:p-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10 cursor-pointer"
          aria-label="Chứng nhận trước"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Center Content */}
        <div className="flex flex-col items-center max-h-[82vh] max-w-full px-12 md:px-20">
          <OptimizedImage
            src={currentItem.src}
            alt={currentItem.alt}
            className="max-h-[62vh] max-w-full object-contain rounded bg-white shadow-2xl p-3 border border-white/5"
            priority
          />
          <div className="mt-6 text-center text-white max-w-xl">
            <h3 className="text-xl md:text-2xl font-heading font-medium tracking-wide">
              {displayTitle}
            </h3>
            {displayIssuer && (
              <p className="text-white/60 text-sm md:text-base mt-2">
                {displayIssuer} {displayYear ? `· ${displayYear}` : ""}
              </p>
            )}
            <p className="text-white/40 text-xs mt-3 uppercase tracking-widest font-mono">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-0 p-3 md:p-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10 cursor-pointer"
          aria-label="Chứng nhận sau"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </div>
  );
}
