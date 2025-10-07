import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Habit Tracker Pro</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Dashboard</li>
          <li>Stats</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
