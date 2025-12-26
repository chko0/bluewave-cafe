import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { SITE } from "/src/config";
import { ReactComponent as AppLogo } from "/src/assets/favicon.svg";
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

  const logoPadding = Math.max(6, size * 0.15);
  const titleSize = size * 0.47;
  const subtitleSize = size * 0.28;

  return (
    <Link
      to="/"
      aria-label={`${SITE.name} homepage`}
      className={clsx(
        "flex items-center justify-center select-none transition-transform active:scale-95",
        layoutStyles.wrapper,
        className
      )}
    >
      {/* Logo */}
      {showLogo && (
        <div
          className={clsx(
            "rounded-full bg-white shadow-xl flex items-center justify-center",
            layoutStyles.logoMargin
          )}
          style={{
            width: size,
            height: size,
            padding: logoPadding,
          }}
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

      {/* Text */}
      <div className={clsx("flex flex-col", layoutStyles.textAlign)}>
        {showTitle && (
          <Heading
            className="font-extrabold tracking-wide drop-shadow-lg leading-tight"
            style={{
              fontSize: titleSize,
              color: "white",
            }}
          >
            {SITE.name}
          </Heading>
        )}

        {showSubtitle && (
          <p
            className="font-light tracking-wide opacity-90 -mt-0.5"
            style={{
              fontSize: subtitleSize,
              color: colors.lightBg,
            }}
          >
            {SITE.subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}
