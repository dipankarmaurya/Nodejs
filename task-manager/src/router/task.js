const express = require("express");
const Task = require("../model/task");
const router = express.Router();

// creating task
router.post("/createtask", async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(404).send(e);
  }
});

// getting all task
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(501).send(e);
  }
});
router.get("/tasks/done", async (req, res) => {
  try {
    const tasks = await Task.find({});
    const completedTask = tasks.filter((task) => {
      return task.completed === true;
    });
    res.send(completedTask);
  } catch (e) {
    res.status(501).send(e);
  }
});

//getting  task by id
router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(501).send(e);
  }
});
router.patch("/task/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdate = ["description", "completed"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdate.includes(update);
  });
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Updates !!!" });
  }
  try {
    const task = await Task.findById(req.params.id);
    console.log(task);
    updates.forEach((update) => {
      task[update] = req.body[update];
    });
    await task.save();
    if (!task) {
      return res.status(404).send({ error: "task not found" });
    }
    res.send(task);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
