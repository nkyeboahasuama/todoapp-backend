const Task = require("../models/taskModel");

const getTasks = async (req, res) => {
  const tasks = await Task.find({}).sort({ createdAt: -1 });
  if (!tasks) return res.json({ msg: "No tasks yet" });
  res.status(200).json(tasks);
};

const getTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) return res.status(404).json({ error: "No such task" });
  res.status(200).json(Task);
};

const createTask = async (req, res) => {
  const { title, completed } = req.body;

  try {
    const task = await Task.create({ title, completed });
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ error: "Cannot create task now" });
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete({ _id: id });
  if (!task) return res.status(404).json({ error: "No such task" });
  res.status(200).json(task);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  // const { title } = req.body;
  const task = await Task.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );
  if (!task) return res.status(404).json({ error: "No such task" });
  res.status(200).json(task);
};
module.exports = { createTask, getTask, getTasks, deleteTask, updateTask };
