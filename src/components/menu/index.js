import React from "react";

export { default as CategoryNav } from "./CategoryNav";
export { default as CategoryHeader } from "./CategoryHeader";
export { default as MenuItem } from "./MenuItem";
export const MenuItems = React.lazy(() => import("./MenuItems"));
