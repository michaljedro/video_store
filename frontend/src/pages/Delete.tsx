import React, { useState } from "react";
import Loader from "../components/Loading";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export const Delete: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/movie/${id}`)
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
      <h1>Usuń film</h1>
      <button onClick={() => navigate("/")}>Powrót</button>
      {loading ? <Loader /> : ""}
      <div>
        <h3>usunąć ten film ?</h3>
        <button onClick={handleDeleteBook}>Tak, usuń film</button>
      </div>
    </div>
  );
};
