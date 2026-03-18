import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Navigation } from "lucide-react";

import { Button, Badge, IconText } from "@/components";
import { SITE, LOCATION, OPENING_HOURS, DAYS_ORDER } from "@/config";
import { getOpenStatus } from "@/utils";

import clsx from "clsx";

export default function LocationSection() {
  const [isInView, setIsInView] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const containerRef = useRef(null);

  const status = getOpenStatus(OPENING_HOURS);

  // Determine active day for highlighting
  const currentDay = new Date()
    .toLocaleString("en-US", { weekday: "long" })
    .toLowerCase();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Only load once
        }
      },
      { rootMargin: "400px" }, // Start loading 400px before it enters view
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="location" className="py-20 md:py-32 px-4 bg-brand-light-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight text-brand-primary-900">
            Visit Us at {SITE.name}
          </h2>
          <p className="text-lg text-brand-primary-900">{SITE.tagline}</p>
        </div>

        {/* Floating Glass Card Container */}
        <div
          className={clsx(
            "grid lg:grid-cols-5 overflow-hidden rounded-3xl border",
            "shadow-xl hover:shadow-2xl transition-shadow duration-300",
            "bg-white/60 backdrop-blur-md border-brand-border",
          )}
        >
          {/* Map */}
          <div
            ref={containerRef}
            className="relative h-[50vh] lg:h-auto lg:col-span-3"
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Map Placeholder */}
            {!mapLoaded && (
              <img
                src="/map-placeholder.webp"
                alt="Map Placeholder"
                className="absolute inset-0 w-full h-full object-cover animate-pulse bg-gray-200"
              />
            )}

            {/* Map Location */}
            {isInView && (
              <iframe
                title="Google Map Location"
                src={LOCATION.map.embedUrl}
                className={clsx(
                  "absolute inset-0 w-full h-full border-0 transition-opacity duration-700",
                  mapLoaded ? "opacity-100" : "opacity-0",
                )}
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
                loading="lazy"
              />
            )}

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
          <div className="lg:col-span-2 p-6 md:p-10 flex flex-col justify-between">
            {/* Status & Hours */}
            <div className="flex flex-col gap-6">
              {/* Status (Open / Closed) */}
              <div className="flex justify-start">
                <Badge
                  className={clsx(
                    "px-4 py-1.5 rounded-full border flex items-center gap-3",
                    status.open
                      ? "bg-green-50 border-green-500 shadow-sm shadow-green-100/50"
                      : "bg-red-100/80 border-red-400 shadow-sm shadow-red-100/50",
                  )}
                >
                  {/* Animated Status Dot */}
                  <div className="relative flex items-center justify-center">
                    {status.open && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    )}
                    <span
                      className={clsx(
                        "relative inline-flex h-2.5 w-2.5 rounded-full",
                        status.open ? "bg-green-600" : "bg-red-700",
                      )}
                    />
                  </div>

                  <span
                    className={clsx(
                      "text-sm font-extrabold uppercase tracking-widest",
                      status.open ? "text-green-600" : "text-red-700",
                    )}
                  >
                    {status.label}
                  </span>
                </Badge>
              </div>

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
                        "flex justify-between py-1.5 md:py-1",
                        isToday
                          ? "font-extrabold border-brand-primary-400"
                          : "font-medium text-gray-600 border-brand-border",
                      )}
                    >
                      <span className="capitalize">{day}</span>
                      <span
                        className={clsx(
                          hours
                            ? isToday
                              ? "text-gray-900"
                              : "text-gray-700"
                            : "text-red-700",
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
