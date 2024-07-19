import { useState } from "react";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteVideo = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
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
      <BackButton />
      <h1>Delete Book</h1>
      {loading ? <Loader /> : ""}
      <div>
        <h3>Are You Sure You want to delete this book?</h3>

        <button onClick={handleDeleteBook}>Yes, Delete it</button>
      </div>
    </div>
  );
};

export default DeleteVideo;
