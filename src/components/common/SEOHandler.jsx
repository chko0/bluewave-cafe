import { useLocation } from "react-router-dom";
import { SITE, NAVIGATION } from "@/config";

export default function SEOHandler() {
  const { pathname } = useLocation();

  // Find the current route based on the config regex
  const route = NAVIGATION.find((r) => r.match.test(pathname)) ?? null;

  // Dynamic values with global fallbacks
  const pageTitle = route?.label
    ? `${route.label} | ${SITE.tabTitle}`
    : SITE.tabTitle;

  const pageDescription = route?.description ?? SITE.description;

  // Construct absolute URLs for LinkedIn/SEO crawlers
  const canonicalUrl = `${SITE.url}${pathname}`;
  const ogImageUrl = `${SITE.url}/site-thumbnail.webp`;

  return (
    <>
      {/* Standard SEO */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
    </>
  );
}
