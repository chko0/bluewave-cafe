import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import config from "../config.json";

export default function PageTitleHandler() {
  const location = useLocation();
  useEffect(() => {
    const baseTitle = config.site.tabTitle;
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
