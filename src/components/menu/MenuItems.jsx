import { motion, AnimatePresence } from "framer-motion";
import MenuItem from "./MenuItem";

export default function MenuItems({
  items = [],
  activeCategory = "default",
  sortNewFirst = true,
}) {
  // Sort items if needed
  const sortedItems = sortNewFirst
    ? [...items].sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
    : items;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCategory}
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.01, y: -10 }}
        transition={{ duration: 0.24 }}
      >
        {sortedItems.map((item, index) => (
          <MenuItem
            key={item.name}
            item={item}
            highPriorityLoading={index < 1}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
