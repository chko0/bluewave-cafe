import { useTheme } from "../../../context/ThemeContext";
import { Maximize2 } from "lucide-react";
import Button from "../../ui/Button";

export default function AnnouncementCard({ announcement, onOpen }) {
  const { colors } = useTheme();

  const Icon = announcement.icon ?? null;

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
      onClick={onOpen}
      className="group flex flex-row items-center gap-4 px-5 py-4 rounded-2xl border border-white/20 backdrop-blur-sm shadow-sm transition-all hover:shadow-md cursor-pointer"
      style={{
        background: `linear-gradient(to right, ${colors.primary600}, ${colors.primary500})`,
        color: colors.activeText,
      }}
    >
      <div className="p-2 rounded-xl bg-white/10 hidden sm:block">
        {Icon && <Icon className="w-5 h-5 text-white" />}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-sm leading-tight truncate">
            {announcement.title}
          </h4>
          {/* Subtle indicator that there is more text */}
          <Maximize2 className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity hidden md:block" />
        </div>
        <p className="text-xs opacity-90 line-clamp-1">
          {announcement.message}
        </p>
      </div>

      <div className="flex items-center gap-3 flex-shrink-0">
        {announcement.cta && (
          <Button
            to={announcement.cta.to}
            onClick={(e) => e.stopPropagation()} // Prevent modal when clicking button
            className="!py-1.5 !px-4 bg-white text-primary-900 text-xs font-bold rounded-full hover:bg-opacity-90 transition-colors shadow-sm"
            style={{ color: colors.primary900 }}
          >
            {announcement.cta.label}
          </Button>
        )}
      </div>
    </div>
  );
}
