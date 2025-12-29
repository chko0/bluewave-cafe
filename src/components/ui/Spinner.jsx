import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Spinner({ size, className = "" }) {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-10 h-10 border-4",
  };

  return (
    <div
      className={twMerge(
        clsx(
          "inline-block rounded-full animate-spin border-current border-t-transparent",
          !size && !className.includes("w-") && sizes.md, // Defaults: If no size prop or className is provided, it looks like 'md'
          size && sizes[size], // Fallback to preset if size prop is used
          "text-brand-primary-500", // Default color
          className // User overrides (always wins)
        )
      )}
    />
  );
}
