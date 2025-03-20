import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    //Lesson: title, content, videoUrl, createdAt
    title: {
      type: String,
      required: true,
    },
    content:{
      type:String,
      required:true, 
    },
    videoUrl:{
      type:String, 
      default: "",
      required: true
    }, 
    createdAt:{
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export const Lesson = mongoose.model("Lesson", lessonSchema);
