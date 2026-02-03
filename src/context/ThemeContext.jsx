import { createContext, useState, useContext, useLayoutEffect } from "react";
import palette from "@/themes";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const fallbackTheme = "bluewave";
  const savedTheme = localStorage.getItem("Theme");
  const initialTheme =
    savedTheme && palette[savedTheme] ? savedTheme : fallbackTheme;

  const [themeName, setThemeName] = useState(initialTheme);
  const colors = palette[themeName];

  // Update CSS Variables whenever the theme changes
  useLayoutEffect(() => {
    const root = window.document.documentElement;

    // Map the palette keys to CSS variables
    Object.entries(colors).forEach(([key, value]) => {
      // Skips 'name' and sets variables like --color-primary-600
      if (key !== "name") {
        root.style.setProperty(`--brand-${key}`, value);
      }
    });

    localStorage.setItem("Theme", themeName);
  }, [themeName, colors]);

  return (
    <ThemeContext.Provider
      value={{ theme: themeName, setTheme: setThemeName, colors }}
    >
      <style type="text/css">{`
        /* Sets the highlight color for selected text dynamically based on the current theme */
        ::selection {
          background: ${colors.primary500};
          color: #ffffff; /* Ensures contrast for readability */
        }

        /* Webkit-specific prefix for compatibility with older browsers */
        ::-moz-selection {
          background: ${colors.primary500};
          color: #ffffff;
        }
      `}</style>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
