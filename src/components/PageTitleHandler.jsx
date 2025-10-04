import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitleHandler() {
  const location = useLocation();
  useEffect(() => {
    const baseTitle = "BlueWave Café ☕";
    let pageTitle = "";

    switch (location.pathname) {
      case "/":
      case "/menu":
        pageTitle = "Menu";
        break;
      case "/about":
        pageTitle = "About Us";
        break;
      case "/feedback":
        pageTitle = "Feedback";
        break;
      default:
        pageTitle = "Page Not Found";
    }

    document.title = `${baseTitle} | ${pageTitle}`;
  }, [location]);
  return null;
}
