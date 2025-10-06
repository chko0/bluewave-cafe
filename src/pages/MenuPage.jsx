import { useState, useRef, useEffect } from "react";
import menuData from "../data/menuData";
import CategoryNav from "../components/CategoryNav";
import MenuItems from "../components/MenuItems";
import CategoryHeader from "../components/CategoryHeader";

export default function MenuPage() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const menuRef = useRef(null);
  const ActiveIcon = menuData[activeCategory].icon;

  useEffect(() => {
    if (menuRef.current) {
      const menuTop =
        menuRef.current.getBoundingClientRect().top + window.pageYOffset;
      const stickyOffset = 71; // height of your sticky nav

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
    <>
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
    </>
  );
}
