import { useState } from "react";
import { MessageCircle, CheckCircle, Star, Send } from "lucide-react";

import { SITE } from "@/config";
import { Button, Spinner, ValidationError } from "@/components";
import { useFeedbackForm } from "@/hooks";

import clsx from "clsx";

export default function FeedbackPage() {
  const {
    formState,
    setFormState,
    touched,
    setTouched,
    loading,
    currentLength,
    isMessageValid,
    isValid,
    result,
    handleSubmit,
    MIN_MESSAGE_LENGTH,
  } = useFeedbackForm();

  const [hoverRating, setHoverRating] = useState(0);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const displayRating = hoverRating || formState.rating;

  // Reusable Tailwind classes for inputs
  const inputClasses = `w-full p-4 pr-7 border rounded-xl shadow-inner
    focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200
    border-gray-300 placeholder-gray-500 focus:ring-brand-primary-500
    scrollbar-thumb-brand-border hover:scrollbar-thumb-brand-hover-bg
  `;

  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      {/* Header and Call to Action */}
      <div className="text-center mb-10">
        <MessageCircle className="w-12 h-12 mx-auto mb-4 text-brand-primary-600" />
        <h2 className="text-3xl font-extrabold mb-2 text-brand-primary-900">
          Your Feedback Matters
        </h2>
        <p className="text-lg text-brand-primary-700">
          Help us make {SITE.shortName} better
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
            className="flex justify-center items-center gap-1.25 sm:gap-2 p-3 sm:p-4 rounded-xl border-2 shadow-inner border-brand-border"
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
                  aria-checked={formState.rating === starValue}
                  role="radio"
                  onClick={() => {
                    setFormState((prev) => ({ ...prev, rating: starValue }));
                    setTouched((prev) => ({ ...prev, rating: true }));
                  }}
                  onMouseEnter={() => setHoverRating(starValue)}
                  onMouseLeave={() => setHoverRating(0)}
                  icon={Star}
                  iconClassName={clsx(
                    "w-6 h-6 transition-all duration-200 transform fill-current",
                    isActive ? "text-brand-primary-500" : "text-brand-border",
                  )}
                  className={clsx(
                    "p-0 bg-transparent hover:bg-transparent shadow-none hover:shadow-none min-w-0 transition-all duration-200 hover:scale-125 active:scale-100 cursor-pointer",
                    isActive && "drop-shadow-[0_0_4px_var(--brand-primary500)]",
                  )}
                />
              );
            })}
          </div>
        </div>

        {/* Validation Error (Star Rating) */}
        <ValidationError show={formState.rating <= 0 && touched.rating}>
          Please select a star rating
        </ValidationError>

        {/* --- MESSAGE INPUT --- */}
        <div className="relative">
          <textarea
            className={clsx(
              inputClasses,
              "resize-none scrollbar scrollbar-thin hover:scrollbar-thumb-brand-hover-bg scrollbar-thumb-rounded",
            )}
            rows="4"
            name="message"
            aria-label="Your feedback. What did you love? How can we improve?"
            aria-required="true"
            placeholder="What did you love? How can we improve?"
            required
            value={formState.message}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, message: e.target.value }))
            }
            onFocus={() => setIsTextareaFocused(true)}
            onBlur={() => {
              setTouched((prev) => ({ ...prev, message: true }));
              setIsTextareaFocused(false);
            }}
          />

          {/* Character Status (Bottom Right, inside the textarea) */}
          <span className="absolute bottom-3 right-2 flex items-end justify-end text-xs w-[70px] h-7 font-medium">
            <span
              className={clsx(
                "absolute text-red-500 transition-opacity",
                isTextareaFocused && !isMessageValid
                  ? "opacity-100"
                  : "opacity-0",
              )}
            >
              {currentLength} / {MIN_MESSAGE_LENGTH}
            </span>
            <span
              className={clsx(
                "absolute transition-opacity",
                isMessageValid ? "opacity-100" : "opacity-0",
              )}
            >
              <CheckCircle size={20} className="text-[#10b981]" />
            </span>
          </span>
        </div>

        {/* Validation Error (Textarea) */}
        <ValidationError show={!isMessageValid && touched.message}>
          Please enter at least {MIN_MESSAGE_LENGTH} characters
        </ValidationError>

        {/* --- NAME INPUT --- */}
        <input
          type="text"
          name="name"
          aria-label="Enter your name (optional)"
          placeholder="Your Name (optional)"
          className={inputClasses}
          value={formState.name}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, name: e.target.value }))
          }
        />

        {/* --- EMAIL INPUT --- */}
        <input
          type="text"
          name="contact"
          aria-label="Enter your email or phone number (optional)"
          placeholder="Your Email or Phone (optional)"
          className={inputClasses}
          value={formState.contact}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, contact: e.target.value }))
          }
        />

        {/* --- SUBMIT BUTTON --- */}
        <Button
          type="submit"
          aria-label="Send Feedback"
          disabled={!isValid || loading}
          icon={!loading ? Send : Spinner}
          iconClassName={
            !loading ? "" : "w-4 h-4 border-2 text-brand-active-text"
          }
          className={clsx(
            "w-full text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:cursor-pointer",
            "disabled:opacity-40 disabled:cursor-not-allowed",
            "bg-brand-primary-600 hover:bg-brand-primary-700 text-brand-active-text",
            !isValid && "hover:scale-[1.01]",
          )}
        >
          {!loading ? "Send" : "Sending..."}
        </Button>
      </form>

      {result && (
        <p className="text-red-500 text-center mt-4 font-medium">{result}</p>
      )}
    </div>
  );
}
