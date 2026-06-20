import { useEffect } from "react";

export function useSoftSectionSnap(sectionIds: string[], enabled: boolean = true) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    // Soft snapping requirements:
    // 1. Only on desktop (width >= 1024px)
    if (window.innerWidth < 1024) return;

    // 2. Disable if prefers-reduced-motion is active
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let isSnapping = false;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (isSnapping) return;

      // 3. Do not snap when a modal or gallery dialog is open
      const hasModal = document.querySelector('[role="dialog"]') !== null || 
                         document.body.style.overflow === "hidden";
      if (hasModal) return;

      clearTimeout(scrollTimeout);

      // Debounce scroll action to detect when user stops scrolling
      scrollTimeout = setTimeout(() => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        let closestSection: HTMLElement | null = null;
        let minDistance = Infinity;
        let closestSectionTop = 0;

        sectionIds.forEach((id) => {
          const el = document.getElementById(id);
          if (!el) return;

          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top); // Distance from top of viewport
          
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = el;
            closestSectionTop = rect.top + scrollY;
          }
        });

        if (!closestSection) return;

        const sectionHeight = (closestSection as HTMLElement).offsetHeight;
        
        // 4. Do not snap if the section is very long and has content to scroll through
        const isLongSection = sectionHeight > viewportHeight * 1.25;

        // Snapping range: only snap if within 150px of the boundary
        const snapThreshold = 150;

        if (minDistance > 0 && minDistance < snapThreshold) {
          if (isLongSection && minDistance > 80) {
            // If it's a long section and they aren't right at the top edge, don't force snap
            return;
          }

          isSnapping = true;
          
          // Align to the top of the section (accounting for the header height)
          const headerOffset = 80;
          const targetY = Math.max(0, closestSectionTop - headerOffset);

          window.scrollTo({
            top: targetY,
            behavior: "smooth"
          });

          // Reset snapping flag after smooth scroll is expected to end (approx. 850ms)
          setTimeout(() => {
            isSnapping = false;
          }, 850);
        }
      }, 200); // 200ms debounce
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [sectionIds, enabled]);
}
