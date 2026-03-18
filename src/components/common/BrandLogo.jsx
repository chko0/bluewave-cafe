import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { SITE } from "@/config";
import { ReactComponent as AppLogo } from "@/assets/favicon.svg";
import clsx from "clsx";

const layoutConfig = {
  vertical: {
    wrapper: "flex-col",
    textAlign: "items-center text-center",
    logoMargin: "mb-2",
  },
  horizontal: {
    wrapper: "flex-row gap-4",
    textAlign: "items-start text-left",
    logoMargin: "",
  },
};

export default function BrandLogo({
  layout = "vertical",
  size = 80,
  showLogo = true,
  showTitle = true,
  showSubtitle = true,
  headingLevel: Heading = "h1",
  className = "",
}) {
  const { colors } = useTheme();
  const layoutStyles = layoutConfig[layout];

  return (
    <Link
      to="/"
      aria-label={`${SITE.name} homepage`}
      style={{ fontSize: `${size}px` }}
      className={clsx(
        "flex items-center justify-center select-none transition-transform active:scale-95",
        layoutStyles.wrapper,
        className,
      )}
    >
      {/* Logo Container */}
      {showLogo && (
        <div
          className={clsx(
            "p-2 rounded-full bg-white shadow-xl flex items-center justify-center",
            "w-[1em] h-[1em] p-[0.15em]",
            layoutStyles.logoMargin,
          )}
        >
          <AppLogo
            role="img"
            aria-label={`${SITE.name} logo`}
            className="w-full h-full object-contain drop-shadow-md"
            style={{
              "--color-primary": colors.activeBg,
              "--color-accent": colors.inactiveBg,
            }}
          />
        </div>
      )}

      {/* Text Group */}
      {(showTitle || showSubtitle) && (
        <div className={clsx("flex flex-col", layoutStyles.textAlign)}>
          {showTitle && (
            <Heading className="text-[0.45em] font-extrabold tracking-wide drop-shadow-lg leading-tight text-brand-active-text">
              {SITE.name}
            </Heading>
          )}

          {showSubtitle && (
            <p className="text-[0.24em] font-light tracking-wide opacity-90 -mt-0.5 text-brand-light-bg">
              {SITE.subtitle}
            </p>
          )}
        </div>
      )}
    </Link>
  );
}
