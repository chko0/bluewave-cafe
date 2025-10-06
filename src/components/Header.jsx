import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import config from "../config.json";

import AppLogo from "/favicon.svg";

export default function Header() {
  const { colors } = useTheme();

  return (
    <header
      className="text-white py-8 pt-17 shadow-lg relative overflow-hidden" // Added relative & overflow-hidden for potential background effects
      style={{
        background: `linear-gradient(to right, ${colors.primary700}, ${colors.primary600}, ${colors.primary500})`,
      }}
    >
      {/* Optional: Add a subtle background pattern or texture for extra polish */}
      {/* <div 
        className="absolute inset-0 bg-pattern-subtle opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'url(/path/to/subtle-pattern.svg)', backgroundSize: '200px' }}
      ></div> */}

      <div className="relative z-10">
        <Link to="/" className="flex justify-center items-center gap-1.5">
          <img
            src={AppLogo}
            alt={`${config.site.name} Logo`}
            className="h-12 md:h-14 w-auto object-contain drop-shadow-md"
            style={{ filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.3))" }}
          />

          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-lg">
            {config.site.name}
          </h1>
        </Link>

        <p
          className="text-center text-md font-light tracking-wide"
          style={{ color: colors.lightBg }}
        >
          {config.site.subtitle}
        </p>
      </div>
    </header>
  );
}
