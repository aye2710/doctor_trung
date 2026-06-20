import { motion, AnimatePresence } from "framer-motion";
import { storyVisuals } from "../data/storyVisuals";

interface StoryVisualPanelProps {
  activeSection: string;
}

export function StoryVisualPanel({ activeSection }: StoryVisualPanelProps) {
  // Fallback to the first visual item if activeSection isn't found
  const currentVisual =
    storyVisuals.find((v) => v.id === activeSection) || storyVisuals[0];

  return (
    <div className="sticky top-[110px] w-full h-[calc(100vh-150px)] rounded-3xl overflow-hidden border border-border shadow-md bg-medical-navy flex flex-col justify-end p-6 select-none">
      
      {/* Dynamic Background Image transitions */}
      <div className="absolute inset-0 z-0 bg-medical-navy">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVisual.id}
            initial={{ opacity: 0, scale: 1.04, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentVisual.image}
              alt={currentVisual.alt}
              className="w-full h-full object-cover"
            />
            {/* Soft blue branding overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-medical-navy via-medical-navy/30 to-medical-blue/10 mix-blend-multiply opacity-80" />
            <div className="absolute inset-0 bg-medical-blue/10 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Chapter Details Caption overlay */}
      <div className="relative z-10 text-white flex flex-col gap-2 max-w-full">
        {/* Floating chapter label */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-sky-blue bg-white/10 px-2 py-0.5 rounded backdrop-blur-xs">
            CHƯƠNG {currentVisual.index}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-success-teal animate-pulse" />
        </div>
        
        {/* Cinematic Title & Subtitle */}
        <h3 className="text-2xl font-serif italic text-white tracking-wide leading-tight">
          {currentVisual.title}
        </h3>
        {currentVisual.subtitle && (
          <p className="text-white/70 text-xs md:text-sm font-sans font-light max-w-xs truncate">
            {currentVisual.subtitle}
          </p>
        )}
      </div>

    </div>
  );
}
