import mongoose, { mongo } from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    author:{
       type: mongoose.Schema.Types.ObjectId, 
       ref:"Author", 
       required: true,
    },
    ISBN:{
        type:Number, 
        required: true
    }, 
    publishedDate:{
        type:String,
        required: true
    }, 
    availableCopies:{
        type: Number, 
        default: 0
    }
},
{timestamps:true})

export const Book = mongoose.model("Book", bookSchema)