import { createContext, useState, useContext, useLayoutEffect } from "react";
import palette from "@/themes";
import { setFavicon } from "@/utils";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const fallbackTheme = "bluewave";

  const [themeName, setThemeName] = useState(() => {
    const saved = localStorage.getItem("Theme");
    return saved && palette[saved] ? saved : fallbackTheme;
  });

  const colors = palette[themeName];

  // Update CSS Variables whenever the theme changes + update FavIcon
  useLayoutEffect(() => {
    const root = window.document.documentElement;

    // Disable Tailwind CSS transitions
    root.classList.add("stop-transitions");

    // Map the palette keys to CSS variables
    Object.entries(colors).forEach(([key, value]) => {
      // Skips 'name' and sets variables like --color-primary-600
      if (key !== "name") {
        root.style.setProperty(`--brand-${key}`, value);
      }
    });

    // Reenable Tailwind CSS transitions after the next frame
    requestAnimationFrame(() => {
      root.classList.remove("stop-transitions");
    });

    localStorage.setItem("Theme", themeName);

    // UPDATE FAVICON
    setFavicon(colors.activeBg, colors.inactiveBg);
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
