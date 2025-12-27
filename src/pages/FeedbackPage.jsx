import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, AlertCircle, CheckCircle, Star } from "lucide-react";

import IconText from "../components/ui/IconText";

import { SITE, WORKERS } from "/src/config";
import Button from "../components/ui/Button";
import clsx from "clsx";

const MIN_MESSAGE_LENGTH = 10;
const WORKER_ENDPOINT = WORKERS.feedbackEndpoint;

export default function FeedbackPage() {
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
    border-gray-300 placeholder-gray-500 focus:ring-brand-primary-500
    scrollbar-thumb-brand-border hover:scrollbar-thumb-brand-hover-bg
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
        <MessageCircle className="w-12 h-12 mx-auto mb-4 text-brand-primary-600" />
        <h2 className="text-3xl font-extrabold mb-2 text-brand-primary-900">
          Your Feedback Matters
        </h2>
        <p className="text-lg text-brand-primary-700">
          Help us make {SITE.name} better
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
            className="text-md md:text-lg sm:text-xl font-bold text-brand-primary-700"
          >
            Rate Your Experience!
          </h3>

          <div
            className="flex justify-center items-center gap-1 sm:gap-2 p-3 sm:p-4 rounded-xl border-2 border-brand-border"
            role="radiogroup"
            aria-required="true"
            aria-labelledby="rating-label"
          >
            {[1, 2, 3, 4, 5].map((starValue) => {
              const isActive = starValue <= displayRating;
              return (
                <Button
                  key={starValue}
                  type="button"
                  aria-label={`Rate ${starValue} out of 5 stars`}
                  aria-checked={rating === starValue}
                  role="radio"
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHoverRating(starValue)}
                  onMouseLeave={() => setHoverRating(0)}
                  icon={Star}
                  iconClassName={clsx(
                    "w-6 h-6 transition-all duration-200 transform fill-current",
                    isActive ? "text-brand-primary-500" : "text-brand-border"
                  )}
                  className={clsx(
                    "p-0 bg-transparent hover:bg-transparent shadow-none hover:shadow-none min-w-0 transition-all duration-200 hover:scale-125 active:scale-100 cursor-pointer",
                    isActive && "drop-shadow-[0_0_4px_var(--brand-primary500)]"
                  )}
                />
              );
            })}
          </div>
        </div>

        {/* --- MESSAGE INPUT --- */}
        <div className="relative">
          <textarea
            className={clsx(
              inputClasses,
              "resize-none scrollbar scrollbar-thin hover:scrollbar-thumb-gray-400 scrollbar-thumb-rounded"
            )}
            rows="4"
            name="message"
            aria-label="Your feedback. What did you love? How can we improve?"
            aria-required="true"
            placeholder="What did you love? How can we improve?"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setIsTextareaFocused(true)}
            onBlur={() => {
              setIsMessageTouched(true);
              setIsTextareaFocused(false);
            }}
          />

          {/* Character Status (Bottom Right, inside the textarea) */}
          <span
            className={clsx(
              "absolute bottom-3 right-2 text-xs font-medium select-none",
              isMessageValid ? "text-[#10b981]" : "text-red-500"
            )}
          >
            {/* Conditional rendering for the icon/text */}
            <div className="relative w-17 h-7 flex items-end justify-end">
              <span
                className={clsx(
                  "absolute text-red-500",
                  isTextareaFocused && !isMessageValid
                    ? "opacity-100 transition-opacity duration-300"
                    : "opacity-0"
                )}
              >
                {currentLength} / {MIN_MESSAGE_LENGTH}
              </span>

              {/* State 2: Valid Message (Icon - fades in) */}
              <span
                className={clsx(
                  "absolute",
                  isMessageValid
                    ? "transition-opacity duration-300 opacity-100"
                    : "opacity-0"
                )}
              >
                <CheckCircle size={20} />
              </span>
            </div>
          </span>
        </div>

        {/* Alert Message */}
        <div
          className={clsx(
            "overflow-hidden transition-all duration-300 ease-in-out -mt-5 select-none",
            currentLength < MIN_MESSAGE_LENGTH && isMessageTouched
              ? "max-h-[3rem] opacity-100" // Visible and tall enough to show content
              : "max-h-0 opacity-0" // Hidden (collapsed height 0, invisible)
          )}
        >
          <IconText
            icon={AlertCircle}
            size={5}
            className="text-xs sm:text-sm font-medium text-red-500"
          >
            Please enter at least {MIN_MESSAGE_LENGTH} characters
          </IconText>
        </div>

        {/* --- NAME INPUT --- */}
        <input
          type="text"
          name="name"
          aria-label="Enter your name (optional)"
          placeholder="Your Name (optional)"
          className={inputClasses}
        />

        {/* --- EMAIL INPUT --- */}
        <input
          type="text"
          name="contact"
          aria-label="Enter your email or phone number (optional)"
          placeholder="Your Email or Phone (optional)"
          className={inputClasses}
        />

        {/* --- SUBMIT BUTTON --- */}
        <Button
          type="submit"
          aria-label="Send Feedback"
          disabled={isButtonDisabled}
          className={clsx(
            "w-full text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:cursor-pointer",
            "disabled:opacity-40 disabled:cursor-not-allowed",
            "bg-brand-primary-600 hover:bg-brand-primary-700 text-brand-active-text",
            !isButtonDisabled && "hover:scale-[1.01]"
          )}
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
