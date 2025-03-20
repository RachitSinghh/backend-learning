import mongoose from "mongoose";

const borrowRecordSchema = new mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    borrowDate: {
        type: Date,
        default: Date.now
    },
    dueDate:{
        type: Date,
        default: Date.now
    },
    returnDate: {
      type: Date,
    },
    status:{
        type: String, 
        enum: ["BORROWED", "RETURN PENDING", "RETURNED"]
    }
  },
  { timestamps: true }
);

export const Borrow = mongoose.model("Borrow", borrowRecordSchema);
