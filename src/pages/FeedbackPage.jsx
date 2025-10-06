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

  return (
    <main className="px-6 py-12 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <MessageCircle className="w-12 h-12 mx-auto text-blue-500 mb-4" />
        <h2 className="text-3xl font-bold text-blue-900 mb-2">
          We Value Your Feedback
        </h2>
        <p className="text-lg" style={{ color: colors.primary700 }}>
          Every message helps us make {config.site.name} better
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name (optional)"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email (optional)"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-400"
        />
        <textarea
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-400"
          rows="5"
          name="message"
          placeholder="Share your thoughts with us..."
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold hover:cursor-pointer"
        >
          {loading ? "Sending..." : "Submit Feedback"}
        </button>
      </form>
      <span className="text-red-500">{result}</span>
    </main>
  );
}
