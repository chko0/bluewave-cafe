import { Coffee, Users, Laptop } from "lucide-react";
import { SITE } from "/src/config";

export default function WhyBluewaveSection() {
  const features = [
    {
      icon: Coffee,
      title: "Cozy Atmosphere",
      description:
        "Relax, enjoy your coffee, and soak in the warm, inviting environment.",
    },
    {
      icon: Laptop,
      title: "Work-Friendly",
      description:
        "Quiet corners and fast Wi-Fi for students and freelancers alike.",
    },
    {
      icon: Users,
      title: "Community Hub",
      description:
        "Meet, connect, and collaborate with like-minded coffee enthusiasts.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-brand-light-bg">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-brand-primary-900">
          Why {SITE.shortName}?
        </h2>

        {/* Body */}
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12 text-brand-primary-700">
          Located in Tripoli's Mina District, {SITE.shortName} blends cozy
          aesthetics with a modern, work-friendly design. We're fuel for
          students, freelancers, and every coffee-lover in between — a place to
          focus, connect, and slow down.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center md:items-start gap-4 p-6 rounded-2xl shadow-lg hover:shadow-primary-300/40 transition-shadow duration-300 bg-white border-1 border-brand-border"
            >
              {Icon && (
                <Icon className="text-primary-600 w-8 h-8 text-brand-primary-700" />
              )}
              <h3 className="text-lg md:text-xl font-bold text-brand-primary-700">
                {title}
              </h3>
              <p className="text-sm md:text-base text-brand-primary-700">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Subtle Divider */}
        <div className="mt-16 mx-auto w-24 h-1 rounded-full bg-brand-primary-200" />
      </div>
    </section>
  );
}
