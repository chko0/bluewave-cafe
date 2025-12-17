import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE } from "/src/config";
import { useTheme } from "/src/context/ThemeContext";
import cafeHero from "/cafe-hero.webp";
import { Coffee } from "lucide-react";
import clsx from "clsx";
import "/src/styles/globals.css";
import useScrollTo from "../../hooks/useScrollTo";

export default function HeroSection() {
  const { colors } = useTheme();
  const scrollTo = useScrollTo();

  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between w-full overflow-hidden py-6 lg:py-0 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh]"
      style={{
        background: `linear-gradient(135deg, ${colors.lightBg} 0%, ${colors.inactiveBg} 100%)`,
      }}
    >
      {/* Background radial decoration */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 75% 30%, ${colors.primary100}40, transparent 70%)`,
        }}
      />

      {/* Text Content */}
      <div className="flex-1 max-w-3xl flex flex-col justify-center items-start px-6 md:px-10 lg:px-16 pt-6 pb-12 z-10">
        <Badge variant="default" className="mb-4 text-xs">
          Since 2018
        </Badge>

        <h1
          role="heading"
          aria-label="Tripoli's Cozy Workspace and Community Spot"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
          style={{ color: colors.primary900 }}
        >
          Tripoli's Cozy Workspace & Community Spot
        </h1>

        <p
          className="text-lg sm:text-xl mb-8 max-w-xl"
          style={{ color: colors.primary900 }}
        >
          {SITE.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button
            to="/menu"
            icon={Coffee}
            className={clsx(
              "rounded-xl shadow-md transition-all duration-300",
              "hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2",
              "focus:ring-primary-500"
            )}
            style={{
              backgroundColor: colors.primary600,
              color: colors.lightBg,
              border: `1px solid ${colors.primary700}`,
            }}
          >
            View Menu
          </Button>

          <Button
            onClick={() => scrollTo("location")}
            className={clsx(
              "rounded-xl shadow-sm transition-all duration-300",
              "hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2",
              "focus:ring-primary-500"
            )}
            style={{
              backgroundColor: colors.lightBg,
              color: colors.primary900,
              border: `1px solid ${colors.inactiveBg}`,
            }}
          >
            Visit Us!
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="lg:flex-none lg:w-2/5 flex items-center justify-center relative w-full pt-12 lg:pt-0 z-10">
        <img
          src={cafeHero}
          alt="Bluewave Cafe interior with cozy seating and ambient lighting"
          className="w-full max-w-xl lg:max-w-md xl:max-w-lg rounded-xl shadow-2xl object-cover h-96 lg:h-[80vh] object-center transform transition-transform duration-500 hover:scale-[1.01]"
        />

        {/* Subtle wave overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 70%)",
            animation: "waveAnimation 10s infinite linear",
          }}
        />
      </div>
    </section>
  );
}
