import { Button, MenuItem } from "@/components";
import { getSpecialtyItems } from "@/utils";
import menuData from "@/data/menuData";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SpecialtyItemsSection() {
  const items = getSpecialtyItems(menuData, 4);

  if (!items.length) return null;

  return (
    <section className="relative py-16 px-6 md:px-12 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none text-brand-primary-900">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <circle cx="100" cy="0" r="80" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2.5xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight tracking-tight text-brand-primary-900">
              The Specialty{" "}
              <span className="text-brand-primary-600">Picks</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-80 text-brand-primary-900">
              Hand-selected favorites and seasonal highlights curated for the
              true coffee enthusiast.
            </p>
          </div>

          {/* Subtle link for desktop users */}
          <Button
            to="/menu"
            variant="ghost"
            className="hidden md:flex items-center gap-2 font-bold group bg-transparent hover:bg-transparent text-brand-primary-600"
          >
            Browse all items
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Items Grid with Staggered Entrance */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id || item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <MenuItem
                item={item}
                index={index}
                highPriorityLoading={index === 0}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile-only CTA */}
        <div className="mt-12 flex justify-center md:hidden">
          <Button
            to="/menu"
            className="w-full sm:w-auto rounded-2xl px-8 py-4 text-md text-white font-semibold shadow-xl shadow-blue-900/10 bg-brand-primary-600"
          >
            Explore Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
