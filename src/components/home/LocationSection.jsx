import { useState } from "react";

import { Button, Badge, IconText } from "@/components/ui";

import { MapPin, Phone, Navigation } from "lucide-react";
import { SITE, LOCATION, OPENING_HOURS, DAYS_ORDER } from "@/config";
import { getOpenStatus } from "@/utils/utils";
import clsx from "clsx";

export default function LocationSection() {
  const [mapLoaded, setMapLoaded] = useState(false);

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
      className="py-20 md:py-32 px-4 bg-brand-light-bg"
      // style={{ backgroundColor: colors.lightBg }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight text-brand-primary-900">
            Visit Us at {SITE.name}
          </h2>
          <p className="text-lg text-brand-primary-700">
            {LOCATION.tagline || "Your local spot for coffee and community."}
          </p>
        </div>

        {/* Floating Glass Card Container */}
        <div
          className={clsx(
            "grid lg:grid-cols-5 overflow-hidden rounded-3xl border",
            "shadow-xl hover:shadow-2xl transition-shadow duration-300",
            "bg-white/60 backdrop-blur-md border-brand-border",
          )}
        >
          {/* Map (should take up 3/5 on large screens) */}
          <div className="relative h-96 lg:h-auto lg:col-span-3">
            {/* Overlay Gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Map Placeholder */}
            {!mapLoaded && (
              <img
                src="/map-placeholder.webp"
                alt="Map Placeholder"
                className="absolute inset-0 w-full h-full object-cover scale-105"
              />
            )}

            {/* Map Location */}
            <iframe
              title="Google Map Location"
              src={LOCATION.map.embedUrl}
              className={clsx(
                "absolute inset-0 w-full h-full border-0 transition-opacity duration-700",
                mapLoaded ? "opacity-100" : "opacity-0",
              )}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
            />

            {/* Directions Button */}
            <Button
              as="a"
              href={LOCATION.map.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={Navigation}
              className={clsx(
                "absolute bottom-6 left-6 inline-flex items-center gap-2 px-5 py-2 rounded-full text-base font-bold shadow-xl transition",
                "bg-white text-gray-900 border border-gray-200",
                "hover:bg-gray-50 hover:scale-[1.03]",
              )}
            >
              Get Directions
            </Button>
          </div>

          {/* Info (should take up 2/5 on large screens) */}
          <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-between">
            {/* Status & Hours */}
            <div className="flex flex-col gap-8">
              {/* Status (Open / Closed) */}
              <Badge
                variant={status.open ? "open" : "closed"}
                className="px-4 py-2 text-sm font-extrabold tracking-wide gap-3"
              >
                <span
                  className={clsx(
                    "w-3 h-3 rounded-full shadow-md",
                    statusColors.bg,
                  )}
                />
                <span className={clsx("text-lg font-bold", statusColors.text)}>
                  {status.label}
                </span>
              </Badge>

              {/* Hours Grid */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold mb-2 text-brand-primary-900">
                  Operating Hours
                </h3>
                {DAYS_ORDER.map((day) => {
                  const hours = OPENING_HOURS[day];
                  const isToday = day === currentDay;

                  return (
                    <div
                      key={day}
                      className={clsx(
                        "flex justify-between py-1",
                        isToday
                          ? "font-extrabold"
                          : "font-medium text-gray-600",
                        isToday
                          ? "border-brand-primary-400"
                          : "border-brand-border",
                      )}
                    >
                      <span className="capitalize">{day}</span>
                      <span
                        className={clsx(
                          hours
                            ? isToday
                              ? "text-gray-900"
                              : "text-gray-700"
                            : "text-red-500",
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
            <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-brand-border">
              <h3 className="text-xl font-semibold text-brand-primary-900">
                Contact & Location
              </h3>

              {/* 1. Address Link (MapPin) */}
              <a
                href={`https://maps.google.com/?q=${LOCATION.address}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconText
                  icon={MapPin}
                  className="transition-opacity hover:opacity-85 focus:outline-none text-brand-primary-900"
                  size="5"
                  gap="3"
                  iconClassName="text-brand-primary-500"
                >
                  {LOCATION.address}
                </IconText>
              </a>

              {/* 2. Phone Link */}
              <a href={`tel:${LOCATION.contact.phone}`}>
                <IconText
                  icon={Phone}
                  className="transition-opacity hover:opacity-85 focus:outline-none text-brand-primary-900"
                  size="5"
                  gap="3"
                  iconClassName="text-brand-primary-500"
                >
                  {LOCATION.contact.phone}
                </IconText>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
