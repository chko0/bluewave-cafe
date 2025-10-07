import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useTheme } from "./context/ThemeContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageTitleHandler from "./components/PageTitleHandler";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";

const MenuPage = React.lazy(() => import("./pages/MenuPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const FeedbackPage = React.lazy(() => import("./pages/FeedbackPage"));
const FeedbackSuccessPage = React.lazy(() =>
  import("./pages/FeedbackSuccessPage")
);
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  const { colors } = useTheme();

  localStorage.removeItem("Category");

  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Measure the header height after it mounts/renders
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <PageTitleHandler />

      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${colors.inactiveBg}, ${colors.lightBg}, ${colors.lightBg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100vh",
        }}
      >
        <Navbar scrollThreshold={headerHeight - 62} />

        <div ref={headerRef}>
          <Header />
        </div>

        {/* Suspense loader while lazy pages load */}
        <Suspense fallback={<Loading isFullHeight={true} />}>
          <div className="flex-1">
            <Routes>
              <Route
                path="/"
                element={<MenuPage headerOffset={headerHeight} />}
              />
              <Route
                path="/menu"
                element={<MenuPage headerOffset={headerHeight} />}
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route
                path="/feedback/success"
                element={<FeedbackSuccessPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

          <Footer />
        </Suspense>

        <div className="flex-shrink-0">
          <ThemeSwitcher />
        </div>
      </div>
    </Router>
  );
}
