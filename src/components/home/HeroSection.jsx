import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE } from "/src/config";
import { useTheme } from "/src/context/ThemeContext";
import cafeHero from "/cafe-hero.webp";
import { Coffee } from "lucide-react";
import "/src/styles/globals.css";
import useScrollTo from "../../hooks/useScrollTo";

export default function HeroSection() {
  const { colors } = useTheme();
  const scrollTo = useScrollTo();

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
      "
      style={{
        background: `linear-gradient(135deg, ${colors.lightBg} 0%, ${colors.inactiveBg} 100%)`,
      }}
    >
      {/* Decorative blur */}
      <div
        className="
          absolute
          -top-24 -right-24
          w-72 h-72 sm:w-96 sm:h-96
          rounded-full
          blur-[120px]
          opacity-20
          pointer-events-none
        "
        style={{ backgroundColor: colors.primary400 }}
      />

      {/* Content container */}
      <div
        className="
          relative
          max-w-7xl mx-auto
          px-5 sm:px-8 lg:px-12 xl:px-16
          py-7 sm:py-8 lg:py-12
          grid
          grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-16
          items-center
        "
      >
        {/* Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <Badge
            className="
              mb-5
              px-3 py-1.5
              uppercase tracking-wider
              text-xs sm:text-sm
              font-semibold
              shadow-sm
            "
            style={{
              backgroundColor: colors.primary100,
              color: colors.primary900,
            }}
          >
            Established 2018
          </Badge>

          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl
              xl:text-6xl
              font-bold
              leading-tight
              tracking-tight
              mb-5
            "
            style={{ color: colors.primary900 }}
          >
            Tripoli's Cozy{" "}
            <span className="italic" style={{ color: colors.primary600 }}>
              Workspace
            </span>{" "}
            & Community
          </h1>

          <p
            className="
              text-base sm:text-lg md:text-xl
              max-w-md sm:max-w-lg
              mb-8
              leading-relaxed
              opacity-90
            "
            style={{ color: colors.primary900 }}
          >
            {SITE.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              to="/menu"
              icon={Coffee}
              className="
                w-full sm:w-auto
                px-8 py-4
                rounded-full
                font-semibold
                shadow-md
                transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-xl hover:saturate-110
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-offset-2
              "
              style={{
                backgroundColor: colors.primary600,
                color: "#fff",
              }}
            >
              Explore Menu
            </Button>

            <Button
              onClick={() => scrollTo("location")}
              className="
                w-full sm:w-auto
                px-7 py-3.5
                rounded-full
                font-medium
                border
                shadow-sm
                transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-md cursor-pointer
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-offset-2
              "
              style={{
                backgroundColor: colors.lightBg,
                borderColor: colors.border,
                color: colors.primary900,
              }}
            >
              Visit Us
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full">
          <div
            className="
              relative
              w-full
              h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px]
              rounded-2xl
              overflow-hidden
              shadow-2xl
            "
          >
            <img
              src={cafeHero}
              alt="Bluewave Cafe Interior"
              className="w-full h-full object-cover"
            />

            {/* Desktop-only soft edge */}
            <div
              className="
                hidden lg:block
                absolute inset-y-0 left-0
                w-24
                pointer-events-none
              "
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(255,255,255,0.8))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
