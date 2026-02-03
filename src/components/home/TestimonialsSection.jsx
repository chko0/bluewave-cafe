import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { testimonialsData as testimonials } from "@/data";
import TestimonialCard from "./TestimonialCard";
import { Button } from "@/components";
import clsx from "clsx";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const visibleTestimonials = testimonials.slice(index, index + 3);

  const next = () => {
    setIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  return (
    <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-brand-primary-900">
          What Regulars Say
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <AnimatePresence initial={false} mode="wait">
          {visibleTestimonials.map((testimonial) => (
            <motion.div
              layout
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-center mt-12 gap-4">
        <Button
          onClick={next}
          trailingIcon={true}
          className="group flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border-2 active:scale-95 bg-transparent hover:bg-transparent
            border-brand-primary-600/20 text-brand-primary-600"
        >
          Next Stories
        </Button>

        {/* Progress Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
            (_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i * 3)}
                className={clsx(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  i === index / 3
                    ? "w-[28px] bg-brand-primary-600"
                    : "w-[10px] bg-brand-primary-600/30",
                )}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
