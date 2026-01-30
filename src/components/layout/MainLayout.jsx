import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { setFavicon } from "../../utils/utils";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import Loading from "../ui/Loading";

export default function MainLayout() {
  const { colors } = useTheme();

  const headerRef = useRef(null);
  const navbarRef = useRef(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    function updateHeights() {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    }

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  useEffect(() => {
    setFavicon(colors.activeBg, colors.inactiveBg);
  }, [colors]);

  return (
    <div
      className="flex flex-col min-h-screen bg-fixed bg-[length:100%_100vh]
        bg-gradient-to-b from-brand-inactive-bg via-brand-light-bg to-brand-light-bg"
    >
      <Navbar ref={navbarRef} />
      <Header ref={headerRef} />

      <main className="flex-1 min-h-screen pb-16">
        <Suspense fallback={<Loading />}>
          <Outlet
            context={{
              headerHeight,
              navbarHeight,
            }}
          />
        </Suspense>
      </main>

      <Footer />

      <div className="flex-shrink-0">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
