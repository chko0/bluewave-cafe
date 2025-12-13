import AppLogoSvg from "/src/assets/favicon.svg?raw";

export function setFavicon(colorPrimary, colorAccent) {
  const favicon =
    document.getElementById("dynamic-favicon") ||
    document.createElement("link");
  favicon.id = "dynamic-favicon";
  favicon.rel = "icon";

  // Replace CSS variables inside SVG string with the colors
  let svg = AppLogoSvg.replace(/var\(--color-primary\)/g, colorPrimary).replace(
    /var\(--color-accent\)/g,
    colorAccent
  );

  const svgBlob = new Blob([svg], { type: "image/svg+xml" });
  favicon.href = URL.createObjectURL(svgBlob);

  if (!document.getElementById("dynamic-favicon")) {
    document.head.appendChild(favicon);
  }
}

export function getSpecialtyItems(menu, limit = 4) {
  return Object.values(menu)
    .flatMap((category) => category.items)
    .filter((item) => item.popular || item.seasonal || item.new)
    .slice(0, limit);
}
