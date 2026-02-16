import { MapPin, Phone, Mail, Coffee } from "lucide-react";
import heroImg from "/cafe-hero.webp";

import { SITE, LOCATION } from "@/config";
import { IconText } from "@/components";

export default function AboutPage() {
  return (
    <>
      <link rel="preload" href="cafe-hero.webp" as="image" alt="cafe-hero" />

      <div className="px-6 py-10 md:py-12 max-w-5xl mx-auto flex flex-col gap-12">
        {/* Hero Section */}
        <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg">
          <img
            src={heroImg}
            alt={SITE.name}
            className={`w-full h-full object-cover transform transition duration-600 block`}
            fetchPriority="high"
            loading="eager"
          />

          <div className="absolute inset-0 flex items-end p-6 rounded-3xl bg-gradient-to-t from-brand-primary-900/70 to-transparent">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Welcome to {SITE.name}
            </h1>
          </div>
        </div>

        {/* About Text */}
        <section className="text-center md:text-left space-y-6">
          <h2 className="text-3xl text-brand-primary-900 font-bold flex items-center justify-center md:justify-start gap-2">
            <Coffee className="w-6 h-6 text-brand-primary-500" />
            Our Story
          </h2>
          <p className="text-lg leading-relaxed text-brand-primary-700">
            At {SITE.shortName}, we craft moments of comfort with every cup.
            From freshly brewed coffee to baked delights, our mission is to
            brighten your day in a cozy & welcoming space.
          </p>
        </section>

        {/* Contact Info */}
        <section className="grid md:place-items-center sm:grid-cols-3 gap-4 text-brand-primary-900">
          {/* 1. Address Link (MapPin) */}
          <a
            href={`https://maps.google.com/?q=${LOCATION.address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconText
              icon={MapPin}
              className="transition-opacity hover:opacity-85 focus:outline-none"
              gap="3"
              iconClassName="w-6 h-6 text-brand-primary-500"
            >
              {LOCATION.address}
            </IconText>
          </a>

          {/* 2. Phone Link */}
          <a href={`tel:${LOCATION.contact.phone}`}>
            <IconText
              icon={Phone}
              className="transition-opacity hover:opacity-85 focus:outline-none"
              gap="3"
              iconClassName="w-6 h-6 text-brand-primary-500"
            >
              {LOCATION.contact.phone}
            </IconText>
          </a>

          {/* 3. Email Link */}
          <a href={`mailto:${LOCATION.contact.email}`}>
            <IconText
              icon={Mail}
              className="transition-opacity hover:opacity-85 focus:outline-none"
              gap="3"
              iconClassName="w-6 h-6 text-brand-primary-500"
            >
              {LOCATION.contact.email}
            </IconText>
          </a>
        </section>

        {/* Mission & Values */}
        <section className="p-8 rounded-3xl shadow-md text-center space-y-4 bg-white">
          <h3 className="text-2xl font-bold text-brand-primary-900">
            Our Mission
          </h3>
          <p className="text-brand-primary-700">
            Fresh brews, warm smiles, & baked delights... making every visit a
            moment to remember!
          </p>
        </section>
      </div>
    </>
  );
}
