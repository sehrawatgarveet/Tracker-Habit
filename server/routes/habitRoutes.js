const express = require("express");
const router = express.Router();
const {
  getHabits,
  addHabit,
  updateHabit,
  deleteHabit,
} = require("../controllers/habitController");

router.get("/", getHabits);
router.post("/", addHabit);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);

module.exports = router;
