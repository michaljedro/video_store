import React, { useEffect, useState } from "react";
import BackBtn from "../components/BackBtn";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loading";

export const Edit: React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/movie/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setYear(response.data.year);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  const handleEditMovie = () => {
    const data = {
      title,
      author,
      year,
    };
    setLoading(true);
    axios
      .put(`http://localhost:3000/movie/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Edit Movie</h1>
      <button onClick={() => navigate("/")}>Powrót</button>
      {loading ? <Loader /> : ""}
      <div>
        <div>
          <h3>Title</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <h3>Author</h3>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <h3>Publish Year</h3>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button onClick={handleEditMovie}>Zapisz</button>
      </div>
    </div>
  );
};
