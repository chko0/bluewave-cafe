export const palette = {
  /**
   * 🌊 BlueWave: Cool, Fresh, Corporate (Tailwind-like structure)
   */
  bluewave: {
    name: "Default",

    // === FUNCTIONAL ROLES ===
    // Backgrounds & Surfaces
    lightBg: "#eff6ff", // blue-50: Main page background
    border: "#bfdbfe", // blue-200: Subtle border/divider
    inactiveBg: "#bfdbfe", // blue-200: Default state background
    hoverBg: "#93c5fd", // blue-300: Hover state background
    activeBg: "#2563eb", // blue-600: Active state background

    // Text & Contrast
    inactiveText: "#1e3a8a", // blue-900: Default dark text color (Standardized role)
    activeText: "#ffffff", // white: Text color for use on dark backgrounds

    // === BRANDING & EXTENDED SCALE ===
    primary500: "#3b82f6", // blue-500: Accent color (Icons, Focus Rings)
    primary600: "#2563eb", // blue-600: Primary Action/Button color (Matches activeBg)
    primary700: "#1d4ed8", // blue-700: Darker shade (Subtext, Hover)
    primary900: "#1e3a8a", // blue-900: Deepest shade (Matches inactiveText, Headers)
  },

  /**
   * 🍂 WarmGinger: Cozy, Earthy, and Inviting
   */
  warm: {
    name: "Warm",

    // === FUNCTIONAL ROLES ===
    // Backgrounds & Surfaces
    lightBg: "#fcf6f3", // Very pale cream/shell white (Clean canvas)
    border: "#e8d3c7", // Muted light tan/flesh tone
    inactiveBg: "#e8d3c7", // Same as border
    hoverBg: "#d8a68b", // Soft blush/muted terra-cotta
    activeBg: "#b5694a", // Rich ginger/burnt orange (Main cozy accent)

    // Text & Contrast
    inactiveText: "#5c331a", // Deep cocoa brown (Standardized dark text)
    activeText: "#ffffff", // White (for use on dark activeBg)

    // === BRANDING & EXTENDED SCALE ===
    primary500: "#c77c5e", // Medium copper/ginger tone (Accent, Icons)
    primary600: "#b5694a", // Rich ginger/burnt orange (Matches activeBg)
    primary700: "#99583b", // Darker shade of ginger/rust
    primary900: "#5c331a", // Deep cocoa brown (Matches inactiveText, Headers)
  },

  /**
   * 🌅 Sunset (Dimmed): Earthy, Muted Gold and Deep Orange
   */
  sunset: {
    name: "Sunset",

    // === FUNCTIONAL ROLES ===
    // Backgrounds & Surfaces
    lightBg: "#fef3e7", // Light, warm cream/beige (Less pure white than before)
    border: "#facc15", // Muted, deep yellow/gold
    inactiveBg: "#facc15", // Same as border
    hoverBg: "#f59e0b", // More subdued golden-orange
    activeBg: "#ea580c", // Deeper, more mature orange-red (Less pure, vibrant orange)

    // Text & Contrast
    inactiveText: "#92400e", // Darker brown for better contrast
    activeText: "#ffffff", // White

    // === BRANDING & EXTENDED SCALE ===
    primary500: "#d97706", // Rusty gold (Accent, Icons)
    primary600: "#ea580c", // Deep orange-red (Matches activeBg)
    primary700: "#b45309", // Dark, burnt orange
    primary900: "#78350f", // Very deep mahogany/brown (Headers)
  },

  /**
   * 🌿 ForestMist: Cool, Natural, and Refreshing
   */
  forest: {
    name: "Forest",

    // === FUNCTIONAL ROLES ===
    // Backgrounds & Surfaces
    lightBg: "#f5f7f5", // Very light off-white/gray-green
    border: "#d1e0d7", // Muted light sage green
    inactiveBg: "#d1e0d7", // Same as border
    hoverBg: "#a2c1a8", // Soft, dusty green
    activeBg: "#38705c", // Deep forest green

    // Text & Contrast
    inactiveText: "#184534", // Very dark hunter green
    activeText: "#ffffff", // White

    // === BRANDING & EXTENDED SCALE ===
    primary500: "#5ba37e", // Medium moss green (Accent, Icons)
    primary600: "#38705c", // Deep forest green (Matches activeBg)
    primary700: "#2a5445", // Darker shade of green
    primary900: "#184534", // Very dark hunter green (Matches inactiveText, Headers)
  },

  /**
   * 💎 RoyalGarnet: Rich, Deep, and Luxurious
   */
  royal: {
    name: "Royal",

    // === FUNCTIONAL ROLES ===
    // Backgrounds & Surfaces
    lightBg: "#fff9f9", // Very pale pink/near-white
    border: "#f0b5c1", // Muted blush/rose gold
    inactiveBg: "#f0b5c1", // Same as border
    hoverBg: "#d98896", // Soft rose/dusty pink
    activeBg: "#8b2438", // Deep rich garnet/burgundy

    // Text & Contrast
    inactiveText: "#4a121d", // Deepest mahogany/red-brown
    activeText: "#ffffff", // White

    // === BRANDING & EXTENDED SCALE ===
    primary500: "#b55972", // Muted ruby (Accent, Icons)
    primary600: "#8b2438", // Deep rich garnet (Matches activeBg)
    primary700: "#6e1d2c", // Darker burgundy
    primary900: "#4a121d", // Deepest mahogany (Matches inactiveText, Headers)
  },

  /**
   * 🌊 Bahwak: Fresh Mediterranean Turquoise & Gold
   * Based on: Main BG (#67c1c2), Main Text (#fffdfe), Gold (#efc674)
   */
  bahwak: {
    name: "Bahwak",

    // === FUNCTIONAL ROLES ===
    // Backgrounds & Surfaces
    lightBg: "#f7feff", // Very light off-white/near-white (clean surface)
    border: "#a7e3e4", // Muted light turquoise (subtle dividers)
    inactiveBg: "#a7e3e4", // Same as border
    hoverBg: "#8ccfc7", // Lighter, slightly desaturated turquoise
    activeBg: "#67c1c2", // Main BG Color (Primary brand action)

    // Text & Contrast
    inactiveText: "#1d3539", // Very dark teal/near-black (High contrast text)
    activeText: "#fffdfe", // Main Text Color (White)

    // === BRANDING & EXTENDED SCALE ===
    primary500: "#efc674", // Alternative Logo Color (Gold/Accent/Icons)
    primary600: "#67c1c2", // Primary Action/Button color (Matches activeBg)
    primary700: "#4b9c9e", // Darker shade of turquoise (Subtext)
    primary900: "#1d3539", // Deepest shade (Matches inactiveText, Headers)
  },
};
