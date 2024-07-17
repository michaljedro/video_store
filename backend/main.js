import express from 'express';
import mongoose from 'mongoose';
import videoRoutes from './routes/videoRoutes.js'; // Upewnij się, że rozszerzenie .js jest dodane
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())
app.use(cors({
    origin: 'https://localhost:3000', // Zezwalaj tylko na żądania z tej domeny
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Zezwalaj na określone metody
    allowedHeaders: ['Content-Type', 'Authorization'], // Zezwalaj na określone nagłówki
    credentials: true, // Zezwalaj na wysyłanie uwierzytelnionych danych (np. cookies)
}));

const mongoDB = 'mongodb+srv://michaljedro:5GkR0IgJZX6aCmtK@video.3upfajg.mongodb.net/databaseName?retryWrites=true&w=majority&appName=video';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('App connected to database');
        app.listen(8080, () => {
            console.log('App is listening on port 8080');
        });
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });

app.use('/movie', videoRoutes);

app.get("/", (request, response) => {
    console.log('GET / request received');
    return response.status(200).send("Welcome to mern stack tutorial");
});
