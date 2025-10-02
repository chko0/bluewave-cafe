import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "./data/menuData";
import MenuItem from "./components/MenuItem";

export default function App() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const menuRef = useRef(null);
  const ActiveIcon = menuData[activeCategory].icon;

  useEffect(() => {
    if (menuRef.current) {
      const menuTop =
        menuRef.current.getBoundingClientRect().top + window.pageYOffset;
      const stickyOffset = 81; // height of your sticky nav

      // Only scroll if user is below the menu section
      if (window.scrollY > menuTop - stickyOffset) {
        window.scrollTo({
          top: menuTop - stickyOffset,
          behavior: "smooth",
        });
      }
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-8 shadow-lg">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
          BlueWave Café
        </h1>
        <p className="text-center text-blue-200 mt-2 text-lg md:text-xl">
          Fresh brews & baked delights
        </p>
      </header>

      {/* Categories Navigation */}
      <nav className="sticky top-0 z-50 overflow-x-auto bg-blue-50 border-b border-blue-200 shadow-sm relative">
        <div className="overflow-x-auto px-2">
          <div className="flex gap-3 px-4 py-3 min-w-max justify-start sm:justify-center">
            {Object.entries(menuData).map(([catName, catData]) => {
              const Icon = catData.icon;
              return (
                <button
                  key={catName}
                  onClick={() => setActiveCategory(catName)}
                  className={`px-5 py-2 rounded-full font-semibold transition-all flex items-center gap-2
            ${
              activeCategory === catName
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-blue-200 text-blue-800 hover:bg-blue-300 hover:scale-105 hover:shadow hover:cursor-pointer"
            }`}
                >
                  <Icon className="w-5 h-5" />
                  {catName}
                </button>
              );
            })}
          </div>
        </div>

        {/*  gradient overlay to hint scroll */}
        <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
      </nav>

      {/* Menu Section */}
      <main
        ref={menuRef}
        className="px-6 py-10 max-w-7xl mx-auto min-h-screen flex flex-col"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center justify-center gap-3">
          <span className="block h-1 w-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full"></span>
          <ActiveIcon className="w-6 h-6 text-blue-500" />
          {activeCategory}
          <ActiveIcon className="w-6 h-6 text-blue-500" />
          <span className="block h-1 w-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full"></span>
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuData[activeCategory].items.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: 0.0 }}
              >
                <MenuItem item={item} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
