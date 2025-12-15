import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, AlertCircle, CheckCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

import { SITE, WORKERS } from "/src/config";
import Button from "../components/ui/Button";
import clsx from "clsx";

const MIN_MESSAGE_LENGTH = 10;
const WORKER_ENDPOINT = WORKERS.feedbackEndpoint;

export default function FeedbackPage() {
  const { colors } = useTheme();

  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const [rating, setRating] = useState(0); // State for the rating value (0-5)
  const [hoverRating, setHoverRating] = useState(0); // State for the hover effect

  const [message, setMessage] = useState("");
  const [isMessageTouched, setIsMessageTouched] = useState(false);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);

  const currentLength = message.trim().replace(/\s/g, "").length;
  const isMessageValid = currentLength >= MIN_MESSAGE_LENGTH;

  // Determine the rating to display (hover takes precedence over selected)
  const displayRating = hoverRating || rating;

  // Determine if the button should be disabled
  const isButtonDisabled =
    loading || rating === 0 || currentLength < MIN_MESSAGE_LENGTH;

  // Reusable Tailwind classes for inputs
  const inputClasses = `w-full p-4 pr-7 border rounded-xl shadow-inner
    focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200
    border-gray-300 placeholder-gray-500
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(""); // Clear previous results

    const formData = new FormData(e.target);

    // Append fields for the Worker to process
    formData.append("rating", rating);

    // --- Submission Logic ---
    try {
      const response = await fetch(WORKER_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        navigate("/feedback/success");
      } else {
        // Display the error message returned by the Worker
        setResult(data.message || "A server error occurred during submission.");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setResult("Network error or failed to reach the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      {/* Header and Call to Action */}
      <div className="text-center mb-10">
        <MessageCircle
          className="w-12 h-12 mx-auto mb-4"
          style={{ color: colors.primary600 }}
        />
        <h2
          className="text-3xl font-extrabold mb-2"
          style={{ color: colors.primary900 }}
        >
          Your Feedback Matters
        </h2>
        <p className="text-lg" style={{ color: colors.primary700 }}>
          Every message helps us make {SITE.name} better
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-2xl space-y-6"
      >
        {/* --- RATING SECTION --- */}
        <div className="space-y-4 text-center">
          <h3
            id="rating-label"
            className="text-md md:text-lg sm:text-xl font-bold"
            style={{ color: colors.primary700 }}
          >
            Rate Your Experience!
          </h3>

          <div
            className="flex justify-center items-center gap-1 sm:gap-2 p-3 sm:p-4 rounded-xl border-2"
            role="radiogroup"
            aria-required="true"
            aria-labelledby="rating-label"
            style={{ borderColor: colors.border }}
          >
            {[1, 2, 3, 4, 5].map((starValue) => (
              <button
                key={starValue}
                type="button"
                aria-label={`Rate ${starValue} out of 5 stars`}
                aria-checked={rating === starValue}
                role="radio"
                onClick={() => setRating(starValue)}
                className="text-3xl transition-all duration-200 transform hover:scale-125 focus:outline-none select-none
                  active:scale-100 hover:cursor-pointer"
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
          </div>
        </div>

        {/* --- MESSAGE INPUT --- */}
        <div className="relative">
          <textarea
            className={`${inputClasses} resize-none scrollbar scrollbar-thin hover:scrollbar-thumb-gray-400 scrollbar-thumb-rounded`}
            rows="4"
            name="message"
            aria-label="Your feedback. What did you love? How can we improve?"
            aria-required="true"
            placeholder="What did you love? How can we improve?"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ "--tw-ring-color": colors.primary500 }}
            onFocus={() => setIsTextareaFocused(true)} // Set to true when user focuses
            onBlur={() => {
              setIsMessageTouched(true);
              setIsTextareaFocused(false); // Set to false when user clicks away
            }}
          />

          {/* Character Status (Bottom Right, inside the textarea) */}
          <span
            className="absolute bottom-3 right-2 text-xs font-medium select-none"
            style={{
              color: isMessageValid ? "#10b981" : "red",
            }}
          >
            {/* Conditional rendering for the icon/text */}
            <div className="relative w-17 h-7 flex items-end justify-end">
              <span
                className={`absolute ${
                  isTextareaFocused && !isMessageValid
                    ? "opacity-100 transition-opacity duration-300"
                    : "opacity-0"
                }`}
                style={{ color: "red" }}
              >
                {currentLength} / {MIN_MESSAGE_LENGTH}
              </span>

              {/* State 2: Valid Message (Icon - fades in) */}
              <span
                className={`absolute  ${
                  isMessageValid
                    ? "transition-opacity duration-300 opacity-100"
                    : "opacity-0"
                }`}
              >
                <CheckCircle size={20} />
              </span>
            </div>
          </span>
        </div>

        {/* Alert Message */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out -mt-5 select-none
              ${
                currentLength < MIN_MESSAGE_LENGTH && isMessageTouched
                  ? "max-h-[3rem] opacity-100" // Visible and tall enough to show content
                  : "max-h-0 opacity-0" // Hidden (collapsed height 0, invisible)
              }`}
        >
          <div className="flex items-center gap-2 text-red-500 font-medium">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-xs sm:text-sm">
              Please enter at least {MIN_MESSAGE_LENGTH} characters
            </p>
          </div>
        </div>

        {/* --- NAME INPUT --- */}
        <input
          type="text"
          name="name"
          aria-label="Enter your name"
          placeholder="Your Name (optional)"
          className={inputClasses}
          style={{ "--tw-ring-color": colors.primary500 }}
        />

        {/* --- EMAIL INPUT --- */}
        <input
          type="text"
          name="contact"
          aria-label="Enter your email or phone"
          placeholder="Your Email or Phone (optional)"
          className={inputClasses}
          style={{ "--tw-ring-color": colors.primary500 }}
        />

        {/* --- SUBMIT BUTTON --- */}
        <Button
          type="submit"
          aria-label="Send Feedback"
          disabled={isButtonDisabled}
          className={clsx(
            "w-full text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:cursor-pointer",
            "disabled:opacity-40 disabled:cursor-not-allowed",
            !isButtonDisabled &&
              "hover:scale-[1.01] hover:[--btn-bg:var(--btn-hover-bg)]"
          )}
          style={{
            "--btn-bg": colors.primary600,
            "--btn-hover-bg": colors.primary700,
            backgroundColor: "var(--btn-bg)",
          }}
        >
          {!loading ? (
            <>Send</>
          ) : (
            <>
              <div className="inline-block w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          )}
        </Button>
      </form>

      <span className="text-red-500">{result}</span>
    </div>
  );
}
