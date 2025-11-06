import { useEffect, useRef, useState } from "react";

/**
 * Lightweight scroll listener that throttles updates with requestAnimationFrame
 * to avoid janky re-renders during parallax effects.
 */
export const useSmoothScrollY = () => {
  const [scrollY, setScrollY] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateScroll = () => {
      frameRef.current = null;
      setScrollY(window.scrollY);
    };

    const handleScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(updateScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialize on mount so components have the initial value.
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return scrollY;
};
