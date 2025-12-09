import { useTheme } from "../context/ThemeContext";
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
        className="w-8 h-8 rounded-xl transition-all duration-300 
                   flex items-center justify-center"
        whileHover={{ scale: isSelected ? 1.17 : 1.07 }}
        whileTap={{ scale: 0.94 }}
        style={{
          background: `linear-gradient(135deg, ${theme.activeBg}, ${theme.primary500})`,
          border: `2px solid ${isSelected ? theme.primary900 : theme.border}`,
          boxShadow: isSelected
            ? `
                0 0 0 2px ${theme.activeBg},
                0 0 0 6px ${theme.primary600}40,
                0 4px 16px rgba(0,0,0,0.25)
              `
            : "0 2px 6px rgba(0,0,0,0.15)",
        }}
      />

      {/* Tooltip (modern, subtle) */}
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
