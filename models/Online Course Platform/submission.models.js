import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  assignmentId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Assignment",
    required: true, 
  },
  studentId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true, 
  },
  submittedAt:{
    type: Date,
    default: Date.now
  },
  score:{
    type: Number,
    required: true
  }
}, {timestamps:true})

export const Submission = mongoose.model("Submission", submissionSchema); 

//Submission: assignmentId, studentId, submittedAt, score
