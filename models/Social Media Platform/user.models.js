import mongoose from "mongoose";

const profilePictureSchema = new mongoose.Schema({
  url:{
    type: String, 
    default: ""
  }, 
  publicId: {
    default: ""
  },
  metadata:{
    contentType: String, 
    size: Number,
  }
})

const userSchema = new mongoose.Schema(
  {
    name:{
      type: String, 
      required: true
    }, 
    email:{
      type:String, 
      required: true, 
      unique: true, 
      match: /.+\@.+\..+/
    }, 
    username:{
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String, 
      required: true, 
    }, 
    bio:{
      type: String,
    },
    profilePicture:[profilePictureSchema], 
    followers:{
      type: Number,
      default: 0 
    },
    following: {
      type: Number, 
      default: 0
    }
  }, 
  {timestamps: true})

export const User = mongoose.model("User", userSchema); 