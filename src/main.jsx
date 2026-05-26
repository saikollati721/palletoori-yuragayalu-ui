import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";

const container = document.getElementById("root");
const tree = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// Static HTML from the prerender step (scripts/prerender.mjs) — hydrate it.
// Otherwise (dev / fresh load), render from scratch.
if (document.documentElement.dataset.prerendered === "true") {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
