import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import FeedbackPage from "./pages/FeedbackPage";
import NotFoundPage from "./pages/NotFoundPage";
import FeedbackSuccessPage from "./pages/FeedbackSuccessPage";

export default function App() {
  useEffect(() => {
    const baseTitle = "BlueWave Café ☕";
    let pageTitle = "";

    switch (location.pathname) {
      case "/":
      case "/menu":
        pageTitle = "Menu";
        break;
      case "/about":
        pageTitle = "About Us";
        break;
      case "/feedback":
        pageTitle = "Feedback";
        break;
      default:
        pageTitle = "Page Not Found";
    }

    document.title = `${baseTitle} | ${pageTitle}`;
  }, [location]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-50">
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<MenuPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/feedback/success" element={<FeedbackSuccessPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
