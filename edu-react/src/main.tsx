import "./global.css";
import "./styles/variable.css";
import "./styles/ui.css";
import "./styles/layout.css"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
