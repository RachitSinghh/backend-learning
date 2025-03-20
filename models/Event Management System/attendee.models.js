import mongoose from "mongoose";

const attendeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, 'Please enter a valid email address'],
      lowercase: true,
    },
    registeredEvents:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event", 
      required: true
    }]
  },
  { timestamps: true }
);

export const Attendee = mongoose.model("Attendee", attendeeSchema);

// ☐ Attendee: name, email, registeredEvents[]
