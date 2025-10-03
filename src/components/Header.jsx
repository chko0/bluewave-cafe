import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-8 shadow-lg">
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
