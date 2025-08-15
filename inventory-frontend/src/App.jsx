import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductManager from "./Components/ProductManager";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "./Components/ProductManager.css";

export default function App() {
  return (
    <Router>
      <div
        style={{ padding: 14, backgroundColor: "#e5e5e5", minHeight: "100vh" }}
      >
        <Routes>
          {/* Default: redirect to login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Signup Page (accessible by both /signup and /register) */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Signup />} />

          {/* Product Manager (main app) */}
          <Route path="/inventory" element={<ProductManager />} />
        </Routes>
      </div>
    </Router>
  );
}
