import express from "express";
import mongoose from "mongoose";
import videoRoutes from "./routes/videoRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

const mongoDB =
  "mongodb+srv://michaljedro:5GkR0IgJZX6aCmtK@video.3upfajg.mongodb.net/databaseName?retryWrites=true&w=majority&appName=video";

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to mern stack tutorial");
});

app.use("/movie", videoRoutes);

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("App connected to database");
    app.listen(3000, () => {
      console.log("App is listening on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });
