import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import testimonials from "../../data/testimonialsData";
import TestimonialCard from "./testimonials/TestimonialCard";
import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";

export default function TestimonialsSection() {
  const { colors } = useTheme();
  const [index, setIndex] = useState(0);

  // Logic to show different amounts based on screen size could be complex,
  // so we'll keep the 3-item slice but improve the grid responsiveness.
  const visibleTestimonials = testimonials.slice(index, index + 3);

  const next = () => {
    setIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          style={{ color: colors.primary900 }}
        >
          What Regulars Say
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative min-h-[300px]">
        {/* Fixed min-height prevents jumping */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
              exit: { opacity: 0 },
            }}
          >
            {visibleTestimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name + i}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-col items-center mt-12 gap-4">
          <Button
            onClick={next}
            trailingIcon={true}
            className="group flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border-2 active:scale-95 bg-transparent hover:bg-transparent"
            style={{
              borderColor: `${colors.primary600}30`,
              color: colors.primary600,
            }}
          >
            Next Stories
          </Button>

          {/* Progress Indicators (Senior Touch) */}
          <div className="flex gap-1.5">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
              (_, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === index / 3 ? "24px" : "6px",
                    backgroundColor:
                      i === index / 3
                        ? colors.primary600
                        : `${colors.primary600}20`,
                  }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
