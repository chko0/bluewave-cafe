import MenuItem from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuItems({ items, activeCategory }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCategory}
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.83 }}
        transition={{ duration: 0.25 }}
      >
        {items.map((item) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <MenuItem item={item} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
