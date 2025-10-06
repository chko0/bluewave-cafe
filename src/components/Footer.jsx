// Footer.jsx
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import * as LucideIcons from "lucide-react";

import config from "../config.json";

export default function Footer() {
  const { colors } = useTheme();

  const navLinks = config.navigation;
  const socialLinks = config.socials;

  // Define dynamic colors for readability and reuse, matching the visual intent
  const primaryGradientStart = colors.primary600;
  const primaryGradientMiddle = colors.primary700;

  const hoverLinkColor = colors.primary500;
  const primaryTextMuted = "rgba(255, 255, 255, 0.8)"; // Replaces text-blue-100/200
  const borderSubtle = "rgba(255, 255, 255, 0.3)"; // Replaces border-blue-400/40

  return (
    <footer
      className="text-white mt-16 min-h-62 w-full"
      style={{
        background: `linear-gradient(to right, ${primaryGradientStart},  ${primaryGradientMiddle})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-3">
        {/* Brand / About */}
        <div>
          <h2 className="text-lg font-semibold">{config.site.name}</h2>
          <p
            className="mt-3 text-sm leading-relaxed"
            style={{ color: primaryTextMuted }}
          >
            {config.site.footerDescription}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="transition"
                  style={{
                    color: primaryTextMuted,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = hoverLinkColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = primaryTextMuted;
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-md font-semibold">Follow Us</h3>
          <div className="flex gap-4 mt-3">
            {socialLinks.map(({ platform, url, icon }) => {
              // Dynamically get the icon component
              const IconComponent = LucideIcons[icon];

              if (!IconComponent) return null; // Skip if icon name is invalid

              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition"
                  style={{ color: primaryTextMuted }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = hoverLinkColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = primaryTextMuted;
                  }}
                  // Added a slight scale on hover for better feedback
                  onFocus={(e) => {
                    e.currentTarget.style.transform = "scale(1.2)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div
        className="py-4 text-center text-sm"
        // 🟢 Apply theme color for the border and muted text
        style={{
          borderTop: `1px solid ${borderSubtle}`,
          color: primaryTextMuted,
        }}
      >
        © {new Date().getFullYear()} {config.site.name}. All rights reserved.
      </div>
    </footer>
  );
}
