const express = require("express");
const router = express.Router();
const {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/", getTasks);

router.get("/:id", getTask);

router.post("/", createTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
