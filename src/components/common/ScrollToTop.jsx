import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    // Check if we were already on the menu and are just changing categories
    const isInternalMenuNavigation =
      prevPath.startsWith("/menu") && pathname.startsWith("/menu");

    if (!isInternalMenuNavigation) {
      window.scrollTo(0, 0);
    }

    // Update the "previous path" for the next navigation
    setPrevPath(pathname);
  }, [pathname, prevPath]);

  return null;
}
