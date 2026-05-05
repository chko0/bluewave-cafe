import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE, NAVIGATION } from "@/config";
import { useEffect } from "react";

export default function SEOHandler() {
  const { pathname } = useLocation();

  // Ensuring we don't have double slashes if SITE.url ends in /
  const baseUrl = SITE.url.replace(/\/$/, "");

  // Find the current route based on the config regex
  const route = NAVIGATION.find((r) => r.match.test(pathname)) ?? null;

  // Dynamic values with global fallbacks
  const pageTitle = route?.label
    ? `${route.label} | ${SITE.tabTitle}`
    : SITE.tabTitle;

  const pageDescription = route?.description ?? SITE.description;

  // Construct absolute URLs for LinkedIn/SEO crawlers
  const canonicalUrl = `${baseUrl}${pathname}`;
  const ogImageUrl = `${baseUrl}/site-thumbnail.webp`;

  useEffect(() => {
    // If your navigation is local/static, this can fire on mount
    const timeout = setTimeout(() => {
      document.dispatchEvent(new Event("custom-render-trigger"));
    }, 100); // Small buffer for Helmet to inject tags into the <head>

    return () => clearTimeout(timeout);
  }, [pathname]); // Fire every time the route changes during prerendering

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{pageTitle}</title>
      {!route && <meta name="robots" content="noindex" />}

      <meta name="description" content={pageDescription} />
      <meta name="author" content="Chadi Kouzayha" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
}
