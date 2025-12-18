import { useLocation } from "react-router-dom";
import { SITE, NAVIGATION } from "/src/config";

export default function PageTitleHandler() {
  const { pathname } = useLocation();

  const route = NAVIGATION.find((r) => r.match.test(pathname)) ?? null;

  const pageTitle = route?.label
    ? `${route.label} | ${SITE.tabTitle}`
    : SITE.tabTitle;

  const pageDescription = route?.description ?? SITE.description;

  const canonicalUrl =
    typeof window !== "undefined" ? `${SITE.url}${pathname}` : "";

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
    </>
  );
}
