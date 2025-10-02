import { Star } from "lucide-react";

export default function Badge({
  text,
  icon: Icon = Star,
  bgColor = "bg-blue-100",
  textColor = "text-blue-700",
}) {
  return (
    <div
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${bgColor}`}
    >
      <Icon
        className={`w-4 h-4 ${textColor} ${
          ["New"].includes(text) ? "animate-bounce" : ""
        }`}
      />
      <span className={`text-xs font-semibold ${textColor}`}>{text}</span>
    </div>
  );
}
