import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [habitName, setHabitName] = useState("");

  const addHabit = () => {
    if (!habitName) return alert("Enter a habit name!");
    alert(`Habit "${habitName}" added!`);
    setHabitName("");
    setShowModal(false);
    // Later: connect with backend API
  };

  return (
    <div className="home-container">
      <div className="welcome-box">
        <h1>Welcome to Habit Tracker Pro</h1>
        <p>Track your habits, improve your streaks, and stay productive!</p>

        <div className="cta-buttons">
          <button className="primary-btn" onClick={() => window.location.href="/dashboard"}>
            Go to Dashboard
          </button>
          <button className="secondary-btn" onClick={() => setShowModal(true)}>
            Add Habit
          </button>
        </div>

        <p className="tip">💡 Tip: Start small and track consistently for best results!</p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add a New Habit</h3>
            <input
              type="text"
              placeholder="Enter habit name"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
            />
            <div className="modal-buttons">
              <button className="primary-btn" onClick={addHabit}>Add</button>
              <button className="secondary-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
