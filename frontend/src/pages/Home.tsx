import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Loader from "../components/Loading";

const Home: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/movie")
      .then((response) => {
        console.log(response.data);
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <h1>Home Page</h1>
        <button onClick={() => navigate("/create")}>Create</button>
        <button onClick={() => navigate("/delete")}>Delete</button>
        <button onClick={() => navigate("/edit")}>Edit</button>
        <button onClick={() => navigate("/show")}>Show</button>
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Video List</h1>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publish Year</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((movie, index) => (
              <tr key={movie._id}>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.author}</td>
                <td>{movie.year}</td>
                <td>
                  <div>
                    <Link to={`/movie/details/${movie._id}`}>Details</Link>
                    <Link to={`/movie/delete/${movie._id}`}>Delete</Link>
                    <Link to={`/movie/edit/${movie._id}`}>Edit</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
