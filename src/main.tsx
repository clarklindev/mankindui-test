import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeContextProvider } from "@mankindui/core/context";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import MainLayout from "./MainLayout.tsx";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [{ index: true, Component: App }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </StrictMode>
);
