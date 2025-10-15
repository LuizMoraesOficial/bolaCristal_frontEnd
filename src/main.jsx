import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Detecta automaticamente o caminho base
const base =
  window.location.hostname.includes("github.io")
    ? "/bolaCristal_frontEnd"
    : "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
