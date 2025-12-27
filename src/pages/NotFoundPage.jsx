import Button from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <div className="px-6 py-14 max-w-xl mx-auto text-center">
      {/* Container for the success card effect */}
      <div className="bg-white p-10 rounded-3xl shadow-2xl space-y-5 border-t-8 border-brand-primary-500">
        <span className="text-9xl mx-auto text-brand-primary-500 font-bold mb-4 transition-transform duration-300 scale-100 animate-pulse-once">
          404
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-brand-primary-900">
          Page Not Found!
        </h2>

        <p className="text-lg md:text-xl mb-8 text-brand-primary-700">
          Looks like this page has gone missing! Maybe it stepped out for a
          quick coffee break. Let's get you back on track.
        </p>

        {/* --- Back to Home Button --- */}
        <Button
          to="/"
          className="
              text-sm md:text-base px-6 py-4 md:px-8 rounded-xl transition-all duration-200 font-bold shadow-lg
              text-brand-active-text
              hover:shadow-xl uppercase tracking-wider hover:scale-[1.03]
              bg-brand-primary-600 hover:bg-brand-primary-700
          "
          aria-label="Return Home"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}
