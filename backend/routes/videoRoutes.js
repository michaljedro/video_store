import express from 'express';
import mongoose from 'mongoose';
import { Video } from '../schema/videoSchema.js'; // Upewnij się, że rozszerzenie .js jest dodane

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const { title, author, Year } = request.body;
        if (!title || !author || !Year) {
            return response.status(400).send({ message: 'Send all required fields: title, author, Year' });
        }
        const newVideo = { title, author, Year };
        const video = await Video.create(newVideo);
        return response.status(201).send(video);
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const movieID = request.params.id;
        if (!mongoose.Types.ObjectId.isValid(movieID)) {
            return response.status(400).send({ message: 'Invalid ID format' });
        }
        const movie = await Video.findById(movieID);
        if (!movie) {
            return response.status(404).send({ message: 'Movie not found' });
        }
        return response.status(200).json(movie);
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        const { title, author, Year } = request.body;
        if (!title || !author || !Year) {
            return response.status(400).send({ message: 'Send all required fields: title, author, Year' });
        }
        const movieID = request.params.id;
        if (!mongoose.Types.ObjectId.isValid(movieID)) {
            return response.status(400).send({ message: 'Invalid ID format' });
        }
        const updatedVideo = { title, author, Year };
        const video = await Video.findByIdAndUpdate(movieID, updatedVideo, { new: true, runValidators: true });
        if (!video) {
            return response.status(404).send({ message: 'Movie not found' });
        }
        return response.status(200).send({ message: 'Movie updated successfully' });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const movieID = request.params.id;
        if (!mongoose.Types.ObjectId.isValid(movieID)) {
            return response.status(400).send({ message: 'Invalid ID format' });
        }
        const result = await Video.findByIdAndDelete(movieID);
        if (!result) {
            return response.status(404).send({ message: 'Movie not found' });
        }
        return response.status(200).send({ message: 'Movie deleted successfully' });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
});

export default router;
