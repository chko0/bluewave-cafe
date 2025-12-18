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
      className="relative flex flex-col lg:flex-row items-center justify-between w-full overflow-hidden min-h-[70vh]"
      style={{
        background: `linear-gradient(135deg, ${colors.lightBg} 0%, ${colors.inactiveBg} 100%)`,
      }}
    >
      {/* Decorative Blur Blobs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: colors.primary400 }}
      />

      {/* Text Content */}
      <div className="flex-1 max-w-4xl flex flex-col justify-center items-center lg:items-start px-6 md:px-12 lg:pl-20 xl:pl-32 py-12 lg:py-0 z-10 text-center lg:text-left">
        <Badge
          variant="default"
          className="mb-6 px-4 py-1.5 uppercase tracking-wider text-xs md:text-sm font-semibold shadow-sm"
          style={{
            backgroundColor: colors.primary100,
            color: colors.primary900,
          }}
        >
          Established 2018
        </Badge>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight"
          style={{ color: colors.primary900 }}
        >
          Tripoli's Cozy <br className="hidden md:block" />
          <span className="italic" style={{ color: colors.primary600 }}>
            Workspace
          </span>{" "}
          & Community
        </h1>

        <p
          className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed opacity-90"
          style={{ color: colors.primary900 }}
        >
          {SITE.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            to="/menu"
            icon={Coffee}
            className="px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            style={{ backgroundColor: colors.primary600, color: "#fff" }}
          >
            Explore Menu
          </Button>

          <Button
            onClick={() => scrollTo("location")}
            className="px-8 py-4 rounded-full backdrop-blur-md transition-all hover:bg-white/30 cursor-pointer"
            style={{
              border: `1px solid ${colors.primary200}`,
              color: colors.primary900,
            }}
          >
            Visit Us
          </Button>
        </div>
      </div>

      {/* Hero Image Container */}
      <div className="relative w-full lg:w-[45%] h-[400px] lg:h-screen z-10">
        <div className="absolute inset-0 lg:left-[-10%]">
          <img
            src={cafeHero}
            alt="Bluewave Cafe Interior"
            className="w-full h-full object-cover shadow-2xl"
            style={{
              // Creating a soft edge on the left for desktop
              maskImage:
                "linear-gradient(to left, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 85%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
