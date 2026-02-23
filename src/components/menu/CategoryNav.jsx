import { useCallback, useEffect, useRef, useState } from "react";

import { menuData } from "@/data";
import { Button } from "@/components";

import clsx from "clsx";

export default function CategoryNav({
  activeCategory,
  handleCategoryChange,
  navbarHeight,
}) {
  const activeItemRef = useRef(null);
  const scrollRef = useRef(null);

  const [gradientState, setGradientState] = useState({
    left: false,
    right: false,
  });

  // Scroll the element into view
  useEffect(() => {
    activeItemRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeCategory]);

  const updateGradients = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const left = el.scrollLeft > 0;
    const right = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;

    setGradientState((prev) => {
      if (prev.left === left && prev.right === right) return prev;
      return { left, right };
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateGradients();

    el.addEventListener("scroll", updateGradients, { passive: true });
    window.addEventListener("resize", updateGradients);

    return () => {
      el.removeEventListener("scroll", updateGradients);
      window.removeEventListener("resize", updateGradients);
    };
  }, [updateGradients]);

  const { left: showLeft, right: showRight } = gradientState;

  return (
    <nav
      className="z-40 border-b shadow-sm sticky bg-brand-light-bg border-brand-border top-[var(--navbar-height)]"
      style={{ "--navbar-height": `${navbarHeight}px` }}
    >
      {/* Left gradient overlay */}
      <div
        className={clsx(
          "absolute top-0 left-0 h-full w-11 pointer-events-none z-41 transition-opacity duration-300",
          "bg-gradient-to-r from-brand-light-bg via-transparent to-transparent",
          showLeft ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Right gradient overlay */}
      <div
        className={clsx(
          "absolute top-0 right-0 h-full w-11 pointer-events-none z-41 transition-opacity duration-300",
          "bg-gradient-to-l from-brand-light-bg via-transparent to-transparent",
          showRight ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar scrollbar-thumb-rounded scrollbar-thin"
      >
        <div className="flex gap-3 px-4 py-2 min-w-max justify-start sm:justify-center rtl:flex-row-reverse">
          {Object.values(menuData).map(({ icon: Icon, id, label }) => {
            const isActive = activeCategory === id;

            return (
              <Button
                key={id}
                ref={isActive ? activeItemRef : null}
                onClick={() => handleCategoryChange(id)}
                aria-label={`Select ${label} category`}
                icon={Icon}
                iconClassName="w-5 h-5"
                className={clsx(
                  // Base Styles
                  "px-5 py-2 rounded-full font-semibold select-none transition-all duration-300",
                  "hover:scale-105 hover:cursor-pointer active:scale-95",

                  // Active vs Inactive States
                  isActive
                    ? "bg-brand-active-bg text-brand-active-text scale-105 shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
                    : "bg-brand-inactive-bg text-brand-inactive-text hover:bg-brand-hover-bg hover:shadow-md",
                )}
              >
                {label}
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
