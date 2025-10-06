import { Star } from "lucide-react";

export default function Badge({
  text,
  icon: Icon = Star,
  bgColor = "bg-blue-100",
  textColor = "text-blue-700",
}) {
  return (
    <div
      className={`flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-full ${bgColor} shadow-sm`}
    >
      <Icon
        className={`w-4 h-4 ${textColor} ${
          ["New"].includes(text) ? "animate-bounce" : ""
        }`}
      />
      <span className={`text-xs ${textColor}`}>{text}</span>
    </div>
  );
}
