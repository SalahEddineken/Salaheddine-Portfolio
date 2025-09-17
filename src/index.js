import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("index.js loaded");

const rootEl = document.getElementById("root");
if (!rootEl) {
  // show visible error if #root missing
  const msg = "Root element (#root) not found in document.";
  console.error(msg);
  document.body.innerHTML = `<div style="padding:20px;background:#ff4d4f;color:white">${msg}</div>`;
} else {
  try {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
      React.createElement(
        React.StrictMode,
        null,
        React.createElement(App, null)
      )
    );
    console.log("Render succeeded");
  } catch (err) {
    console.error("Render error:", err);
    const el = document.createElement("div");
    el.style.position = "fixed";
    el.style.top = 0;
    el.style.left = 0;
    el.style.right = 0;
    el.style.background = "#b00020";
    el.style.color = "white";
    el.style.padding = "8px";
    el.style.zIndex = 99999;
    el.textContent = `Render error: ${err.message || err}`;
    document.body.appendChild(el);
  }
}
