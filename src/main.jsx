import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";


// Inicialización del modo oscuro/claro
const storedTheme = localStorage.getItem("flowbite-theme-mode");

// Si nunca se ha guardado un tema, forzamos "light" por defecto
if (!storedTheme) {
  localStorage.setItem("flowbite-theme-mode", "light");
  document.documentElement.classList.remove("dark");
} else if (storedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Sincronización con los cambios del DarkThemeToggle
window.addEventListener("storage", (event) => {
  if (event.key === "flowbite-theme-mode") {
    if (event.newValue === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
});


ReactDOM.createRoot(document.getElementById("root")).render(


  <BrowserRouter>
    <App />
  </BrowserRouter>
);
