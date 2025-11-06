import { useSmoothScrollY } from "@/hooks/useSmoothScrollY";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

type Options = {
  /** Portion of the viewport height where fading should begin (0 - 1). */
  startViewportRatio?: number;
  /** Portion of the viewport height where fading should end (0 - 1). */
  endViewportRatio?: number;
  /** Maximum upward translation in pixels while fading out. */
  translateDistance?: number;
};

type VanishStyle = Pick<CSSProperties, "opacity" | "transform" | "willChange" | "transition">;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const useScrollVanish = <T extends HTMLElement = HTMLDivElement>(options?: Options) => {
  const ref = useRef<T | null>(null);
  const scrollY = useSmoothScrollY();
  const prevStyle = useRef<VanishStyle | null>(null);
  const [style, setStyle] = useState<VanishStyle>({
    opacity: 1,
    transform: "translateY(0px)",
    willChange: "transform, opacity",
    transition: "opacity 0.45s ease, transform 0.45s ease",
  });

  const { startViewportRatio = 0.35, endViewportRatio = 0.05, translateDistance = 72 } = options ?? {};

  const updateStyle = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;

    const start = viewportHeight * startViewportRatio;
    const end = viewportHeight * endViewportRatio;

    const progress = (start - rect.top) / (start - end || 1);
    const clamped = clamp(progress, 0, 1);

    const opacity = 1 - clamped;
    const translateY = -translateDistance * clamped;

    const nextStyle: VanishStyle = {
      opacity,
      transform: `translateY(${translateY}px)`,
      willChange: "transform, opacity",
      transition: "opacity 0.45s ease, transform 0.45s ease",
    };

    const previous = prevStyle.current;
    if (
      !previous ||
      previous.opacity !== nextStyle.opacity ||
      previous.transform !== nextStyle.transform
    ) {
      prevStyle.current = nextStyle;
      setStyle(nextStyle);
    }
  }, [endViewportRatio, startViewportRatio, translateDistance]);

  useEffect(() => {
    updateStyle();
  }, [scrollY, updateStyle]);

  useEffect(() => {
    updateStyle();
  }, [updateStyle]);

  useEffect(() => {
    const handleResize = () => updateStyle();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateStyle]);

  return { ref, style } as const;
};
