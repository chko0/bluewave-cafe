import menuData from "../../data/menuData";
import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import clsx from "clsx";

export default function CategoryNav({
  activeCategory,
  handleCategoryChange,
  navbarHeight,
}) {
  const activeItemRef = useRef(null);

  useEffect(() => {
    activeItemRef.current?.scrollIntoView({
      // Scroll the element into view
      behavior: "smooth", // Use smooth scrolling for a better user experience
      inline: "center", // Center the element in the viewable area (best for horizontal)
      block: "nearest", // Align vertically to the nearest edge (default for horizontal scrolling)
    });
  }, [activeCategory]);

  return (
    <nav
      className="z-40 overflow-x-auto border-b shadow-sm sticky bg-brand-light-bg border-brand-border top-[var(--navbar-height)]"
      style={{ "--navbar-height": `${navbarHeight}px` }}
    >
      {/* Left gradient overlay */}
      <div
        className="absolute top-0 left-0 h-full w-11 pointer-events-none z-41
          bg-gradient-to-r from-brand-light-bg via-transparent to-transparent"
      />

      {/* Right gradient overlay */}
      <div
        className="absolute top-0 right-0 h-full w-11 pointer-events-none z-41
          bg-gradient-to-l from-brand-light-bg via-transparent to-transparent"
      />

      <div className="overflow-x-auto scrollbar scrollbar-thumb-rounded scrollbar-thin">
        <div className="flex gap-3 px-4 py-2 min-w-max justify-start sm:justify-center rtl:flex-row-reverse">
          {Object.entries(menuData).map(([key, data]) => {
            const { icon: Icon, id: categoryId, label: categoryLabel } = data;
            const isActive = activeCategory === categoryId;

            return (
              <Button
                key={categoryId}
                ref={isActive ? activeItemRef : null}
                onClick={() => handleCategoryChange(categoryId)}
                aria-label={`Select ${categoryLabel} category`}
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
                {categoryLabel}
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
