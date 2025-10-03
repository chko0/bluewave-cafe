import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-5xl font-bold text-blue-900 mb-4">404</h2>
      <p className="text-lg text-blue-700 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Back to Menu
      </Link>
    </main>
  );
}
