import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    title:{
      type:mongoose.Schema.Types.ObjectId, 
      ref: "Lesson",
      required: true, 
    },
    description:{
      type: String, 
      required:true,
    },
    dueDate:{
      type:Date,
    },
    createdAt:{
      type:Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export const Assignment = mongoose.model("Assignment", assignmentSchema);

//Assignment: courseId, title, description, dueDate, createdAt
