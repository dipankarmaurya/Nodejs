const mongoose = require("mongoose");
const validator = require("validator");

const taskSchema= new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value == "") {
        throw new Error("you need to add description");
      }
    },
  },
  completed: {
    type: Boolean,
    default: false,
  },
})
const Task = mongoose.model("Task",taskSchema);
module.exports = Task;
