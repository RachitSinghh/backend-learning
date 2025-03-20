import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }, 
  text:{
    type:String,
    required: true,
  },
  commentCount:{
    type: Number, 
    default:0
  }
})

const postSchema = new mongoose.Schema(
  {
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    }, 
    content:{
      type:String, 
      required: true
    },
    imageurl:{
      type: String, 
      default: ""
    }, 
    likes:{
      type:Number, 
      required:true,
    },
    comment:[commentSchema]
    
  },
  {timestamps:true})

export const Post = mongoose.model("Post", postSchema)