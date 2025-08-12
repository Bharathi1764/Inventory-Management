// src/App.jsx
import React from "react";
import ProductManager from "./Components/ProductManager";
import "./Components/ProductManager.css";

export default function App() {
  return (
    <div
      style={{ padding: 14, backgroundColor: "#e5e5e5", minHeight: "100vh" }}
    >
      <h1 style={{ color: "#222", textAlign: "center" }}>Inventory Manager</h1>
      <ProductManager />
    </div>
  );
}
