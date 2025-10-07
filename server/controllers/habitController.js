const Habit = require("../models/Habit");

// GET /api/habits
const getHabits = async (req, res) => {
  const habits = await Habit.find();
  res.json(habits);
};

// POST /api/habits
const addHabit = async (req, res) => {
  const { name } = req.body;
  const habit = new Habit({ name });
  await habit.save();
  res.status(201).json(habit);
};

// PUT /api/habits/:id
const updateHabit = async (req, res) => {
  const { id } = req.params;
  const { streak } = req.body;
  const habit = await Habit.findByIdAndUpdate(id, { streak }, { new: true });
  res.json(habit);
};

// DELETE /api/habits/:id
const deleteHabit = async (req, res) => {
  const { id } = req.params;
  await Habit.findByIdAndDelete(id);
  res.json({ message: "Habit deleted" });
};

module.exports = { getHabits, addHabit, updateHabit, deleteHabit };
