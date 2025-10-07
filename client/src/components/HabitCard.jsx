import React from "react";

const HabitCard = ({ habit, onIncrement, onDelete }) => {
  return (
    <div className="habit-card">
      <h3>{habit.name}</h3>
      <p>Streak: {habit.streak} days</p>
      <div className="buttons">
        <button onClick={() => onIncrement(habit._id)}>+1</button>
        <button onClick={() => onDelete(habit._id)}>Delete</button>
      </div>
    </div>
  );
};

export default HabitCard;
