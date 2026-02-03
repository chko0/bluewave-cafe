import { lazy } from "react";

export const HomePage = lazy(() => import("./HomePage"));
export const MenuPage = lazy(() => import("./MenuPage"));
export const AboutPage = lazy(() => import("./AboutPage"));
export const FeedbackPage = lazy(() => import("./FeedbackPage"));
export const FeedbackSuccessPage = lazy(() => import("./FeedbackSuccessPage"));
export const NotFoundPage = lazy(() => import("./NotFoundPage"));
