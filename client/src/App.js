import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <nav className="navbar">
          <h1 className="logo">Habit Tracker Pro</h1>
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Dashboard
            </NavLink>
            <NavLink to="/stats" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Stats
            </NavLink>
          </div>
        </nav>

        {/* Page Content */}
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="footer">
          © 2025 Habit Tracker Pro. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
