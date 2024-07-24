import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loading";
import axios from "axios";

export const Create: React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      year,
    };
    setLoading(true);
    axios
      .post(`http://localhost:3000/movie`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happended. Please Chack console");
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={() => navigate("/")}>Powrót</button>
      <h1>Create Page</h1>
      <div>
        {loading ? <Loader /> : ""}
        <div>
          <div>
            <h1>Title</h1>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=""
            />
          </div>
          <div>
            <h1>Author</h1>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className=""
            />
          </div>
          <div>
            <h1>Year</h1>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className=""
            />
          </div>
          <button onClick={handleSaveBook}>Zapisz</button>
        </div>
      </div>
    </div>
  );
};
