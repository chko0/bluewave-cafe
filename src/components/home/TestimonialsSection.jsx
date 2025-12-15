import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import testimonials from "../../data/testimonials";
import TestimonialCard from "./testimonials/TestimonialCard";
import { useTheme } from "../../context/ThemeContext";

export default function TestimonialsSection() {
  const { colors } = useTheme();
  const [index, setIndex] = useState(0);

  const visibleTestimonials = testimonials.slice(index, index + 3);

  // Loop back when reaching the end
  const next = () => {
    setIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  return (
    <section className="py-20 px-6 md:px-16">
      {/* Section title */}
      <h2
        className="text-3xl md:text-4xl font-extrabold mb-10 text-center"
        style={{ color: colors.primary900 }}
      >
        What Regulars Say
      </h2>

      {/* Carousel */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {visibleTestimonials.map((testimonial, i) => (
              <TestimonialCard
                key={testimonial.name + i}
                testimonial={testimonial}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={next}
            className="text-sm font-semibold underline underline-offset-4"
            style={{ color: colors.primary600 }}
          >
            More reviews
          </button>
        </div>
      </div>
    </section>
  );
}
