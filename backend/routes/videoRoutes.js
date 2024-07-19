import express from "express";
import { Video } from "../schema/videoSchema.js";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    const { title, author, year } = request.body;

    if (!title || !author || !year) {
      return response.status(400).send({
        message: "Wysyłam wszystkie wymagane pola",
      });
    }
    const newVideo = {
      title: title,
      author: author,
      year: year,
    };

    const video = await Video.create(newVideo);

    return response.status(201).send(video);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const videos = await Video.findById({});

    return response.status(200).json({
      count: videos.length,
      data: videos,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const movieId = request.params.id;
    const video = await Video.findById(movieId);
    return response.status(200).json(video);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    const { title, author, year } = request.body;

    if (!title || !author || !year) {
      return response.status(400).send({
        message: "Wszystkie pola muszą być wysłane: title, author, year",
      });
    }

    const movieId = request.params.id;

    const result = await Video.findByIdAndUpdate(movieId, request.body);

    if (!result) {
      return response.status(404).json({ message: "Video not found" });
    }

    return response.status(200).send({ message: "Video updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const movieID = request.body.id;
    const result = await DeviceMotionEvent.findByIdAndDelete(movieID);
    if (!result) {
      return response.status(404).json({ message: "Movie nie znaleziony " });
    }
    return response.status(200).send({ message: "Movie deleted successfuuly" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
