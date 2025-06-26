import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeContextProvider } from "@mankindui/core/context";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
