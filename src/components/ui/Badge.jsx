import { Star } from "lucide-react";
import IconText from "./IconText";

export default function Badge({ text, icon: Icon = Star, bgColor, textColor }) {
  const animationClasses = [];
  const cssVariables = {}; // To hold dynamic CSS variables

  if (text === "Popular") {
    animationClasses.push("animate-badge-pulse-glow animate-badge-shimmer");
    cssVariables["--badge-glow-color"] = "rgba(255, 215, 0, 0.7)";
    cssVariables["--badge-glow-color-light"] = "rgba(255, 215, 0, 0.3)";
  }

  if (text === "New") {
    animationClasses.push("animate-badge-shimmer");
    cssVariables["--badge-shimmer-color"] = `rgba(${parseInt(
      textColor.slice(1, 3),
      16
    )}, ${parseInt(textColor.slice(3, 5), 16)}, ${parseInt(
      textColor.slice(5, 7),
      16
    )}, 0.6)`;
    cssVariables["--badge-shimmer-border-color"] = textColor;
  }

  return (
    <div
      className={`flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full shadow-sm select-none
        ${animationClasses.join(" ")}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        ...cssVariables,
      }}
    >
      <IconText
        icon={Icon}
        iconClassName={`w-4 h-4 ${text === "New" ? "animate-bounce" : ""}`}
        size="4"
        gap="1.5"
      >
        <span className={`text-xs`}>{text}</span>
      </IconText>
    </div>
  );
}
