import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SITE, NAVIGATION } from "/src/config";

export default function PageTitleHandler() {
  const location = useLocation();

  const [currentFullTitle, setCurrentFullTitle] = useState(SITE.tabTitle);
  const [currentDescription, setCurrentDescription] = useState(
    SITE.description
  );

  useEffect(() => {
    const baseTitle = SITE.tabTitle;

    // 1. Find matching navigation item
    const navItem = NAVIGATION.find((item) => item.path === location.pathname);

    // 2. Calculate final title and description
    const pageLabel = navItem?.label || "Page Not Found";
    const pageDescription = navItem?.description || SITE.description;

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
