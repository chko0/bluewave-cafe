import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useTheme } from "./context/ThemeContext";

import { setFavicon } from "./utils/utils";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageTitleHandler from "./components/PageTitleHandler";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";

const HomePage = React.lazy(() => import("./pages/HomePage"));
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
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight(); // Run once initially
    window.addEventListener("resize", updateHeaderHeight); // Listen to window resize
    return () => window.removeEventListener("resize", updateHeaderHeight); // Cleanup
  }, []);

  useEffect(() => {
    setFavicon(colors.activeBg, colors.inactiveBg);
  }, [colors]);

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

        <Header ref={headerRef} />

        {/* Suspense loader while lazy pages load */}
        <Suspense fallback={<Loading />}>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/home"
                element={<Navigate to="/" replace={true} />}
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
          </main>

          <Footer />
        </Suspense>

        <div className="flex-shrink-0">
          <ThemeSwitcher />
        </div>
      </div>
    </Router>
  );
}
