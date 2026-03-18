import "./styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App.jsx";
import { ThemeProvider } from "@/context/ThemeContext";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
