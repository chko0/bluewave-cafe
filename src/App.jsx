import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React, { Suspense, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageTitleHandler from "./components/PageTitleHandler";
import Loading from "./components/Loading";

const MenuPage = React.lazy(() => import("./pages/MenuPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const FeedbackPage = React.lazy(() => import("./pages/FeedbackPage"));
const FeedbackSuccessPage = React.lazy(() =>
  import("./pages/FeedbackSuccessPage")
);
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageTitleHandler />

      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-50">
        <Header />

        {/* Suspense loader while lazy pages load */}
        <Suspense fallback={<Loading />}>
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<MenuPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route
                path="/feedback/success"
                element={<FeedbackSuccessPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}
