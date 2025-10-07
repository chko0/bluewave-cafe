import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import config from "../config.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import AppLogo from "/favicon.svg";

export default function Header() {
  const { colors } = useTheme();

  return (
    <header
      className="text-white py-6 pt-18 shadow-lg relative overflow-hidden"
      style={{
        background: `linear-gradient(to right, ${colors.primary700}, ${colors.primary600}, ${colors.primary500})`,
      }}
    >
      <div className="relative z-10">
        <div className="flex justify-center">
          <Link
            to="/"
            className="flex flex-col items-center justify-center p-2"
          >
            {/* Logo Container */}
            <div
              className="rounded-full bg-white shadow-xl p-2 h-full w-full flex items-center justify-center mb-2"
              style={{ height: "3.4rem", width: "3.4rem" }}
            >
              <LazyLoadImage
                src={AppLogo}
                alt={`${config.site.name} Logo`}
                effect="opacity"
                className="h-full w-full object-contain drop-shadow-md"
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-lg -mb-0.5">
              {config.site.name}
            </h1>

            {/* Subtitle */}
            <p
              className="text-center text-sm md:text-lg font-light tracking-wide"
              style={{ color: colors.lightBg }}
            >
              {config.site.subtitle}
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
}
