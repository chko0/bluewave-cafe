import { useTheme } from "/src/context/ThemeContext";

export default function WhyBluewaveSection() {
  const { colors } = useTheme();

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-6"
          style={{ color: colors.primary900 }}
        >
          Why BlueWave?
        </h2>

        {/* Body */}
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: colors.primary700 }}
        >
          Located in Tripoli’s Mina District, BlueWave blends cozy aesthetics
          with a modern, work-friendly design. We’re fuel for students,
          freelancers, and every coffee-lover in between — a place to focus,
          connect, and slow down.
        </p>

        {/* Subtle divider */}
        <div
          className="mt-10 mx-auto w-24 h-1 rounded-full"
          style={{ backgroundColor: colors.primary200 }}
        />
      </div>
    </section>
  );
}
