import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    course:{
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }
})

export const User = mongoose.model('User', userSchema);
