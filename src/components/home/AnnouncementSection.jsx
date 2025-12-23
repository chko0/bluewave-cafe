import { SITE } from "../../config/site";
import { useTheme } from "../../context/ThemeContext";
import AnnouncementRail from "./announcements/AnnouncementRail";

export default function AnnouncementSection() {
  const { colors } = useTheme();

  return (
    <section
      aria-labelledby="announcements-heading"
      className="relative px-6 md:px-16 py-8 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: colors.primary500 }}
            ></span>
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: colors.primary600 }}
            ></span>
          </span>

          <h2
            className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-70"
            style={{ color: colors.primary900 }}
          >
            Today at {SITE.shortName}
          </h2>
          <div
            className="h-[1px] flex-1 rounded-full opacity-10"
            style={{ backgroundColor: colors.primary900 }}
          />
        </div>

        {/*
          Fixed min-height prevents layout shift on mobile when
          announcement content or CTA length changes 
        */}
        <div className="min-h-[80px] md:min-h-[70px]">
          <AnnouncementRail />
        </div>
      </div>
    </section>
  );
}
