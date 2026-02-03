import { useEffect, Suspense, useMemo } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

import { menuData } from "@/data";
import { Loading, CategoryHeader, CategoryNav, MenuItems } from "@/components";
import { useScrollTo } from "@/hooks";

export default function MenuPage() {
  const { headerHeight, navbarHeight } = useOutletContext();
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const scrollTo = useScrollTo();

  // Convert menuData to an array for easier searching
  const menuArray = useMemo(() => Object.values(menuData), []);

  // 1. Identify the active category data based on the URL id (categoryId)
  const activeCategoryData = useMemo(() => {
    return menuArray.find((cat) => cat.id === categoryId) || menuArray[0];
  }, [categoryId, menuArray]);

  // Derive the active ID (handles the fallback if the URL is just /menu)
  const activeId = activeCategoryData.id;

  // 2. Sync Logic: Redirect to last category or first category if path is just "/menu"
  useEffect(() => {
    if (!categoryId) {
      const storedCategory = localStorage.getItem("Category");
      const target = menuArray.find((c) => c.id === storedCategory)
        ? storedCategory
        : menuArray[0].id;

      // Navigate to the full path /menu/categoryId
      navigate(`/menu/${target}`, { replace: true });
    } else {
      // Save preference if user navigated to a specific valid categoryId
      localStorage.setItem("Category", categoryId);
    }
  }, [categoryId, navigate, menuArray]);

  // 3. Handle Category Changes via Navigation
  const handleCategoryChange = (newId) => {
    if (newId != categoryId) navigate(`/menu/${newId}`);
  };

  // 4. Effect: Scroll positioning
  useEffect(() => {
    const targetScroll = headerHeight - navbarHeight;

    if (window.scrollY > targetScroll) {
      scrollTo(targetScroll);
    }
  }, [categoryId, headerHeight, navbarHeight, scrollTo]);

  return (
    <>
      <CategoryNav
        activeCategory={activeId}
        handleCategoryChange={handleCategoryChange}
        navbarHeight={navbarHeight}
      />

      <div className="px-6 py-4 md:py-6 max-w-7xl mx-auto min-h-screen flex flex-col transition duration-300">
        <CategoryHeader
          key={activeId}
          activeCategory={activeCategoryData.label}
          ActiveIcon={activeCategoryData.icon}
        />

        <Suspense fallback={<Loading isFullHeight={false} className="mt-12" />}>
          <MenuItems
            items={activeCategoryData.items}
            activeCategory={activeId}
          />
        </Suspense>
      </div>
    </>
  );
}
