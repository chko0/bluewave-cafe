import clsx from "clsx";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeIcon({ themeKey, theme, onClick }) {
  const { themeKey: currentThemeKey, setTheme } = useTheme();
  const isSelected = themeKey === currentThemeKey;

  const handleClick = () => {
    setTheme(themeKey);
    onClick?.(themeKey);
    localStorage.setItem("Theme", themeKey);
  };

  return (
    <motion.div
      className="relative group"
      initial={false}
      animate={isSelected ? { scale: 1.15 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
    >
      {/* Swatch button */}
      <motion.button
        onClick={handleClick}
        aria-label={`Select ${theme.name} theme`}
        className={clsx(
          "h-8 w-8 rounded-xl transition-all duration-300",
          "bg-gradient-to-br from-[var(--active-bg)] to-[var(--primary-500)]",
          "border-2",
          isSelected
            ? "border-[var(--primary-900)] ring-4 ring-[var(--primary-600)]/30 shadow-lg"
            : "border-[var(--border-color)] shadow-sm",
        )}
        whileHover={{ scale: isSelected ? 1.15 : 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          "--active-bg": theme.activeBg,
          "--primary-500": theme.primary500,
          "--primary-600": theme.primary600,
          "--primary-900": theme.primary900,
          "--border-color": theme.border,
        }}
      />

      {/* Tooltip */}
      <span
        className={`absolute right-full top-1/2 -translate-y-1/2 mr-3 
                    px-2.5 py-1 rounded-md bg-gray-900 text-white
                    text-xs tracking-wide shadow-md
                    opacity-0 translate-x-2
                    transition-all duration-200
                    group-hover:opacity-100 group-hover:translate-x-0`}
      >
        {theme.name}
      </span>
    </motion.div>
  );
}
