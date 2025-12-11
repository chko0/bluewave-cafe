import menuData from "../../data/menuData";
import { useTheme } from "../../context/ThemeContext";
import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import clsx from "clsx";

export default function CategoryNav({
  activeCategory,
  setActiveCategory,
  navbarHeight,
}) {
  const { colors } = useTheme();

  const activeItemRef = useRef(null);

  const hoverBackgroundColor = colors.hoverBg; // Equivalent to a color-300 level background
  const hoverTextColor = colors.inactiveText; // Keeps the text readable against the light hover background

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
      className="z-40 overflow-x-auto border-b shadow-sm sticky"
      style={{
        top: navbarHeight + "px",
        backgroundColor: colors.lightBg,
        borderColor: colors.border,
      }}
    >
      {/* Left gradient overlay */}
      <div
        className="absolute top-0 left-0 h-full w-11 pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${colors.lightBg}, transparent, transparent)`,
        }}
      />

      {/* Right gradient overlay */}
      <div
        className="absolute top-0 right-0 h-full w-11 pointer-events-none"
        style={{
          background: `linear-gradient(to left, ${colors.lightBg}, transparent, transparent)`,
        }}
      />

      <div className="overflow-x-auto scrollbar scrollbar-thumb-rounded scrollbar-thin">
        <div className="flex gap-3 px-4 py-2 min-w-max justify-start sm:justify-center rtl:flex-row-reverse">
          {Object.entries(menuData).map(([name, data]) => {
            const Icon = data.icon;
            const isActive = activeCategory === name;

            return (
              <Button
                key={name}
                icon={Icon}
                iconClassName="w-5 h-5"
                ref={isActive ? activeItemRef : null}
                onClick={() => setActiveCategory(name)}
                aria-label={`Select ${name} category`}
                className={clsx(
                  "px-5 py-2 rounded-full font-semibold transition-all select-none",
                  !isActive &&
                    "bg-[var(--inactive-bg)] text-[var(--inactive-text)] hover:bg-[var(--hover-bg)] hover:text-[var(--hover-text)]",
                  activeCategory === name
                    ? "shadow-lg scale-105"
                    : "hover:scale-105 hover:shadow hover:cursor-pointer"
                )}
                style={{
                  "--hover-bg": hoverBackgroundColor,
                  "--hover-text": hoverTextColor,
                  "--inactive-bg": colors.inactiveBg,
                  "--inactive-text": colors.inactiveText,

                  backgroundColor: isActive ? colors.activeBg : undefined,
                  color: isActive ? colors.activeText : undefined,
                  boxShadow: isActive ? "0 4px 10px rgba(0,0,0,0.2)" : "none",
                }}
              >
                {name}
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
