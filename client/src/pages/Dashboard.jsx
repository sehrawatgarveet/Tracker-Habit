import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  // Initial habits
  const [habits, setHabits] = useState([
    { name: "Drink Water", streak: 5 },
    { name: "Exercise", streak: 3 },
    { name: "Read Books", streak: 2 },
  ]);

  const [newHabit, setNewHabit] = useState("");

  // Add a new habit
  const handleAddHabit = () => {
    if (newHabit.trim() === "") return;
    setHabits([...habits, { name: newHabit, streak: 0 }]);
    setNewHabit("");
  };

  // Increment streak
  const incrementStreak = (index) => {
    const updated = [...habits];
    updated[index].streak += 1;
    setHabits(updated);
  };

  // Delete habit
  const deleteHabit = (index) => {
    const updated = habits.filter((_, i) => i !== index);
    setHabits(updated);
  };

  return (
    <div className="dashboard-container">
      <h2>Your Habits</h2>

      {/* Add habit section */}
      <div className="add-habit-container">
        <input
          type="text"
          placeholder="Add a new habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button onClick={handleAddHabit} className="add-btn">
          Add Habit
        </button>
      </div>

      {/* Habits list */}
      <div className="habits-grid">
        {habits.map((habit, index) => (
          <div className="habit-card" key={index}>
            <h3>{habit.name}</h3>
            <p>Streak: {habit.streak} {habit.streak === 1 ? "day" : "days"}</p>
            <div className="habit-buttons">
              <button
                className="increment-btn"
                onClick={() => incrementStreak(index)}
              >
                +1 Streak
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteHabit(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
