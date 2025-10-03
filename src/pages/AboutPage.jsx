import { MapPin, Phone, Coffee } from "lucide-react";
import heroImg from "../assets/cafe-hero.jpg"; // add a hero image in your project

export default function AboutPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto flex flex-col gap-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg">
        <img
          src={heroImg}
          alt="BlueWave Café"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-6 rounded-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Welcome to BlueWave Café
          </h1>
        </div>
      </div>

      {/* About Text */}
      <section className="text-center md:text-left space-y-6">
        <h2 className="text-3xl font-bold text-blue-900 flex items-center justify-center md:justify-start gap-2">
          <Coffee className="w-6 h-6 text-blue-500" />
          Our Story
        </h2>
        <p className="text-lg text-blue-800 leading-relaxed">
          At BlueWave Café, we craft moments of comfort with every cup. From
          freshly brewed coffee to baked delights, our mission is to brighten
          your day in a cozy and welcoming space.
        </p>
      </section>

      {/* Contact Info */}
      <section className="grid sm:grid-cols-2 gap-8 text-blue-900">
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6 text-blue-500" />
          <p>123 BlueWave Street, Tripoli, Lebanon</p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-6 h-6 text-blue-500" />
          <p>+961 55 555 555</p>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="bg-blue-50 p-8 rounded-3xl shadow-md text-center space-y-4">
        <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
        <p className="text-blue-800">
          Fresh brews, warm smiles, and baked delights... making every visit a
          moment to remember!
        </p>
      </section>
    </main>
  );
}
