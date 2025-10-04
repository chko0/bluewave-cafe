import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-8 shadow-lg">
      <nav className="flex justify-center gap-6 text-sm text-blue-200 mb-3">
        <Link to="/menu" className="hover:text-white transition">
          Menu
        </Link>
        <Link to="/about" className="hover:text-white transition">
          About
        </Link>
        <Link to="/feedback" className="hover:text-white transition">
          Feedback
        </Link>
      </nav>

      <Link to="/" className="block">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
          BlueWave Café
        </h1>
      </Link>

      <p className="text-center text-blue-200 mt-2 text-lg md:text-xl">
        Fresh brews & baked delights
      </p>
    </header>
  );
}
