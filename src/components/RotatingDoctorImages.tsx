import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { OptimizedImage } from "./common/OptimizedImage";

const images = [
  {
    src: "/images/doctor/doctor-portrait.png",
    alt: "Ảnh chân dung chính thức của Bác sĩ Trung"
  },
  {
    src: "/images/doctor/doctor-portrait.jpg",
    alt: "Bác sĩ Trung trong môi trường làm việc chuyên nghiệp"
  },
  {
    src: "/images/doctor/doctor-about.jpg",
    alt: "Bác sĩ Trung với phong thái gần gũi, thân thiện"
  }
];

export function RotatingDoctorImages() {
  const [centerIdx, setCenterIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setCenterIdx(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  const getRole = (i: number) => {
    const diff = (i - centerIdx + images.length) % images.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -2) return "right";
    return "left";
  };

  return (
    <div className="w-full h-full relative" style={{ perspective: "900px" }}>
      {images.map((img, i) => {
        const role = getRole(i);
        const isCenter = role === "center";
        const isLeft = role === "left";
        const isRight = role === "right";

        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border-2 border-white/60"
            style={{
              width: "85%",
              aspectRatio: "3/4",
              transformStyle: "preserve-3d",
              willChange: "transform",
              backfaceVisibility: "hidden"
            }}
            animate={
              shouldReduceMotion
                ? { opacity: isCenter ? 1 : 0.3 }
                : {
                    x: isLeft ? "-55%" : isRight ? "55%" : "0%",
                    scaleX: isCenter ? 1 : 0.7,
                    scaleY: isCenter ? 1 : 0.7,
                    rotateY: isLeft ? 45 : isRight ? -45 : 0,
                    zIndex: isCenter ? 20 : 10,
                    filter: isCenter
                      ? "brightness(1) blur(0px)"
                      : "brightness(0.4) blur(6px)",
                    boxShadow: isCenter
                      ? "0 0 40px rgba(59,130,246,0.15)"
                      : "0 0 0px rgba(0,0,0,0)",
                    opacity: 1
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 1.5,
              ease: "easeInOut"
            }}
          >
            <OptimizedImage
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              priority={isCenter || isRight}
            />
          </motion.div>
        );
      })}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCenterIdx(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
              i === centerIdx
                ? "bg-white w-5 shadow-md"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Chuyển sang ảnh ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
