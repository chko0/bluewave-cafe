import { motion, AnimatePresence } from "framer-motion";
import React, { Suspense } from "react";

const MenuItem = React.lazy(() => import("./MenuItem"));

export default function MenuItems({ items, activeCategory }) {
  // Sort items so 'New' items are first
  const sortedItems = [...items].sort((a, b) => {
    const isANew = a.new ? 1 : 0;
    const isBNew = b.new ? 1 : 0;

    return isBNew - isANew;
  });

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
        {sortedItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={null}>
              <MenuItem
                index={index}
                item={item}
                highPriorityLoading={index < 1}
              />
            </Suspense>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
