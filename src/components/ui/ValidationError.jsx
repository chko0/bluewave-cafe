import clsx from "clsx";
import { AlertCircle } from "lucide-react";
import IconText from "./IconText";

export default function ValidationError({
  children,
  icon: Icon = AlertCircle,
  show = true,
  className = "",
}) {
  return (
    <div
      className={clsx(
        "overflow-hidden transition-all duration-300 ease-in-out -mt-5 select-none",
        show ? "max-h-12 opacity-100" : "max-h-0 opacity-0",
        className
      )}
    >
      <IconText
        icon={Icon}
        size={5}
        className="text-xs sm:text-sm font-medium text-red-500"
      >
        {children}
      </IconText>
    </div>
  );
}
