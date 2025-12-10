import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import config from "/src/config";

export default function PageTitleHandler() {
  const location = useLocation();

  const [currentFullTitle, setCurrentFullTitle] = useState(
    config.site.tabTitle
  );
  const [currentDescription, setCurrentDescription] = useState(
    config.site.description
  );

  useEffect(() => {
    const baseTitle = config.site.tabTitle;

    // 1. Find matching navigation item
    const navItem = config.navigation.find(
      (item) => item.path === location.pathname
    );

    // 2. Calculate final title and description
    const pageLabel = navItem?.label || "Page Not Found";
    const pageDescription = navItem?.description || config.site.description;

    const fullTitle = `${pageLabel} | ${baseTitle}`;

    // 3. Update state, which triggers a re-render of Helmet
    setCurrentFullTitle(fullTitle);
    setCurrentDescription(pageDescription);
  }, [location.pathname]);

  return (
    <>
      {/* Basic SEO Tags */}
      <title>{currentFullTitle}</title>
      <meta
        name="description"
        content={currentDescription}
        key={currentDescription}
      />
      <link rel="canonical" href={window.location.href} />
    </>
  );
}
