import { Link, useLocation } from "react-router-dom";
import { NAVIGATION } from "/src/config";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import IconText from "../ui/IconText";
import BrandLogo from "../common/BrandLogo";

export default function Navbar({ ref }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navLinks = NAVIGATION.filter((item) => !item.hidden);

  return (
    <nav
      ref={ref}
      className="
          fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 transition-all duration-300 shadow-lg shadow-black/5
          bg-gradient-to-br from-brand-primary-600/85 to-brand-primary-600/85
        "
    >
      {/* Main container */}
      <div className="flex justify-between items-center px-5 sm:px-8 transition-all duration-300 py-2 md:py-3">
        {/* Logo */}
        <BrandLogo
          layout="horizontal"
          headingLevel="div"
          showLogo={true}
          showTitle={false}
          showSubtitle={false}
          size={45}
        />

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6 sm:gap-8">
          {navLinks.map(({ path, label, icon: Icon, match }) => {
            const isActive = match?.test(location.pathname);

            return (
              <Link
                key={path}
                to={path}
                aria-label={`Go to ${label} page`}
                className={`group flex items-center gap-1.5 font-medium text-brand-active-text relative transition-all duration-200 whitespace-nowrap select-none ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                <IconText
                  icon={Icon}
                  iconClassName={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                    isActive ? "scale-110" : "group-hover:scale-105"
                  }`}
                >
                  {label}
                </IconText>

                {/* Underline */}
                <span
                  className={`absolute bottom-[-5px] left-0 w-full h-[2px] rounded-full transition-all duration-300 bg-brand-active-text ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-75 group-hover:scale-x-75"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-brand-active-text p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1.5 px-6 pb-4 animate-fadeIn">
          {navLinks.map(({ path, label, icon: Icon, match }) => {
            const isActive = match?.test(location.pathname);

            return (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2.25 py-2 rounded-md transition text-brand-active-text ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
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
