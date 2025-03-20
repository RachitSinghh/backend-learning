// Event: title, description, location, date, organizerId, attendees[]

import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title:{
    type:String, 
    required: true,
  },
  description:{
    type: String, 
    required: true,
  },
  location:{
    type: location, 
    required: true,
  }, 
  date:{
    type: Date,
    default: Date.now
  }, 
  organizerId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organizer", 
    required: true
  }
},{timestamps:true});

export const Event = mongoose.model("Event", eventSchema)