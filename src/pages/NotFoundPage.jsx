import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function NotFoundPage() {
  const { colors } = useTheme();

  const buttonBg = colors.primary600;
  const buttonHoverBg = colors.primary700; // Used for the darker hover state
  const headerText = colors.primary900;
  const paragraphText = colors.primary700;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-5xl font-bold mb-4" style={{ color: headerText }}>
        404
      </h2>
      <p className="text-lg mb-8" style={{ color: paragraphText }}>
        Oops! Page not found.
      </p>
      <Link
        to="/"
        aria-label="Back to Home"
        className="text-white px-6 py-3 rounded-xl transition font-semibold hover:scale-105 hover:[--btn-bg:var(--btn-hover-bg)]"
        style={{
          "--btn-bg": buttonBg,
          "--btn-hover-bg": buttonHoverBg,
          backgroundColor: "var(--btn-bg)",
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}
