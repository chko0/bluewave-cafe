import { CheckCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { SITE } from "/src/config";
import Button from "../components/ui/Button";

export default function FeedbackSuccessPage() {
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
        <CheckCircle
          className="w-20 h-20 mx-auto mb-4 transition-transform duration-300 scale-100 animate-pulse-once"
          style={{ color: successColor }}
        />

        <h2
          className="text-3xl sm:text-4xl font-extrabold mb-6"
          style={{ color: colors.primary900 }}
        >
          Feedback Received!
        </h2>

        <p
          className="text-lg md:text-xl mb-8"
          style={{ color: colors.primary700 }}
        >
          Your input is greatly appreciated! We'll use your message to make{" "}
          {SITE.name} even better.
        </p>

        {/* --- Back to Home Button --- */}
        <Button
          to="/"
          className="text-sm md:text-base px-6 py-4 md:px-8 rounded-xl transition-all duration-200 font-bold shadow-lg 
            hover:shadow-xl uppercase tracking-wider hover:scale-[1.03] hover:[--link-bg:var(--link-hover-bg)]"
          aria-label="Return Home"
          style={{
            "--link-bg": colors.primary600,
            "--link-hover-bg": colors.primary700,
            backgroundColor: "var(--link-bg)",
          }}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}
