import React, { useState } from "react";
import API from "../api";

const AddHabitForm = ({ onAdd }) => {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!habitName) return;
    const res = await API.post("/habits", { name: habitName });
    onAdd(res.data);
    setHabitName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Add a new habit..."
        className="flex-1 border p-2 rounded mr-2"
      />
      <button className="bg-green-500 text-white px-4 rounded hover:bg-green-600">
        Add
      </button>
    </form>
  );
};

export default AddHabitForm;
