import { useTheme } from "../context/ThemeContext";

export default function CategoryHeader({ activeCategory, ActiveIcon }) {
  const { colors } = useTheme();

  const gradient = `linear-gradient(to right, ${colors.primary500}, ${colors.primary600}, ${colors.primary700})`;
  const iconColor = colors.primary500;
  const textColor = colors.primary900;

  return (
    <h2
      className="text-2xl sm:text-3xl font-bold mb-8 flex items-center justify-center gap-3"
      style={{ color: textColor }}
    >
      {/* Left gradient bar */}
      <span
        className="block h-1 w-16 rounded-full"
        style={{ background: gradient }}
      ></span>

      {/* Icon */}
      <ActiveIcon className="w-6 h-6" style={{ color: iconColor }} />

      {/* Category Name */}
      {activeCategory}

      {/* Icon */}
      <ActiveIcon className="w-6 h-6" style={{ color: iconColor }} />

      {/* Right gradient bar */}
      <span
        className="block h-1 w-16 rounded-full"
        style={{ background: gradient }}
      ></span>
    </h2>
  );
}
