import Task from "../models/Tasks.js";
import asyncWrapper from "../middleware/async.js";

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findById({ _id: req.params.id });
  if (!task) {
    return res
      .status(404)
      .json({ error: `Task with ID ${req.params.id} not found` });
  }
  res.status(200).json(task);
});

const deleteTask = asyncWrapper(async (req, res) => {
  const task = await Task.findByIdAndDelete({ _id: req.params.id });

  if (!task) {
    return res
      .status(404)
      .json({ error: `Task with ID ${req.params.id} not found` });
  }
  res.status(200).json(task);
});

const updateTask = asyncWrapper(async (req, res) => {
  const task = await Task.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res
      .status(404)
      .json({ error: `Task with ID ${req.params.id} not found` });
  }
  res.status(200).json(task);
});

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
