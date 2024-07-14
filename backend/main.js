import express from 'express';
import mongoose from 'mongoose';

const app = express();

const mongoDB = 'mongodb+srv://michaljedro:5GkR0IgJZX6aCmtK@video.3upfajg.mongodb.net/?retryWrites=true&w=majority&appName=video';

// Poprawiony handler dla endpointu "/"
app.get("/", (request, response) => {
    console.log(request);
    return response.status(200).send("Welcome to mern stack tutorial");
});

// Poprawiona składnia dla połączenia z MongoDB i uruchomienia serwera
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('App connected to database');
        app.listen(8080, () => {
            console.log('App is listening to port 8080');
        });
    })
    .catch((err) => {
        console.log(err);
    });
