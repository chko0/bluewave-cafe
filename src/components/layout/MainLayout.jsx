import { Suspense, useLayoutEffect, useRef, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";

import { ThemeSwitcher, Loading } from "@/components";
import { Header, Navbar, Footer } from "./";

export default function MainLayout() {
  let location = useLocation();

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
        <Suspense key={location.key} fallback={<Loading />}>
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
