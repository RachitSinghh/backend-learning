// Organizer: name, email, contactNumber

import mongoose from "mongoose";

const organizerSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
  },
  email:{
    type:String, 
    required: true,
    unique: true,
  },
  contactNumber:{
    type: Number, 
    required: true, 
    unique: true
  }
},{timestamps:true})

export const Organizer = mongoose.model("Organizer", organizerSchema);