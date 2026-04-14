import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    maxlength: [30, "Name cannot be more than 30 characters"],
    trim: true,
  },
  completed: { type: Boolean, default: false },
});

export default mongoose.model("Task", TaskSchema);
