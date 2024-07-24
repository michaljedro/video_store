import React from "react";
import { Link } from "react-router-dom";

const MovieTable = ({ movies }: any) => {
  return (
    <div>
      MovieTable
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No</th>
            <th className="border border-slate-600 rounded-md">Title</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Author
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Publish Year
            </th>
            <th className="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie: any, index: any) => (
            <tr key={movie._id}>
              <td>{index + 1}</td>
              <td>{movie.title}</td>
              <td>{movie.author}</td>
              <td>{movie.year}</td>
              <td>
                <div>
                  <Link to={`/books/details/${movie._id}`}>Info</Link>
                  <Link to={`/books/edit/${movie._id}`}>Edit</Link>
                  <Link to={`/books/delete/${movie._id}`}>Delete</Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
