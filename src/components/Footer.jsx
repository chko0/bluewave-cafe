// Footer.jsx
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-3">
        {/* Brand / About */}
        <div>
          <h2 className="text-lg font-semibold">BlueWave Café</h2>
          <p className="mt-3 text-sm text-blue-100 leading-relaxed">
            Fresh brews, warm smiles, and baked delights every day. Your cozy
            spot for coffee and comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#menu" className="hover:text-blue-200">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-md font-semibold">Follow Us</h3>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-blue-200">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-200">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-200">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-400/40 py-4 text-center text-sm text-blue-100">
        © {new Date().getFullYear()} BlueWave Café. All rights reserved.
      </div>
    </footer>
  );
}
