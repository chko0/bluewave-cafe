import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { setFavicon } from "../utils/utils";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeSwitcher from "../components/ThemeSwitcher";

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
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          ${colors.inactiveBg},
          ${colors.lightBg},
          ${colors.lightBg}
        )`,
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100vh",
      }}
    >
      <Navbar ref={navbarRef} />
      <Header ref={headerRef} />

      <main className="flex-1">
        <Outlet
          context={{
            headerHeight,
            navbarHeight,
          }}
        />
      </main>

      <Footer />

      <div className="flex-shrink-0">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
