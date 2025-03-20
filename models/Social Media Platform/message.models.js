import mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
    {
        senderId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", 
            required:true
        },
        receiverId:{
            type: mongoose.Schema.Types.ObjectId, 
            ref:"User", 
            required: true
        },
        content:{
            type:String, 
            required: true
        }
    },
    {timestamps:true})

export const Model = mongoose.model("Model", modelSchema)

// Message: senderId, receiverId, content, createdAt