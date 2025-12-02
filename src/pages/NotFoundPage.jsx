import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import config from "../config";

export default function NotFoundPage() {
  const { colors } = useTheme();

  // Define success color derived from the theme (using primary colors for brand consistency)
  const successColor = colors.primary500;

  return (
    <div className="px-6 py-14 max-w-xl mx-auto text-center">
      {/* Container for the success card effect */}
      <div
        className="bg-white p-10 rounded-3xl shadow-2xl space-y-5 border-t-8"
        style={{ borderColor: successColor }}
      >
        <span
          className="text-9xl mx-auto font-bold mb-4 transition-transform duration-300 scale-100 animate-pulse-once"
          style={{ color: successColor }}
        >
          404
        </span>

        <h2
          className="text-3xl sm:text-4xl font-extrabold mb-6"
          style={{ color: colors.primary900 }}
        >
          Page Not Found!
        </h2>

        <p
          className="text-lg md:text-xl mb-8"
          style={{ color: colors.primary700 }}
        >
          Looks like this page has gone missing! Maybe it stepped out for a
          quick coffee break. Let's get you back on track.
        </p>

        {/* --- Back to Menu Button --- */}
        <Link
          to="/"
          className="inline-block text-white text-sm md:text-base px-6 py-4 md:px-8 rounded-xl transition-all duration-200 font-bold shadow-lg 
            hover:shadow-xl uppercase tracking-wider hover:scale-[1.03] hover:[--link-bg:var(--link-hover-bg)]"
          aria-label="Return to Menu"
          style={{
            "--link-bg": colors.primary600,
            "--link-hover-bg": colors.primary700,
            backgroundColor: "var(--link-bg)",
          }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
