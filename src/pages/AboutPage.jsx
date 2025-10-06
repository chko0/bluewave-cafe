import { MapPin, Phone, Coffee } from "lucide-react";
import heroImg from "/cafe-hero.webp";
import { useTheme } from "../context/ThemeContext";
import config from "../config.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function AboutPage() {
  const { colors } = useTheme();

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto flex flex-col gap-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg">
        <LazyLoadImage
          src={heroImg}
          alt={config.site.name}
          effect="blur"
          wrapperClassName="w-full h-full flex justify-center items-center"
          className={`w-full h-full object-cover transform transition duration-600 block`}
        />

        <div
          className="absolute inset-0 flex items-end p-6 rounded-3xl"
          style={{
            background: `linear-gradient(to top, ${colors.primary900}B3, transparent)`, // B3 is hex for ~70% opacity
          }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Welcome to {config.site.name}
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
          At {config.site.name}, we craft moments of comfort with every cup.
          From freshly brewed coffee to baked delights, our mission is to
          brighten your day in a cozy and welcoming space.
        </p>
      </section>

      {/* Contact Info */}
      <section
        className="grid sm:grid-cols-2 gap-8"
        style={{ color: colors.primary900 }}
      >
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6" style={{ color: colors.primary500 }} />{" "}
          <p>{config.contact.address}</p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-6 h-6" style={{ color: colors.primary500 }} />{" "}
          <p>{config.contact.phone}</p>
        </div>
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
          Fresh brews, warm smiles, and baked delights... making every visit a
          moment to remember!
        </p>
      </section>
    </main>
  );
}
