import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Movie {
  _id: string;
  title: string;
  author: string;
  year: number;
}

const Show: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/movie/${id}`)
      .then((response) => {
        console.log("API Response:", response.data); // Logowanie odpowiedzi API
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the movie data!", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <div>
        <span>ID: </span>
        <span>{movie._id}</span>
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{movie.author}</span>
      </div>
      <div>
        <span>Year: </span>
        <span>{movie.year}</span>
      </div>
    </div>
  );
};

export default Show;
