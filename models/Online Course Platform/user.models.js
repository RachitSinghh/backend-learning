import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        name:{
            type: String, 
            required: true
        }, 
        email:{
            type:String, 
            required: true,
            unique: true
        },
        password:{
            type:String,
            required:true, 
            unique:true,
        },
        role:{
            type:String,
            enum: ["student", "teacher"],
            required: true
        },
        enrolledCourses:[]
    }, 
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);