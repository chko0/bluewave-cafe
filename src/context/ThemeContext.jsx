import { createContext, useState, useContext } from "react";
import { palette } from "../themes/colors";
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const fallbackTheme = "bluewave";
  const savedTheme = localStorage.getItem("Theme");
  const initialTheme =
    savedTheme && palette[savedTheme] ? savedTheme : fallbackTheme;

  const [theme, setTheme] = useState(initialTheme);

  const value = {
    colors: palette[theme],
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <style type="text/css">{`
        /* Sets the highlight color for selected text dynamically based on the current theme */
        ::selection {
          background: ${value.colors.primary500};
          color: #ffffff; /* Ensures contrast for readability */
        }

        /* Webkit-specific prefix for compatibility with older browsers */
        ::-moz-selection {
          background: ${value.colors.primary500};
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
