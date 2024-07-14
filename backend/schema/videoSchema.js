import mongoose from 'mongoose';
const videoSchema = mongoose.Schema(
    {
        title: {
            type:String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear:{
            type: Number,
            required: true,
        }
    }
)
const Video = mongoose.model("Cat", {name:String})