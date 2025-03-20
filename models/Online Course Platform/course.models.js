import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name:{
        title:{
            type:String, 
            required: true
        }, 
        description:{
            type:String,
            required: true
        }, 
        teacherId:{
            type:mongoose.Schema.Types.ObjectId, 
            ref: "User", 
            required: true
        },
        lesson:[{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Lesson", 
            required: true
        }]
    }
}, {timestamps:true})

export const Course = mongoose.model("Course", courseSchema); 

// Course: title, description, teacherId, lessons[]
//Lesson: title, content, videoUrl, createdAt
//Assignment: courseId, title, description, dueDate, createdAt
//Submission: assignmentId, studentId, submittedAt, score