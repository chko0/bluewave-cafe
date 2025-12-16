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

export function getOpenStatus(openingHours) {
  const now = new Date();
  const day = now
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();

  const today = openingHours[day];
  if (!today) return { open: false, label: "Closed today" };

  const [openH, openM] = today.open.split(":").map(Number);
  const [closeH, closeM] = today.close.split(":").map(Number);

  const openTime = new Date(now);
  openTime.setHours(openH, openM, 0);

  const closeTime = new Date(now);
  closeTime.setHours(closeH, closeM, 0);

  const isOpen = now >= openTime && now <= closeTime;

  return {
    open: isOpen,
    label: isOpen ? "Now Open" : "Closed",
  };
}
