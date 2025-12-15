import { Star } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";

export default function TestimonialCard({ testimonial }) {
  const { colors } = useTheme();
  const { name, rating, quote } = testimonial;

  return (
    <div
      className="rounded-2xl p-6 shadow-md flex flex-col justify-between h-full"
      style={{
        background: `linear-gradient(to bottom right, ${colors.lightBg}, white)`,
        border: `1px solid ${colors.border}`,
      }}
    >
      {/* Quote */}
      <p className="text-base italic mb-4" style={{ color: colors.primary900 }}>
        “{quote}”
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Name */}
        <span
          className="text-sm font-semibold"
          style={{ color: colors.primary700 }}
        >
          – {name}
        </span>

        {/* Stars */}
        <div className="flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-current"
              style={{ color: colors.primary600 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
