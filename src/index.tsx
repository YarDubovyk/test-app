import React from "react";
import ReactDOM from "react-dom";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

hydrateRoot(
  document.getElementById("app"),
  <React.StrictMode suppressHydrationWarning={true}>
    <App />
  </React.StrictMode>
);
