import { useTheme } from "../../../context/ThemeContext";
import { Calendar, Info, Sparkles } from "lucide-react";
import Button from "../../ui/Button";

const ICONS = {
  new: Sparkles,
  info: Info,
  event: Calendar,
};

export default function AnnouncementCard({ announcement }) {
  const { colors } = useTheme();
  const Icon = ICONS[announcement.type] || Info;

  return (
    <div
      className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-md"
      style={{
        background: `linear-gradient(
          to right,
          ${colors.primary600},
          ${colors.primary500}
        )`,
        color: colors.activeText,
      }}
    >
      {/* Icon */}
      <Icon className="w-6 h-6 flex-shrink-0 opacity-90" />

      {/* Text */}
      <div className="flex-1">
        <h4 className="font-bold text-sm">{announcement.title}</h4>
        <p className="text-sm opacity-90">{announcement.message}</p>
      </div>

      {/* CTA */}
      {announcement.cta && (
        <Button
          to={announcement.cta.to}
          className="bg-white/20 hover:bg-white/30 text-white text-sm rounded-lg"
        >
          {announcement.cta.label}
        </Button>
      )}
    </div>
  );
}
