import { useLocation } from "react-router-dom";
import config from "../config.json";
import { Helmet } from "react-helmet-async";

export default function PageTitleHandler() {
  const location = useLocation();
  const baseTitle = config.site.tabTitle;

  // 1. Find matching navigation item (synchronous logic)
  const navItem = config.navigation.find(
    (item) => item.path === location.pathname
  );

  // 2. Calculate final title and description
  const pageLabel = navItem?.label || "Page Not Found";
  const pageDescription = navItem?.description || config.site.description;

  const fullTitle = `${baseTitle} | ${pageLabel}`;

  return (
    <Helmet>
      {/* Basic SEO Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Open Graph / Social Sharing Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
