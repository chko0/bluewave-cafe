import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeIcon({ themeKey, theme, onClick }) {
  const { themeKey: currentThemeKey, setTheme } = useTheme();
  const isSelected = themeKey === currentThemeKey;

  const handleClick = () => {
    setTheme(themeKey);
    // Execute the provided onClick prop if it exists (used by ThemeSwitcher)
    if (onClick) {
      onClick(themeKey);
    }
    localStorage.setItem("Theme", themeKey);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleClick}
        aria-label={`Select ${theme.name} theme`}
        className={`w-7 h-7 rounded-lg border-2 p-0.5 transition-all duration-200 focus:outline-none focus:ring-4 hover:cursor-pointer
          ${
            isSelected ? "scale-110 ring-2" : "hover:scale-105 hover:shadow-lg"
          }`}
        style={{
          // Gradient background for the professional color swatch look
          background: `linear-gradient(to right, ${theme.activeBg}, ${theme.primary500})`,

          // Dynamic border/ring based on selection status for high contrast
          borderColor: isSelected ? theme.primary900 : theme.border,
          boxShadow: isSelected
            ? `0 0 0 2px ${theme.activeBg}, 0 0 0 5px ${theme.primary600}`
            : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        }}
      />

      <span
        className={`
          absolute right-full top-1/2 -translate-y-1/2 mr-4 px-2 py-1 
          bg-gray-800 text-white text-xs font-medium rounded-md whitespace-nowrap 
          opacity-0 pointer-events-none transition-opacity duration-200
          group-hover:opacity-100
        `}
      >
        {theme.name}
      </span>
    </div>
  );
}
