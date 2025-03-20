import mongoose from "mongoose";

const borrowedBooksSchema = new mongoose.Schema({
    bookId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Book",
        required:true
    },
    numberOfBooksBorrowed:{
        type:Number, 
        default: 1,
        min: [1, "Must be atleast 1 book borrowed"]
    }
})

const memberSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        required:true,
        unique: true,
        match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    membershipDate:{
        type:Date, 
        default: Date.now,
        required: true   
    },
    borrowedBooks:[borrowedBooksSchema]
}, {timestamps:true})

memberSchema.index({ email: 1 });

export const Member = mongoose.model("Member", memberSchema)


// Member: name, email, membershipDate, borrowedBooks[]