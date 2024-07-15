import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    Year: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true, // Dodano timestamps
});

export const Video = mongoose.model('Video', videoSchema);
