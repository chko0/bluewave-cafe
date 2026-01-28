import clsx from "clsx";

export default function CategoryHeader({ activeCategory, ActiveIcon }) {
  const gradient = `bg-gradient-to-r from-brand-primary-500 via-brand-primary-600 to-brand-primary-700`;

  return (
    <h2 className="text-2xl/7 font-bold mb-6 flex items-center justify-center gap-3 text-brand-primary-900">
      {/* Left gradient bar */}
      <span
        className={clsx("block h-1 w-16 rounded-full", gradient)}
        translate="no"
      ></span>

      {/* Icon #1 */}
      <ActiveIcon
        key="left"
        className="w-6 h-6 text-brand-primary-500"
        translate="no"
      />

      {/* Category Name */}
      <span className="text-center max-w-xs h-12 flex flex-col justify-center">
        {activeCategory}
      </span>

      {/* Icon #2 */}
      <ActiveIcon
        key="right"
        className="w-6 h-6 text-brand-primary-500"
        translate="no"
      />

      {/* Right gradient bar */}
      <span
        className={clsx("block h-1 w-16 rounded-full", gradient)}
        translate="no"
      ></span>
    </h2>
  );
}
