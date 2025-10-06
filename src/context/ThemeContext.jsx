import React, { createContext, useState, useContext } from "react";
import { palette } from "../theme/colors";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("bluewave");

  const value = {
    colors: palette[theme],
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
