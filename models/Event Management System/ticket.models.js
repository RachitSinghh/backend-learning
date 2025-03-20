// Ticket: eventId, attendeeId, price, seatNumber

import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  eventId:{
    type:mongoose.Schema.Types.ObjectId, 
    ref: "Event", 
    required: true,
  },
  attendeeId:{
    type:mongoose.Schema.Types.ObjectId, 
    ref: "Attendee", 
    required: true,
  },
  price:{
    type:Number, 
    default: 0
  },
  seatNumber:{
    type:Number, 
    default: 0
  }
},{timestamps:true});

export const Ticket = mongoose.model("Ticket", ticketSchema); 