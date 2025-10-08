import { useState, useRef, useEffect } from "react";
import menuData from "../data/menuData";
import CategoryNav from "../components/CategoryNav";
import MenuItems from "../components/MenuItems";
import CategoryHeader from "../components/CategoryHeader";

export default function MenuPage({ headerOffset = 292 }) {
  const categories = Object.keys(menuData);

  const storedCategory = localStorage.getItem("Category");
  const defaultCategory = categories[0];

  const chosenCategory =
    storedCategory && menuData[storedCategory]
      ? storedCategory
      : defaultCategory;

  const [activeCategory, setActiveCategory] = useState(chosenCategory);

  const ActiveIcon = menuData[activeCategory].icon;

  const menuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("Category", activeCategory);
    if (menuRef.current && navRef.current) {
      const menuTop =
        menuRef.current.getBoundingClientRect().top + window.pageYOffset;

      // Only scroll if user is below the menu section
      if (window.scrollY > headerOffset) {
        window.scrollTo({
          top: headerOffset,
          behavior: "smooth",
        });
      }
    }
  }, [activeCategory]);

  return (
    <div ref={navRef}>
      <CategoryNav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Menu Section */}
      <main
        ref={menuRef}
        className="px-6 py-6 md:py-8 max-w-7xl mx-auto min-h-screen flex flex-col transition duration-300 ease-in-out"
      >
        <CategoryHeader
          activeCategory={activeCategory}
          ActiveIcon={ActiveIcon}
        />

        <MenuItems
          items={menuData[activeCategory].items}
          activeCategory={activeCategory}
        />
      </main>
    </div>
  );
}
