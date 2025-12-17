import { MapPin, Phone, Navigation } from "lucide-react";
import { SITE, LOCATION, OPENING_HOURS, DAYS_ORDER } from "/src/config";
import { getOpenStatus } from "/src/utils/utils";
import { useTheme } from "/src/context/ThemeContext";
import clsx from "clsx";
import Button from "../ui/Button";

export default function LocationSection() {
  const { colors } = useTheme();
  const status = getOpenStatus(OPENING_HOURS);

  // Determine active day for highlighting
  const currentDay = new Date()
    .toLocaleString("en-US", { weekday: "long" })
    .toLowerCase();

  // Dynamic styles for the Status indicator
  const statusColors = {
    bg: status.open ? "bg-green-500" : "bg-red-500",
    text: status.open ? "text-green-600" : "text-red-600",
  };

  return (
    <section
      id="location"
      className="py-20 md:py-32 px-4"
      style={{ backgroundColor: colors.lightBg }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight"
            style={{ color: colors.primary900 }}
          >
            Find Us at {SITE.name}
          </h2>
          <p className="text-lg" style={{ color: colors.primary700 }}>
            {LOCATION.tagline || "Your local spot for coffee and community."}
          </p>
        </div>

        {/* Floating Glass Card Container */}
        <div
          className="grid lg:grid-cols-5 gap-8 rounded-2xl border backdrop-blur-sm shadow-2xl overflow-hidden transform hover:shadow-primary-300/50 transition duration-300"
          style={{
            background: colors.glassBg,
            borderColor: colors.border,
          }}
        >
          {/* Map (should take up 3/5 on large screens) */}
          <div className="relative h-96 lg:h-auto lg:col-span-3">
            <img
              src={LOCATION.map.staticImage}
              alt="Map location"
              className="w-full h-full object-cover"
            />
            {/* Directions Button */}
            <Button
              href={LOCATION.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={Navigation}
              className={clsx(
                "absolute bottom-6 left-6 inline-flex items-center gap-2 px-5 py-2 rounded-full text-base font-bold shadow-xl transition",
                "bg-white text-gray-900 border border-gray-200",
                "hover:bg-gray-50 hover:scale-[1.03]"
              )}
            >
              Get Directions
            </Button>
          </div>

          {/* Info (should take up 2/5 on large screens) */}
          <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-between">
            {/* Status & Hours */}
            <div className="flex flex-col gap-8">
              {/* Status */}
              <div className="flex items-center gap-3">
                <span
                  className={clsx(
                    "w-4 h-4 rounded-full shadow-md",
                    statusColors.bg
                  )}
                />
                <span className={clsx("text-xl font-bold", statusColors.text)}>
                  {status.label}
                </span>
              </div>

              {/* Hours Grid */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: colors.primary900 }}
                >
                  Operating Hours
                </h3>
                {DAYS_ORDER.map((day) => {
                  const hours = OPENING_HOURS[day];
                  const isToday = day === currentDay;

                  return (
                    <div
                      key={day}
                      className={clsx(
                        "flex justify-between py-1 border-b border-dashed",
                        isToday ? "font-extrabold" : "font-medium text-gray-600"
                      )}
                      style={{
                        borderColor: isToday
                          ? colors.primary400
                          : colors.border,
                      }}
                    >
                      <span className="capitalize">{day}</span>
                      <span
                        className={clsx(
                          hours
                            ? isToday
                              ? "text-gray-900"
                              : "text-gray-700"
                            : "text-red-500"
                        )}
                      >
                        {hours ? `${hours.open} – ${hours.close}` : "Closed"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div
              className="flex flex-col gap-3 pt-6 mt-6 border-t"
              style={{ borderColor: colors.border }}
            >
              <h3
                className="text-xl font-semibold"
                style={{ color: colors.primary900 }}
              >
                Contact & Location
              </h3>
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1"
                  style={{ color: colors.primary700 }}
                />
                <span
                  className="text-base leading-relaxed"
                  style={{ color: colors.primary800 }}
                >
                  {LOCATION.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} style={{ color: colors.primary700 }} />
                <a
                  href={`tel:${LOCATION.contact.phone}`}
                  className="text-base font-semibold hover:text-primary-700 transition"
                  style={{ color: colors.primary800 }}
                >
                  {LOCATION.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
