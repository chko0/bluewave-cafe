// FeedbackSuccessPage.jsx
import { CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Removed 'Navigate' as it's unused
import { useTheme } from "../context/ThemeContext";
import config from "../config.json";

export default function FeedbackSuccessPage() {
  const { colors } = useTheme();
  const location = useLocation(); // location is unused, but kept if needed later

  // Define success color derived from the theme (using primary colors for brand consistency)
  const successColor = colors.primary500;

  return (
    <main className="px-6 py-24 max-w-xl mx-auto text-center">
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
          className="text-4xl font-extrabold mb-6"
          style={{ color: colors.primary900 }}
        >
          Feedback Received!
        </h2>

        <p className="text-xl mb-8" style={{ color: colors.primary700 }}>
          Your input is greatly appreciated! We'll use your message to make{" "}
          {config.site.name} even better.
        </p>

        {/* --- Back to Menu Button --- */}
        <Link
          to="/"
          className="
            inline-block text-white px-8 py-3 rounded-xl transition-all duration-200 
            font-bold shadow-lg hover:shadow-xl uppercase tracking-wider
            hover:scale-[1.03]
          "
          style={{
            backgroundColor: colors.primary600,
          }}
          // Handle the hover effect directly
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.primary700;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.primary600;
          }}
        >
          Return to Menu
        </Link>
      </div>
    </main>
  );
}
