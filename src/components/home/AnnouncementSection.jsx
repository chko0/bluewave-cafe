import AnnouncementRail from "./announcements/AnnouncementRail";
import { useTheme } from "../../context/ThemeContext";

export default function AnnouncementSection() {
  const { colors } = useTheme();

  return (
    <section
      aria-labelledby="announcements-heading"
      className="relative px-6 md:px-16 py-10 overflow-hidden"
      // style={{
      //   background: `linear-gradient(
      //     to bottom,
      //     ${colors.lightBg},
      //     ${colors.inactiveBg}
      //   )`,
      // }}
    >
      {/* Section Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2
          id="announcements-heading"
          className="text-lg md:text-xl font-bold tracking-wide"
          style={{ color: colors.primary900 }}
        >
          Today at Bluewave
        </h2>

        {/* Optional subtle accent line */}
        <div
          className="h-[2px] flex-1 ml-4 rounded-full opacity-30"
          style={{ backgroundColor: colors.primary300 }}
        />
      </div>

      {/* Announcement Rail */}
      <AnnouncementRail />
    </section>
  );
}
