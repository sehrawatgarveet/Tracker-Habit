import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Habit Tracker Pro</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Dashboard</li>
        <li>Stats</li>
      </ul>
    </nav>
  );
};

export default Navbar;
