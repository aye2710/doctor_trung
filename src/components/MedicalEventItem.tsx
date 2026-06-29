import type { MedicalEvent } from "../data/medicalEvents";
import { Calendar, MapPin, Image as ImageIcon } from "lucide-react";
import { OptimizedImage } from "./common/OptimizedImage";

interface MedicalEventItemProps {
  event: MedicalEvent;
  index: number;
  onOpenGallery: () => void;
}

export function MedicalEventItem({ event, index, onOpenGallery }: MedicalEventItemProps) {
  const isOdd = index % 2 === 0; // 0, 2, 4 are odd layout (image left, content right)
  const orderNum = `0${index + 1}`;

  // Clean placeholder brackets for production
  const displayTitle = event.title.replace(/^\[|\]$/g, "");
  const displayDate = event.date ? event.date.replace(/^\[|\]$/g, "") : "";
  const displayLocation = event.location ? event.location.replace(/^\[|\]$/g, "") : "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 border-b border-border/60 last:border-b-0">
      
      {/* Visual Cover Panel - Left for Odd, Right for Even on Desktop (5 columns) */}
      <div
        className={`lg:col-span-5 w-full aspect-4/3 rounded-2xl overflow-hidden shadow-sm bg-light-blue border border-border relative group ${
          isOdd ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <OptimizedImage
          src={event.coverImage}
          alt={displayTitle}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
        />
        
        {/* Type Badge */}
        <span className="absolute top-4 left-4 bg-medical-navy/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {event.type}
        </span>
      </div>

      {/* Narrative Content - Right for Odd, Left for Even on Desktop (7 columns) */}
      <div
        className={`lg:col-span-7 flex flex-col items-start text-left ${
          isOdd ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {/* Event Ordinal Number */}
        <span className="text-4xl font-heading text-primary-blue/30 font-bold leading-none mb-3">
          {orderNum}
        </span>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-heading text-medical-navy font-bold leading-snug hover:text-primary-blue transition-colors mb-3">
          {displayTitle}
        </h3>

        {/* Event Metadata (Date, Location) */}
        <div className="flex flex-wrap gap-4 text-xs font-mono font-medium text-text-secondary mb-4">
          {displayDate && (
            <span className="flex items-center gap-1.5 bg-soft-blue px-2.5 py-1 rounded-md border border-border/40">
              <Calendar className="w-3.5 h-3.5 text-medical-blue" />
              {displayDate}
            </span>
          )}
          {displayLocation && (
            <span className="flex items-center gap-1.5 bg-soft-blue px-2.5 py-1 rounded-md border border-border/40">
              <MapPin className="w-3.5 h-3.5 text-medical-blue" />
              {displayLocation}
            </span>
          )}
        </div>

        {/* Summary Description */}
        <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light mb-6">
          {event.summary}
        </p>

        {/* Thumbnails list and gallery trigger CTA */}
        <div className="flex flex-wrap items-center gap-6 w-full pt-4 border-t border-border/40">
          
          {/* Thumbnails row (max 3) */}
          <div className="flex gap-2.5">
            {event.images.slice(0, 3).map((img, idx) => (
              <div
                key={idx}
                className="w-14 h-10 md:w-16 md:h-12 rounded-lg overflow-hidden border border-border/80 bg-surface flex-shrink-0"
              >
                <OptimizedImage src={img.src} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          {/* Trigger Button */}
          <button
            onClick={onOpenGallery}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary-blue hover:text-medical-blue uppercase tracking-widest cursor-pointer focus:outline-2 focus:outline-primary-blue p-2 -m-2 rounded transition-colors ml-auto lg:ml-0"
            aria-label={`Xem hình ảnh sự kiện ${displayTitle}`}
          >
            <ImageIcon className="w-4 h-4" />
            Xem hình ảnh sự kiện
          </button>
        </div>

      </div>

    </div>
  );
}
