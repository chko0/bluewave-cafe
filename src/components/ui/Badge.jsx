import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context/ThemeContext";
import clsx from "clsx";

const STATUS_COLORS = {
  success: { bg: "#d4edda", text: "#155724" }, // Standard Success/Green (for Vegan)
  warning: { bg: "#fff3cd", text: "#856404" }, // Standard Warning/Yellow (for Popular)
  dietary: { bg: "#f3e8ff", text: "#5b21b6" }, // Light Purple/Lavender (for Dietary)
};

// Variant definitions
const badgeVariants = (themeColors) => ({
  default: {
    bg: themeColors.border,
    text: themeColors.primary700,
    classes: "",
    iconClasses: "",
    cssFromTextColor: true,
  },

  popular: {
    bg: STATUS_COLORS.warning.bg,
    text: STATUS_COLORS.warning.text,
    classes: "animate-badge-pulse-glow animate-badge-shimmer",
    iconClasses: "",
    cssVars: {
      "--badge-glow-color": "rgba(255, 215, 0, 0.7)",
      "--badge-glow-color-light": "rgba(255, 215, 0, 0.3)",
    },
  },

  new: {
    bg: themeColors.activeBg,
    text: themeColors.activeText,
    classes: "animate-badge-shimmer",
    iconClasses: "animate-bounce",
    cssFromTextColor: true,
  },

  vegan: {
    bg: STATUS_COLORS.success.bg,
    text: STATUS_COLORS.success.text,
    classes: "",
    iconClasses: "",
  },

  lactoseFree: {
    bg: STATUS_COLORS.dietary.bg,
    text: STATUS_COLORS.dietary.text,
    classes: "",
    iconClasses: "",
  },

  seasonal: {
    bg: themeColors.border,
    text: themeColors.primary700,
    classes: "animate-pulse-slow", // subtle, slow pulse instead of shimmer
    iconClasses: "", // optional, can leave empty
  },
});

export default function Badge({
  variant = "default",
  icon: Icon,
  children,
  className,
}) {
  const { colors } = useTheme();

  const variants = badgeVariants(colors);
  const currVariant = variants[variant] || variants.default;

  // Dynamic CSS variables
  let cssVariables = {
    "--badge-bg": currVariant.bg,
    "--badge-text": currVariant.text,
    ...(currVariant.cssVars || {}),
  };

  // Dynamic shimmer color for variants using text
  if (currVariant.cssFromTextColor && currVariant.text) {
    const textColor = currVariant.text;
    const r = parseInt(textColor.slice(1, 3), 16);
    const g = parseInt(textColor.slice(3, 5), 16);
    const b = parseInt(textColor.slice(5, 7), 16);

    cssVariables["--badge-shimmer-color"] = `rgba(${r}, ${g}, ${b}, 0.6)`;
    cssVariables["--badge-shimmer-border-color"] = textColor;
  }

  return (
    <div
      role="status"
      aria-label={children}
      className={twMerge(
        "inline-flex items-center gap-1 px-2 py-1 font-semibold text-xs rounded-full shadow-sm select-none",
        "bg-[var(--badge-bg)] text-[var(--badge-text)]",
        currVariant.classes,
        className
      )}
      style={{ ...cssVariables }}
    >
      {Icon && <Icon className={clsx("w-4 h-4", currVariant.iconClasses)} />}
      {children}
    </div>
  );
}
