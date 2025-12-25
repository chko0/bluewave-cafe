import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [prevPath, setPrevPath] = useState(pathname);

  useLayoutEffect(() => {
    // Check if we were already on the menu and are just changing categories
    const isInternalMenuNavigation =
      prevPath.startsWith("/menu") && pathname.startsWith("/menu");

    if (!isInternalMenuNavigation) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    // Update the "previous path" for the next navigation
    setPrevPath(pathname);
  }, [pathname]);

  return null;
}
