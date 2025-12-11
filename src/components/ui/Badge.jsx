import { useTheme } from "../../context/ThemeContext";
import clsx from "clsx";

const STATUS_COLORS = {
  // Standard Success/Green (for Vegan)
  success: { bg: "#d4edda", text: "#155724" },
  // Standard Warning/Gold (for Popular)
  warning: { bg: "#fff3cd", text: "#856404" },
  // Light Purple/Lavender (for Dietary)
  dietary: { bg: "#f3e8ff", text: "#5b21b6" },
};

// Variant definitions
const badgeVariants = (themeColors) => ({
  default: {
    bg: "#e5e7eb",
    text: "#111827",
    classes: "",
    iconClasses: "",
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
    bg: themeColors.border,
    text: themeColors.primary700,
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
  let cssVariables = { ...(currVariant.cssVars || {}) };

  // Compute shimmer for "new" if needed
  if (currVariant.cssFromTextColor && currVariant.text) {
    const textColor = currVariant.text;
    const r = parseInt(textColor.slice(1, 3), 16);
    const g = parseInt(textColor.slice(3, 5), 16);
    const b = parseInt(textColor.slice(5, 7), 16);

    cssVariables["--badge-shimmer-color"] = `rgba(${r}, ${g}, ${b}, 0.6)`;
    cssVariables["--badge-shimmer-border-color"] = textColor;
  }

  return (
    <span
      role="status"
      aria-label={children}
      className={clsx(
        "inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full shadow-sm select-none",
        currVariant.classes,
        className
      )}
      style={{
        backgroundColor: currVariant.bg,
        color: currVariant.text,
        ...cssVariables,
      }}
    >
      {Icon && <Icon className={clsx("w-4 h-4", currVariant.iconClasses)} />}
      {children}
    </span>
  );
}
