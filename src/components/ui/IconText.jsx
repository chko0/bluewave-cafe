import clsx from "clsx";

export default function IconText({
  icon: Icon,
  iconPosition = "left",
  iconClassName = "",
  size = "4",
  gap = "2",
  className,
  children,
  ...props
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center group",
        iconPosition === "right" && "flex-row-reverse",
        `gap-${gap}`,
        className
      )}
      {...props}
    >
      {Icon && <Icon className={clsx(`w-${size} h-${size}`, iconClassName)} />}
      <>{children}</>
    </div>
  );
}
