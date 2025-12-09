import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { Suspense } from "react";

import ScrollToTop from "./components/ScrollToTop";
import PageTitleHandler from "./components/PageTitleHandler";
import Loading from "./components/Loading";

import MainLayout from "./layout/MainLayout";

const HomePage = React.lazy(() => import("./pages/HomePage"));
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

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
            <Route path="feedback/success" element={<FeedbackSuccessPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
