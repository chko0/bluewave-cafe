// FeedbackSuccessPage.jsx
import { CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Removed 'Navigate' as it's unused
import { useTheme } from "../context/ThemeContext";
import config from "../config.json";

export default function FeedbackSuccessPage() {
  const location = useLocation();

  return (
    <main className="px-6 py-20 max-w-3xl mx-auto text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-blue-900 mb-2">Thank You!</h2>
      <p className="text-blue-800 text-lg mb-6">
        Your feedback has been successfully sent. We appreciate your input and
        will use it to make BlueWave Café even better!
      </p>
      <Link
        to="/menu"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
      >
        Back to Menu
      </Link>
    </main>
  );
}
