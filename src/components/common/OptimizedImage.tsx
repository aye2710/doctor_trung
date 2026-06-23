import { useState, useCallback, useRef, useEffect, memo } from "react";
import type { ImgHTMLAttributes } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  lazy?: boolean;
  placeholder?: string;
  fallback?: string;
  onClick?: () => void;
}

const FALLBACK_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='14' text-anchor='middle' x='200' y='155'%3EImage not available%3C/text%3E%3C/svg%3E";

export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  lazy = true,
  placeholder: placeholderSrc,
  fallback = FALLBACK_SRC,
  onClick,
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [observerTriggered, setObserverTriggered] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  const shouldRender = priority || observerTriggered;

  useEffect(() => {
    if (priority || observerTriggered) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setObserverTriggered(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, observerTriggered]);

  const handleLoad = useCallback(() => setLoaded(true), []);
  const handleError = useCallback(() => {
    setError(true);
    setLoaded(true);
  }, []);

  const objectFitMatch = className.match(
    /\bobject-(cover|contain|fill|none|scale-down)\b/
  );
  const objectFitClass = objectFitMatch ? objectFitMatch[0] : "object-cover";

  const hasBorderRadius = /\brounded(-\w+)?\b/.test(className);

  const imgProps: ImgHTMLAttributes<HTMLImageElement> & {
    fetchPriority?: string;
  } = {
    src: error ? fallback : src,
    alt,
    width,
    height,
    loading: priority ? "eager" : lazy ? "lazy" : "eager",
    decoding: "async",
    fetchPriority: priority ? "high" : undefined,
    onLoad: handleLoad,
    onError: handleError,
    className: `w-full h-full ${objectFitClass} transition-opacity duration-300 ${
      loaded ? "opacity-100" : "opacity-0"
    }`,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    draggable: false,
  };

  if (!shouldRender) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{ width, height }}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width, height }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {placeholderSrc && !loaded && (
        <img
          src={placeholderSrc}
          alt=""
          className={`absolute inset-0 w-full h-full ${objectFitClass}`}
          aria-hidden="true"
        />
      )}
      {!loaded && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${
            hasBorderRadius ? "rounded-[inherit]" : ""
          }`}
        />
      )}
      <img {...imgProps} />
    </div>
  );
});