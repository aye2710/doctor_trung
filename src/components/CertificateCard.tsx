import type { CertificateItem } from "../data/certificates";
import { OptimizedImage } from "./common/OptimizedImage";

interface CertificateCardProps {
  cert: CertificateItem;
  onClick: () => void;
}

export function CertificateCard({ cert, onClick }: CertificateCardProps) {
  const displayTitle = cert.title.replace(/^\[|\]$/g, "");
  const displayIssuer = cert.issuer ? cert.issuer.replace(/^\[|\]$/g, "") : "";
  const displayYear = cert.year && !cert.year.startsWith("[") ? cert.year.replace(/^\[|\]$/g, "") : "";

  return (
    <div
      onClick={onClick}
      className="bg-surface border border-border hover:border-primary-blue hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden cursor-pointer group flex flex-col h-full focus-within:outline-2 focus-within:outline-primary-blue relative"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Xem chi tiết ${displayTitle}`}
    >
      <div className="w-full aspect-[4/3] overflow-hidden bg-white">
        <OptimizedImage
          src={cert.image}
          alt={cert.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3 flex flex-col gap-0.5 text-left">
        <h4 className="text-xs font-semibold text-text-primary group-hover:text-primary-blue transition-colors line-clamp-1 leading-snug">
          {displayTitle}
        </h4>
        {displayIssuer && (
          <p className="text-[10px] text-text-secondary font-light">
            {displayIssuer} {displayYear ? `· ${displayYear}` : ""}
          </p>
        )}
      </div>
    </div>
  );
}
