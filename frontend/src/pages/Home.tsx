import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loading";

interface HomeProps {
  navigateTo: (page: "create" | "delete" | "edit" | "home" | "show") => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  const [books, setBooks] = useState<any[]>([]); // Stan do przechowywania danych książek
  const [loading, setLoading] = useState(true); // Stan do zarządzania ładowaniem

  useEffect(() => {
    axios
      .get("http://localhost:3000/movie")
      .then((response) => {
        setBooks(response.data.data); // Zakładając, że dane są w response.data.data
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Możesz tu użyć komponentu Loader
  }

  return (
    <>
      <div>
        <h1>Home Page</h1>
        <button onClick={() => navigateTo("create")}>Create</button>
        <button onClick={() => navigateTo("delete")}>Delete</button>
        <button onClick={() => navigateTo("edit")}>Edit</button>
        <button onClick={() => navigateTo("show")}>Show</button>
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Viedo List</h1>
        {loading ? (
          <Loader />
        ) : (
          <table>
            <thead>
              <tr>
                <th>number</th>
                <th>title</th>
                <th>author</th>
                <th>Publish year</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {books.map((movie, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{movie.title}</td>
                  <td>{movie.author}</td>
                  <td>{movie.year}</td>
                  <td>
                    <div>
                      <Link to={'/movie/details/${movie._id}'}>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Home;
