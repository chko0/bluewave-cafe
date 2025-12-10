import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import config from "../../config";
import { ReactComponent as AppLogo } from "/src/assets/favicon.svg";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  const { colors } = useTheme();

  return (
    <header
      className="relative z-10 text-white py-6 pt-18 shadow-lg relative overflow-hidden select-none"
      ref={ref}
      style={{
        background: `linear-gradient(to right, ${colors.primary700}, ${colors.primary600}, ${colors.primary500})`,
      }}
    >
      <div className="flex justify-center">
        <Link to="/" className="flex flex-col items-center justify-center p-2">
          {/* Logo Container */}
          <div className="rounded-full bg-white shadow-xl p-2  flex items-center justify-center mb-2 h-14 w-14">
            <AppLogo
              className="h-full w-full object-contain drop-shadow-md"
              style={{
                "--color-primary": colors.activeBg,
                "--color-accent": colors.inactiveBg,
              }}
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
    </header>
  );
});

export default Header;
