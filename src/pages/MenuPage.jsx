import React, { useState, useEffect, Suspense } from "react";
import { useOutletContext } from "react-router-dom";

import "../styles/MenuPage.css";

import menuData from "../data/menuData";

import CategoryNav from "../components/menu/CategoryNav";
import CategoryHeader from "../components/menu/CategoryHeader";
import Loading from "../components/ui/Loading";

const MenuItems = React.lazy(() => import("../components/menu/MenuItems"));

export default function MenuPage() {
  const { headerHeight, navbarHeight } = useOutletContext();

  // All categories available
  const categories = Object.keys(menuData);

  // Default category fallback
  const defaultCategory = categories[0];

  // Retrieve stored category if valid
  const storedCategory = localStorage.getItem("Category");
  const initialCategory =
    storedCategory && menuData[storedCategory]
      ? storedCategory
      : defaultCategory;

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const ActiveIcon = menuData[activeCategory].icon;

  // Scroll into position after category change
  useEffect(() => {
    localStorage.setItem("Category", activeCategory);

    const targetScroll = headerHeight - navbarHeight;

    if (window.scrollY > targetScroll) {
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  }, [activeCategory, headerHeight, navbarHeight]);

  return (
    <>
      <CategoryNav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        navbarHeight={navbarHeight}
      />

      <div className="px-6 py-4 md:py-6 max-w-7xl mx-auto min-h-screen flex flex-col transition duration-300">
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
