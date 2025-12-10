export const palette = {
  /**
   * 🌊 BlueWave (Muted): Subtle, Professional Blue
   */
  bluewave: {
    name: "Default",

    // === FUNCTIONAL ROLES ===
    // Backgrounds & Surfaces
    lightBg: "#f5f9ff", // Lighter, slightly less saturated blue-white base
    border: "#b4c9e8", // Muted, dustier light blue for dividers
    inactiveBg: "#b4c9e8", // Same as border
    hoverBg: "#8ca8d3", // Gentler, slightly desaturated medium blue
    activeBg: "#2d5ec7ff", // Deeper, slightly richer primary blue (Action)

    // Text & Contrast
    inactiveText: "#18326e", // Slightly deeper indigo for better contrast
    activeText: "#ffffff", // white

    // === BRANDING & EXTENDED SCALE ===
    primary500: "#3370e8", // Muted, clearer accent blue
    primary600: "#2256c7", // Primary Action/Button color (Matches activeBg)
    primary700: "#18459f", // Darker shade
    primary900: "#18326e", // Deepest shade (Matches inactiveText, Headers)
  },

  /**
   * 🌊 Bahwak (Revised): Rich, Saturated Mediterranean Teal and Deep Gold
   */
  bahwak: {
    name: "Bahwak",

    // === FUNCTIONAL ROLES ===
    // Backgrounds & Surfaces
    lightBg: "#f2faff", // Cleaner, slightly less saturated off-white base
    border: "#7dcac7", // Deeper, more saturated teal for dividers
    inactiveBg: "#7dcac7", // Same as border
    hoverBg: "#50a9a7", // Richer, true teal for hover (much deeper)
    activeBg: "#308587", // Deep, strong teal (Primary brand action)

    // Text & Contrast
    inactiveText: "#142a2b", // Deeper, darker teal-black (Ensures high contrast)
    activeText: "#ffffff", // White (Maintains readability on dark activeBg)

    // === BRANDING & EXTENDED SCALE ===
    primary500: "#d6a858", // Richer, more antique gold (Accent/Icons)
    primary600: "#308587", // Primary Action/Button color (Matches activeBg)
    primary700: "#226364", // Darker shade of deep teal (Subtext)
    primary900: "#142a2b", // Deepest shade (Matches inactiveText, Headers)
  },

  /**
   * 🥇 GildedTeal: Rich, Deep Petrol Blue with Muted Mustard Gold Accent
   */
  gilded: {
    name: "Gilded Teal",

    // === FUNCTIONAL ROLES ===
    // Backgrounds & Surfaces
    lightBg: "#fefbf5", // Very soft, warm off-white/cream base
    border: "#c3ddd7", // Muted sage/light teal (Subtle divider)
    inactiveBg: "#c3ddd7", // Same as border
    hoverBg: "#99c2bb", // Soft, dusty teal for hover effect
    activeBg: "#0f766e", // Deep Petrol Blue/Teal (Main action color)

    // Text & Contrast
    inactiveText: "#134e4a", // Very dark forest/charcoal teal (High contrast dark text)
    activeText: "#ffffff", // White

    // === BRANDING & EXTENDED SCALE ===
    primary500: "#d97706", // Rich, Muted Mustard Gold (Accent, Icons)
    primary600: "#0f766e", // Primary Action/Button color (Matches activeBg)
    primary700: "#0f5951", // Darker shadow teal
    primary900: "#134e4a", // Deepest charcoal teal (Matches inactiveText, Headers)
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
   * 💜 LavenderMist (Muted): Deep Plum and Slate-Violet for Visual Comfort
   */
  lavender: {
    name: "Lavender",

    // === FUNCTIONAL ROLES ===
    // Backgrounds & Surfaces
    lightBg: "#f5f0fb", // Soft, muted gray-lavender (not near-white)
    border: "#e0d8eb", // Muted, soft gray-violet
    inactiveBg: "#e0d8eb", // Same as border
    hoverBg: "#c7b6df", // Dustier, deeper lilac for hover
    activeBg: "#631bd7ff", // Rich, medium-dark indigo-violet (Main action)

    // Text & Contrast
    inactiveText: "#331a61", // Deep indigo-plum (Darker for contrast)
    activeText: "#ffffff", // White

    // === BRANDING & EXTENDED SCALE ===
    primary500: "#8c79c5", // Muted, medium-depth accent purple (Accent, Icons)
    primary600: "#6d28d9", // Rich Indigo-Violet (Matches activeBg)
    primary700: "#581eaf", // Darker shade of indigo
    primary900: "#331a61", // Deepest indigo-plum (Matches inactiveText, Headers)
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
   * 🧡 CanyonClay (Final Pop): Clean Base with Punchier Terracotta Accents
   */
  canyon: {
    name: "Canyon Clay",

    // === FUNCTIONAL ROLES ===
    // Backgrounds & Surfaces
    lightBg: "#fffbf8", // Cleaner, near-white base for better contrast
    border: "#e8d0bd", // Slightly cleaner, brighter apricot for divider
    inactiveBg: "#e8d0bd", // Same as border
    hoverBg: "#d8b191", // Clearer, slightly brighter peach/apricot for hover
    activeBg: "#c45c34", // Deeper, punchier rust/burnt orange (Main action color)

    // Text & Contrast
    inactiveText: "#522f1c", // Slightly darker, richer cocoa brown
    activeText: "#ffffff", // White

    // === BRANDING & EXTENDED SCALE ===
    primary500: "#d37954", // Clearer, brighter copper/terracotta (Accent, Icons)
    primary600: "#c45c34", // Primary Action/Button color (Matches activeBg)
    primary700: "#a64929", // Darker, rich rust shade
    primary900: "#522f1c", // Deepest cocoa (Matches inactiveText, Headers)
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
};
