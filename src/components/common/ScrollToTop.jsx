import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  useLayoutEffect(() => {
    if (prevPathRef.current === pathname) return;

    const prevPath = prevPathRef.current;

    // Check if we were already on the menu and are just changing categories
    const isInternalMenuNavigation =
      prevPath.startsWith("/menu") && pathname.startsWith("/menu");

    if (!isInternalMenuNavigation) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    // Update the "previous path" for the next navigation
    prevPathRef.current = pathname;
  }, [pathname]);

  return null;
}
