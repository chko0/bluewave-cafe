import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import config from "../../config";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ ref }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { colors } = useTheme();
  const location = useLocation();
  const navLinks = config.navigation.filter((item) => !item.hidden);

  return (
    <nav
      ref={ref}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 shadow-md"
      style={{
        background: `linear-gradient(
          to right,
          ${colors.primary900}D0,
          ${colors.primary800}D0,
          ${colors.primary700}D0
        )`,
      }}
    >
      {/* Main container */}
      <div
        className={`flex justify-between items-center px-5 sm:px-8 transition-all duration-300 py-3`}
      >
        {/* Logo / Title */}
        <Link
          to="/"
          className="text-lg sm:text-xl font-semibold select-none tracking-wide"
          style={{ color: colors.activeText }}
        >
          {config.site.name}
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6 sm:gap-8">
          {navLinks.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path;

            return (
              <Link
                key={path}
                to={path}
                aria-label={`Go to ${label} page`}
                className={`group flex items-center gap-1.5 font-medium relative transition-all duration-200 whitespace-nowrap select-none ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
                style={{ color: colors.activeText }}
              >
                {Icon && (
                  <Icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  />
                )}

                <span>{label}</span>

                {/* Underline */}
                <span
                  className={`absolute bottom-[-5px] left-0 w-full h-[2px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-75 group-hover:scale-x-75"
                  }`}
                  style={{ backgroundColor: colors.activeText }}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1.5 px-6 pb-4 animate-fadeIn">
          {navLinks.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path;

            return (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2.25 py-2 rounded-md transition ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
                style={{ color: colors.activeText }}
              >
                {Icon && <Icon className="w-5 h-5" />}

                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
