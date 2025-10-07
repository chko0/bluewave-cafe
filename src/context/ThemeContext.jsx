import { createContext, useState, useContext } from "react";
import { palette } from "../theme/colors";
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("Theme") || "bluewave"
  );

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
