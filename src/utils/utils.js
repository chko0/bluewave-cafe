import AppLogoSvg from "../assets/favicon.svg?raw";

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
