import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import * as LucideIcons from "lucide-react";
import config from "../config.json";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const SCROLL_THRESHOLD = 168;

  useEffect(() => {
    const handleScroll = () => {
      // Check if the vertical scroll position is greater than the threshold
      const shouldShrink = window.scrollY > SCROLL_THRESHOLD;
      if (shouldShrink !== isScrolled) {
        setIsScrolled(shouldShrink);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]); // Depend on isScrolled to avoid unnecessary re-runs

  const { colors } = useTheme();
  const location = useLocation();
  const navLinks = config.navigation;

  return (
    <nav
      className="w-full fixed top-0 z-50 backdrop-blur-xl border-b border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out"
      style={{
        background: `linear-gradient(
          to right,
          ${colors.primary900} 0%,
          ${colors.primary800} 50%,
          ${colors.primary700} 100%
        )`,
        opacity: isScrolled ? 0 : 1,
      }}
    >
      <div
        className={`flex justify-center items-center overflow-x-auto gap-6 sm:gap-10
          ${isScrolled ? "py-2 px-5" : "py-3 px-5 sm:px-8"}
          text-sm sm:text-base transition-all duration-300 ease-in-out
        `}
      >
        {navLinks.map(({ path, label, icon }) => {
          const IconComponent = LucideIcons[icon];

          const isMenuLink = path === "/menu";
          const isRootPath = location.pathname === "/";

          const isActive =
            location.pathname === path || (isRootPath && isMenuLink);

          return (
            <Link
              key={path}
              to={path}
              className={`
                group flex items-center gap-2 font-medium relative transition-all duration-200 whitespace-nowrap
                ${isActive ? "text-white" : "hover:text-white"} 
              `}
              style={{
                color: isActive ? "white" : colors.border,
              }}
            >
              {/* Icon */}
              {IconComponent && (
                <IconComponent
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
                    isActive ? "scale-110" : "group-hover:scale-105"
                  }`}
                />
              )}

              {/* Label */}
              <span>{label}</span>

              {/* Underline animation */}
              <span
                className={`absolute bottom-[-5px] left-0 w-full h-[2px] rounded-full transition-all duration-300 ${
                  isActive
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0 group-hover:opacity-75 group-hover:scale-x-75"
                }`}
                style={{
                  backgroundColor: colors.activeText,
                }}
              ></span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
