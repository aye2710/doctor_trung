import type { CertificateItem } from "../data/certificates";

interface CertificateCardProps {
  cert: CertificateItem;
  onClick: () => void;
}

export function CertificateCard({ cert, onClick }: CertificateCardProps) {
  // Strip bracket placeholders for production-ready display
  const displayTitle = cert.title.replace(/^\[|\]$/g, "");
  const displayIssuer = cert.issuer ? cert.issuer.replace(/^\[|\]$/g, "") : "";
  const displayYear = cert.year && !cert.year.startsWith("[") ? cert.year.replace(/^\[|\]$/g, "") : "";

  return (
    <div
      onClick={onClick}
      className="bg-surface border border-border hover:border-primary-blue hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden cursor-pointer group flex flex-col h-full focus-within:outline-2 focus-within:outline-primary-blue"
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
      {/* Certificate Frame wrapper */}
      <div className="bg-white flex items-center justify-center p-6 aspect-video select-none border-b border-border">
        <img
          src={cert.image}
          alt={cert.alt}
          className="max-h-[140px] max-w-full object-contain transition-transform duration-500 group-hover:scale-103"
          loading="lazy"
        />
      </div>

      {/* Info details */}
      <div className="p-4 md:p-5 flex-1 flex flex-col justify-between text-left">
        <div>
          <h4 className="text-sm font-semibold text-text-primary group-hover:text-primary-blue transition-colors line-clamp-2 leading-snug">
            {displayTitle}
          </h4>
          {displayIssuer && (
            <p className="text-xs text-text-secondary mt-1.5 font-light">
              {displayIssuer}
            </p>
          )}
        </div>
        
        {displayYear && (
          <p className="text-[10px] font-mono text-text-secondary/60 mt-3 font-semibold">
            Năm cấp: {displayYear}
          </p>
        )}
      </div>

    </div>
  );
}
