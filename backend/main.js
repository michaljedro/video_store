const http = require("http");
const url = require("url");
const mongoose = require("mongoose");
const videoRoutes = require("./routes/videoRoutes.js");
const { Video } = require("./schema/videoSchema.js");
const cors = require("cors");

const app = http.createServer((req, res) => {
  // Użycie CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Parsowanie URL
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const path = parsedUrl.pathname;

  // Trasy
  if (path === "/" && method === "GET") {
    console.log(req);
    res.writeHead(234, { "Content-Type": "text/plain" });
    return res.end("Welcome to mern stack tutorial");
  }

  if (path.startsWith("/movie")) {
    // Przekazywanie do videoRoutes
    videoRoutes(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Route not found" }));
  }
});

const mongoDB =
  "mongodb+srv://<client>:<password>@video.3upfajg.mongodb.net/databaseName?retryWrites=true&w=majority&appName=video";

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
