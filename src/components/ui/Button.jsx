import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Button({
  as,
  children,
  className,
  href,
  to,
  icon: Icon,
  iconColor,
  iconClassName,
  trailingIcon = false,
  "aria-label": ariaLabel,
  type,
  ...props
}) {
  const Component = to ? Link : as || "button";
  const accessibilityLabel = children ? undefined : ariaLabel;

  const baseClasses =
    "group inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors text-white bg-blue-600 hover:bg-blue-700";

  const finalClasses = twMerge(clsx(baseClasses, className));

  const iconProps = {
    className: clsx(iconClassName),
    ...(iconColor ? { stroke: iconColor } : {}),
  };

  return (
    <Component
      to={to}
      href={Component === "a" ? href : undefined}
      type={Component === "button" ? type || "button" : undefined}
      className={finalClasses}
      aria-label={accessibilityLabel}
      {...props}
    >
      <span className="inline-flex items-center justify-center gap-2 w-full">
        {Icon && <Icon {...iconProps} />}
        {children && <span>{children}</span>}
        {trailingIcon && (
          <ChevronRight className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-x-1" />
        )}
      </span>
    </Component>
  );
}
