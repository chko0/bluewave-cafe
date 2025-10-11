import { useTheme } from "../context/ThemeContext";

export default function CategoryHeader({ activeCategory, ActiveIcon }) {
  const { colors } = useTheme();

  const gradient = `linear-gradient(to right, ${colors.primary500}, ${colors.primary600}, ${colors.primary700})`;
  const iconColor = colors.primary500;
  const textColor = colors.primary900;

  return (
    <h2
      className="text-2xl font-bold mb-8 flex items-center justify-center gap-3"
      style={{ color: textColor }}
    >
      {/* Left gradient bar */}
      <span
        className="block h-1 w-16 rounded-full"
        style={{ background: gradient }}
        translate="no"
      ></span>

      {/* Icon #1 */}
      <ActiveIcon
        key="left"
        className="w-6 h-6"
        style={{ color: iconColor }}
        translate="no"
      />

      {/* Category Name */}
      {activeCategory}

      {/* Icon #2 */}
      <ActiveIcon
        key="right"
        className="w-6 h-6"
        style={{ color: iconColor }}
        translate="no"
      />

      {/* Right gradient bar */}
      <span
        className="block h-1 w-16 rounded-full"
        style={{ background: gradient }}
        translate="no"
      ></span>
    </h2>
  );
}
