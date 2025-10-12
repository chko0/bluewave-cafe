import { useState } from "react";
import { Palette, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import ThemeIcon from "./ThemeIcon";
import { palette } from "../theme/colors";

export default function ThemeSwitcher() {
  // State to manage the open/closed status of the theme list
  const [isOpen, setIsOpen] = useState(false);

  const { colors } = useTheme();

  const handleThemeSelect = (key) => {
    setIsOpen(false);
  };

  const listVariants = {
    hidden: {
      opacity: 0,
      y: 10, // Starts 10 pixels below its final position
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25, // Quick, smooth transition
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 5,
      transition: {
        duration: 0.15, // Quicker exit
      },
    },
  };
  return (
    // Fixed container positioned at the bottom right
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          // The Floating Theme List
          <motion.div
            id="theme-list"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={listVariants}
            className="mb-3 p-3 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 flex flex-col space-y-3 origin-bottom-right"
          >
            {Object.keys(palette).map((key) => (
              <ThemeIcon
                key={key}
                themeKey={key}
                theme={palette[key]}
                onClick={handleThemeSelect} // Passes the handler to close the menu
              />
            ))}
          </motion.div>
        )}

        {/* The Toggle Button (FAB) */}
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

          {/* Tooltip */}
          <span
            className={`absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-gray-800 text-white text-sm font-medium rounded-lg whitespace-nowrap 
            opacity-0 pointer-events-none transition-opacity duration-300 group-hover:pointer-events-auto ${
              !isOpen ? "group-hover:opacity-100" : ""
            }`}
          >
            Theme
          </span>
        </div>
      </AnimatePresence>
    </div>
  );
}
