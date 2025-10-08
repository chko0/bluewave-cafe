import { useState } from "react";
import { Palette, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import ThemeIcon from "./ThemeIcon";
import { palette } from "../theme/colors";

export default function ThemeSwitcher() {
  // State to manage the open/closed status of the theme list
  const [isOpen, setIsOpen] = useState(false);

  const { colors } = useTheme();

  // Handle selection and close the panel
  const handleThemeSelect = (key) => {
    // The actual theme setting happens inside ThemeSwatch's own handleClick
    setIsOpen(false);
  };

  return (
    // Fixed container positioned at the bottom right
    <div className="fixed bottom-6 right-6 z-50">
      {/* 💡 1. The Floating Theme List (Always Rendered, Visibility Controlled) */}
      <div
        id="theme-list"
        className={`
          mb-3 p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 
          flex flex-col space-y-3 origin-bottom-right 
          
          transition-all duration-300 ease-in-out
          
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto" // Visible state
              : "opacity-0 scale-90 pointer-events-none" // Hidden state (prevents clicks)
          }
        `}
      >
        {Object.keys(palette).map((key) => (
          <ThemeIcon
            key={key}
            themeKey={key}
            theme={palette[key]}
            onClick={handleThemeSelect} // Passes the handler to close the menu
          />
        ))}
      </div>

      {/* 💡 2. The Toggle Button (FAB) */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="theme-list"
          aria-label={isOpen ? "Close Theme Selector" : "Open Theme Selector"}
          className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 text-white hover:cursor-pointer"
          style={{
            // Change FAB color when open
            background: isOpen ? "gray" : colors.primary600,
            boxShadow: `0 8px 15px rgba(0, 0, 0, 0.25), 0 0 0 4px ${colors.primary700}30`, // Subtle shadow effect
          }}
        >
          {/* Change icon based on state */}
          {isOpen ? <X size={24} /> : <Palette size={24} />}
        </button>

        {/* 💡 THE TOOLTIP */}
        <span
          className={`
            absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 
            bg-gray-800 text-white text-sm font-medium rounded-lg whitespace-nowrap 
            opacity-0 pointer-events-none transition-opacity duration-300 
            ${!isOpen ? "group-hover:opacity-100" : ""}
          `}
        >
          Theme
        </span>
      </div>
    </div>
  );
}
