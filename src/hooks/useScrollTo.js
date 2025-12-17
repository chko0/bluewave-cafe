import { useCallback } from "react";

export default function useScrollTo() {
  const scrollTo = useCallback((target, offset = 0) => {
    if (typeof window === "undefined") return;

    let topPosition = 0;

    if (typeof target === "number") {
      // If passing a coordinate
      topPosition = target - offset;
    } else if (typeof target === "string") {
      // If passing an element ID
      const el = document.getElementById(target);
      if (!el) return;
      topPosition = el.getBoundingClientRect().top + window.scrollY - offset;
    }

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  }, []);

  return scrollTo;
}
