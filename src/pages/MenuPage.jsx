import React, { useState, useRef, useEffect, Suspense } from "react";
import "../styles/MenuPage.css";

import menuData from "../data/menuData";

import CategoryNav from "../components/CategoryNav";
import CategoryHeader from "../components/CategoryHeader";
import Loading from "../components/Loading";

const MenuItems = React.lazy(() => import("../components/MenuItems"));

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
    if (menuRef.current) {
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
    <>
      <CategoryNav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Menu Section */}
      <div
        ref={menuRef}
        className="px-6 py-4 md:py-6 max-w-7xl mx-auto min-h-screen flex flex-col transition duration-300 ease-in-out"
      >
        <CategoryHeader
          key={activeCategory}
          activeCategory={activeCategory}
          ActiveIcon={ActiveIcon}
        />

        <Suspense fallback={<Loading isFullHeight={false} className="mt-12" />}>
          <MenuItems
            items={menuData[activeCategory].items}
            activeCategory={activeCategory}
          />
        </Suspense>
      </div>
    </>
  );
}
