import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";

import { useTheme } from "../context/ThemeContext";

import config from "../config.json";

export default function FeedbackPage() {
  const { colors } = useTheme();

  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // State for the rating value (0-5)
  const [rating, setRating] = useState(0);
  // State for the hover effect
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", config.services.web3formsAccessKey);

    // --- Submission Logic (omitted for brevity) ---
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        e.target.reset();
        navigate("/feedback/success");
      } else {
        console.error(data.message);
        alert("Error sending feedback!");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Determine the rating to display (hover takes precedence over selected)
  const displayRating = hoverRating || rating;

  // Reusable Tailwind classes for inputs
  const inputClasses = `
    w-full p-4 border rounded-xl shadow-inner
    focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200
    border-gray-300 placeholder-gray-500
  `;

  return (
    <main className="px-6 py-12 max-w-3xl mx-auto">
      {/* Header and Call to Action */}
      <div className="text-center mb-10">
        <MessageCircle
          className="w-12 h-12 mx-auto mb-4"
          style={{ color: colors.primary600 }} // Use a stronger primary color
        />
        <h2
          className="text-4xl font-extrabold mb-2"
          style={{ color: colors.primary900 }}
        >
          Your Feedback Matters
        </h2>
        <p className="text-lg" style={{ color: colors.primary700 }}>
          Every message helps us make {config.site.name} better
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        // Increased padding and shadow for a modern card effect
        className="bg-white p-8 rounded-3xl shadow-2xl space-y-7"
      >
        {/* --- RATING SECTION (Refined and Responsive) --- */}
        <div className="space-y-4 text-center">
          <h3
            className="text-lg sm:text-xl font-bold" // 💡 Responsive Text Size
            style={{ color: colors.primary700 }}
          >
            Rate Your Overall Experience!
          </h3>

          <div
            className="flex justify-center items-center gap-1 sm:gap-2 p-3 sm:p-4 rounded-xl border-2" // 💡 Responsive Gap and Padding
            style={{ borderColor: colors.border }}
          >
            {[1, 2, 3, 4, 5].map((starValue) => (
              <button
                key={starValue}
                type="button"
                onClick={() => setRating(starValue)}
                className="
                  text-3xl transition-all duration-200 transform hover:scale-125 focus:outline-none 
                  active:scale-100 hover:cursor-pointer
                "
                style={{
                  // Determine color based on the displayRating (hover/selected)
                  color:
                    starValue <= displayRating
                      ? colors.primary500
                      : colors.border,
                  // Add a subtle drop shadow to make active stars 'glow'
                  filter:
                    starValue <= displayRating
                      ? `drop-shadow(0 0 6px ${colors.primary500}aa)`
                      : "none",
                }}
                onMouseEnter={() => setHoverRating(starValue)}
                onMouseLeave={() => setHoverRating(0)}
              >
                ★
              </button>
            ))}
            {/* Hidden input to ensure the rating value is submitted */}
            <input
              type="hidden"
              name="rating"
              value={rating}
              required
              className="w-0 h-0"
            />{" "}
            {/* 💡 Ensure no space is taken */}
          </div>
        </div>

        {/* --- MESSAGE INPUT (Refined) --- */}
        <textarea
          className={inputClasses}
          rows="5"
          name="message"
          placeholder="What did you love? How can we improve?"
          required
          // Apply theme color to the focus ring
          style={{ "--tw-ring-color": colors.primary500 }}
        />

        {/* --- NAME INPUT (Refined) --- */}
        <input
          type="text"
          name="name"
          placeholder="Your Name (optional)"
          className={inputClasses}
          style={{ "--tw-ring-color": colors.primary500 }}
        />

        {/* --- EMAIL INPUT (Refined) --- */}
        <input
          type="text"
          name="email_phone"
          placeholder="Your Email or Phone (optional)"
          className={inputClasses}
          style={{ "--tw-ring-color": colors.primary500 }}
        />

        {/* --- SUBMIT BUTTON (Refined) --- */}
        <button
          type="submit"
          disabled={loading || rating === 0} // 💡 Disable if no rating is selected
          className="
            w-full text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider
            transition-all duration-200 shadow-lg hover:shadow-xl hover:cursor-pointer
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:scale-[1.01]
          "
          style={{
            backgroundColor: colors.primary600,
            // 💡 Clean Hover: Use onMouseEnter to handle the hover color directly
          }}
          onMouseEnter={(e) => {
            if (!loading && rating !== 0)
              e.currentTarget.style.backgroundColor = colors.primary700;
          }}
          onMouseLeave={(e) => {
            if (!loading && rating !== 0)
              e.currentTarget.style.backgroundColor = colors.primary600;
          }}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </span>
          ) : (
            "Send" // More professional button text
          )}
        </button>
      </form>
      <span className="text-red-500">{result}</span>
    </main>
  );
}
