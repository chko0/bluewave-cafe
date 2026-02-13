import { Suspense, useLayoutEffect, useRef, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Header, Navbar, Footer } from "./";

import { ThemeSwitcher, Loading } from "@/components";
import { NAVIGATION } from "@/config";

export default function MainLayout() {
  const location = useLocation();

  // Find which configuration object matches the current URL
  const activeRoute = NAVIGATION.find((route) =>
    route.match.test(location.pathname),
  );

  // Fallback to pathname if no match found (like 404 page)
  const navigationKey = activeRoute ? activeRoute.path : location.pathname;

  const headerRef = useRef(null);
  const navbarRef = useRef(null);

  const [offsets, setOffsets] = useState({ headerHeight: 0, navbarHeight: 0 });

  useLayoutEffect(() => {
    const updateHeights = () => {
      setOffsets({
        headerHeight: headerRef.current?.offsetHeight || 0,
        navbarHeight: navbarRef.current?.offsetHeight || 0,
      });
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  const { headerHeight, navbarHeight } = offsets;

  return (
    <div
      className="flex flex-col min-h-screen bg-fixed bg-[length:100%_100vh]
        bg-gradient-to-b from-brand-inactive-bg via-brand-light-bg to-brand-light-bg"
    >
      <Navbar ref={navbarRef} />
      <Header ref={headerRef} />

      <main className="flex-1 min-h-screen pb-16">
        <Suspense key={navigationKey} fallback={<Loading />}>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Outlet context={{ headerHeight, navbarHeight }} />
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />

      <div className="flex-shrink-0">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
