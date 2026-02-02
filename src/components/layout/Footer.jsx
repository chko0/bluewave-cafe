import { Link } from "react-router-dom";
import { NAVIGATION, SOCIALS, SITE } from "@/config";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="text-white min-h-62 w-full bg-gradient-to-r from-brand-primary-600 to-brand-primary-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-3">
        {/* Brand / About */}
        <div>
          <h2 className="text-lg font-semibold">{SITE.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-active-text/80">
            {SITE.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold">Quick Links</h3>
          <ul className="footer-options mt-3 space-y-2 text-sm">
            {NAVIGATION.map(({ path, label, hidden }) => {
              if (hidden) return null;

              return (
                <li key={path}>
                  <Link
                    to={path}
                    className="transition duration-200 hover:opacity-50 focus:opacity-100 text-brand-active-text/80"
                    aria-label={`Go to ${label} page`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-md font-semibold">Follow Us</h3>
          <div className="footer-options flex gap-4 mt-3">
            {SOCIALS.map(({ platform, url, icon }) => {
              if (!icon) return null; // Skip if icon is invalid

              return (
                <Link
                  key={platform}
                  to={url}
                  aria-label={`Follow us on ${platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-200 hover:opacity-50 focus:opacity-100 text-brand-active-text/80"
                >
                  <Icon icon={`simple-icons:${icon}`} size={20} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 text-center text-sm text-brand-active-text/80 border-t border-brand-active-text/20">
        © {new Date().getFullYear()} {SITE.copyrightName}. All rights reserved.
      </div>
    </footer>
  );
}
