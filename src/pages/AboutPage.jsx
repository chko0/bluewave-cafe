import { MapPin, Phone, Mail, Coffee } from "lucide-react";
import heroImg from "/cafe-hero.webp";
import { useTheme } from "../context/ThemeContext";
import { SITE, LOCATION } from "/src/config";

export default function AboutPage() {
  const { colors } = useTheme();

  return (
    <div className="px-6 py-16 max-w-5xl mx-auto flex flex-col gap-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg">
        <img
          src={heroImg}
          alt={SITE.name}
          className={`w-full h-full object-cover transform transition duration-600 block`}
          fetchPriority="high"
          loading="eager"
        />

        <div
          className="absolute inset-0 flex items-end p-6 rounded-3xl"
          style={{
            background: `linear-gradient(to top, ${colors.primary900}B3, transparent)`, // B3 is hex for ~70% opacity
          }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Welcome to {SITE.name}
          </h1>
        </div>
      </div>

      {/* About Text */}
      <section className="text-center md:text-left space-y-6">
        <h2
          className="text-3xl font-bold flex items-center justify-center md:justify-start gap-2"
          style={{ color: colors.primary900 }}
        >
          <Coffee className="w-6 h-6" style={{ color: colors.primary500 }} />
          Our Story
        </h2>
        <p
          className="text-lg leading-relaxed"
          style={{ color: colors.primary700 }}
        >
          At {SITE.name}, we craft moments of comfort with every cup. From
          freshly brewed coffee to baked delights, our mission is to brighten
          your day in a cozy & welcoming space.
        </p>
      </section>

      {/* Contact Info */}
      <section
        className="grid md:place-items-center sm:grid-cols-3 gap-4"
        style={{ color: colors.primary900 }}
      >
        {/* 1. Address Link (MapPin) */}
        <a
          href={`https://maps.google.com/?q=${LOCATION.address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group transition-opacity hover:opacity-85 focus:outline-none"
        >
          <MapPin className="w-6 h-6" style={{ color: colors.primary500 }} />
          <p>{LOCATION.address}</p>
        </a>

        {/* 2. Phone Link */}
        <a
          href={`tel:${LOCATION.contact.phone}`}
          className="flex items-center gap-3 group transition-opacity hover:opacity-85 focus:outline-none"
        >
          <Phone className="w-6 h-6" style={{ color: colors.primary500 }} />
          <p>{LOCATION.contact.phone}</p>
        </a>

        {/* 3. Email Link */}
        <a
          href={`mailto:${LOCATION.contact.email}`}
          className="flex items-center gap-3 group transition-opacity hover:opacity-85 focus:outline-none"
        >
          <Mail className="w-6 h-6" style={{ color: colors.primary500 }} />
          <p>{LOCATION.contact.email}</p>
        </a>
      </section>

      {/* Mission / Values */}
      <section
        className="p-8 rounded-3xl shadow-md text-center space-y-4"
        style={{ backgroundColor: "white" }}
      >
        <h3 className="text-2xl font-bold" style={{ color: colors.primary900 }}>
          Our Mission
        </h3>
        <p style={{ color: colors.primary700 }}>
          Fresh brews, warm smiles, & baked delights... making every visit a
          moment to remember!
        </p>
      </section>
    </div>
  );
}
