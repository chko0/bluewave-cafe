import { useState } from "react";
import { Palette, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import ThemeIcon from "./ThemeIcon";
import { palette } from "../../themes/colors";
import Button from "./Button";

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 8 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 220,
        damping: 20,
        duration: 0.25,
        staggerChildren: 0.05, // icons appear one by one
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 6,
      transition: { duration: 0.18 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.15 },
    },
  };

  const handleThemeSelect = (key) => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="theme-list"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="mb-3 px-2.5 py-3 bg-white/95 backdrop-blur-xl 
                       rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] 
                       border border-gray-200/70
                       flex flex-col space-y-2 origin-bottom-right"
          >
            {Object.keys(palette).map((key) => (
              <motion.div key={key} variants={itemVariants}>
                <ThemeIcon
                  themeKey={key}
                  theme={palette[key]}
                  onClick={handleThemeSelect}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <div className="relative group flex items-center justify-end">
        {/* Tooltip */}
        <span
          className={`absolute right-full mr-3 whitespace-nowrap
                      px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-lg 
                      transition-all duration-300 transform translate-x-2
                      opacity-0 group-hover:opacity-100 group-hover:translate-x-0
                      pointer-events-none select-none`}
          style={{
            display: isOpen ? "none" : "block",
          }}
        >
          Theme
        </span>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="theme-list"
          aria-label={isOpen ? "Close Theme Selector" : "Open Theme Selector"}
          className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center 
                     transition-all duration-300 transform hover:scale-105 
                     focus:outline-none focus:ring-4 focus:ring-offset-2 text-white"
          style={{
            background: isOpen ? "#6B7280" : colors.primary600,
            boxShadow: `0 8px 18px rgba(0, 0, 0, 0.25)`,
          }}
        >
          {isOpen ? <X size={24} /> : <Palette size={24} />}
        </Button>
      </div>
    </div>
  );
}
