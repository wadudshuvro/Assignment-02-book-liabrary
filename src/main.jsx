// src/main.jsx or src/index.js

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Import Tailwind CSS

const container = document.getElementById("root");
const root = createRoot(container); // createRoot instead of ReactDOM.render

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
