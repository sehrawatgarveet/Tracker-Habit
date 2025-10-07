const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  streak: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Habit", habitSchema);
