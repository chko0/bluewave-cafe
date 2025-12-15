import Badge from "../ui/Badge";
import "../../styles/globals.css";
import Button from "../ui/Button";
import { SITE } from "/src/config";
import { useTheme } from "../../context/ThemeContext";
import cafeHero from "../../../public/cafe-hero.webp";
import { Coffee } from "lucide-react";
import clsx from "clsx";

export default function HeroSection() {
  const { colors } = useTheme();

  // Define the common button styles for better readability and hover state
  const primaryBtnStyle = {
    backgroundColor: colors.primary600,
    color: colors.lightBg,
    border: `1px solid ${colors.primary700}`,
  };

  const secondaryBtnStyle = {
    backgroundColor: colors.lightBg,
    color: colors.primary900,
    border: `1px solid ${colors.inactiveBg}`,
  };

  // Define the base component style
  const sectionStyle = {
    background: `linear-gradient(135deg, ${colors.lightBg} 0%, ${colors.inactiveBg} 100%)`,
    minHeight: "75vh", // Increased height for visual impact
  };

  return (
    <section
      className="relative w-full flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden py-12 lg:py-0"
      style={sectionStyle}
    >
      {/* Background ambient decoration */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 75% 30%, ${colors.primary100}40, transparent 70%)`,
        }}
      />

      {/* Text Content */}
      <div className="flex-1 max-w-3xl flex flex-col items-start justify-center px-6 md:px-10 lg:px-16 pt-8 pb-12 z-10">
        {/* Badge */}
        <Badge variant="default" className="mb-4 text-xs">
          Since 2018
        </Badge>
        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
          style={{ color: colors.primary900 }}
        >
          Tripoli's Cozy Workspace & Community Spot
        </h1>
        {/* Description */}
        <p
          className="text-lg sm:text-xl mb-8 max-w-xl"
          style={{ color: colors.primary900 }}
        >
          {SITE.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          {/* Primary Action */}
          <Button
            to="/menu"
            icon={Coffee}
            className={clsx(
              "rounded-xl shadow-md transition-all",
              "hover:bg-opacity-90" // General transition placeholder
            )}
            style={primaryBtnStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.primary700;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.primary600;
            }}
          >
            View Menu
          </Button>

          {/* Secondary Action */}
          <Button
            to="/offers"
            className={clsx(
              "rounded-xl shadow-sm transition-all",
              "hover:bg-opacity-90"
            )}
            style={secondaryBtnStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.inactiveBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.lightBg;
            }}
          >
            Today’s Offers
          </Button>
        </div>
      </div>

      {/* Hero Image Container */}
      <div className="lg:flex-none lg:w-2/5 flex items-center justify-center relative w-full pt-12 lg:pt-0 z-10">
        <img
          src={cafeHero}
          alt="Bluewave Cafe interior"
          className="w-full max-w-xl lg:max-w-md xl:max-w-lg rounded-xl shadow-2xl object-cover h-96 lg:h-[80vh] object-center transform transition-all duration-500 hover:scale-[1.01]"
        />

        {/* Optional subtle steam/wave animation overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 70%)",
            animation: "waveAnimation 10s infinite linear",
            zIndex: 1, // Ensure overlay is above image but below text
          }}
        />
      </div>
    </section>
  );
}
