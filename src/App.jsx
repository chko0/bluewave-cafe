import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

import { MainLayout, SEOHandler, ScrollToTop, Loading } from "@/components";

import {
  HomePage,
  MenuPage,
  AboutPage,
  FeedbackPage,
  FeedbackSuccessPage,
  NotFoundPage,
} from "@/pages";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <SEOHandler />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="home" element={<Navigate to="/" replace />} />
              <Route path="menu/:categoryId?" element={<MenuPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="feedback" element={<FeedbackPage />} />
              <Route
                path="feedback/success"
                element={<FeedbackSuccessPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}
