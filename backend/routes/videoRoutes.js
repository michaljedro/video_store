const http = require("http");
const url = require("url");
const { Video } = require("../schema/videoSchema.js");

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const path = parsedUrl.pathname;
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    try {
      if (path === "/" && method === "POST") {
        const { title, author, year } = JSON.parse(body);
        if (!title || !author || !year) {
          res.writeHead(400, { "Content-Type": "application/json" });
          return res.end(
            JSON.stringify({ message: "Wysyłam wszystkie wymagane pola" })
          );
        }
        const newVideo = { title, author, year };
        const video = await Video.create(newVideo);
        res.writeHead(201, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(video));
      }

      if (path === "/" && method === "GET") {
        const videos = await Video.find({});
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ count: videos.length, data: videos }));
      }

      const idMatch = path.match(/^\/([a-zA-Z0-9]+)$/);
      if (idMatch && method === "GET") {
        const movieId = idMatch[1];
        const video = await Video.findById(movieId);
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(video));
      }

      if (idMatch && method === "PUT") {
        const { title, author, year } = JSON.parse(body);
        if (!title || !author || !year) {
          res.writeHead(400, { "Content-Type": "application/json" });
          return res.end(
            JSON.stringify({
              message: "Wszystkie pola muszą być wysłane: title, author, year",
            })
          );
        }
        const movieId = idMatch[1];
        const result = await Video.findByIdAndUpdate(movieId, {
          title,
          author,
          year,
        });
        if (!result) {
          res.writeHead(404, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ message: "Video not found" }));
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ message: "Video updated successfully" })
        );
      }

      if (idMatch && method === "DELETE") {
        const movieId = idMatch[1];
        const result = await Video.findByIdAndDelete(movieId);
        if (!result) {
          res.writeHead(404, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ message: "Movie nie znaleziony " }));
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ message: "Movie deleted successfully" })
        );
      }

      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Route not found" }));
    } catch (error) {
      console.log(error.message);
      res.writeHead(500, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: error.message }));
    }
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
