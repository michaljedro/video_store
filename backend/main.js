import express from 'express';
import mongoose from 'mongoose';
import { Video } from './schema/videoSchema.js'; // Dodano rozszerzenie .js

const app = express();
app.use(express.json()); // Middleware do parsowania JSON w ciele zapytań

const mongoDB = 'mongodb+srv://michaljedro:5GkR0IgJZX6aCmtK@video.3upfajg.mongodb.net/databaseName?retryWrites=true&w=majority&appName=video';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('App connected to database');
        app.listen(8080, () => {
            console.log('App is listening to port 8080');
        });
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });

app.get("/", (request, response) => {
    console.log('GET / request received');
    return response.status(200).send("Welcome to mern stack tutorial");
});

app.post('/movie', async (request, response) => {
    try {
        console.log('POST /movie request received');
        const { title, author, Year } = request.body;

        if (!title || !author || !Year) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, Year',
            });
        }

        const newVideo = { title, author, Year };
        const video = await Video.create(newVideo);
        return response.status(201).send(video);
    } catch (error) {
        console.error('Error handling POST /movie:', error.message);
        response.status(500).send({ message: error.message });
    }
});

app.get('/movie/:id', async (request, response) => {
    try {
        const movieID = request.params.id;

        // Sprawdź, czy ID jest prawidłowym ObjectId
        if (!mongoose.Types.ObjectId.isValid(movieID)) {
            return response.status(400).send({ message: 'Invalid ID format' });
        }

        const movie = await Video.findById(movieID);

        if (!movie) {
            return response.status(404).send({ message: 'Movie not found' });
        }

        return response.status(200).json(movie);
    } catch (error) {
        console.error('Error handling GET /movie:', error.message);
        response.status(500).send({ message: error.message });
    }
});

app.put('moive/:id', async (request,response)=> {
    try {

    } catch (error) {
        console.log(error.message)
    }
})
