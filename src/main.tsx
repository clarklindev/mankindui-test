import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeContextProvider } from "@mankindui/core/context";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import MainLayout from "./layouts/MainLayout.tsx";
import FormExample from "./examples/Form";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      { index: true, Component: App },
      { path: "/form", Component: FormExample },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </StrictMode>
);
